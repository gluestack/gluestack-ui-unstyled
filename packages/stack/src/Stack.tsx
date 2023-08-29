import React, { forwardRef } from 'react';
import type { IStackProps } from './types';
//@ts-ignore
import { flattenChildren } from '@gluestack-ui/utils';

export function Stack<StyledStackProps>(
  Root: React.ComponentType<StyledStackProps>
) {
  return forwardRef(
    (
      {
        children,
        reversed,
        direction,
        ...props
      }: StyledStackProps & IStackProps,
      ref?: any
    ) => {
      const getSpacedChildren = (children: any) => {
        let childrenArray = React.Children.toArray(flattenChildren(children));
        childrenArray = reversed ? [...childrenArray].reverse() : childrenArray;
        childrenArray = childrenArray.map((child: any, index: number) => {
          return (
            <React.Fragment key={child.key ?? `spaced-child-${index}`}>
              {child}
            </React.Fragment>
          );
        });

        return childrenArray;
      };
      return (
        <Root
          ref={ref}
          {...(props as StyledStackProps)}
          sx={{
            flexDirection: direction,
          }}
        >
          {getSpacedChildren(children)}
        </Root>
      );
    }
  );
}
