import React, { useEffect } from "react";
import { Table, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listUsers } from "./../actions/user";

const Home = () => {
  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.listUsers);
  const { isLoading, users } = usersData;
  const userInfo = useSelector((state) => state.login);
  const { user } = userInfo;
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      dispatch(listUsers());
    } else {
      navigate("/login");
    }
  }, [dispatch, navigate, user]);
  return (
    <>
      <Row className="align-items-center">
        <Col>
          <h2>Users</h2>
        </Col>
      </Row>
      {isLoading ? (
        <h2>Loading</h2>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.age}</td>
                <td>
                  <Button variant="light" className="btn-sm">
                    <i className="fas fa-edit"></i> Edit
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default Home;
