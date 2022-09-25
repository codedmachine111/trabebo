import "./Searchbox.css";
// import {FontAwesomeIcon} from '@fortawesome/free-solid-svg-icons'
export const Searchbox = (props) => {
  return (
    <>
      <div className="sb-container">
        <div className="sbox">
          {/* <i className="fas fa-magnifying-glass"></i> */}
          {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */}
          <input
            type="search"
            placeholder="Search your destination"
            onChange={props.handleOnChange}
          />
        </div>
      </div>
    </>
  );
};
