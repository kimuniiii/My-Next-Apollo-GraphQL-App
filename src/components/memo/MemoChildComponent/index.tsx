import { memo } from 'react';

export type MemoChildComponentProps = {
  text: string;
} & JSX.IntrinsicElements['div'];

/**
 * メモ化されたChildComponent
 * @param props {@link MemoChildComponentProps}
 */
export const MemoChildComponent = memo<MemoChildComponentProps>(({ text, ...args }) => {
  console.log('子供のコンポーネントは再レンダリングされない');
  return <div {...args}>{text}</div>;
});

MemoChildComponent.displayName = 'MemoChildComponent';
