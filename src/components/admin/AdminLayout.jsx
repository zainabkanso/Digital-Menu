
import AdminSidebar from "./components/AdminSidebar";
import AdminHeader from "./components/AdminHeader";

import Dashboard from "./pages/Dashboard";
import ManageMenu from "./pages/ManageMenu";
import AddProduct from "./pages/AddProduct";
import Orders from "./pages/Orders";

import "./Admin.css";

function AdminLayout() {

  // Read the page from the URL
  const params = new URLSearchParams(window.location.search);

  const requestedPage = params.get("page");

  // Available admin pages
  const pages = [
    "dashboard",
    "menu",
    "add-product",
    "orders"
  ];

  // Check if requested page is valid
  const page = pages.includes(requestedPage)
    ? requestedPage
    : "dashboard";

  // Page titles
  const pageInfo = {
    dashboard: {
      title: "Dashboard Overview",
      description: "Welcome back! Here's your restaurant overview."
    },

    menu: {
      title: "Menu Management",
      description: "Manage your restaurant products."
    },

    "add-product": {
      title: "Add New Product",
      description: "Create a new restaurant menu item."
    },

    orders: {
      title: "Orders Management",
      description: "Track and manage customer orders."
    }
  };

  return (
    <div className="admin-layout">

      {/* Left Sidebar */}
      <AdminSidebar activePage={page} />

      {/* Main Content */}
      <main className="admin-main">

        <AdminHeader
          title={pageInfo[page].title}
          description={pageInfo[page].description}
        />

        {page === "dashboard" && <Dashboard />}

        {page === "menu" && <ManageMenu />}

        {page === "add-product" && <AddProduct />}

        {page === "orders" && <Orders />}

      </main>

    </div>
  );
}

export default AdminLayout;
