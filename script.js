document.addEventListener('DOMContentLoaded', () => {
  // Inicialização padrão
  console.log('Aplicação unificada carregada com sucesso.');
});

/**
 * Função para alternar entre as abas do site
 * @param {string} tabId - ID da seção que será exibida ('muv' ou 'visao')
 */
function switchTab(tabId) {
  // Esconde todos os conteúdos de abas
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => content.classList.remove('active'));

  // Desativa todos os botões da navegação
  const buttons = document.querySelectorAll('.nav-btn');
  buttons.forEach(button => button.classList.remove('active'));

  // Ativa a aba e o botão selecionados
  const selectedTab = document.getElementById(tabId);
  if (selectedTab) {
    selectedTab.classList.add('active');
  }

  // Encontra e ativa o botão correspondente
  const activeBtn = Array.from(buttons).find(btn => 
    btn.getAttribute('onclick').includes(tabId)
  );
  if (activeBtn) {
    activeBtn.classList.add('active');
  }

  // Gerenciamento de execução condicional
  onTabChange(tabId);
}

/**
 * Controla o comportamento de scripts específicos ao mudar de aba
 */
function onTabChange(activeTabId) {
  if (activeTabId === 'muv') {
    // Código para pausar ou reiniciar elementos do simulador se necessário
    console.log('Aba MUV ativada.');
  } else if (activeTabId === 'visao') {
    // Código para inicializar/parar câmera ou scripts de visão
    console.log('Aba Visão ativada.');
  }
}
