# 🎓 Simulado Oficial Microsoft AI-901: Microsoft Azure AI Fundamentals

> **Simulado Interativo em Português** baseado na avaliação oficial de prática da Microsoft para o novo exame **AI-901: Microsoft Azure AI Fundamentals** (com ênfase em **Microsoft Foundry**, modelos multimodais, agentes de IA e Content Understanding).

---

## 🚀 Como Disponibilizar Online para os Alunos (GitHub Pages)

Este repositório foi projetado como uma **Single Page Application (SPA)** estática (HTML, CSS e JavaScript puros), o que significa que pode ser publicado **gratuitamente** no GitHub Pages em menos de 1 minuto:

1. Acesse o repositório no GitHub: [https://github.com/geraldocafe1/simulado_ai_901](https://github.com/geraldocafe1/simulado_ai_901).
2. Clique na aba **Settings** (Configurações) no topo.
3. No menu lateral esquerdo, clique em **Pages**.
4. Em **Build and deployment** > **Source**, selecione **Deploy from a branch**.
5. Em **Branch**, selecione `main` e a pasta `/(root)`, depois clique em **Save**.
6. Aguarde cerca de 1 a 2 minutos. Os links de acesso dos alunos estarão prontos em:
   - 👉 **Simulado 1 (50 Questões Oficiais Microsoft):** **`https://geraldocafe1.github.io/simulado_ai_901/`**
   - 👉 **Simulado 2 (30 Questões ExamTopics AI-901):** **`https://geraldocafe1.github.io/simulado_ai_901/simulado2/`** (ou **`https://geraldocafe1.github.io/simulado_ai_901/?simulado=2`**)

Compartilhe esses links com sua turma para que realizem qualquer um dos simulados em computador, tablet ou celular sem necessidade de instalação! Também é possível alternar entre o **Simulado 1 (50Q)** e o **Simulado 2 (30Q)** diretamente no cabeçalho da aplicação.

---

## ✨ Recursos da Aplicação

- **50 Questões Oficiais Traduzidas e Comentadas**:
  - Todas as 50 questões do teste prático oficial da Microsoft com gabarito validado.
  - Comentários aprofundados explicando **por que a alternativa correta está certa** e **por que cada um dos distratores está errado**.
  - Racional oficial da Microsoft e links diretos para leitura recomendada no Microsoft Learn.
- **Interface Fluent Design Oficial da Microsoft**:
  - Reprodução fiel do layout das avaliações oficiais do Microsoft Learn.
  - Barra de progresso contínua com indicadores de status de cada questão.
  - Alternador de tema **Modo Claro / Modo Escuro** com gravação de preferência.
- **Dois Modos de Aprendizado**:
  - 💡 **Modo Estudo**: Permite consultar o gabarito comentado, histórico de tentativas e explicações imediatamente ao responder cada item.
  - 📝 **Modo Simulado (Exame)**: Oculta as respostas durante a prova, ativa o cronômetro oficial e exige que o aluno passe pela Tela de Revisão antes de finalizar.
- **Diversidade de Tipos de Questões**:
  - Escolha única (radio button).
  - Múltipla escolha com duas opções corretas (checkboxes).
  - Tabelas de declarações Sim/Não (Yes/No statements).
  - Preenchimento de sentenças com dropdown inline.
- **Tela de Revisão Oficial**:
  - Filtro por questões Respondidas, Não Respondidas e Marcadas para Revisão (🚩).
  - Salto direto para qualquer questão com um clique.
- **Relatório Completo de Desempenho (Score Report)**:
  - Percentual geral de acertos (nota de corte oficial de 80%).
  - Desempenho segmentado por domínios de competência:
    - *Implementar soluções de IA com o Microsoft Foundry*
    - *Identificar conceitos fundamentais de IA*
  - Filtro para revisar apenas as questões que errou ou acertou.
  - Botão de **Imprimir / Salvar PDF** para os alunos salvarem o comprovante e o gabarito.
  - Botão de **Refazer Simulado** com janela de confirmação para reiniciar uma nova tentativa do zero.
- **🏆 Ranking Geral da Turma (Competição ao Vivo)**:
  - Pódio visual do Top 3 (Ouro 🥇, Prata 🥈 e Bronze 🥉) com coroa e animações.
  - Tabela geral com posições, nomes, acertos, percentual e tempo total gasto.
  - Critério de desempate: **Maior nota (%)** e, em caso de empate, **menor tempo de prova** (mais rápido).
  - Sincronização em nuvem via **Firebase Realtime Database** gratuita (com fallback offline/local automático).
  - Botão no cabeçalho para consulta do placar a qualquer momento.

---

## 💻 Como Executar Localmente

Se preferir rodar o simulado no seu próprio computador para apresentar em sala de aula:

1. Clone o repositório:
   ```bash
   git clone https://github.com/geraldocafe1/simulado_ai_901.git
   cd simulado_ai_901
   ```

2. Inicie um servidor HTTP simples:
   ```bash
   # Com Python 3
   python -m http.server 8080
   ```

3. Abra o navegador em:
   ```
   http://localhost:8080/
   ```

---

## 📁 Estrutura de Arquivos

```
simulado_ai_901/
├── index.html              # Estrutura da interface do simulado
├── style.css               # Design System Microsoft Fluent (cores, dark mode, responsividade)
├── app.js                  # Lógica interativa, cronômetro, navegação e relatórios
├── simulado_data.js        # Dataset completo das 50 questões com gabarito e comentários (módulo web)
├── simulado_data.json      # Dataset em JSON estruturado para integrações externas
├── build_all_data.py       # Script gerador do dataset com validações de gabarito
├── dataset_builder.py      # Módulo com questões 1 a 20
├── dataset_builder_part2.py# Módulo com questões 21 a 50
├── ocr_extractor.py        # Pipeline de extração OCR dos prints oficiais
├── combine_and_export.py   # Utilitário de exportação final
├── .gitignore              # Ignora arquivos temporários e binários pesados
└── README.md               # Este documento
```

---

## 📜 Licença e Créditos

Material didático desenvolvido para preparação e certificação de alunos no exame **Microsoft AI-901**. Conteúdo baseado nos objetivos oficiais do Microsoft Learn e Microsoft Azure AI Foundry.
