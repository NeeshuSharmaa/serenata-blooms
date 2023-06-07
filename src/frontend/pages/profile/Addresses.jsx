import { useAddressContext } from "../../contexts/AddressProvider";
import Modal from "../../components/addressModal/Modal";

export default function Addresses() {
  const { addresses, removeAddress, editAddress } = useAddressContext();

  const { setShowModal } = useAddressContext();

  return (
    <div className="addresses-main">
      <div className="addresses-header">
        <h2>YOUR ADDRESSES</h2>

        <button onClick={() => setShowModal(true)}>+ Add new address</button>
      </div>
      {!addresses.length && (
        <div className="no-address">
          {" "}
          <p>No Address Found :( Add a new address!!</p>
        </div>
      )}
      {!!addresses.length && (
        <div className="addresses-list">
          {addresses.map(
            ({ id, receiverName, mobile, pincode, state, city, address }) => (
              <div key={id} className="address-container">
                <div className="address-details">
                  <h3>{receiverName}</h3>
                  <div className="address">
                    <p>{address}</p>
                    <p>
                      {city} - {pincode}
                    </p>
                    <p>{state}</p>
                  </div>
                  <p>Mobile: {mobile}</p>
                </div>
                <div className="btns-in-row">
                  <span onClick={() => editAddress(id)}>Edit</span>
                  <span>|</span>
                  <span onClick={() => removeAddress(id)}>Remove</span>
                </div>
              </div>
            )
          )}
        </div>
      )}
      <Modal />
    </div>
  );
}
