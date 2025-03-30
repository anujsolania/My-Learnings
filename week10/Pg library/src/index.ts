require('dotenv').config()

import { Client } from "pg";

const client = new Client({
    connectionString: process.env.DATABASE_URL
})

async function createUserstable() {
    await client.connect()

    const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
        `)
        console.log(result)
}

interface userdata {
    username: string,
    email: string,
    password: string
}

async function insertUser({username,email,password}: userdata) {
    await client.connect();
    const query = "INSERT INTO users(username,email,password) VALUES ($1,$2,$3)"
    const result = await client.query(query,[username,email,password])
    console.log(result)
}

async function updateUser(newusername: string, email: string) {
    await client.connect();
    const query = "UPDATE users SET username = $1 WHERE email = $2"
    const result = await client.query(query,[newusername,email])
    console.log(result); 
}

async function getUsers() {
    await client.connect()
    const query = "SELECT * FROM users"
    const result = await client.query(query)
    console.log(result)
}

async function createAddresstable() {
    await client.connect()
    const query = 
    `CREATE TABLE addresses(
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    colony VARCHAR(100) NOT NULL,
    city VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
    );`
    const result = await client.query(query)
}

async function insertAddress(user_id: number, colony: string,city: string, country:string) {
    await client.connect();
    const query = "INSERT INTO addresses(user_id,colony,city,country) VALUES ($1,$2,$3,$4)"
    const result = await client.query(query,[user_id,colony,city,country])
    console.log(result)
}

async function getUserandAddress(user_id: number) {
    await client.connect();
    const query = `
    SELECT u.username, a.colony,a.city
    FROM users u
    JOIN addresses a ON u.id = a.user_id
    WHERE u.id = $1
    `
    const result = await client.query(query,[user_id])
    console.log(result.rows)
}

// createUserstable();
// insertUser({username: "jai",email: "jai@gmail.com",password:"haleluya"})
// updateUser("jaii2","jai@gmail.com")
// getUsers()
// createAddresstable()
insertAddress(1,"sushant","ghaziabad","india")
// getUserandAddress(1)