import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabase("nazwisko_imie_grupa.db");

class Database {
  static createTable() {
    console.log("dodawanie");
    db.transaction(tx => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS alarms (id integer primary key not null, hour text, minute text);"
      );
    });
  }

  static add() {
    db.transaction(tx => {
      tx.executeSql("INSERT INTO alarms (a, b) values ('xxx', 'yyy')");
    });
  }

  static addHour(hour, minute) {
    db.transaction(tx => {
      tx.executeSql(
        "INSERT INTO alarms (hour, minute) values (" +
          hour +
          ", " +
          minute +
          ")"
      );
    });
  }

  static getAll() {
    var query = "SELECT * FROM alarms";
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
      tx.executeSql("DELETE FROM alarms WHERE (id = " + val + ");");
    });
  }
}

export default Database;
