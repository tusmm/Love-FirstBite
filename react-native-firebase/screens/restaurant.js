import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import GridImageView from 'react-native-grid-image-viewer';
import PressGetter from "./swipescreen";

const Rest = (props) => {
  return (
    <View style={styles.words_background}>
      <Text style={styles.headline_text}>Foods for {props.name}</Text>
      <Text style={styles.explore_text}>
        Click on an image to view in full screen mode
      </Text>
    </View>
  );
}

const Gallery = (props) => {
  if (props.name == "dump house") {
    return(
      <View style={styles.background}>
        <Rest name={props.name} />
        {/* Basic Usage */}
        <GridImageView data={['https://d1ralsognjng37.cloudfront.net/d3e88525-2584-4a5b-b9e5-ae1ae1f5ad20.jpeg',
          'https://i.pinimg.com/originals/10/09/10/100910a730d679dd740d66ab7a2982fb.jpg',
          'https://dandenongmarket.com.au/assets/files/2018/06/DandenongMarket-SanSan1-1600x1066.jpg',
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.NdDn3mx7k2aYSw8rh9qdyAHaE8%26pid%3DApi&f=1&ipt=de19381d49599da2c0c941d9aff9a042857a6aeb4c516691d01e7fe9444c83de&ipo=images',
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Um2l8w0BdgHZSmYjF4ZqCAHaEq%26pid%3DApi&f=1&ipt=92079f0845a099ff8d29ec01965d54b57ba05adf7cab467dcb377e27a7d18085&ipo=images']} heightOfGridImage={300} />
      </View>
    );
  }
  if (props.name == "sushi pushi") {
    return(
      <View style={styles.background}>
        <Rest name={props.name} />
        {/* Basic Usage */}
        <GridImageView data={['http://www.trendmantra.com/wp-content/uploads/2016/03/article205_1.jpg',
          'https://cdn.shopify.com/s/files/1/2257/7809/articles/unnamed_b678cca6-c78e-46b0-97f8-50dbaea0d58e_1600x.jpg?v=1574307298',
          'http://www.readersdigest.ca/wp-content/uploads/2011/11/japanese-sushi-rolls.jpg',
          'https://facts.net/wp-content/uploads/2021/05/Set-of-sushi-and-maki.jpg',
          'https://www.onlyfoods.net/wp-content/uploads/2019/12/Temaki-Sushi.jpg']} heightOfGridImage={300}/>
      </View>
    );
  }
  // if this is vegan menu eewwww
  return(
    <View style={styles.background}>
      <Rest name={props.name} />
      {/* Basic Usage */}
      <GridImageView data={['https://vedicpaths.com/wp-content/uploads/2020/08/istock-955998758.jpg',
        'http://www.sacculturalhub.com/media/k2/items/cache/73ec26c1f322820506fbe471ff62e207_XL.jpg',
        'https://i.pinimg.com/originals/13/a1/34/13a1343b701cd161963bcb02a9914e79.jpg',
        'https://media1.popsugar-assets.com/files/thumbor/I0W_pwXqgFL4LHqWxf9Zyv_34wU/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/upl1/0/6066/19_2008/DSC06540/i/Lay-lettuce-flat-between-two-pieces-bread.jpg',
        'https://i.pinimg.com/originals/2d/6d/0b/2d6d0b4c450f52e235ba31853a5d8706.jpg']} heightOfGridImage={300} />
    </View>
  );
}


export function RScreen() {

    const receiveVal = (value) => {
      return(
          <Gallery name={value} />
      );
    };
    
    return (
        <PressGetter receiveVal={receiveVal} />
    );

}

const styles = StyleSheet.create({
    background: {
      backgroundColor: '#b67c7cff',
      flex: 1,
    },
    words_background: {
      backgroundColor: '#b67c7cff',
      flex: 0,
    },
    headline_text: {
      color: 'white',
      fontSize: 30,
      fontWeight: 'bold',
      marginTop: 50,
      marginLeft: 20,
    },
    explore_text: {
      marginTop: 5,
      marginBottom: 10,
      color: 'white',
      marginLeft: 20,
      fontSize: 15,
      fontWeight: '400',
    },
  });

