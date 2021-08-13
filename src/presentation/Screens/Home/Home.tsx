import React, { useEffect, useState, useContext } from 'react'
<<<<<<< HEAD
import { ActivityIndicator } from 'react-native'

import {
  Container, Title, Text, ContainerScroll, Scroll, Header,
  HeaderList, TitleList, TouchCenter, ContainerModal,
=======
import { ActivityIndicator, Button } from 'react-native'
import { AuthContext } from '../../../contexts/auth';

import { 
  Container, Title, Text, ContainerScroll, Scroll, Header,
  HeaderList, TitleList,
>>>>>>> 2a13b68fae3e559fed7a58423ff36ca2e38dfa84
} from './Home.styles'
import GetDatas from '../../../services/axios/requisition/GetDatas'
import { View } from 'react-native'

<<<<<<< HEAD
const Home: React.FC = ({ navigation }: any) => {
  const [data, setData] = useState([])
  const [activity, setActivity] = useState(false)

  useEffect(() => {
    async function loadDatas() {
      setActivity(true)
      try {
=======
const Home: React.FC = () => {
  const[data, setData] = useState([])
  const[activity, setActivity] = useState(false)

  const { signOut, signed, user }: any = useContext(AuthContext);
  console.log(user)

  useEffect(() => {
     async function loadDatas(){
      setActivity(true)
       try {
>>>>>>> 2a13b68fae3e559fed7a58423ff36ca2e38dfa84
        const response = await GetDatas('?results=20')

        setData(response)

        setActivity(false)
        // console.log(response.map(item => item.registered.age))
<<<<<<< HEAD
      } catch (error) {
        console.log(error)
      }
    }

    loadDatas()
  }, [])
=======
       } catch (error) {
         console.log(error)
       }
     }

     loadDatas()
  },[])
>>>>>>> 2a13b68fae3e559fed7a58423ff36ca2e38dfa84

  return (
    <Container>
      <Header>
        <Title>Clientes</Title>
<<<<<<< HEAD
      </Header>
      {activity
        ? (
          <View style={{flex: 1, alignItems:'center', justifyContent:"center"}}>
            <ActivityIndicator color="#000" size={50} />
          </View>
        )
        : (
          <Scroll>
            {data.map(item => (
              <TouchCenter onPress={() => navigation.navigate('ModalDetails', { item: item })}>
=======
        <Button title="Sair" onPress={() => signOut()}/>
      </Header>
      {activity 
        ? (
          <ActivityIndicator color="#000" size={50} /> 
        )
        : (
            <Scroll>
              {data.map(item => (
>>>>>>> 2a13b68fae3e559fed7a58423ff36ca2e38dfa84
                <ContainerScroll key={item.login.uuid}>
                  <HeaderList>
                    <TitleList>{item.name.first}</TitleList>
                    <TitleList>{item.name.last}</TitleList>
                  </HeaderList>
                  <Text>E-mail: {item.email}</Text>
                  <Text>Telefone: {item.phone}</Text>
                  <Text>Cidade: {item.location.city}</Text>
<<<<<<< HEAD
                  <Text>Idade: {item.registered.age}</Text>
                </ContainerScroll>
              </TouchCenter>
            ))}
          </Scroll>
        )
=======
                  <Text>Idade: {item.registered.age}</Text>                
                </ContainerScroll>
                ))}
            </Scroll>
          )
>>>>>>> 2a13b68fae3e559fed7a58423ff36ca2e38dfa84
      }
    </Container>
  )
}
const HomeMemo = React.memo(Home)
export { HomeMemo as Home }

<<<<<<< HEAD
export function Teste({ data }) {
  return (
=======
export function Teste({data}) {
  return(
>>>>>>> 2a13b68fae3e559fed7a58423ff36ca2e38dfa84
    <View>
      <Text>{data.name}</Text>
    </View>
  );
}
