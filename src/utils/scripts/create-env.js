const fs = require('fs');
fs.writeFileSync(
  './.env',
  `API_URL=${process.env.API_URL_PROD}\n
  API_VERSION=${process.env.API_VERSION}\n
  API_KEY=${process.env.API_KEY}\n`
);
