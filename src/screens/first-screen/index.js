import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, FlatList, ActivityIndicator } from 'react-native';
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

    const { cities, loadingCities } = useSelector((state) => state.appState);

    useEffect(() => {
        dispatch(getCitiesList());
    }, [])


    const onItemPress = (item) => {
        navigation.navigate('second-screen', { item: item })
    }

    return (
        <View style={styles.container}>
            {loadingCities && cities.length == 0 ? (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size={'large'} color={Colors.ui_primary} />
                </View>
            ) : (
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
            )}
        </View>
    );
};

export default FisrtScreen;
