import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from '../contexts/UserContext';
import { useUser } from '../hooks/apiHooks';
import UserData from '../components/UserData';

export const Profile = () => {
  const { setUser } = useUserContext();
  const { getUserByToken } = useUser();

  const getUser = async () => {
    try {
      const token = localStorage.getItem('token');
      const userData = await getUserByToken(token);
      setUser(userData.user);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold">Tämä on minun profiilisivu</h2>

      <p>
        <Link to="/">Navigoi takaisin etusivulle</Link>
      </p>
      <div>
        <UserData />
      </div>
    </div>
  );
};







