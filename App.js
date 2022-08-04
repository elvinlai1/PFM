import * as React from 'react';
import { View, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ItemPage from './pages/itemPage';
import Summary from './pages/summaryPage';
import Expiration from './pages/expirationPage';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import SendIcon from '@mui/icons-material/Send';




function FeedScreen({ navigation }) {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Box
      sx={{ 
        display: 'wrap',
        '& > :not(style)': { m: 1},
      }}>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />

     <Button title="Print" onPress={()=> console.log("Stuff")}/>
     
     </Box>
      
    </View>
  );
}

function SettingsScreen() {
  return <View />;
}

const Tab = createBottomTabNavigator();

function HomeTabs({route, navigation}) {
  
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Summary" component={Summary} />
      <Tab.Screen name="Add Item" component={ItemPage} />
      <Tab.Screen name="Expiration" component={Expiration} />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeTabs} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

