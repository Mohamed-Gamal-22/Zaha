import axios from "axios";
import React, { useEffect, useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";

export default function Slider() {
  const [Images, setImages] = useState([]);
  const [lastPage, setLastPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [slideName, setSlideName] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [editingSlide, setEditingSlide] = useState(null);
  const [updatedSlideName, setUpdatedSlideName] = useState("");

  const handleCloseAddModal = () => {
    setShowAddModal(false);
    setSlideName("");
    setImageFile(null);
  };

  const handleShowAddModal = () => setShowAddModal(true);

  const handleCloseUpdateModal = () => {
    setShowUpdateModal(false);
    setEditingSlide(null);
    setUpdatedSlideName("");
  };

  const handleShowUpdateModal = () => setShowUpdateModal(true);

  async function getSliderImages(page = 1) {
    let { data } = await axios.get(
      `https://www.zahascarves.com/api/slider/all?page=${page}`,
      {
        headers: {
          Authorization: `Bearer G7h22L1YUtE9wexBIepKfZ6dac1yIcgMNFLAsC9d73580a97`,
        },
      }
    );
    setImages(data.slider.data);
    setCurrentPage(data.slider.current_page);
    setLastPage(data.slider.last_page);
  }

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const addSlide = async () => {
    // Check if any input is empty
    if (!slideName || !imageFile) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Please fill in all fields.',
      });
      return;
    }
  
    // Proceed with adding the slide if all inputs are filled
    const formData = new FormData();
    formData.append('name', slideName);
    formData.append('path', imageFile);
  
    try {
      let { data } = await axios.post(
        `https://www.zahascarves.com/api/slider/create`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer tmTqMwqaJf0gGEQWE5kQAkfn37ITr46RpjVCfHWha266e4cc`,
          },
        }
      );
      if (data.message === 'Slider created successfully') {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: data.message,
          showConfirmButton: false,
          timer: 2000,
        });
        setShowAddModal(false);
        getSliderImages(currentPage);
      }
    } catch (error) {
      console.error('Error adding slide:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to add slide!',
      });
    }
  };

  const deleteSlide = async (id) => {
    try {
      let { data } = await axios.get(
        `https://www.zahascarves.com/api/slider/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer tmTqMwqaJf0gGEQWE5kQAkfn37ITr46RpjVCfHWha266e4cc`,
          },
        }
      );

      if (data.message === "slider deleted successfully") {
        Swal.fire({
          position: "center",
          icon: "success",
          title: data.message,
          showConfirmButton: false,
          timer: 2000,
        });
        getSliderImages(currentPage);
      }
    } catch (error) {
      console.error("Error deleting slide:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to delete slide!",
      });
    }
  };

  const updateSlide = async () => {
    // Check if the updated slide name is empty
    if (!updatedSlideName) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Please enter a slide name.',
      });
      return;
    }
  
    const formData = new FormData();
    formData.append('name', updatedSlideName);
  
    try {
      let { data } = await axios.post(
        `https://www.zahascarves.com/api/slider/update/${editingSlide.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer tmTqMwqaJf0gGEQWE5kQAkfn37ITr46RpjVCfHWha266e4cc`,
          },
        }
      );
      if (data.message === 'slider updated successfully') {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: data.message,
          showConfirmButton: false,
          timer: 2000,
        });
        setShowUpdateModal(false);
        getSliderImages(currentPage);
      }
    } catch (error) {
      console.error('Error updating slide:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to update slide!',
      });
    }
  };

  const handleEditSlide = (slide) => {
    setEditingSlide(slide);
    setUpdatedSlideName(slide.name);
    handleShowUpdateModal();
  };

  let items = [];
  for (let number = 1; number <= lastPage; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => getSliderImages(number)}
      >
        {number}
      </Pagination.Item>
    );
  }
  const paginationBasic = (
    <div>
      <Pagination size="sm">{items}</Pagination>
    </div>
  );

  useEffect(() => {
    getSliderImages(currentPage);
  }, []);

  return (
    <>

    {/* {console.log(Images)} */}
      <h1 className="text-center bg-light text-dark rounded-3 fw-bold text-capitalize p-3 my-3">
        Slider
      </h1>
      <div className="container">
        <div className="row g-3">
          {Images.length > 0 ? (
            Images.map((img) => (
              <div key={img.id} className="col-md-3">
                <div className="item">
                  <img
                    src={img.path}
                    className="w-100 object-fit-contain"
                    height={300}
                    alt=""
                  />
                  <p className="fw-bold text-center text-capitalize my-2">
                    {img.name}
                  </p>
                  <Button
                    variant="danger"
                    className="w-100"
                    onClick={() => {
                      Swal.fire({
                        title: "Are you sure?",
                        text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, delete it!",
                      }).then((result) => {
                        if (result.isConfirmed) {
                          deleteSlide(img.id);
                        }
                      });
                    }}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="primary"
                    className="w-100 mt-2"
                    onClick={() => handleEditSlide(img)}
                  >
                    Edit
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <p>No images found</p>
          )}
        </div>
      </div>

      <div className="my-2 d-flex justify-content-center">
        {paginationBasic}
      </div>

      <Button className="w-100 my-3" variant="success" onClick={handleShowAddModal}>
        Add Slide
      </Button>

      {/* Add Slide Modal */}
      <Modal show={showAddModal} onHide={handleCloseAddModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Slide</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="slideName">
              <Form.Label>Slide Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter slide name"
                value={slideName}
                onChange={(e) => setSlideName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="image">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" onChange={handleImageChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAddModal}>
            Close
          </Button>
          <Button variant="primary" onClick={addSlide}>
            Add Slide
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Update Slide Modal */}
      <Modal show={showUpdateModal} onHide={handleCloseUpdateModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Slide</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="updatedSlideName">
              <Form.Label>Slide Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter updated slide name"
                value={updatedSlideName}
                onChange={(e) => setUpdatedSlideName(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseUpdateModal}>
            Close
          </Button>
          <Button variant="primary" onClick={updateSlide}>
            Update Slide
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}