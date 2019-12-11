import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, TextInput, StyleSheet } from 'react-native';
import MyButton from "./MyButton"
import firebase from 'firebase'

class Register extends Component {
    static navigationOptions = {
        title: "Register page",
        headerStyle: {
            backgroundColor: "#b39ddb"
        },
        headerTitleStyle: {
            color: "#000000"
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errorMessage: ""
        };
    }

    componentDidMount() {
        try {
            this.setState({ email: this.props.navigation.state.params.email });
            this.setState({ password: this.props.navigation.state.params.password });
        } catch { }
    }

    registerUser = async () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() =>
                this.props.navigation.navigate("s3", {
                    email: this.state.email,
                    password: this.state.password
                })
            )
            .catch(error => this.setState({ errorMessage: error.message }));
    };

    render() {
        return (
            <KeyboardAvoidingView style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                padding: 5
            }}
                behavior="padding">
                <Text style={{
                    color: "red",
                    textAlign: "center"
                }}>

                    {this.state.errorMessage}
                </Text>
                <TextInput onChangeText={(email) => this.setState({ email })}
                    placeholder="E-mail"
                    style={styles.input}></TextInput>
                <TextInput onChangeText={(password) => this.setState({ password })}
                    placeholder="Password"
                    style={styles.input}
                    secureTextEntry={true}></TextInput>
                <MyButton style={{ flex: 2, }} text="Register" textSize="22" width="150" height="35" background="#7986cb" press={this.registerUser} />
                <MyButton style={{ flex: 2, }} text="Go to login page" textSize="22" width="180" height="35" background="#7986cb" press={() => this.props.navigation.navigate("s3")} />
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    input: { borderBottomColor: "#7986cb", borderBottomWidth: 2, marginBottom: 5, }
});


export default Register;
