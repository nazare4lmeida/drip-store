import { Link } from 'react-router-dom';

const ProductListingList = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <Link to={`/produtos/${product.id}`} key={product.id}>
          <div className="border p-4 rounded shadow hover:shadow-md bg-white">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-primary font-bold">R$ {product.price.toFixed(2)}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductListingList;









