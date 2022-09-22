const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config/.env' });
const app = require('./app');

const DB = process.env.DATABASE

// connect to db
mongoose.connect(DB, {
    useNewUrlParser: true
  }).then(() => {
    const port = process.env.PORT || 4000;
    app.listen(port, () => {
      console.log(
        `DB connection successful! App running on http://localhost:${port}...`
      );
    })
  });

