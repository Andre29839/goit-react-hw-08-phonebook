import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoaggedIn } = useSelector(state => state.auth);
  return isLoaggedIn ? <Navigate to={redirectTo} /> : Component;
};
