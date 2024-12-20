import React, {useState } from 'react'


export default function Checkout() {
  const [buyer, setBuyer] = useState({ name: "", email: "" });
  const [quantity, setQuantity] = useState(1);

  function handleBuyerChange (indicator, value) {
    if (indicator === "name") {
      setBuyer({...buyer, name: value});
    } else if (indicator === "email") {
      setBuyer({...buyer, email: value });
    }
  }


  
  const handleCheckout = async () => {
    if (!buyer.name ||!buyer.email) {
        alert("Please enter your name and email address.");
        return;
    }
    try {
        const response = await fetch('http://localhost:3001/checkout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              quantity,
              buyer
            }),
            origin: window.location.origin
        });

        if (!response.ok) {
            throw new Error(`Failed to create checkout session: ${response.status}`);
        }

        const { url } = await response.json();
        window.location.href = url; // Redirect to Stripe Checkout
    } catch (error) {
        console.error('Error during checkout:', error.message);
        alert('Unable to proceed to payment. Please try again.');
    }
};

  return (
    <div
      style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        backgroundColor: "#000",
        color: "#fff",
        minHeight: "100vh",
        paddingTop: '10rem',
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: 'auto'
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "2rem" }}>Checkout</h1>

      {/* Buyer Information */}
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          backgroundColor: "#222",
          padding: "1rem",
          marginBottom: "2rem",
          borderRadius: "8px",
        }}
      >
        <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Buyer Information</h2>
        <input
          type="text"
          placeholder="Name"
          value={buyer.name}
          onChange={(e) => handleBuyerChange("name", e.target.value)}
          style={{
            padding: "0.5rem",
            fontSize: "1rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
            width: "100%",
            marginBottom: "1rem",
          }}
        />
        <input
          type="email"
          placeholder="Email"
          value={buyer.email}
          onChange={(e) => handleBuyerChange("email", e.target.value)}
          style={{
            padding: "0.5rem",
            fontSize: "1rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
            width: "100%",
          }}
        />
      </div>

      {/* Quantity Selector */}
      <div style={{ marginBottom: "2rem" }}>
        <label
          htmlFor="quantity"
          style={{ fontSize: "1.2rem", marginRight: "1rem" }}
        >
          Additional People:
        </label>
        <input
          id="quantity"
          type="number"
          value={quantity}
          min={1}
          onChange={(e) => setQuantity(Number(e.target.value))}
          style={{
            padding: "0.5rem",
            fontSize: "1rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      

      {/* Submit Button */}
      <button
        onClick={handleCheckout}
        style={{
          padding: "0.8rem 1.5rem",
          fontSize: "1rem",
          borderRadius: "4px",
          backgroundColor: "#4CAF50",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          marginTop: "1rem",
        }}
      >
        Proceed to Payment
      </button>
    </div>
  );
}

