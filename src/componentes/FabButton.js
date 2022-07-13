import React, { Component } from "react";
import { View, TouchableWithoutFeedback, Animated, StyleSheet } from "react-native";
import { AntDesign, Entypo } from '@expo/vector-icons'


export default class FabButton extends Component {
    animation = new Animated.Value(0)
    toggleMenu = () => {
        const toValue = this.open ? 0 : 1
        Animated.spring(this.animation, {
            toValue,
            friction: 6,
            useNativeDriver: true
        }).start()

        this.open = !this.open

    }

    render() {

        const cameraStyle = {
            transform: [
                { scale: this.animation }, {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -70]
                    })
                }
            ]
        }

        const location = {
            transform: [
                { scale: this.animation }, {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -140]
                    })
                }
            ]
        }

        const galery = {
            transform: [
                { scale: this.animation }, {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -210]
                    })
                }
            ]
        }

        const rotation = {
            transform: [
                {
                    rotate: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: ["0deg", "45deg"]
                    })
                }
            ]
        }


        return (
            <View style={[styles.container, this.props.styles]}>


                <TouchableWithoutFeedback>
                    <Animated.View style={[styles.button, styles.submenu, cameraStyle]}>
                        <Entypo name="camera" size={20} color="#00213b" />
                    </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback>
                    <Animated.View style={[styles.button, styles.submenu, galery]}>
                        <Entypo name="image" size={20} color="#00213b" />
                    </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback>
                    <Animated.View style={[styles.button, styles.submenu, location]}>
                        <AntDesign name="earth" size={20} color="#00213b" />
                    </Animated.View>
                </TouchableWithoutFeedback>


                <TouchableWithoutFeedback onPress={this.toggleMenu}>
                    <Animated.View style={[styles.button, styles.menu, rotation]}>
                        <AntDesign name="plus" size={24} color="#FFF"></AntDesign>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        
        justifyContent:'flex-end',
        alignItems:'flex-end',
        marginRight:8,
        marginBottom:3
    
    },
    button: {
        position:'absolute',
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        shadowRadius: 10,
        shadowColor: "#00213b",
        shadowOpacity: 0.3,
        shadowOffset: {
            height: 10
        }
    },
    menu: {
        backgroundColor: '#00213b',
    },
    submenu: {
        width:60,
        height: 60,
        borderRadius: 48 / 2,
        backgroundColor: "#C4DFAA"
    }
})
