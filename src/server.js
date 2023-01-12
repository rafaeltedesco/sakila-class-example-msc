const { app } = require("./app");

const { PORT } = process.env || 3003

app.listen(PORT, console.log(`Up and running on port ${PORT}`))