import ProductCard from "./product-card";
import Featured from "./featured";

export default function ProductsContainer(props: any){
    
    const products = props.products;

    const skinProducts = products.filter(product => product.type === "skin");
    const bodyProducts = products.filter(product => product.type === "body");
    const hairProducts = products.filter(product => product.type === "hair");
    
    return(
    <div className="p-20 w-full h-full  justify-center " id="productsContainer">
        {   skinProducts.length > 0
            ? 
                <div id="skinContainer">
                    <h1 className="filter-heading">SKIN & FACIAL CARE</h1>
                    <Featured img={'/assets/featured-skin-1.png'} name="ii.ix.xxii ACNE Face Serum" color="lightbeige"/>
                    <div className="flex flex-wrap justify-center divide-solid divide-x divide-(--light-gray) mb-10">
                        {
                            skinProducts.map(product => {return (
                                <ProductCard product={product} key={product._id} onClick ={props.handleProductClick} handleBagBtn={props.handleBagClick}/>
                            )})
                        }
                    </div>
                    
                </div>
                
       
            : ""
        }
        {   bodyProducts.length > 0
            ? 
                <div id="bodyContainer">
                    <h1 className="filter-heading">BODY CARE</h1>
                    <Featured img={'/assets/featured-body-1.png'} name="ii.ix.xxii Hydrating Rose Body Oil" color="dark-gray"/>
                    <div className="flex flex-wrap justify-center divide-solid divide-x divide-(--light-gray) mb-10">
                        {
                            bodyProducts.map(product => {return (
                                <ProductCard product={product} key={product._id} onClick ={props.handleProductClick} handleBagBtn={props.handleBagClick}/>
                            )})
                        }
                    </div>
                    
                </div>
            : ""
        }
        {   hairProducts.length > 0
            ? 
                <div id="hairContainer">
                    <h1 className="filter-heading">HAIR CARE</h1>
                    <Featured img={'/assets/featured-hair-1.png'} name="ii.ix.xxii ROSE SHAMPOO & CONDITIONER" color="white"/>
                    <div className="flex flex-wrap justify-center divide-solid divide-x divide-(--light-gray) mb-10">
                        {
                            hairProducts.map(product => {return (
                                <ProductCard product={product} key={product._id} onClick ={props.handleProductClick} handleBagBtn={props.handleBagClick}/>
                            )})
                        }
                    </div>
                    
                </div>
            : ""
        }
    </div>    
    )
}