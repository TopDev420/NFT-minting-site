import React, { useState } from 'react';
import { Box, HStack } from '@chakra-ui/react';
import Image from 'next/image';
import DesktopNavButton from './DesktopNavButton';
import styles from './styles/nav.module.css';
import { ConnectButton } from '../ConnectButton';
const NAV_STYLE = { listStyle: 'none', paddingLeft: 0 };

const DesktopMenu = ({ setContract }) => {
  return (
    <Box as="nav" pt="2">
      <HStack as="ul" textStyle="navButton" spacing={8} style={NAV_STYLE} fontWeight="bold">
        <li>
          <Image src="/cross-chain.png" height="60px" width="116px" alt="Cross Chain" />
        </li>
        <li>
          <ConnectButton setContract={setContract} />
        </li>
        <li className={styles.menuBtn}>
          <a href="/Classic_Reward_Token_WhitePaper.pdf" target="_blank">
            WHITEPAPER
          </a>
        </li>
        <DesktopNavButton targetElementId="mint" label="MINT" />
        <li className={styles.menuBtn}>
          <a href="https://github.com/AuditRateTech/Smart-Contract-Audits/blob/main/Classic_Rewards_NFT_0x288F79cd26AaebCB3dd80f8FDb6904c8b1dBea74.pdf" target="_blank">
            BNB AUDIT
          </a>
        </li>
        <DesktopNavButton targetElementId="battle" label="BATTLE" />
        <DesktopNavButton targetElementId="lore" label="LORE" />
        <DesktopNavButton targetElementId="roadmap" label="ROADMAP" />
        <DesktopNavButton targetElementId="team" label="TEAM" />
        <li className={styles.disabledMenuBtn}>
          {/* <a href="" target="_blank"> */}
            MY WALLET
          {/* </a> */}
        </li>
        <DesktopNavButton targetElementId="faq" label="FAQ" />
      </HStack>
    </Box>
  );
};

export default DesktopMenu;
