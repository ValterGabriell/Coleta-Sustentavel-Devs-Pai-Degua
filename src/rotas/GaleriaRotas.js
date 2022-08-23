import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GaleriaScreen } from "../telas/Galeria";
import FormularioDenuncia from "../telas/FormularioDenuncia";





const Stack = createNativeStackNavigator();
export default function ProfileTabStack() {
    return (
          <Stack.Navigator>
            <Stack.Screen name="GaleriaScreen" options={{headerShown:false}} component={GaleriaScreen} />
            <Stack.Screen name="FormularioScreenByGallery" options={{headerBackVisible: false}} component={FormularioDenuncia} />
          </Stack.Navigator>
      );
  }
