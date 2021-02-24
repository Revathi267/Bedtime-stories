import React from 'react';
import {View, Text, StyleSheet, KeyboardAvoidingView, TouchableOpacity, Image, Alert, TextInput } from 'react-native';
import * as firebase from 'firebase'

export default class LoginScreen extends React.Component{
    constructor() {
        super();
        this.state = {
            emailId: "",
            password: ""
        }
    }
    Login = async (email, password) =>{
        if(email && password) {
            try{
                const response = await firebase.auth().signInWithEmailAndPassword(email, password) 
                if(response) {
                    this.props.navigation.navigate('WriteStory')
                }
            }
            catch(error) {
                switch(error.code) {
                    case 'auth/user-not-found': 
                    Alert.alert("User doesn't exist")
                    break;

                    case 'auth/invalid-email' :
                    Alert.alert("Incorrect email or password");
                    break;
                }
            }
        }
        else{
            Alert.alert("Enter email or password");
        }
    }
    render() {
        return(
            <View style = {{ backgroundColor: '#ffdbe9'}}>
                <KeyboardAvoidingView style = {{alignItems: 'center', marginTop: 20,}} > 
                    <View>
                        <Text style = {{fontSize: 40}}>BedTime Stories</Text>
                        <Image
                            source = {require ("../assets/bedtime.png")} 
                            style = {{alignItems: 'center', width: 200, height: 200, margin: 20}}
                        />
                    </View>
                    <View>
                        <TextInput
                            style = {styles.loginBox}
                            placeholder = "abc@example.com"
                            keyboardType = 'email-address'
                            onChangeText = {(text)=>{
                                this.setState({
                                    emailId: text
                                })
                            }}
                        />
                        <TextInput
                            style = {styles.loginBox}
                            secureTextEntry = {true} 
                            placeholder = "Enter Password"
                            onChangeText = {(text)=>{
                                this.setState({
                                    password: text 
                                })
                            }}
                        />
                    </View>
                    <View>
                        <TouchableOpacity style = {{height: 30, width: 90, borderWidth: 1, marginTop: 20, paddingTop: 5, borderRadius: 7}} 
                            onPress = {()=>{this.Login(this.state.emailId, this.state.password)}} >
                            <Text style = {{textAlign: 'center'}}>Login</Text> 
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>
        )
    }
}
const styles  = StyleSheet.create({
    loginBox: {
        width: 300,
        height: 40,
        borderWidth: 1.5,
        fontSize: 20,
        margin: 10,
        paddingLeft: 10,
    }
})