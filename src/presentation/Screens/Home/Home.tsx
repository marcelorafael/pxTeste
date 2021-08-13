import React, { useEffect, useState, useContext } from 'react'
import { ActivityIndicator } from 'react-native'

import {
  Container, Title, Text, ContainerScroll, Scroll, Header,
  HeaderList, TitleList, TouchCenter, ContainerModal,
} from './Home.styles'
import GetDatas from '../../../services/axios/requisition/GetDatas'
import { View } from 'react-native'

const Home: React.FC = ({ navigation }: any) => {
  const [data, setData] = useState([])
  const [activity, setActivity] = useState(false)

  useEffect(() => {
    async function loadDatas() {
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
  }, [])

  return (
    <Container>
      <Header>
        <Title>Clientes</Title>
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
              </TouchCenter>
            ))}
          </Scroll>
        )
      }
    </Container>
  )
}
const HomeMemo = React.memo(Home)
export { HomeMemo as Home }

export function Teste({ data }) {
  return (
    <View>
      <Text>{data.name}</Text>
    </View>
  );
}
