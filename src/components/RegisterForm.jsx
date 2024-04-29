import {useUser} from '../hooks/apiHooks';
import useForm from '../hooks/formHooks';

// RegisterForm.jsx
const RegisterForm = () => {
  const {postUser} = useUser();
  const initValues = {
    username: '',
    password: '',
  };

  const doRegister = async () => {
    // console.log(inputs);
    try {
      const registerResult = await postUser(inputs);
      // console.log('registerResult', registerResult);
      if (registerResult.user) {
        alert(registerResult.message);
      } else {
        alert('Register failed');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(
    doRegister,
    initValues,
  );

  console.log(inputs);
  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="registeruser">Username</label>
          <input
            name="username"
            type="text"
            id="registeruser"
            onChange={handleInputChange}
            autoComplete="username"
          />
        </div>
        <div>
          <label htmlFor="registerpassword">Password</label>
          <input
            name="password"
            type="password"
            id="registerpassword"
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            id="email"
            onChange={handleInputChange}
            autoComplete="email"
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default RegisterForm;
