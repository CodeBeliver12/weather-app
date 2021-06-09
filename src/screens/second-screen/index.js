import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, SafeAreaView, Image } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import { Colors } from '../../constants';
import { client } from '../../services/api-service';
import { getTempratureFromKelvinToCelsius } from '../../utils/functions';
import styles from './style';

const SecondScreen = (props) => {

    const { params } = props.route;

    const initRegion = {
        latitude: params.item.coord.lat,
        longitude: params.item.coord.lon,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }

    const [initialRegion, setInitialRegion] = useState(initRegion);

    const onRegionChange = (region) => {
        console.log("onRegionChange", region)
        // setInitialRegion(region)
    }

    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.mapView}
                initialRegion={initialRegion}
                zoomEnabled={true}
                mapRegion={initialRegion}
                onRegionChange={onRegionChange}>
                <Marker
                    coordinate={{ latitude: initialRegion.latitude, longitude: initialRegion.longitude }}
                />
            </MapView>
            <View style={styles.bottomCardContainer}>
                <View style={{ flex: 1, padding: 15, justifyContent: 'space-evenly' }}>
                    <Text style={styles.city}>{params.item.name}</Text>
                    {params.item.weather && params.item.weather.length > 0 && (
                        <Text style={styles.description}>{params.item.weather[0].main}</Text>
                    )}
                    <Text style={styles.description}>{`Humidity: ${params.item.main.humidity}`}</Text>
                    <Text style={styles.description}>{`Wind Speed: ${params.item.wind.speed}`}</Text>
                    <Text style={styles.description}>{`Max. Temp: ${getTempratureFromKelvinToCelsius(params.item.main.temp_max)}`}</Text>
                    <Text style={styles.description}>{`Min. Temp: ${getTempratureFromKelvinToCelsius(params.item.main.temp_min)}`}</Text>
                </View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={styles.temperature}>{`${getTempratureFromKelvinToCelsius(params.item.main.temp)}`}</Text>
                    <Image style={styles.cloudImage} source={{ uri: 'https://weather.sumofus.org/static/weather-images/carousel/heavy-clouds.png' }} />
                </View>
            </View>
        </View>
    );
};

export default SecondScreen;
