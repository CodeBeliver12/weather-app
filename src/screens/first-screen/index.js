import React, { useEffect, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { Button } from '../../components';
import { Colors } from '../../constants';
import { client } from '../../services/api-service';
import styles from './style';

const FisrtScreen = (props) => {

    useEffect(() => {

    }, [])

    const { navigation } = props;
    return (
        <View style={styles.container}>
            <Text>{"First Screen"}</Text>
        </View>
    );
};

export default FisrtScreen;
