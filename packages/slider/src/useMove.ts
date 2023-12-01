import React from 'react';
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

          console.log(gestureState, 'deltaX, deltaY >>>>>');

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
          // const deltaX = gestureState.moveX - gestureState.x0;
          // const deltaY = gestureState.moveY - gestureState.y0;

          if (gestureState.dx === 0 && gestureState.dy === 0) {
            return;
          }

          // const { minValue, maxValue, trackLayout, step } = yourSliderProps;

          // let trackWidth = trackLayout.width;
          // let trackHeight = trackLayout.height;

          // // Calculate the range and number of steps
          // const range = maxValue - minValue;
          // const steps = range / step;

          // // Calculate the step size based on the track width
          // const stepSizeX = trackWidth / steps;
          // const stepSizeY = trackHeight / steps;

          // console.log(
          //   gestureState.x0,
          //   'gestureState.x0',
          //   stepSizeX,
          //   'stepSizeX',
          //   gestureState.dx,
          //   'gestureState.dx',
          //   Math.round(gestureState.dx / stepSizeX),
          //   'Math.round(gestureState.dx / stepSizeX)',
          //   Math.round(gestureState.dx / stepSizeX) * stepSizeX,
          //   'Math.round(gestureState.dx / stepSizeX) * stepSizeX',
          //   'HELLO',
          //   gestureState.moveX,
          //   'gestureState.moveX'
          // );

          // // Calculate the snapped thumb position based on the step size
          // const snappedThumbX =
          //   Math.round(gestureState.dx / stepSizeX) * stepSizeX;
          // const snappedThumbY =
          //   Math.round(gestureState.dy / stepSizeY) * stepSizeY;

          onMove({
            type: 'move',
            pointerType: 'touch',
            deltaX: gestureState.dx,
            deltaY: gestureState.dy,
          });
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
