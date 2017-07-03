import * as path from 'path';
import * as nconf from 'nconf';

nconf
.env()
.file({ file: path.resolve(__dirname, `${process.env.NODE_ENV}.json`) })
.defaults({
  PORT: 3000
});
