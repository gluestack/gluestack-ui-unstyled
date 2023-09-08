import React from 'react';
import {
  Button,
  ButtonText,
  config,
  GlobeIcon,
  GluestackUIProvider,
  Icon,
  Menu,
  MenuItem,
  MenuItemLabel,
} from '@components';
export default function App() {
  return (
    <GluestackUIProvider config={config.theme}>
      <Menu
        isOpen={true}
        placement={'top'}
        disabledKeys={['Settings']}
        // eslint-disable-next-line react/no-unstable-nested-components
        trigger={({ ...triggerProps }) => {
          return (
            <Button {...triggerProps} mt="auto">
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
          <Icon as={GlobeIcon} size="sm" mr="$2" />
          <MenuItemLabel size="sm">Plugins</MenuItemLabel>
        </MenuItem>
        <MenuItem key="Theme" textValue="Theme">
          <Icon as={GlobeIcon} size="sm" mr="$2" />
          <MenuItemLabel size="sm">Theme</MenuItemLabel>
        </MenuItem>
        <MenuItem key="Settings" textValue="Settings">
          <Icon as={GlobeIcon} size="sm" mr="$2" />
          <MenuItemLabel size="sm">Settings</MenuItemLabel>
        </MenuItem>
        <MenuItem key="Add account" textValue="Add account">
          <Icon as={GlobeIcon} size="sm" mr="$2" />
          <MenuItemLabel size="sm">Add account</MenuItemLabel>
        </MenuItem>
      </Menu>
    </GluestackUIProvider>
  );
}
