import colors from "../../Themes/Colors"
import Fonts from "../../Themes/Fonts"

export default {
    root: {
   backgroundColor:colors.basic.white,
   flex:1,
 },
 profilePicture:{
    width:150 ,
    height:150 ,
    borderWidth:0.2,
    borderColor:colors.gray,
    marginHorizontal: 25,
    marginVertical: 20,
 },
 profileInfo:{
    flexDirection:'column',
    justifyContent:'center',
    marginHorizontal: 25,
 },
 fullName:{
     ...Fonts.style.input,
    fontWeight:'bold',
  color: colors.lightOffWhite

 
 },
 email:{
     ...Fonts.style.small,
    color:colors.lightOffWhite2 
 },
 age:{
     ...Fonts.style.medium,
    color: colors.lightOffWhite2 ,
    marginVertical: 3,
   
 }
 
 
}


