import React from 'react';
import {Platform} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Icon from "react-native-vector-icons/Ionicons";
import SwipeNavigator from 'react-native-swipe-navigation'

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import FirstChartScreen from '../screens/FirstChartScreen';
import ChartDetailsScreen from "../screens/ChartDetailsScreen.js";
import SecondChartScreen from "../screens/SecondChartScreen.js";
import ThirdChartScreen from "../screens/ThirdChartScreen.js";
import FourChartScreen from "../screens/FourChartScreen.js";
import FifthChartScreen from "../screens/FifthChartScreen.js";

const platform = Platform.OS === 'ios' ? 'ios' : 'md';

const ChartNavigator = SwipeNavigator({
    HomeScreen: {
        screen: HomeScreen,
        right: 'FirstChartScreen'
    },

    FirstChartScreen: {
        screen: FirstChartScreen,
        type: 'push', // push is the default type
        right: 'SecondChartScreen'
    },

    SecondChartScreen: {
        screen: SecondChartScreen,
        type: 'push', // push is the default type
        right: 'ThirdChartScreen'
    },

    ThirdChartScreen: {
        screen: ThirdChartScreen,
        type: 'push', // push is the default type
        right: 'FourChartScreen'
    },

    FourChartScreen: {
        screen: FourChartScreen,
        type: 'push', // push is the default type
        right: 'FifthChartScreen'
    },

    FifthChartScreen: {
        screen: FifthChartScreen,
        left: '@BACK',
        type: 'over',
    },

    ChartDetailsScreen: {
        screen: ChartDetailsScreen,
        left: '@BACK',
        type: 'over',
    },
})

export const homeStack = StackNavigator({
        Login: {
            screen: LoginScreen,
            navigationOptions: ({navigation}) => ({
                header: null
            })
        },
        Home: {
            screen: ChartNavigator,
            navigationOptions: ({navigation}) => ({
                header: null,
            })
        },
    }
);

export const RootNavigation = StackNavigator({

    homeStack: {
        screen: homeStack,
    }
}, {
    headerMode: 'none'
})
