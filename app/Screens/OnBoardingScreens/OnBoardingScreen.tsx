import React, { useState, useRef } from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    Animated,
    Dimensions,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import constants from '../../Constants/constants';

const Onboarding_screen = ({ item }) => {

    function renderHeaderLogo() {
        return (
            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <Image
                    source={require("../../assets/images/logo_02.png")}
                    style={{
                        alignItems: 'center',
                        height: '30%',
                        width: '60%',
                    }}></Image>
            </View>
        )
    }
    return (
        <View>
            {renderHeaderLogo()}
            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',

                }}>
                <Image
                    source={item.bannerImage}
                    resizeMode='contain'

                    style={{
                        alignItems: 'center',
                        height: Dimensions.get('window').height * 0.4,
                        width: Dimensions.get('window').height * 0.5,
                    }}></Image>

                <Text style={{
                    fontSize: 25,
                    color: '#000000',
                    fontWeight: 'bold',
                    marginTop: 20,

                }}>{item.title}</Text>

                <Text style={{
                    fontSize: 15,
                    fontWeight: 'normal',
                    textAlign: 'center',

                }}>{item.description}</Text>

                <Text style={{
                    fontSize: 15,
                    fontWeight: 'normal',
                    textAlign: 'center',

                }}>{item.description1}</Text>
                  <Text style={{
                    fontSize: 15,
                    fontWeight: 'normal',
                    textAlign: 'center',

                }}>{item.description2}</Text>

            </View>
        </View>
    )
}

const OnBoardingScreen = ({ navigation }) => {

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const ref = useRef(null)

    const updateCurrentSlideIndex = (e) => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / Dimensions.get('window').width)
        console.log(currentIndex)
        setCurrentSlideIndex(currentIndex)
    }
    const goNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        const offset = nextSlideIndex * Dimensions.get('window').width;
        ref?.current?.scrollToOffset({ offset })
        setCurrentSlideIndex(nextSlideIndex)
    }
    return (
        <View
            style={{
                flex: 3
            }}>
            <FlatList
                ref={ref}
                onMomentumScrollEnd={updateCurrentSlideIndex}
                horizontal
                pagingEnabled
                data={constants.onboarding_screens}
                scrollEventThrottle={16}
                ShowHorizontalScrollIndicator={false}
                renderItem={({ item }) => <Onboarding_screen item={item} />} />
            <View
                style={{
                    flexDirection: 'column'
                }}>
                {
                    currentSlideIndex == constants.onboarding_screens.length - 1 ?
                        (<View>
                            <TouchableOpacity onPress={() =>navigation.navigate("login")}
                                style={{
                                    backgroundColor: "#FF6347",
                                    height: 50,
                                    marginLeft: 10,
                                    marginRight: 10,
                                    marginBottom: 10,
                                    borderRadius: 6,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                <Text style={{
                                    alignSelf: 'center',
                                    justifyContent: 'center',
                                    color: '#ffffff'
                                }}>Let's Get Started</Text>
                            </TouchableOpacity>
                        </View>
                        ) : (
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    marginRight: 10,
                                    marginBottom: 20
                                }}>

                                <TouchableOpacity onPress={() => alert("Hello")}
                                    style={{
                                        height: 50,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                    <Text style={{
                                        color: '#000000',
                                        paddingLeft: 20,
                                        fontSize: 18
                                    }}>Skip</Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => { goNextSlide() }}
                                    style={{
                                        backgroundColor: "#FF6347",
                                        height: 50,
                                        width: 200,
                                        borderRadius: 6,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                    <Text style={{
                                        alignSelf: 'center',
                                        justifyContent: 'center',
                                        color: '#ffffff'
                                    }}>Next</Text>
                                </TouchableOpacity>
                            </View>
                        )}
            </View>
        </View>
    );
}
export default OnBoardingScreen;