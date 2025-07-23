import { Container } from "./styles";
import { Header } from "../components/Header";
import { Categories } from "../components/Categories";
import { BottomNav } from "../components/BottomNav";
import { SearchBar } from "../components/SearchBar";
import { Products } from "../components/Products";
import { ProductModal } from "../components/ProductModal";
import { Product, products } from "../mocks/products";
import { useState } from "react";
import { Cart } from "../components/Cart";
import { Category } from "../mocks/categories";

export interface CartItem {
  id: string;
  quantity: number;
  sellerId: string;
}

export function Main() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const [cart, setCart] = useState<CartItem[]>([]);

  const [filterText, setFilterText] = useState("");

  function addToCart(item: CartItem) {
    setCart((prevState) => [...prevState, item]);
  }

  const filteredProducts = [...products].filter(({ name }) => {
    const containsName = filterText
      ? name.toLowerCase().includes(filterText.toLowerCase())
      : true;
    const containsCategory = selectedCategory
      ? selectedCategory.name === "Frutas"
      : true;

    return containsName && containsCategory;
  });

  return (
    <>
      <Container>
        <Header />
        <SearchBar onSearch={setFilterText} />
        <Categories onChangeCategory={setSelectedCategory} />
        <Products
          products={filteredProducts}
          setSelectedProduct={setSelectedProduct}
        />
      </Container>

      <Cart cart={cart} setCart={setCart} />
      <BottomNav />

      <ProductModal
        selectedProduct={selectedProduct}
        visible={selectedProduct !== null}
        setVisible={() => setSelectedProduct(null)}
        onAddToCart={addToCart}
      />
    </>
  );
}
