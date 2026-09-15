class Pessoa {
    constructor(nome, cpf, dataNascimento) {
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
    }

    cadastrar() {}
    pesquisar() {}
    atualizar() {}
    deletar() {}
}

class Aluno extends Pessoa {
    constructor(nome, cpf, dataNascimento, matricula) {
        super(nome, cpf, dataNascimento);
        this.matricula = matricula;
    }

    cadastrar() {}
    pesquisar() {}
    atualizar() {}
    deletar() {}
}

class Professor extends Pessoa {
    constructor(nome, cpf, dataNascimento, matriculaFuncional) {
        super(nome, cpf, dataNascimento);
        this.matriculaFuncional = matriculaFuncional;
    }

    cadastrar() {}
    pesquisar() {}
    atualizar() {}
    deletar() {}
}

class Disciplina {
    constructor(codigo, nome, cargaHoraria) {
        this.codigo = codigo;
        this.nome = nome;
        this.cargaHoraria = cargaHoraria;
    }

    cadastrar() {}
    pesquisar() {}
    atualizar() {}
    deletar() {}
}

class Turma {
    constructor(codigo, sala, horario, disciplina, professor, alunos) {
        this.codigo = codigo;
        this.sala = sala;
        this.horario = horario;
        
        this.disciplina = disciplina;
        this.professor = professor;
        this.alunos = alunos;
    }

    cadastrar() {}
    pesquisar() {}
    atualizar() {}
    deletar() {}
}

const bena = new Aluno('Gabriel Bená', '12345678910', '10/11/2026', '676767');
const vinicius = new Professor('João', '10987654321', '01/01/1000', '6768-69');
const matematica = new Disciplina(9040543, 'Matemática', '600 horas');
const segundoAno = new Turma(65739497, 'Sala 67', '10:30', matematica, vinicius, bena);