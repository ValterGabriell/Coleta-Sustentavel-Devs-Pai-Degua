import React, { useContext } from 'react';
import ProfileTabStack from './ProfileTabStack';
import MapaRotas from './MapaRotas'
import ContatoRotas from './ContatoRotas'
import Feed from '../telas/Feed'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Feather } from '@expo/vector-icons';
import { AuthContext } from "../contexts/auth";

/**
 * Import somente do feirante
 */
import BarracaPerfil from '../telas/BarracaPerfil';

const Tab = createBottomTabNavigator()

export default function MyTabs() {
    const { userType } = useContext(AuthContext)
    const isCatador = userType.isCatador


    return (
        isCatador ?
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,

                    tabBarIcon: ({ color }) => {
                        let Icon = () => (<AntDesign name="appstore-o" size={24} color={color} />)

                        if (route.name === 'Profile') {
                            Icon = () => <AntDesign name="user" size={24} color={color} />;
                        }
                        if (route.name === 'Contato') {
                            Icon = () => <AntDesign name="contacts" size={24} color={color} />;
                        }

                        if (route.name === 'Mapa') {
                            Icon = () => <Feather name="map" size={24} color={color} />
                        }

                        return <Icon color={color} />
                    },
                    tabBarActiveTintColor: '#2E7D32',
                    tabBarInactiveTintColor: '#c7c7c7'
                })}
            >

                <Tab.Screen name='Feed' component={Feed} />
                <Tab.Screen name='Profile' component={ProfileTabStack} />
                <Tab.Screen name='Contato' component={ContatoRotas} />
                <Tab.Screen name='Mapa' component={MapaRotas} />
            </Tab.Navigator>
            :
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,

                    tabBarIcon: ({ color }) => {
                        let Icon = () => (<AntDesign name="appstore-o" size={24} color={color} />)

                        if (route.name === 'Perfil') {
                            Icon = () => <AntDesign name="user" size={24} color={color} />;
                        }
                        if (route.name === 'Barraca') {
                            Icon = () => <AntDesign name="contacts" size={24} color={color} />;
                        }

                        if (route.name === 'Mapa') {
                            Icon = () => <Feather name="map" size={24} color={color} />
                        }

                        return <Icon color={color} />
                    },
                    tabBarActiveTintColor: '#2E7D32',
                    tabBarInactiveTintColor: '#c7c7c7'
                })}
            >

                <Tab.Screen name='Feed' component={Feed} />
                <Tab.Screen name='Perfil' component={ProfileTabStack} />
                <Tab.Screen name='Barraca' component={BarracaPerfil} />
                <Tab.Screen name='Mapa' component={MapaRotas} />
            </Tab.Navigator>

    )
}