import React, { useEffect, useState, useContext } from 'react'
import { ActivityIndicator, Button } from 'react-native'
import { AuthContext } from '../../../contexts/auth';

import { 
  Container, Title, Text, ContainerScroll, Scroll, Header,
  HeaderList, TitleList,
} from './Home.styles'
import GetDatas from '../../../services/axios/requisition/GetDatas'
import { View } from 'react-native'

const Home: React.FC = () => {
  const[data, setData] = useState([])
  const[activity, setActivity] = useState(false)

  const { signOut, signed, user }: any = useContext(AuthContext);
  console.log(user)

  useEffect(() => {
     async function loadDatas(){
      setActivity(true)
       try {
        const response = await GetDatas('?results=20')

        setData(response)

        setActivity(false)
        // console.log(response.map(item => item.registered.age))
       } catch (error) {
         console.log(error)
       }
     }

     loadDatas()
  },[])

  return (
    <Container>
      <Header>
        <Title>Clientes</Title>
        <Button title="Sair" onPress={() => signOut()}/>
      </Header>
      {activity 
        ? (
          <ActivityIndicator color="#000" size={50} /> 
        )
        : (
            <Scroll>
              {data.map(item => (
                <ContainerScroll key={item.login.uuid}>
                  <HeaderList>
                    <TitleList>{item.name.first}</TitleList>
                    <TitleList>{item.name.last}</TitleList>
                  </HeaderList>
                  <Text>E-mail: {item.email}</Text>
                  <Text>Telefone: {item.phone}</Text>
                  <Text>Cidade: {item.location.city}</Text>
                  <Text>Idade: {item.registered.age}</Text>                
                </ContainerScroll>
                ))}
            </Scroll>
          )
      }
    </Container>
  )
}
const HomeMemo = React.memo(Home)
export { HomeMemo as Home }

export function Teste({data}) {
  return(
    <View>
      <Text>{data.name}</Text>
    </View>
  );
}
