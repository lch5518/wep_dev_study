// www.ts
import express from "express";
import Server from "./src/server";

const server = new Server();
const app:express.Application = server.getInstance(); // express.Application는 type 확인용

app.listen(8080, () => {
    console.log(open server 'http://localhost:8080');
})