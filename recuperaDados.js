var dataBase1, dataBase2;

function lerJSONs() {
    try {
        dataBase1 = require ("./json's_originais/broken_database_1.json");
        dataBase2 = require ("./json's_originais/broken_database_2.json");
        console.log("Deu certo");
    } catch(error) {
        console.log("Erro ao ler os arquivos");
    }
}

lerJSONs();

function corrigirNomes (db1, db2) {
    for(i=0; i < db1.length; i++) {
        for(j=0; j < db1[i].nome.length; j++) {
            db1[i].nome = db1[i].nome.replace("æ", "a");
            db1[i].nome = db1[i].nome.replace("ø","o");
        }
    }

    for(i=0; i < db2.length; i++) {
        for(j=0; j < db2[i].marca.length; j++) {
            db2[i].marca = db2[i].marca.replace("æ", "a");
            db2[i].marca = db2[i].marca.replace("ø","o");
        }
    }
}

function corrigirVendas (db1) {
    for(i=0; i < db1.length; i++) {
        for(j=0; j < db1[i].nome.length; j++) {
            db1[i].vendas = Number(db1[i].vendas)
        }
    }
}

function exportarJSONs (db1, db2) {
    let fs = require("fs");

    fs.writeFile("./fixedDataBase1.json", JSON.stringify(db1), err => {
        if(err) {
            console.log("Erro ao escrever o arquivo!");
            throw err;
        }else {
            console.log("Escrita concluida!");
        }
    });

    fs.writeFile("./fixedDataBase2.json", JSON.stringify(db2), err =>{
        if(err) {
            console.log("Erro ao escrever o arquivo!");
            throw err;
        }else {
            console.log("Escrita concluida!");
        }
    });
}

corrigirNomes (dataBase1, dataBase2);
corrigirVendas (dataBase1);
exportarJSONs (dataBase1, dataBase2);