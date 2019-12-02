import React, { Component } from "react";
import { View, Text } from "react-native";

import * as SQLite from "expo-sqlite";
//const db = SQLite.openDatabase("padol_przemyslaw_4ic.db"); // proszę o taki schemat nazywania swojej bazy danych
const db = SQLite.openDatabase("nazwisko_imie_grupa.db"); // proszę o taki schemat nazywania swojej bazy danych

class DatabaseOperations {
  static createTable() {
    console.log("start dodawania");
    db.transaction(
      tx => {
        tx.executeSql(
          "CREATE TABLE IF NOT EXISTS table1 (id integer primary key not null, a text, b text);"
        );
      },
      err => console.log(JSON.stringify(err))
    );
  }

  static addData() {
    console.log("dodawanie danych");
    db.transaction(
      tx => {
        tx.executeSql("INSERT INTO table1 (a, b) values ('xx', 'yy')");
      },
      err => console.log(JSON.stringify(err))
    ),
      () => console.log("dodano rekord do bazy!");
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
            console.log(JSON.stringify(results));

            resolve(JSON.stringify(results));
          },
          function(tx, error) {
            reject(error);
          }
        );
      })
    );
  }

  static remove() {
    db.transaction(tx => {
      tx.executeSql("DELETE FROM table1 WHERE (id = 0);");
    });
  }

  static removeAll() {
    db.transaction(tx => {
      tx.executeSql("DELETE FROM table1 ;");
    });
  }
}

export default DatabaseOperations;
