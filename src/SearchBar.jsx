import styles from "./SearchBar.module.css";

function SearchBar(props) {
  return (
    <>
      <label htmlFor="header-search">
        <h3>Enter a phone number</h3>
      </label>
      <input
        onInput={(e) => {
          props.setQuery(e.target.value);
        }}
        type="tel"
        id="header-search"
        placeholder="+5550703452"
        name="enterphonenumber"
      />
    </>
  );
}

export default SearchBar;
