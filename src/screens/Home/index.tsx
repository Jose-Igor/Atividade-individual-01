import {useState} from 'react';
import {View, Text, TextInput, Alert} from 'react-native';

import { Tecnology } from '../../components/Tecnology';
import { Button } from '../../components/Button';

import {styles} from './styles';

export function Home(){
 const [nameTecnology,setNameTecnology] = useState('');
 const [names,setNames] = useState([] as string []);

 
 console.log(names)
 
  function addTecnology(){
    if(names.includes(nameTecnology) || nameTecnology === ''){
      Alert.alert('Error','ja existe ou não foi digitado');
    } else{
      setNames([...names,nameTecnology]);
    }
    setNameTecnology('');
  }
  
  function removeTecnology(name:string){
    Alert.alert('Remove', `Deseja realmente remover ${name}`,[
      {
        text:'sim',
        onPress:()=>{
          setNames(names.filter(tecnology => tecnology !==name))
        }
      },{
        text:'não'
      } 
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Tecnologias</Text>

      <View style={styles.containerRegisterTecnology}>
        <TextInput 
          style={styles.input}
          placeholder='Adicione uma nova tecnologia'
          placeholderTextColor='#FDFCFE'
          onChangeText={text =>setNameTecnology(text)}
          value={nameTecnology}
        />
        <Button 
          iconName="add-circle-outline"
          onPress={addTecnology}
        />
      </View>

      <Text  style={styles.subTitleListTecnology}>Criadas {names.length}</Text>
    
      <View style={styles.containerListTecnology}>
        {
          names.length === 0 ? (
            <Text style={styles.listEmpty}>Você ainda não tem tecnologias cadastradas
            Crie tarefas e organize seus itens a fazer
            </Text>
          ) : (
            names.map(item =>(
              <Tecnology key={item} name={item} remove={()=>removeTecnology(item)}/>
            ))
          )
        }

      </View>
    </View>
  )
}