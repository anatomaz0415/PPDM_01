import React from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

export default function Splash({finalizou}){
    return(
        <View style={styles.tela}>
            <LottieView
            source={require('./factory.json')}
            autoPlay
            loop={false} 
            onAnimationFinish={finalizou}
            style={{width: 300, height: 350, alignSelf: 'center'}}
            >

            </LottieView>
    
        </View>
    )
}

const styles = StyleSheet.create({
    tela:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    }
})
