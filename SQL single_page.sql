/*Criar banco de Dados*/
CREATE DATABASE atividade_single_page;

/* selecionar banco de dados */
USE atividade_single_page;

/* Criar tabela de produtos */
CREATE TABLE produtos(

	/* identificador unico */
	id INT auto_increment primary key,
    
    /* nome do produto  */
	nome varchar(100),
    
    /* categoria */
    categoria varchar(100),
    
    /* descricao */
    descricao text
);

/* descriçao da tabela */
describe produtos