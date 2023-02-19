import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

const Settings = ({navigation}) => {
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
                        }}>SETTINGS</Text>
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
                        <TouchableOpacity onPress={()=>navigation.navigate("changePassword")}> 
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            marginLeft: 20,
                            margiRight: 20,
                            height: 60
                        }}>
                            <View style={{
                                justifyContent: 'center',
                                marginLeft: 10,
                            }}>
                                <Image style={{ height: 25, width: 25 }}
                                    source={require('../../assets/icons/s_lock.png')} />
                            </View>

                            <View style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginLeft: 20
                            }}>
                                <Text style={{
                                    color: '#000000',
                                    fontSize: 16,
                                }}>Change Password</Text>
                            </View>
                        </View>
                        </TouchableOpacity>
                        <View
                            style={{
                                borderBottomColor: '#DCDCDC',
                                borderBottomWidth: 1,

                            }} />
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            marginLeft: 20,
                            margiRight: 20,
                            height: 60
                        }}>
                            <View style={{
                                justifyContent: 'center',
                                marginLeft: 10,
                            }}>
                                <Image style={{ height: 25, width: 25 }}
                                    source={require('../../assets/icons/s_settings.png')} />
                            </View>

                            <View style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginLeft: 20
                            }}>
                                <Text style={{
                                    color: '#000000',
                                    fontSize: 16,
                                }}>Preferences</Text>
                            </View>
                        </View>
                        <View
                            style={{
                                borderBottomColor: '#DCDCDC',
                                borderBottomWidth: 1,

                            }} />
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            marginLeft: 20,
                            margiRight: 20,
                            height: 60
                        }}>
                            <View style={{
                                justifyContent: 'center',
                                marginLeft: 10,
                            }}>
                                <Image style={{ height: 25, width: 25 }}
                                    source={require('../../assets/icons/s_notification.png')} />
                            </View>

                            <View style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginLeft: 20
                            }}>
                                <Text style={{
                                    color: '#000000',
                                    fontSize: 16,
                                }}>Notifications</Text>
                            </View>
                        </View>
                        <View
                            style={{
                                borderBottomColor: '#DCDCDC',
                                borderBottomWidth: 1,

                            }} />
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            marginLeft: 20,
                            margiRight: 20,
                            height: 60
                        }}>
                            <View style={{
                                justifyContent: 'center',
                                marginLeft: 10,
                            }}>
                                <Image style={{ height: 25, width: 25 }}
                                    source={require('../../assets/icons/s_histogram.png')} />
                            </View>

                            <View style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginLeft: 20
                            }}>
                                <Text style={{
                                    color: '#000000',
                                    fontSize: 16,
                                }}>Data Use</Text>
                            </View>
                        </View>
                        <View
                            style={{
                                borderBottomColor: '#DCDCDC',
                                borderBottomWidth: 1,

                            }} />
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            marginLeft: 20,
                            margiRight: 20,
                            height: 60
                        }}>
                            <View style={{
                                justifyContent: 'center',
                                marginLeft: 10,
                            }}>
                                <Image style={{ height: 25, width: 25 }}
                                    source={require('../../assets/icons/s_globe.png')} />
                            </View>

                            <View style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginLeft: 20
                            }}>
                                <Text style={{
                                    color: '#000000',
                                    fontSize: 16,
                                }}>Language</Text>
                            </View>
                        </View>
                        <View
                            style={{
                                borderBottomColor: '#DCDCDC',
                                borderBottomWidth: 1,

                            }} />
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            marginLeft: 20,
                            margiRight: 20,
                            height: 60
                        }}>
                            <View style={{
                                justifyContent: 'center',
                                marginLeft: 10,
                            }}>
                                <Image style={{ height: 25, width: 25 }}
                                    source={require('../../assets/icons/s_refresh.png')} />
                            </View>

                            <View style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginLeft: 20
                            }}>
                                <Text style={{
                                    color: '#000000',
                                    fontSize: 16,
                                }}>Check Update</Text>
                            </View>
                        </View>
                        <View
                            style={{
                                borderBottomColor: '#DCDCDC',
                                borderBottomWidth: 1,

                            }} />
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            marginLeft: 20,
                            margiRight: 20,
                            height: 60
                        }}>
                            <View style={{
                                justifyContent: 'center',
                                marginLeft: 10,
                            }}>
                                <Image style={{ height: 25, width: 25 }}
                                    source={require('../../assets/icons/s_phone.png')} />
                            </View>

                            <View style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginLeft: 20
                            }}>
                                <Text style={{
                                    color: '#000000',
                                    fontSize: 16,
                                }}>Contact Us</Text>
                            </View>
                        </View>
                        <View
                            style={{
                                borderBottomColor: '#DCDCDC',
                                borderBottomWidth: 1,

                            }} />
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            marginLeft: 20,
                            margiRight: 20,
                            height: 60
                        }}>
                            <View style={{
                                justifyContent: 'center',
                                marginLeft: 10,
                            }}>
                                <Image style={{ height: 25, width: 25 }}
                                    source={require('../../assets/icons/s_protection.png')} />
                            </View>

                            <View style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginLeft: 20
                            }}>
                                <Text style={{
                                    color: '#000000',
                                    fontSize: 16,
                                }}>Privacy Policy</Text>
                            </View>
                        </View>
                        <View
                            style={{
                                borderBottomColor: '#DCDCDC',
                                borderBottomWidth: 1,

                            }} />
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            marginLeft: 20,
                            margiRight: 20,
                            height: 60
                        }}>
                            <View style={{
                                justifyContent: 'center',
                                marginLeft: 10,
                            }}>
                                <Image style={{ height: 25, width: 25 }}
                                    source={require('../../assets/icons/s_accept.png')} />
                            </View>

                            <View style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginLeft: 20
                            }}>
                                <Text style={{
                                    color: '#000000',
                                    fontSize: 16,
                                }}>Terms & Condition</Text>
                            </View>
                        </View>
                        <View
                            style={{
                                borderBottomColor: '#DCDCDC',
                                borderBottomWidth: 1,

                            }} />
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            marginLeft: 20,
                            margiRight: 20,
                            height: 60
                        }}>
                            <View style={{
                                justifyContent: 'center',
                                marginLeft: 10,
                            }}>
                                <Image style={{ height: 25, width: 25 }}
                                    source={require('../../assets/icons/s_logout.png')} />
                            </View>

                            <View style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginLeft: 20
                            }}>
                                <Text style={{
                                    color: '#000000',
                                    fontSize: 15,
                                }}>Logout</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
export default Settings