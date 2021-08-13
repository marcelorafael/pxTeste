import React, { useState, useContext } from 'react'
import { Keyboard } from 'react-native';
import { Container, Title, Input, BtnLogin, TextButton } from './SignUp.styles'
import { AuthContext } from '../../../contexts/auth';

const SignUp: React.FC = () => {
  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  const { signUp, signOut,loadingAuth }: any = useContext(AuthContext);


  function handleSubmit() {
    Keyboard.dismiss();
    if (name !== '' && email !== '' && password !== '') {
      signUp(email, password, name)
    }
  }
  
  return (
    <Container>
      <Title>Umbrella{`\n`}Corporation</Title>

      <Input
        placeholder="Nome"
        value={name}
        onChangeText={(text) => setName(text)}
      />

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

      <BtnLogin onPress={() => handleSubmit()}>
        <TextButton>{loadingAuth ? 'Carregando...' : 'Cadastrar'}</TextButton>
      </BtnLogin>
    </Container>
  )
}
const SignUpMemo = React.memo(SignUp)
export { SignUpMemo as SignUp }