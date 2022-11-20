import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { firebase } from '../../src/firebase/config'
import { collection, doc, setDoc, where } from "firebase/firestore"; 

const rightSwipes = []

export default function MatchScreen({navigation}){

    // const q = []
    // for(i = 0; i++, i < rightSwipes.length;){
    //     const currentCall = (collection("restaurants"), where("name", "==", rightSwipes[i]))
    //     firebase.firestore().currentCall.get().then((querySnapshot) => {
    //         querySnapshot.forEach((doc) => {
    //             q.push(new rest(doc.id, doc.data().name, doc.data().imgarray[1]));
    //         });
    //     });
    // }
    function randNum() {
        return Math.floor(Math.random() * (3));
    }

    navigation.navigate('Results');
    
}    

export function getChosen(){
    return rightSwipes[randNum];
}

export function numSwipesMet(props){
    rightSwipes = props.rightSwipes;
    navigation.navigate('Match');
}