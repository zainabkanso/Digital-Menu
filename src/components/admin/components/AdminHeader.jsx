
function AdminHeader({ title, description }) {
  return (
    <header className="admin-topbar">

      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <div className="admin-header-actions">
        <i className="bi bi-bell"></i>

        <div className="admin-user">
          <i className="bi bi-person-circle"></i>
          <span>Admin</span>
        </div>
      </div>

    </header>
  );
}

export default AdminHeader;
