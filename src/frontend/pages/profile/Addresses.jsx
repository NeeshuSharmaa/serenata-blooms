import { useAddressContext } from "../../contexts/AddressProvider";
import AddressCard from "./AddressCard";

export default function Addresses() {
  const { addresses } = useAddressContext();

  const { setShowModal } = useAddressContext();

  return (
    <div className="addresses-main">
      <div className="addresses-header">
        <h2>YOUR ADDRESSES</h2>
        <button className="address-btn" onClick={() => setShowModal(true)}>
          + Add new address
        </button>
      </div>
      {!addresses.length && (
        <div className="no-address">
          {" "}
          <p>No Address Found :( Add a new address!!</p>
        </div>
      )}
      {!!addresses.length && (
        <div className="addresses-list">
          {addresses.map((addr) => (
            <AddressCard {...addr} />
          ))}
        </div>
      )}
    </div>
  );
}
