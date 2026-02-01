import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import HomePage from '../pages/HomePage';
import ProductListingPage from '../pages/ProductListingPage';
import ProductViewPage from '../pages/ProductViewPage';

// Componente para rolar a página para o topo ao mudar de rota
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function Paths() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/produtos" element={<ProductListingPage />} />
        <Route path="/products" element={<ProductListingPage />} />
        {/* O :id permite que a página saiba qual produto exibir */}
        <Route path="/produto/:id" element={<ProductViewPage />} />
        <Route path="/products/:id" element={<ProductViewPage />} />
      </Routes>
    </BrowserRouter>
  );
}