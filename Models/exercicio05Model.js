class Pessoa {
    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }

    cadastrar() {}
    pesquisar() {}
    atualizar() {}
    deletar() {}
}

class Aluno extends Pessoa {
    constructor(nome, cpf, email, dataCadastro) {
        super(nome, cpf);
        this.email = email;
        this.dataCadastro = dataCadastro;
        this.cursosMatriculados = [];
    }

    matricularEmCurso(curso) {
        this.cursosMatriculados.push(curso);
        curso.adicionarAluno(this);
    }

    cadastrar() {}
    pesquisar() {}
    atualizar() {}
    deletar() {}
}

class Funcionario extends Pessoa {
    constructor(nome, cpf) {
        super(nome, cpf);
    }

    cadastrar() {}
    pesquisar() {}
    atualizar() {}
    deletar() {}
}

class Instrutor extends Funcionario {
    constructor(nome, cpf, especialidade) {
        super(nome, cpf);
        this.especialidade = especialidade;
    }

    cadastrar() {}
    pesquisar() {}
    atualizar() {}
    deletar() {}
}

class Administrador extends Funcionario {
    constructor(nome, cpf, setor) {
        super(nome, cpf);
        this.setor = setor;
    }

    cadastrar() {}
    pesquisar() {}
    atualizar() {}
    deletar() {}
}

class Aula {
    constructor(id, titulo, duracao, conteudo) {
        this.id = id;
        this.titulo = titulo;
        this.duracao = duracao;
        this.conteudo = conteudo;
    }

    cadastrar() {}
    pesquisar() {}
    atualizar() {}
    deletar() {}
}

class Modulo {
    constructor(id, titulo, descricao, ordem) {
        this.id = id;
        this.titulo = titulo;
        this.descricao = descricao;
        this.ordem = ordem;
        
       
        this.aulas = [];
    }

    adicionarAula(id, titulo, duracao, conteudo) {
        const aula = new Aula(id, titulo, duracao, conteudo);
        this.aulas.push(aula);
        return aula;
    }

    cadastrar() {}
    pesquisar() {}
    atualizar() {}
    deletar() {}
}

class Curso {
    constructor(id, nome, descricao, duracao, preco, instrutor) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.duracao = duracao;
        this.preco = preco;
        
        
        this.instrutor = instrutor;

       
        this.modulos = [];

        this.alunos = [];
    }

    adicionarModulo(id, titulo, descricao, ordem) {
        const modulo = new Modulo(id, titulo, descricao, ordem);
        this.modulos.push(modulo);
        return modulo;
    }

    adicionarAluno(aluno) {
        this.alunos.push(aluno);
    }

    cadastrar() {}
    pesquisar() {}
    atualizar() {}
    deletar() {}
}


const instrutor1 = new Instrutor('Prof. Ricardo', '123.456.789-00', 'Engenharia de Software');
const admin1 = new Administrador('Mariana Lima', '987.654.321-11', 'Gestão Acadêmica');


const aluno1 = new Aluno('Gabriel Bená', '111.222.333-44', 'gabriel@email.com', '15/03/2026');
const aluno2 = new Aluno('Lucas Mello', '555.666.777-88', 'lucas@email.com', '15/03/2026');


const cursoPOO = new Curso(
    101, 
    'Orientação a Objetos Avançada', 
    'Curso completo de UML', 
    '60 horas', 
    349.90, 
    instrutor1
);

const modulo1 = cursoPOO.adicionarModulo(1, 'Conceitos Fundamentais', 'Abstração e Encapsulamento', 1);
modulo1.adicionarAula(101, 'Introdução às Classes', '20 min', 'Conteúdo da aula 1');
modulo1.adicionarAula(102, 'Construtores e Métodos', '30 min', 'Conteúdo da aula 2');

const modulo2 = cursoPOO.adicionarModulo(2, 'Relacionamentos UML', 'Herança e Composição', 2);
modulo2.adicionarAula(201, 'Composição vs Agregação', '25 min', 'Conteúdo da aula 3');


aluno1.matricularEmCurso(cursoPOO);
aluno2.matricularEmCurso(cursoPOO);