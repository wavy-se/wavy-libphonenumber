Package.describe({
  summary: 'libphonenumber packaged for meteor',
  version: "0.0.2",
  documentation: null
});

Package.onUse(function (api) {
  api.addFiles('lib/libphonenumber.js');

  api.export('PhoneNumbers', ['client', 'server']);
});