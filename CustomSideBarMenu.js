import React, { Component } from 'react';

import { StyleSheet, Text, View } from 'react-native';
import {DrawerItems} from 'react-navigation-drawer'
import firebase from 'firebase';
export default class CustomSideBarMenu extends Component{
    render(){
        return(
        <View> style={{styles.container}}>
        <Text>Custom Side Bar Menu</Text>
        <View>style={styles.drawerItemContainer}>
        <DrawerItems>{...this.props}</DrawerItems>
        </View>
        </View>
        
        )
        
    
       
    }
}
var styles=StyleSheet.create({container:})