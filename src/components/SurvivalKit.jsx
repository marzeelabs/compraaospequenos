import React from 'react';

import Typography from '@material-ui/core/Typography';

import Section from 'Layouts/Section';

import useStyles from 'Styles/components/survivalKit';

const SurvivalKit = () => {
  const classes = useStyles();

  return (
    <Section extraClasses={ classes }>
      { /* eslint-disable-next-line jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid */ }
      <a name="survivalkit" id="survivalkit" className={ classes.scroll } />

      <Typography variant="h4" marked="center" className={ classes.title }>
        Reinventa o teu negócio
      </Typography>

      <div className={ classes.descriptionWrapper }>
        <Typography variant="body1" className={ classes.description }>
          Vivemos tempos de enormes desafios, e de uma necessidade critica de reinventarmos
          o nosso negócio – ou fechar as portas.
        </Typography>
        <Typography variant="body1" className={ classes.description }>
          Para ajudar nesta adaptação, em parceria com as Mulheres à Obra, e com ajuda
          de especialistas, trazemos-te um kit de sobrevivência para pequenos negócios.
        </Typography>
      </div>

      <a href="http://eepurl.com/gZOf9n" className={ classes.button } rel="noopener noreferrer" target="_blank">
        Kit de Sobrevivência
      </a>
    </Section>
  );
};

export default SurvivalKit;
