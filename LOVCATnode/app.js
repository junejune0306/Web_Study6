const express = require("express");
const ejs = require("ejs");
const path = require("path");
const app = express();
const conn = require("./db.js");

app.listen(8009, () => {
	console.log("listening on port 8009");
});

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'views')));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
	var sql = "SELECT * FROM guestBook ORDER BY seq DESC;";
	conn.query(sql, (err, rows) => {
		if (err) console.log("query is not excuted. select fail!\n" + err);
		else {
			for (var i of rows) {
				i.time.setHours(i.time.getHours() + 9);
				i.time = i.time.getFullYear()+"."+(i.time.getMonth()+1)+"."+i.time.getDate()+" "+i.time.getHours()+":"+i.time.getMinutes()+":"+i.time.getSeconds();
			}
			res.render("guestBook.ejs", { list: rows });
		}
	});
});

app.post("/", (req, res) => {
	console.log(req.body);
	var sql = "insert into guestBook (name, text) values (?, ?);";
	params = [req.body.name, req.body.text];
	if (params[0] != '' && params[1] != '') conn.query(sql, params, (err, rows) => {
		if (err) console.log(err);
	});
	res.redirect("/");
});
