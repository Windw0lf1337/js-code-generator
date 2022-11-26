import codeGenerator from "./src/main.js";

(async () => {
    await codeGenerator("config/folder-pairs.json");
})();

// Error handling more try and catch