import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    TextInput
} from 'react-native';

import { styles } from './styles'


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

const EditMyAccount = ({navigation}) => {
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
                        }}>MY ACCOUNT</Text>
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
                            marginTop: 20
                        }}>
                            <Text>Full Name</Text>
                            <View style={{
                                flex: 1,
                                flexDirection: 'column',
                                backgroundColor: "#ffffff",
                                marginTop: 10,
                                height: 45,
                                paddingLeft: 5,
                                borderRadius: 6
                            }}>
                                <View style={{ flex: 1 }}>
                                    <TextInput></TextInput>
                                </View>
                            </View>
                        </View>

                        <View style={{
                            flex: 1,
                            flexDirection: 'column',
                            marginTop: 10
                        }}>
                            <Text>Phone Number</Text>
                            <View style={{
                                flex: 1,
                                flexDirection: 'column',
                                backgroundColor: "#ffffff",
                                marginTop: 10,
                                height: 45,
                                paddingLeft: 5,
                                borderRadius: 6
                            }}>
                                <View style={{ flex: 1 }}>
                                    <TextInput></TextInput>
                                </View>
                            </View>
                        </View>

                        <View style={{
                            flex: 1,
                            flexDirection: 'column',
                            marginTop: 10
                        }}>
                            <Text>ID Card</Text>
                            <View style={{
                                flex: 1,
                                flexDirection: 'column',
                                backgroundColor: "#ffffff",
                                marginTop: 10,
                                height: 45,
                                paddingLeft: 5,
                                borderRadius: 6
                            }}>
                                <View style={{ flex: 1 }}>
                                    <TextInput></TextInput>
                                </View>
                            </View>
                        </View>

                        <View style={{
                            flex: 1,
                            flexDirection: 'column',
                            marginTop: 10
                        }}>
                            <Text>Date Of Birth</Text>
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
                                                style={{ height: 20, width: 20 }}
                                                source={require('../../assets/icons/calendar.png')} />
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
                            <Text>Gender</Text>
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
                                                style={{ height: 50, width: 50 }}
                                                source={require('../../assets/icons/dropdown.png')} />
                                        </TouchableOpacity>
                                    </View>
                            </View>
                        </View>

                        <View style={{
                            flex: 1,
                            flexDirection: 'column',
                            marginTop: 10
                        }}>
                            <Text>Email</Text>
                            <View style={{
                                flex: 1,
                                flexDirection: 'column',
                                backgroundColor: "#ffffff",
                                marginTop: 10,
                                height: 45,
                                paddingLeft: 5,
                                borderRadius: 6
                            }}>
                                <View style={{ flex: 1 }}>
                                    <TextInput></TextInput>
                                </View>
                            </View>
                        </View>

                        <View style={{
                            flex: 1,
                            flexDirection: 'column',
                            marginTop: 10
                        }}>
                            <Text>Address</Text>
                            <View style={{
                                flex: 1,
                                flexDirection: 'column',
                                backgroundColor: "#ffffff",
                                marginTop: 10,
                                height: 45,
                                paddingLeft: 5,
                                borderRadius: 6
                            }}>
                                <View style={{ flex: 1 }}>
                                    <TextInput></TextInput>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={{ marginBottom: 20 }}>
                <TouchableOpacity onPress={() =>navigation.navigate("myAccount") } style={
                    styles.button}>
                    <Text style={styles.buttonTxt}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default EditMyAccount;