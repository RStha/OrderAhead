import React, {Component} from 'react';
import {View, FlatList, StyleSheet, TouchableOpacity, Alert, Text} from 'react-native';

class DropDownFlatList extends Component{

 pressHandler = (selected) => {
    this.props.updateValue(selected) 
}

//  Item({ title }) {
//     return (
//       <View style={styles.item}>
//           <TouchableOpacity onPress= {() => pressHandler(title)}>
//               <Text style={styles.title}>{title}</Text>
//             </TouchableOpacity>

//       </View>
//     );
//   }

  render() {
    return (
        <View 
        style= {styles.container}>
            <FlatList
                data={this.props.array}
                renderItem={({item }) => {
                    return (
                        <View style={styles.item}>
                        <TouchableOpacity 
                        onPress= {() => this.pressHandler(item)}>
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
    )
  }
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15, 
        marginRight: 15,
        marginTop: 5,
        borderColor: 'gray',
        borderRadius: 3,
        borderWidth: 0.5, 
        paddingTop: 3,
        paddingBottom: 3
    },
    item: {
    //   backgroundColor: '#f9c2ff',
        padding: 4
    },
    title: {
      fontSize: 12,
      marginHorizontal: 16,
      color: 'gray'
    },
  });
  
  export default DropDownFlatList;