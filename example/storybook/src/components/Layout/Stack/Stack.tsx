import React from 'react';
import { Stack, Box } from '../../../ui-components';

const StackStory = ({ size, reversed, ...props }: any) => {
  return (
    <Stack direction={'row'} size={size} mt="$5" reversed={reversed} {...props}>
      <Box sx={{ w: 100, h: 100, bg: '$blue300' }} />
      <Box sx={{ w: 100, h: 100, bg: '$blue400' }} />
      <Box sx={{ w: 100, h: 100, bg: '$blue500' }} />
      <Box sx={{ w: 100, h: 100, bg: '$blue600' }} />
    </Stack>
  );
};

export default StackStory;

export { Box, Stack };
