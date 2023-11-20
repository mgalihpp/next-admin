import styles from "@/app/ui/dashboard/products/addproduct/addproduct.module.css";

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="title" name="title" required />
        <select name="cat" id="cat">
          <option value="general">Choose a Category</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input type="number" placeholder="price" id="price" />
        <input type="number" placeholder="stock" id="stock" />
        <input type="text" placeholder="color" id="color" />
        <input type="text" placeholder="size" id="size" />
        <textarea
          type="desc"
          placeholder="Description"
          id="desc"
          rows={8}
          cols={20}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProductPage;
