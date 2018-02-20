import React,{Component} from 'react';
import PropTypes from 'prop-types'
import {Container} from "../components/Container";
import {Login} from "../components/Login";
import {StatusBar} from "react-native";
import CustomStatusBar from "../components/StatusBar/CustomStatusBar";

class LoginScreen extends Component{

    constructor(){
        super()

        this.handleSubmitData = this.handleSubmitData.bind(this);
    }

    static propType = {
        navigation: PropTypes.obj
    }

    handleSubmitData(){
        this.props.navigation.navigate("Home")
    }

    render(){
        return(
            <Container>
                <StatusBar
                    barStyle="light-content"
                    hidden = {false}
                    animated
                    translucent
                    showHideTransition={'fade'}
                    backgroundColor="#000000"
                />
                <CustomStatusBar/>
                <Login
                    handleSubmitData={this.handleSubmitData}/>
            </Container>
        )
    }
}

export default LoginScreen;