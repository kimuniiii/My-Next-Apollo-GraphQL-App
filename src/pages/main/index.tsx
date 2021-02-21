import React, { FC } from "react";
import { Button } from "../../components/Button";

const Home: FC = () => {
  return (
    <>
      <p>下のボタンをクリックして下さい</p>
      <Button
        text="Button"
        isDisabled={false}
        onClick={() => alert("クリック")}
      />
    </>
  );
};

export default Home;
