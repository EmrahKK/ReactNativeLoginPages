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
                    showsVerticalScrollIndicator={false}
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
                        onSubmitEditing={(event) => this._notesTI.focus()}/>
                    <TextInput
                        style={styles.textInput}
                        placeholder={'Password'}
                        secureTextEntry={true}
                        ref={(r) => {                            
                        this._notesTI = r;
                    }}
                        returnKeyType={'go'}/>
                    <TouchableHighlight 
                    underlayColor='#FFFFFF'
                    onPress={this.onPressSignInButton}>
                        <View style={styles.loginBtn}>
                        <Text style={styles.loginBtnTxt}>Sing In</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight 
                    underlayColor='#FFFFFF'
                    onPress={this.onPressForgotPasswordButton}>
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
        padding: 20
    },
    textInput: {
        height: 47,
        marginVertical: 5,
        paddingLeft: 10,
        fontSize: 17,
        lineHeight: 43,
        backgroundColor: 'white',
        borderWidth: .2,
        borderRadius: 4
    },
    logoImage: {        
        height: 200,
        alignSelf:'center'
    },
    loginBtn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 47,
        marginTop: 10,
        backgroundColor: '#19b99a',
        borderWidth: 0,
        borderRadius: 4
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
        height: 47,
        marginTop: 15,
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