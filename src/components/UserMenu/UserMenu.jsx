import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Avatar, Button } from 'antd';
import { Wrap } from './UserMenu.styled';
import { LogoutOutlined } from '@ant-design/icons';

export const ContactList = () => {
  const { email } = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  return (
    <Wrap>
      <Avatar>{email.slice(0, 1).toUpperCase()}</Avatar>
      <p>{email}</p>
      <Button type="primary" onClick={() => dispatch(logOut())}>
        <LogoutOutlined />
        Log Out
      </Button>
    </Wrap>
  );
};
