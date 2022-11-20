import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { firebase } from '../../src/firebase/config'
import { collection, doc, setDoc } from "firebase/firestore"; 


// export default function MatchScreen({navigation}){

//     const userPref = collection(db, "userPref");

//     const numSwipesMet = (props) => {
//         return(
            
//         );
//     }


// }