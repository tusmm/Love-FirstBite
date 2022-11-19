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
export class MultiSelectExample extends Component {

        state = {
          selectedItems : []
        };
      
        
        onSelectedItemsChange = selectedItems => {
          this.setState({ selectedItems });
        };
      
        render() {
          const { selectedItems } = this.state;
      
          return (
            <View style={{ flex: 1 }}>
              <MultiSelect
                hideTags
                items={items}
                uniqueKey="id"
                ref={(component) => { this.multiSelect = component }}
                onSelectedItemsChange={this.onSelectedItemsChange}
              />
            </View>
          );
        }
    }