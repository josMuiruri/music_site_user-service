const express = require('express');

const app = express();

const port = 3000;

app.use('/api/v1/users', userRouter);

app.listen(port, () => {
	console.log(`App running on port ${port}...`)
});

module.exports = app;