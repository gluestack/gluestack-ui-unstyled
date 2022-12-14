import { useFocusRing } from '@react-native-aria/focus';
import React, { forwardRef } from 'react';
import { composeEventHandlers } from '../utils';
import { useFocus, useHover, useIsPressed } from '../ReactNativeAria';
import { UIContext } from '../UIProvider';

export const ActionsheetItem = forwardRef(
  ({ children, ...props }: any, ref: any) => {
    const { focusProps: focusRingProps }: any = useFocusRing();
    const { pressableProps, isPressed } = useIsPressed();
    const { isFocused, focusProps } = useFocus();
    const { isHovered, hoverProps }: any = useHover();

    const { StyledActionsheetItem } = React.useContext(UIContext);
    return (
      <StyledActionsheetItem
        ref={ref}
        states={{
          hover: isHovered,
          focus: isFocused,
          active: isPressed,
        }}
        onPressIn={composeEventHandlers(
          props?.onPressIn,
          pressableProps.onPressIn
        )}
        onPressOut={composeEventHandlers(
          props?.onPressOut,
          pressableProps.onPressOut
        )}
        // @ts-ignore - web only
        onHoverIn={composeEventHandlers(props?.onHoverIn, hoverProps.onHoverIn)}
        // @ts-ignore - web only
        onHoverOut={composeEventHandlers(
          props?.onHoverOut,
          hoverProps.onHoverOut
        )}
        // @ts-ignore - web only
        onFocus={composeEventHandlers(
          composeEventHandlers(props?.onFocus, focusProps.onFocus),
          focusRingProps.onFocus
        )}
        // @ts-ignore - web only
        onBlur={composeEventHandlers(
          composeEventHandlers(props?.onBlur, focusProps.onBlur),
          focusRingProps.onBlur
        )}
        {...props}
      >
        {children}
      </StyledActionsheetItem>
    );
  }
);
