import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingHorizontal:24,
    paddingTop:75,
    backgroundColor:'#131016'
  },
  title:{
    color:'#4EA8DE',
    fontSize:20,
    fontWeight:'bold',
    textAlign: 'center'
  },
  containerRegisterTecnology:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:44,
    marginBottom:34
  },
  subTitleListTecnology:{
    color:'#FDFCFE',
    fontSize:24,
    fontWeight:'bold'
  },
  containerListTecnology:{
    marginTop:24
  },
  input:{
    flex:1,
    height:56,
    backgroundColor:'#1F1E25',
    fontSize:14,
    color:'#FDFCFE',
    padding:12,
    borderRadius:4
  },
  listEmpty:{
    color:'#FDFCFE',
    fontSize:20,
    textAlign:'center'
  }
  
})