import express from "express";
import cors from "cors";
// import ProdukRoute from "./routes/Route.js";

const app = express();
app.use(cors());
app.use(express.json());
// app.use(ProdukRoute)    

app.listen(5500, () => console.log("server running at port 5500"))