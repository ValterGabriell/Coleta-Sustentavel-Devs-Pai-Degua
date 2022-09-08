
import { NavigationContainer } from '@react-navigation/native';
import React from "react";
import LoginRotas from './LoginRotas'
import AuthProvider from '../contexts/auth'

export default function AppRotas() {

    return (
        <NavigationContainer>
            <AuthProvider>
                <LoginRotas />
            </AuthProvider>
        </NavigationContainer>
    )
}