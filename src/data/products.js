export const products = [
  {
    id: 1,
    title: "Nike Air Max 270",
    name: "Nike Air Max 270",
    reference: "Ref. NIKE270-BR",
    stars: 4.5,
    rating: 128,
    price: 299.99,
    priceDiscount: 209.99,
    description: "Tênis Nike confortável e estiloso.",
    image: "https://images-na.ssl-images-amazon.com/images/I/717fbeslx0L._AC_SR462,693_.jpg",
    images: [
      { src: "https://imgnike-a.akamaihd.net/360x360/0163497WA1.jpg" },
      { src: "https://imgnike-a.akamaihd.net/360x360/0163497WA1_1.jpg" },
      { src: "https://imgnike-a.akamaihd.net/360x360/0163497WA1_2.jpg" }
    ],
    category: "Tênis",
    gender: "Unissex",
    condition: "Novo",
    brand: "Nike",
    sizes: [38, 39, 40, 41, 42],
    colors: ["#000000", "#FFFFFF"],
    relatedProducts: [2, 3, 4]
  },
  {
    id: 2,
    title: "Adidas Ultraboost",
    name: "Adidas Ultraboost",
    reference: "Ref. ADIDASUB-BR",
    stars: 4.7,
    rating: 200,
    price: 349.99,
    priceDiscount: 249.99,
    description: "Tênis Adidas com tecnologia de amortecimento.",
    image: "https://authenticfeet.vtexassets.com/arquivos/ids/434723-800-800?v=638562278565370000&width=800&height=800&aspect=true",
    images: [
      { src: "https://imgadidas-a.akamaihd.net/360x360/0163498WA1.jpg" },
      { src: "https://imgadidas-a.akamaihd.net/360x360/0163498WA1_1.jpg" },
      { src: "https://imgadidas-a.akamaihd.net/360x360/0163498WA1_2.jpg" }
    ],
    category: "Tênis",
    gender: "Unissex",
    condition: "Novo",
    brand: "Adidas",
    sizes: [37, 38, 39, 40, 41],
    colors: ["#1a1a1a", "#eaeaea"],
    relatedProducts: [1, 3]
  },
  {
    id: 3,
    title: "Puma RS-X",
    name: "Puma RS-X",
    reference: "Ref. PUMARSX-BR",
    stars: 4.3,
    rating: 150,
    price: 279.99,
    priceDiscount: 199.99,
    description: "Tênis Puma com design retrô e conforto.",
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/394302/51/sv01/fnd/BRA/w/1000/h/1000/fmt/png",
    images: [
      { src: "https://imgpuma-a.akamaihd.net/360x360/0163499WA1.jpg" },
      { src: "https://imgpuma-a.akamaihd.net/360x360/0163499WA1_1.jpg" },
      { src: "https://imgpuma-a.akamaihd.net/360x360/0163499WA1_2.jpg" }
    ],
    category: "Tênis",
    gender: "Unissex",
    condition: "Novo",
    brand: "Puma",
    sizes: [36, 38, 40, 42],
    colors: ["#d62828", "#003049"],
    relatedProducts: [1, 2]
  },
  {
    id: 4,
    title: "New Balance 574",
    name: "New Balance 574",
    reference: "Ref. NB574-BR",
    stars: 4.6,
    rating: 180,
    price: 249.99,
    priceDiscount: 179.99,
    description: "Tênis New Balance clássico e versátil.",
    image: "https://cdn.bnws3.com.br/b2online.com.br/image/cache/data/produtos/new-balance/masculino/tenis-new-balance-574-v2-masculino-vinho---cinza-8784-24-01-24-00-1200x1200.jpg",
    images: [
      { src: "https://imgnewbalance-a.akamaihd.net/360x360/0163500WA1.jpg" },
      { src: "https://imgnewbalance-a.akamaihd.net/360x360/0163500WA1_1.jpg" },
      { src: "https://imgnewbalance-a.akamaihd.net/360x360/0163500WA1_2.jpg" }
    ],
    category: "Tênis",
    gender: "Unissex",
    condition: "Novo",
    brand: "New Balance",
    sizes: [39, 40, 41, 42, 43],
    colors: ["#2b2d42", "#8d99ae"],
    relatedProducts: [1, 5]
  },
  {
    id: 5,
    title: "Asics Gel-Kayano",
    name: "Asics Gel-Kayano",
    reference: "Ref. ASICS-GKAYANO-BR",
    stars: 4.8,
    rating: 220,
    price: 399.99,
    priceDiscount: 299.99,
    description: "Tênis Asics com suporte e estabilidade.",
    image: "https://asicsbr.vteximg.com.br/arquivos/ids/2744214-1000-1000/null.jpg",
    images: [
      { src: "https://imgasics-a.akamaihd.net/360x360/0163501WA1.jpg" },
      { src: "https://imgasics-a.akamaihd.net/360x360/0163501WA1_1.jpg" },
      { src: "https://imgasics-a.akamaihd.net/360x360/0163501WA1_2.jpg" }
    ],
    category: "Tênis",
    gender: "Unissex",
    condition: "Novo",
    brand: "Asics",
    sizes: [37, 39, 41, 43],
    colors: ["#264653", "#e76f51"],
    relatedProducts: [4, 6]
  },
  {
    id: 6,
    title: "Reebok Classic Leather",
    name: "Reebok Classic Leather",
    reference: "Ref. REEBOKCL-BR",
    stars: 4.4,
    rating: 170,
    price: 229.99,
    priceDiscount: 169.99,
    description: "Tênis Reebok com design atemporal.",
    image: "https://static.hupishop.com.br/public/hupibikes/imagens/produtos/tenis-reebok-classic-nylon-bege-feminino-667d9a2cdd458.jpg",
    images: [
      { src: "https://imgreebok-a.akamaihd.net/360x360/0163502WA1.jpg" },
      { src: "https://imgreebok-a.akamaihd.net/360x360/0163502WA1_1.jpg" },
      { src: "https://imgreebok-a.akamaihd.net/360x360/0163502WA1_2.jpg" }
    ],
    category: "Tênis",
    gender: "Unissex",
    condition: "Novo",
    brand: "Reebok",
    sizes: [36, 38, 40, 42],
    colors: ["#f5f3f4", "#22223b"],
    relatedProducts: [5, 7]
  },
  {
    id: 7,
    title: "Vans Old Skool",
    name: "Vans Old Skool",
    reference: "Ref. VANSOS-BR",
    stars: 4.5,
    rating: 190,
    price: 199.99,
    priceDiscount: 149.99,
    description: "Tênis Vans com estilo skater clássico.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzBJ4a69-eDi4bOCihhjxFyiC9WWKC9krq3A&s",
    images: [
      { src: "https://imgvans-a.akamaihd.net/360x360/0163503WA1.jpg" },
      { src: "https://imgvans-a.akamaihd.net/360x360/0163503WA1_1.jpg" },
      { src: "https://imgvans-a.akamaihd.net/360x360/0163503WA1_2.jpg" }
    ],
    category: "Tênis",
    gender: "Unissex",
    condition: "Novo",
    brand: "Vans",
    sizes: [35, 37, 39, 41],
    colors: ["#000000", "#ffffff", "#ff595e"],
    relatedProducts: [6, 8]
  },
  {
    id: 8,
    title: "Converse Chuck Taylor",
    name: "Converse Chuck Taylor",
    reference: "Ref. CONVERSECT-BR",
    stars: 4.6,
    rating: 210,
    price: 179.99,
    priceDiscount: 139.99,
    description: "Tênis Converse icônico e versátil.",
    image: "https://cloviscalcados.vteximg.com.br/arquivos/ids/1036233-1024-1024/Tenis-Masculino-Chuck-Taylor-Converse-All-Star-CT00040007-0320004_001-02.jpg?v=638364710577700000",
    images: [
      { src: "https://imgconverse-a.akamaihd.net/360x360/0163504WA1.jpg" },
      { src: "https://imgconverse-a.akamaihd.net/360x360/0163504WA1_1.jpg" },
      { src: "https://imgconverse-a.akamaihd.net/360x360/0163504WA1_2.jpg" }
    ],
    category: "Tênis",
    gender: "Unissex",
    condition: "Novo",
    brand: "Converse",
    sizes: [36, 37, 38, 39, 40],
    colors: ["#ffffff", "#000000", "#e63946"],
    relatedProducts: [7]
  },
  {
    id: 9,
    title: "Camisa Joy Division",
    name: "Camisa Joy Division",
    reference: "Ref. STAMP-JD-BR",
    stars: 4.9,
    rating: 95,
    price: 179.99,
    priceDiscount: 29.99,
    description: "Camiseta preta de algodão com estampa clássica da capa do álbum 'Unknown Pleasures' da banda Joy Division.",
    image: "https://stamp.jetassets.com.br/produto/TS1722_2024-09-19_14_33_09_0.jpeg",
    images: [
        { src: "https://stamp.jetassets.com.br/produto/TS1722_2024-09-19_14_33_09_0.jpeg" },
        { src: "https://exemplo.com/camisa_costas.jpg" },
        { src: "https://exemplo.com/camisa_detalhe.jpg" }
    ],
    category: "Camisetas",
    gender: "Unissex",
    condition: "Novo",
    brand: "Stamp",
    sizes: ["P", "M", "G", "GG"],
    colors: ["#000000"],
    relatedProducts: [10, 11]
  },
  {
    id: 10,
    title: "Calça Mom Jeans",
    name: "Calça Mom Jeans",
    reference: "Ref. OQV-MOM-BR",
    stars: 4.7,
    rating: 110,
    price: 400.00,
    priceDiscount: 349.99,
    description: "Calça jeans estilo 'mom' com cintura alta, modelagem reta e lavagem clara. Perfeita para um look casual e confortável.",
    image: "https://oqvestir.fbitsstatic.net/img/p/calca-feminina-mom-jeans-azul-178657/463134.jpg?w=1600&h=2133&v=202501231556",
    images: [
        { src: "https://oqvestir.fbitsstatic.net/img/p/calca-feminina-mom-jeans-azul-178657/463134.jpg?w=1600&h=2133&v=202501231556" },
        { src: "https://exemplo.com/calca_costas.jpg" },
        { src: "https://exemplo.com/calca_detalhe.jpg" }
    ],
    category: "Calças",
    gender: "Feminino",
    condition: "Novo",
    brand: "OQVestir",
    sizes: [36, 38, 40, 42, 44],
    colors: ["#89c2d9"],
    relatedProducts: [9, 7]
  },
  {
    id: 11,
    title: "Boné MST",
    name: "Boné MST",
    reference: "Ref. MST-BONE-BR",
    stars: 4.8,
    rating: 350,
    price: 89.90,
    priceDiscount: 69.90,
    description: "Boné de brim vermelho com 6 gomos, fecho ajustável e logo clássico bordado na frente. Um símbolo de luta e estilo.",
    image: "https://http2.mlstatic.com/D_NQ_NP_662323-MLB78900818559_092024-O-bone-mst-brim-6-gomos-adulto.webp",
    images: [
        { src: "https://http2.mlstatic.com/D_NQ_NP_662323-MLB78900818559_092024-O-bone-mst-brim-6-gomos-adulto.webp" },
        { src: "https://exemplo.com/bone_lado.jpg" },
        { src: "https://exemplo.com/bone_tras.jpg" }
    ],
    category: "Bonés",
    gender: "Unissex",
    condition: "Novo",
    brand: "MST",
    sizes: ["Único"],
    colors: ["#d62828"],
    relatedProducts: [9, 12]
  },
  {
    id: 12,
    title: "Headphone JBL",
    name: "Headphone JBL Tune 520BT",
    reference: "Ref. JBL-T520-BR",
    stars: 4.9,
    rating: 540,
    price: 299.00,
    priceDiscount: 249.00,
    description: "Headphone on-ear sem fio JBL Tune 520BT com tecnologia Bluetooth 5.3, som JBL Pure Bass e bateria de longa duração.",
    image: "https://m.media-amazon.com/images/I/61BDf8KO8AL.__AC_SX300_SY300_QL70_ML2_.jpg",
    images: [
        { src: "https://m.media-amazon.com/images/I/61BDf8KO8AL.__AC_SX300_SY300_QL70_ML2_.jpg" },
        { src: "https://exemplo.com/headphone_lado.jpg" },
        { src: "https://exemplo.com/headphone_dobrado.jpg" }
    ],
    category: "Headphones",
    gender: "Unissex",
    condition: "Novo",
    brand: "JBL",
    sizes: ["N/A"],
    colors: ["#000000", "#FFFFFF", "#0077b6"],
    relatedProducts: [11, 2]
  }
];