import { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";

const AddressContext = createContext();

export const useAddressContext = () => useContext(AddressContext);

export default function AddressProvider({ children }) {
  const defaultAddress = {
    id: uuid(),
    receiverName: "Neeya Sharma",
    mobile: 7683973849,
    pincode: 171001,
    state: "Himachal Pradesh",
    city: "Shimla",
    address: "123 Pine Avenue 3rd Street",
  };

  const [addresses, setAddresses] = useState([defaultAddress]);

  const [addressInputs, setAddressInputs] = useState({
    receiverName: "",
    mobile: "",
    pincode: "",
    state: "",
    city: "",
    address: "",
  });

  const [showModal, setShowModal] = useState(false);

  function cancelAddress() {
    setAddressInputs({
      receiverName: "",
      mobile: "",
      pincode: "",
      state: "",
      city: "",
      address: "",
    });
    setShowModal(false);
  }
  function fillWithDummyAddress() {
    setAddressInputs(defaultAddress);
  }
  function saveAddress() {
    if (
      addressInputs.receiverName &&
      addressInputs.mobile &&
      addressInputs.pincode &&
      addressInputs.state &&
      addressInputs.address
    ) {
      const addrToAdd = {
        id: uuid(),
        ...addressInputs,
      };
      setAddresses((prevAddr) => [...prevAddr, addrToAdd]);
      setShowModal(false);
    } else {
      console.error("Fill all the required fields");
    }
  }
  function removeAddress(id) {
    setAddresses((addr) => addr.filter(({ id: ID }) => ID !== id));
  }

  const values = {
    defaultAddress,
    addresses,
    showModal,
    setShowModal,
    setAddressInputs,
    cancelAddress,
    fillWithDummyAddress,
    saveAddress,
    removeAddress,
  };
  console.log("address inputs", addressInputs);
  return (
    <AddressContext.Provider value={values}>{children}</AddressContext.Provider>
  );
}
