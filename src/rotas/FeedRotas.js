import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CameraRotas from './CameraRotas'
import MyTabs from "./MyTabs";

import PostItem from '../telas/PostItem'




const Stack = createNativeStackNavigator();
export default function ProfileTabStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyTabsScreen" options={{headerShown:false}}
        component={MyTabs} />
      <Stack.Screen name="CameraRotas" options={{ headerShown: false }} component={CameraRotas} />
      
      <Stack.Screen name="PostItem" options={{ headerShown: true, headerTitle:"Sua postagem" }} component={PostItem} />
    </Stack.Navigator>
  );
}
