import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { Button } from '../../components';
import { Colors } from '../../constants';
import { client } from '../../services/api-service';
import styles from './style';

const FisrtScreen = (props) => {

    const { navigation } = props;

    const [userName, setUserName] = useState('');
    const [userNameError, setUserNameError] = useState(null);
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(null);

    const [loading, setLoading] = useState(false);

    const onLoginPress = () => {
        let isValid = true;

        if (userName.trim() == '') {
            isValid = false;
            setUserNameError("Please enter username");
        } else {
            setUserNameError(null);
        }

        if (password.trim() == '') {
            isValid = false
            setPasswordError("Please enter password");
        } else {
            setPasswordError(null);
        }

        if (isValid) {
            let requestData = {
                username: userName,
                password: password
            }
            setLoading(true);
            client.post(`/integration/admin/token`, requestData)
                .then((response) => {
                    AsyncStorage.setItem('token', response.data);
                    navigation.navigate('second-screen');
                    setLoading(false);
                })
                .catch((err) => {
                    setLoading(false);
                    console.log("err", err);
                });
        }
    }

    return (
        <View style={styles.container}>
            <Text style={[styles.inputLabel,
            { color: userNameError ? Colors.ui_error : Colors.ui_black }
            ]}>{"Username"}</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder={""}
                    value={userName}
                    keyboardType={'email-address'}
                    onChangeText={text => setUserName(text)}
                    autoCapitalize={'none'}
                // underlineColorAndroid={userNameError ? Colors.ui_error : Colors.ui_black}
                />
            </View>
            {userNameError && (
                <Text style={styles.errorText}>{userNameError}</Text>
            )}

            <Text style={[styles.inputLabel,
            { color: passwordError ? Colors.ui_error : Colors.ui_black }
            ]}>{"Password"}</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder={""}
                    value={password}
                    keyboardType={'email-address'}
                    secureTextEntry={true}
                    onChangeText={text => setPassword(text)}
                    autoCapitalize={'none'}
                // underlineColorAndroid={passwordError ? Colors.ui_error : Colors.ui_black}
                />
            </View>
            {passwordError && (
                <Text style={styles.errorText}>{passwordError}</Text>
            )}
            <Button
                title={'Login'}
                onPress={onLoginPress}
                loading={loading} />
        </View>
    );
};

export default FisrtScreen;
