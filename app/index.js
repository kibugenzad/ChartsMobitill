import React, { Component } from 'react';
import {Provider} from 'react-redux'
import EStyleSheet from 'react-native-extended-stylesheet';

import {RootNavigation} from './Navigation/RootNavigator'
import store from './store'

EStyleSheet.build({
    $colorPrimary:'#fefefe',
    $colorSecondary:'#fafafa',
    $white:'#FFFFFF',
    $red_light: "#ff233b",
    $red_black:'#ce1126',
    $black: '#000000',
    $gray: '#eee',
    outline: 0
})

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <RootNavigation/>
            </Provider>
        );
    }
}

export default App;
