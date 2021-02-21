import React, { FC } from 'react';

import { Button } from '../../components/Button';
import { Checkbox } from '../../components/Checkbox';

const Home: FC = () => {
  return (
    <>
      <p>下のボタンをクリックして下さい</p>
      <Button
        text="Button"
        isDisabled={false}
        onClick={() => alert('ボタンをクリックしました')}
      />
      <p>下のチェックボックスをチェックしてください</p>
      <Checkbox name="Check" value="Check" text="Check" disabled={false} />
    </>
  );
};

export default Home;
