import React, { useEffect, useState } from "react";
import { Table, Modal, Form, Button } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import Pagination from "react-bootstrap/Pagination";

export default function SocialLinks() {
  const [links, setLinks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedLink, setSelectedLink] = useState(null);
  const [newSocial, setNewSocial] = useState("");
  const [newLink, setNewLink] = useState("");
  const [updatedSocial, setUpdatedSocial] = useState("");
  const [updatedLink, setUpdatedLink] = useState("");
  const [noData, setNoData] = useState(false);

  async function getSocial(page = 1) {
    try {
      const { data } = await axios.get(
        `https://www.zahascarves.com/api/social/all?page=${page}`,
        {
          headers: {
            Authorization: `Bearer G7h22L1YUtE9wexBIepKfZ6dac1yIcgMNFLAsC9d73580a97`,
          },
        }
      );
      console.log(data);
      setLinks(data.area.data);
      setCurrentPage(data.area.current_page);
      setLastPage(data.area.last_page);
      if (data.area.total === 0) {
        setNoData(true);
      } else {
        setNoData(false);
      }
    } catch (error) {
      console.error("Error fetching social links:", error);
    }
  }

  useEffect(() => {
    getSocial();
  }, []);

  const handleCloseAddModal = () => {
    setShowAddModal(false);
    setNewSocial("");
    setNewLink("");
  };

  const handleShowAddModal = () => setShowAddModal(true);

  const handleCloseUpdateModal = () => setShowUpdateModal(false);

  const handleShowUpdateModal = (link) => {
    setSelectedLink(link);
    setUpdatedSocial(link.social || "");
    setUpdatedLink(link.link || "");
    setShowUpdateModal(true);
  };

  const addSocialLink = async () => {
    try {
      const { data } = await axios.post(
        `https://www.zahascarves.com/api/social/create`,
        {
          social: newSocial,
          link: newLink,
        },
        {
          headers: {
            Authorization: `Bearer G7h22L1YUtE9wexBIepKfZ6dac1yIcgMNFLAsC9d73580a97`,
          },
        }
      );

      console.log(data.message);

      if (data.message === "social link created successfully") {
        handleCloseAddModal();
        getSocial(currentPage);
        Swal.fire({
          icon: "success",
          title: "Social link added successfully",
        });
      }
    } catch (error) {
      console.error("Error adding social link:", error);
    }
  };

  const updateSocialLink = async () => {
    try {
      const { data } = await axios.post(
        `https://www.zahascarves.com/api/social/update/${selectedLink.id}`,
        {
          social: updatedSocial,
          link: updatedLink,
        },
        {
          headers: {
            Authorization: `Bearer G7h22L1YUtE9wexBIepKfZ6dac1yIcgMNFLAsC9d73580a97`,
          },
        }
      );

      if (data.message === "social link updated successfully") {
        handleCloseUpdateModal();
        getSocial(currentPage);
        Swal.fire({
          icon: "success",
          title: "Social link updated successfully",
        });
      }
    } catch (error) {
      console.error("Error updating social link:", error);
    }
  };

  const deleteSocialLink = async (id) => {
    try {
      const { data } = await axios.get(
        `https://www.zahascarves.com/api/social/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer G7h22L1YUtE9wexBIepKfZ6dac1yIcgMNFLAsC9d73580a97`,
          },
        }
      );

      if (data.message === "social link deleted successfully") {
        getSocial(currentPage);
        Swal.fire({
          icon: "success",
          title: "Social link deleted successfully",
        });
      }
    } catch (error) {
      console.error("Error deleting social link:", error);
    }
  };

  const handlePagination = (page) => {
    getSocial(page);
  };

  return (
    <>
    {console.log(links) }
      <h1 className="text-center bg-dark text-light rounded-3 fw-bold text-capitalize p-3 my-3">
        SocialLinks
      </h1>

      {noData ? (
        <p className="text-center text-light fw-bold bg-dark p-3">
          No data to show
        </p>
      ) : (
        <>
          <Table striped bordered>
            <thead>
              <tr>
                <th>#</th>
                <th>Social</th>
                <th>Link</th>
                <th>Edit</th>
              </tr>
            </thead>
            {links.length > 0 && (
              <tbody>
                {links.map((link, index) => (
                  <tr key={link.id}>
                    <td>{index + 1}</td>
                    <td>{link.social}</td>
                    <td>{link.link}</td>
                    <td className="text-center">
                      <Button
                        variant="primary"
                        onClick={() => handleShowUpdateModal(link)}
                      >
                        Edit
                      </Button>{" "}
                      <Button
                        variant="danger"
                        onClick={() => {
                          Swal.fire({
                            title: "Are you sure?",
                            text: "You won't be able to revert this!",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonText: "Yes, delete it!",
                            cancelButtonText: "No, cancel!",
                          }).then((result) => {
                            if (result.isConfirmed) {
                              deleteSocialLink(link.id);
                            } else if (
                              result.dismiss === Swal.DismissReason.cancel
                            ) {
                              Swal.fire({
                                title: "Cancelled",
                                icon: "info",
                              });
                            }
                          });
                        }}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </Table>

          <div className="d-flex justify-content-center">
          <Pagination>
            {[...Array(lastPage)].map((_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === currentPage}
                onClick={() => handlePagination(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
          </Pagination>
          </div>
        </>
      )}

      <Button
        className="w-100 my-3"
        variant="success"
        onClick={handleShowAddModal}
      >
        Add Social Link
      </Button>

      <Modal show={showAddModal} onHide={handleCloseAddModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Social Link</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="social">
              <Form.Label>Social</Form.Label>
              <Form.Control
                type="text"
                value={newSocial}
                onChange={(e) => setNewSocial(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="link">
              <Form.Label>Link</Form.Label>
              <Form.Control
                type="text"
                value={newLink}
                onChange={(e) => setNewLink(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAddModal}>
            Close
          </Button>
          <Button variant="primary" onClick={addSocialLink}>
            Add Social Link
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showUpdateModal} onHide={handleCloseUpdateModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Social Link</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="updatedSocial">
              <Form.Label>Social</Form.Label>
              <Form.Control
                type="text"
                value={updatedSocial}
                onChange={(e) => setUpdatedSocial(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="updatedLink">
              <Form.Label>Link</Form.Label>
              <Form.Control
                type="text"
                value={updatedLink}
                onChange={(e) => setUpdatedLink(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseUpdateModal}>
            Close
          </Button>
          <Button variant="primary" onClick={updateSocialLink}>
            Update Social Link
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
