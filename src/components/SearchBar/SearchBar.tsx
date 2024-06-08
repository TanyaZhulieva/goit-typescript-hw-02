import css from "./SearchBar.module.css";
import { Form, Field, Formik } from "formik";
import { FC } from "react";
import { FiSearch } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";

interface SearchBarProps {
  onSearch: (newQuery: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const notify = () => {
    toast.error("Please enter text to search for images.");
  };

  return (
    <Formik
      initialValues={{ query: "" }}
      onSubmit={(values, actions) => {
        if (!values.query.trim()) {
          notify();
          return;
        }
        onSearch(values.query);
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <div className={css.wrapper}>
          <Field
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="query"
            className={css.input}
          />
          <button type="submit" className={css.button}>
            <FiSearch />{" "}
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default SearchBar;
