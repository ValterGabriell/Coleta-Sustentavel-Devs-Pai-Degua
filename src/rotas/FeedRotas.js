import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Feed from '../telas/Feed';
import Camera from '../telas/Camera'




const Stack = createNativeStackNavigator();
export default function ProfileTabStack() {
    return (
          <Stack.Navigator>
            <Stack.Screen name="FeedScreen" component={Feed} />
            <Stack.Screen name="CameraScreen" component={Camera} />
          </Stack.Navigator>
      );
  }
