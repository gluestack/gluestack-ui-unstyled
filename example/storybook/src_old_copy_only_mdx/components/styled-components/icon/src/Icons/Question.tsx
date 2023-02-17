import { createIcon } from '@universa11y/icon';
import Root from '../styled-components/Root';
import { G, Path } from 'react-native-svg';
import React from 'react';

export const QuestionIcon = createIcon({
  Root,
  viewBox: '0 0 24 24',
  d: 'M12 0C9.62663 0 7.30655 0.703787 5.33316 2.02236C3.35977 3.34094 1.8217 5.21508 0.913451 7.4078C0.00519943 9.60051 -0.232441 12.0133 0.230582 14.3411C0.693605 16.6688 1.83649 18.807 3.51472 20.4853C5.19295 22.1635 7.33115 23.3064 9.65892 23.7694C11.9867 24.2324 14.3995 23.9948 16.5922 23.0865C18.7849 22.1783 20.6591 20.6402 21.9776 18.6668C23.2962 16.6934 24 14.3734 24 12C23.9966 8.81846 22.7312 5.76821 20.4815 3.51852C18.2318 1.26883 15.1815 0.00344108 12 0V0ZM12 19C11.7033 19 11.4133 18.912 11.1666 18.7472C10.92 18.5824 10.7277 18.3481 10.6142 18.074C10.5007 17.7999 10.4709 17.4983 10.5288 17.2074C10.5867 16.9164 10.7296 16.6491 10.9393 16.4393C11.1491 16.2296 11.4164 16.0867 11.7074 16.0288C11.9983 15.9709 12.2999 16.0006 12.574 16.1142C12.8481 16.2277 13.0824 16.42 13.2472 16.6666C13.412 16.9133 13.5 17.2033 13.5 17.5C13.5 17.8978 13.342 18.2794 13.0607 18.5607C12.7794 18.842 12.3978 19 12 19ZM13.6 12.92C13.4216 12.9979 13.2698 13.1261 13.1632 13.289C13.0566 13.4519 12.9999 13.6423 13 13.837C13 14.1022 12.8946 14.3566 12.7071 14.5441C12.5196 14.7316 12.2652 14.837 12 14.837C11.7348 14.837 11.4804 14.7316 11.2929 14.5441C11.1054 14.3566 11 14.1022 11 13.837C10.9999 13.2532 11.1702 12.682 11.4899 12.1936C11.8096 11.7051 12.2649 11.3205 12.8 11.087C13.1305 10.9427 13.4159 10.7118 13.6259 10.4186C13.8359 10.1255 13.9627 9.78099 13.993 9.42163C14.0232 9.06228 13.9557 8.70144 13.7976 8.37731C13.6396 8.05317 13.3968 7.77781 13.095 7.58037C12.7932 7.38292 12.4437 7.27074 12.0834 7.25571C11.7231 7.24067 11.3654 7.32333 11.0482 7.49495C10.7311 7.66656 10.4662 7.92074 10.2817 8.23057C10.0971 8.54041 9.99982 8.89437 10 9.255C10 9.52021 9.89465 9.77457 9.70711 9.9621C9.51957 10.1496 9.26522 10.255 9 10.255C8.73479 10.255 8.48043 10.1496 8.2929 9.9621C8.10536 9.77457 8 9.52021 8 9.255C7.99999 8.53384 8.19495 7.82608 8.56423 7.20665C8.93352 6.58721 9.4634 6.07913 10.0978 5.73618C10.7322 5.39324 11.4475 5.22817 12.168 5.25847C12.8886 5.28876 13.5875 5.51329 14.1909 5.90828C14.7942 6.30327 15.2796 6.85404 15.5956 7.50229C15.9116 8.15054 16.0464 8.87216 15.9859 9.59077C15.9253 10.3094 15.6716 10.9983 15.2516 11.5845C14.8316 12.1707 14.261 12.6325 13.6 12.921V12.92Z',
});

export const QuestionOutlineIcon = createIcon({
  Root,
  viewBox: '0 0 24 24',
  path: (
    <G>
      <Path d="M12 20.75C9.67936 20.75 7.45376 19.8281 5.81282 18.1872C4.17187 16.5462 3.25 14.3206 3.25 12C3.25 9.67936 4.17187 7.45376 5.81282 5.81282C7.45376 4.17187 9.67936 3.25 12 3.25C14.3206 3.25 16.5462 4.17187 18.1872 5.81282C19.8281 7.45376 20.75 9.67936 20.75 12C20.75 14.3206 19.8281 16.5462 18.1872 18.1872C16.5462 19.8281 14.3206 20.75 12 20.75ZM12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 9.34784 20.9464 6.8043 19.0711 4.92893C17.1957 3.05357 14.6522 2 12 2C9.34784 2 6.8043 3.05357 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C6.8043 20.9464 9.34784 22 12 22Z" />
      <Path d="M8.70533 9.34281C8.70369 9.38156 8.70999 9.42024 8.72385 9.45647C8.73771 9.4927 8.75883 9.52571 8.78592 9.55347C8.81301 9.58123 8.84549 9.60316 8.88136 9.6179C8.91724 9.63265 8.95575 9.6399 8.99453 9.63921H9.98453C10.1501 9.63921 10.2821 9.50361 10.3037 9.33921C10.4117 8.55201 10.9517 7.97841 11.9141 7.97841C12.7373 7.97841 13.4909 8.39001 13.4909 9.38001C13.4909 10.142 13.0421 10.4924 12.3329 11.0252C11.5253 11.612 10.8857 12.2972 10.9313 13.4096L10.9349 13.67C10.9362 13.7487 10.9684 13.8238 11.0245 13.879C11.0806 13.9343 11.1562 13.9652 11.2349 13.9652H12.2081C12.2877 13.9652 12.364 13.9336 12.4203 13.8773C12.4765 13.8211 12.5081 13.7448 12.5081 13.6652V13.5392C12.5081 12.6776 12.8357 12.4268 13.7201 11.756C14.4509 11.2004 15.2129 10.5836 15.2129 9.28881C15.2129 7.47561 13.6817 6.59961 12.0053 6.59961C10.4849 6.59961 8.81933 7.30761 8.70533 9.34281ZM10.5737 16.2584C10.5737 16.898 11.0837 17.3708 11.7857 17.3708C12.5165 17.3708 13.0193 16.898 13.0193 16.2584C13.0193 15.596 12.5153 15.1304 11.7845 15.1304C11.0837 15.1304 10.5737 15.596 10.5737 16.2584Z" />
    </G>
  ),
});