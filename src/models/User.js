const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
},
{
  timestamps: true,
  versionKey: false,
});

module.exports = model('Users', UserSchema);
