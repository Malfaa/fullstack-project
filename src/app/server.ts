import express from "express";

const app = express();
const host = "127.0.0.0";
const port = 3000;

app.get("/anotacoes", (req, res) => {
    res.send("hello world");
})

app.listen(port, host, () => {
    console.log(`Servidor Ativo:${host}:${port}`);
});