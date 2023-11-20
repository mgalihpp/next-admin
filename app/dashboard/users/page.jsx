import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Image from "next/image";
import Link from "next/link";

const UsersPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <button className={styles.btn}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created at</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.users}>
                <Image
                  src="/noavatar.png"
                  alt="profile"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
              </div>
            </td>
            <td>muhamm@gmail.com</td>
            <td>22.02.2022</td>
            <td>Admin</td>
            <td>Active</td>
            <td>
              <Link href="/">
                <button className={`${styles.button} ${styles.view} `}>
                  View
                </button>
              </Link>
              <button className={`${styles.button} ${styles.delete} `}>
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;
