import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, SafeAreaView } from 'react-native';
import OrderItem from '../../components/order-item';
import { Colors } from '../../constants';
import { client } from '../../services/api-service';
import styles from './style';

const SecondScreen = (props) => {

    const [orders, setOrders] = useState([]);
    const [loadingOrders, setLoadingOrders] = useState(true);

    useEffect(() => {
        new Promise(function (resolve, reject) {
            client.post(`/customapi/pending`)
                .then((response) => {
                    setLoadingOrders(false)
                    let parsed_response = JSON.parse(response.data);
                    console.log("parsed_response", parsed_response)
                    if (parsed_response.success) {
                        setOrders(parsed_response.data.order_data);
                    }
                })
                .catch((err) => {
                    setLoadingOrders(false)
                    console.log("err", err)
                });
        })

    }, [])

    return (
        <View style={styles.container}>
            <SafeAreaView />
            {loadingOrders ? (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator size={'large'} color={Colors.ui_black} />
                </View>
            ) : (
                <FlatList
                    data={orders}
                    contentContainerStyle={{ flexGrow: 1, padding: 20 }}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <OrderItem key={String(index)} item={item} />
                    )}
                    keyExtractor={(item, index) => String(index)}
                    ListEmptyComponent={
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Text>{"No orders available!"}</Text>
                        </View>}
                />
            )}
        </View>
    );
};

export default SecondScreen;
