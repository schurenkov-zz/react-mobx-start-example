import React, { FC, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import useMain from './hooks/useMain';

import './style.scss';

const MainPage: FC = observer(() => {
  const { loading, lists } = useMain();
  const [query, setQuery] = useState('');

  return (
    <div className="wrap">
      {!loading ? (
        <>
          <input type="text" value={query} placeholder="Поиск" onChange={e => setQuery(e.target.value)} />
          {Array.from(lists).map(([key, value]) => (
            <>
              {key.toLowerCase().includes(query) ? (
                <div className="list">
                  <Link key={key} to={`/page/${key}`}>
                    {key}
                  </Link>{' '}
                  - {value.effects.positive.join(',')}
                </div>
              ) : (
                ''
              )}
            </>
          ))}
        </>
      ) : (
        <p>..Загрузка</p>
      )}
    </div>
  );
});

export default MainPage;
