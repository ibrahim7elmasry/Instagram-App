import React, { Component } from 'react'
import { Text, View , TouchableOpacity} from 'react-native'
import MyTaps from './../../Navigation/index';
  
export default class Login extends Component {
    render() {
        return (
            <View>
                <Text> Login </Text>

                <TouchableOpacity 
                    onPress={()=>{
                        this.props.navigation.navigate("Tabs")
                    }}
                >
                    <Text> Click </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
