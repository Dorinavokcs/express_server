import express from "express";
import cors from "cors"

const PORT = 8000;
const HOST = "127.0.0.1";

//szerver inditása:
const server = express();
//cors problemakra -csak fehlesztesi idoben:minden kerest engelyezunk
server.use(cors());
server.use(express.json())
server.listen(PORT, () =>console.log(`server is running at http://${HOST}:${PORT}`));
