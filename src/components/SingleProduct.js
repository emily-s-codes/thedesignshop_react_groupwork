import products from "./data.json";

const SingleProduct = () => {
    function importAll(r) {
        let images = [];
        r.keys().map((item) => { return images[item.replace('./', '')] = r(item); });
        return images;
    }

    //SYNTAX: variable declarieren mit Funktion require.context und 
    //parameter = 
    //directory (Pfad zum Ordner), 
    //useSubdirectories (suche noch in unterordner? true oder false), 
    //regular expression (alles das hier .png ODER .jpeg ODER .jpg ODER .svg enthält) 
    const images = importAll(require.context('../assets/img', false, /.(png|jpe?g|svg)$/));
    // let singleImage = images[i];
    console.log(images)

    // apply different class to portrait image and landscape image by comparing height and width INCOMPLETE

    // function imageOrientation() {
    //     for (i = 0; i < images.length; i++) {
    //         singleImage = images[i];
    //         if (images.complete) {
    //             // The image is already loaded, call handler
    //             checkImage(images);
    //         } else {
    //             // The image is not loaded yet, set load event handler
    //             images.addEventListener("load", function () {
    //                 checkImage(this);
    //             })
    //         }
    //     }
    // }

    // imageOrientation(images);

    // function checkImage(singleImage) {
    //     if (singleImage.naturalHeight > singleImage.naturalWidth) {
    //         singleImage.classList.add("portrait")
    //     } else {
    //         singleImage.classList.add("landscape")
    //     }
    // }

    return (
        <div className="productsDiv">
            {products.map((product, index) => {
                return (
                    <div key={index} className="singleProductDiv" onClick={() => window.open(product.Link_shop)}>
                        <img src={images[product.Product_picture]} alt={product.Product_name} />
                        <p className="bold">{product.Product_name}</p>
                        <p className="light">{product.Price}</p>
                    </div>
                )
            })}
        </div >
    );
}

export default SingleProduct;