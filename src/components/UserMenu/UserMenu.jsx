import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Avatar, Button } from 'antd';
import { Wrap } from './UserMenu.styled';
import { LogoutOutlined } from '@ant-design/icons';
import { selectIsLogOut } from 'redux/auth/selectors';
import { Link } from 'react-router-dom';

export const UserMenu = () => {
  const { email } = useSelector(selectIsLogOut);
  const dispatch = useDispatch();

  return (
    <Wrap>
      <Avatar>{email.slice(0, 1).toUpperCase()}</Avatar>
      <p>{email}</p>
      <Link to="/">
        <Button type="primary" onClick={() => dispatch(logOut())}>
          <LogoutOutlined />
          Log Out
        </Button>
      </Link>
    </Wrap>
  );
};
