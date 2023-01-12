import Ledger from './Ledger';

describe('Ledger', () => {
  let ledger: Ledger;

  beforeEach(() => {
    ledger = new Ledger();
  });

  it('adds an item', () => {
    ledger = ledger.addItem({ ledgerId: 1, quantity: 1 });
    expect(ledger.items).toHaveLength(1);
    ledger = ledger.addItem({ ledgerId: 2, quantity: 1 });
    expect(ledger.items).toHaveLength(2);
  });
});
