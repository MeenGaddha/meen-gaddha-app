import { StyleSheet, Animated, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'

import IllustrationMulti from '../../../assets/images/Illustration_Multi.svg';
import MeenGaddhaLogo from '../../../assets/images/Meen_Gaddha_logo.svg';

const SplashScreen = ({ navigation }) => {
    const fadeAnimImages = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.sequence([
            Animated.timing(fadeAnimImages, {
                toValue: 1,
                duration: 100,
                useNativeDriver: true,
            }),
            Animated.delay(1000),
            Animated.timing(fadeAnimImages, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true
            })
        ]).start(() => {
            navigation.replace('GameInstructions1');
        })
    }, []);
    return (
        <Animated.View style={{ flex: 1, opacity: fadeAnimImages, alignItems: "center", justifyContent: "center", flexDirection: "row", backgroundColor: "#F4F4F4" }}>
            <MeenGaddhaLogo width={scale(200)} height={verticalScale(130)} style={{ marginTop: verticalScale(50),marginRight: -scale(45) }} />
            <IllustrationMulti width={scale(210)} height={verticalScale(190)} />

        </Animated.View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({

})
// zustand بدل usecontext
/*
كيف نخلي البرنامج يدعم لغتين + جهتين
*/