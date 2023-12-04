import React, { memo } from 'react';
import { forwardRef } from 'react';
import { TabProvider } from './TabProvider';
import { useControllableState } from '@gluestack-ui/hooks';

export const Tabs = <StyledTabs,>(
  StyledTabs: React.ComponentType<StyledTabs>
) =>
  memo(
    forwardRef(
      (
        {
          value,
          onChange,
          defaultValue,
          ...props
        }: StyledTabs & {
          value?: string;
          defaultValue: string;
          onChange: (value: string) => void;
        },
        ref?: any
      ) => {
        // const DEFAULT_TAB = 'tab-0';
        // const [currentActiveTab, setCurrentActiveTab] = React.useState(
        //   value ?? DEFAULT_TAB
        // );

        const [currentActiveTab, setCurrentActiveTab] = useControllableState({
          value,
          defaultValue,
          onChange: (val) => {
            onChange && onChange(val);
          },
        });

        // const onChange = (currentValue: string) =>
        //   setCurrentActiveTab(currentValue);

        return (
          <TabProvider
            currentActiveTab={currentActiveTab}
            onChange={setCurrentActiveTab}
          >
            <StyledTabs {...(props as StyledTabs)} ref={ref} />
          </TabProvider>
        );
      }
    )
  );
