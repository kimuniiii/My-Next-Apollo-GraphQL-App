import { memo } from 'react';

export type MemoChildComponentProps = {
  text: string;
  count?: number;
  onClick?: () => void;
} & JSX.IntrinsicElements['div'];

/**
 * メモ化されたChildComponent
 * @param props {@link MemoChildComponentProps}
 */
export const MemoChildComponent = memo<MemoChildComponentProps>(
  ({ text, count, onClick, ...args }) => {
    console.log('MemoChildComponent');

    return (
      <div onClick={onClick} {...args}>
        {text} : {count}
      </div>
    );
  },
);

MemoChildComponent.displayName = 'MemoChildComponent';
