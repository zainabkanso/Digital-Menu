function AdminSidebar({ activePage }) {
  return (
    <aside className="admin-sidebar">
      <div className="admin-brand">
        <i className="bi bi-fire"></i>
        <span>Crave District</span>
      </div>

      <p className="admin-sidebar-label">MAIN MENU</p>

      <nav className="admin-nav">
        <a
          href="?admin=1&page=dashboard"
          className={activePage === "dashboard" ? "active" : ""}
        >
          <i className="bi bi-grid-1x2-fill"></i>
          <span>Dashboard</span>
        </a>

        <a
          href="?admin=1&page=menu"
          className={activePage === "menu" ? "active" : ""}
        >
          <i className="bi bi-card-list"></i>
          <span>Menu Items</span>
        </a>

        <a
          href="?admin=1&page=add-product"
          className={activePage === "add-product" ? "active" : ""}
        >
          <i className="bi bi-plus-circle"></i>
          <span>Add Product</span>
        </a>

        <a
          href="?admin=1&page=orders"
          className={activePage === "orders" ? "active" : ""}
        >
          <i className="bi bi-bag-check"></i>
          <span>Orders</span>
        </a>

        
      </nav>

      <div className="admin-sidebar-bottom">
        <i className="bi bi-person-circle"></i>
        <span>Administrator</span>
      </div>
    </aside>
  );
}

export default AdminSidebar;
