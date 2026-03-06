import { useWishlist } from "../Context/WishlistContext";

const Wishlist = () => {

  const { wishlistItems, removeFromWishlist } = useWishlist();

  return (
    <div className="max-w-5xl mx-auto p-8">

      <h1 className="text-3xl font-bold mb-6">My Wishlist</h1>

      {wishlistItems.length === 0 ? (
        <p>No items in wishlist</p>
      ) : (
        wishlistItems.map(item => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b py-4"
          >
            <div className="flex gap-4 items-center">
              <img src={item.image} className="w-16 h-16 object-cover"/>
              <p>{item.name}</p>
            </div>

            <button
              onClick={() => removeFromWishlist(item.id)}
              className="text-red-600"
            >
              Remove
            </button>

          </div>
        ))
      )}

    </div>
  );
};

export default Wishlist;