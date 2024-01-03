import { useAddressContext } from "../../contexts/AddressProvider";
import "./Modal.css";

export default function Modal() {
  const {
    showModal,
    modalTitle,
    addressInputs,
    setAddressInputs,
    cancelAddress,
    fillWithDummyAddress,
    saveAddress,
  } = useAddressContext();

  if (!showModal) {
    return null;
  }
  return (
    <div className="modal">
      <div className="model-content">
        <div className="modal-header">
          <h3>{modalTitle}</h3>
        </div>
        <div className="modal-body">
          <div>
            <input
              value={addressInputs.receiverName}
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
              value={addressInputs.mobile}
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
              value={addressInputs.pincode}
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
              value={addressInputs.state}
              type="text"
              placeholder="State"
              onChange={(e) =>
                setAddressInputs((addr) => ({ ...addr, state: e.target.value }))
              }
              required
            />
          </div>
          <input
            value={addressInputs.city}
            type="text"
            placeholder="City / District"
            onChange={(e) =>
              setAddressInputs((addr) => ({ ...addr, city: e.target.value }))
            }
            required
          />
          <input
            value={addressInputs.address}
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
          <span onClick={fillWithDummyAddress}>Fill Dummy Address</span>
          <span>|</span>
          <span onClick={saveAddress}>Save</span>
        </div>
      </div>
    </div>
  );
}
