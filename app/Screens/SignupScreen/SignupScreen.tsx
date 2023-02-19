import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import AppNameImages from '../../customComponents/AppNameImage';
import EmailTextInput from '../../customComponents/EmailTxtInput';
import PassInputText from '../../customComponents/PassInputText';
import {singUpStyle} from './styles';
import FacebookButton from '../../customComponents/FacebookButton';
import GoogleButton from '../../customComponents/GoogleButton';

const SingupScreeen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [pass, setPass] = useState('');
  const [mailFaliureMessage, setMailFailureMessage] = useState('');
  const [passFaliureMessage, setPassFailureMessage] = useState('');
  const [userNameFailMessage, setuserNameFailMessage] = useState('');
  const [emailIdPattern, setemailIdPattern] = useState(
    new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
  );
  const [passwordPattern, setPasswordFailureMessage] = useState(
    new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'),
  );
  const [hidePass, setHidePass] = useState(true);

  function submitSignUp() {
    const emailPattern = new RegExp(
      '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$',
    );
    const passPattern = new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})',
    );
    if (email == '') {
      setMailFailureMessage('Please enter email address');
      setPassFailureMessage('');
      setuserNameFailMessage('');
    } else if (!emailPattern.test(email)) {
      setMailFailureMessage('Invalid Email Address');
      setPassFailureMessage('');
      setuserNameFailMessage('');
    } else if (userName == '') {
      setuserNameFailMessage('Please enter user name');
      setPassFailureMessage('');
      setMailFailureMessage('');
    } else if (pass == '') {
      setMailFailureMessage('');
      setPassFailureMessage('Please enter password');
      setuserNameFailMessage('');
    } else if (pass.length < 9) {
      setMailFailureMessage('');
      setPassFailureMessage('Password length must be 9 character');
      setuserNameFailMessage('');
    } else if (!passPattern.test(pass)) {
      setuserNameFailMessage('');
      setMailFailureMessage('');
      setPassFailureMessage(
        'Please enter strong password with 1 capitol,1 spacial and 1 numeric character',
      );
    } else {
      navigation.navigate('drawerContent');
      setPassFailureMessage('');
      setuserNameFailMessage('');
      setMailFailureMessage('');
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

          <View style={singUpStyle.letsSignUpMainLayout}>
            <Text style={singUpStyle.letsSignUpText}>Getting Started</Text>

            <Text style={singUpStyle.createAccount}>
              Create an account to continue!
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              marginTop: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text style={singUpStyle.edtTxt}>Email</Text>
              <Text style={singUpStyle.errorMessageTxt}>
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
                    tintColor:!emailIdPattern.test(email)?"#DCDCDC":"#32CD32",
                  }}
                  source={require('../../assets/icons/check.png')}
                />
              </View>
            </View>

            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Text style={singUpStyle.edtTxt}>Username</Text>
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
                  onChangeText={value => setUserName(value)}></TextInput>
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
                    tintColor:(userName=="")?"#DCDCDC":"#32CD32",
                  }}
                  source={require('../../assets/icons/check.png')}
                />
              </View>
            </View>
            <Text style={singUpStyle.errorMessageTxt}>
              {userNameFailMessage}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
              }}>
              <Text style={singUpStyle.edtTxt}>Password</Text>
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
                  secureTextEntry={hidePass?true:false}></TextInput>
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
                    source={hidePass?require('../../assets/icons/cross_eye.png'):require('../../assets/icons/eye.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={singUpStyle.errorMessageTxt}>
              {passFaliureMessage}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              backgroundColor: '#ffffff',
              marginTop: 10,
            }}></View>

          <TouchableOpacity
            style={singUpStyle.loginButton}
            onPress={() => submitSignUp()}>
            <Text style={singUpStyle.buttonTxt}>Sign Up</Text>
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
              Already have an account?
            </Text>

            <Text style={singUpStyle.signUpTxt}>Sign In</Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 40,
          }}>
          <FacebookButton />
          <GoogleButton />
        </View>
      </ScrollView>
    </View>
  );
};
export default SingupScreeen;
