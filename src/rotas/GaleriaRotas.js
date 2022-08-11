import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GaleriaScreen } from "../telas/Galeria";
import FormularioDenuncia from "../telas/FormularioDenuncia";
import FeedRotas from './FeedRotas'




const Stack = createNativeStackNavigator();
export default function ProfileTabStack() {
    return (
          <Stack.Navigator>
            <Stack.Screen name="GaleriaScreen" options={{headerShown:false}} component={GaleriaScreen} />
            <Stack.Screen name="FormularioScreen" options={{headerBackVisible: false}} component={FormularioDenuncia} />
            <Stack.Screen name="FeedScreen" options={{headerShown:false}} component={FeedRotas} />
          </Stack.Navigator>
      );
  }
