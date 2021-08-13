import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'

export const Container = styled(LinearGradient).attrs({
  colors:['#37E39F','#5D2DFD']
})`
  flex: 1;
  background-color: #F5F5F5;

  padding: 5px;
`
export const Header = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
border-bottom-width: 0.5px;
`;

export const ContainerTitle = styled.View`
flex: 1;
align-items: center;
justify-content: center;
`;

export const Title = styled.Text`
${({theme}) => theme?.FONTS?.h2 ?? {}}
color: ${({theme}) => theme?.COLORS?.black ?? '#000'};
text-align: center;
`;

export const ContainerDetails = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;

margin-top: 8px;
`;

export const TextDetails = styled.Text`
${({theme}) => theme?.FONTS?.h4 ?? {}}
color: ${({theme}) => theme?.COLORS?.black ?? '#000'};
`;

export const TitleDetails = styled.Text`
${({theme}) => theme?.FONTS?.h4 ?? {}}
color: ${'#CCC'};
`;

export const TouchClose = styled.TouchableOpacity``;