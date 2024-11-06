import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import icon from "../../constants/icon.js";

import AbaHome from "../abahome/abahome.jsx";
import AbaCalendar from "../abacalendar/abacalendar.jsx";
import AbaProfile from "../abaprofile/abaprofile.jsx";
import { COLORS } from "../../constants/theme.js";

const Tab = createBottomTabNavigator();

function Main() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Calendar" component={AbaCalendar} options={{
                headerShown: false,
                tabBarShowLabel: false,
                unmountOnBlur: true,
                tabBarIcon: ({ focused }) => {
                    return <Image source={icon.home} style={
                        {
                            width: 25,
                            height: 25,
                            opacity: focused ? 1 : 0.3
                        }
                    } />
                }
            }} />

            <Tab.Screen name="Home" component={AbaHome} options={{
                headerTitleAlign: "center",
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => {
                    return <Image source={icon.calendar} style={
                        {
                            width: 25,
                            height: 25,
                            opacity: focused ? 1 : 0.3,
                            color: focused ? COLORS.red : COLORS.red,
                        }
                    } />
                }
            }} />


            <Tab.Screen name="Profile" component={AbaProfile} options={{
                headerShown: false,
                tabBarShowLabel: false,
                unmountOnBlur: true,
                tabBarIcon: ({ focused }) => {
                    return <Image source={icon.profile} style={
                        {
                            width: 25,
                            height: 25,
                            opacity: focused ? 1 : 0.3
                        }
                    } />
                }
            }} />
        </Tab.Navigator>
    );
}

export default Main;