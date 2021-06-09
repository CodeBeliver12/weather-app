import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { Button, CityListItem } from '../../components';
import { Colors } from '../../constants';
import { client } from '../../services/api-service';
import styles from './style';
import { useDispatch } from 'react-redux';
import { getCitiesList } from '../../redux/actions/app-actions';
import { useSelector } from 'react-redux';

const FisrtScreen = (props) => {

    const { navigation } = props;
    const dispatch = useDispatch();

    const { cities } = useSelector((state) => state.appState);

    useEffect(() => {
        dispatch(getCitiesList());
    }, [])


    const onItemPress = (item) => {
        navigation.navigate('second-screen', { item: item })
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={cities}
                renderItem={({ item, index }) => {
                    return <CityListItem
                        key={String(index)}
                        item={item}
                        onPress={() => onItemPress(item)} />
                }}
                contentContainerStyle={{ flexGrow: 1 }}
                keyExtractor={(item, index) => String(index)}
            />
        </View>
    );
};

export default FisrtScreen;
