
const orders = [
  {
    id: 1001,
    customer: "Customer 01",
    items: 3,
    date: "2026-11-20",
    total: 24.5,
    status: "Pending"
  },
  {
    id: 1002,
    customer: "Customer 02",
    items: 2,
    date: "2026-11-20",
    total: 18.0,
    status: "Preparing"
  },
  {
    id: 1003,
    customer: "Customer 03",
    items: 4,
    date: "2026-11-19",
    total: 32.75,
    status: "Completed"
  },
  {
    id: 1004,
    customer: "Customer 04",
    items: 1,
    date: "2026-11-19",
    total: 12.0,
    status: "Cancelled"
  }
];

function Orders() {
  return (
    <section className="admin-orders">

      {/* ========== PAGE HEADER ========== */}
      <div className="admin-section-heading">
        <div>
          <h2>Orders Management</h2>
          <p>Track and manage customer orders.</p>
        </div>
      </div>

      {/* ========== SUMMARY CARDS ========== */}
      <div className="row g-3 mb-4">

        <div className="col-md-4">
          <div className="orders-stat-card">
            <div className="orders-stat-icon">
              <i className="bi bi-bag-check"></i>
            </div>

            <p>Total Orders</p>
            <h3>156</h3>
          </div>
        </div>

        <div className="col-md-4">
          <div className="orders-stat-card">
            <div className="orders-stat-icon">
              <i className="bi bi-clock-history"></i>
            </div>

            <p>Pending Orders</p>
            <h3>12</h3>
          </div>
        </div>

        <div className="col-md-4">
          <div className="orders-stat-card">
            <div className="orders-stat-icon">
              <i className="bi bi-check-circle"></i>
            </div>

            <p>Completed Orders</p>
            <h3>144</h3>
          </div>
        </div>

      </div>

      {/* ========== ORDERS TABLE ========== */}
      <div className="orders-table-container">

        <div className="orders-table-header">
          <h3>Recent Orders</h3>
          <p>View your restaurant's latest orders.</p>
        </div>

        {/* UI Only: Search and Filter */}
        <div className="orders-toolbar">

          <div className="orders-search">
            <i className="bi bi-search"></i>
            <input
              type="text"
              placeholder="Search orders..."
              aria-label="Search orders"
              disabled
            />
          </div>

          <select
            className="orders-filter"
            aria-label="Filter order status"
            disabled
          >
            <option>All Status</option>
            <option>Pending</option>
            <option>Preparing</option>
            <option>Completed</option>
            <option>Cancelled</option>
          </select>

        </div>

        <div className="table-responsive">
          <table className="table orders-table align-middle">

            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Items</th>
                <th>Date</th>
                <th>Total</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>

                  <td className="orders-id">
                    #{order.id}
                  </td>

                  <td>{order.customer}</td>

                  <td>{order.items}</td>

                  <td>{order.date}</td>

                  <td className="orders-total">
                    ${order.total.toFixed(2)}
                  </td>

                  <td>
                    <span
                      className={`order-status ${order.status.toLowerCase()}`}
                    >
                      {order.status}
                    </span>
                  </td>

                  <td>
                    <button
                      type="button"
                      className="orders-view-btn"
                      title="View order details (coming later)"
                      disabled
                    >
                      <i className="bi bi-eye"></i>
                    </button>
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

export default Orders;
