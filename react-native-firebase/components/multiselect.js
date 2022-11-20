import React, { Component } from 'react';
import { View } from 'react-native';
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
                    styleDropdownMenu = {{elevation: -1, zIndex:1}}
                    items={items}
                    uniqueKey="id"
                    ref={(component) => { this.multiSelect = component }}
                    onSelectedItemsChange={this.onSelectedItemsChange}
                    selectedItems={selectedItems}
                    selectText="Pick Items"
                    searchInputPlaceholderText="Search Items..."
                    onChangeInput={(text) => console.log(text)}
                    tagRemoveIconColor="#CCC"
                    tagBorderColor="#CCC"
                    tagTextColor="#CCC"
                    selectedItemTextColor="#b67c7cff"
                    selectedItemIconColor="#CCC"
                    itemTextColor="#000"
                    displayKey="name"
                    searchInputStyle={{ color: '#CCC' }}
                    submitButtonColor="#a59da4"
                    submitButtonText="Submit"
                />
            </View>
        );
    }
}