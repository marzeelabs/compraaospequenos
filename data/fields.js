const lang = process.env.GOOGLE_DOC_LANG || 'en';

if (lang === 'pt') {
  module.exports = {
    name: {
      field: 'nome',
    },
    product: {
      field: 'produtoOuServiço',
    },
    offer: {
      field: 'oferta',
    },
    telephone: {
      field: 'outroContacto (telefone)',
    },
    email: {
      field: 'outroContacto (eMail)',
    },

  };
}
else if (lang === 'en') {
  module.exports = {};
}
else {
  throw new Error(`Environment variable GOOGLE_DOC_LANG has unrecognised language: ${lang}`);
}
