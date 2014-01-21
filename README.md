bitpayNodejs
============

### Nodejs library for integrating with the Bitpay.com API

This client library is provided to demonstrate how to interact with the BitPay.com [JSON API](https://bitpay.com/downloads/bitpayApi.pdf).  You can use this client library as is on your server, you can customize it, or you can use it as a guide for developing a client library in another language.  The sample client library is written in JavaScript and is designed to run using nodejs.  Nodejs can be downloaded form [http://nodejs.org](http://nodejs.org).  The examples have been tested on version 0.8.9, but should work on later versions as well.  There are 3 utilities: createInvoice, getInvoice, invoiceListener.  These files are executable and invoke the node runtime using typical Unix shebang notation.  They can also be started by passing them as the first argument to the “node” runtime.  The files themselves are JavaScript source code.

To use the utilities, modify the config.js file and copy and paste an API key from your merchant account into the apiKey setting.  This will associate your API calls with your merchant account.  Also, there is a sample SSL key and certificate file that is used by the invoiceListener to setup the HTTPS server that listens for incoming invoice notifications.  While these example credentials will work fine, you may want to create your own unique SSL key and certificate.

To create an invoice, run the createInvoice utility and pass in an invoice description on stdin.  A sample invoice description is provided in the file sampleInvoice.json.  To create an invoice using this sample, run the following command:

    $ ./createInvoice < sampleInvoice.json

The newly created invoice will be output on a single line in JSON format.

To get an invoice, run the getInvoice utility and pass the invoice id as the sole argument as follows:

    $ ./getInvoice 5_TU2V-M0glicVcZuQkkkq9aiA7qP0MjxRkhdc1MRSY=

Just as before, the invoice will be output on a single line in JSON format.

To receive notifications of invoice status updates, use the invoiceListener utility.  It takes a single parameter on the command line to specify the port number (or it can be specified in config.js) and listens for incoming notifications from BitPay.com.  If you create an invoice with a notificationURL to your server and port, notifications of status changes on that invoice will be delivered to this utility.  When a notification is received, the utility will print the JSON encoded invoice on stdout (one line per notification).
