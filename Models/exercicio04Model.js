class Pessoa{
    constructor(nome, cpf){
        this.nome = nome;
        this.cpf = cpf;
    }
    //crud
    cadastrar(){
        
    }
    pesquisar(){
        
    }
    atualizar(){

    }
    deletar(){
        
    }
}

class Cliente extends Pessoa{
    constructor(nome, cpf, telefone, endereco){
        super(nome, cpf);
        this.telefone = telefone
        this.endereco = endereco
    }
    //crud
    cadastrar(){
        
    }
    pesquisar(){
        
    }
    atualizar(){
        
    }
    deletar(){
        
    }
}

class Funcionario extends Pessoa{
    constructor(nome, cpf, salario, matricula){
        super(nome, cpf);
        this.matricula = matricula
        this.salario = salario
    }
    //crud
    cadastrar(){
        
    }
    pesquisar(){
        
    }
    atualizar(){
        
    }
    deletar(){
        
    }
}

class Gerente extends Funcionario{
    constructor(nome, cpf, salario, matricula, setor){
        super(nome, cpf, salario, matricula);
        this.setor = setor
    }
    //crud
    cadastrar(){
        
    }
    pesquisar(){
        
    }
    atualizar(){
        
    }
    deletar(){
        
    }
}

class Vendedor extends Funcionario{
    constructor(nome, cpf, salario, matricula, metaVendas){
        super(nome, cpf, salario, matricula, metaVendas);
        this.metaVendas = metaVendas
    }
    //crud
    cadastrar(){
        
    }
    pesquisar(){
        
    }
    atualizar(){
        
    }
    deletar(){
        
    }
}

class Pedido{
    constructor(numero, data, status, Cliente, Vendedor){
        this.numero = numero;
        this.data = data;
        this.status = status;
        this.Cliente = Cliente;
        this.Vendedor = Vendedor;

        this.itens = [];
        this.pagamento = [];
    }

    adicionarItem(quantidade) {
        const item = new ItemPedido(quantidade);
        this.itens.push(item);
    }

    adicionarPagamento(valor, data, formaPagamento) {
        const pagamento = new pagamento(valor, data, formaPagamento);
        this.pagamento.push(pagamento);
    }

    //crud
    cadastrar(){

    }
    pesquisar(){

    }
    atualizar(){

    }
    deletar(){

    }
}

class Pagamento{
    constructor(valor, data, formaPagamento){
        this.valor = valor;
        this.data = data;
        this.formaPagamento = formaPagamento;
    }
    //crud
    cadastrar(){

    }
    pesquisar(){

    }
    atualizar(){

    }
    deletar(){

    }
}

class ItemPedido {
    constructor(quantidade, Produto) {
        this.quantidade = quantidade;
        this.Produto;
    }
    //crud
    cadastrar(){

    }
    pesquisar(){

    }
    atualizar(){

    }
    deletar(){

    }
}

    class Produto {
    constructor(codigo, nome, descricao, preco) {
        this.codigo = codigo;
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
    }
    //crud
    cadastrar(){

    }
    pesquisar(){

    }
    atualizar(){

    }
    deletar(){

    }
}




const Cliente1 = new Cliente('Carlos Silva', '111.111.111-11', '(19) 98888-7777', 'Rua A, 123');
const Vendedor1 = new Vendedor('Ana Costa', '222.222.222-22', 4500.00, 'V-01', 50000.00);
const Gerente1 = new Gerente('Roberto Souza', '333.333.333-33', 8000.00, 'G-01', 'Vendas');


const Produto1 = new Produto(101, 'Teclado Mecânico', 'Switch Blue RGB', 250.00);
const Produto2 = new Produto(102, 'Mouse Gamer', '16000 DPI', 150.00);


const Pedido1 = new Pedido(1001, '15/03/2026', 'Em Processamento', Cliente1, Vendedor1);


Pedido1.adicionarItem(Produto1, 1);
Pedido1.adicionarItem(Produto2, 2);
Pedido1.adicionarPagamento(550.00, '15/03/2026', 'Pix');