import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

const MyAccount = ({navigation}) => {
    return (
        <View style={{ flex: 1}}>
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
                        }}>My ACCOUNT</Text>
                    </View>

                    {/* right */}
                   <TouchableOpacity onPress={()=>navigation.navigate("editMyAccount")}>
                   <View style={{
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Text style={{
                            fontSize: 18,
                            marginLeft: 10,
                            marginRight: 10,
                            alignSelf: 'center',
                            color: '#FF6347'
                        }}>Edit</Text>
                    </View>
                   </TouchableOpacity>
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
                        marginLeft:10,
                        marginRight:10,
                        backgroundColor: "#F0F0F0",
                        marginTop: 30
                    }}>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            marginLeft: 20,
                            margiRight: 20,
                            height:60
                        }}>
                            <View style={{
                                flex: 1,
                                justifyContent:'center'
                            }}>
                                <Text style={{
                                    fontWeight: '400',
                                    fontSize: 15
                                }}>Full Name</Text>
                            </View>

                            <View style={{
                                flex: 1,
                                justifyContent:'center',
                                alignItems:'center'
                            }}>
                                <Text style={{
                                    color: '#000000',
                                    fontSize: 15,    
                                }}>By Programmers</Text>
                            </View>
                        </View>
                        <View
                                style={{
                                    borderBottomColor: '#DCDCDC',
                                    borderBottomWidth: 1,
                                    
                                }}/>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            marginLeft: 20,
                            margiRight: 20,
                            height:60
                        }}>
                            <View style={{
                                flex: 1,
                                justifyContent:'center'
                            }}>
                                <Text style={{
                                   
                                    fontWeight: '400',
                                    fontSize: 15
                                }}>Phone Number</Text>
                            </View>

                            <View style={{
                                flex: 1,
                                justifyContent:'center',
                                alignItems:'center'
                            }}>
                                <Text style={{
                                    color: '#000000',
                                   
                                    fontSize: 15,    
                                }}>1234567890</Text> 
                            </View>
                        </View>
                        <View
                                style={{
                                    borderBottomColor: '#DCDCDC',
                                    borderBottomWidth: 1,
                                    
                                }}/>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            marginLeft: 20,
                            margiRight: 20,
                            height:60
                        }}>
                            <View style={{
                                flex: 1,
                                justifyContent:'center'
                            }}>
                                <Text style={{
                                   
                                    fontWeight: '400',
                                    fontSize: 15
                                }}>User ID</Text>
                            </View>

                            <View style={{
                                flex: 1,
                                justifyContent:'center',
                                alignItems:'center'
                            }}>
                                <Text style={{
                                    color: '#000000',
                                   
                                    fontSize: 15,    
                                }}>1111 2222</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        paddingHorizontal: 12,
                        paddingBottom: 10,
                        borderRadius: 10,
                        marginLeft:10,
                        marginRight:10,
                        backgroundColor: "#F0F0F0",
                        marginTop: 20
                    }}>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            marginLeft: 20,
                            margiRight: 20,
                            height:60
                        }}>
                            <View style={{
                                flex: 1,
                                justifyContent:'center'
                            }}>
                                <Text style={{
                                   
                                    fontWeight: '400',
                                    fontSize: 15
                                }}>ID Card</Text>
                            </View>

                            <View style={{
                                flex: 1,
                                justifyContent:'center',
                                alignItems:'center'
                            }}>
                                <Text style={{
                                    color: '#000000',
                                   
                                    fontSize: 15,    
                                }}>Not Updated</Text>
                            </View>
                        </View>
                        <View
                                style={{
                                    borderBottomColor: '#DCDCDC',
                                    borderBottomWidth: 1,
                                    
                                }}/>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            marginLeft: 20,
                            margiRight: 20,
                            height:60
                        }}>
                            <View style={{
                                flex: 1,
                                justifyContent:'center'
                            }}>
                                <Text style={{
                                   
                                    fontWeight: '400',
                                    fontSize: 15
                                }}>Date Of Birth</Text>
                            </View>

                            <View style={{
                                flex: 1,
                                justifyContent:'center',
                                alignItems:'center'
                            }}>
                                <Text style={{
                                    color: '#000000',
                                   
                                    fontSize: 15,    
                                }}>03/03/1990</Text> 
                            </View>
                        </View>
                        <View
                                style={{
                                    borderBottomColor: '#DCDCDC',
                                    borderBottomWidth: 1,
                                    
                                }}/>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            marginLeft: 20,
                            margiRight: 20,
                            height:60
                        }}>
                            <View style={{
                                flex: 1,
                                justifyContent:'center'
                            }}>
                                <Text style={{
                                   
                                    fontWeight: '400',
                                    fontSize: 15
                                }}>Gender</Text>
                            </View>

                            <View style={{
                                flex: 1,
                                justifyContent:'center',
                                alignItems:'center'
                            }}>
                                <Text style={{
                                    color: '#000000',
                                   
                                    fontSize: 15,    
                                }}>Male</Text>
                            </View>
                        </View>
                        <View
                                style={{
                                    borderBottomColor: '#DCDCDC',
                                    borderBottomWidth: 1,
                                    
                                }}/>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            marginLeft: 20,
                            margiRight: 20,
                            height:60
                        }}>
                            <View style={{
                                flex: 1,
                                justifyContent:'center'
                            }}>
                                <Text style={{
                                    
                                    fontWeight: '400',
                                    fontSize: 15
                                }}>Joined</Text>
                            </View>

                            <View style={{
                                flex: 1,
                                justifyContent:'center',
                                alignItems:'center'
                            }}>
                                <Text style={{
                                    color: '#000000',
                                  
                                    fontSize: 15,    
                                }}>Sep 2021</Text>
                            </View>
                        </View>
                        <View
                                style={{
                                    borderBottomColor: '#DCDCDC',
                                    borderBottomWidth: 1,
                                    
                                }}/>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            marginLeft: 20,
                            margiRight: 20,
                            height:60
                        }}>
                            <View style={{
                                flex: 1,
                                justifyContent:'center'
                            }}>
                                <Text style={{
                                    
                                    fontWeight: '400',
                                    fontSize: 15
                                }}>Email</Text>
                            </View>

                            <View style={{
                                flex: 1,
                                justifyContent:'center',
                                alignItems:'center'
                            }}>
                                <Text style={{
                                    color: '#000000',
                                    fontSize: 15,    
                                }}>ByProgrammer@gmail.com</Text> 
                            </View>
                        </View>
                        <View
                                style={{
                                    borderBottomColor: '#DCDCDC',
                                    borderBottomWidth: 1,
                                    
                                }}/>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            marginLeft: 20,
                            margiRight: 20,
                            height:60
                        }}>
                            <View style={{
                                flex: 1,
                                justifyContent:'center'
                            }}>
                                <Text style={{
                                   
                                    fontWeight: '400',
                                    fontSize: 15
                                }}>Address</Text>
                            </View>

                            <View style={{
                                flex: 1,
                                justifyContent:'center',
                                alignItems:'center'
                            }}>
                                <Text style={{
                                    color: '#000000',
                                    fontSize: 15, 
                                    textAlign:'right'   
                                }}>Noida</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
export default MyAccount