import React from 'react';
import {
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  VStack,
  HStack,
  Box,
  Icon,
  Heading,
  Tooltip,
  Button,
  Center,
} from '../../../ui-components';

import { Volume, Volume2Icon, LightbulbIcon } from 'lucide-react-native';

const SliderStory = ({
  value: valueProp = 60,
  ...props
}: {
  value: number;
  props: any;
}) => {
  const [sliderValue, setSliderValue] = React.useState(200);
  const handleChange = (value: any) => {
    setSliderValue(value);
  };

  // React.useEffect(() => {
  //   handleChange(valueProp);
  // }, [valueProp]);

  console.log(sliderValue, 'slidervaluee');
  return (
    <Box w={300} p={16} h={400}>
      <Slider
        w={300}
        mt="$4"
        value={sliderValue}
        onChange={(value: any) => {
          handleChange(value);
        }}
        step={100}
        minValue={0}
        maxValue={1000}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb
        // scaleOnPressed={2}
        />
      </Slider>
      {/* <Text>{sliderValue}</Text> */}
      {/* <Box w={300} bg="$pink300" h={20} flexDirection="row">
        {Array.from({ length: 10 }).map(function (_, index) {
          return (
            <Box
              bg={'#' + Math.floor(Math.random() * 16777215).toString(16)}
              flex={1}
            />
          );
        })}
      </Box> */}
    </Box>
  );
};

export default SliderStory;

export {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  VStack,
  Volume,
  HStack,
  Volume2Icon,
  Text,
  Box,
  LightbulbIcon,
  Icon,
  Heading,
  Tooltip,
  Button,
  Center,
};
