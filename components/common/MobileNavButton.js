import React from 'react';
import { ListItem } from '@chakra-ui/react';
import { scroller } from 'react-scroll';

const MobileNavButton = ({ targetElementId, label, onClose }) => {
  const onClick = () => {
    scroller.scrollTo(targetElementId, {
      duration: 500,
      smooth: 'easeInOutQuint',
    });
    onClose?.();
  };

  return (
    <ListItem mb={3} onClick={onClick}>
      {label?.toUpperCase()}
    </ListItem>
  );
};

export default MobileNavButton;
