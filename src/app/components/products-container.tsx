import ProductCard from "./product-card";
import Featured from "./featured";
import IProduct from "../models/Product";

export default function ProductsContainer(props: {products: IProduct[], handleProductClick: (id: string) => void, handleBagClick: (type: string, q?: number, item?: string) => void; }){
    
    const products = props.products;
    const info = [
        {
            id:'skinContainer',
            heading: "SKIN & FACIAL CARE",
            img: "/assets/featured-skin-1.svg",
            name: "ii.ix.xxii TEA TREE ACNE Face Serum",
            color:"white",
            background:'olive',
            shadow: 'dark-olive',
            products: products.filter(product => product.type === "skin")
        },
        {
            id:'bodyContainer',
            heading: "BODY CARE",
            img: "/assets/featured-body-1.svg",
            name: "ii.ix.xxii Hydrating Rose Body Oil",
            color:"dark-gray",
            background:'rose',
            shadow: '',
            products: products.filter(product => product.type === "body")
        },
        {
            id:'hairContainer',
            heading: "HAIR CARE",
            img: "/assets/featured-hair-1.svg",
            name: "ii.ix.xxii Hydrating Rose Shampoo & Conditioner",
            color:"dark-gray",
            background:'light-pink',
            shadow: 'dark-pink',
            products: products.filter(product => product.type === "hair")
        },
    ]        

    return(
    <div className="md:px-5 w-full h-fit justify-center" id="productsContainer">
        {info.map( (type, index) => 
            { return (
                <div id={type.id} className=" pb-10 mt-5 md:mt-25 md:border-solid md:border-1 md:border-(--dark-gray) anchor-div" key={index}>
                    <h1 className="filter-heading">{type.heading}</h1>
                    <div style={{backgroundColor:`var(--${type.background}`}}>
                        <Featured img={type.img} name={type.name} color={type.color} shadow={type.shadow}/>
                    </div>
                    <div className="flex flex-wrap justify-center divide-solid divide-x divide-(--light-gray) ">
                        {
                            type.products.map(product => {return (
                                <ProductCard product={product} key={product._id as string} onClick ={props.handleProductClick} handleBagBtn={props.handleBagClick}/>
                            )})
                        }
                    </div>    
                </div>
            )}
        )}
    </div>    
    )
}