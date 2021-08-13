import styled from 'styled-components/native'
<<<<<<< HEAD
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['#000', '#261853', '#000']
})`
=======

export const Container = styled.View`
>>>>>>> 2a13b68fae3e559fed7a58423ff36ca2e38dfa84
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props?.theme?.COLORS?.black ?? '#000'};
`
export const Title = styled.Text`
${({ theme }) => theme?.FONTS?.oswald ?? {}}
color: ${({ theme }) => theme?.COLORS?.white ?? '#FFF'};
<<<<<<< HEAD

margin-bottom: 15px;
=======
>>>>>>> 2a13b68fae3e559fed7a58423ff36ca2e38dfa84
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#FFF'
})`
width: 90%;
border-color: ${({ theme }) => theme?.COLORS?.white ?? '#FFF'};
border-width: 1px;
border-radius: 5px;

margin-bottom: 8px;

color: #FFF;
`;

export const BtnLogin = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
width: 90%;
border-radius: 5px;
padding: 5px;
background-color: ${({ theme }) => theme?.COLORS?.white ?? '#FFF'};

align-items: center;
`;

export const TextButton = styled.Text`
<<<<<<< HEAD
${({ theme }) => theme?.FONTS?.h2 ?? {}}
=======
${({ theme }) => theme?.FONTS?.robotoThin ?? {}}
>>>>>>> 2a13b68fae3e559fed7a58423ff36ca2e38dfa84
color: ${({ theme }) => theme?.COLORS?.black ?? '#000'};
`;