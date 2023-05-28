import React from 'react';
import { Button } from '../../../../Kylin-ui/dist/index.es.js';

const ButtonNode = () => {
  return (
    <Button bg="red" color="white" px={2} py={5} shape={'round'} loading={{delay: 2000}}>
      I'm a Button
    </Button>
  );
};

export default ButtonNode;
