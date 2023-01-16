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
      <div tw="body-20-b p-5">test</div>
      <StyledText>tw style test</StyledText>
      <StyledContent>emotion style test</StyledContent>
      <div>
        <button onClick={onClick}>add item</button>
        <LedgerList />
      </div>
    </>
  );
};

const StyledText = styled.div`
  ${tw`body-20-b p-5`}
`;

const StyledContent = styled.div`
  ${({ theme }) => theme.typography.body_20_b}
`;

export default Ledgers;
