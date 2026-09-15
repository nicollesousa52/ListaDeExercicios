class Funcionario {
    constructor(nome, cpf, matricula) {
        this.nome = nome;
        this.cpf = cpf;
        this.matricula = matricula;
    }

    cadastrar() {}
    pesquisar() {}
    atualizar() {}
    deletar() {}
}

class Cozinheiro extends Funcionario {
    constructor(nome, cpf, matricula) {
        super(nome, cpf, matricula);
    }

    cadastrar() {}
    pesquisar() {}
    atualizar() {}
    deletar() {}
}

class Garcom extends Funcionario {
    constructor(nome, cpf, matricula) {
        super(nome, cpf, matricula);
    }

    cadastrar() {}
    pesquisar() {}
    atualizar() {}
    deletar() {}
}

class Cliente {
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
    }

    cadastrar() {}
    pesquisar() {}
    atualizar() {}
    deletar() {}
}

class Mesa {
    constructor(numero, capacidade, localizacao) {
        this.numero = numero;
        this.capacidade = capacidade;
        this.localizacao = localizacao;
    }

    cadastrar() {}
    pesquisar() {}
    atualizar() {}
    deletar() {}
}

class ItemPedido {
    constructor(quantidade, preco) {
        this.quantidade = quantidade;
        this.preco = preco;
    }

    cadastrar() {}
    pesquisar() {}
    atualizar() {}
    deletar() {}
}

class Pedido {
    constructor(numero, data, valorTotal, cliente, garcom, mesa) {
        this.numero = numero;
        this.data = data;
        this.valorTotal = valorTotal;
        this.cliente = cliente;
        this.garcom = garcom;
        this.mesa = mesa;

      
        this.itens = [];
    }

    adicionarItem(quantidade, preco) {
        const item = new ItemPedido(quantidade, preco);
        this.itens.push(item);
    }

    cadastrar() {}
    pesquisar() {}
    atualizar() {}
    deletar() {}
}

const garcom1 = new Garcom('Carlos Silva', '111.222.333-44', 'G-01');
const cozinheiro1 = new Cozinheiro('Ana Oliveira', '555.666.777-88', 'C-01');


const cliente1 = new Cliente(1, 'Gabriel Bená');
const mesa1 = new Mesa(5, 4, 'Varanda');


const pedido1 = new Pedido(101, '15/03/2026', 150.00, cliente1, garcom1, mesa1);


pedido1.adicionarItem(2, 45.00);
pedido1.adicionarItem(3, 20.00);