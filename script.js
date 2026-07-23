// Banco de dados simulado dos imóveis
const imoveisData = {
    "1": {
        titulo: "Mansão Contemporânea",
        preco: "R$ 8.500.000",
        local: "Alphaville, Barueri - SP",
        quartos: "5 Suítes",
        banheiros: "6 Banheiros",
        garagem: "6 Vagas (Cobertas)",
        area: "750 m² Área Construída",
        piscina: "Piscina Aquecida c/ Borda Infinita",
        imagem: "images/imovel-1.jpg", // Certifique-se de que tem uma imagem aqui na sua pasta!
        descricao: "Mansão de altíssimo padrão com projeto arquitetônico premiado. Possui automação residencial total por comando de voz e aplicativo, piscina aquecida com borda infinita, espaço gourmet integrado, adega climatizada para 500 rótulos e acabamentos importados em mármore italiano."
    },
    "2": {
        titulo: "Cobertura Vista Mar",
        preco: "R$ 12.000.000",
        local: "Jardins, São Paulo - SP",
        quartos: "4 Suítes Master",
        banheiros: "5 Banheiros",
        garagem: "4 Vagas Privativas",
        area: "520 m² Área Privativa",
        piscina: "Jacuzzi & Spa no Rooftop",
        imagem: "images/imovel-2.jpg", // Certifique-se de que tem uma imagem aqui na sua pasta!
        descricao: "Exclusiva cobertura duplex totalmente mobiliada por designers renomados. Possui rooftop privativo com spa, heliponto homologado no edifício, sistema de som integrado em todos os ambientes e vista panorâmica impecável de 360º para a cidade."
    },
    "3": {
        titulo: "Residência Minimalista",
        preco: "R$ 6.200.000",
        local: "Quinta da Baroneza - SP",
        quartos: "4 Suítes",
        banheiros: "5 Banheiros",
        garagem: "4 Vagas",
        area: "480 m² Área Total",
        piscina: "Piscina Natural de Raia",
        imagem: "images/imovel-3.jpg", // Certifique-se de que tem uma imagem aqui na sua pasta!
        descricao: "Projeto biofílico integrado à natureza preservada do condomínio. Casa térrea com pé direito duplo, esquadrias do chão ao teto, usina de energia solar autossustentável e lago privativo com paisagismo assinado."
    }
};

// Função para abrir o Modal e injetar os dados corretos
function abrirModal(dados) {
    // Textos Básicos
    document.getElementById('modalTitulo').innerText = dados.titulo;
    document.getElementById('modalPreco').innerText = dados.preco;
    document.getElementById('modalLocal').innerHTML = "<i class='fa-solid fa-location-dot'></i> " + dados.local;
    
    // Ícones e Especificações
    document.getElementById('modalQuartos').innerText = dados.quartos;
    document.getElementById('modalBanheiros').innerText = dados.banheiros;
    document.getElementById('modalGaragem').innerText = dados.garagem;
    document.getElementById('modalArea').innerText = dados.area;
    document.getElementById('modalPiscina').innerText = dados.piscina;
    
    // Imagem e Descrição longa
    document.getElementById('modalImg').src = dados.imagem;
    document.getElementById('modalDescricao').innerText = dados.descricao;
    
    // Mostra a janela (muda de display: none para flex)
    document.getElementById('modalImovel').style.display = 'flex';
}

// Função para fechar o Modal
function closeModal() {
    document.getElementById('modalImovel').style.display = 'none';
}

// Botão de agendar no Modal
function agendarViaModal() {
    alert("Excelente escolha! A solicitação foi enviada e nosso corretor private entrará em contato via WhatsApp em breve.");
    closeModal();
}

// Captura o clique em QUALQUER lugar do card (ou no botão do card)
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card-imovel");
    
    cards.forEach(card => {
        card.addEventListener("click", function () {
            const id = this.getAttribute("data-imovel");
            if (imoveisData[id]) {
                abrirModal(imoveisData[id]);
            }
        });
    });
});

// Fecha o Modal se clicar na área escura (fora da janela branca)
window.onclick = function(event) {
    const modal = document.getElementById('modalImovel');
    if (event.target === modal) {
        closeModal();
    }
};