import React from 'react'
import PropTypes from 'prop-types';
import {View,ImageBackground} from 'react-native'

import styles from './styles';

const Container = ({children, charts, chart}) => (
    <ImageBackground source={charts ? require('./images/bgcharts.png') : chart ? require('./images/bgempty.png') : require('./images/bg.png')} style={{width: '100%', height: '100%'}}>
        <View style = {styles.container}>
            {children}
        </View>
    </ImageBackground>
);

Container.prototype = {
    children: PropTypes.any
}

export default Container;
