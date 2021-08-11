import styles from "./SearchBar.module.css";

function SearchBar(props) {
  return (
    <>
      <label htmlFor="header-search">
        <span class={styles["visually-hidden"]}></span>
      </label>
      <input
        onInput={(e) => {
          props.setQuery(e.target.value);
        }}
        type="text"
        id="header-search"
        placeholder="Enter a phone number"
        name="enterphonenumber"
      />
    </>
  );
}

export default SearchBar;
