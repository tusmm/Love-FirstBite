import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import GridImageView from 'react-native-grid-image-viewer';
import { collection, query, where } from "firebase/firestore";


export function RScreen() {    

    // const restaurant = collection(db, "restaurant");
    // const q = query(restaurant, where("name", "==", "a"));
    // const urls = [];

    return (
        <View style={styles.background}>
            <Text style={styles.headline_text}>Grid View Images</Text>
            <Text style={styles.explore_text}>
                Click on an image to view in full screen mode
            </Text>
        
            {/* Basic Usage */}
            <GridImageView data={['https://2.bp.blogspot.com/-qJ59dC-eJXY/UP60HSObssI/AAAAAAAAARU/YQ87H_oVCfw/s1600/japanesefood.jpg',
             'https://www.recipestable.com/wp-content/uploads/2016/01/Asian-cuisine.jpg',
              'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.RWxHHdgNaidR3t5IX6hkmAHaE8%26pid%3DApi&f=1&ipt=474383ccc7a0f89ce816cb4d2f5a814c7f2786309e2011851db2147306ead5df&ipo=images',
               'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.RWxHHdgNaidR3t5IX6hkmAHaE8%26pid%3DApi&f=1&ipt=474383ccc7a0f89ce816cb4d2f5a814c7f2786309e2011851db2147306ead5df&ipo=images',
                'https://hgkg.ru/wp-content/uploads/2019/06/asia-food.jpg']} />
        </View>
    );

}

const styles = StyleSheet.create({
    background: {
      backgroundColor: 'white',
      flex: 1,
    },
    headline_text: {
      color: 'black',
      fontSize: 30,
      fontWeight: 'bold',
      marginTop: 50,
      marginLeft: 20,
    },
    explore_text: {
      marginTop: 5,
      marginBottom: 10,
      color: 'black',
      marginLeft: 20,
      fontSize: 12,
      fontWeight: '600',
    },
  });

