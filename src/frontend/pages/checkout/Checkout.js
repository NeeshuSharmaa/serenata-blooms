import { useAddressContext } from "../../contexts/AddressProvider";
import OrderSummary from "../cart/OrderSummary";
import AddressCard from "../profile/AddressCard";
import "./checkout.css";

export default function Checkout() {
  const { setShowModal, addresses, checkoutAddress, setCheckoutAddress } =
    useAddressContext();

  return (
    <div className="checkout-page">
      <div className="checkout-address">
        <div className="checkout-address-header">
          <h2>Addresses</h2>
          <button className="address-btn" onClick={() => setShowModal(true)}>
            + Add new address
          </button>
        </div>
        <hr />

        <div className="all-addresses">
          {addresses.map((addr) => (
            <div key={addr.id} className="select-address">
              <input
                type="radio"
                name="checkout-address"
                id={addr.id}
                checked={checkoutAddress === addr.id}
                onChange={() => setCheckoutAddress(addr.id)}
              />
              <label htmlFor={addr.id} className="address-label-checkout">
                <AddressCard {...addr} />
              </label>
            </div>
          ))}
        </div>
      </div>
      <OrderSummary />
    </div>
  );
}
