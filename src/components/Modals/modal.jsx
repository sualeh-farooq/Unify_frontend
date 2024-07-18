import React, { useState } from 'react';
import { Button, Modal } from 'antd';

export default function ModalComp() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Open Modal of 1000px width
      </Button>
   
    </>
  );
};
