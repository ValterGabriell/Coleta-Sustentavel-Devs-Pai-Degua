import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CameraRotas from './CameraRotas'
import MyTabs from "./MyTabs";
import GaleriaRotas from '../rotas/GaleriaRotas'
import Feirante from '../telas/PerfilFeirante'
import Barraca from "../telas/PerfilBarraca";



const Stack = createNativeStackNavigator();
export default function ProfileTabStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyTabsScreen" options={{headerShown:false}}
        component={MyTabs} />
      <Stack.Screen name="CameraRotas" options={{ headerShown: false }} component={CameraRotas} />
      <Stack.Screen name="GaleriaRotas" options={{ headerShown: false }} component={GaleriaRotas} />
    </Stack.Navigator>
  );
}
