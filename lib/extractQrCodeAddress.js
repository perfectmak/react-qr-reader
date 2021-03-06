'use strict';

module.exports = function extractQrCodeAddress(data) {
  var extractedAddress = data.replace('ethereum:', '').slice(0, 42);
  if (!/^0x[a-fA-F0-9]{40}$/g.test(extractedAddress)) {
    return null;
  }

  return extractedAddress;
};