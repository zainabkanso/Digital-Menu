
import menuItems from "../../../data/menu.json";

function ManageMenu() {
  return (
    <section className="admin-manage-menu">

      {/* ========== PAGE HEADER ========== */}
      <div className="admin-section-heading">
        <div>
          <h2>Menu Items</h2>
          <p>View and organize restaurant products.</p>
        </div>

        {/* UI Only */}
        <button className="admin-add-btn" type="button" disabled>
          <i className="bi bi-plus-lg"></i>
          Add Product
        </button>
      </div>

      {/* ========== PRODUCTS CONTAINER ========== */}
      <div className="admin-menu-panel">

        {/* Search and Filter - UI Only */}
        <div className="admin-menu-toolbar">

          <div className="admin-search">
            <i className="bi bi-search"></i>
            <input
              type="text"
              placeholder="Search products..."
              aria-label="Search products"
              disabled
            />
          </div>

          <select
            className="admin-category-select"
            aria-label="Filter category"
            disabled
          >
            <option>All Categories</option>
            <option>Food</option>
            <option>Drinks</option>
            <option>Desserts</option>
          </select>

        </div>

        {/* ========== PRODUCTS TABLE ========== */}
        <div className="table-responsive">
          <table className="table admin-menu-table align-middle">

            <thead>
              <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {menuItems.map((item) => (
                <tr key={item.id}>

                  {/* Product Image and Name */}
                  <td>
                    <div className="admin-product-info">
                      <img src={item.image} alt={item.name} />

                      <div>
                        <h4>{item.name}</h4>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </td>

                  {/* Category */}
                  <td>
                    <span className="admin-category-badge">
                      {item.category}
                    </span>
                  </td>

                  {/* Price */}
                  <td className="admin-price">
                    ${Number(item.price).toFixed(2)}
                  </td>

                  {/* Action Buttons - UI Only */}
                  <td>
                    <div className="admin-table-actions">

                      <button
                        className="admin-edit-btn"
                        type="button"
                        title="Edit product (coming later)"
                        disabled
                      >
                        <i className="bi bi-pencil-square"></i>
                      </button>

                      <button
                        className="admin-delete-btn"
                        type="button"
                        title="Delete product (coming later)"
                        disabled
                      >
                        <i className="bi bi-trash3"></i>
                      </button>

                    </div>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </section>
  );
}

export default ManageMenu;
