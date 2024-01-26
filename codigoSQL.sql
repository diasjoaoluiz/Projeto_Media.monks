CREATE TABLE tabelao (
  data TEXT,
  marca TEXT,
  id_marca INTEGER,
  vendas INTEGER,
  valor_do_veiculo INTEGER,
  nome_veiculo TEXT
);

INSERT INTO tabelao (data, marca, id_marca, vendas, valor_do_veiculo, nome_veiculo)
SELECT
fixedDataBase2.c1,
fixedDataBase2.c2,
fixedDataBase1.c1,
fixedDataBase1.c3,
fixedDataBase1.c4,
fixedDataBase1.c5
FROM
fixedDataBase1 INNER JOIN fixedDataBase2 ON fixedDataBase1.c2 = fixedDataBase2.c1;

SELECT * FROM tabelao;