/* eslint-disable @typescript-eslint/no-explicit-any */
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

export default function Home() {
  const [products, setProducts] = useState();
  const [product, setProduct] = useState();
  const [order, setOrder] = useState([] as any);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState();

  useEffect(()=> {
    getProducts().then(res=> 
      {
        setProducts(res)
      })
  },[])

  async function getProductById(id){
    const product = products.find(p => p._id == id);
    setProduct(product);
    return product;
  }

  function handleProductClick(id){
   getProductById(id).then(() => openModal("details")); 
  }

  function handleFilterClick(filter){
    const a = "#"+ filter + "Container"; 
    const anchor = document.querySelector(a);
    anchor.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

  function handleBagClick(item?, q: number = 1, type = "cart"){
    
    if(type === "bag"){
      const itemExists = order.find(i => i.id === item) !== undefined;

      if(itemExists){
        const newOrder = order;
        const index = newOrder.findIndex(i => i.id === item);
        const updatedItem = {
          id: newOrder[index].id,
          product: newOrder[index].product,
          quantity: newOrder[index].quantity + q
        }
  
        newOrder[index] = updatedItem;
        setOrder(newOrder);
  
      } else {
        const newItem = {
          id: item,
          product: products.find(p => p._id == item),
          quantity: q
        }
        setOrder([...order, newItem])
      } 
    }
      
    openModal("cart");
  }

  function handleTrashClick(id){
    const updatedOrder = order.filter(item => item.id !== id);
    setOrder(updatedOrder); 
  }

  function handlePayClick( ){
    openModal("checkout");
  }

  const openModal = (info) => {
    setModalInfo(info);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    
    setIsModalOpen(false);
  };

  return (
   <div className="page">
     <div className=" bg-black py-2 text-center" style={{color:"var(--lightbeige)"}}>
        <p >FREE SHIPPING ON ORDERS $50+</p>
      </div>
    <div className="main">
      <TopNav handleBagClick={handleBagClick} cart={order} />
      <Banner />
      
      <Modal isOpen={isModalOpen} onClose={closeModal} >
        {
          modalInfo == "details"
            ? <ProductDetails product={product}/>
            : modalInfo =="checkout"
              ? <Checkout order = {order}/>
              : <ShoppingCart cart={order} handlePayClick = {handlePayClick} handleTrashClick = {handleTrashClick}/>
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
   </div>
  );
}
