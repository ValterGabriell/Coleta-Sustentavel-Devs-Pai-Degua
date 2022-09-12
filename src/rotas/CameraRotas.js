import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CameraScreen from '../telas/Camera'
import FormularioDenuncia from "../telas/FormularioDenuncia";




const Stack = createNativeStackNavigator();
export default function ProfileTabStack() {
    return (
          <Stack.Navigator>
            <Stack.Screen name="CameraScreen" options={{headerShown:false}} component={CameraScreen} />
            <Stack.Screen name="FormularioScreen" options={{headerShown: false}} component={FormularioDenuncia} />
          
          </Stack.Navigator>
      );
  }
