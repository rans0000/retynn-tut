import ShoppingList from "@/components/shopping-list";

export default function HomePage() {
  return (
    <div className="home">
      <div className="shopper-container max-w-xl">
        <ShoppingList />
      </div>
    </div>
  );
}
