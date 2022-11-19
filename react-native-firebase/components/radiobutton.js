import React, { Component, useState } from 'react';
import { View } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';

const items = [{
    id: "011",
    name: "$"
}, {
    id: "012",
    name: "$$"
}, {
    id: "013",
    name: "$$$"
}, {
    id: "044",
    name: "$$$$"
}]



const Radio = () => {
    const [value, setValue] = useState('first');

    return (
        <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
            <View>
                <Text>First</Text>
                <RadioButton value="first" />
            </View>
            <View>
                <Text>Second</Text>
                <RadioButton value="second" />
            </View>
            <View>
                <Text>Third</Text>
                <RadioButton value="third" />
            </View>
            <View>
                <Text>Fourth</Text>
                <RadioButton value="fourth" />
            </View>
        </RadioButton.Group>
    );
};

export default Radio;