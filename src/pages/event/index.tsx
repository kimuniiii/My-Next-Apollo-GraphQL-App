import { NextPage } from 'next';
import styled from 'styled-components';

const EventPracticePage: NextPage = () => {
  return (
    <StDivFlexRoot>
      <h1 style={{ fontSize: 20 }}>event.target と event.currentTarget の違い</h1>

      <p style={{ fontSize: 16 }}>・event.target : イベントを発生させる原因となった要素</p>
      <p style={{ fontSize: 16 }}>・event.currentTarget : イベントハンドラが実際に付与された要素</p>

      <button
        type='button'
        onClick={(event) => {
          const { value } = event.target as HTMLButtonElement;
          console.log(`event.target`);
          console.log(event.target);

          console.log(`event.target.value`);
          console.log(value);

          console.log(`event.currentTarget`);
          console.log(event.currentTarget);

          console.log(`event.currentTarget.value`);
          console.log(event.currentTarget.value);
        }}
      >
        <strong>この文字の領域をクリックしてみてね</strong>
      </button>
    </StDivFlexRoot>
  );
};

export default EventPracticePage;

const StDivFlexRoot = styled.div`
  display: grid;
  grid-gap: 4px;
  padding: 16px;
`;
