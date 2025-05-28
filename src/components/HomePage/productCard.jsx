const ProductCard = ({ product = {}, onClick }) => {
  const { image, price, priceDiscount, name } = product;

  const discountPercentage =
    typeof price === "number" &&
    typeof priceDiscount === "number" &&
    price > priceDiscount
      ? Math.round(((price - priceDiscount) / price) * 100)
      : null;

  const formatPrice = (value) => {
    if (typeof value !== "number") return null;
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  return (
    <div
      className="flex flex-col gap-2 w-full cursor-pointer"
      onClick={onClick}
    >
      <div className="relative bg-white rounded-xl p-4 shadow-sm border border-gray-200 flex items-center justify-center aspect-square">
        {discountPercentage && (
          <span className="absolute top-3 left-3 bg-lime-200 text-green-800 text-xs font-semibold px-2 py-1 rounded-md">
            {discountPercentage}% OFF
          </span>
        )}
        <img
          src={image}
          alt={name}
          className="h-full w-full object-contain rounded-xl"
        />
      </div>

      <div className="text-left px-1">
        <p className="text-gray-400 text-sm">Tênis</p>
        <h3 className="text-gray-600 text-sm font-medium line-clamp-1">{name}</h3>

        <div className="flex gap-2 items-center mt-1">
          {typeof priceDiscount === "number" ? (
            <>
              <span className="text-gray-400 line-through text-sm">
                {formatPrice(price)}
              </span>
              <span className="text-black font-semibold text-base">
                {formatPrice(priceDiscount)}
              </span>
            </>
          ) : (
            <span className="text-black font-semibold text-base">
              {formatPrice(price)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;


