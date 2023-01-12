export default class Item {
  readonly id;
  readonly ledgerId;
  readonly quantity;

  constructor({ id, ledgerId, quantity }: { id: number; ledgerId: number; quantity: number }) {
    this.id = id;
    this.ledgerId = ledgerId;
    this.quantity = quantity;
  }
}
