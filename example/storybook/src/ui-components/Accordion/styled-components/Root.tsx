import { styled } from '../../styled';
import { View } from 'react-native';

export default styled(
  View,
  {
    'maxWidth': 640,
    'width': '80%',
    'gap': 24,
    'py': '$7',

    ':disabled': {
      _web: {
        // @ts-ignore
        cursor: 'not-allowed',
      },
    },
    'variants': {
      size: {
        sm: {
          _titleText: {
            fontSize: '$lg',
            fontFamily: '$body',
            fontWeight: '$bold',
            lineHeight: '$lg',
          },
          _contentText: {
            fontSize: '$md',
            fontFamily: '$body',
            fontWeight: '$normal',
            lineHeight: '$md',
          },
        },
        md: {
          _titleText: {
            fontSize: '$xl',
            fontFamily: '$body',
            fontWeight: '$bold',
            lineHeight: '$2xl',
          },
          _contentText: {
            fontSize: '$lg',
            fontFamily: '$body',
            fontWeight: '$normal',
            lineHeight: '$xl',
          },
        },
        lg: {
          _titleText: {
            fontSize: '$2xl',
            fontFamily: '$body',
            fontWeight: '$bold',
            lineHeight: '$3xl',
          },
          _contentText: {
            fontSize: '$xl',
            fontFamily: '$body',
            fontWeight: '$normal',
            lineHeight: '2$xl',
          },
        },
      },
      variant: {
        filled: {
          borderRadius: '$lg',
          _light: {
            backgroundColor: 'white',
            shadowColor: '$backgroundLight900',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowRadius: 8,
            shadowOpacity: 0.2,
            elevation: 10,
          },
          _dark: {
            backgroundColor: '$backgroundDark900',
          },
        },
        unfilled: {
          shadowColor: 'transparent',
          shadowOffset: {
            width: 0,
            height: 0,
          },
          _light: {
            backgroundColor: 'transparent',
          },
          _dark: {
            backgroundColor: 'transparent',
          },
        },
      },
    },
    'defaultProps': {
      theme: 'light',
      size: 'sm',
      variant: 'filled',
    },
  },
  {
    descendantStyle: ['_text', '_titleText', '_contentText', '_icon'],
    ancestorStyle: [],
  }
);
