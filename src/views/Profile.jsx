import {useEffect, useState} from 'react';
import {useUser} from '../hooks/apiHooks';

const Profile = () => {
  const [user, setUser] = useState({});
  const {getUserByToken} = useUser();

  useEffect(() => {
    const getUser = async () => {
      const token = localStorage.getItem('token');
      const userResponse = await getUserByToken(token);
      setUser(userResponse.user);
    };
    getUser();
  }, []);

  return (
    <>
      <h2>Profile</h2>
      <div>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
      </div>
    </>
  );
};

export default Profile;
