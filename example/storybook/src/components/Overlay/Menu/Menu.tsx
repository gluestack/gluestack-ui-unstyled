import React from 'react';

import {
  Button,
  ButtonText,
  GlobeIcon,
  HStack,
  Menu,
  MenuIcon,
  MenuItem,
  MenuItemLabel,
  Icon,
  Text,
  SettingsIcon,
  AddIcon,
  Center,
  Actionsheet,
  VStack,
  Box,
  Radio,
  CircleIcon,
  CheckIcon,
  Checkbox,
} from '../../../ui-components';
import { PaintBucket, PuzzleIcon } from 'lucide-react-native';

const MenuStory = ({ _placement = 'bottom' }: any) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClose = React.useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const handleOpen = React.useCallback(() => {
    // console.startMountTime = new Date().getTime();
    setIsOpen(true);
  }, [setIsOpen]);
  const [values, setValues] = React.useState('Eng');
  const [chkbxvalues, chkbxSetValues] = React.useState(['Illustration']);
  return (
    <Center>
      <Menu
        isOpen={true}
        placement={placement}
        disabledKeys={['Settings']}
        // eslint-disable-next-line react/no-unstable-nested-components
        trigger={({ ...triggerProps }) => {
          return (
            <Button {...triggerProps}>
              <ButtonText>Menu</ButtonText>
            </Button>
          );
        }}
      >
        <MenuItem key="Community" textValue="Community">
          <Icon as={GlobeIcon} size="sm" mr="$2" />
          <MenuItemLabel size="sm">Community</MenuItemLabel>
        </MenuItem>
        <MenuItem key="Plugins" textValue="Plugins">
          <Icon as={PuzzleIcon} size={16} mr="$2" />
          <MenuItemLabel size="sm">Plugins</MenuItemLabel>
        </MenuItem>
        <MenuItem key="Theme" textValue="Theme">
          <Icon as={PaintBucket} size={16} mr="$2" />
          <MenuItemLabel size="sm">Theme</MenuItemLabel>
        </MenuItem>
        <MenuItem key="Settings" textValue="Settings">
          <Icon as={SettingsIcon} size="sm" mr="$2" />
          <MenuItemLabel size="sm">Settings</MenuItemLabel>
        </MenuItem>
        <MenuItem key="Add account" textValue="Add account">
          <Icon as={AddIcon} size="sm" mr="$2" />
          <MenuItemLabel size="sm">Add account</MenuItemLabel>
        </MenuItem>
      </Menu>
    </Center>
  );
};

export default MenuStory;

export {
  Button,
  ButtonText,
  GlobeIcon,
  HStack,
  Menu,
  MenuIcon,
  MenuItem,
  MenuItemLabel,
  Icon,
  Text,
  SettingsIcon,
  AddIcon,
  PaintBucket,
  PuzzleIcon,
};
