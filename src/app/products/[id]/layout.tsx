import React from "react";

const ProductLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className="bg-slate-900 text-white p-4 text-center">
        PRODUCTS
      </header>
      <div>{children}</div>;
    </>
  );
};

export default ProductLayout;
