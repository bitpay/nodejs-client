module.exports = {
  // Set this to the API key that you create by logging
  // into your Bitpay.com merchant account and generating
  // an API key.
  apiKey: '<your api key goes here>',

  // The following two setting configure the invoiceListener
  // with the SSL key and certificate necessary to create
  // an HTTPS server.  While the listener will work just
  // fine with the supplied key and certificate, you may 
  // want to generate your own using the openssl tool
  sslKey: './ssl-key.pem',
  sslCert: './ssl-cert.pem',

  // The following setting defines which port the invoiceListener
  // listens for incoming invoice notifications.  This port number
  // should match the port number unsed in the invoiceURL setting
  // when the invoice was created.
  listenerPort: 8000,
};
