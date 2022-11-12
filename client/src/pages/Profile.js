import React from 'react';
import { Navigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_ME } from '../utils/queries';

const Profile = () => {

  const { loading, data } = useQuery(QUERY_ME);

  const user = data?.me || data?.user || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <div>
      <div className="flex-row justify-center mb-3">
        <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
          Viewing your profile.
        </h2>

        <div className="col-12 col-md-10 mb-5">
          Something here
        </div>
      </div>
    </div>
  );
};

export default Profile;
