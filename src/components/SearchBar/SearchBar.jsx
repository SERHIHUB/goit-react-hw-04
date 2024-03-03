import { Formik, Form, Field } from "formik";
import { IoSearchSharp } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const handleSubmit = (values, actions) => {
    const newQuery = values.search;
    if (newQuery === "") {
      toast.error("Enter text to search for images.", { duration: 2000 });
      return;
    }

    onSearch(newQuery);
    actions.resetForm();
  };

  return (
    <header className={css.header}>
      <Formik initialValues={{ search: "" }} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <Field
            className={css.input}
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />

          <button className={css.btn} type="submit">
            <IoSearchSharp size={20} />
          </button>
        </Form>
      </Formik>
      <Toaster />
    </header>
  );
};

export default SearchBar;
