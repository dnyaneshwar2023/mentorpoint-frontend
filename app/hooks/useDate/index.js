import DateContext from "./context";
import { useContext } from "react";

export default function useDate() {
  const { date, setDate } = useContext(DateContext);

  const changeDate = (d) => {
    setDate(d);
  };

  const result = { date, changeDate };
  return result;
}
