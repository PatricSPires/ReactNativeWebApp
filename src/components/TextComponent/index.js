import React from 'react';
import styled from 'styled-components/native';
import {Platform} from 'react-native';
import {View} from 'react-native-web';

const TextA = styled.Text`
  color: red;

  ${Platform.OS === 'web' && 'cursor: pointer'};
`;

const TextComponent = () => {
  return (
    <View>
      <TextA>Alo alo senhores do native</TextA>
    </View>
  );
};

export default TextComponent;
