import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyTabs from "./MyTabs";
import CadastroRotas from './CadastroRotas'
import Login from '../telas/Login'


const Stack = createNativeStackNavigator();

export default function LoginStackNav() {
    return (
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="FeedScreen" component={MyTabs} />
            <Stack.Screen name="CadastroScreen" options={{headerShown:false}} component={CadastroRotas} />
          </Stack.Navigator>
      );
  }