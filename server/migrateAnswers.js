require("dotenv").config();
const Connect = require("./database/Connection");

// CONNECTION
const DB_URL = process.env.SHS_DATABASE_URL;
const connection = new Connect(DB_URL);

// MIGRATION
const {
  selected_pe_rollback,
  selected_pe_migrate,
} = require("./database/migration/10_selected_pe_migration");

// CONNECT
connection.connectOnMigration(
  async () => {
    // ROLLBACK
    await selected_pe_rollback();
    console.log("DATA SUCCESSFULLY ROLLBACKED");

    // MIGRATE
    await selected_pe_migrate();
    console.log("MIGRATION SUCCESSFULLY DONE");
  },
  async () => {
    console.log("TRIGGER THIS CALLBACK ONCE THE DATABASE CAUSED AN ERROR!");
  }
);
