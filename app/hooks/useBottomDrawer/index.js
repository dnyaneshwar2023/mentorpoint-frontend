import BottomDrawerContext from "./context";
import { useContext } from "react";

export default function useBottomDrawer() {
  const { drawer, setDrawer } = useContext(BottomDrawerContext);

  const setVisible = (visible) => {
    setDrawer(visible);
  };

  const result = { drawer, setVisible };
  return result;
}
