function ProductFilter({ category, setCategory }) {
  return (
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="w-full px-4 py-2 border rounded-lg"
    >
      <option value="">All Categories</option>
      <option value="Vegetable">Vegetables</option>
      <option value="Fruit">Fruits</option>
    </select>
  );
}

export default ProductFilter;