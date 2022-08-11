import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CameraScreen from '../telas/Camera'
import FormularioDenuncia from "../telas/FormularioDenuncia";
import FeedRotas from './FeedRotas'




const Stack = createNativeStackNavigator();
export default function ProfileTabStack() {
    return (
          <Stack.Navigator>
            <Stack.Screen name="CameraScreen" options={{headerShown:false}} component={CameraScreen} />
            <Stack.Screen name="FormularioScreen" options={{headerBackVisible: false}} component={FormularioDenuncia} />
            <Stack.Screen name="FeedScreen" options={{headerShown:false}} component={FeedRotas} />
          </Stack.Navigator>
      );
  }
