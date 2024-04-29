import {Link, Outlet} from 'react-router-dom';
import {useUserContext} from '../hooks/contextHooks';
import {CloudUpload, Home, LogIn, Person} from 'react-ionicons';

const Layout = () => {
  const {user, handleAutoLogin} = useUserContext();

  if (!user) {
    handleAutoLogin();
  }

  return (
    <div>
      <header>
        <nav>
          <Link to="/">
            <Home />
          </Link>
          <Link to="/profile">
            <Person />
          </Link>
          <Link to="/upload">
            <CloudUpload />
          </Link>
          <Link to="/login">
            <LogIn />
          </Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="m-12 text-xl">Copyright 2024</footer>
    </div>
  );
};

export default Layout;
