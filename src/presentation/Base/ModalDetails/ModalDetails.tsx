import React from 'react'
import { 
  Container, Title, TitleDetails, ContainerDetails, TextDetails, Header,
  ContainerTitle, TouchClose,
} from './ModalDetails.styles'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const ModalDetails: React.FC = ({route, navigation}: any) => {
  const { item } = route?.params
  console.log(item.location.street.name)
  return (
    <Container>
      <Header>
        <TouchClose onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" color="#000" size={30} />
        </TouchClose>
        <ContainerTitle>
          <Title>{item.name.first}</Title>
        </ContainerTitle>
      </Header>
      <ContainerDetails>
        <View>
          <TitleDetails>Telefone</TitleDetails>
          <TextDetails>{item.phone}</TextDetails>
        </View>

        <View style={{alignItems:'flex-end'}}>
          <TitleDetails>Rua</TitleDetails>
          <TextDetails>{item.location.street.name}</TextDetails>
        </View>
      </ContainerDetails>

      <ContainerDetails>
        <View>
          <TitleDetails>Idade</TitleDetails>
          <TextDetails>{item.dob.age}</TextDetails>
        </View>

        <View style={{alignItems:'flex-end'}}>
          <TitleDetails>Genero</TitleDetails>
          <TextDetails>{item.gender}</TextDetails>
        </View>
      </ContainerDetails>

      <ContainerDetails>
        <View>
          <TitleDetails>Cidade</TitleDetails>
          <TextDetails>{item.location.city}</TextDetails>
        </View>

        <View style={{alignItems:'flex-end'}}>
          <TitleDetails>País</TitleDetails>
          <TextDetails>{item.location.country}</TextDetails>
        </View>
      </ContainerDetails>
    </Container>
  )
}
const ModalDetailsMemo = React.memo(ModalDetails)
export { ModalDetailsMemo as ModalDetails }