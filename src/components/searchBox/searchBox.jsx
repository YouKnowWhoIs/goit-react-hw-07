import { useDispatch, useSelector } from "react-redux";
import { filterContact } from "../../redux/filtersSlice.js";

export const SearchBox = () => {
  const dispatch = useDispatch();
  const selectFilterName = useSelector((state) => state.filters.name);

  const handleInputChange = (event) => {
    dispatch(filterContact(event.target.value));
    // console.log(event);
  };

  return (
    <div className="search-box-conteiner">
      <p>Find contacts by name</p>
      <input
        onChange={handleInputChange}
        value={selectFilterName}
        type="text"
        placeholder="Search..."
        className="search-box-input"
      />
    </div>
  );
};
