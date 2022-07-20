
import ProfileTabStack from './ProfileTabStack';
import MapaRotas from './MapaRotas'
import ContatoRotas from './ContatoRotas'
import FeedRotas from './FeedRotas'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator()
export default function MyTabs() {
    return (
        <Tab.Navigator screenOptions={({ route }) =>
        ({
            headerShown: false,
            tabBarActiveTintColor: '#2a9f85',
            tabBarInactiveTintColor: '#C7C7C7'
        })} >
            <Tab.Screen name='Feed' component={FeedRotas} />
            <Tab.Screen name='Profile' component={ProfileTabStack} />
            <Tab.Screen name='Contato' component={ContatoRotas} />
            <Tab.Screen name='Mapa' component={MapaRotas} />
        </Tab.Navigator>
    )
}