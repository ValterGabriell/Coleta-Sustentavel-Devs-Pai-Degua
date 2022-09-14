import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FeedRotas from './FeedRotas'
import CadastroRotas from './CadastroRotas'
import Login from '../telas/Login'
import Barraca from '../telas/BarracaPerfil'

const Stack = createNativeStackNavigator();

export default function LoginStackNav() {
    return (
          <Stack.Navigator>
            <Stack.Screen name="Login"  options={{headerShown:false}} component={Barraca} />
            <Stack.Screen name="FeedScreen" options={{headerShown:false}} component={FeedRotas} />
            <Stack.Screen name="CadastroScreen" options={{headerShown:false}} component={CadastroRotas} />
          </Stack.Navigator>
      );
  }