import React, { Component } from 'react';
import { View } from 'react-native';
import MultiSelect from 'react-native-multiple-select';
const items = [{
    id: "001", 
    name: "American"
  }, {
    id: "002", 
    name: "Chinese"
  }, { 
    id: "003",
    name: "Korean"
  }, {
    id: "004",
    name: "Japanese"
  }]
  
export class MultiSelectFoods extends Component {

        state = {
          selectedItems : []
        };
    
        onSelectedItemsChange = (selectedItems) => {
          this.setState({ selectedItems });
          console.log('Selected Items: ', selectedItems);
        };
      
        render() {
          const { selectedItems } = this.state;
      
          return (
            <View style={{ width: 200, height:200 }}>
               <MultiSelect
          hideTags
          items={items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          selectText="Pick Items"
          searchInputPlaceholderText="Search Items..."
          onChangeInput={ (text)=> console.log(text)}
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          displayKey="name"
          searchInputStyle={{ color: '#CCC' }}
          submitButtonColor="#CCC"
          submitButtonText="Submit"
        />
            </View>
          );
        }
    }