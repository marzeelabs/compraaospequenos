const lang = process.env.GOOGLE_DOC_LANG || 'en';

if (lang === 'pt') {
  // This is kept for reference as the orignal #cap google doc has Portuguese headers
  module.exports = {
    location: {
      all: 'Todo o País',
      label: 'Localização',
      field: 'localização (distrito)',
      size: 100,
    },
    businessType: {
      label: 'Área de Negócio',
      field: 'tipoDeNegócio',
      size: 100,
    },
    offerType: {
      label: 'Tipo de Oferta',
      field: 'tipoDeOferta',
      size: 100,
    },
  };
}
else if (lang === 'en') {
  module.exports = {
    location: {
      all: 'Everywhere',
      label: 'Location',
      field: 'location',
      size: 100,
    },
    businessType: {
      label: 'Type',
      field: 'businessType',
      size: 100,
    },
    offerType: {
      label: 'Offer',
      field: 'offerType',
      size: 100,
    },
  };
}
else {
  throw new Error(`Environment variable GOOGLE_DOC_LANG has unrecognised language: ${lang}`);
}
