import React, {Component} from 'react';
import {View, Text, Picker, Image, Dimensions, TouchableOpacity, StyleSheet} from 'react-native';
import DropDownFlatList from '../screens/DropDownFlatList';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const airportArray = [
    {id: '1', title: 'LaGuardia Airport (LGA)', terminals: ['Terminal C', 'Terminal D']},
    {id: '2', title: 'John F. Kennedy International Airport (JFK)', terminals: ['Terminal 2', 'Terminal 5']},
    {id: '3', title: 'Newark Liberty International Airport (EWR)', terminals: ['Concourse 1 (Gates 70-99)', 'Concourse 2 (Gates 101-115)', 'Concourse 3 (Gates 120-139)']}
];

class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
          airport: '',
          terminalArray: [],
          terminal: '', 
          showDropDownA: false,
          showTerminalDropDown: false
        }
    }
    
    _toggleAirportShow = () => {
        this.setState({showDropDownA: !this.state.showDropDownA})
        this.setState({showTerminalDropDown: false})
      }

      _toggleTerminalShow = () => {
        this.setState({showTerminalDropDown: !this.state.showTerminalDropDown})
        this.setState({showDropDownA: false})
      }

      updateAirport = (selectedAirport) => {
          this.setState({showDropDownA: false})
          this.setState({airport: selectedAirport.title})
          this.setState({terminalArray: selectedAirport.terminals})
          this.setState({showTerminal: true})
          this.setState({terminal: ''})
      }

      updateTerminal = (selectedTerminal) => {
        this.setState({showTerminalDropDown: false})
        this.setState({terminal: selectedTerminal})
    }

    browseMenu = () => {
    }

    render() {

    var data = [];
        return (
            <View 
            style={styles.container}>
                <Image 
                source={require('../assets/images/header.png')}
                style={{width: width,
                    height: height/5,
                    resizeMode: 'stretch'
                }} />
                <Image 
                source={require('../assets/images/steps.png')}
                style={{width: width,
                    height: height/8,
                    resizeMode: 'center'
                }} />
                <View style= {styles.selectionView}>
                    <Text style={{fontSize: 12,
                        fontStyle: 'normal',
                        color: '#737373',
                        paddingLeft: 20}}>
                    Choose Airport
                    </Text>
                    <TouchableOpacity 
                    onPress={this._toggleAirportShow}
                    style= {styles.button}>
                        <Text style={styles.title}>
                            {this.state.airport}
                        </Text>
                    </TouchableOpacity>
                    {this.state.showDropDownA && 
                    <DropDownFlatList 
                    array={airportArray} 
                    updateValue = {this.updateAirport}/>}
                    {this.state.showTerminal &&
                        <TouchableOpacity 
                        onPress={this._toggleTerminalShow}
                        style= {styles.button}>
                            <Text style={styles.title}>
                                {this.state.terminal}
                            </Text>
                        </TouchableOpacity>
                    }
                    {this.state.showTerminalDropDown && 
                    <DropDownFlatList 
                    array={this.state.terminalArray} 
                    updateValue = {this.updateTerminal}/>}
                </View>
                <TouchableOpacity 
                onPress= {this.browseMenu} >
                    <Text style={styles.browseButton}>
                        Browse Menu
                    </Text>
                </TouchableOpacity>
            </View>
          );
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    button: {
        height: height/17,
        marginTop: 10,
        marginLeft: 15, 
        marginRight: 15,
        padding: 4,
        borderColor: '#cccccc',
        borderWidth: 1,
        borderRadius: 3
    },
    title: {
      fontSize: 12,
      marginHorizontal: 5,
    },
    selectionView: {
        paddingTop: 10,
        paddingBottom: 20,
        borderColor: 'lightgrey',
        borderWidth: 1
    },
    browseButton: {
        marginTop: 20,
        color: 'white',
        textAlign: "center",
        backgroundColor: '#33CC66',
        paddingTop: 10,
        paddingBottom: 10,
        width: width/2, 
        alignSelf: 'center'
    },
  });
