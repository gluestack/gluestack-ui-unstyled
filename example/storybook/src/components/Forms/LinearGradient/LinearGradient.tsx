import type { ComponentStory } from '@storybook/react-native';
import React from 'react';
import { Box } from '../../../ui-components';

import { LinearGradient } from '../../../ui-components';

type MyLinearGradientStory = ComponentStory<typeof LinearGradient>;

const LinearGradientStory: MyLinearGradientStory = ({ ...props }: any) => {
  return (
    <LinearGradient {...props} colors={['rgba(0,0,0,0.8)', 'transparent']}>
      <Box>ddnb</Box>
    </LinearGradient>
  );
};

export default LinearGradientStory;

export { LinearGradient };
