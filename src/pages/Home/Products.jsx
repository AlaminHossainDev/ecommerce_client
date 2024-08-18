import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sort, setSort] = useState('');
  const [favorites, setFavorites] = useState([]);

  const categories = [
    'Smartphones', 'Printers', 'Desktops', 'Monitors', 'Laptops', 'Drones',
    'Gaming Consoles', 'Cameras', 'Wearables', 'Earphones', 'Gaming Accessories',
    'Displays', 'Headsets', 'Keyboards', 'Headphones', 'Graphics Cards',
    'Storage Devices', 'Memory', 'Motherboards', 'Networking', 'Cooling Solutions',
    'Power Supplies', 'Mouse'
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('http://localhost:5000/allproducts', {
        params: {
          page,
          limit: 10,
          search,
          category,
          minPrice,
          maxPrice,
          sort
        }
      });
      setProducts(response.data.products);
      setTotalPages(response.data.totalPages);
    };

    fetchProducts();
  }, [page, search, category, minPrice, maxPrice, sort]);

  const handlePageChange = (pageNum) => {
    setPage(pageNum);
  };

  const toggleFavorite = (productId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(productId)
        ? prevFavorites.filter((id) => id !== productId)
        : [...prevFavorites, productId]
    );
  };

  const resetFilters = () => {
    setSearch('');
    setCategory('');
    setMinPrice('');
    setMaxPrice('');
    setSort('');
    setPage(1);
  };

  return (
    <div>
      <div className="search-sort-filter text-center py-20 shadow-lg bg-slate-300">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input input-bordered w-full max-w-xs"
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="select select-bordered w-full max-w-xs">
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="input input-bordered w-full max-w-xs"
        />
        <select value={sort} onChange={(e) => setSort(e.target.value)} className="select select-bordered w-full max-w-xs">
          <option value="">Sort By</option>
          <option value="priceLowToHigh">Price: Low to High</option>
          <option value="priceHighToLow">Price: High to Low</option>
          <option value="newest">Newest First</option>
        </select>
        <button onClick={resetFilters} className="btn bg-black text-white btn-outline ml-4">Reset</button>
      </div>

      <div className="grid justify-center gap-2 sm:grid-cols-3 lg:grid-cols-4 container mx-auto py-20">
        {products.map((p) => (
          <div key={p._id} className="relative">
            <button
              onClick={() => toggleFavorite(p._id)}
              className="absolute top-0 right-0 text-gray-300 bg-black rounded-lg p-2 z-50"
              style={{ fontSize: '20px' }}
            >
              {favorites.includes(p._id) ? (
                <FaHeart className="text-red-500" />
              ) : (
                <FaRegHeart />
              )}
            </button>
            <div className="card card-compact h-[550px] w-full bg-base-100 shadow-xl pb-4">
              <figure>
                <img src={p.productImage} alt={p.productName} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{p.productName}</h2>
                <p>
                  <span className="text-base">Description</span>: {p.description}
                </p>
                <p>
                  <span className="text-base">Category</span>: {p.category}
                </p>
                <p>
                  <span className="text-base">Rating</span>: {p.ratings}
                </p>
                <p>
                  <span className="text-base">Price</span>: {p.price}
                </p>
                <div className="card-actions">
                  <Link
                    to={`#`}
                    className="flex items-center bg-black text-white hover:bg-orange-500 hover:text-white justify-center w-full p-3 font-semibold rounded-md"
                  >
                    View Product
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination flex justify-center">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`btn ${page === i + 1 ? "btn-active" : ""}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Products;
