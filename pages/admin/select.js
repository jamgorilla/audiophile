import Link from 'next/link';
import styles from '../../styles/Select.module.scss';
import AdminLayout from '../../components/layout/AdminLayout';

function Select() {
  return (
    <AdminLayout>
      <div className={styles.select_container}>
        <Link href={'/'}>
          <p className={styles.back_site_btn}>Back</p>
        </Link>
        <div className={styles.admin_container}>
          <h3>Admin section</h3>
          <p>Username</p>
          <input type="text"></input>
          <p>Password</p>
          <input type="text"></input>
          <button>Submit</button>
          <Link href={'/admin/admin'}>
            <span>Log in as Guest</span>
          </Link>
        </div>

        <div className={styles.customer_container}>
          <h3>Customer section</h3>
          <p>Username</p>
          <input type="text"></input>
          <p>Password</p>
          <input type="text"></input>
          <button>Submit</button>
          <Link href={'/admin/customer'}>
            <span>Log in as Guest</span>
          </Link>
        </div>
      </div>
    </AdminLayout>
  );
}

export default Select;
