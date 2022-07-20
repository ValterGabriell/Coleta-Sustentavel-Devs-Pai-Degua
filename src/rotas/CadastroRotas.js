import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CadastroOrgao from '../telas/CadastroOrgao'
import CadastroComum from '../telas/CadastroComum'
import Cadastro from "../telas/Cadastro";

const Stack = createNativeStackNavigator();
export default function ProfileTabStack() {
    return (
          <Stack.Navigator>
            <Stack.Screen name="Cadastro" options={{title:'Cadastrar'}} component={Cadastro} />
            <Stack.Screen name="CadastroOrgao"  options={{ title: 'Cadastro Orgao' }} component={CadastroOrgao} />
            <Stack.Screen name="CadastroComum" options={{title:'Cadastro Comum'}} component={CadastroComum} />
          </Stack.Navigator>
      );
  }
