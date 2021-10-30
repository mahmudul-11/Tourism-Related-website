import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();
    const email = user.email;
    // console.log(email);
    useEffect(() => {
        fetch(`http://localhost:5000/userOrders/${email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);
    // Item delete
    const deleteHandle = id => {
        const procced = window.confirm("Are you sure to remove this service?");
        if (procced) {
            const url = `http://localhost:5000/userOrders/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Deleted Successfully');
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining);
                    }
                })

        }

    }
    return (
        <div>
            <h2 className='text-center border-bottom border-2 mt-4 pb-4 fw-bolder text-success mx-2' >My Booked Servies</h2>
            {
                orders.map(item =>
                    <Row className='my-2 pb-2 border-bottom border-2 mx-2'>
                        <Col lg={3} sm={4} xs={4} className='column-style'>
                            <img src={item?.order?.img} alt="" width='80' height='80' style={{ borderRadius: "10px" }} />

                        </Col>
                        <Col lg={7} sm={4} xs={4} className='column-style'>
                            <h4 className='text-center mt-3'>{item?.order?.name}</h4>
                        </Col>
                        <Col lg={2} sm={4} xs={4} className='column-style mt-3'>
                            <button className='btn btn-danger' onClick={() => deleteHandle(item._id)}>Remove</button>
                        </Col>
                    </Row>

                )
            }
        </div>
    );
};

export default MyOrders;