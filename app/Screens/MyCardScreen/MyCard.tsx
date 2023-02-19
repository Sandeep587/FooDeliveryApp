import * as React from 'react';
import {
    View,
    Text,
    Button,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { RadioButton } from 'react-native-paper';
import { styles } from './styles'

function changeRoundedShape() {
    <View tyle={{
        flexDirection: 'row',
        height: 100,
        marginTop: 30,
        borderColor: '#DCDCDC',
        borderWidth: 2,
        borderRadius: 12,
        marginLeft: 10,
        marginRight: 10,
    }}></View>
}

const MyCards = ({navigation}) => {
    const [value, setValue] = React.useState('MasterCard');
    return (
        <View style={{ flex: 1 }}>

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
                    }}>MY CARDS</Text>
                </View>
            </View>
            <ScrollView>
                <View style={{
                    flex: 1,
                    flexDirection: 'column'
                }}>

                    <RadioButton.Group
                        onValueChange=
                        {newValue => setValue(newValue)}
                        value={value}>

                        {/* MasterCard */}
                        <View style={{
                            flexDirection: 'row',
                            height: 100,
                            marginTop: 30,
                            borderColor: '#DCDCDC',
                            borderWidth: 2,
                            borderRadius: 12,
                            marginLeft: 10,
                            marginRight: 10,

                        }}>
                            {/* left */}
                            <View style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderColor: '#DCDCDC',
                                width: 45,
                                marginLeft: 10,
                                marginTop: 5
                            }}>
                                <View style={{
                                    height: 52,
                                    width: 52,
                                    borderColor: '#DCDCDC',
                                    borderWidth: 2,
                                    borderRadius: 12,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <TouchableOpacity onPress={() => alert("Hello")}>
                                        <Image style={{
                                            height: 45,
                                            width: 45,
                                        }}
                                            source={require("../../assets/images/mastercard.png")} />
                                    </TouchableOpacity>
                                </View>


                            </View>
                            {/* middle */}

                            <View style={{
                                flex: 1,
                                justifyContent: 'center',
                                marginLeft: 10
                            }}>
                                <Text style={{
                                    fontSize: 16,
                                    fontWeight: 'bold',
                                    color: '#000000'
                                }}>Master Card</Text>
                            </View>

                            {/* right */}
                            <View style={{
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <RadioButton value="MasterCard" color="#FF6347" />
                            </View>
                        </View>

                        {/* Google Pay */}
                        <View style={{
                            flexDirection: 'row',
                            height: 100,
                            marginTop: 10,
                            borderColor: '#DCDCDC',
                            borderWidth: 2,
                            borderRadius: 12,
                            marginLeft: 10,
                            marginRight: 10,

                        }}>
                            {/* left */}
                            <View style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderColor: '#DCDCDC',
                                width: 45,
                                marginLeft: 10,
                                marginTop: 5
                            }}>

                                <View style={{
                                    height: 52,
                                    width: 52,
                                    borderColor: '#DCDCDC',
                                    borderWidth: 2,
                                    borderRadius: 12,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <TouchableOpacity onPress={() => alert("Hello")}>
                                        <Image style={{
                                            height: 25,
                                            width: 25,
                                        }}
                                            source={require("../../assets/icons/gicon.png")} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            {/* middle */}

                            <View style={{
                                flex: 1,
                                justifyContent: 'center',
                                marginLeft: 10,
                            }}>
                                <Text style={{
                                    fontSize: 16,
                                    fontWeight: 'bold',
                                    color: '#000000'
                                }}>Google Pay</Text>
                            </View>

                            {/* right */}
                            <View style={{
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <RadioButton value="GooglePay" color="#FF6347" />
                            </View>
                        </View>

                        {/* Add new Card */}

                        <View style={{
                            flexDirection: 'row',
                            marginTop: 30,
                            borderColor: '#DCDCDC',
                            marginLeft: 10,
                            marginRight: 10,
                        }}>
                            <View style={{
                                flex: 1,
                            }}>
                                <Text style={{
                                    fontSize: 18,
                                    fontWeight: 'bold',
                                    color: '#000000'
                                }}>Add new card</Text>
                            </View>
                        </View>

                        {/* ApplePay */}

                        <View style={{
                            flexDirection: 'row',
                            height: 100,
                            marginTop: 20,
                            borderColor: '#DCDCDC',
                            borderWidth: 2,
                            borderRadius: 12,
                            marginLeft: 10,
                            marginRight: 10,

                        }}>
                            {/* left */}
                            <View style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderColor: '#DCDCDC',
                                width: 45,
                                marginLeft: 10,
                                marginTop: 5
                            }}>
                                <View style={{
                                    height: 52,
                                    width: 52,
                                    borderColor: '#DCDCDC',
                                    borderWidth: 2,
                                    borderRadius: 12,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <TouchableOpacity onPress={() => alert("Hello")}>
                                        <Image style={{
                                            height: 30,
                                            width: 30,
                                        }}
                                            source={require("../../assets/images/apple.png")} />
                                    </TouchableOpacity>
                                </View>

                            </View>
                            {/* middle */}

                            <View style={{
                                flex: 1,
                                marginLeft: 10,
                                justifyContent: 'center'
                            }}>
                                <Text style={{
                                    fontSize: 16,
                                    fontWeight: 'bold',
                                    color: '#000000'
                                }}>Apple Pay</Text>
                            </View>

                            {/* right */}
                            <View style={{
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <RadioButton value="ApplePay" color="#FF6347" />
                            </View>
                        </View>

                        {/* Visa */}

                        <View style={{
                            flexDirection: 'row',
                            height: 100,
                            marginTop: 10,
                            borderColor: '#DCDCDC',
                            borderWidth: 2,
                            borderRadius: 12,
                            marginLeft: 10,
                            marginRight: 10,

                        }}>
                            {/* left */}
                            <View style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderColor: '#DCDCDC',
                                width: 45,
                                marginLeft: 10,
                                marginTop: 5
                            }}>
                                <View style={{
                                    height: 52,
                                    width: 52,
                                    borderColor: '#DCDCDC',
                                    borderWidth: 2,
                                    borderRadius: 12,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <TouchableOpacity onPress={() => alert("Hello")}>
                                        <Image style={{
                                            height: 35,
                                            width: 35,
                                        }}
                                            source={require("../../assets/images/visa.jpg")} />
                                    </TouchableOpacity>
                                </View>

                            </View>
                            {/* middle */}

                            <View style={{
                                flex: 1,
                                marginLeft: 10,
                                justifyContent: 'center'
                            }}>
                                <Text style={{
                                    fontSize: 16,
                                    fontWeight: 'bold',
                                    color: '#000000'
                                }}>Visa</Text>
                            </View>

                            {/* right */}
                            <View style={{
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <RadioButton value="Visa" color="#FF6347" />
                            </View>
                        </View>

                        {/* Paypal */}

                        <View style={{
                            flexDirection: 'row',
                            height: 100,
                            marginTop: 10,
                            borderColor: '#DCDCDC',
                            borderWidth: 2,
                            borderRadius: 12,
                            marginLeft: 10,
                            marginRight: 10,

                        }}>
                            {/* left */}
                            <View style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderColor: '#DCDCDC',
                                width: 45,
                                marginLeft: 10,
                                marginTop: 5
                            }}>
                                <View style={{
                                    height: 52,
                                    width: 52,
                                    borderColor: '#DCDCDC',
                                    borderWidth: 2,
                                    borderRadius: 12,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <TouchableOpacity onPress={() => alert("Hello")}>
                                        <Image style={{
                                            height: 35,
                                            width: 35,
                                        }}
                                            source={require("../../assets/images/paypal.png")} />
                                    </TouchableOpacity>
                                </View>

                            </View>
                            {/* middle */}

                            <View style={{
                                flex: 1,
                                marginLeft: 10,
                                justifyContent: 'center'
                            }}>
                                <Text style={{
                                    fontSize: 16,
                                    fontWeight: 'bold',
                                    color: '#000000'
                                }}>PayPal</Text>
                            </View>

                            {/* right */}
                            <View style={{
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <RadioButton value="PayPal" color="#FF6347" onPress={() => changeRoundedShape()} />
                            </View>
                        </View>
                    </RadioButton.Group>
                </View>
            </ScrollView>
            <TouchableOpacity onPress={() => navigation.navigate("addNewCard")}
                style={styles.addButton}>
                <Text style={styles.buttonTxt}>Add</Text>
            </TouchableOpacity></View>
    )
}
export default MyCards;