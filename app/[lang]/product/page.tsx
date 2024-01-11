import { Metadata, NextPage } from "next";

// for title, description of page(no need for library Next-SEO)
// metadata can use only in server
export const metadata: Metadata = {
  title: "Product",
  description: "This is a product page. Welcome to my next-playground",
};

const Product: NextPage = () => {
  return (
    <>
      <section>
        <p>this is product page</p>
      </section>
    </>
  );
};

export default Product;
