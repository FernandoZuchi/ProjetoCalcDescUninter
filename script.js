//Codi 10% em cima de qualquer um (fazer declaração)

//Vestibular R$229 vai pra R$189

//Enem R$597 
//550 R$213
//551 600 R$202
//601 a 650 R$191
//651 a 900 R$181
//901 em diante 100%

//EJA

//Diploma R$205,50

//Transferência R$205,50
// Inicialização de variáveis
let expression = "Valor total: R$597,00";
let valorTotal = 597.00;

function desconto2graduacao(){
    valorTotal -= 205.50;
    clearDisplay();
    appendToDisplay("Valor total: R$"+valorTotal); 
}

function vestibularUninter(){
    valorTotal -= 408.00;
    clearDisplay();
    appendToDisplay("Valor total: R$"+valorTotal);
}

function transferencia(){
    valorTotal -= 205.50;
    clearDisplay();
    appendToDisplay("Valor total: R$"+valorTotal);
}


// Função para adicionar um valor ao visor
function appendToDisplay(value) {
    expression += value;
    document.getElementById("display").value = expression;
}

// Função para limpar o visor chamando de outra função
function clearDisplay() {
    expression = "";
    document.getElementById("display").value = expression;
}

//Função para limpar o visor através do botão "Limpar"
function clearDisplay1() {
    expression = "";
    document.getElementById("display").value = expression;
    valorTotal = 597.00;
}

// Função para realizar o cálculo da expressão
function calculate() {
    try {
        const result = eval(expression);
        document.getElementById("display").value = result;
        expression = result.toString();
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

// Função para calcular a porcentagem
function calculatePercentage() {

}
    //try {
        //const currentValue = parseFloat(expression);
        //const percentageResult = currentValue / 100;
        //document.getElementById("display").value = percentageResult;
        //expression = percentageResult.toString();
    //} catch (error) {
        //document.getElementById("display").value = "Error";
    //}

// Função para armazenar na memória
function memoryStore() {
    const currentValue = parseFloat(expression);
    memoryValue += currentValue;
}

// Função para recuperar o valor armazenado na memória
function memoryRecall() {
    document.getElementById("display").value = memoryValue;
    expression = memoryValue.toString();
}

// Função para limpar a memória
function memoryClear() {
    memoryValue = 0;
}

let enemModal = document.getElementById("enemModal");

// Função para abrir o modal
function openEnemModal() {
    enemModal.style.display = "block";
}

// Função para fechar o modal
function closeEnemModal() {
    enemModal.style.display = "none";
}

// Função para aplicar o desconto do ENEM
function applyEnemDiscount() {
    // Obtenha o valor selecionado no select
    let selectedValue = document.getElementById("enemSelect").value;

    // Faça o que for necessário com o valor selecionado (por exemplo, calcular desconto)
    valorTotal -= calcularDescontoENEM(selectedValue);

    // Atualize o visor e feche o modal
    clearDisplay();
    appendToDisplay("Valor total: R$" + valorTotal);
    closeEnemModal();
}

// Função para calcular o desconto com base na nota do ENEM
function calcularDescontoENEM(nota) {
    if (nota == 550) {
        valorTotal = 213;
    } else if (nota >= 551 && nota <= 600) {
        valorTotal = 202;
    } else if (nota >= 601 && nota <= 900) {
        valorTotal = 181;
    } else if (nota > 900) {
        valorTotal = 0; // Bolsa de 100%
    } else {
        valorTotal += 0; // Sem desconto para outras situações (nota abaixo de 550)
    }
}