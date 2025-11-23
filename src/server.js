const { PORT } = require("../config/env");
const app = require("./app");



app.listen(5000, () => {
  console.log(`Server running at http://localhost:${5000}`);
});
