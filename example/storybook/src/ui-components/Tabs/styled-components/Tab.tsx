//@ts-nocheck
import { styled } from '../../styled';
import { Pressable } from '../../Pressable';

export default styled(
  Pressable,
  {
    'bg': 'transparent',
    '_web': {
      outlineWidth: 0,
    },

    'borderBottomWidth': 1,
    'borderBottomColor': '$borderLight300',
    '_title': {
      color: '$textLight900',
    },
    '_icon': {
      color: '$backgroundLight900',
    },
    ':hover': {
      borderBottomColor: '$primary600',
      _title: {
        color: '$primary600',
      },
      _icon: {
        color: '$primary600',
      },
    },
    ':active': {
      borderBottomColor: '$primary500',
      _title: {
        color: '$primary500',
      },
      _icon: {
        color: '$primary500',
      },
    },
    'variants': {
      size: {
        md: {
          px: '$5',
          py: '$3',

          _text: {
            fontSize: '$md',
            lineHeight: '$md',
          },
        },
      },
    },

    'defaultProps': {
      size: 'md',
    },
  },
  { descendantStyle: ['_title', '_icon'], ancestorStyle: ['_tab'] }
);
