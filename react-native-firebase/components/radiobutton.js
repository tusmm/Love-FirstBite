import React, { Component, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, RadioButton, Text } from 'react-native-paper';

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

function Radio({getValueRadio}){
    const [value, setValue] = useState('first');

    function event(newValue) {
        setValue(newValue)
        getValueRadio(newValue)
    }

    return (
        <View style={{flexDirection:"row"}}>
        <RadioButton.Group onValueChange={ value => event(value)} value={value}>
            <RadioButton.Item label="$" labelStyle={styles.label} color="#580000ff" value="first" />
            <RadioButton.Item label="$$" labelStyle={styles.label} color="#580000ff" value="second" />
            <RadioButton.Item label="$$$" labelStyle={styles.label} color="#580000ff" value="third" />
            <RadioButton.Item label="$$$$" labelStyle={styles.label} color="#580000ff" value="fourth" />
        </RadioButton.Group></View>
    );
};

const styles = StyleSheet.create({
    label: {
        fontSize: 14
    }
}

)

export default Radio;
export var value;