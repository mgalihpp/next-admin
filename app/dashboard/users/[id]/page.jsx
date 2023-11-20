import styles from "@/app/ui/dashboard/users/singleuser/singleuser.module.css";
import Image from "next/image";

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="profile" fill />
        </div>
        Galih
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Galih"
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="muhamm@gmail.com"
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            id="password"
          />
          <label>Phone</label>
          <input type="phone" name="phone" id="phone" placeholder="+2234" />
          <label>Address</label>
          <textarea
            type="phone"
            name="address"
            id="address"
            placeholder="tane"
          />
          <label>Is Admin ?</label>
          <select name="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label>Is Active ?</label>
          <select name="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
