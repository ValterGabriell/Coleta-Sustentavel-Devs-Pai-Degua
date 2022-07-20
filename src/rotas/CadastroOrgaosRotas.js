import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyTabs from './MyTabs'

const Stack = createNativeStackNavigator();
export default function ProfileTabStack() {
    return (
          <Stack.Navigator>
            <Stack.Screen name="FeedScreen" component={MyTabs} />
          </Stack.Navigator>
      );
  }
