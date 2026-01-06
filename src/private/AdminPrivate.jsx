import React from 'react';
import useAdminChecker from '../Hook/useAdminChecker';

const AdminPrivate = ({children}) => {
 const [isAdmin, isAdminLoading] = useAdminChecker();

  if (isAdminLoading) {
    return <div>Checking admin...</div>;
  }

  if (!isAdmin) {
    return <Navigate to="/" />;
  }

  return children;
};

export default AdminPrivate;