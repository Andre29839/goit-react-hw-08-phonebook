import {
  Title,
  HomeUserGroup,
  Wrap,
  UnderTitle,
  HomeLink,
  Section,
  HomeEdit,
  HomePhoneIcon,
  HomeContactList,
} from './Home.styled';

import { useSelector } from 'react-redux';

export default function Home() {
  const { isLoggedIn } = useSelector(state => state.auth);

  return (
    <Section>
      <Title>Welcom to you PhoneBook</Title>
      <Wrap>
        <HomeEdit /> <HomePhoneIcon />
        <HomeUserGroup />
        <HomeContactList />
      </Wrap>

      {!isLoggedIn ? (
        <UnderTitle>
          Please <HomeLink to="/register">Register</HomeLink>
          or <HomeLink to="/login">Log in</HomeLink>
          to be able to use PhoneBook
        </UnderTitle>
      ) : (
        <UnderTitle>
          Go to the tab
          <HomeLink to="/contacts">Contacts</HomeLink>
          and manage your contacts
        </UnderTitle>
      )}
    </Section>
  );
}
