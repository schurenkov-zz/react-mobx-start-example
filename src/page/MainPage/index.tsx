import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import useMain from './hooks/useMain';
import './style.scss';

const MainPage: FC = observer(() => {
  const { loading, lists } = useMain();
  return (
    <div>
      {!loading ?
          Array.from(lists).map(([key, value]) =>
              <div className="list">
                <Link key={key} to={`/page/${key}`}>{key}</Link> - {value.effects.positive.join(',')}
              </div>
          ) :
            <p>Загрузка</p>}
    </div>
  );
});

export default MainPage;
