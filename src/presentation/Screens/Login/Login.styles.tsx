import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props?.theme?.COLORS?.black ?? '#000'};
`
export const Title = styled.Text`
${({ theme }) => theme?.FONTS?.oswald ?? {}}
color: ${({ theme }) => theme?.COLORS?.white ?? '#FFF'};
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

margin-bottom: 5px;
`;

export const TextButton = styled.Text`
${({ theme }) => theme?.FONTS?.robotoThin ?? {}}
color: ${({ theme }) => theme?.COLORS?.black ?? '#000'};
`;