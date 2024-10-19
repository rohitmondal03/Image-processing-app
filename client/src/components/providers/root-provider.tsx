import { type FC, type ReactNode, memo } from 'react'

import Header from '../global/header';
import Footer from '../global/footer';

interface RootProviderProps {
  children: ReactNode;
}

export const RootProvider: FC<RootProviderProps> = memo(({children}) =>  {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
})