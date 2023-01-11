const { app } = require("./app");

const { PORT } = process.env || 5005

app.listen(PORT, console.log(`Up and running on port ${PORT}`))