import React, { useState } from 'react';
import { PanResponder } from 'react-native';

interface MoveResult {
  moveProps: any;
}

interface YourSliderProps {
  minValue: number;
  maxValue: number;
  trackLayout: { width: number; height: number };
  step: number;
  // Add other necessary properties
}

export function useMove(props: any): MoveResult {
  let { onMoveStart, onMove, onMoveEnd, yourSliderProps } = props;

  const [initialMoveX, setInitialMoveX] = useState(0);
  const [initialMoveY, setInitialMoveY] = useState(0);
  // const [initialValue, setInitialValue] = useState(0);
  // const [state, setState] = useState(0);
  const panResponder = React.useMemo(
    () =>
      PanResponder.create({
        onMoveShouldSetPanResponderCapture: (_event) => {
          return true;
        },
        onPanResponderGrant: (_evt, gestureState) => {
          onMoveStart?.({
            type: 'movestart',
            pointerType: 'touch',
          });

          // const { minValue, maxValue, trackLayout, step, value } =
          //   yourSliderProps;

          setInitialMoveX(gestureState.moveX);
          setInitialMoveY(gestureState.moveY);
          // setInitialValue(value);

          // onMoveStart?.({
          //   type: 'movestart',
          //   pointerType: 'touch',
          //   startMoveX: gestureState.moveX,
          //   startMoveY: gestureState.moveY,
          // });
        },
        onPanResponderStart: (_evt, gestureState) => {
          // gestureState.x0 = gestureState.moveX;
          // gestureState.y0 = gestureState.moveY;
        },
        onPanResponderMove: (_event, gestureState) => {
          const deltaX = gestureState.moveX - initialMoveX;
          const deltaY = gestureState.moveY - initialMoveY;
          if (deltaX === 0 && deltaY === 0) {
            return;
          }

          if (deltaX) {
            // setInitialMoveX(gestureState.moveX);
            // setInitialMoveY(gestureState.moveY);
            onMove({
              type: 'move',
              pointerType: 'touch',
              deltaX: deltaX, // snappedThumbX,
              deltaY: deltaY,
            });
          }
        },
        onPanResponderRelease: () => {
          onMoveEnd?.({
            type: 'moveend',
            pointerType: 'touch',
          });
        },
      }),
    [onMove, onMoveEnd, onMoveStart, yourSliderProps]
  );

  return { moveProps: panResponder.panHandlers };
}
