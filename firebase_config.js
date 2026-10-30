// ============================================================================
// CONFIGURAÇÃO DO FIREBASE REALTIME DATABASE - RANKING ONLINE DA TURMA
// ============================================================================
// O ranking utiliza o Firebase Realtime Database para sincronizar os dados
// instantaneamente entre todos os alunos em qualquer computador/celular.
//
// 📌 COMO CONECTAR SEU PRÓPRIO PROJETO GRATUITO NO GOOGLE FIREBASE:
// 1. Acesse o console do Firebase: https://console.firebase.google.com/
// 2. Clique em "Adicionar projeto" e dê um nome (ex: "simulado-ai901").
// 3. No menu lateral esquerdo, clique em "Criação" (Build) > "Realtime Database".
// 4. Clique em "Criar banco de dados" (pode escolher qualquer localização).
// 5. Na aba "Regras" (Rules), deixe o acesso liberado para leitura e escrita:
//    {
//      "rules": {
//        ".read": true,
//        ".write": true
//      }
//    }
// 6. Copie a URL do seu banco (exemplo: https://simulado-ai901-default-rtdb.firebaseio.com)
//    e substitua o valor de "databaseURL" abaixo:

const FIREBASE_CONFIG = {
  // URL oficial do seu Firebase Realtime Database configurado
  databaseURL: "https://simulado-ai901-default-rtdb.firebaseio.com",
  // Nome do nó onde as pontuações serão gravadas
  collectionName: "leaderboard_ai901"
};
