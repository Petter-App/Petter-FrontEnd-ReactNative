import React from "react";
import { Text, Image,TouchableOpacity, StyleSheet,View, ImageBackground } from "react-native";
import Swiper from "react-native-web-swiper";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ImageResizeMode from 'react-native/Libraries/Image/ImageResizeMode'
import EStyleSheet from 'react-native-extended-stylesheet';


const image = { uri: "https://storage.pixteller.com/designs/designs-images/2020-07-02/02/paws-placeholder-1-5efd20a15f0f0.png" };


export default class PublicBrowse extends React.Component {
    render() {
        return (
          <View style={{flex:1}}>
              <View style={{flex:1}}>
              <ImageBackground source={image} style={styles.image}>
                    <Swiper
                    from={1}
                    minDistanceForAction={0.1}
                    controlsProps={{
                      prevPos: 'left',
                      nextPos: 'right',
                      nextTitle: '>',
                      nextTitleStyle: { color: 'red', fontSize: 24, fontWeight: '500' },
                      PrevComponent: ({ onPress }) => (
                        <TouchableOpacity onPress={onPress}>
                          <Text style={{ color: 'white', fontSize: 24, fontWeight: '500' }}>
                            {'<'}
                          </Text>
                        </TouchableOpacity>
                      ),
                      cellsContent: {
                        'bottom': <Image source={require('../assets/images/heart.png')}
                        />,
                        'bottom-right':<Image
                        source={require('../assets/images/heart.png')}
                        style={styles.petImage}
                      />,
                        'bottom': <Image source={require('../assets/images/bottomslide.png')}
                        /> ,
                        'top': <Image source={require('../assets/images/slidetop.png')}
                        /> ,

                      },
                      
                    }}
                  >


                      <View style={{flex:1,alignItems:"center",justifyContent:"center", width: 400,
    height: 420}}>
                      <Image
            source={require('../assets/images/budd.jpg')}
            style={styles.seniorpetimage}
          />

                      </View>
                      <View style={{flex:1,alignItems:"center",justifyContent:"center", width: 400,
    height: 420}}>
                      
                      <Image
            source={require('../assets/images/tank.jpg')}
            style={styles.seniorpetimage}
          />
                        
                      </View>
                      <View style={{flex:1,alignItems:"center",justifyContent:"center", width: 400,
    height: 420}}>
                      <Image
            source={require('../assets/images/zeus.jpg')}
            style={styles.seniorpetimage}
          />              

                      </View>
                  </Swiper>
                  </ImageBackground>

              </View>
</View>
        )
    }
}


const styles = StyleSheet.create(
  {
    container: {

      flex: 1,
      backgroundColor: '#fff', 
  
  
    },

    linkContainer: {
  flex:1,
  flexDirection:'row',
  marginTop: 5,
  alignItems: 'center',
  alignContent:'center',
  justifyContent:'space-between',
  position:'absolute',
  width:'80%', 
  height:'85%',
  alignSelf:'center',},
  
  seniorpetimage:{
    width: '100%',
    height: '100%',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  petImage: {
    left: 15,
    right: 80,
    bottom: 200,

    marginTop: 350,

    width: 70,
    height: 70,
    borderRadius: 70 / 2,

  },

});