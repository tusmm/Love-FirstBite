import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import items from '../data/cuisines';

export class MultiSelectFoods extends Component {
    constructor(props){
        super(props);
    }
    state = {
        selectedItems: []
    };

    getValue(value){
        console.log("value")
        console.log(value)
        this.props.getValue(value)
    }

    onSelectedItemsChange = (selectedItems) => {
        this.setState({ selectedItems });
        var item = []
        selectedItems.forEach(function(number){
            item.push(number)
        });
        this.props.getValue(item)
    };

    render() {
        const { selectedItems } = this.state;

        return (
            <View style={{ width: 200, height: 50, elevation: 1, zIndex:1}}>
                <MultiSelect
                    hideTags
                    styleDropdownMenu = {styles.dropdown}
                    styleDropdownMenuSubsection = {styles.dropdownInner}
                    styleSelectorContainer = {styles.selectContainer}
                    styleInputGroup ={styles.inputGroup}
                    styleListContainer = {styles.textDropdown}
                    styleItemsContainer = {styles.inputContainer}
                    styleTextDropdown = {{marginLeft:25}}
                    styleTextDropdownSelected = {{marginLeft:25}}
                    items={items}
                    uniqueKey="id"
                    ref={(component) => { this.multiSelect = component }}
                    onSelectedItemsChange={this.onSelectedItemsChange}
                    selectedItems={selectedItems}
                    selectText="Pick Items"
                    searchInputPlaceholderText="Search Items..."
                    onChangeInput={(text) => console.log(text)}
                    tagRemoveIconColor="#fcebe8"
                    tagBorderColor="#CCC"
                    tagTextColor="#CCC"
                    selectedItemTextColor="#b67c7c"
                    selectedItemIconColor="#580000"
                    itemTextColor="#580000"
                    displayKey="name"
                    searchInputStyle={{ color: '#fcebe8' }}
                    submitButtonColor="#a59da4"
                    submitButtonText="Submit"
                />
            </View>
        );
    }
} 
const styles = StyleSheet.create({
    dropdown: {
        elevation: -1, 
        zIndex:1, 
        backgroundColor:"#fff6f6", 
        borderRadius:2
    },
    dropdownInner: {
        backgroundColor:"#fff6f6", 
        borderRadius:2,
        width:200
    },
    selectContainer: {
        backgroundColor:"#fff6f6", 
    }, 
    inputGroup: {
        height:35,
        backgroundColor:"#fff6f6",
    },
    itemsContainer: {
        backgroundColor:"#fff6f6",
    },
    textDropdown:{
        backgroundColor:"#fcebe8",
    }

}); 