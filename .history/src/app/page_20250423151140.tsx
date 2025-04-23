"use client"
import ProductsContainer from "./components/products-container";
import { getProducts } from "./services/products";
import { useEffect, useState } from "react";
import Banner from "./components/banner";
import TopNav from "./components/top-nav";
import FiltersContainer from "./components/filters-container";
import Modal from "./components/reusable/modal";
import ProductDetails from "./components/product-details";
import ShoppingCart from "./components/shopping-cart";
import Checkout from "./components/checkout";
import Loader from "./components/reusable/loader";
import IProduct from "./models/Product";
import ICartItem from "./models/CartItem";
import Footer from "./components/footer";

export default function Home() {
  const [products, setProducts] = useState<IProduct[]>();
  const [product, setProduct] = useState<IProduct>();
  const [cart, setCart] = useState<ICartItem[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState('');

  useEffect(()=> {
    getProducts().then(res=> 
      {
        setProducts(res)
      })
  },[])

  async function getProductById(id: string){
    if(products){
      const product = products.find(p => p._id == id);
      setProduct(product);
      return product;
    }
    
  }

  function handleProductClick(id: string){
    
    getProductById(id).then(()=> {
      openModal("details"); 
    })
  }

  function handleFilterClick(filter: string){
    const a = "#"+ filter + "Container"; 
    const anchor = document.querySelector(a);
    if(anchor){
      anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

  function handleBagClick(type:string, q?: number, item?:string){

    const add = q ? q : 1;
    
    if(type === "bag"){
      const itemExists = cart?.find(i => i.id === item) !== undefined;

      if(itemExists){
        const newOrder = cart;
        const index = newOrder.findIndex(i => i.id === item);
        const updatedItem = {
          id: newOrder[index].id,
          product: newOrder[index].product,
          quantity: add,
          total: parseFloat(newOrder[index].product.price) * add
        }
  
        newOrder[index] = updatedItem;
        
        setCart(newOrder);
  
      } else {
        const newItem = {
          id: item,
          product: products?.find(p => p._id == item),
          quantity: q,
          total: parseFloat(products?.find(p => p._id == item)?.price as string) * add
        }
        
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let update:any[];

        if(cart){
          update = [...cart, newItem]
        } else{
          update = [newItem];
        }

        setCart(update)
      } 
    }
    openModal("cart");
  }

  function handleTrashClick(id: string){
    let updatedOrder = [];
    ifcart?.filter(item => item.id !== id);
    return updatedOrder; 
  }

  function handlePayClick( ){
    openModal("checkout");
  }

  const openModal = (info: string) => {
    setModalInfo(info);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="page min-h-screen pb-5">
      <div className=" bg-black py-2 text-center" style={{color:"var(--lightbeige)"}}>
          <p >FREE SHIPPING ON ORDERS $50+</p>
        </div>
      <div className="main">
        <TopNav handleBagClick={handleBagClick} cart={cart} />
        <div className="w-full text-center items-end flex justify-center gold"> 
          <span className="mr-7 cursor filter-link">ALL</span>
          <span className="mr-7 cursor filter-link">SKIN</span>
          <span className="mr-7 cursor filter-link">BODY</span>
          <span className="mr-7 cursor filter-link">HAIR</span>
        </div>
        <Banner />
        
        <Modal isOpen={isModalOpen} onClose={closeModal} >
          {
            modalInfo == "details"
              ?  product
                  ? <ProductDetails product={product} handleBagClick={handleBagClick} cart={cart}  />
                  : ''
              : modalInfo =="checkout"
                ? <Checkout cart = {cart}/>
                : <ShoppingCart cart={cart} setCart={setCart} handlePayClick = {handlePayClick} handleTrashClick = {handleTrashClick}/>
          }
          
        </Modal>
        {
          products 
            ? 
            <>
              <FiltersContainer handleFilterClick = {handleFilterClick}/>
              <ProductsContainer products={products} handleProductClick={handleProductClick} handleBagClick={handleBagClick}/>
            </>
            : <Loader />
        }
      
      </div> 
      <Footer />
    </div>
  );
}
