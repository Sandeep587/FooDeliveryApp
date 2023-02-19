import React from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { RadioButton } from 'react-native-paper';
import {styles} from './style'

const AddNewCard = ({navigation}) => {
    const [value, setValue] = React.useState('selected');
    return (
        <View style={{
            flex: 1,
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
                    <TouchableOpacity onPress={() => navigation.goBack(null)}>
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
                    }}>ADD NEW CARD</Text>
                </View>
            </View>
            <ScrollView>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    marginTop: 20
                }}>
                    <Image style={{ width: "100%" }}
                        source={require("../../assets/images/dummycard.png")} />

                    <View style={{ flexDirection: 'row', marginTop: 10 }} >
                        <Text style={{
                            marginTop: 20,
                            marginLeft: 10,
                        }}>Card Number</Text>
                    </View>

                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        backgroundColor: "#F0F0F0",
                        marginLeft: 10,
                        marginRight: 10,
                        marginTop: 10,
                        height: 50,
                        paddingLeft: 5,
                        borderRadius: 6
                    }}>
                        <View style={{ flex: 1.8 }}>
                            <TextInput></TextInput>
                        </View>
                        <View style={{
                            flex: .2,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Image style={{
                                width: 20,
                                height: 20,
                            }}
                                source={
                                    require('../../assets/icons/check.png')
                                } />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10 }} >
                        <Text style={{
                            marginLeft: 10,
                        }}>Card holder Name</Text>
                    </View>

                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        backgroundColor: "#F0F0F0",
                        marginLeft: 10,
                        marginRight: 10,
                        marginTop: 10,
                        height: 50,
                        paddingLeft: 5,
                        borderRadius: 6
                    }}>
                        <View style={{ flex: 1.8 }}>
                            <TextInput></TextInput>
                        </View>
                        <View style={{
                            flex: .2,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Image style={{
                                width: 20,
                                height: 20,
                            }}
                                source={
                                    require('../../assets/icons/check.png')
                                } />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            <View style={{ flexDirection: 'row', marginTop: 10 }} >
                                <Text style={{
                                    marginLeft: 10,
                                }}>Expire Date</Text>
                            </View>
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                backgroundColor: "#F0F0F0",
                                marginLeft: 10,
                                marginRight: 10,
                                marginTop:10,
                                height: 50,
                                paddingLeft: 5,
                                borderRadius: 6
                            }}>
                                <View style={{ flex: 1.8 }}>
                                    <TextInput></TextInput>
                                </View>
                                <View style={{
                                    flex: .2,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Image style={{
                                        width: 20,
                                        height: 20,
                                        marginRight: 10
                                    }}
                                        source={
                                            require('../../assets/icons/check.png')
                                        } />
                                </View>
                            </View>
                        </View>

                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            <View style={{ flexDirection: 'row', marginTop: 10 }} >
                                <Text style={{
                                    marginLeft: 10,
                                }}>CVV</Text></View>
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                backgroundColor: "#F0F0F0",
                                marginLeft: 10,
                                marginRight: 10,
                                marginTop:10,
                                height: 50,
                                paddingLeft: 5,
                                borderRadius: 6
                            }}>
                                <View style={{ flex: 1.8 }}>
                                    <TextInput></TextInput>
                                </View>
                                <View style={{
                                    flex: .2,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Image style={{
                                        width: 20,
                                        height: 20,
                                        marginRight: 10
                                    }}
                                        source={
                                            require('../../assets/icons/check.png')
                                        } />
                                </View>
                            </View>
                        </View>
                    </View>
                    <RadioButton.Group
                        onValueChange=
                        {newValue => setValue(newValue)}
                        value={value}>
                        <View style={{
                            marginTop:10,
                            flexDirection:'row'
                        }}>
                            <RadioButton value="selected" color="#FF6347"/>
                            <Text style={{marginTop:8,fontSize:15}}>Remember this card details</Text>
                        </View>
                    </RadioButton.Group>
                </View>
            </ScrollView>
            <TouchableOpacity onPress={() => navigation.navigate("checkOut")}
                style={styles.addCardButton}>
                <Text style={styles.buttonTxt}>Add Card</Text>
            </TouchableOpacity>
        </View>
    )
}
export default AddNewCard;