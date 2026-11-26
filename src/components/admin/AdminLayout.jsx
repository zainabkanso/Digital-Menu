
import AdminSidebar from "./components/AdminSidebar";
import AdminHeader from "./components/AdminHeader";

import Dashboard from "./pages/Dashboard";
import ManageMenu from "./pages/ManageMenu";
import AddProduct from "./pages/AddProduct";

import "./Admin.css";

function AdminLayout() {
// Step 1: Get URL parameters
  const params = new URLSearchParams(window.location.search);

  // Step 2: Declare requestedPage
  const requestedPage = params.get("page");

  // Step 3: Check if the requested page is valid
  const page = ["dashboard", "menu", "add-product"].includes(requestedPage)
    ? requestedPage
    : "dashboard";

  // Page title and description
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
    }
  };

  return (
    <div className="admin-layout">

      {/* Left Sidebar */}
      <AdminSidebar activePage={page} />

      {/* Right Content */}
      <main className="admin-main">

        <AdminHeader
          title={pageInfo[page].title}
          description={pageInfo[page].description}
        />

        {page === "dashboard" && <Dashboard />}

        {page === "menu" && <ManageMenu />}

        {page === "add-product" && <AddProduct />}

      </main>
    </div>
  );
}

export default AdminLayout;
