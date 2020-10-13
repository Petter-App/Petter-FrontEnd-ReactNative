import React from "react";
import { Text, TouchableOpacity, StyleSheet,View } from "react-native";
import Swiper from "react-native-web-swiper";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class PublicBrowse extends React.Component {
    render() {
        return (
          <View style={{flex:1}}>
              <View style={{flex:1}}>
              <View style={styles.linkContainer}>
          <TouchableOpacity style={styles.login}>
            <Text style={styles.linkText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.linkContainer}>
          <TouchableOpacity  style={styles.register}>
            <Text style={styles.linkText}>REGISTER</Text>
          </TouchableOpacity>
        </View>
                  <Swiper
                    from={1}
                    minDistanceForAction={0.1}
                    controlsProps={{
                      dotsTouchable: true,
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
                    }}
                  >


                      <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"rgba(20,20,200,0.3)"}}>
                          <Text>Slide 1</Text>
                      </View>
                      <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"rgba(20,200,20,0.3)"}}>
                          <Text>Slide 2</Text>
                      </View>
                      <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"rgba(200,20,20,0.3)"}}>
                          <Text>Slide 3</Text>
                      </View>
                  </Swiper>
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
  alignSelf:'center',}

});