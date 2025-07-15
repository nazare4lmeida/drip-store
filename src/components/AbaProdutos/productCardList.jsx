import { Link } from "react-router-dom";
import { useCart } from "../../contexts/cartContext";

const ProductCardList = ({ id, image, name, category, price, priceDiscount, fullProduct }) => {
  const { addToCart } = useCart();

  // 1. CÁLCULO DO DESCONTO E VERIFICAÇÃO
  // Verifica se o desconto é válido (existe e é menor que o preço original)
  const hasDiscount = typeof priceDiscount === 'number' && priceDiscount < price;
  
  let discountPercentage = 0;
  if (hasDiscount) {
    // Calcula a porcentagem de desconto e arredonda
    discountPercentage = Math.round(((price - priceDiscount) / price) * 100);
  }

  // Função para adicionar ao carrinho (agora não precisa mais remover, o botão é estático)
  const handleAddToCart = () => {
    addToCart(fullProduct);
    // Opcional: Adicionar um alerta ou notificação para o usuário
    // alert(`${name} foi adicionado ao carrinho!`);
  };

  // Sua função de formatar preço está ótima, vamos mantê-la
  const formatPrice = (value) => {
    if (typeof value !== "number") return null;
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  return (
    // Estrutura do card com flex-col para garantir que o rodapé com os botões fique sempre em baixo
    <div className="bg-white border border-gray-200 rounded-lg shadow-md flex flex-col justify-between transition-shadow hover:shadow-xl">
      
      {/* Parte de cima do card: Imagem e Tag de Desconto */}
      <Link to={`/produto/${id}`} className="block relative">
        {/* 2. TAG DE DESCONTO DINÂMICA E CONDICIONAL */}
        {/* Só aparece se 'hasDiscount' for verdadeiro */}
        {hasDiscount && (
          <div className="absolute top-3 left-3 bg-green-200 text-green-800 text-xs font-bold px-3 py-1 rounded-md z-10">
            {discountPercentage}% OFF
          </div>
        )}
        <div className="h-56 w-full flex items-center justify-center p-4">
          <img 
            src={image} 
            alt={`Imagem do produto ${name}`} 
            className="max-h-full max-w-full object-contain" 
          />
        </div>
      </Link>
      
      {/* Container para o conteúdo de texto, para que cresça e empurre os botões para baixo */}
      <div className="p-4 flex flex-col flex-grow">
        <span className="text-xs text-gray-500 mb-1">{category}</span>
        <h3 className="text-md font-semibold text-gray-800 mb-2 flex-grow">{name}</h3>
        
        {/* 3. LÓGICA DE PREÇO CORRIGIDA */}
        <div className="mb-4">
          {hasDiscount ? (
            // Se tiver desconto: mostra preço antigo riscado e o novo em destaque
            <div className="flex items-baseline gap-2">
              <del className="text-sm text-gray-400">{formatPrice(price)}</del>
              <strong className="text-lg font-bold text-gray-900">{formatPrice(priceDiscount)}</strong>
            </div>
          ) : (
            // Se NÃO tiver desconto: mostra apenas o preço normal
            <strong className="text-lg font-bold text-gray-900">{formatPrice(price)}</strong>
          )}
        </div>
      </div>
      
      {/* 4. BOTÕES COM O LAYOUT CORRETO */}
      <div className="p-4 pt-0">
        <button 
          onClick={handleAddToCart}
          className="w-full bg-pink-600 text-white font-bold py-2 rounded-lg hover:bg-pink-700 transition mb-2"
        >
          Adicionar ao carrinho
        </button>
        <Link
          to={`/produto/${id}`} // Leva para a página de detalhes do produto
          className="w-full block text-center bg-gray-200 text-gray-800 font-bold py-2 rounded-lg hover:bg-gray-300 transition"
        >
          Ver mais
        </Link>
      </div>
    </div>
  );
};

export default ProductCardList;