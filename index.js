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

// query param passed in 

app.get("/characters", (req, res) => {
	let query = req.query;
	console.log({ query });
	let department = req.query.department;

	fs.readFile("./characters.json", "utf8", (err, charactersData) => {
		if (err) {
			console.log(err);
		}
        let data = JSON.parse(charactersData);
        
		if (!department) {
			res.json(data);
		}
		let character = data[department];
		console.log({ character });
		res.json(character);
	});
});

// 

app.listen(PORT, () => {
	console.log(`I am listening on port ${PORT}`);
});
