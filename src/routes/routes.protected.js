import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from '../screens/main/main.jsx';
// import Service from '../components/service/service.jsx';
import Schedule from '../screens/schedule/schedule.jsx';
import Services from '../screens/services/services.jsx';
import { COLORS } from '../constants/theme.js';
import { Image, StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator()

export default function ProtectedRoutes() {
     const headerBg = require("../assets/logoBg.png");
     return (
          <Stack.Navigator >
               <Stack.Screen name="Main" component={Main} 
               options={{headerShown:false}}/>
               <Stack.Screen name="Services" component={Services}
               options={{        
                    headerBackground: () => (
                         <Image
                           style={StyleSheet.absoluteFill}
                         source={headerBg}                           
                         />
                       ),            
                    headerTitle:"Serviços" ,
                    headerTitleAlign:"center",
                    headerShadowVisible:false,
                    headerStyle:{
                         // backgroundColor:COLORS.red,
                    },
                    headerTintColor: COLORS.white,
               }}
               />
               <Stack.Screen name="Agenda" component={Schedule}
                options={{                    
                    headerTitle:"Fazer uma Reserva" ,
                    headerTitleAlign:"center",
                    headerShadowVisible:false,                    
                    headerTintColor: COLORS.gray2,
               }}
               />
          </Stack.Navigator>
     );
}

