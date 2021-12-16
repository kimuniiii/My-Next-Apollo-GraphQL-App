import { memo } from 'react';

export type ChildComponentProps = {
  text: string;
} & JSX.IntrinsicElements['div'];

/**
 * メモ化されたChildComponent
 * @param props {@link ChildComponentProps}
 */
export const MemoChildComponent = memo<ChildComponentProps>(({ text, ...args }) => {
  console.log('子供のコンポーネントは再レンダリングされない');
  return <div {...args}>{text}</div>;
});

MemoChildComponent.displayName = 'MemoChildComponent';

/**
 * メモ化されてないChildComponent
 * @param props {@link ChildComponentProps}
 */
export const ChildComponent = ({ text, ...args }: ChildComponentProps) => {
  console.log('子供のコンポーネントは再レンダリングされる');
  return <div {...args}>{text}</div>;
};
