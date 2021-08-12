import React, { useEffect, useState } from 'react'
import { Container, Title } from './Home.styles'
import GetDatas from '../../../services/axios/requisition/GetDatas'

const Home: React.FC = () => {
  const[name, setName] = useState('')
  useEffect(() => {
     async function loadDatas(){
       try {
        const response = await GetDatas('?results=5000')
        let teste = await response.map(item => item.phone)

        const datasAdapter = async () => {
          return[{
            gender: response.map(item => item.gender),
            name: response.map(item => item.name.first),
            lastName: response.map(item => item.name.last),
            street: response.map(item => item.location.street),
            city: response.map(item => item.location.city),
            phone: response.map(item => item.phone),
          }]
        }

        let teste2 = datasAdapter()
        setName(teste)

        console.log((await teste2).map(item => item.gender))
       } catch (error) {
         console.log(error)
       }
     }

     loadDatas()
  },[])

  return (
    <Container>
      <Title>{name}</Title>
    </Container>
  )
}
const HomeMemo = React.memo(Home)
export { HomeMemo as Home }
