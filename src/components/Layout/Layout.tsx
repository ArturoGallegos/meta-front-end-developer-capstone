import React from 'react';
import Footer from 'src/components/Footer/Footer';
import Header from 'src/components/Header/Header';

type PropsType = {
  children: JSX.Element
}

const Layout: React.FC<PropsType> = ({children}: PropsType) => {
  return (<>
    <Header />
    <main>{children}</main>
    <Footer />
  </>);
};

export default Layout;
