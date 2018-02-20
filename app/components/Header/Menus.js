import React from 'react';
import {View, ScrollView, Image, Text, TouchableOpacity, Platform} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

import styles from './styles';

const platform = Platform.OS === 'ios' ? 'ios' : 'md';

const Menus = ({onBack}) => (
    <View style={styles.container}>
        <TouchableOpacity onPress={onBack}>
            <View style={styles.back}>
                <Icon name={`${platform}-arrow-back`} size={25} color="#000"/>
            </View>
        </TouchableOpacity>
        <View style={styles.title}/>
    </View>
);

export default Menus;