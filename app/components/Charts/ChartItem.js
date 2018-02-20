import React from 'react';
import {View,ScrollView,Image,Text, TouchableOpacity} from 'react-native';

import styles from './styles';

const ChartItem = ({title, url, onChartClicked}) => (
    <TouchableOpacity onPress={onChartClicked}>
        <View style={styles.container}>
            <View style={styles.chartcat}>
                <View style={{flex: 1, paddingVertical: 10}}>
                    <Image source={url ==1 ?require("./images/graph1.png") : url ==2 ?require("./images/graph2.png") : url ==3 ? require("./images/graph6.png") : url ==4 ?require("./images/graph4.png") : url ==5 ?require("./images/graph5.png") :''  } resizeMode="contain" style={styles.graph}/>
                </View>
                <Text style={styles.graphtitle}>{title}</Text>
            </View>
        </View>
    </TouchableOpacity>
);

export default ChartItem;