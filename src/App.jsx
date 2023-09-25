import { useState } from "react";
import "./App.css";
import Nav from "./Components/Nav";
import Middle from "./Components/Middle";
import MobileNav from "./Components/MobileNav";
import Cart from "./Components/Cart";

const images = Array.from({ length: 4 }, (_, index) => {
  return import(`/images/image-product-${index + 1}.jpg`);
});

const imageThumbnail = Array.from({ length: 4 }, (_, index) => {
  return import(`/images/image-product-${index + 1}-thumbnail.jpg`);
});

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
    setPrice(count * 125 + ".00");
  };
  const handleClose = () => setOpen(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);
  const [cart, setCart] = useState([]);
  const [showItems, setShowItems] = useState(true);
  const [itemCount, setItemCount] = useState(0);

  return (
    <>
      <Nav
        itemCount={itemCount}
        setItemCount={setItemCount}
        handleOpen={handleOpen}
      />
      <MobileNav
        itemCount={itemCount}
        setItemCount={setItemCount}
        handleOpen={handleOpen}
      />
      <Middle
        images={images}
        currentIndex={currentIndex}
        imageThumbnail={imageThumbnail}
        setCurrentIndex={setCurrentIndex}
        count={count}
        setCount={setCount}
        cart={cart}
        setCart={setCart}
        setShowItems={setShowItems}
        itemCount={itemCount}
        setItemCount={setItemCount}
      />
      <Cart
        open={open}
        setOpen={setOpen}
        handleOpen={handleOpen}
        handleClose={handleClose}
        count={count}
        price={price}
        imageThumbnail={imageThumbnail}
        currentIndex={currentIndex}
        cart={cart}
        setCart={setCart}
        showItems={showItems}
        setShowItems={setShowItems}
      />
    </>
  );
}

export default App;
