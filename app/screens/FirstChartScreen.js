import React, {Component} from 'react';
import {Container} from "../components/Container";
import {StatusBar} from "react-native";
import Details from "../components/Charts/Details";
import Menus from "../components/Header/Menus";
import {CustomStatusBar} from "../components/StatusBar";

class FirstChartScreen extends Component{
    constructor(){
        super();

        this.onBack = this.onBack.bind(this)
    }

    onBack(){
        const {nav} = this.props;

        nav.navigate("HomeScreen")
    }

    render(){
        return(
            <Container chart={true}>
                <StatusBar
                    barStyle="light-content"
                    hidden = {false}
                    animated
                    translucent
                    showHideTransition={'fade'}
                    backgroundColor="#000000"
                />
                <CustomStatusBar/>
                <Menus onBack={this.onBack}/>
                <Details

                />
            </Container>
        )
    }
}

export default FirstChartScreen;