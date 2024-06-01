import css from "./SearchBar.module.css";
import { FiSearch } from "react-icons/fi";
import toast, { Toaster } from 'react-hot-toast';

export default function SearchBar({onSearch}) {
  const onSubmitHeader = (evt)=> {
evt.preventDefault()
const form = evt.target;
const request = form.elements.input.value;
if (request.trim() === "") {
  toast.error("Please, enter your request!");
  return;
}
onSearch(request.trim())
form.reset()
  }

  return <header className={css.header }>
    <form onSubmit={onSubmitHeader} className={css.form }>
      <div className={css.wrapper}>
      <input
        type="text"
        name="input"
        placeholder="Search images and photos"
      className={css.input}/>
      <button type="submit" className={css.button}>
        <FiSearch />
        </button>
      </div>
      <Toaster />
    </form>
  </header>;
}
