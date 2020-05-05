import React from 'react';

import { Link } from 'gatsby';

import Graphic404 from 'Assets/page404.svg';

import useStyles from 'Styles/components/404';

const NotFoundPage = () => {
  const classes = useStyles();

  return (
    <div className={ classes.wrapper }>
      <h1 className={ classes.title }>Ora... Estás perdido</h1>
      <Graphic404 className={ classes.img } alt="404 not found" />
      <p className={ classes.message }>Podes:</p>

      <ul className={ classes.list }>
        <li className={ classes.item }>
          <Link to="/" className={ classes.link }>
            Voltar ao Início
          </Link>
        </li>
        <li className={ classes.item }>
          <Link to="/shops" className={ classes.link }>
            Ver as Lojas
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NotFoundPage;
