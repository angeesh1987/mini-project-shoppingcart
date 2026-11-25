// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App
import { useEffect, useMemo, useState } from "react";

const products = [
  { id: 1, name: "Cloud Knit Sweater", category: "Clothing", price: 2499, oldPrice: 2999, rating: 4.8, tag: "BESTSELLER", color: "#e8dfd2", image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=700&q=85" },
  { id: 2, name: "Everyday Leather Tote", category: "Accessories", price: 3299, oldPrice: null, rating: 4.9, tag: "POPULAR", color: "#ded0c0", image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=700&q=85" },
  { id: 3, name: "Minimal Ceramic Set", category: "Home", price: 1899, oldPrice: 2299, rating: 4.7, tag: "−17%", color: "#e7e5df", image: "https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?w=700&q=85" },
  { id: 4, name: "Classic Everyday Watch", category: "Accessories", price: 4599, oldPrice: null, rating: 4.8, tag: "NEW", color: "#e5ddd1", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700&q=85" },
  { id: 5, name: "Soft Cotton Shirt", category: "Clothing", price: 1799, oldPrice: 2199, rating: 4.6, tag: "−18%", color: "#e4e8e5", image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=700&q=85" },
  { id: 6, name: "Sculpted Table Lamp", category: "Home", price: 2799, oldPrice: null, rating: 4.9, tag: "FAVORITE", color: "#e8e0d5", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=700&q=85" },
  { id: 7, name: "Daily Carry Backpack", category: "Accessories", price: 2899, oldPrice: null, rating: 4.7, tag: "NEW", color: "#dce2df", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700&q=85" },
  { id: 8, name: "Linen Cushion Cover", category: "Home", price: 899, oldPrice: 1199, rating: 4.5, tag: "−25%", color: "#e8e1d9", image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=700&q=85" }
];

const money = (n) => new Intl.NumberFormat("en-IN", {
  style: "currency", currency: "INR", maximumFractionDigits: 0
}).format(n);

function App() {
  const [cart, setCart] = useState(() => {
    try { return JSON.parse(localStorage.getItem("forma-cart")) || []; }
    catch { return []; }
  });
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [cartOpen, setCartOpen] = useState(false);
  const [notice, setNotice] = useState("");

  useEffect(() => localStorage.setItem("forma-cart", JSON.stringify(cart)), [cart]);

  const filtered = useMemo(() => products.filter((p) =>
    (category === "All" || p.category === category) &&
    p.name.toLowerCase().includes(search.toLowerCase())
  ), [category, search]);

  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal === 0 || subtotal >= 3000 ? 0 : 99;
  const total = subtotal + shipping;

  function addToCart(product) {
    setCart(current => {
      const found = current.find(item => item.id === product.id);
      return found
        ? current.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
        : [...current, { ...product, quantity: 1 }];
    });
    setNotice(`${product.name} added to your bag`);
    window.setTimeout(() => setNotice(""), 2200);
  }

  function updateQuantity(id, change) {
    setCart(current => current
      .map(item => item.id === id ? { ...item, quantity: item.quantity + change } : item)
      .filter(item => item.quantity > 0));
  }

  function checkout() {
    setNotice("Checkout demo — connect a payment provider to accept orders.");
    setCartOpen(false);
    window.setTimeout(() => setNotice(""), 3500);
  }

  return (
    <div className="app-shell">
      <div className="announcement">A LITTLE SOMETHING FOR YOU — FREE SHIPPING ON ORDERS OVER ₹3,000</div>
      <header className="header">
        <a className="brand" href="#" aria-label="Forma home">forma<span>.</span></a>
        <nav className="main-nav">
          <a href="#shop">Shop all</a><a href="#shop" onClick={() => setCategory("Clothing")}>Clothing</a>
          <a href="#shop" onClick={() => setCategory("Home")}>Home</a><a href="#shop" onClick={() => setCategory("Accessories")}>Accessories</a>
        </nav>
        <button className="bag-button" onClick={() => setCartOpen(true)} aria-label={`Open shopping bag, ${count} items`}>
          <span className="bag-icon">♧</span><span>Bag</span><b>{count}</b>
        </button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">THE EVERYDAY EDIT · 2026</p>
            <h1>Good things.<br/><em>Thoughtfully</em> chosen.</h1>
            <p className="hero-description">Considered pieces for slower mornings, better routines, and everything in between.</p>
            <a className="dark-button" href="#shop">Explore the collection <span>↗</span></a>
          </div>
          <div className="hero-image-wrap">
            <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=90" alt="Warm, thoughtfully styled boutique interior"/>
            <div className="image-note"><span>01 / 03</span><span>Objects for living well</span></div>
          </div>
          <div className="hero-index">F / 26</div>
        </section>

        <section className="shop-section" id="shop">
          <div className="section-heading">
            <div><p className="eyebrow">MADE TO BE KEPT</p><h2>The collection<span>.</span></h2></div>
            <p className="section-note">A few good things, picked just for you.</p>
          </div>
          <div className="toolbar">
            <div className="filters">
              {["All", "Clothing", "Accessories", "Home"].map(item =>
                <button key={item} className={`filter ${category === item ? "active" : ""}`} onClick={() => setCategory(item)}>{item}</button>
              )}
            </div>
            <label className="search-box"><span>⌕</span><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search pieces..." aria-label="Search products"/></label>
          </div>

          <div className="product-grid">
            {filtered.map(product => {
              const inCart = cart.find(item => item.id === product.id);
              return <article className="product-card" key={product.id}>
                <div className="product-image" style={{ backgroundColor: product.color }}>
                  <img src={product.image} alt={product.name} loading="lazy"/>
                  <span className="product-tag">{product.tag}</span>
                  <button className="quick-add" onClick={() => addToCart(product)} aria-label={`Add ${product.name} to bag`}>+</button>
                </div>
                <div className="product-info">
                  <div><h3>{product.name}</h3><p>{product.category}</p></div>
                  <div className="price-block"><strong>{money(product.price)}</strong>{product.oldPrice && <del>{money(product.oldPrice)}</del>}</div>
                </div>
                <div className="product-foot"><span>★ {product.rating} <small>· 24 reviews</small></span>{inCart && <span className="in-bag">In bag · {inCart.quantity}</span>}</div>
              </article>;
            })}
          </div>
          {filtered.length === 0 && <div className="empty-search"><span>⌕</span><h3>No pieces found</h3><p>Try another search or category.</p><button onClick={() => {setSearch(""); setCategory("All");}}>Clear filters</button></div>}
        </section>

        <section className="promise"><span>01 — QUALITY FIRST</span><p>Less, but better. Pieces made to find a place in your everyday.</p><span>02 — EASY RETURNS</span></section>
      </main>

      <footer><a className="brand" href="#">forma<span>.</span></a><p>Thoughtful finds for everyday living.</p><span>© 2026 FORMA STUDIO</span></footer>

      {notice && <div className="toast" role="status">{notice}</div>}
      {cartOpen && <div className="drawer-backdrop" onClick={() => setCartOpen(false)}>
        <aside className="cart-drawer" onClick={e => e.stopPropagation()} aria-label="Shopping bag">
          <div className="drawer-head"><div><p className="eyebrow">YOUR SELECTION</p><h2>Your bag <span>({count})</span></h2></div><button className="close-button" onClick={() => setCartOpen(false)} aria-label="Close bag">×</button></div>
          {cart.length === 0 ? <div className="empty-cart"><div className="empty-bag">♧</div><h3>Your bag is taking a break.</h3><p>Find something lovely to bring home.</p><button className="dark-button" onClick={() => setCartOpen(false)}>Continue shopping <span>↗</span></button></div> :
          <>
            <div className="cart-items">{cart.map(item => <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name}/>
              <div className="cart-item-info"><h3>{item.name}</h3><p>{item.category}</p><strong>{money(item.price)}</strong>
                <div className="quantity-control"><button onClick={() => updateQuantity(item.id, -1)} aria-label={`Decrease ${item.name} quantity`}>−</button><span>{item.quantity}</span><button onClick={() => updateQuantity(item.id, 1)} aria-label={`Increase ${item.name} quantity`}>+</button></div>
              </div>
              <button className="remove-button" onClick={() => setCart(current => current.filter(p => p.id !== item.id))}>Remove</button>
            </div>)}</div>
            <div className="shipping-hint">{subtotal >= 3000 ? "You've unlocked free shipping!" : `You're ${money(3000 - subtotal)} away from free shipping.`}</div>
            <div className="cart-summary"><div><span>Subtotal</span><strong>{money(subtotal)}</strong></div><div><span>Shipping</span><strong>{shipping === 0 ? "Free" : money(shipping)}</strong></div><div className="total-row"><span>Total</span><strong>{money(total)}</strong></div><p>Taxes included where applicable.</p><button className="checkout-button" onClick={checkout}>Continue to checkout <span>→</span></button><button className="continue-link" onClick={() => setCartOpen(false)}>Continue shopping</button></div>
          </>}
        </aside>
      </div>}
    </div>
  );
}

export default App;
