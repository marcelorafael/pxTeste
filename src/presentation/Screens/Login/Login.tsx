import React, { useState, useContext } from 'react'
import { Container, Title, Input, BtnLogin, TextButton } from './Login.styles'
import { AuthContext } from '../../../contexts/auth';

const Login: React.FC = ({ navigation }: any) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn, loading }: any = useContext(AuthContext);

  function handleLogin() {
    if (email === '' || password === '') {
      alert('Todos os campos devem ser preenchidos');
      return;
    }
    signIn(email, password)
  }

  return (
    <Container>
      <Title>Login</Title>
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
        <TextButton>{loading ? 'Carregando...' :'Entrar'}</TextButton>
      </BtnLogin>

      <BtnLogin onPress={() => navigation.navigate('SignUp')}>
        <TextButton>Cadastrar</TextButton>
      </BtnLogin>
    </Container>
  )
}
const LoginMemo = React.memo(Login)
export { LoginMemo as Login }
