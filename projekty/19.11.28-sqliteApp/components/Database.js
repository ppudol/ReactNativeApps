import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabase("nazwisko_imie_grupa.db");

class Database {
  static createTable() {
    console.log("dodawanie");
    db.transaction(tx => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS table1 (id integer primary key not null, a text, b text);"
      );
    });
  }

  static add() {
    db.transaction(tx => {
      tx.executeSql("INSERT INTO table1 (a, b) values ('xxx', 'yyy')");
    });
  }

  static getAll() {
    var query = "SELECT * FROM table1";
    //
    return new Promise((resolve, reject) =>
      db.transaction(tx => {
        tx.executeSql(
          query,
          [],
          (tx, results) => {
            //   console.log(JSON.stringify(results));

            resolve(JSON.stringify(results));
          },
          function(tx, error) {
            reject(error);
          }
        );
      })
    );
  }

  static remove(val) {
    db.transaction(tx => {
      tx.executeSql("DELETE FROM table1 WHERE (id = " + val + ");");
    });
  }
}

export default Database;
