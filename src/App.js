import React, {Component} from 'react';
import {StyleSheet, Text, View, NativeModules, Button} from 'react-native';

export default class App extends Component {
    turnOn = () => {
        NativeModules.Bulb.turnOn();
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to Light App!!</Text>
                <Button
                    onPress={this.turnOn}
                    title="Turn ON "
                    color="#FF6347" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});