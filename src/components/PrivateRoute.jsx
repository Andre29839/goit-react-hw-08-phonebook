import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';

export const PrivateRoute = ({ component: Component, redirectTo: adress }) => {
  const { IsLoaggedIn, isRefreshing } = useSelector(state => state.auth);
  const shouldRedirect = IsLoaggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={adress} /> : Component;
};
