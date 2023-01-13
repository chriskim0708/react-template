import { FC } from 'react';
import useListStore from '@/hooks/useListStore';
import tw, { styled } from 'twin.macro';

const LedgerList = () => {
  const [snapshot] = useListStore();
  const { items } = snapshot;
  return (
    <div>
      {items.map((v) => (
        <div key={v.id}>quantity: {v.quantity}</div>
      ))}
    </div>
  );
};

const Ledgers: FC = () => {
  const [, listStore] = useListStore();

  const onClick = () => {
    listStore.addItem({ listId: Math.random() * 10000, quantity: 2 });
  };

  return (
    <>
      <div tw="font-20-b p-5">test</div>
      <StyledText>test</StyledText>
      <div>
        <button onClick={onClick}>add item</button>
        <LedgerList />
      </div>
    </>
  );
};

const StyledText = styled.div`
  ${tw`font-20-b p-5`}
`;

export default Ledgers;
