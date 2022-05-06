import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { actionCreators } from '../state';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // TODO：コンパイルエラーで動かない
    // dispatch(actionCreators.searchRepositories(term));
    searchRepositories(term);
  };

  let contents;
  if (error) {
    contents = error;
  } else if (loading) {
    contents = 'Loading...';
  } else if (data) {
    contents = data.map((name) => <div key={name}>{name}</div>);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(event) => setTerm(event.target.value)} />
        <button>Search</button>
      </form>
      {contents}
    </div>
  );
};

export default RepositoriesList;
