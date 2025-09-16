import express, { Router } from "express";
import cors from "cors"
import * as path from "node:path"
import * as url from "node:url"
import router from "./router.js";

const PORT = 8000;
const HOST = "127.0.0.1";

//szerver inditása:
const server = express();
//const __filename=url.fileURLToPath(import.meta.filename)
//console.log("Könyvtár: ",import.meta.dirname);
const __dirname = import.meta.dirname
const staticFilesDir = path.join(__dirname, "..", "dist")

//cors problemakra -csak fehlesztesi idoben:minden kerest engelyezunk
server.use(cors());
//server.use(express.json())
server.use(express.static(staticFilesDir))

server.use("/api", router)

server.listen(PORT, () =>console.log(`server is running at http://${HOST}:${PORT}`));
