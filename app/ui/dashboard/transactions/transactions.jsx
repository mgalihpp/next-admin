import Image from "next/image";
import styles from "./transactions.module.css";

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <TableInfo
            src={"/noavatar.png"}
            username="galih"
            status="pending"
            date="14.02.2024"
            amount="2000"
          />
          <TableInfo
            src={"/noavatar.png"}
            username="galih"
            status="done"
            date="14.02.2024"
            amount="2000"
          />
          <TableInfo
            src={"/noavatar.png"}
            username="galih"
            status="cancelled"
            date="14.02.2024"
            amount="2000"
          />
        </tbody>
      </table>
    </div>
  );
};

const TableInfo = ({ src, username, status, date, amount }) => {
  // Define a variable to hold the dynamic class name
  let statusClassName;

  // Check the value of the status prop and assign the appropriate style
  if (status === "pending") {
    statusClassName = styles.pending;
  } else if (status === "done") {
    statusClassName = styles.completed;
  } else {
    statusClassName = styles.cancelled;
  }

  return (
    <tr>
      <td>
        <div className={styles.user}>
          <Image
            src={src}
            alt="user icon"
            width={40}
            height={40}
            className={styles.userImage}
          />
          {username}
        </div>
      </td>
      <td>
        <span className={`${styles.status} ${statusClassName}`}>{status}</span>
      </td>
      <td>{date}</td>
      <td>${amount}</td>
    </tr>
  );
};

export default Transactions;
