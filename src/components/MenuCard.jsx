
import "./MenuCard.css";

function MenuCard({ item }) {
  return (
    <div className="col-12 col-sm-6 col-lg-4">
      <div className="crave-menu-card">

        {/* Food Image */}
        <div className="menu-card-image">
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
          />
        </div>

        {/* Food Details */}
        <div className="menu-card-body">

          <h3>{item.name}</h3>

          <p>{item.description}</p>

          {/* Price and Button */}
          <div className="menu-card-footer">
            <span className="menu-card-price">
              ${item.price.toFixed(2)}
            </span>

            <button
              type="button"
              className="menu-add-btn"
            >
              <i className="bi bi-plus-lg"></i>
              Add to Cart
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default MenuCard;
