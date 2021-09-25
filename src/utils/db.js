import Localbase from "localbase";

const db = new Localbase("poke-tpkd", {});
db.config.debug = false;

export default db;
