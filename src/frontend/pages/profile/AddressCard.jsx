import { useAddressContext } from "../../contexts/AddressProvider";

export default function AddressCard({
  id,
  receiverName,
  mobile,
  pincode,
  state,
  city,
  address,
}) {
  const { editAddress, removeAddress } = useAddressContext();

  return (
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
  );
}
