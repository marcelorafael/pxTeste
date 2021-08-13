import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'

export const Container = styled.View`
  flex: 1;
  background-color: #F5F5F5;
`

export const Header = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 8px;
  background-color: ${(props) => props?.theme?.COLORS?.black ?? '#030009'};
`

export const Title = styled.Text`
  ${(props) => props?.theme?.FONTS?.oswald ?? {}}
  color: ${(props) => props?.theme?.COLORS?.white ?? '#FFF'};
`
export const Text = styled.Text`
  ${(props) => props?.theme?.FONTS?.h4 ?? {}}
  color: ${(props) => props?.theme?.COLORS?.white ?? '#FFF'};
  margin: 5px;
`;

export const TouchCenter = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})``;

export const ContainerScroll = styled(LinearGradient).attrs({
  colors:['#000','#7F5DF0', '#000']
})`
background: ${(props) => props?.theme?.COLORS?.secondary ?? '#FFF'};
margin: 8px;
padding: 5px;
border-radius: 5px;
`;

export const HeaderList = styled.View`
flex-direction: row;
justify-content: center;
align-items: center;
`;

export const TitleList = styled.Text`
  ${(props) => props?.theme?.FONTS?.h3 ?? {}}
  color: ${(props) => props?.theme?.COLORS?.white ?? '#FFF'};
  margin-right: 5px;
`

export const Scroll = styled.ScrollView``;

export const ContainerModal = styled.View`
flex: 1;
align-items: center;
justify-content: center;
`;