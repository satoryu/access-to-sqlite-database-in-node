import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

const dbPath: string = process.argv[2];

(async () => {
  const db = await open({
    filename: dbPath,
    driver: sqlite3.Database
  })

  const records = await db.all('SELECT * FROM books')

  console.log(JSON.stringify(records, null, 2))
})()
