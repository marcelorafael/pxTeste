import React, { useState, useContext } from 'react'
import { Keyboard, View } from 'react-native';
import { 
  Container, Title, Input, BtnLogin, TextButton, BtnSignUp, Background,
  CenterView,
} from './Login.styles'
import { AuthContext } from '../../../contexts/auth';

const image = { uri: 'https://www.redinnovations.com.br/blog/wp-content/uploads/2020/07/shutterstock_1140063314.jpg' }


const Login: React.FC = ({ navigation }: any) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn, loading }: any = useContext(AuthContext);

  function handleLogin() {
    Keyboard.dismiss()
    if (email === '' || password === '') {
      alert('Todos os campos devem ser preenchidos');
      return;
    }
    signIn(email, password)
  }

  return (
    <Container>
      <Background source={image} resizeMode="cover" >
        <CenterView>
          <View>
            <Title>Umbrella{`\n`}Corporation</Title>
          </View>

          <View style={{width: '100%', alignItems:'center'}}>
            <Input
              placeholder="E-mail"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <Input
              placeholder="Senha"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
            />

            <BtnLogin onPress={() => handleLogin()}>
              <TextButton>{loading ? 'Carregando...' : 'Entrar'}</TextButton>
            </BtnLogin>

            <BtnSignUp onPress={() => navigation.navigate('SignUp')}>
              <TextButton style={{ color: '#FFF' }}>Cadastrar</TextButton>
            </BtnSignUp>
          </View>
        </CenterView>
      </Background>
    </Container>
  )
}
const LoginMemo = React.memo(Login)
export { LoginMemo as Login }