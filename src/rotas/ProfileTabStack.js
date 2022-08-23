import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Profile from '../telas/Profile'
import Login from '../telas/Login'
import RankingUsuarios from '../telas/RankingUsuarios'
import ActionBarProfile from '../telas/Profile/componente/ActionBar'
import NoticiaOrgaos from "../telas/NoticiaOrgaos";

const Stack = createNativeStackNavigator();
export default function ProfileTabStack() {
    return (
          <Stack.Navigator>
            <Stack.Screen name="ProfileScreen" options={({ navigation }) => ({
                    title: 'Perfil',
                    headerRight: () => (
                       <ActionBarProfile navigation={navigation}/>
                    )})
              
              
              } component={Profile} />
            <Stack.Screen name="LoginScreen" options={{headerShown:false}} component={Login} />
            <Stack.Screen name="RankingScreen" component={RankingUsuarios} />
            <Stack.Screen name="NoticiaOrgaos" component={NoticiaOrgaos} />
          </Stack.Navigator>
      );
  }