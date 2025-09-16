import { createPool } from "mysql2";
import mysql from "mysql2/promise";

//Adatbázis-kapcsolat (pool) létrehozása:
const pool = mysql.createPool({
    host: "localhost",
    user: 'root',
    password:'',
    database:"userdb"
})

export interface User{
    id:number,
    nev: string,
    cim:string,
    szuletesidatum: string|null,


}

export const getAll = async ()=>{
    const [rows] =await pool.query("SELECT *FROM users")
    return rows
}
export const createUser = async() =>{
    pool.query("INSERT INTO (nev, cim szuletesidatum)VALUES8")
}