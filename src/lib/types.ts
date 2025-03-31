/**
 * All types have a 'T' prefix as a convention, to designate a type or interface
 */
export type TItem = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  selected: boolean;
};

export type TAuthFormState = {
  email: string;
  error?: string;
};

export type TCartState = {
  items: TItem[];
  sum: number;
  total: number;
  discount: number;
};
// we can make sure our dispatch accepts only the right combination of arguments.
export type TCartAction =
  | { type: "set_items"; payload: TItem[] }
  | { type: "toggle_item"; payload: TItem }
  | { type: "reset_items" };
