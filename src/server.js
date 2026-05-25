const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const sequelize = require('./config/db')
const app = require("./app");

const port = process.env.PORT || 3000;

async function startServer() {
  try {
    await sequelize.authenticate();
    
    console.log('DB Connected');

    await sequelize.sync();

    app.listen(port, () => {
      console.log(`App running on port ${port}...`);
    });

  } catch (error) {
    console.error(error)  
  }
}
