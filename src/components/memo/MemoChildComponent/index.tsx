import { memo } from 'react';

export type MemoChildComponentProps = {
  text: string;
  count?: number;
  numberArray?: number[];
  onClick?: () => void;
} & JSX.IntrinsicElements['div'];

/**
 * メモ化されたChildComponent
 * @param props {@link MemoChildComponentProps}
 */
export const MemoChildComponent = memo<MemoChildComponentProps>(
  ({ text, count, numberArray, onClick, ...args }) => {
    console.log('MemoChildComponent');

    return (
      <div onClick={onClick} {...args}>
        {text} : {count}
        {numberArray}
      </div>
    );
  },
);

MemoChildComponent.displayName = 'MemoChildComponent';
