import React, { FC, useEffect } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import useDetail from './hooks/useDetail';

import './style.scss';

interface RouterProps {
  params: {
    name: string;
  };
}

interface IProps {
  match: RouteComponentProps<RouterProps>;
}

const DetailPage: FC<IProps> = observer(({ match: { params: { name } } }) => {
  const { loading, detail, setClear } = useDetail(name);

  useEffect(() => {
    return () => {
      setClear();
    };
  }, []);

  return (
    <div className="wrap">
      {!loading ? (
        <>
          <Link to="/">Назад</Link>
          <h1>{detail.name}</h1>
          <h4>{detail.race}</h4>
          <div className="container">
            <p>{detail.desc}</p>
          </div>{' '}
        </>
      ) : (
        <p>..Загрузка</p>
      )}
    </div>
  );
});

export default DetailPage;
