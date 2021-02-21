import React, { FC } from 'react';

import { Button } from '../../components/Button';
import { Checkbox } from '../../components/Checkbox';
import { Tab } from '../../components/Tab';

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
      <p>タブ</p>
      <Tab
        title="タブ"
        content={[
          <Button
            text="Button"
            isDisabled={false}
            onClick={() => alert('ボタンをクリックしました')}
          />,
        ]}
      />
    </>
  );
};

export default Home;
