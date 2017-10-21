const port = process.env.MONGO_PORT || 27017;
const uri = process.env.MONGO_HOST || `mongodb://localhost:${port}/xp`;

const options = {};

export default {
  options,
  connection: uri,
};
