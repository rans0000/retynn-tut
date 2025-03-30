import ShoppingList from "@/components/shopping-list";
import { retynConstants } from "@/lib/constant";
import { TItem } from "@/lib/types";

const fetchItems = async () => {
  try {
    return fetch(`${retynConstants.url}/products`)
      .then((response) => response.json())
      .then((data: TItem[]) =>
        data.map((item) => ({ ...item, selected: false })).splice(0, 10)
      );
  } catch {
    return [];
  }
};

export default async function HomePage() {
  const items = await fetchItems();

  return (
    <div className="home">
      <div className="shopper-container max-w-xl">
        <ShoppingList items={items} />
      </div>
    </div>
  );
}
