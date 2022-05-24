const express = require("express");
const ejs = require("ejs");
const path = require("path");
const app = express();
const conn = require("./db.js");

app.listen(8009, () => {
	console.log("listening on port 8009");
});

app.use(express.urlencoded({ extended: false }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
	var sql = "SELECT * FROM Old_Member UNION SELECT * FROM New_Member;";
	conn.query(sql, (err, rows) => {
		if (err) console.log("query is not excuted. select fail!\n" + err);
		else res.render("index.ejs", { list: rows });
	});
});
