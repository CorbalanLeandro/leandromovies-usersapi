/* eslint-disable no-console */
const mongoose = require('mongoose');

/* Connecting to db */
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
  .then(() => console.log('Database connected'))
  .catch((err) => console.error(err));
