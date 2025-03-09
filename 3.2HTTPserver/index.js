import express from "express";
const app= express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello</h1>");
})

app.get("/about", (req, res) => {
    res.send("<h1>Nothing here to know</h1>");
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})