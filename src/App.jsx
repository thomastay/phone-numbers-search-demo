import styles from "./App.module.css";
import SearchBar from "./SearchBar";
import { createSignal, createEffect, For } from "solid-js";
import { genPhoneNums } from "./genRandPhoneNum";
import Select from "./Select";

const MAX_ENTRIES = 100;
const takeArr = (arr, max) => arr.slice(0, max);

// 10 mil, too big, 538ms. 16ms timing achieved with 250k numbers, which means only 128k phone numbers would be alright.
const DEFAULT_NUM_PHONE_NUMS = 250_000;
const phoneNumbersRangeChoices = [
  10_000, 100_000, 250_000, 1000_000, 10_000_000,
];
phoneNumbersRangeChoices.sort((a, b) => a - b);
const maxPhoneNumChoice = last(phoneNumbersRangeChoices);
const phoneNumbersTotal = genPhoneNums(maxPhoneNumChoice);

function App() {
  const [entries, setEntries] = createSignal([]);
  const [query, setQuery] = createSignal("");
  const [numPhoneNums, setNumPhoneNums] = createSignal(DEFAULT_NUM_PHONE_NUMS);
  const [phoneNumbers, setPhoneNumbers] = createSignal([]);

  // these need to be in separate createEffect if not it makes an infinite loop.
  createEffect(() => {
    setPhoneNumbers(phoneNumbersTotal.slice(0, numPhoneNums()));
  });

  createEffect(() => {
    setEntries(() => {
      let q = query();
      if (q) {
        q = q.trim();
        const entries = phoneNumbers().filter((entry) => entry.includes(q));
        return entries;
      }
      return [];
    });
  });
  // hack
  document.getElementById("loadingScreen").style = "display:none";

  return (
    <div class={styles.App}>
      <h1>Phone number search microbenchmark</h1>
      <SearchBar setQuery={setQuery} />
      <Select
        choices={phoneNumbersRangeChoices}
        defaultChoice={DEFAULT_NUM_PHONE_NUMS.toString()}
        onChange={setNumPhoneNums}
        name="phoneNumbersRangeChoices"
      />
      <div class={styles.container}>
        <p>
          Found {entries().length} matches. Listing {MAX_ENTRIES} or less:
        </p>
        <ol>
          <For each={takeArr(entries(), MAX_ENTRIES)}>
            {(val) => <li>{val}</li>}
          </For>
        </ol>
      </div>
    </div>
  );
}

function last(arr) {
  return arr[arr.length - 1];
}

export default App;
