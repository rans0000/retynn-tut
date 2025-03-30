import ShoppingList from "@/components/shopping-list";
import { fetchProducts } from "@/data-loaders/product-data";

export default async function HomePage() {
  /**
   * Note: this page is server rendered.
   * the data will be loaded once in the server and then complete HTML sent to the browser
   * <ShoppingList /> is a client component to which we are sending the props (from the server)
   * normally await requires a try...catch and handle error messages
   * similar to how we tackle useActionState
   */

  const items = await fetchProducts(10);
  console.log("yay");

  return (
    <div className="home">
      <div className="shopper-container max-w-xl">
        <ShoppingList items={items} />
      </div>
    </div>
  );
}
