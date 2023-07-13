import { View, Text, ImageBackground } from 'react-native'
import React from 'react'

const CredCard = () => {

    const image = require('../../../assets/card-front.png');

    return (
        
        <ImageBackground source={image} style={{ width: '100%', height: '70%'}}
            resizeMode="cover">
            <View style={{ height: 45, justifyContent: 'center', alignItems: 'center' }}>
               <View>
                <Text>
                    testee
                </Text>
               </View>
            </View>
        </ImageBackground>
    )
}

export default CredCard;