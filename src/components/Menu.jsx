
import { useState } from "react";
import MenuCard from "./MenuCard";
import menuItems from "../data/menu.json";
import "./Menu.css";

// Available categories
const categories = [
  { name: "All", icon: "bi-grid" },
  { name: "Food", icon: "bi-egg-fried" },
  { name: "Drinks", icon: "bi-cup-straw" },
  { name: "Desserts", icon: "bi-cake2" },
];

function Menu() {

  // Store the selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Store the text entered in the search bar
const [searchTerm, setSearchTerm] = useState("");

 
// Filter items by category AND search text
const filteredItems = menuItems.filter((item) => {

  // Check category
  const matchesCategory =
    selectedCategory === "All" ||
    item.category === selectedCategory;

  // Check product name
  const matchesSearch = item.name
    .toLowerCase()
    .includes(searchTerm.trim().toLowerCase());

  // Both conditions must be true
  return matchesCategory && matchesSearch;
});


  return (
    <section className="crave-menu" id="menu">
      <div className="container">

        {/* ========== MENU HEADER ========== */}

        <div className="menu-header">
          <div>
            <h2>
              Our <span>Menu</span>
            </h2>

            <p>
              Discover delicious bites, refreshing drinks,
              and sweet treats.
            </p>
          </div>

          
{/* ========== SEARCH BAR ========== */}

<div className="menu-search">
  <i className="bi bi-search"></i>

  <input
    type="text"
    placeholder="Search menu items..."
    aria-label="Search menu items"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
</div>

        </div>

        {/* ========== CATEGORIES ========== */}

        <div className="menu-categories">
          {categories.map((category) => (
            <button
              key={category.name}
              type="button"
              className={`category-btn ${
                selectedCategory === category.name
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setSelectedCategory(category.name)
              }
              aria-pressed={
                selectedCategory === category.name
              }
            >
              <i className={`bi ${category.icon}`}></i>
              {category.name}
            </button>
          ))}
        </div>

        {/* ========== MENU CARDS ========== */}

{/* ========== MENU CARDS ========== */}

{filteredItems.length > 0 ? (
  <div className="row g-4">
    {filteredItems.map((item) => (
      <MenuCard key={item.id} item={item} />
    ))}
  </div>
) : (
  <div className="menu-empty">
    <i className="bi bi-search"></i>
    <h4>No items found</h4>
    <p>Try another search or category.</p>
  </div>
)}


      </div>
    </section>
  );
}

export default Menu;
