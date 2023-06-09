import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

const Payment = () => {
  const [payments, setPayments] = useState([]);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newPayment, setNewPayment] = useState({
    user_id: '',
    id: '',
    professionals_id: '',
    amount: '',
    payment_date: '',
    payment_status: '',
  });

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {
    try {
      const response = await axios.get('/api/payments');
      setPayments(response.data);
    } catch (error) {
      console.error(error);
      toast.error('An error occurred while retrieving payments');
    }
  };

  const handleDelete = async (paymentId) => {
    try {
      await axios.delete(`/api/payments/${paymentId}`);
      toast.success('Payment deleted successfully');
      fetchPayments();
    } catch (error) {
      console.error(error);
      toast.error('An error occurred while deleting the payment');
    }
  };

  const handleEdit = (paymentId) => {
    const selectedPayment = payments.find((payment) => payment.payment_id === paymentId);
    setSelectedPayment(selectedPayment);
  };

  const handleCreate = async () => {
    try {
      await axios.post('/api/payments', newPayment);
      toast.success('Payment created successfully');
      resetNewPayment();
      fetchPayments();
    } catch (error) {
      console.error(error);
      toast.error('An error occurred while creating the payment');
    }
  };

  const handleUpdate = async () => {
    if (selectedPayment) {
      try {
        await axios.put(`/api/payments/${selectedPayment.payment_id}`, selectedPayment);
        toast.success('Payment updated successfully');
        setSelectedPayment(null);
        fetchPayments();
      } catch (error) {
        console.error(error);
        toast.error('An error occurred while updating the payment');
      }
    }
  };

  const toggleCreateForm = () => {
    setShowCreateForm(!showCreateForm);
  };

  const resetNewPayment = () => {
    setNewPayment({
      user_id: '',
      id: '',
      professionals_id: '',
      amount: '',
      payment_date: '',
      payment_status: '',
    });
  };

  return (
    <div>
      <h1>Payment Dashboard</h1>

      {showCreateForm ? (
        <div>
          <h2>Create Payment</h2>
          <form>
            <label>
              User ID:
              <input
                type="text"
                value={newPayment.user_id}
                onChange={(e) => setNewPayment({ ...newPayment, user_id: e.target.value })}
              />
            </label>
            <label>
              Payment ID:
              <input
                type="text"
                value={newPayment.id}
                onChange={(e) => setNewPayment({ ...newPayment, id: e.target.value })}
              />
            </label>
            <label>
              Professional ID:
              <input
                type="text"
                value={newPayment.professionals_id}
                onChange={(e) =>
                  setNewPayment({ ...newPayment, professionals_id: e.target.value })
                }
              />
            </label>
            <label>
              Amount:
              <input
                type="text"
                value={newPayment.amount}
                onChange={(e) => setNewPayment({ ...newPayment, amount: e.target.value })}
              />
            </label>
            <label>
              Payment Date:
              <input
                type="text"
                value={newPayment.payment_date}
                onChange={(e) => setNewPayment({ ...newPayment, payment_date: e.target.value })}
              />
            </label>
            <label>
              Payment Status:
              <input
                type="text"
                value={newPayment.payment_status}
                onChange={(e) =>
                  setNewPayment({ ...newPayment, payment_status: e.target.value })
                }
              />
            </label>
            <button onClick={handleCreate}>Create</button>
          </form>
        </div>
      ) : (
        <div>
          <table>
            <thead>
              <tr>
                <th>Payment ID</th>
                <th>User ID</th>
                <th>ID</th>
                <th>Professional ID</th>
                <th>Amount</th>
                <th>Payment Date</th>
                <th>Payment Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment) => (
                <tr key={payment.payment_id}>
                  <td>{payment.payment_id}</td>
                  <td>{payment.user_id}</td>
                  <td>{payment.id}</td>
                  <td>{payment.professionals_id}</td>
                  <td>{payment.amount}</td>
                  <td>{payment.payment_date}</td>
                  <td>{payment.payment_status}</td>
                  <td>
                    <button onClick={() => handleDelete(payment.payment_id)}>Delete</button>
                    <button onClick={() => handleEdit(payment.payment_id)}>Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={toggleCreateForm}>Create Payment</button>
        </div>
      )}

      {selectedPayment && (
        <div>
          <h2>Edit Payment</h2>
          <form>
            <label>
              User ID:
              <input
                type="text"
                value={selectedPayment.user_id}
                onChange={(e) => setSelectedPayment({ ...selectedPayment, user_id: e.target.value })}
              />
            </label>
            <label>
              Payment ID:
              <input
                type="text"
                value={selectedPayment.id}
                onChange={(e) => setSelectedPayment({ ...selectedPayment, id: e.target.value })}
              />
            </label>
            <label>
              Professional ID:
              <input
                type="text"
                value={selectedPayment.professionals_id}
                onChange={(e) =>
                  setSelectedPayment({ ...selectedPayment, professionals_id: e.target.value })
                }
              />
            </label>
            <label>
              Amount:
              <input
                type="text"
                value={selectedPayment.amount}
                onChange={(e) => setSelectedPayment({ ...selectedPayment, amount: e.target.value })}
              />
            </label>
            <label>
              Payment Date:
              <input
                type="text"
                value={selectedPayment.payment_date}
                onChange={(e) =>
                  setSelectedPayment({ ...selectedPayment, payment_date: e.target.value })
                }
              />
            </label>
            <label>
              Payment Status:
              <input
                type="text"
                value={selectedPayment.payment_status}
                onChange={(e) =>
                  setSelectedPayment({ ...selectedPayment, payment_status: e.target.value })
                }
              />
            </label>
            <button onClick={handleUpdate}>Update</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Payment;
