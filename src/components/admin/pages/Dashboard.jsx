
const stats = [
  {
    title: "Total Products",
    value: "24",
    icon: "bi-box-seam"
  },
  {
    title: "Total Orders",
    value: "156",
    icon: "bi-bag-check"
  },
  {
    title: "Categories",
    value: "3",
    icon: "bi-grid"
  },
  {
    title: "Total Revenue",
    value: "$2,450",
    icon: "bi-currency-dollar"
  }
];

function Dashboard() {
  return (
    <section className="admin-dashboard" id="dashboard">

      <div className="row g-4">
        {stats.map((stat) => (
          <div className="col-sm-6 col-xl-3" key={stat.title}>

            <div className="admin-stat-card">
              <div className="admin-stat-icon">
                <i className={`bi ${stat.icon}`}></i>
              </div>

              <h3>{stat.value}</h3>
              <p>{stat.title}</p>
            </div>

          </div>
        ))}
      </div>

      <div className="admin-welcome-card">
        <h2>Welcome to Crave District!</h2>
        <p>
          Manage your restaurant's menu, products,
          and orders from one place.
        </p>
      </div>

    </section>
  );
}

export default Dashboard;
