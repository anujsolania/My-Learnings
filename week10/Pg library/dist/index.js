"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://Anuj%20Solania:npg_Cjxb8oRrEA2O@ep-shy-bonus-a1yy4ltf-pooler.ap-southeast-1.aws.neon.tech/Database%201?sslmode=require"
});
function createUserstable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
        `);
        console.log(result);
    });
}
function insertUser(_a) {
    return __awaiter(this, arguments, void 0, function* ({ username, email, password }) {
        yield client.connect();
        const query = "INSERT INTO users(username,email,password) VALUES ($1,$2,$3)";
        const result = yield client.query(query, [username, email, password]);
        console.log(result);
    });
}
function updateUser(newusername, email) {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const query = "UPDATE users SET username = $1 WHERE email = $2";
        const result = yield client.query(query, [newusername, email]);
        console.log(result);
    });
}
function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const query = "SELECT * FROM users";
        const result = yield client.query(query);
        console.log(result);
    });
}
function createAddresstable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const query = `CREATE TABLE addresses(
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    colony VARCHAR(100) NOT NULL,
    city VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
    );`;
        const result = yield client.query(query);
    });
}
function insertAddress(user_id, colony, city, country) {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const query = "INSERT INTO addresses(user_id,colony,city,country) VALUES ($1,$2,$3,$4)";
        const result = yield client.query(query, [user_id, colony, city, country]);
        console.log(result);
    });
}
function getUserandAddress(user_id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const query = `
    SELECT u.username, a.colony,a.city
    FROM users u
    JOIN addresses a ON u.id = a.user_id
    WHERE u.id = $1
    `;
        const result = yield client.query(query, [user_id]);
        console.log(result.rows);
    });
}
// createUserstable();
// insertUser({username: "jai",email: "jai@gmail.com",password:"haleluya"})
// updateUser("jaii2","jai@gmail.com")
// getUsers()
// createAddresstable()
// insertAddress(1,"sushant","ghaziabad","india")
getUserandAddress(1);
