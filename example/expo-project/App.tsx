import React from 'react';
import { config } from './gluestack-ui.config';
import {
  Box,
  Center,
  GluestackUIProvider,
  SliderFilledTrack,
  SliderThumb,
  Slider,
  SliderTrack,
} from 'ui-components';

export const Provider = ({ children }: any) => {
  return (
    <GluestackUIProvider config={config.theme}>
      <Box
        sx={{
          _dark: {
            bg: '$backgroundDark950',
          },
        }}
        flex={1}
      >
        <Center flex={1} px="$10">
          {children}
        </Center>
      </Box>
    </GluestackUIProvider>
  );
};

const App = () => {
  return (
    <Provider>
      <Slider sliderTrackHeight={8} value={80}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Provider>
  );
};

export default App;
