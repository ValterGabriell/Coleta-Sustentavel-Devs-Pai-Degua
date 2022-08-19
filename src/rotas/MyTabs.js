import React from 'react';
import ProfileTabStack from './ProfileTabStack';
import MapaRotas from './MapaRotas'
import ContatoRotas from './ContatoRotas'
import Feed from '../telas/Feed'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

export default function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={({route})=> ({
                headerShown: false,
                tabBarIcon: ({color}) =>{
                    let Icon = () => (<AntDesign name="appstore-o" size={24} color="#2E7D32" />)

                    if(route.name === 'Profile'){
                        Icon = () => <AntDesign name="user" size={24} color="#2E7D32" />;
                    }
                    if(route.name === 'Contato'){
                        Icon = () => <AntDesign name="contacts" size={24} color="#2E7D32" />;
                    }
                        
                    if(route.name === 'Mapa'){
                        Icon = () => <Feather name="map" size={24} color="#2E7D32" />
                    }

                    return <Icon color={color}/>
                },
                tabBarActiveTintColor: '#2E7D32',
                tabBarInactiveTintColor: '#C7C7C7'
            })}
        >

            <Tab.Screen name='Feed' component={Feed} />
            <Tab.Screen name='Profile'  component={ProfileTabStack} />
            <Tab.Screen name='Contato' component={ContatoRotas} />
            <Tab.Screen name='Mapa' component={MapaRotas} />
        </Tab.Navigator>
    )
}