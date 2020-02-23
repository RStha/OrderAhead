import React, {Component} from 'react';
import {View, StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native';
import {fetchMenu} from './actions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'

/**
 * 1. Show list of menu 
*/ 
class Menu extends Component {

    // Is this needed or not?
    constructor(props) {
        super(props);
        this.state = {
        //   menu: []
        }
    }

    componentDidMount(){
        this.props.fetchMenu()
    }

    render() {
        return (
        <View style={styles.container}>
            <View style={styles.header}>
            <Text>
                Offers French classics such as onion gratin soup, Croque Monsieu and tuna niçoise salad. The entire menu is offered to-go.
            </Text>
            </View>
            <View>
                <FlatList
                data={this.props.menu.categoriesArray}
                renderItem={({item }) => {
                return (
                <View style={styles.item}>
                    <TouchableOpacity 
                    onPress= {() => this.pressHandler(item)}>
                    <Image 
                    source={{uri: 'https://oa-data-sync-prod.flosolutions.net//images/jfk-t2/media_11192.jpg'}}
                    style={{width: width,
                    height: height/8,
                    resizeMode: 'center'
                    }} />
                        <Text style={styles.title}>
                            {item.title ? item.title : item}
                        </Text>
                    </TouchableOpacity>
                </View>
                );
                }}
                keyExtractor={(item) => item.id} >
                </FlatList>
            </View>
        </View>
        )
    }
}

// Why this

Menu.propTypes = {
    fetchMenu: PropTypes.func.isRequired, 
    menu: PropTypes.arrayOf(PropTypes.object)
}

export default connect(
    state => ({
        menu: menu
    }), 
    {fetchMenu}
)(Menu);


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        padding: 20,
        backgroundColor: 'gray'
    },
    item: {
       backgroundColor: 'red' 
    }
});