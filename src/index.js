const { app } = require('./app');
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Application listening at http://localhost:${port}`);
});
