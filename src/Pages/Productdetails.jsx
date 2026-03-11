import { useParams } from "react-router-dom";
import products  from "../data/products";
import  farmers  from "../data/farmers";

const Productdetails = () => {

  const { id } = useParams();

  const product = products.find(p => p.id == id);

  if (!product) return <p>Product not found</p>;

  const farmer = farmers.find(f => f.id === product.farmerId);

  return (
    <div className="max-w-6xl mx-auto p-10 grid grid-cols-2 gap-10">

      <img
        src={product.image}
        alt={product.name}
        className="w-full rounded-xl"
      />

      <div>

        <h1 className="text-3xl font-bold">{product.name}</h1>

        <p className="text-green-700 text-xl mt-2">
          Rs {product.price}
        </p>

        <p className="mt-4 text-gray-600">
          {product.description}
        </p>

        {farmer && (
          <div className="mt-4">
            <p className="font-semibold">Farmer: {farmer.name}</p>
            <p className="text-sm text-gray-500">{farmer.location}</p>
          </div>
        )}

        <button className="mt-6 bg-green-800 text-white px-6 py-3 rounded-lg">
          Add to Cart
        </button>

      </div>

    </div>
  );
};

export default Productdetails;