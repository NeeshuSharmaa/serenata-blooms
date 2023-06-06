import { useAddressContext } from "../../contexts/AddressProvider";
import "./Modal.css";

export default function Modal({ showModal }) {
  const { setAddressInputs, cancelAddress, fillWithDummyAddress, saveAddress } =
    useAddressContext();

  if (!showModal) {
    return null;
  }
  return (
    <div className="modal">
      <div className="model-content">
        <div className="modal-header">
          <h3>Add New Address</h3>
        </div>
        <div className="modal-body">
          <div>
            <input
              value={setAddressInputs.receiverName}
              type="text"
              placeholder="Name"
              onChange={(e) =>
                setAddressInputs((addr) => ({
                  ...addr,
                  receiverName: e.target.value,
                }))
              }
              required
            />
            <input
              value={setAddressInputs.mobile}
              type="number"
              placeholder="Mobile Number"
              onChange={(e) =>
                setAddressInputs((addr) => ({
                  ...addr,
                  mobile: e.target.value,
                }))
              }
              required
            />
          </div>

          <div>
            <input
              value={setAddressInputs.pincode}
              type="number"
              placeholder="Pincode"
              onChange={(e) =>
                setAddressInputs((addr) => ({
                  ...addr,
                  pincode: e.target.value,
                }))
              }
              required
            />
            <input
              value={setAddressInputs.state}
              type="text"
              placeholder="State"
              onChange={(e) =>
                setAddressInputs((addr) => ({ ...addr, state: e.target.value }))
              }
              required
            />
          </div>
          <input
            value={setAddressInputs.city}
            type="text"
            placeholder="City / District"
            onChange={(e) =>
              setAddressInputs((addr) => ({ ...addr, city: e.target.value }))
            }
            required
          />
          <input
            value={setAddressInputs.address}
            type="text"
            placeholder="House No / Building / Street / Area"
            onChange={(e) =>
              setAddressInputs((addr) => ({ ...addr, address: e.target.value }))
            }
            required
          />
        </div>
        <div className="modal-footer">
          <span onClick={cancelAddress}>Cancel</span>
          <span>|</span>
          <span onClick={fillWithDummyAddress}>Fill with Dummy Address</span>
          <span>|</span>
          <span onClick={saveAddress}>Save</span>
        </div>
      </div>
    </div>
  );
}
