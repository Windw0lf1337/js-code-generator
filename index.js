import codeGenerator from "./src/index.js";

(async () => {
    await codeGenerator("config/folder-pairs.json");
})();