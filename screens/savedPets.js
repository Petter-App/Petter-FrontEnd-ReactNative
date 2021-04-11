import React, { Component } from 'react';
import { Image, ImageBackground, Platform, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { Analytics } from 'aws-amplify';
import {AppLoading} from "expo";
import {useFonts,Raleway_200ExtraLight, Raleway_400Regular, Raleway_900Black} from "@expo-google-fonts/raleway";




Analytics.configure({ disabled: true })


const image = { uri: "https://storage.pixteller.com/designs/designs-images/2020-07-02/02/paws-placeholder-1-5efd20a15f0f0.png" };



export default function savedPets({ navigation }) {
let [fontsLoaded, error]= useFonts({ Raleway_200ExtraLight,});
 
if (!fontsLoaded){
return<AppLoading/>;
}
return (
    <View style={styles.container}>
     
      <ImageBackground source={image} style={styles.image}>
<ScrollView>
<View  style={styles.titleSavedContainer}>
<Image source={require('../assets/images/saved.png')} 
              style={styles.titleSaved} />

</View>
     <View style={styles.viewStyle}>
     <View>
        
        <LinearGradient colors={['#FF008A', '#FF4D00']} start={[0.3, 0.1]} style={styles.linearCircle}>
     
            <Image source={require('../assets/images/elton.jpg')} style={styles.childStyle1}/>
            </LinearGradient>
            </View>
        <View style={styles.childStyle}>

<View style={styles.childTitle}>
        <Text style={styles.petName}>elton_john</Text>
        </View>
        <View style={styles.childNavigate}>
<View>
        <TouchableOpacity onPress={() => navigation.push('petProfile')}>
          <Text style={styles.linkProfile}>Profile</Text>
          </TouchableOpacity>
      </View>
          <Text style={styles.linkAdopt}>Adopt</Text>
</View>
        </View>

        <View>
        
        <LinearGradient colors={['#FF008A', '#FF4D00']} start={[0.3, 0.1]} style={styles.linearCircle}>
     
            <Image source={require('../assets/images/elton.jpg')} style={styles.childStyle1}/>
            </LinearGradient>
            </View>
        <View style={styles.childStyle}>

<View style={styles.childTitle}>
        <Text style={styles.petName}>elton_john</Text>
        </View>
        <View style={styles.childNavigate}>
        <TouchableOpacity onPress={() => navigation.push('petProfile')}>

          <Text style={styles.linkProfile}>Profile</Text>
          </TouchableOpacity>

          <Text style={styles.linkAdopt}>Adopt</Text>
</View>
        </View>

        <View>
        
        <LinearGradient colors={['#FF008A', '#FF4D00']} start={[0.3, 0.1]} style={styles.linearCircle}>
     
            <Image source={require('../assets/images/elton.jpg')} style={styles.childStyle1}/>
            </LinearGradient>
            </View>
        <View style={styles.childStyle}>
        <View style={styles.childTitle}>
        <Text style={styles.petName}>elton_john</Text>
        </View>
        <View style={styles.childNavigate}>
        <TouchableOpacity onPress={() => navigation.push('petProfile')}>

          <Text style={styles.linkProfile}>Profile</Text>
          </TouchableOpacity>
          <Text style={styles.linkAdopt}>Adopt</Text>
</View>
</View>        
<View>
        
        <LinearGradient colors={['#FF008A', '#FF4D00']} start={[0.3, 0.1]} style={styles.linearCircle}>
     
            <Image source={require('../assets/images/elton.jpg')} style={styles.childStyle1}/>
            </LinearGradient>
            </View>
        <View style={styles.childStyle}>
        <View style={styles.childTitle}>
        <Text style={styles.petName}>elton_john</Text>
        </View>
        <View style={styles.childNavigate}>

        <TouchableOpacity onPress={() => navigation.push('petProfile')}>

          <Text style={styles.linkProfile}>Profile</Text>

</TouchableOpacity>
          <Text style={styles.linkAdopt}>Adopt</Text>
</View>
        </View>

        <View>
        
        <LinearGradient colors={['#FF008A', '#FF4D00']} start={[0.3, 0.1]} style={styles.linearCircle}>
     
            <Image source={require('../assets/images/elton.jpg')} style={styles.childStyle1}/>
            </LinearGradient>
            </View>
        <View style={styles.childStyle}>
        <View style={styles.childTitle}>
        <Text style={styles.petName}>elton_john</Text>
        </View>
        <View style={styles.childNavigate}>
        <TouchableOpacity onPress={() => navigation.push('petProfile')}>

          <Text style={styles.linkProfile}>Profile</Text>
</TouchableOpacity>
          <Text style={styles.linkAdopt}>Adopt</Text>
</View></View>

   <View>
        
   <LinearGradient colors={['#FF008A', '#FF4D00']} start={[0.3, 0.1]} style={styles.linearCircle}>

       <Image source={require('../assets/images/elton.jpg')} style={styles.childStyle1}/>
       </LinearGradient>
       </View>
      

        <View style={styles.childStyle}>
        <View style={styles.childTitle}>
        <Text style={styles.petName}>elton_john</Text>
        </View>
        <View style={styles.childNavigate}>

        <TouchableOpacity onPress={() => navigation.push('petProfile')}>

          <Text style={styles.linkProfile}>Profile</Text>
</TouchableOpacity>
          <Text style={styles.linkAdopt}>Adopt</Text>
</View>
        </View>

</View>

<View style={styles.buttonStyle}>
          <LinearGradient colors={['#FF008A', '#FF4D00']} start={[0.3, 0.1]} style={styles.linearGradient}>

            <TouchableOpacity style={styles.linearButton} onPress={() => navigation.push('PetsPublic')} >
              <Text style={styles.buttonText}>Find a Match</Text>
            </TouchableOpacity>
          </LinearGradient>


      </View>
</ScrollView>
<View style={styles.bottomView}>
<TouchableOpacity onPress={() => navigation.push('userProfile')}>
          <Image source={require('../assets/images/profile.png')} style={styles.childProfile}/>
          </TouchableOpacity>
          <Image source={require('../assets/images/home.png')} style={styles.childHome}/>


        </View>
      </ImageBackground>

    </View>

  );
}

const viewPadding = '5%'


const styles = StyleSheet.create(
  {
    container: {

      flex: 1,
      backgroundColor: '#fff',


    },
    title: {
      fontSize: 38,
      letterSpacing: -0.015,
      color: '#1F1815',
      fontWeight: 'bold',
      padding: viewPadding,
      marginTop: 45,
    },
    subTitle: {
      fontSize: 24,
      lineHeight: 27,
      color: '#000000',
      letterSpacing: -0.015,
    },
    tagline: {
      flexDirection: "row",
      padding: viewPadding
    },
    taglineText: {
      fontSize: 13,
      color: '#000000',
      letterSpacing: -0.015,
    },

    links: {
      alignItems: "center",
      padding: viewPadding,
    },
    linearButton: {
      padding: viewPadding,
    },

    login: {

      flex: 1,
      position: 'absolute',

      left: 2,
      right: 1,
      top: 18,
      bottom: 39,

      alignItems: 'flex-start',
      textAlign: 'center',

      color: '#1F1815',
      fontWeight: 'bold',

      fontSize: 13,
      lineHeight: 15,

      letterSpacing: 0.04,
      justifyContent: 'space-between',


    },

    register: {

      flex: 1,
      position: 'absolute',

      left: 2,
      right: 1,
      top: 18,
      bottom: 29,

      alignItems: 'flex-end',
      textAlign: 'center',
      justifyContent: 'space-between',

    },

    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },

    landingscreen: {
      alignSelf: 'stretch',
      justifyContent: 'center'


    },

    headerContainer: {

      width: '100%',
      height: '30%',

    },

    header: {

      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'stretch',
      alignSelf: 'center',

      position: 'absolute',

      left: 34,
      top: 65,

      paddingBottom: 10,
      marginTop: 80,

      fontSize: 38,
      letterSpacing: -0.015,
      color: '#1F1815',
      fontWeight: 'bold',

      textAlign: 'center',
      alignItems: 'center',
    },

    heading2Container: {
      width: '100%',

    },
    heading2: {

      flex: 2,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'stretch',

      alignSelf: 'center',
      position: 'absolute',

      left: 106,
      top: 40,
      marginTop: 20,


      fontSize: 24,
      lineHeight: 27,

      color: '#000000',

      letterSpacing: -0.015,
    },


    heading10Container: {
      width: '100%',

    },
    heading10: {

      flex: 2,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'stretch',

      alignSelf: 'center',
      position: 'absolute',

      left: 126,
      top: 280,
      marginTop: 20,


      fontSize: 13,
      lineHeight: 27,

      color: '#000000',

      letterSpacing: -0.015,
    },


    heading3Container: {
      width: '100%',
      height: '100%',
    },

    heading3: {

      flex: 1,
      fontSize: 13,
      color: '#000000',
      alignItems: 'stretch',
      justifyContent: 'center',

      left: -55.4,
      top: 270,

      marginTop: 0.2,
      marginLeft: 89,

    },

    footerContainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center',
      alignSelf: 'center',
      marginTop: 0,
      width: '100%',
      height: '100%',
    },

    heading4Container: {
      width: '100%',
      height: '100%',

    },

    heading4: {

      flex: 1,

      position: 'absolute',



      flex: 2,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'stretch',

      alignSelf: 'center',
      position: 'absolute',

      left: 106,
      top: 80,
      marginTop: 20,


      fontSize: 24,
      lineHeight: 27,

      color: '#000000',

      letterSpacing: -0.015,

    },


    contentContainer: {
      flex: 1,
      paddingTop: 30,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: (Platform.OS === 'ios') ? 20 : 0

    },

    petImageContainer: {

      flex: 1,
      position: 'absolute',


      marginLeft: 10,

      alignSelf: 'center',
      left: 3,



    },

    petImage: {
      left: 15,
      right: 80,
      bottom: 230,

      marginTop: 350,

      width: 70,
      height: 70,
      borderRadius: 70 / 2,

    },

    petsPageBodyContainer: {
      alignItems: 'center',
      marginHorizontal: 50,
    },
    petScreenFilename: {
      marginVertical: 7,
    },
    petsPageBodyText: {
      fontSize: 17,
      color: 'rgba(96,100,109, 1)',
      lineHeight: 24,
      textAlign: 'center',
    },

    tabBarInfoContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      ...Platform.select({
        ios: {
          shadowColor: 'black',
          shadowOffset: { width: 0, height: -3 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
        },
        android: {
          elevation: 20,
        },
      }),
      alignItems: 'center',
      backgroundColor: '#fbfbfb',
      paddingVertical: '0',
    },
    tabBarInfoText: {
      fontSize: 17,
      color: 'rgba(96,100,109, 1)',
      textAlign: 'center',
    },
    buttonContainer: {

      flex: 1,
      flexDirection: 'row',
      alignItems: 'stretch',
      justifyContent: 'center',
      position: 'absolute',
      alignSelf: 'center',


      width: '100%',
      height: '80%',


    },

    buttonText: {

      backgroundColor: 'transparent',
      fontSize: 18,
      color: '#FFFFFF',
      bottom: 19,

    },

  


    linearGradient: {
      flex:1,

      marginTop: 140,
      width: '60%',
      padding: 25,

      alignItems: 'center',
      borderRadius: 5,
      position: 'relative',
      alignSelf: 'center',


      width: 157,

      left: 10,
      right: 0,
      top: -100,

      width: 180,
      height: 50,

      paddingBottom: 10,

      shadowColor: 'black',
      shadowOpacity: 0.26,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 10,
      elevation: 3,
      backgroundColor: 'white',

      ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 1, height: 3 },
          shadowOpacity: 0.2,
        }
      })
    },

    viewStyle: {
      flex: 1,
      flexWrap: 'wrap',
      flexDirection: 'row',
    },
    childStyle: {
      marginTop: 40,
      width: '60%',
      height: 100,
      backgroundColor: 'white',
      left:40,
    
      borderRadius: 5,


      shadowColor: 'black',
      shadowOpacity: 0.26,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 10,
      elevation: 3,
      backgroundColor: 'white',

    },
    childStyle1: {


      marginTop: 3,
      left:3,



      width: 90,
      height: 90,
      borderRadius: 90 / 2,

      shadowColor: 'black',
      shadowOpacity: 0.26,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 10,
      elevation: 3,


    },
linearCircle:{

  marginTop: 20,
  height: 100,
  left:30,


  width: 95,
  height: 95,
  borderRadius: 95 / 2,

},
    titleSavedContainer:{
      justifyContent: 'center',
      alignItems: 'center',
    },

    titleSaved: {
      marginTop:100,

    },

    childTitle:{
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
      fontSize:40,
      
    },
    bottomView: {
      width: '100%',
      height: 60,
      backgroundColor: '#FFFFFF',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: 0,
      borderColor:'white',
      borderWidth: 4,
      borderRadius:5,
      

      shadowOpacity: 0.80,
      shadowOffset: { width: 0, height: 4 },
      shadowRadius: 16,
      elevation: 5,
      backgroundColor: 'white',

      flex: 1,
      flexDirection: 'row',


    },

childProfile:{
  justifyContent:'center',
  width: 80,

},


childHome:{
  justifyContent:'center',
  height: 35,
  width:35,
},

childNavigate:{

  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
  flexDirection: 'row',
  

},

linkProfile:{
  margin:20,
  top:-10,
  fontWeight: "bold",
  fontSize:18,


},

linkAdopt:{

  top:-10,
  margin:20,
  color:'#FF008A',
  fontSize:18,





},

petName:{
  fontSize:20,
  fontFamily: "Raleway_200ExtraLight",
},


  });