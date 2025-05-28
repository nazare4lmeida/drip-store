import { useParams } from 'react-router-dom';
import { products } from '/src/data/products';
import { useCart } from '/src/contexts/cartContext';
import { useState } from 'react';

const ProductViewPage = () => {
  const { id } = useParams();
  const { addToCart, cartItems } = useCart();
  const product = products.find((p) => p.id === Number(id));
  const [added, setAdded] = useState(cartItems.some((item) => item.id === product.id));

  if (!product) return <div>Produto não encontrado.</div>;

  const handleAddToCart = () => {
    if (!added) {
      addToCart(product);
      setAdded(true);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={product.image} alt={product.name} className="w-full rounded-xl" />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl text-pink-600 font-semibold mb-2">R$ {product.price.toFixed(2)}</p>
          <p className="text-sm text-gray-600 mb-4">{product.description}</p>

          <button
            onClick={handleAddToCart}
            className={`px-4 py-2 rounded-full text-white mt-4 ${added ? 'bg-green-500' : 'bg-pink-600'}`}
          >
            {added ? 'Adicionado ao carrinho' : 'Adicionar ao carrinho'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductViewPage;







