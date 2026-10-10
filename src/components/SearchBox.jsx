import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../redux/filters/slice";
import { selectFilter } from "../redux/selectors";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <input
      type="text"
      placeholder="Find contacts by name"
      value={filter}
      onChange={(e) => dispatch(changeFilter(e.target.value))}
      style={{ width: "100%", boxSizing: "border-box" }}
    />
  );
}
