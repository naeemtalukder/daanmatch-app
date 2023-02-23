import { View, Text, Animated } from 'react-native';
import React from 'react';

const colors ={primary: '#000033', secondaryDark:'#044B55', secondary:'#F2F2E6', prompt: '#FFFFFF'};

export default function Login() {
  return (
    <Animated.View style={{
      position: 'relative',
      flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
  }}>
     <Animated.Text style={{
                  
                  fontSize: 25,
                  fontWeight: 'bold',
                  color: colors.secondary,
                  // transform: [
                  //     { translateY: moveTitle.y },
                  //     { scale: scaleTitle }
                  // ]
              }}>Chatty</Animated.Text>
    </Animated.View>
  )
}