import Link from 'next/link';
import AdminLayout from '../../components/layout/AdminLayout';

function Customer() {
  return (
    <AdminLayout>
      <div>
        <Link href={'/admin/select'}>Back</Link>
        <h3>Customer Area</h3>
      </div>
    </AdminLayout>
  );
}

export default Customer;
