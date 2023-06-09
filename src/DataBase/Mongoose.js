const mongoose = require("mongoose");
const { log, success, error, debug } = require("../Helpers/Logger");
const System = require("../Settings/System");

mongoose.connect(System.MongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on("connected", () => {
  debug("Database bağlantısı tamamlandı!");
});
mongoose.connection.on("error", () => {
  debug("Database bağlantısı kurulamadı!");
});