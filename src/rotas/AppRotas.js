import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from "react";
import ProfileTabStack from './ProfileTabStack';
import FeedRotas from './FeedRotas'


const Tab = createBottomTabNavigator()
function MyTabs() {
    return (
        <Tab.Navigator screenOptions={({ route }) =>
        ({
            headerShown: false,
            tabBarActiveTintColor: '#2a9f85',
            tabBarInactiveTintColor: '#C7C7C7'
        })} >
            <Tab.Screen name='Home' component={FeedRotas} />
            <Tab.Screen name='Profile' component={ProfileTabStack} />
        </Tab.Navigator>
    )
}

export default function AppRotas() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}