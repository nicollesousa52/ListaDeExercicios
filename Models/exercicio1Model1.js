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

class Usuario extends Pessoa {
    constructor(nome, cpf, matriculaUsuario) {
        super(nome, cpf);
        this.matriculaUsuario = matriculaUsuario;
    }

    cadastrar() {}
    pesquisar() {}
    atualizar() {}
    deletar() {}
}

class Funcionario extends Pessoa {
    constructor(nome, cpf, matriculaFuncionario, cargo) {
        super(nome, cpf);
        this.matriculaFuncionario = matriculaFuncionario;
        this.cargo = cargo;
    }

    cadastrar() {}
    pesquisar() {}
    atualizar() {}
    deletar() {}
}

class Livro {
    constructor(isbn, titulo, anoPublicacao) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.anoPublicacao = anoPublicacao;
    }

    cadastrar() {}
    pesquisar() {}
    atualizar() {}
    deletar() {}
}

class Emprestimo {
    constructor(id, dataEmprestimo, dataDevolucao, usuario, livro) {
        this.id = id;
        this.dataEmprestimo = dataEmprestimo;
        this.dataDevolucao = dataDevolucao;
        this.usuario = usuario;
        this.livro = livro;
    }

    cadastrar() {}
    pesquisar() {}
    atualizar() {}
    deletar() {}
}
const usuario1 = new Usuario('Gabriel Bená', '111.222.333-44', 'U-2026');
const funcionario1 = new Funcionario('Ana Souza', '999.888.777-66', 'F-101', 'Bibliotecária');
const livro1 = new Livro('978-8576082675', 'Código Limpo', 2009);
const emprestimo1 = new Emprestimo(1, '15/03/2026', '30/03/2026', usuario1, livro1);