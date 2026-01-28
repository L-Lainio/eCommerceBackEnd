const express = require('express');
const routes = require('./routes');
const sequelize  = require('./config/connection');

// Define your database connection configuration

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// Sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
	// Change your app.listen slightly so it doesn't block tests
	if (require.main === module) {
		app.listen(PORT, () => {
			console.log(`App listening on port ${PORT}!`);
		});
	}
});

module.exports = app;
