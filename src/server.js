const { app } = require("./app");

const { PORT } = process.env || 3000

app.listen(PORT, console.log(`Up and running on port ${PORT}`))