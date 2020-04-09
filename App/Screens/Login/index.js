import React, { Component } from 'react'
import {
     Text,
      View , 
      ScrollView,
      TouchableOpacity,
      Image,
      TextInput,
      Button
    } from 'react-native'

import styles from './styles'  
export default class Login extends Component {
    state = {
        email: '',
        password: '',
    };
    render() {
        return (
         <ScrollView style={styles.root}>
          <View style={styles.Logo}>
              <Image
                 source={require('../../Images/instagram.png')}
                 style={{ width:100 ,height:100 ,}} />
            </View>
            
            <View style={styles.textInputs}>
                 <TextInput
                    placeholder="Email"
                    value={this.state.email}
                    onChangeText={text =>this.setState({email:text})}
                     type="email"
                      style={styles.email_password_textInputs}/>  

              <TextInput
                    placeholder="password"
                    secureTextEntry={true}
                    value={this.state.password}
                    onChangeText={ (password) => this.setState({ password }) }
                    type="password"
                    style={styles.email_password_textInputs}/>  
                     </View>
 
        <View style={styles.loginSubmit}>
                <Button
                 title='Login'
                 color="#f95e62"
                  onPress={()=>{ this.props.navigation.navigate("Tabs")}} />
              </View>


            </ScrollView>
        )
    }
}
