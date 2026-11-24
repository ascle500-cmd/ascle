import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import { CartProvider } from "./context/CartContext";
import { UIProvider } from "./context/UIProvider";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Scroll to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <UIProvider>
        <CartProvider>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col bg-slate-50">
            <Navbar />
            <main className="flex-1">
              <Routes>
                {/* Core pages */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />

                {/* Products */}
                <Route path="/products" element={<Products />} />
                <Route path="/product/:id" element={<ProductDetail />} />

                {/* Cart */}
                <Route path="/cart" element={<Cart />} />

                {/* Blog */}
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />

                {/* Contact */}
                <Route path="/contact" element={<Contact />} />

                {/* 404 fallback */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <CartDrawer />
          </div>
        </CartProvider>
      </UIProvider>
    </BrowserRouter>
  );
}
