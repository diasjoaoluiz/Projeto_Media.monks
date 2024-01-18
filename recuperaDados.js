function lerJSONs() {
    try {
        database_1 = require ("./json's_originais/broken_database_1.json");
        database_2 = require ("./json's_originais/broken_database_2.json");
        console.log("Deu certo");
    } catch(error) {
        console.log("Erro ao ler os arquivos");
    }
}

lerJSONs();


