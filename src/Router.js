import React from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

import PetHome from './screens/Pet/PetHome/Index';
import PetDetails from './screens/Pet/PetDetails/Index';
import PetFavorites from './screens/Pet/PetFavorites/Index';
import PetAdopt from './screens/Pet/PetAdopt/Index'

import UserAccount from './screens/User/UserAccount/Index'
import UserLogin from './screens/User/UserLogin/Index'
import UserOptionsLogin from './screens/User/UserOptionsLogin/Index'
import UserFormRegister from './screens/User/UserFormRegister/Index'
import UserDashboard from './screens/User/UserDashboard/Index'
import UserLocale from './screens/User/UserLocale/Index';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Home(){
  return (
    <Tab.Navigator
        tabBarOptions={{
            activeTintColor: '#F660AB',
            labelStyle: {
                fontSize: 12,
                fontFamily: 'Montserrat_400Regular',
                marginBottom: 5
            },
            tabStyle: {
                marginTop: 5
            }
            }}
        >
        
        <Tab.Screen 
            name="Adotar" 
            component={PetHome} 
            options={{
            tabBarIcon: ({ color }) => (
            <Icon name='paw' type="ionicon" color={color} size={23} />
            )
            }}
        />
       
        <Tab.Screen 
            name="Favoritos" 
            component={PetFavorites} 
            options={{
            tabBarIcon: ({ color, size }) => (
            <Icon name='heart-outline' type="ionicon" color={color} size={23} />
            )
            }}
        />
      
        <Tab.Screen 
            name="Perfil" 
            component={UserAccount} 
            options={{
              tabBarIcon: ({ color, size }) => (
              <Icon name='person-outline' type="ionicon" color={color} size={23} />
            ),
            }}
        />
    </Tab.Navigator>
  );
}

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserOptionsLogin"
      >
        <Stack.Screen
          name="UserOptionsLogin"
          component={UserOptionsLogin}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="UserLogin"
          component={UserLogin}
          options={{
            title: 'Miaudote',
            headerTitleStyle: {
              fontFamily: 'Montserrat_700Bold',
            },
          }}
        />

        <Stack.Screen
          name="UserDashboard"
          component={UserDashboard}
          options={{
            title: 'Miaudote',
            headerTitleStyle: {
              fontFamily: 'Montserrat_700Bold',
            },
          }}
        />
        
        <Stack.Screen
          name="UserLocale"
          component={UserLocale}
          options={{
            title: 'Miaudote',
            headerTitleStyle: {
              fontFamily: 'Montserrat_700Bold',
            },
          }}
        />

        <Stack.Screen
          name="UserFormRegister"
          component={UserFormRegister}
          options={{
            title: 'Miaudote',
            headerTitleStyle: {
              fontFamily: 'Montserrat_700Bold',
            },
          }}
        />
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{
            title: 'Miaudote',
            headerTitleStyle: {
              fontFamily: 'Montserrat_700Bold',
            },
          }}
        />

        <Stack.Screen 
          name="PetDetails" 
          component={PetDetails} 
          options={{
            title: 'Informa????es do Pet',
            headerTitleStyle: {
              fontFamily: 'Montserrat_700Bold'
            }
          }}
        />
        
        <Stack.Screen
          name="AdotarPet"
          component={PetAdopt}
          options={{
            title: "Voltar",
            headerStyle: {
              backgroundColor: '#fff'
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
