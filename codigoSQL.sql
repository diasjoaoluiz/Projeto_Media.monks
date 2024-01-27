CREATE TABLE tabelao (
  data TEXT,
  id_marca INTEGER,
  marca TEXT,
  nome_veiculo TEXT,
  vendas INTEGER,
  valor_do_veiculo INTEGER
);

INSERT INTO tabelao (data, id_marca, marca, nome_veiculo, vendas, valor_do_veiculo)
SELECT
fixedDataBase1.c1,
fixedDataBase2.c1,
fixedDataBase2.c2,
fixedDataBase1.c5,
fixedDataBase1.c3,
fixedDataBase1.c4
FROM
fixedDataBase1 INNER JOIN fixedDataBase2 ON fixedDataBase1.c2 = fixedDataBase2.c1;

SELECT * FROM tabelao;