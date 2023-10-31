import {Text, View} from 'react-native';

import { Button } from '../Button';

import { useState } from 'react';

import {styles} from './styles';

interface Props{
  name:string;
  remove:(name:string)=>void;
}

export function Tecnology({name,remove}:Props){
  const [checkout, setCheckout] = useState(false);

  console.log(checkout)
  function handleCeckout(){
    setCheckout(!checkout)
  }

  return (
    <View style={styles.container}>
      <Button iconName={!checkout ?'circle-o':'check-circle'} transparent onPress={handleCeckout}/>

      <View style={[styles.containerText, checkout && { backgroundColor:'#1A1A1A'}]}>
        <Text style={[styles.nameTecnology, checkout && {textDecorationLine:'line-through',color:'gray'}]}>{name}</Text>
      </View>

      <Button iconName='trash-outline' transparent onPress={()=>remove(name)}/>
    </View>
  )
}