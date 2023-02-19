import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Switch} from 'react-native-paper';
import AppNameImages from '../../customComponents/AppNameImage';
import {loginStyle} from './styles';
import FacebookButton from '../../customComponents/FacebookButton';
import GoogleButton from '../../customComponents/GoogleButton';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [mailFaliureMessage, setMailFailureMessage] = useState('');
  const [passFaliureMessage, setPassFailureMessage] = useState('');
  const [emailIdPattern, setemailIdPattern] = useState(
    new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
  );
  const [passwordPattern, setPasswordFailureMessage] = useState(
    new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'),
  );
  const [hidePass, setHidePass] = useState(true);
  const refName = useRef(false);
  const refPass = useRef(false);
  const nameValue = useRef(false);
  const passValue = useRef(false);

  function submitLogin() {
    const emailPattern = new RegExp(
      '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$',
    );
    const passPattern = new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})',
    );
    if(email=='' && pass==''){
      setMailFailureMessage('Please enter email address');
      setPassFailureMessage('Please enter password');  
    }else if (email == '') {
      setMailFailureMessage('Please enter email address');
      setPassFailureMessage('');
    } else if (!emailPattern.test(email)) {
      setMailFailureMessage('Invalid Email Address');
      setPassFailureMessage('');
    } else if (pass == '') {
      setMailFailureMessage('');
      setPassFailureMessage('Please enter password');
    } else if (!passPattern.test(pass)) {
      setMailFailureMessage('');
      setPassFailureMessage(
        'Please enter strong password with 1 capitol,1 spacial and 1 numeric character',
      );
    } else if (
      email == 'sandeep.sharma1@gmail.com' &&
      pass == 'Admin@123'
    ) {
      navigation.navigate('drawerContent');
      setPassFailureMessage('');
    } else {
      setPassFailureMessage('Please enter valid login detail');
    }
  }
  const showandhidepass = () => {
    if (hidePass == true) {
      setHidePass(false);
    } else {
      setHidePass(true);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#ffffff',
      }}>
      <ScrollView style={{backgroundColor: '#ffffff'}}>
        <View
          style={{
            flex: 0.8,
            backgroundColor: '#ffffff',
          }}>
          <StatusBar backgroundColor="#ffffff" />

          <AppNameImages />

          <View style={loginStyle.letsSigninMainLayout}>
            <Text style={loginStyle.letsSigninText}>Let's Sing You In</Text>

            <Text style={loginStyle.welcomeText}>
              Welcome back, you've been missed
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              marginTop: 40,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text style={loginStyle.emailText}>Email</Text>
              <Text style={loginStyle.invalidEmailText}>
                {mailFaliureMessage}
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                backgroundColor: '#F0F0F0',
                marginLeft: 20,
                marginRight: 20,
                marginTop: 10,
                height: 50,
                paddingLeft: 5,
                borderRadius: 6,
              }}>
              <View style={{flex: 1.8}}>
                <TextInput onChangeText={value => setEmail(value)}></TextInput>
              </View>
              <View
                style={{
                  flex: 0.2,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: !emailIdPattern.test(email)
                      ? '#DCDCDC'
                      : '#32CD32',
                  }}
                  source={require('../../assets/icons/check.png')}
                />
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
              }}>
              <Text style={loginStyle.passwordTitle}>Password</Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                backgroundColor: '#F0F0F0',
                marginLeft: 20,
                marginRight: 20,
                marginTop: 10,
                height: 50,
                paddingLeft: 5,
                borderRadius: 6,
              }}>
              <View style={{flex: 1.8}}>
                <TextInput
                  onChangeText={value => setPass(value)}
                  secureTextEntry={hidePass ? true : false}></TextInput>
              </View>

              <View
                style={{
                  flex: 0.2,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity onPress={() => showandhidepass()}>
                  <Image
                    style={{
                      width: 20,
                      height: 20,
                    }}
                    source={
                      hidePass
                        ? require('../../assets/icons/cross_eye.png')
                        : require('../../assets/icons/eye.png')
                    }
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Text style={loginStyle.invalidEmailText}>{passFaliureMessage}</Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              backgroundColor: '#ffffff',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Switch
                style={{
                  marginLeft: 20,
                }}
              />

              <Text
                style={{
                  fontSize: 15,
                }}>
                Save me
              </Text>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('otp')}>
              <Text style={loginStyle.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => submitLogin()}
            style={loginStyle.loginButton}>
            <Text style={loginStyle.buttonTxt}>Sign In</Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 5,
            }}>
            <Text
              style={{
                fontSize: 15,
              }}>
              Don't have an account?
            </Text>

            <TouchableOpacity onPress={() => navigation.navigate('signUp')}>
              <Text style={loginStyle.signUpTxt}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginTop: 50}}>
          <FacebookButton />
          <GoogleButton />
        </View>
      </ScrollView>
    </View>
  );
};
export default LoginScreen;
