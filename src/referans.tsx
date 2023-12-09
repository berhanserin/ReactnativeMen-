import * as React from 'react';
export const navigationRef: any = React.createRef();
//@ts-ignore
export function navigate(name, params) {
  //@ts-ignore
  navigationRef.current?.navigate(name, params);
}
