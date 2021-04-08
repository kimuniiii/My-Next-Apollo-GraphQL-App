import React, { ComponentProps, useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Modal } from '.';
import { NONAME } from 'dns';

export default {
  title: 'atoms/Modal',
  component: Modal,
} as Meta;

type Props = ComponentProps<typeof Modal>;

const Template: Story<Props> = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        style={{
          width: '100px',
          height: '30px',
          color: '#fff',
          backgroundColor: '#17D4E5',
          border: 'none',
          outline: 'none',
          borderRadius: '3px',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
          cursor: 'pointer',
        }}
        onClick={() => setIsOpen(true)}
      >
        Open
      </button>
      <Modal isOpen={isOpen} setIsOpen={() => setIsOpen(!isOpen)} />
    </>
  );
};

export const Basic = Template.bind({});
