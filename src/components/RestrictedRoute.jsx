import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Navigate } from 'react-router-dom';
import { selectIsLoaggedIn } from 'redux/auth/selectors';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoaggedIn } = useSelector(selectIsLoaggedIn);
  return isLoaggedIn ? <Navigate to={redirectTo} /> : Component;
};
