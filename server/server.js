const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const pagesRouter = require('./routers/pages.js');

const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))

// Templating Engine
app.set('view engine', 'ejs');

// Routes
app.use(pagesRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
