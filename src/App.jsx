import { useState } from "react";
import "./App.css";
import Nav from "./Components/Nav";
import Middle from "./Components/Middle";
import MobileNav from "./Components/MobileNav";
import Cart from "./Components/Cart";

// i moved the images folder to public and now you can access them without /src in front of it
import imageProduct1 from "/images/image-product-1.jpg";
import imageProduct2 from "/images/image-product-2.jpg";
import imageProduct3 from "/images/image-product-3.jpg";
import imageProduct4 from "/images/image-product-4.jpg";
import imageProduct1Thumbnail from "/images/image-product-1-thumbnail.jpg";
import imageProduct2Thumbnail from "/images/image-product-2-thumbnail.jpg";
import imageProduct3Thumbnail from "/images/image-product-3-thumbnail.jpg";
import imageProduct4Thumbnail from "/images/image-product-4-thumbnail.jpg";

const images = [imageProduct1, imageProduct2, imageProduct3, imageProduct4];

// you don't have to use string interpolation like this `${imageProduct1Thumbnail}` for this particular case
const imageThumbnail = [
  imageProduct1Thumbnail,
  imageProduct2Thumbnail,
  imageProduct3Thumbnail,
  imageProduct4Thumbnail,
];

function App() {
  // you should consider using useContext or Redux for a global state management like this
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);
  const [cart, setCart] = useState([]);
  const [showItems, setShowItems] = useState(true);
  const [itemCount, setItemCount] = useState(0);

  const handleOpen = () => {
    setOpen(true);
    setPrice(count * 125 + ".00");
  };

  const handleClose = () => setOpen(false);

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
