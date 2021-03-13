const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

module.exports = function (app) {
  app.use(cookieParser());

	app.use("/api/index", require("../routes/index"));
	app.use("/api", (req, res) => {
		res.status(404).json({
			success: false,
			code: 404,
			message: "Not found",
		});
	});
};