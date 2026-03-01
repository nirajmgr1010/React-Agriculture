function ProductSearch({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#166534]"
    />
  );
}

export default ProductSearch;