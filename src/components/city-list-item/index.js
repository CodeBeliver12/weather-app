import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { getTempratureFromKelvinToCelsius } from '../../utils/functions';
import styles from './style';

export default function CityListItem({ item, onPress }) {

    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.container}>
            <View style={{ flex: 1 }}>
                <Text style={styles.title}>{item.name}</Text>
                {item.weather && item.weather.length > 0 && (
                    <Text>{item.weather[0].main}</Text>
                )}
            </View>
            <Text style={styles.temperature}>{`${getTempratureFromKelvinToCelsius(item.main.temp)}`}</Text>
        </TouchableOpacity>
    )
}