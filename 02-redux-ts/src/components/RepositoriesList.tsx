import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useActions } from '../hooks/useActions';
import { actionCreators } from '../state';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();
  const { searchRepositories } = useActions();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // TODO：コンパイルエラーで動かない
    // dispatch(actionCreators.searchRepositories(term));
    searchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(event) => setTerm(event.target.value)} />
        <button>Search</button>
      </form>
    </div>
  );
};

export default RepositoriesList;
