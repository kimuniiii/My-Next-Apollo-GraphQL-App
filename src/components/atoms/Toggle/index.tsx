import React, { FC, useState } from 'react';

import { Presenter } from './Presenter';

export const Toggle: FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <Presenter id="toggle" isChecked={isChecked} onChange={handleChange} />
  );
};
