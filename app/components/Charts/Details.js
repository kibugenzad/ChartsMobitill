import React from 'react';
import {View,ScrollView,Image,Text, TouchableOpacity} from 'react-native';

import styles from './styles';

const Details = ({title, url, onChartClicked}) => (
    <View style={styles.container}>
        <View style={styles.chartgraph}>
            <View style={{flex: 1, paddingVertical: 10}}>
                <Image source={require("./images/graph1.png")} resizeMode="contain" style={styles.graph}/>
            </View>
            <Text style={styles.graphtitle}>Chart 1</Text>
        </View>
        <View style={styles.content}>
            <Text style={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
        </View>
    </View>
);

export default Details;