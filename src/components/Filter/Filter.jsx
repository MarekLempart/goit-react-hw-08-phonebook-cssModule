// Filter.jsx

import { SearchOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { filtration } from '../../Redux/Contacts/filterSlice';
import { FilterInput, FilterP, WrapperFiler } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  return (
    <WrapperFiler>
      <FilterP>Find contacts by name</FilterP>
      <FilterInput
        prefix={<SearchOutlined />}
        type="text"
        value={filter}
        onChange={e => dispatch(filtration(e.target.value))}
      />
    </WrapperFiler>
  );
};
