import React, { useState } from 'react';

const OrderForm = () => {
  const [orders, setOrders] = useState([]);
  const [product, setProduct] = useState('');
  const [eanCode, setEanCode] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0); // Add state for price
  // Add states for other fields (name, street, town, country, email, phoneNumber) if needed
const [orderNum,setOrdernum]=useState(" ");

  const handleProductChange = (event) => {
    setProduct(event.target.value);
  };

  const handleEanCodeChange = (event) => {
    setEanCode(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleButtonClick = () => {
    // Add the entered values to the orders array
    const newOrder = {
      product,
      eanCode,
      quantity,
      price, // Include the price in the new order object
      // Add other fields as needed
    };

    setOrders([...orders, newOrder]);

    // Clear the input fields
    setProduct('');
    setEanCode('');
    setQuantity(0);
    setPrice(0);
    // Clear other fields as needed
  };

  // Calculate total price
  const total = orders.reduce((acc, order) => acc + parseFloat(order.price), 0);

  return (
    <div className='conatiner'>
     

      {/* Display the header only once */}
      <table>
        <thead>
          <tr>
            <th>PRODUCT</th>
            <th>EAN CODE</th>
            <th>QUANTITY</th>
            <th>PRICE</th>
          </tr>
        </thead>
        <tbody>
          {/* Display the input fields for the latest order */}
          <tr>
            <td><input type="text" value={product} onChange={handleProductChange} /></td>
            <td><input type="text" value={eanCode} onChange={handleEanCodeChange} /></td>
            <td><input type="number" value={quantity} onChange={handleQuantityChange} /></td>
            <td><input type="number" value={price} onChange={handlePriceChange} /></td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleButtonClick}>Add</button>
{/*  */}

  {/*  */}

     <div className='maincds'>
     <h2>Order Details</h2>
      <p>Order No: XXXXXXX of DD/MM/YYYY</p>
     <table>
        <thead>
          <tr>
            <th className='tes'>PRODUCT</th>
            <th className='tes'>EAN CODE</th>
            <th className='tes'>QUANTITY</th>
            <th className='teslast'>PRICE</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.product}</td>
              <td>{order.eanCode}</td>
              <td>{order.quantity}</td>
              <td>{order.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>TOTAL: {total.toFixed(2)}</p>
      <br/>
<br/><br/>
<br/>
<h2>Delivery Address:</h2>
<h2>Name And Surname</h2>
<h2>STREET</h2>
<h2>Twon</h2>
<h2>Country</h2> 
<br/>
<br/>

<h2>Email</h2>
<h2>Phone Number</h2>

     </div>
    </div>
  );
};

export default OrderForm;
