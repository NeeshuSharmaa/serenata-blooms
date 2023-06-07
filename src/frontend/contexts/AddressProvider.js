import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
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
  const [modalTitle, setModalTitle] = useState("Add New Address");

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
    setAddressInputs({ ...defaultAddress, id: null });
  }
  function saveAddress() {
    if (
      addressInputs.receiverName &&
      addressInputs.mobile &&
      addressInputs.pincode &&
      addressInputs.state &&
      addressInputs.address
    ) {
      console.log("heelo", addressInputs);
      if (addressInputs.id) {
        setAddresses((prevAddr) =>
          prevAddr.map((addr) =>
            addr.id === addressInputs.id ? addressInputs : addr
          )
        );

        setShowModal(false);
        toast.success("Address Updated successfully!", {
          className: "toast-message",
        });
        return;
      }

      const addrToAdd = {
        ...addressInputs,
        id: uuid(),
      };

      setAddresses((prevAddr) => [...prevAddr, addrToAdd]);
      setShowModal(false);
      toast.success("New Address Added!", {
        className: "toast-message",
      });
    } else {
      console.error("Fill all the required fields");
      toast.warning("Fill all the required fields!", {
        className: "toast-message",
      });
    }
  }
  function removeAddress(id) {
    setAddresses((addr) => addr.filter(({ id: ID }) => ID !== id));
    toast.success("Addressed Removed!", {
      className: "toast-message",
    });
  }

  function editAddress(id) {
    const addrToEdit = addresses.find((addr) => addr.id === id);

    setAddressInputs(addrToEdit);
    setModalTitle("Edit Address");
    setShowModal(true);
  }

  const values = {
    defaultAddress,
    addressInputs,
    addresses,
    showModal,
    modalTitle,
    setShowModal,
    setAddressInputs,
    cancelAddress,
    fillWithDummyAddress,
    saveAddress,
    removeAddress,
    editAddress,
  };
  console.log("address inputs", addressInputs);
  return (
    <AddressContext.Provider value={values}>{children}</AddressContext.Provider>
  );
}
