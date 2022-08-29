import { Database } from 'sqlite3'

const dbPath: string = process.argv[2]

const db = new Database(dbPath)

type bookRecord = {
  id: number,
  name: string,
  price: number
}

db.serialize(() => {
  db.each("SELECT * FROM books", (err: any, row: bookRecord) => {
    console.log(`${row.id}: "${row.name}" ${row.price} yen`)
  })
})
