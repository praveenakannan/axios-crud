import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Edit = ({ id }) => {
  const navigate = useNavigate();
  const [editData, setEditData] = useState({
    product_id: "",
    product_name: "",
    product_price: "",
    product_description: "",
  });
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await axios
      .get(`https://6694b1874bd61d8314c84020.mockapi.io/api/product/${id}`)
      .then((res) => setEditData(res.data))
      .catch((err) => console.log(err));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((preData) => ({
      ...preData,
      [name]: value,
    }));
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await axios
      .put(
        `https://6694b1874bd61d8314c84020.mockapi.io/api/product/${id}`,
        editData
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    navigate("/products");
  };
  return (
    <div>
      <form
        onSubmit={handleFormSubmit}
        class="row g-3 needs-validation"
        novalidate
      >
        <div class="col-md-4 position-relative">
          <label for="validationTooltip01" class="form-label">
            Product Id
          </label>
          <input
            type="text"
            name="product_id"
            class="form-control"
            id="validationTooltip01"
            value={editData.product_id}
            onChange={handleChange}
          />
          <div class="valid-tooltip">Looks good!</div>
        </div>
        <div class="col-md-4 position-relative">
          <label for="validationTooltip01" class="form-label">
            Product Name
          </label>
          <input
            type="text"
            name="product_name"
            class="form-control"
            id="validationTooltip01"
            value={editData.product_name}
            onChange={handleChange}
          />
          <div class="valid-tooltip">Looks good!</div>
        </div>
        <div class="col-md-4 position-relative">
          <label for="validationTooltip01" class="form-label">
            Product Price
          </label>
          <input
            type="text"
            name="product_price"
            class="form-control"
            id="validationTooltip01"
            value={editData.product_price}
            onChange={handleChange}
          />
          <div class="valid-tooltip">Looks good!</div>
        </div>
        <div class="col-md-4 position-relative">
          <label for="validationTooltip01" class="form-label">
            Product Description
          </label>
          <input
            type="text"
            name="product_description"
            class="form-control"
            id="validationTooltip01"
            value={editData.product_description}
            onChange={handleChange}
          />
          <div class="valid-tooltip">Looks good!</div>
        </div>

        <div class="col-12">
          <button class="btn btn-primary" type="submit">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;