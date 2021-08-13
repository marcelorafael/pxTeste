import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'

export const Container = styled.View`
  flex: 1;
`

export const Header = styled(LinearGradient).attrs({
  colors:['#000','#7F5DF0', '#000']
})`
align-items: center;
justify-content: center;

background-color: ${(props) => props?.theme?.COLORS?.black ?? '#000'};

padding: 4px;
width: 100%;
height: 30%;
`
export const Title = styled.Text`
${({ theme }) => theme?.FONTS?.h2 ?? {}}
color: ${({ theme }) => theme?.COLORS?.white ?? '#FFF'};
`;

export const BtnLogout = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`

flex-direction: row;
width: 100%;
padding: 10px
`;

export const CenterView = styled.View`
flex: 1;
align-items: center;
justify-content: center;
`;

export const Card = styled.View`
width: 90%;
height: 350px;

border-radius: 5px;

justify-content: space-between;

padding: 3px;
`;

export const ContainerSettings = styled.View`
flex-direction: row;
align-items: center;

border-bottom-width: 0.5px;
`;

export const TextCard = styled.Text`
${({ theme }) => theme?.FONTS?.h3 ?? {}}
color: ${({ theme }) => theme?.COLORS?.black ?? '#000'};
`;