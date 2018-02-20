import React, {Component} from 'react';
import GridView from 'react-native-super-grid';
import {Container} from "../components/Container";

import {ChartItem} from '../components/Charts'
import {View, ScrollView, StatusBar} from "react-native";
import CustomStatusBar from "../components/StatusBar/CustomStatusBar";

class HomeScreen extends Component {
    constructor() {
        super();

        this.state = {
            items: [
                {
                    title: "Chart 1",
                    url: "1"
                },
                {
                    title: "Chart 2",
                    url: "2"
                },
                {
                    title: "Chart 3",
                    url: "3"
                },
                {
                    title: "Chart 4",
                    url: "4"
                },
                {
                    title: "Chart 5",
                    url: "5"
                },
                {
                    title: "Chart 1",
                    url: "1"
                },
                {
                    title: "Chart 2",
                    url: "2"
                },
                {
                    title: "Chart 3",
                    url: "3"
                },
                {
                    title: "Chart 4",
                    url: "4"
                },
                {
                    title: "Chart 5",
                    url: "5"
                },
            ]
        }

        this.onChartClicked = this.onChartClicked.bind(this);
    }

    onChartClicked(item) {
        const {nav} = this.props

        nav.navigate("ChartDetailsScreen")
    }

    render() {
        return (
            <ScrollView contentContainerStyle={{flex: 1}}>
                <Container charts={true}>
                    <StatusBar
                        barStyle="light-content"
                        hidden={false}
                        animated
                        translucent
                        showHideTransition={'fade'}
                        backgroundColor="#000000"
                    />
                    <CustomStatusBar/>
                    <View style={{flex: 1}}/>
                    <View style={{backgroundColor: '#fff', flex: 2}}>
                        <GridView
                            itemDimension={130}
                            items={this.state.items}
                            renderItem={item => (
                                <ChartItem
                                    title={item.title}
                                    url={item.url}
                                    onChartClicked={this.onChartClicked}
                                />
                            )}
                        />
                    </View>

                </Container>
            </ScrollView>
        )
    }
}

export default HomeScreen;