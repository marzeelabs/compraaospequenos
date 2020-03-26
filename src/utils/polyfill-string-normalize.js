import unorm from 'unorm';

if (!String.prototype.normalize) {
  // eslint-disable-next-line no-extend-native
  String.prototype.normalize = function normalize(form) {
    const str = String(this);
    const method = (form || 'NFC').toLowerCase();
    return unorm[method](str);
  };
}
