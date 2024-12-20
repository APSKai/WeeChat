import { PropsWithChildren } from "react";
import React from 'react';

export default function ChatProvider({children}: PropsWithChildren) {
  return(
    <>
      {children}
    </>
  )
}