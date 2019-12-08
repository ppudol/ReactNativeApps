import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MyButton from "./MyButton"

class Main extends Component {
    static navigationOptions = {
        header: null,
    }
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex: 1, }}>
                <View style={{ flex: 2, backgroundColor: '#b39ddb' }}></View>
                <View style={styles.view}>
                    <Text style={styles.textA}>FirebaseApp</Text>
                    <Text style={styles.textB}>Firebase authentication and database</Text>
                </View>
                <View style={{
                    flex: 4,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <MyButton style={{ flex: 2, }} text="Let's begin!" textSize="25" width="150" height="40" background="#7986cb" press={() => this.props.navigation.navigate("s2")} />
                </View>
                <View style={{ flex: 3 }}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textA: { fontSize: 48, backgroundColor: "#b39ddb", color: "#000000", textAlign: "center", },
    textB: { fontSize: 25, backgroundColor: "#b39ddb", color: "#000000", textAlign: "center", },
    view: {
        flex: 5,
        textAlign: "center",
        backgroundColor: "#b39ddb"
    },
});

export default Main;