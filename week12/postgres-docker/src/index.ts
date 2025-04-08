
const { Client } = require('pg');

const connectionString = 'postgresql://postgres:mysecretpassword@localhost:5430/postgres';

const client = new Client({
  connectionString: connectionString
});

client.connect(err => {
  if (err) {
    console.error('connection error', err.stack);
  } else {
    console.log('connected to the database');
  }
});


async function createtable() {
  const query = `
    CREATE TABLE addresses (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    city VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL,
    street VARCHAR(255) NOT NULL,
    pincode VARCHAR(20),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
`
  await client.query(createtable)
  await client.end()
}
// createtable()