import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/contacts/filterSlice';
import { WrapperFiler, FilterInput, FilterP } from './Filter.styled';
import { SearchOutlined } from '@ant-design/icons';

export const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(state => state.filter);

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <WrapperFiler>
      <FilterP>Find contacts by name</FilterP>

      <FilterInput
        prefix={<SearchOutlined />}
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </WrapperFiler>
  );
};
