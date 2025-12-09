import express from "express";
import bodyParser from "body-parser";
import pg from "pg";


const app = express()
const port = 3000
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));


const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "note_pro",
  password: "1234",
  port: 5433,
});
db.connect();


app.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM notion"); // columns: id, isbn, title, note
    res.render("main_page.ejs", { notions: result.rows });
  } catch (err) {
    console.error(err);
    res.status(500).send("Database error");
  }
});

app.get("/add", (req, res) => {
  res.render("add.ejs");
});

app.post("/add", async(req,res)=>{
  const isbn = req.body["isbn"];
  const title = req.body["title"];
  const note = req.body["note"];
  try{
    await db.query("INSERT INTO notion (title, note,isbn) VALUES ($1, $2, $3)", [
      title, note, isbn])
    console.log("new notion added")
    res.redirect("/")
  }catch(err){
    console.log(err)
    res.redirect("/")
  }
})

app.get("/update", (req, res) => {
  res.render("add_note.ejs");
});

app.get("/about", (req, res) => {
  res.render("add_note.ejs");
});

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await db.query("DELETE FROM notion WHERE id = $1;", [id]);
    console.log("notion deleted");
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});



// app.post("/submit", (req, res) => {
//   const randomAdj = adj[Math.floor(Math.random() * adj.length)];
//   const randomNoun = noun[Math.floor(Math.random() * noun.length)];
//   res.render("solution.ejs", {
//     adjective: randomAdj,
//     noun: randomNoun,
//   });
// });


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
