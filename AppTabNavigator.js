import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import BookDonateScreen from '../screens/BookDonateScreen';
import BookRequestScreen from '../screens/BookRequestScreen';

export const AppNavigator= createBottomTabNavigator({
    DonateBooks:{
        screen:BookDonateScreen,
        NavigationOptions:{
           
            tabBarIcon : <Image source={require("../assets/request-list.png")} style={{width:20, height:20}}/>,
             tabBarLabel : "Donate Books",
        }
    },
    RequestBooks:{
        screen:BookRequestScreen,
        NavigationOptions:{
           
            tabBarIcon : <Image source={require("../assets/request-book.png")} style={{width:20, height:20}}/>,
             tabBarLabel : "Request Books",
        }
    }
});