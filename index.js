const express = require("express"); // this imports something, in this case express.
const fs = require("fs");
const PORT = 3500;

const app = express();

app.get("/characters", (req, res) => {
	fs.readFile("./characters.json", "utf8", (err, charactersData) => {
		if (err) {
			res.json({ message: "WRONG! Go back" });
		}
		let library = JSON.parse(charactersData);
		res.json(library);
	});
});

app.get("/characters/:name", function(req, res) {
	let name = req.params.name;
	fs.readFile("./characters.json", "utf8", (err, charactersData) => {
		if (err) {
			res.json({ message: "WRONG! Go back" });
		}
		let library = JSON.parse(charactersData);
		res.json(library[name]);
	});
	console.log(name);
});

app.listen(PORT, () => {
	console.log(`I am listening on port ${PORT}`);
});
