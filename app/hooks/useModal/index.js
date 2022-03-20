import ModalContext from "./context";
import { useContext } from "react";

export default function useModal() {
  const { modal, setModal } = useContext(ModalContext);

  const setVisible = (visible) => {
    setModal(visible);
  };

  const result = { modal, setVisible };
  return result;
}
