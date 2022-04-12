import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  const [contract, setContract] = useState(null);

  return (
    <Box color="white">
      <Header setContract={setContract} />
      {React.cloneElement(children, { contract })}
      <Footer />
    </Box>
  );
};

export default Layout;
