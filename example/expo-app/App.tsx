import React from 'react';
import { SafeAreaView } from 'react-native';
import {
  Box,
  GluestackUIProvider,
  Menu,
  MenuItem,
  MenuItemLabel,
  Icon,
  GlobeIcon,
  SettingsIcon,
  AddIcon,
  Button,
  ButtonText,
  config,
} from '@components';

const AddToStackButton = ({ ...triggerProps }) => (
  <Button {...triggerProps}>
    <ButtonText>Menu</ButtonText>
  </Button>
);

const PLACEMENT = 'bottom';

const Example = () => {
  return (
    <Box
      h="100%"
      justifyContent="center"
      px={4}
      bg="$backgroundLight0"
      sx={{
        _web: {
          minHeight: '100vh',
        },
      }}
    >
      <Menu placement={PLACEMENT} trigger={AddToStackButton}>
        <MenuItem key="Community" textValue="Community">
          <Icon as={GlobeIcon} size="sm" mr="$2" />
          <MenuItemLabel size="sm">Community</MenuItemLabel>
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
    </Box>
  );
};
export default function App() {
  return (
    <SafeAreaView>
      <GluestackUIProvider config={config.theme}>
        <Example />
      </GluestackUIProvider>
    </SafeAreaView>
  );
}
