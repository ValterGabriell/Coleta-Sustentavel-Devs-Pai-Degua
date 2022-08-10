import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CameraScreen from '../telas/Camera'
import MyTabs from "./MyTabs";
import { GaleriaScreen } from "../telas/Galeria";





const Stack = createNativeStackNavigator();
export default function ProfileTabStack() {
    return (
          <Stack.Navigator>
            <Stack.Screen name="MyTabsScreen" options={{headerShown:false}} component={MyTabs} />
            <Stack.Screen name="CameraScreen" component={CameraScreen} />
            <Stack.Screen name="GaleriaScreen" component={GaleriaScreen} />
          </Stack.Navigator>
      );
  }
