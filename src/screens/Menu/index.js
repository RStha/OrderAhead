import React, {Component} from 'react';
import {View, StyleSheet, Text, FlatList, TouchableOpacity, Image, Dimensions} from 'react-native';
import {fetchMenu} from './actions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import { createStackNavigator, createAppContainer } from 'react-navigation';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

/**
 * 1. Show list of menu 
*/ 
class Menu extends Component {

    // Is this needed or not? Use only if internally data required not when getting from other places
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       menu: []
    //     }
    // }

    componentDidMount(){
        //fetch menu from export
        console.log(this.props.route)
        this.props.fetchMenu(this.props.route)
    }

    pressHandler = (selectedCategory) => {
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
                style={styles.flatMap}
                ListFooterComponent={() => ( <View style={{ height: 100 }} /> )}
                numColumns={2}
                data={this.props.menu}
                renderItem={({item }) => {
                return (
                <View style={styles.item}>
                    <TouchableOpacity 
                    onPress= {() => this.pressHandler()}>
                    <Image 
                    source={{uri: `https://oa-data-sync-prod.flosolutions.net${item.image}`}}
                    style={styles.itemImage} />
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

// just for understanding the type and all
Menu.propTypes = {
    fetchMenu: PropTypes.func.isRequired, 
    menu: PropTypes.arrayOf(PropTypes.object)
}
//  things being used by this component
export default connect(
    state => ({
        menu: state.categories //store 
    }), 
    {fetchMenu} // action
)(Menu);


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        padding: 20,
        backgroundColor: 'gray'
    },
    flatMap: {
        
    },
    item: {
    //    backgroundColor: 'red' ,
       width: width/2 - 20,
       height: width/2,
       marginHorizontal: 10,
       margin: 20, 
    },
    itemImage: {
        width: width/2 - 20,
        height: width/2 - 20,
        resizeMode: 'center'
    },
    title: {
        textAlign: 'center'
    }

});