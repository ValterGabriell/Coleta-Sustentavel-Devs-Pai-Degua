import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyTabs from './MyTabs'
import LoginRotas from './LoginRotas'
import CadastroComumTela from '../telas'

const Stack = createNativeStackNavigator();
export default function CadastroComumRotas() {
    return (
          <Stack.Navigator>
              <Stack.Screen name="LoginRotas" component={LoginRotas} />
          </Stack.Navigator>
      );
  }
