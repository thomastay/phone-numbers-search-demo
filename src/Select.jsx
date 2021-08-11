import styles from "./Select.module.css";

function Select(props) {
  return (
    <>
      <h2>Size of dictionary</h2>
      <div class={styles["select"]}>
        {props.choices.map((choice) => (
          <div class={styles["radio-group"]}>
            <input
              type="radio"
              name={props.name}
              value={choice}
              class={styles["radio-btn"]}
              checked={choice == props.defaultChoice}
              onChange={(e) => props.onChange(Number(e.target.value))}
            />
            <label>{choice.toLocaleString()}</label>
          </div>
        ))}
      </div>
    </>
  );
}

export default Select;
