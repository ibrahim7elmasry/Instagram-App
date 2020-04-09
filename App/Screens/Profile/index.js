import React, { Component } from 'react'
import {View,Text, Image} from 'react-native'
import styles from './styles'
import Fonts from '../../Themes/Fonts'
import colors from '../../Themes/Colors'

export default class Profile extends Component {
    render() {
        return (
            <View style={styles.root}>

                <View>
                    <Image
                    source={require('../../Images/pic1.png')}
                    style={styles.profilePicture}
                     />
                </View>
                
                <View  style={styles.profileInfo}>
                <Text style={styles.fullName}>Ibrahim Elmasry</Text>
                <Text style={styles.email}>ibrahielmasry77@outlook.com</Text>
                <Text style={styles.age} >26 Years Old</Text>
                </View>
                <Text style={{  borderBottomColor: colors.offWhite,borderBottomWidth: 1, }}/>

            </View>

        )
    }
}
