import Generic from "@/componnets/Generic";

export const revalidate = 10;

function DocsPage() {
  return (
    <div>
      Date is {new Date().toString()}
      <br />
      <Generic />
    </div>
  );
}

export default DocsPage;
