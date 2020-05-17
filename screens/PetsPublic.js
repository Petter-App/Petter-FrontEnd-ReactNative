import React, { Component } from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import Slideshow from 'react-native-slideshow';


export default function PetsPublic() {
    return (
        <View style={styles.MainContainer}>
 
        <Slideshow
          dataSource={this.state.dataSource}
          position={this.state.position}
          onPositionChanged={position => this.setState({ position })}
           />
 
      </View>
    );
  }


constructor();{
 
    super();
 
    this.state = {
      position: 1,
      interval: null,
      dataSource: [
        {
          title: 'Title 1',
          caption: 'Caption 1',
          url: 'https://reactnativecode.000webhostapp.com/images/dahlia-red-blossom-bloom-60597.jpeg',
        }, {
          title: 'Title 2',
          caption: 'Caption 2',
          url: 'https://reactnativecode.000webhostapp.com/images/flower-impala-lily-floral-plant-65653.jpeg',
        }, {
          title: 'Title 3',
          caption: 'Caption 3',
          url: 'https://reactnativecode.000webhostapp.com/images/flowers-background-butterflies-beautiful-87452.jpeg',
        },
      ],
    };
 
  }


 componentWillMount();{
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
        });
      }, 5000)
    });
  }

  componentWillUnmount(); {
    clearInterval(this.state.interval);
  }


const styles = StyleSheet.create({
 
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
    backgroundColor: '#FFF8E1'
 
  }
 
});