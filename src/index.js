if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  require('dotenv').config();
}

const morgan = require('morgan');
const express = require('express');
const cors = require('cors');

/* Initializations */
const app = express();
require('./database');

/* Settings */
app.set('port', process.env.PORT || 3030);

/* Middlewares */
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

/* Routes */
app.use('/api/users', require('./routes/users'));

/* Start Server */
// eslint-disable-next-line no-console
app.listen(app.get('port'), () => console.log(`Server running on port ${app.get('port')}`));
