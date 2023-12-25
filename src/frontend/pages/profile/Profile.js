import { useState } from "react";
import ProfileDetails from "./ProfileDetails";
import "./Profile.css";
import Addresses from "./Addresses";
import Orders from "./Orders";

export default function Profile() {
  const [main, setMain] = useState("profile");

  return (
    <div className="profile-page">
      <h2>Your Account</h2>
      <div className="profile-page-main">
        <aside>
          <span
            className={main === "profile" ? "active-main" : ""}
            onClick={() => setMain("profile")}
          >
            Profile
          </span>
          <span
            className={main === "addresses" ? "active-main" : ""}
            onClick={() => setMain("addresses")}
          >
            Addresses
          </span>
          <span
            className={main === "orders" ? "active-main" : ""}
            onClick={() => setMain("orders")}
          >
            Orders
          </span>
        </aside>
        {main === "profile" && <ProfileDetails />}
        {main === "addresses" && <Addresses />}
        {main === "orders" && <Orders />}
      </div>
    </div>
  );
}
