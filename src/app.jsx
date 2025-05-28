import { Routes, Route } from 'react-router-dom';
import Layout from './pages/layout';
import HomePage from './pages/homePage';
import ProductViewPage from './pages/productViewPage';
import CategoriasPage from './pages/categoriasPage';
import MeusPedidosPage from './pages/meusPedidosPage';
import ProductPage from './pages/productPage'; 

function App() {
  return (
    <Routes>
      {/* Todas as rotas abaixo compartilham o layout */}
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />                       {/* / */}
        <Route path="produtos" element={<ProductPage />} />          {/* /produtos */}
        <Route path="/produto/:id" element={<ProductViewPage />} />  {/* /produto/123 */}
        <Route path="categorias" element={<CategoriasPage />} />     {/* /categorias */}
        <Route path="pedidos" element={<MeusPedidosPage />} />       {/* /pedidos */}
      </Route>
    </Routes>
  );
}

export default App;








