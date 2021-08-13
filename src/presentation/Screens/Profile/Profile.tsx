import React, { useState, useContext } from 'react'
import { StyleSheet } from 'react-native'

import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { AuthContext } from '../../../contexts/auth';
import { 
  Container, BtnLogout, Header, Title, Card, CenterView,
  TextCard, ContainerSettings, 
} from './Profile.styles'

const Profile: React.FC = () => {
  const { signOut, user }: any = useContext(AuthContext);
  console.log(user)
  return (
    <Container>
      <Header>
        <Icon name="account-outline" color="#FFF" size={60} />
        <Title>{user.nome}</Title>
      </Header>

      <CenterView>
        <Card>
          <ContainerSettings>
            <BtnLogout onPress={() =>alert('Em breve')}>
              <Icon name="cards-heart" color="#000" size={25} />
              <TextCard style={{color:'#000'}}> Favoritos </TextCard>
            </BtnLogout>
          </ContainerSettings>

          <ContainerSettings>
            <BtnLogout onPress={() =>alert('Em breve')}>
              <Icon name="card-text" color="#000" size={25} />
              <TextCard style={{color:'#000'}}> Pagamento </TextCard>
            </BtnLogout>
          </ContainerSettings>

          <ContainerSettings>
            <BtnLogout onPress={() =>alert('Em breve')}>
              <Icon name="clipboard-account" color="#000" size={25} />
              <TextCard style={{color:'#000'}}> Contatos </TextCard>
            </BtnLogout>
          </ContainerSettings>

          <ContainerSettings>
            <BtnLogout onPress={() =>alert('Em breve')}>
              <Ionicons name="md-settings-outline" color="#000" size={25} />
              <TextCard style={{color:'#000'}}> Configurações </TextCard>
            </BtnLogout>
          </ContainerSettings>

          <BtnLogout onPress={() => signOut()}>
            <Icon name="logout" color="#d81010" size={25} />
            <TextCard style={{color:'#000'}}> Sair </TextCard>
          </BtnLogout>
        </Card>
      </CenterView>
    </Container>
  )
}
const ProfileMemo = React.memo(Profile)
export { ProfileMemo as Profile }


const styles = StyleSheet.create({
  shadow: {
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 4,
      },
      shadowOpacity: 0.30,
      shadowRadius: 2.65,

      elevation: 2,
      borderRadius: 5
  }
})