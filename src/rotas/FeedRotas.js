import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CameraRotas from './CameraRotas'
import MyTabs from "./MyTabs";

import PostItem from '../telas/PostItem'
//Pagina de instruçõas
import Instrucao from '../telas/Instrucao/index';
//Perfil do catador para o feirante
import PerfilUser from '../telas/Profile/ColetorComponent/PerfilUser';
//Perfil do post do feirante para o catador antes de solicitar o serviço
import AnaliseColeta from './../telas/PostItem/componentesColetor/AnaliseColeta';



const Stack = createNativeStackNavigator();
export default function ProfileTabStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyTabsScreen" options={{headerShown:false}}
        component={MyTabs} />
      <Stack.Screen name="CameraRotas" options={{ headerShown: false }} component={CameraRotas} />
      <Stack.Screen name='Instrucao'  options={{headerShown:false}} component={Instrucao}/>
      <Stack.Screen name='PerfilUser'  options={{headerShown:false}} component={PerfilUser}/>  
      <Stack.Screen name="PostItem" options={{ headerShown: true, headerTitle:"Sua postagem" }} component={PostItem} />
      <Stack.Screen name="AnaliseColeta" options={{ headerShown: false }} component={AnaliseColeta} />
    
    </Stack.Navigator>
  );
}
