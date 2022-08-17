
import ProfileTabStack from './ProfileTabStack';
import MapaRotas from './MapaRotas'
import ContatoRotas from './ContatoRotas'
import Feed from '../telas/Feed'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BotoesDeAcao from '../componentes/ActionBarButtons';

const Tab = createBottomTabNavigator()
export default function MyTabs() {
    return (
        <Tab.Navigator screenOptions={() =>
        ({

            tabBarActiveTintColor: '#2a9f85',
            tabBarInactiveTintColor: '#C7C7C7',

        })} >
            <Tab.Screen name='Feed'
                options={({ navigation }) => ({
                    title: 'Feed',
                    headerRight: () => (
                       <BotoesDeAcao navigation={navigation}/>
                    ),
                })}


                component={Feed} />
            <Tab.Screen name='Mapa' component={MapaRotas} />
            <Tab.Screen name='Contato' component={ContatoRotas} />
            <Tab.Screen name='Profile' options={{headerShown:false}} component={ProfileTabStack} />
        </Tab.Navigator>
    )
}

