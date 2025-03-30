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
