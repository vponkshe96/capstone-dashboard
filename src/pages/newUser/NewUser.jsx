import "./newUser.css";
import { Add } from "@mui/icons-material";
import { useState } from "react";

const NewUser = () => {
  //REFACTOR by having only one on change function
  //ADD required fields

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [subscriptionType, setSubscriptionType] = useState("");
  const [paymentAmount, setPaymentAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    //shorthand object notation
    const user = { fullName, email, date, subscriptionType, paymentAmount };
    //POST REQUEST goes here
    console.log(user);
    //RESETTING FORM after submission
    setFullName("");
    setEmail("");
    setDate("");
    setSubscriptionType("");
    setPaymentAmount("");
  };

  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm" onSubmit={handleSubmit}>
        <div className="newUserItem">
          <label>Full Name</label>
          {/* Need value prop for resetting the input fields */}
          <input
            type="text"
            placeholder="John Smith"
            value={fullName}
            x
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input
            type="text"
            placeholder="johnsmith@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="newUserItem">
          <label for="subscriptionType">Subscription Type</label>
          <select
            className="newUserSelect"
            id="subscriptionType"
            value={subscriptionType}
            onChange={(e) => setSubscriptionType(e.target.value)}
          >
            <option>1-Time</option>
            <option>Lifetime</option>
          </select>
        </div>
        <div className="newUserItem">
          <label for="paymentAmount">Payment Amount (in US$)</label>
          <select
            className="newUserSelect"
            id="payment"
            value={paymentAmount}
            onChange={(e) => setPaymentAmount(e.target.value)}
          >
            <option>1,000</option>
            <option>10,000</option>
          </select>
        </div>
        <button className="newUserButton">
          <Add className="newUserIcon" />
          Create
        </button>
      </form>
    </div>
  );
};
export default NewUser;
