import { useParams } from "react-router";
import { LatestProduct } from "../../../data/Main-Data/data";

const SingleLatestProduct = () => {
  const { id } = useParams();
const product = LatestProduct.find((product) => product.id === parseInt(id));
// console.log(product);

// Assuming product is found and has the arrays BestSeller, Featured, SpecialOffer, and anotherArray
if (product) {
  const { BestSeller, Featured, SpecialOffer, NewArrival } = product;

  // Now you can access details from each of these arrays
  console.log("New Arrivals:", NewArrival);
  console.log("Best Sellers:", BestSeller);
  console.log("Featured Products:", Featured);
  console.log("Special Offers:", SpecialOffer);
}

  return (
    <div>
      
    </div>
  )
}

export default SingleLatestProduct
