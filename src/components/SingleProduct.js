import products from "./data.json";

const SingleProduct = () => {
    console.log(products[0])
    return (
        <div >
            <p>test</p>
            {products.map((product, index) => {
                return (
                    <div key={index} className="singleProductDiv">
                        <p>{product.Product_name}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default SingleProduct;