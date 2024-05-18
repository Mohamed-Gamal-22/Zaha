import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";

export default function ProductsForDashboard() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [size, setSize] = useState("");
  const [material, setMaterial] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([]);
  const [colors, setColors] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [subcategories, setSubcategories] = useState([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  async function getProducts() {
    try {
      const { data } = await axios.get(
        `https://www.zahascarves.com/api/product/all`,
        {
          headers: {
            Authorization: `Bearer G7h22L1YUtE9wexBIepKfZ6dac1yIcgMNFLAsC9d73580a97`,
          },
        }
      );
      setProducts(data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  async function fetchSubcategories() {
    try {
      const { data } = await axios.get(
        `https://www.zahascarves.com/api/subcategory/all`,
        {
          headers: {
            Authorization: `Bearer G7h22L1YUtE9wexBIepKfZ6dac1yIcgMNFLAsC9d73580a97`,
          },
        }
      );
      setSubcategories(data.SubCategory.data);
    } catch (error) {
      console.error("Error fetching subcategories:", error);
    }
  }

  async function addProduct() {
    // Check if any input field is empty
    if (!name || !desc || !size || !material || !quantity || !price || !categoryId || !colors.length || !images.length) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Please fill in all the fields",
      });
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("desc", desc);
      formData.append("size", size);
      formData.append("material", material);
      formData.append("quantity", quantity);
      formData.append("price", price);
      Array.from(images).forEach((file, index) => {
        formData.append(`images[${index}]`, file);
      });
      formData.append("colors[]", colors[0]);
      formData.append("subcategory_id", categoryId);

      await axios.post(
        `https://www.zahascarves.com/api/product/create`,
        formData,
        {
          headers: {
            Authorization: `Bearer G7h22L1YUtE9wexBIepKfZ6dac1yIcgMNFLAsC9d73580a97`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setShowAddModal(false);
      getProducts();
      Swal.fire({
        icon: "success",
        title: "Product created successfully",
      });
    } catch (error) {
      console.error("Error adding product:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to add product",
      });
    }
  }

  async function updateProduct() {
    // Check if any input field is empty
    if (!name || !desc || !size || !material || !quantity || !price || !selectedSubcategory || !colors.length || !images.length) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Please fill in all the fields",
      });
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("desc", desc);
      formData.append("size", size);
      formData.append("material", material);
      formData.append("quantity", quantity);
      formData.append("price", price);
      Array.from(images).forEach((file, index) => {
        formData.append(`images[${index}]`, file);
      });
      formData.append("colors", colors[0]);
      formData.append("subcategory_id", selectedSubcategory);

      await axios.post(
        `https://www.zahascarves.com/api/product/update/${selectedProductId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer G7h22L1YUtE9wexBIepKfZ6dac1yIcgMNFLAsC9d73580a97`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setShowUpdateModal(false);
      getProducts();
      Swal.fire({
        icon: "success",
        title: "Product updated successfully",
      });
    } catch (error) {
      console.error("Error updating product:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to update product",
      });
    }
  }

  async function deleteProduct(productId) {
    // Show confirmation dialog before deleting
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this product!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await axios.get(
          `https://www.zahascarves.com/api/product/delete/${productId}`,
          {
            headers: {
              Authorization: `Bearer G7h22L1YUtE9wexBIepKfZ6dac1yIcgMNFLAsC9d73580a97`,
            },
          }
        );
        getProducts();
        Swal.fire({
          icon: "success",
          title: "Product deleted successfully",
        });
      } catch (error) {
        console.error("Error deleting product:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to delete product",
        });
      }
    }
  }

  const handleShowUpdate = (product) => {
    setName(product.name);
    setDesc(product.desc);
    setMaterial(product.material);
    setSize(product.size);
    setPrice(product.price);
    setQuantity(product.quantity);
  };

  useEffect(() => {
    getProducts();
    fetchSubcategories();
  }, []);

  return (
    <>
    {/* {console.log(products)} */}
      {products.length > 0 ? (
        <div className="container">
          <div className="row g-3">
            {products.map((product) => (
              <div key={product.id} className="col-md-3">
                <div className="card p-2">
                  <img
                    src={product.images[0]}
                    className="card-img-top object-fit-contain"
                    alt="Product"
                    height={150}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      <span>Name: </span> {product.name}
                    </h5>
                    <p className="card-text">
                      <span className="fw-bold">Desc</span>
                      {product.desc}
                    </p>
                    <p className="card-text">
                      <span className="fw-bold">Price</span>Price:{" "}
                      {product.price}
                    </p>
                    <p className="card-text">
                      <span className="fw-bold">Size</span>Size: {product.size}
                    </p>
                    <p className="card-text">
                      <span className="fw-bold">Material</span>Material:{" "}
                      {product.material}
                    </p>
                    <p className="card-text">
                      <span className="fw-bold">quantity</span>quantity:{" "}
                      {product.quantity}
                    </p>
                    <p className="card-text">
                      <span className="fw-bold">SubCategory</span>:{" "}
                      {product.subcategory_id}
                    </p>
                    <p className="fw-bold mb-1">Colors :</p>
                    {product?.colors?.map((color) =>
                      color?.name?.map((c, index) => (
                        <span key={index}>{c}, </span>
                      ))
                    )}
                    <Button
                      variant="primary my-2 w-100"
                      onClick={() => {
                        handleShowUpdate(product);
                        setShowUpdateModal(true);
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      className="my-2 w-100"
                      variant="danger"
                      onClick={() => deleteProduct(product.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}

      {/* Add Product Button */}
      <div className="my-3">
        <Button
          className="w-100"
          variant="success"
          onClick={() => setShowAddModal(true)}
        >
          Add Product
        </Button>
      </div>

      {/* Add Product Modal */}
      <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="productName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="productDesc">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter product description"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="productSize">
              <Form.Label>Size</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product size"
                value={size}
                onChange={(e) => setSize(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="productMaterial">
              <Form.Label>Material</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product material"
                value={material}
                onChange={(e) => setMaterial(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="productQuantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="productPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="productCategory">
              <Form.Label>Subcategory</Form.Label>
              <Form.Control
                as="select"
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
              >
                <option value="">Select Subcategory</option>
                {subcategories?.map((subcategory) => (
                  <option key={subcategory.id} value={subcategory.id}>
                    {subcategory.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="productColors">
              <Form.Label>Colors</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product colors (separated by comma)"
                value={colors}
                onChange={(e) => setColors(e.target.value.split(","))}
              />
            </Form.Group>
            <Form.Group controlId="productImages">
              <Form.Label>Images</Form.Label>
              <Form.Control
                type="file"
                multiple
                onChange={(e) => setImages(e.target.files)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={addProduct}>
            Add Product
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Update Product Modal */}
      <Modal show={showUpdateModal} onHide={() => setShowUpdateModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="productName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="productDesc">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter product description"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="productSize">
              <Form.Label>Size</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product size"
                value={size}
                onChange={(e) => setSize(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="productMaterial">
              <Form.Label>Material</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product material"
                value={material}
                onChange={(e) => setMaterial(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="productQuantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="productPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="productCategory">
              <Form.Label>Subcategory</Form.Label>
              <Form.Control
                as="select"
                value={selectedSubcategory}
                onChange={(e) => setSelectedSubcategory(e.target.value)}
              >
                <option value="">Select Subcategory</option>
                {subcategories?.map((subcategory) => (
                  <option key={subcategory.id} value={subcategory.id}>
                    {subcategory.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="productColors">
              <Form.Label>Colors</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product colors (separated by comma)"
                value={colors}
                onChange={(e) => setColors(e.target.value.split(","))}
              />
            </Form.Group>
            <Form.Group controlId="productImages">
              <Form.Label>Images</Form.Label>
              <Form.Control
                type="file"
                multiple
                onChange={(e) => setImages(e.target.files)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowUpdateModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={updateProduct}>
            Update Product
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
