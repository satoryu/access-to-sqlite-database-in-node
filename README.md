# README

## Create a database in SQLite

Before run this script, create a database in SQLite:

```shell
sqlite3 database.sqlite '
  CREATE TABLE books (
    id INTEGER PRIMARY KEY,
    name VARCHAR(255),
    price INTEGER
  );

  INSERT INTO books (name, price) VALUES ("Pragmatic Programmer", 3980),
    ("HogeHoge", 1980);
'
```

## Run sample codes

```shell
$ npm run build
$ node dist/index.js ./database.sqlite
1: "Pragmatic Programmer" 3980 yen
2: "HogeHoge" 1980 yen
```

```shell
$ npm run build
$ node dist/use_sqlite.js ./database.sqlite
[
  {
    "id": 1,
    "name": "Pragmatic Programmer",
    "price": 3980
  },
  {
    "id": 2,
    "name": "HogeHoge",
    "price": 1980
  }
]
```
