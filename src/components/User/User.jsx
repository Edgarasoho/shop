import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faUser,
  faTty,
  faBuilding,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

import "./User.scss";

function User() {
  const [user, setUser] = useState(null);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/11"
        );

        if (!response.ok) throw new Error("Something went wrong");

        const data = await response.json();

        setUser(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {loading && <Spinner className="spiner-size" animation="border" />}
      {!loading && user && (
        <>
          <div className="user" onClick={handleShow}>
            {user.username[0]}
          </div>
          <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton closeVariant="white">
              <Offcanvas.Title>
                <h6>{user.username}</h6>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <FontAwesomeIcon icon={faUser} />
              <p>Name: {user.name}</p>
              <FontAwesomeIcon icon={faEnvelope} />
              <p>Email: {user.email}</p>
              <FontAwesomeIcon icon={faTty} />
              <p>Phone: {user.phone}</p>
              <FontAwesomeIcon icon={faBuilding} />
              <p>Company: {user.company.name}</p>
              <FontAwesomeIcon icon={faGlobe} />
              <p>Website: {user.website}</p>
            </Offcanvas.Body>
          </Offcanvas>
        </>
      )}
      {!loading && !user && <div>No User</div>}
    </>
  );
}

export default User;
