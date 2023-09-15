import React from 'react';
import {
  Input,
  InputInput,
  InputSlot,
  InputIcon,
  Center,
  Button,
  ButtonText,
  Box,
  VStack,
  Text,
  Heading,
  Icon,
  SearchIcon,
  FormControl,
} from '../../../ui-components';
import { EyeIcon, EyeOffIcon } from 'lucide-react-native';
import { useState } from 'react';

const InputStory = ({ ...props }: any) => {
  const [value, setValue] = React.useState('');

  return (
    <Input {...props}>
      <InputInput
        onChange={(e: any) => {
          setValue(e.nativeEvent.text);
        }}
        value={value}
        placeholder="Enter Text here"
      />
      <InputSlot px="$4">
        <InputIcon as={SearchIcon} />
      </InputSlot>
    </Input>
  );
};

export default InputStory;

export {
  Input,
  InputInput,
  InputSlot,
  InputIcon,
  Center,
  Button,
  ButtonText,
  Box,
  VStack,
  Text,
  Heading,
  useState,
  Icon,
  EyeIcon,
  EyeOffIcon,
  FormControl,
};
