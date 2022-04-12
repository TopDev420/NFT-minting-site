import React from 'react';
import Image from 'next/image';
import { Flex, Box, useBreakpointValue } from '@chakra-ui/react';
import DesktopMenu from './DesktopMenu';
import { scroller } from 'react-scroll';
import { useScrollPosition } from '../../hooks';
import MobileMenu from './MobileMenu';

const Header = ({ setContract }) => {
  const variant = useBreakpointValue({ base: 'hamburger', lg: 'menu' }) || 'menu';

  const scroll = useScrollPosition();

  const bgOpacity = scroll > 0 ? '100%' : '100%';
  const bgHeight = scroll > 0 ? 130 : 130;
  const bgStyle = {
    transition: 'background .2s, height .2s',
    background: `linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) ${bgOpacity})`,
    height: bgHeight,
  };

  const onGoBackHome = () => {
    scroller.scrollTo('home', {
      duration: 500,
      smooth: 'easeInOutQuint',
    });
  };

  return (
    <Flex
      as="header"
      direction="row"
      justify="space-between"
      alignItems="center"
      position="fixed"
      w="100%"
      top={0}
      py={3}
      px={10}
      style={bgStyle}
      zIndex="99"
    >
      <Box w="60px" h="60px" position="relative" cursor="pointer" onClick={onGoBackHome}>
        <Image src="/crlogo.png" w="120px" h="120px" layout="fill" alt="Classic Rewards" />
      </Box>
      {variant === 'menu' && <DesktopMenu setContract={setContract} />}
      {variant === 'hamburger' && <MobileMenu setContract={setContract} />}
    </Flex>
  );
};

export default Header;
