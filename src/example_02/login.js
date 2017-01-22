import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    Text,
    ScrollView,
    TouchableHighlight,
    Image
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };

        // Binding
        this.onPressSignInButton = this.onPressSignInButton.bind(this);
        this.onPressForgotPasswordButton = this.onPressForgotPasswordButton.bind(this);
    }
    onPressSignInButton(){
        console.log('onPressSignInButton');
    }
    onPressForgotPasswordButton(){
        console.log('onPressForgotPasswordButton');
    }
    render() {
        return (
            <View style={styles.container}>
                <KeyboardAwareScrollView
                    keyboardDismissMode="interactive"
                    keyboardShouldPersistTaps={true}
                    getTextInputRefs={() => {
                    return [this._firstNameTI, this._notesTI];
                }}>
                    <Image style={styles.logoImage} source={require('../img/app.png')}/>
                    <TextInput
                        style={styles.textInput}
                        placeholder={'Username'}
                        ref={(r) => {
                        this._firstNameTI = r;
                    }}
                        returnKeyType={'next'}
                        onSubmitEditing={(event) => this._lastNameTI.focus()}/>
                    <TextInput
                        style={styles.textInput}
                        placeholder={'Password'}
                        secureTextEntry={true}
                        ref={(r) => {                            
                        this._notesTI = r;
                    }}
                        returnKeyType={'go'}/>
                    <TouchableHighlight onPress={this.onPressSignInButton}>
                        <View style={styles.loginBtn}>
                        <Text style={styles.loginBtnTxt}>Sing In</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={this.onPressForgotPasswordButton}>
                        <View style={styles.forgotView}>
                        <Text style={styles.forgotTxt}>Forgot password?</Text>
                        </View>
                    </TouchableHighlight>
                </KeyboardAwareScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        paddingTop: 20
    },
    textInput: {
        height: 47,
        width: 300,
        marginVertical: 10,
        paddingLeft: 10,
        fontSize: 17,
        lineHeight: 43,
        backgroundColor: 'white',
        borderWidth: .2,
        borderRadius: 4
    },
    logoImage: {
        width: 300,
        height: 300
    },
    loginBtn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height: 47,
        marginTop: 20,
        backgroundColor: '#19b99a'
    },
    loginBtnTxt: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color:'#FFFFFF'
    },
    forgotView: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        width: 300,
        height: 47,
        marginTop: 20,
        backgroundColor: '#FFFFFF'
    },
    forgotTxt: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color:'#19b99a'
    }
});

export default Login;