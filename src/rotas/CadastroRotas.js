import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CadastroFeirante from '../telas/CadastroFeirante'
import CadastroComum from '../telas/CadastroComum'
import Cadastro from "../telas/Cadastro";

const Stack = createNativeStackNavigator();
export default function ProfileTabStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cadastro" options={{ title: 'Cadastrar' }} component={Cadastro} />
      <Stack.Screen name="CadastroOrgao" options={{ title: 'Cadastro Orgao' }} component={CadastroFeirante} />
      <Stack.Screen name="CadastroComum" component={CadastroComum} />
    </Stack.Navigator>
  );
}
