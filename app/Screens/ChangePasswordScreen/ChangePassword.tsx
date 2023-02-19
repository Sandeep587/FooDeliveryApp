import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    TextInput
} from 'react-native';
import {styles} from './styles';




// function callCalender() {
//     const [date, setDate] = useState(new Date());

//     const onChange = (event, selectedDate) => {
//         const currentDate = selectedDate || date;
//         setDate(currentDate);
//     };

//     return (
//         <DateTimePicker
//             value={date}
//             onChange={onChange}
//         />
//     )
// }

const ChnagePassword = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{
                flexDirection: 'column'
            }}>
                <View style={{
                    flexDirection: 'row',
                    height: 50
                }}>
                    {/* left */}
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderColor: '#DCDCDC',
                        borderWidth: 2,
                        borderRadius: 12,
                        width: 45,
                        marginLeft: 10,
                        marginTop: 5
                    }}>
                        <TouchableOpacity onPress={() => alert("Hello")}>
                            <Image style={{
                                height: 20,
                                width: 20,
                            }}
                                source={require("../../assets/icons/back.png")} />
                        </TouchableOpacity>

                    </View>
                    {/* middle */}

                    <View style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Text style={{
                            fontSize: 15,
                            fontWeight: 'bold',
                            color: '#000000'
                        }}>CHANGE PASSWORD</Text>
                    </View>
                </View>
            </View>
            <ScrollView>
                <View style={{
                    flex: 1,
                    flexDirection: 'column'
                }}>
                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        paddingHorizontal: 12,
                        paddingBottom: 10,
                        borderRadius: 10,
                        marginLeft: 10,
                        marginRight: 10,
                        backgroundColor: "#F0F0F0",
                        marginTop: 30
                    }}>
                        
                        <View style={{
                            flex: 1,
                            flexDirection: 'column',
                            marginTop: 10
                        }}>
                            <Text>Current Password</Text>
                            <View style={{
                                flex: 1,
                                flexDirection: 'column',
                                marginTop: 10,

                            }}>
                                <View style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    backgroundColor: "#ffffff",
                                    height: 45,
                                    paddingLeft: 5,
                                    borderRadius: 6
                                }}>
                                    <View style={{ flex: 1.6 }}>
                                        <TextInput></TextInput>
                                    </View>
                                    <View style={{
                                        flex: .4,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <TouchableOpacity onPress={() => alert("Hello")}>
                                            <Image
                                                style={{ height: 25, width: 25 }}
                                                source={require('../../assets/icons/eye.png')} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={{
                            flex: 1,
                            flexDirection: 'column',
                            marginTop: 10
                        }}>
                            <Text>New Password</Text>
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                backgroundColor: "#ffffff",
                                marginTop: 10,
                                height: 45,
                                paddingLeft: 5,
                                borderRadius: 6
                            }}>
                                <View style={{ flex: 1.6 }}>
                                    <TextInput></TextInput>
                                </View>
                                <View style={{
                                        flex: .4,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <TouchableOpacity onPress={() => alert("Hello")}>
                                            <Image
                                                style={{ height: 25, width: 25 }}
                                                source={require('../../assets/icons/eye.png')} />
                                        </TouchableOpacity>
                                    </View>
                            </View>
                        </View>

                        <View style={{
                            flex: 1,
                            flexDirection: 'column',
                            marginTop: 10,
                            marginBottom:10
                        }}>
                            <Text>Retype New Password</Text>
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                backgroundColor: "#ffffff",
                                marginTop: 10,
                                height: 45,
                                paddingLeft: 5,
                                borderRadius: 6
                            }}>
                                <View style={{ flex: 1.6 }}>
                                    <TextInput></TextInput>
                                </View>
                                <View style={{
                                        flex: .4,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <TouchableOpacity onPress={() => alert("Hello")}>
                                            <Image
                                                style={{ height: 25, width: 25 }}
                                                source={require('../../assets/icons/eye.png')} />
                                        </TouchableOpacity>
                                    </View>
                            </View>
                        </View>

                        
                        
                    </View>
                </View>
            </ScrollView>
            <View style={{ marginBottom: 20 }}>
                <TouchableOpacity onPress={() => alert("Hello")} style={
                    styles.button}>
                    <Text style={styles.buttonTxt}>Change Password</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}
export default ChnagePassword;