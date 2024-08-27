import React, { useState } from 'react';
import Product from './components/Product';
import UserList from './components/UserList';

function App() {
  const [showProduct, setShowProduct] = useState(true);

  return (
    <div>
      <nav>
        <button onClick={() => setShowProduct(true)}>Product</button>
        <button onClick={() => setShowProduct(false)}>User List</button>
      </nav>

      {showProduct ? <Product /> : <UserList />}
    </div>
  );
}

export default App;
