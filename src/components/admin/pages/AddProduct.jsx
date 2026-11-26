import { useEffect, useState } from "react";

function AddProduct() {
  // ========== IMAGE PREVIEW STATE ==========
  const [imagePreview, setImagePreview] = useState(null);
  const [imageName, setImageName] = useState("");

  // ========== HANDLE IMAGE SELECTION ==========
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) {
      setImagePreview(null);
      setImageName("");
      return;
    }

    // Only allow JPG, PNG and WEBP images
    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

    if (!allowedTypes.includes(file.type)) {
      alert("Please select a JPG, PNG, or WEBP image.");

      e.target.value = "";
      setImagePreview(null);
      setImageName("");
      return;
    }

    // Create temporary URL for image preview
    const imageURL = URL.createObjectURL(file);

    setImagePreview(imageURL);
    setImageName(file.name);
  };

  // ========== CLEAN UP IMAGE URL ==========
  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  return (
    <section className="admin-add-product">
      {/* ========== PAGE HEADER ========== */}
      <div className="admin-section-heading">
        <div>
          <h2>Add New Product</h2>
          <p>Create a new item for your restaurant menu.</p>
        </div>
      </div>

      {/* ========== PRODUCT FORM ========== */}
      <div className="admin-product-form">
        <h3>Product Information</h3>

        <p className="admin-form-subtitle">
          Enter the details of your new product.
        </p>

        <div className="row g-4">
          {/* ========== PRODUCT NAME ========== */}
          <div className="col-md-6">
            <label className="admin-form-label" htmlFor="productName">
              Product Name
            </label>

            <input
              id="productName"
              type="text"
              className="form-control admin-form-input"
              placeholder="e.g. Classic Cheeseburger"
            />
          </div>

          {/* ========== CATEGORY ========== */}
          <div className="col-md-6">
            <label className="admin-form-label" htmlFor="productCategory">
              Category
            </label>

            <select
              id="productCategory"
              className="form-select admin-form-input"
              defaultValue=""
            >
              <option value="" disabled>
                Select Category
              </option>

              <option value="Food">Food</option>
              <option value="Drinks">Drinks</option>
              <option value="Desserts">Desserts</option>
            </select>
          </div>

          {/* ========== DESCRIPTION ========== */}
          <div className="col-12">
            <label className="admin-form-label" htmlFor="productDescription">
              Description
            </label>

            <textarea
              id="productDescription"
              className="form-control admin-form-input"
              rows="4"
              placeholder="Describe your product..."
            ></textarea>
          </div>

          {/* ========== PRICE ========== */}
          <div className="col-md-6">
            <label className="admin-form-label" htmlFor="productPrice">
              Price ($)
            </label>

            <input
              id="productPrice"
              type="number"
              min="0"
              step="0.01"
              className="form-control admin-form-input"
              placeholder="0.00"
            />
          </div>

          {/* ========== PRODUCT IMAGE INPUT ========== */}
          <div className="col-md-6">
            <label className="admin-form-label" htmlFor="productImage">
              Product Image
            </label>

            <input
              type="file"
              id="productImage"
              className="form-control admin-form-input admin-file-input"
              accept="image/jpeg,image/png,image/webp"
              onChange={handleImageChange}
            />

            <small className="admin-file-hint">
              Choose JPG, PNG, or WEBP images from your device.
            </small>
          </div>

          {/* ========== IMAGE PREVIEW ========== */}
          <div className="col-12">
            <div className="admin-image-upload">
              {imagePreview ? (
                <div className="admin-preview-container">
                  <img
                    src={imagePreview}
                    alt="Selected product preview"
                    className="admin-preview-image"
                  />

                  <p className="admin-preview-name">
                    <i className="bi bi-check-circle-fill"></i>
                    {imageName}
                  </p>
                </div>
              ) : (
                <>
                  <i className="bi bi-image"></i>

                  <h4>Product Image Preview</h4>

                  <p>Select an image from your computer to preview it here.</p>
                </>
              )}
            </div>
          </div>
        </div>

        {/* ========== FORM ACTIONS ========== */}
        <div className="admin-form-actions">
          <a href="?admin=1&page=menu" className="admin-cancel-btn">
            Cancel
          </a>

          {/* Save Product will work after backend integration */}
          <button type="button" className="admin-save-btn" disabled>
            <i className="bi bi-check-lg"></i>
            Save Product
          </button>
        </div>
      </div>
    </section>
  );
}

export default AddProduct;
