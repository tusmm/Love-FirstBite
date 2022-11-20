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

function Radio({ getValueRadio }) {
    const [value, setValue] = useState('first');

    function event(newValue) {
        setValue(newValue)
        getValueRadio(newValue)
    }

    return (
        <RadioButton.Group onValueChange={value => event(value)} value={value} style={{ flexDirection: 'row' }}>
            <View style={{ flexDirection: "row", marginTop:10 }}>
                <View style={styles.radio}>
                    <Text style={styles.label}>$</Text>
                    <View style={styles.button}>
                        <RadioButton color="#580000ff" value="first"/>
                    </View>
                </View>
                <View style={styles.radio}>
                    <Text style={styles.label}>$$</Text>
                    <View style={styles.button}>
                    <RadioButton color="#580000ff" value="second" />
                    </View>
                </View>
                <View style={styles.radio}>
                
                    <Text style={styles.label}>$$$</Text>
                    <View style={styles.button}>
                    <RadioButton color="#580000ff" value="third" />
                    </View>
                </View>
                <View style={styles.radio}>
                    <Text style={styles.label}>$$$$</Text>
                    <View style={styles.button}>
                    <RadioButton color="#580000ff" value="fourth" />
                    </View>
                </View>
            </View>
        </RadioButton.Group>
    );
};

const styles = StyleSheet.create({
    label: {
        fontSize: 20,
        color: '#1f0404',
        textAlign:'center'
    },

    radio: {
        alignContent:'center', 
        justifyContent:'center',
        textAlign:'center',
        width:70, 
    },

    button: {
        alignContent:'center',
        width:40,
        marginLeft: 15
    }
}

)

export default Radio;
export var value;