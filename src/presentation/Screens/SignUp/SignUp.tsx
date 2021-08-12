import React, { useState, useContext } from 'react'
import { Container, Title, Input, BtnLogin, TextButton } from './SignUp.styles'
import { AuthContext } from '../../../contexts/auth';

const SignUp: React.FC = ({ navigation }: any) => {
  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  const { signUp, signOut,loadingAuth }: any = useContext(AuthContext);


  function handleSubmit() {
    if (name !== '' && email !== '' && password !== '') {
      signUp(email, password, name)
      // if(loadingAuth === false){
      //   signOut()
      //   alert('Usuário cadastrado com sucesso');
      // }
      
    }
  }
  
  return (
    <Container>
      <Title>Login</Title>

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

      <BtnLogin onPress={() => navigation.navigate('Login')}>
        <TextButton>Voltar</TextButton>
      </BtnLogin>
    </Container>
  )
}
const SignUpMemo = React.memo(SignUp)
export { SignUpMemo as SignUp }
