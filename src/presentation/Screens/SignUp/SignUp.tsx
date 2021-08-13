import React, { useState, useContext } from 'react'
<<<<<<< HEAD
import { Keyboard } from 'react-native';
import { Container, Title, Input, BtnLogin, TextButton } from './SignUp.styles'
import { AuthContext } from '../../../contexts/auth';

const SignUp: React.FC = () => {
=======
import { Container, Title, Input, BtnLogin, TextButton } from './SignUp.styles'
import { AuthContext } from '../../../contexts/auth';

const SignUp: React.FC = ({ navigation }: any) => {
>>>>>>> 2a13b68fae3e559fed7a58423ff36ca2e38dfa84
  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  const { signUp, signOut,loadingAuth }: any = useContext(AuthContext);


  function handleSubmit() {
<<<<<<< HEAD
    Keyboard.dismiss();
    if (name !== '' && email !== '' && password !== '') {
      signUp(email, password, name)
=======
    if (name !== '' && email !== '' && password !== '') {
      signUp(email, password, name)
      // if(loadingAuth === false){
      //   signOut()
      //   alert('Usuário cadastrado com sucesso');
      // }
      
>>>>>>> 2a13b68fae3e559fed7a58423ff36ca2e38dfa84
    }
  }
  
  return (
    <Container>
<<<<<<< HEAD
      <Title>Umbrella{`\n`}Corporation</Title>
=======
      <Title>Cadastrar</Title>
>>>>>>> 2a13b68fae3e559fed7a58423ff36ca2e38dfa84

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
