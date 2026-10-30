// Simulados Microsoft Exam DP-900: Microsoft Azure Data Fundamentals (106 questões comentadas em PT-BR)
// - DP900_SIMULADO_1_QUESTIONS: 32 questões (Simulado 1 / DP-900_Simulado_02)
// - DP900_SIMULADO_2_QUESTIONS: 42 questões (Simulado 2 / Prova Final DP-900)
// - DP900_SIMULADO_3_QUESTIONS: 32 questões (Simulado 3 / DP-900_Simulado_03)

const DP900_SIMULADO_1_QUESTIONS = [
  {
    "id": 1,
    "type": "single",
    "category": "Identificar considerações sobre dados relacionais no Azure (20-25%)",
    "category_en": "Identify considerations for relational data on Azure (20-25%)",
    "objective": "2.1 Identificar opções de implantação e segurança para bancos de dados SQL no Azure",
    "what_it_tests": "Identificar qual conta possui permissão garantida de conexão a um Banco de Dados SQL do Azure recém-criado.",
    "question": "Quando você cria um banco de dados SQL do Azure, qual conta sempre pode se conectar ao banco de dados?",
    "options": [
      {
        "id": "A",
        "text": "a conta do Azure Active Directory (Azure AD) que criou o banco de dados"
      },
      {
        "id": "B",
        "text": "a conta de login do administrador do servidor do servidor lógico"
      },
      {
        "id": "C",
        "text": "conta sa"
      },
      {
        "id": "D",
        "text": "a conta de administrador do Azure Active Directory (Azure AD)"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "Quando você cria um Banco de Dados SQL do Azure em um servidor lógico, a conta de logon do administrador do servidor (server admin login) do servidor lógico sempre tem permissão para se conectar a qualquer banco de dados hospedado nesse servidor.",
    "explanation_why_correct": "A **conta de login do administrador do servidor do servidor lógico** (`server admin`) é criada durante o provisionamento do servidor lógico do Azure SQL e possui privilégios administrativos completos (`db_owner`) para se conectar a todos os bancos de dados desse servidor.",
    "explanation_why_incorrect": "• **A: Incorreta.** A conta do Azure AD (Microsoft Entra ID) que implantou o recurso no portal não recebe acesso automático ao plano de dados SQL a menos que um administrador do Entra ID seja explicitamente configurado no servidor SQL.\n• **C: Incorreta.** A conta tradicional `sa` do SQL Server local é desabilitada/não utilizada diretamente no Banco de Dados SQL do Azure (PaaS).\n• **D: Incorreta.** O administrador global do Azure AD não tem acesso automático ao banco de dados se a autenticação do Azure AD não tiver sido configurada para o servidor lógico.",
    "additional_reading": [
      {
        "title": "Controlar e conceder acesso ao Banco de Dados SQL do Azure",
        "url": "https://learn.microsoft.com/azure/azure-sql/database/logins-create-manage"
      }
    ]
  },
  {
    "id": 2,
    "type": "single",
    "category": "Identificar considerações sobre dados relacionais no Azure (20-25%)",
    "category_en": "Identify considerations for relational data on Azure (20-25%)",
    "objective": "2.2 Identificar ferramentas para consultar dados relacionais no Azure",
    "what_it_tests": "Selecionar o utilitário de linha de comando usado para executar consultas T-SQL em bancos de dados SQL do Azure.",
    "question": "Qual ferramenta de linha de comando você pode usar para consultar bancos de dados SQL do Azure?",
    "options": [
      {
        "id": "A",
        "text": "CLI do Azure"
      },
      {
        "id": "B",
        "text": "sqlcmd"
      },
      {
        "id": "C",
        "text": "bcp"
      },
      {
        "id": "D",
        "text": "azdata"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "O utilitário sqlcmd permite inserir instruções Transact-SQL, procedimentos do sistema e arquivos de script na linha de comando para consultar o SQL Server e o Banco de Dados SQL do Azure.",
    "explanation_why_correct": "O **`sqlcmd`** é o utilitário oficial de linha de comando para conectar-se ao SQL Server e ao Banco de Dados SQL do Azure e executar consultas Transact-SQL (`SELECT`, `INSERT`, procedimentos armazenados e scripts `.sql`).",
    "explanation_why_incorrect": "• **A (CLI do Azure): Incorreta.** A CLI do Azure (`az sql`) gerencia a infraestrutura do recurso no plano de controle (criar servidor, configurar firewall, dimensionar), mas não executa consultas SQL diretamente nas tabelas.\n• **C (bcp): Incorreta.** O utilitário *Bulk Copy Program* (`bcp`) é focado na importação e exportação em massa de dados para arquivos, e não como ferramenta interativa de consulta ad-hoc.\n• **D (azdata): Incorreta.** Era uma ferramenta voltada à administração de Clusters de Big Data do SQL Server (descontinuados), não para consultas gerais ao Banco de Dados SQL do Azure.",
    "additional_reading": [
      {
        "title": "Utilitário sqlcmd - Conectar ao Banco de Dados SQL do Azure",
        "url": "https://learn.microsoft.com/sql/tools/sqlcmd/sqlcmd-utility"
      }
    ]
  },
  {
    "id": 3,
    "type": "single",
    "category": "Identificar considerações sobre dados relacionais no Azure (20-25%)",
    "category_en": "Identify considerations for relational data on Azure (20-25%)",
    "objective": "2.1 Comparar ofertas de banco de dados relacional PaaS e IaaS no Azure",
    "what_it_tests": "Escolher a oferta PaaS de banco de dados relacional que minimiza a sobrecarga administrativa e de manutenção contínua.",
    "question": "Sua empresa precisa implementar um banco de dados relacional no Azure. A solução deve minimizar a manutenção contínua. Qual serviço do Azure você deve usar?",
    "options": [
      {
        "id": "A",
        "text": "Azure HDInsight"
      },
      {
        "id": "B",
        "text": "Azure Cosmos DB"
      },
      {
        "id": "C",
        "text": "Banco de Dados SQL do Azure"
      },
      {
        "id": "D",
        "text": "SQL Server em máquinas virtuais do Azure"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "O Banco de Dados SQL do Azure é um serviço de banco de dados relacional totalmente gerenciado (PaaS) que automatiza atualizações, aplicação de patches, backups e alta disponibilidade, minimizando a manutenção contínua.",
    "explanation_why_correct": "O **Banco de Dados SQL do Azure** é uma solução de Plataforma como Serviço (**PaaS**) totalmente gerenciada. O Azure cuida automaticamente do sistema operacional, das atualizações do mecanismo SQL, dos backups e da alta disponibilidade, reduzindo ao mínimo a manutenção contínua.",
    "explanation_why_incorrect": "• **A (Azure HDInsight): Incorreta.** É um serviço de análise de big data de código aberto (Hadoop, Spark, Kafka), e não um banco de dados relacional transacional.\n• **B (Azure Cosmos DB): Incorreta.** É um banco de dados NoSQL (não relacional) multimodelo.\n• **D (SQL Server em máquinas virtuais do Azure): Incorreta.** É uma oferta de Infraestrutura como Serviço (IaaS), exigindo maior manutenção contínua do sistema operacional e do software SQL Server.",
    "additional_reading": [
      {
        "title": "O que é o Banco de Dados SQL do Azure?",
        "url": "https://learn.microsoft.com/azure/azure-sql/database/sql-database-paas-overview"
      }
    ]
  },
  {
    "id": 4,
    "type": "single",
    "category": "Descrever os principais conceitos de dados (25-30%)",
    "category_en": "Describe core data concepts (25-30%)",
    "objective": "1.3 Descrever conceitos de bancos de dados relacionais (tabelas, índices, exibições e procedimentos armazenados)",
    "what_it_tests": "Definir o objeto de banco de dados que encapsula um bloco de código SQL executável.",
    "question": "Escolha a opção correta para completar a frase: Um bloco de código que é executado em um banco de dados é chamado ___________________",
    "options": [
      {
        "id": "A",
        "text": "um índice"
      },
      {
        "id": "B",
        "text": "uma tabela"
      },
      {
        "id": "C",
        "text": "um procedimento armazenado"
      },
      {
        "id": "D",
        "text": "uma view."
      }
    ],
    "correct_answer": "C",
    "official_rationale": "Um procedimento armazenado (stored procedure) é um bloco de instruções SQL pré-compilado que é armazenado e executado diretamente no banco de dados.",
    "explanation_why_correct": "Um **procedimento armazenado (*stored procedure*)** é um bloco nomeado de código SQL salvo no banco de dados que pode receber parâmetros, executar lógica de negócios ou modificações de dados e ser invocado repetidamente por aplicativos.",
    "explanation_why_incorrect": "• **A (um índice): Incorreta.** É uma estrutura de busca ordenada para acelerar consultas em tabelas.\n• **B (uma tabela): Incorreta.** É a estrutura de linhas e colunas onde os dados são fisicamente armazenados.\n• **D (uma view): Incorreta.** É uma tabela virtual baseada no conjunto de resultados de uma consulta `SELECT`.",
    "additional_reading": [
      {
        "title": "Procedimentos Armazenados (Mecanismo de Banco de Dados)",
        "url": "https://learn.microsoft.com/sql/relational-databases/stored-procedures/stored-procedures-database-engine"
      }
    ]
  },
  {
    "id": 5,
    "type": "single",
    "category": "Descrever uma carga de trabalho de análise no Azure (25-30%)",
    "category_en": "Describe an analytics workload on Azure (25-30%)",
    "objective": "4.3 Descrever categorias de análise de dados (descritiva, diagnóstica, preditiva, prescritiva e cognitiva)",
    "what_it_tests": "Compreender o propósito da análise descritiva em cargas de trabalho analíticas.",
    "question": "Escolha a opção correta para completar a frase: A análise descritiva informa ___________________",
    "options": [
      {
        "id": "A",
        "text": "o que é mais provável de ocorrer no futuro."
      },
      {
        "id": "B",
        "text": "quais ações você pode executar para afetar os resultados."
      },
      {
        "id": "C",
        "text": "o que ocorreu no passado."
      },
      {
        "id": "D",
        "text": "por que algo ocorreu no passado"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "A análise descritiva responde à pergunta 'O que aconteceu no passado?' resumindo dados históricos em relatórios e indicadores.",
    "explanation_why_correct": "A **análise descritiva** agrega e resume dados históricos para informar **o que ocorreu no passado** (por exemplo, relatórios de vendas mensais ou total de pedidos concluídos no último trimestre).",
    "explanation_why_incorrect": "• **A: Incorreta.** Informar o que é mais provável de ocorrer no futuro é função da análise **preditiva**.\n• **B: Incorreta.** Recomendar ações para atingir resultados desejados é função da análise **prescritiva**.\n• **D: Incorreta.** Explicar por que algo ocorreu no passado é função da análise **diagnóstica**.",
    "additional_reading": [
      {
        "title": "Explorar conceitos de análise de dados no Microsoft Learn",
        "url": "https://learn.microsoft.com/training/modules/explore-concepts-of-data-analytics/"
      }
    ]
  },
  {
    "id": 6,
    "type": "drag_drop",
    "category": "Descrever considerações sobre o trabalho com dados não relacionais no Azure (15-20%)",
    "category_en": "Describe considerations for working with non-relational data on Azure (15-20%)",
    "objective": "3.1 Identificar tipos de dados não relacionais e seus serviços correspondentes no Azure",
    "what_it_tests": "Associar dados de chave/valor, arquivos binários de imagem e grafos de relacionamento aos serviços corretos do Azure.",
    "question": "Corresponda os tipos de dados aos serviços de dados apropriados do Azure. Para responder, arraste o tipo de dados apropriado da coluna à esquerda para seu serviço à direita. Cada tipo de dados pode ser usado uma vez.",
    "drag_drop_mode": "match",
    "values": [
      {
        "id": "V1",
        "text": "pares chave/valor"
      },
      {
        "id": "V2",
        "text": "arquivos de imagem"
      },
      {
        "id": "V3",
        "text": "Relacionamentos entre funcionários"
      }
    ],
    "targets": [
      {
        "id": "target_1",
        "label": "Armazenamento de Blobs do Azure",
        "prompt": "Armazenamento de Blobs do Azure:"
      },
      {
        "id": "target_2",
        "label": "API Gremlin do Azure Cosmos DB",
        "prompt": "API Gremlin do Azure Cosmos DB:"
      },
      {
        "id": "target_3",
        "label": "Armazenamento de Tabelas do Azure",
        "prompt": "Armazenamento de Tabelas do Azure:"
      }
    ],
    "correct_answer": {
      "target_1": "V2",
      "target_2": "V3",
      "target_3": "V1"
    },
    "official_rationale": "O Armazenamento de Blobs do Azure armazena objetos binários não estruturados como arquivos de imagem; a API Gremlin do Azure Cosmos DB armazena grafos que modelam relacionamentos entre entidades (como funcionários); e o Armazenamento de Tabelas do Azure armazena conjuntos de pares chave/valor.",
    "explanation_why_correct": "• **Armazenamento de Blobs do Azure → `arquivos de imagem`:** Ideal para objetos binários grandes e dados não estruturados (imagens, vídeos, PDFs, backups).\n• **API Gremlin do Azure Cosmos DB → `Relacionamentos entre funcionários`:** Banco de dados de grafos (vértices e arestas) projetado para modelar e consultar redes de relacionamentos complexos.\n• **Armazenamento de Tabelas do Azure → `pares chave/valor`:** Armazena entidades identificadas por chave de partição e chave de linha associadas a conjuntos de propriedades chave/valor.",
    "explanation_why_incorrect": "Certifique-se de não confundir o Armazenamento de Tabelas (chave/valor NoSQL) com bancos de grafos (Gremlin) ou armazenamento de objetos binários (Blobs).",
    "additional_reading": [
      {
        "title": "Explorar dados não relacionais no Azure",
        "url": "https://learn.microsoft.com/training/modules/explore-non-relational-data-stores-azure/"
      }
    ]
  },
  {
    "id": 7,
    "type": "single",
    "category": "Identificar considerações sobre dados relacionais no Azure (20-25%)",
    "category_en": "Identify considerations for relational data on Azure (20-25%)",
    "objective": "2.2 Identificar instruções SQL de manipulação (DML), definição (DDL) e controle (DCL)",
    "what_it_tests": "Identificar qual comando pertence à Linguagem de Manipulação de Dados (DML).",
    "question": "Qual declaração é um exemplo de linguagem de manipulação de dados (DML)?",
    "options": [
      {
        "id": "A",
        "text": "Concessão"
      },
      {
        "id": "B",
        "text": "Inserir"
      },
      {
        "id": "C",
        "text": "Desativar"
      },
      {
        "id": "D",
        "text": "Revogar"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "A Linguagem de Manipulação de Dados (DML) inclui os comandos SELECT, INSERT (Inserir), UPDATE e DELETE, usados para consultar e modificar linhas em tabelas.",
    "explanation_why_correct": "**`Inserir` (`INSERT`)** é uma instrução **DML (*Data Manipulation Language*)**, pois adiciona novas linhas de dados a uma tabela existente.",
    "explanation_why_incorrect": "• **A (`Concessão` / `GRANT`): Incorreta.** Pertence à DCL (*Data Control Language*), usada para conceder permissões.\n• **C (`Desativar` / `DISABLE`): Incorreta.** É usada em comandos administrativos/DDL para desabilitar índices ou gatilhos.\n• **D (`Revogar` / `REVOKE`): Incorreta.** Pertence à DCL (*Data Control Language*), usada para remover permissões.",
    "additional_reading": [
      {
        "title": "Instruções Transact-SQL - DML e DDL",
        "url": "https://learn.microsoft.com/sql/t-sql/statements/statements"
      }
    ]
  },
  {
    "id": 8,
    "type": "single",
    "category": "Identificar considerações sobre dados relacionais no Azure (20-25%)",
    "category_en": "Identify considerations for relational data on Azure (20-25%)",
    "objective": "2.2 Identificar instruções SQL de definição de dados (DDL) e manipulação de dados (DML)",
    "what_it_tests": "Distinguir comandos DDL (CREATE, ALTER, DROP) de comandos DML (SELECT, INSERT, UPDATE, DELETE).",
    "question": "Qual declaração é um exemplo de linguagem de definição de dados (DDL)?",
    "options": [
      {
        "id": "A",
        "text": "SELECT"
      },
      {
        "id": "B",
        "text": "DELETE"
      },
      {
        "id": "C",
        "text": "DROP"
      },
      {
        "id": "D",
        "text": "INSERT"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "DROP faz parte da Linguagem de Definição de Dados (DDL) porque remove a estrutura de objetos do banco de dados (como tabelas, exibições ou índices).",
    "explanation_why_correct": "**`DROP`** é um comando **DDL (*Data Definition Language*)** utilizado para remover completamente objetos estruturais do banco de dados, como tabelas (`DROP TABLE`) ou exibições (`DROP VIEW`). Outros exemplos de DDL são `CREATE`, `ALTER` e `TRUNCATE`.",
    "explanation_why_incorrect": "• **A (`SELECT`): Incorreta.** É uma instrução DML/DQL usada para consultar linhas de uma tabela.\n• **B (`DELETE`): Incorreta.** É uma instrução DML usada para remover linhas específicas de uma tabela sem apagar a estrutura da tabela.\n• **D (`INSERT`): Incorreta.** É uma instrução DML usada para adicionar novas linhas de dados.",
    "additional_reading": [
      {
        "title": "Instruções DDL no Transact-SQL",
        "url": "https://learn.microsoft.com/sql/t-sql/statements/create-table-transact-sql"
      }
    ]
  },
  {
    "id": 9,
    "type": "single",
    "category": "Descrever considerações sobre o trabalho com dados não relacionais no Azure (15-20%)",
    "category_en": "Describe considerations for working with non-relational data on Azure (15-20%)",
    "objective": "1.2 Descrever características de armazenamentos de dados não relacionais (chave/valor)",
    "what_it_tests": "Compreender o caso de uso principal de bancos de dados de chave/valor.",
    "question": "Escolha a opção correta para completar a frase: Um armazenamento de dados de chave/valor é otimizado para ___________________",
    "options": [
      {
        "id": "A",
        "text": "transações"
      },
      {
        "id": "B",
        "text": "impor restrições"
      },
      {
        "id": "C",
        "text": "junção de tabela"
      },
      {
        "id": "D",
        "text": "pesquisas simples"
      }
    ],
    "correct_answer": "D",
    "official_rationale": "Armazenamentos de chave/valor associam cada valor a uma chave exclusiva, sendo altamente otimizados para pesquisas simples (simple lookups) de leitura e gravação rápidas por chave.",
    "explanation_why_correct": "Um armazenamento de dados de **chave/valor** é otimizado para **pesquisas simples (*simple lookups*)** de altíssima velocidade baseadas na chave exclusiva do item, sem sobrecarga de junções complexas ou esquemas rígidos.",
    "explanation_why_incorrect": "• **A (transações): Incorreta.** Transações ACID complexas entre múltiplas tabelas são características de bancos de dados relacionais (OLTP).\n• **B (impor restrições): Incorreta.** Restrições de integridade referencial (chaves estrangeiras) são típicas de bancos relacionais.\n• **C (junção de tabela): Incorreta.** Armazenamentos de chave/valor não suportam operações de `JOIN` entre tabelas.",
    "additional_reading": [
      {
        "title": "Escolher um armazenamento de dados de chave/valor no Azure",
        "url": "https://learn.microsoft.com/azure/architecture/guide/technology-choices/data-store-overview"
      }
    ]
  },
  {
    "id": 10,
    "type": "single",
    "category": "Descrever considerações sobre o trabalho com dados não relacionais no Azure (15-20%)",
    "category_en": "Describe considerations for working with non-relational data on Azure (15-20%)",
    "objective": "1.2 Descrever bancos de dados de grafos e modelos de dados não relacionais",
    "what_it_tests": "Identificar o tipo de banco de dados NoSQL que modela entidades (nós/vértices) e seus relacionamentos (arestas) nativamente.",
    "question": "Escolha a opção correta para completar a frase: ___________________ suportam nativamente a análise de relacionamentos entre entidades.",
    "options": [
      {
        "id": "A",
        "text": "Bancos de dados de família de colunas"
      },
      {
        "id": "B",
        "text": "Bancos de dados de gráficos"
      },
      {
        "id": "C",
        "text": "Bancos de dados de documentos"
      },
      {
        "id": "D",
        "text": "Armazenamentos de valores-chave"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "Bancos de dados de grafos (graph databases) armazenam entidades como nós (vértices) e os relacionamentos entre elas como arestas, suportando nativamente consultas de travessia e análise de relacionamentos.",
    "explanation_why_correct": "**Bancos de dados de gráficos (*graph databases*)** (como a API Apache Gremlin do Azure Cosmos DB) armazenam nós (entidades) e arestas (relações direcionadas), permitindo analisar redes complexas de relacionamentos com eficiência.",
    "explanation_why_incorrect": "• **A (Bancos de dados de família de colunas): Incorreta.** Organizam dados em linhas e grupos de colunas (ex.: Cassandra), sem foco em travessia de grafos.\n• **C (Bancos de dados de documentos): Incorreta.** Armazenam documentos autocontidos (ex.: JSON), não sendo otimizados para grafos altamente interconectados.\n• **D (Armazenamentos de valores-chave): Incorreta.** Associam apenas chaves a valores opacos, sem modelar relações entre itens.",
    "additional_reading": [
      {
        "title": "Introdução à API Gremlin do Azure Cosmos DB (Banco de dados de grafos)",
        "url": "https://learn.microsoft.com/azure/cosmos-db/gremlin/introduction"
      }
    ]
  },
  {
    "id": 11,
    "type": "single",
    "category": "Descrever os principais conceitos de dados (25-30%)",
    "category_en": "Describe core data concepts (25-30%)",
    "objective": "1.3 Descrever normalização e integridade em bancos de dados relacionais",
    "what_it_tests": "Verificar se o candidato compreende que a normalização reduz a duplicação/redundância de dados.",
    "question": "A afirmação a seguir é verdadeira ou falso? A normalização de um banco de dados reduz a redundância de dados.",
    "options": [
      {
        "id": "A",
        "text": "Falso"
      },
      {
        "id": "B",
        "text": "Verdadeiro"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "A normalização é o processo de organização das tabelas e colunas em um banco de dados relacional para reduzir a redundância de dados e melhorar a integridade dos dados.",
    "explanation_why_correct": "**Verdadeiro.** A **normalização** divide os dados em tabelas temáticas relacionadas por chaves primárias e estrangeiras justamente para **reduzir a redundância (duplicação) de dados** e evitar anomalias de atualização.",
    "explanation_why_incorrect": "• **A (Falso): Incorreta.** A redução de redundância é o objetivo primordial do processo de normalização em bancos OLTP.",
    "additional_reading": [
      {
        "title": "Explorar conceitos de bancos de dados relacionais - Normalização",
        "url": "https://learn.microsoft.com/training/modules/explore-relational-data-offerings/"
      }
    ]
  },
  {
    "id": 12,
    "type": "single",
    "category": "Descrever os principais conceitos de dados (25-30%)",
    "category_en": "Describe core data concepts (25-30%)",
    "objective": "1.3 Descrever estruturas de bancos de dados relacionais (tabelas, exibições e índices)",
    "what_it_tests": "Identificar a afirmação incorreta a respeito de índices, tabelas e exibições em bancos de dados relacionais.",
    "question": "Qual das alternativas não está correta?",
    "options": [
      {
        "id": "A",
        "text": "Índices em um banco de dados relacional descrevem os tipos de dados em uma tabela"
      },
      {
        "id": "B",
        "text": "As tabelas de banco de dados relacional contêm colunas e linhas"
      },
      {
        "id": "C",
        "text": "Uma visão de banco de dados é uma tabela virtual cujo conteúdo é definido por uma consulta"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Os tipos de dados em uma tabela são definidos pelo esquema das colunas da tabela, e não pelos índices. Um índice é uma estrutura auxiliar que acelera a localização e recuperação de linhas.",
    "explanation_why_correct": "A alternativa **A** é a que **não está correta**: índices **não** descrevem os tipos de dados de uma tabela (quem define os tipos de dados é a definição das colunas no esquema da tabela). Os índices servem para acelerar consultas (`SELECT`) evitando varreduras completas de tabela (*table scans*).",
    "explanation_why_incorrect": "• **B: Está correta.** Tabelas relacionais são formadas por linhas (entidades/registros) e colunas (atributos).\n• **C: Está correta.** Uma *view* (visão/exibição) é uma tabela virtual definida por uma consulta `SELECT` salva.",
    "additional_reading": [
      {
        "title": "Guia de arquitetura e design de índices do SQL Server",
        "url": "https://learn.microsoft.com/sql/relational-databases/sql-server-index-design-guide"
      }
    ]
  },
  {
    "id": 13,
    "type": "single",
    "category": "Identificar considerações sobre dados relacionais no Azure (20-25%)",
    "category_en": "Identify considerations for relational data on Azure (20-25%)",
    "objective": "2.1 Comparar modelos de hospedagem IaaS e PaaS para bancos de dados relacionais",
    "what_it_tests": "Classificar a execução do PostgreSQL instalado em Máquinas Virtuais do Azure dentro dos modelos de serviço em nuvem.",
    "question": "Você planeja implantar um banco de dados PostgreSQL no Azure. Qual modelo de hospedagem corresponde às opções de implantação disponíveis? PostgreSQL em VMs do Azure:",
    "options": [
      {
        "id": "A",
        "text": "Infraestrutura como serviço (IaaS)"
      },
      {
        "id": "B",
        "text": "Software como serviço (SaaS)"
      },
      {
        "id": "C",
        "text": "Plataforma como serviço (PaaS)"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Executar um sistema de gerenciamento de banco de dados (como PostgreSQL ou SQL Server) dentro de Máquinas Virtuais do Azure corresponde ao modelo de Infraestrutura como Serviço (IaaS).",
    "explanation_why_correct": "Implantar o **PostgreSQL em VMs do Azure** utiliza o modelo de **Infraestrutura como Serviço (IaaS)**: a Microsoft gerencia o hardware físico e a virtualização, enquanto você gerencia o sistema operacional da máquina virtual e a instalação/manutenção do PostgreSQL.",
    "explanation_why_incorrect": "• **B (SaaS): Incorreta.** Software como Serviço entrega um aplicativo final pronto para o usuário (ex.: Microsoft 365).\n• **C (PaaS): Incorreta.** O serviço PaaS gerenciado equivalente seria o *Banco de Dados do Azure para PostgreSQL* (Servidor Flexível), e não PostgreSQL em VMs.",
    "additional_reading": [
      {
        "title": "Banco de Dados do Azure para PostgreSQL vs PostgreSQL em VMs",
        "url": "https://learn.microsoft.com/azure/postgresql/flexible-server/overview"
      }
    ]
  },
  {
    "id": 14,
    "type": "single",
    "category": "Descrever considerações sobre o trabalho com dados não relacionais no Azure (15-20%)",
    "category_en": "Describe considerations for working with non-relational data on Azure (15-20%)",
    "objective": "1.2 Descrever bancos de dados de documentos e dados semiestruturados JSON",
    "what_it_tests": "Identificar o tipo de armazenamento NoSQL que guarda entidades autocontidas como documentos JSON com esquema flexível.",
    "question": "Que tipo de armazenamento de dados não relacional oferece suporte a um esquema flexível, armazena dados como arquivos JSON e armazena todos os dados de uma entidade no mesmo documento?",
    "options": [
      {
        "id": "A",
        "text": "gráfico"
      },
      {
        "id": "B",
        "text": "documento"
      },
      {
        "id": "C",
        "text": "série temporal"
      },
      {
        "id": "D",
        "text": "colunar"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "Um banco de dados de documentos armazena dados semiestruturados (geralmente no formato JSON) onde todos os atributos de uma entidade ficam no mesmo documento e cada documento pode ter um esquema flexível.",
    "explanation_why_correct": "Um armazenamento de dados de **documento** (como o Azure Cosmos DB for NoSQL / MongoDB) oferece esquema flexível e armazena todos os dados de uma entidade juntos em um único documento estruturado em **JSON** (ou BSON).",
    "explanation_why_incorrect": "• **A (gráfico): Incorreta.** Armazena entidades como vértices e relacionamentos como arestas.\n• **C (série temporal): Incorreta.** Otimizado para fluxos sequenciais de leituras carimbadas por data/hora.\n• **D (colunar): Incorreta.** Organiza dados em famílias de colunas ou armazenamento colunar analítico.",
    "additional_reading": [
      {
        "title": "Dados não relacionais e NoSQL - Bancos de dados de documentos",
        "url": "https://learn.microsoft.com/azure/architecture/data-guide/big-data/non-relational-data"
      }
    ]
  },
  {
    "id": 15,
    "type": "single",
    "category": "Identificar considerações sobre dados relacionais no Azure (20-25%)",
    "category_en": "Identify considerations for relational data on Azure (20-25%)",
    "objective": "2.2 Identificar ferramentas de gerenciamento e consulta (SSMS vs Azure Data Studio)",
    "what_it_tests": "Identificar a diferença entre o SQL Server Management Studio (SSMS) e o Azure Data Studio quanto a suporte multiplataforma e SQL Notebooks.",
    "question": "Qual das alternativas não está correta?",
    "options": [
      {
        "id": "A",
        "text": "O Microsoft SQL Server Management Studio (SSMS) permite que os usuários criem e usem blocos de anotações SQL."
      },
      {
        "id": "B",
        "text": "O Azure Data Studio pode ser usado para consultar um banco de dados SQL do Azure de um dispositivo que executa o macOS."
      },
      {
        "id": "C",
        "text": "O Azure Data Studio pode ser usado para restaurar um banco de dados."
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Os blocos de anotações SQL (SQL Notebooks / Jupyter Notebooks) são um recurso do Azure Data Studio, e não do SQL Server Management Studio (SSMS).",
    "explanation_why_correct": "A alternativa **A** **não está correta**: quem oferece suporte nativo para criar e executar **blocos de anotações SQL (*SQL Notebooks*)** é o **Azure Data Studio**, e não o SQL Server Management Studio (SSMS).",
    "explanation_why_incorrect": "• **B: Está correta.** O Azure Data Studio é multiplataforma e roda em Windows, **macOS** e Linux (enquanto o SSMS roda apenas no Windows).\n• **C: Está correta.** O Azure Data Studio permite fazer backup e restaurar bancos de dados SQL.",
    "additional_reading": [
      {
        "title": "O que é o Azure Data Studio e comparação com o SSMS",
        "url": "https://learn.microsoft.com/sql/azure-data-studio/what-is-azure-data-studio"
      }
    ]
  },
  {
    "id": 16,
    "type": "single",
    "category": "Descrever uma carga de trabalho de análise no Azure (25-30%)",
    "category_en": "Describe an analytics workload on Azure (25-30%)",
    "objective": "4.2 Descrever o Azure Synapse Analytics e ferramentas compatíveis",
    "what_it_tests": "Confirmar que o SQL Server Management Studio (SSMS) pode se conectar e consultar pools de SQL do Azure Synapse Analytics.",
    "question": "A afirmação a seguir é verdadeira ou falso? Você pode usar o Microsoft SQL Server Management Studio (SSMS) para consultar um data warehouse do Azure Synapse Analytics.",
    "options": [
      {
        "id": "A",
        "text": "Falso"
      },
      {
        "id": "B",
        "text": "Verdadeiro"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "Você pode se conectar a pools de SQL dedicados e sem servidor do Azure Synapse Analytics usando ferramentas cliente familiares, incluindo o SQL Server Management Studio (SSMS) e o Azure Data Studio.",
    "explanation_why_correct": "**Verdadeiro.** O **SQL Server Management Studio (SSMS)** pode se conectar diretamente ao endpoint SQL de um data warehouse (pool de SQL dedicado ou serverless) do **Azure Synapse Analytics** para executar consultas T-SQL.",
    "explanation_why_incorrect": "• **A (Falso): Incorreta.** Como o Azure Synapse Analytics expõe endpoints compatíveis com T-SQL/TDS, o SSMS é totalmente suportado.",
    "additional_reading": [
      {
        "title": "Consultar o Azure Synapse Analytics usando o SSMS",
        "url": "https://learn.microsoft.com/azure/synapse-analytics/sql-data-warehouse/sql-data-warehouse-query-ssms"
      }
    ]
  },
  {
    "id": 17,
    "type": "single",
    "category": "Identificar considerações sobre dados relacionais no Azure (20-25%)",
    "category_en": "Identify considerations for relational data on Azure (20-25%)",
    "objective": "2.1 Selecionar o serviço de banco de dados relacional adequado para cargas de trabalho OLTP",
    "what_it_tests": "Distinguir entre serviços relacionais OLTP (Banco de Dados SQL do Azure) e serviços analíticos OLAP ou NoSQL.",
    "question": "Você está implantando um aplicativo de software como serviço (SaaS) que requer um banco de dados relacional para OLTP (Online Transaction Processing). Qual serviço do Azure você deve usar para dar suporte ao aplicativo?",
    "options": [
      {
        "id": "A",
        "text": "Azure HDInsight"
      },
      {
        "id": "B",
        "text": "Azure Synapse Analytics"
      },
      {
        "id": "C",
        "text": "Banco de Dados SQL do Azure"
      },
      {
        "id": "D",
        "text": "Azure Cosmos DB"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "O Banco de Dados SQL do Azure é um serviço de banco de dados relacional PaaS projetado especificamente para cargas de trabalho de processamento de transações online (OLTP), como aplicativos SaaS.",
    "explanation_why_correct": "O **Banco de Dados SQL do Azure** é o banco de dados relacional PaaS ideal para dar suporte a aplicativos **OLTP (*Online Transaction Processing*)** e arquiteturas SaaS, oferecendo garantias ACID, escalabilidade elástica e baixa latência transacional.",
    "explanation_why_incorrect": "• **A (Azure HDInsight): Incorreta.** É voltado para processamento analítico de big data com clusters open-source.\n• **B (Azure Synapse Analytics): Incorreta.** É voltado para cargas de trabalho analíticas (**OLAP** / Data Warehousing), e não OLTP.\n• **D (Azure Cosmos DB): Incorreta.** É um banco de dados não relacional (NoSQL).",
    "additional_reading": [
      {
        "title": "Processamento de transações online (OLTP) no Azure",
        "url": "https://learn.microsoft.com/azure/architecture/data-guide/relational-data/online-transaction-processing"
      }
    ]
  },
  {
    "id": 18,
    "type": "single",
    "category": "Descrever uma carga de trabalho de análise no Azure (25-30%)",
    "category_en": "Describe an analytics workload on Azure (25-30%)",
    "objective": "4.1 Comparar pipelines de ingestão ETL (Extract, Transform, Load) e ELT (Extract, Load, Transform)",
    "what_it_tests": "Reconhecer que no modelo ETL os dados são transformados e processados antes de serem carregados no armazenamento de destino.",
    "question": "Escolha a opção correta para completar a frase: Um processo de extração, transformação e carregamento (ETL) requer ___________________",
    "options": [
      {
        "id": "A",
        "text": "um armazenamento de dados de destino poderoso o suficiente para transformar dados."
      },
      {
        "id": "B",
        "text": "dados que são totalmente processados ​​antes de serem carregados no armazenamento de dados de destino."
      },
      {
        "id": "C",
        "text": "que o destino de dados seja um banco de dados relacional."
      }
    ],
    "correct_answer": "B",
    "official_rationale": "Em um processo de Extração, Transformação e Carregamento (ETL), os dados brutos são extraídos da origem e totalmente transformados/processados em um mecanismo intermediário antes de serem carregados no destino.",
    "explanation_why_correct": "No paradigma **ETL (*Extract, Transform, Load*)**, a etapa de **Transformação (T)** ocorre **antes** do **Carregamento (L)**: portanto, requer **dados que são totalmente processados antes de serem carregados no armazenamento de dados de destino**.",
    "explanation_why_incorrect": "• **A: Incorreta.** Usar o poder do armazenamento de destino para transformar os dados após a carga é a definição de **ELT** (*Extract, Load, Transform*).\n• **C: Incorreta.** O destino de um pipeline ETL pode ser um data warehouse, um data lake ou até arquivos, não precisando obrigatoriamente ser um banco relacional tradicional.",
    "additional_reading": [
      {
        "title": "Extração, transformação e carregamento (ETL) vs ELT",
        "url": "https://learn.microsoft.com/azure/architecture/data-guide/relational-data/etl"
      }
    ]
  },
  {
    "id": 19,
    "type": "single",
    "category": "Descrever considerações sobre o trabalho com dados não relacionais no Azure (15-20%)",
    "category_en": "Describe considerations for working with non-relational data on Azure (15-20%)",
    "objective": "3.1 Configurar o Azure Data Lake Storage Gen2 em uma conta de armazenamento do Azure",
    "what_it_tests": "Identificar a opção de configuração (namespace hierárquico) que habilita diretórios reais, operações atômicas de pasta e ACLs POSIX.",
    "question": "Escolha a opção correta para completar a frase: Para configurar uma conta de armazenamento do Azure para dar suporte à segurança no nível da pasta e à manipulação de diretório atômico, ___________________",
    "options": [
      {
        "id": "A",
        "text": "habilite o namespace hierárquico."
      },
      {
        "id": "B",
        "text": "defina Tipo de conta para Armazenamento de Blobs."
      },
      {
        "id": "C",
        "text": "definir Replicação para armazenamento com redundância geográfica com acesso de leitura (RA-GRS)"
      },
      {
        "id": "D",
        "text": "defina Desempenho como Premium."
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Habilitar o namespace hierárquico (Hierarchical Namespace) em uma conta de Armazenamento do Azure ativa os recursos do Azure Data Lake Storage Gen2, incluindo manipulação atômica de diretórios e segurança em nível de pasta/arquivo (ACLs POSIX).",
    "explanation_why_correct": "Ao **habilitar o namespace hierárquico (*Hierarchical Namespace*)**, a conta de armazenamento passa a oferecer o **Azure Data Lake Storage Gen2**, que organiza objetos em uma hierarquia real de diretórios/pastas, permitindo **manipulação atômica de diretórios** e **segurança no nível de pasta e arquivo (ACLs POSIX)**.",
    "explanation_why_incorrect": "• **B: Incorreta.** O tipo de conta recomendado é *StorageV2 (uso geral v2)* com namespace hierárquico habilitado.\n• **C: Incorreta.** RA-GRS define apenas a redundância geográfica de replicação.\n• **D: Incorreta.** O nível Premium define o uso de SSDs para baixa latência, mas não ativa pastas reais nem ACLs sem o namespace hierárquico.",
    "additional_reading": [
      {
        "title": "Introdução ao Azure Data Lake Storage Gen2 e Namespace Hierárquico",
        "url": "https://learn.microsoft.com/azure/storage/blobs/data-lake-storage-introduction"
      }
    ]
  },
  {
    "id": 20,
    "type": "single",
    "category": "Identificar considerações sobre dados relacionais no Azure (20-25%)",
    "category_en": "Identify considerations for relational data on Azure (20-25%)",
    "objective": "2.1 Configurar segurança de rede e firewalls para o Banco de Dados SQL do Azure",
    "what_it_tests": "Diagnosticar bloqueio de conexão ao Banco de Dados SQL do Azure após mudança do endereço IP público do cliente.",
    "question": "Você tem um banco de dados SQL do Azure que você acessa diretamente da Internet. Você alterou recentemente seu endereço IP externo. Após alterar o endereço IP, você não poderá mais acessar o banco de dados. Você pode se conectar a outros recursos no Azure. Qual é uma possível causa do problema?",
    "options": [
      {
        "id": "A",
        "text": "Protocolo de configuração de host dinâmico (DHCP)"
      },
      {
        "id": "B",
        "text": "Serviço de Nome de Domínio (DNS)"
      },
      {
        "id": "C",
        "text": "controle de acesso baseado em função (RBAC)"
      },
      {
        "id": "D",
        "text": "um firewall em nível de banco de dados"
      }
    ],
    "correct_answer": "D",
    "official_rationale": "O Banco de Dados SQL do Azure utiliza regras de firewall baseadas em endereço IP (no nível do servidor e/ou no nível do banco de dados) que bloqueiam conexões provenientes de IPs externos não autorizados.",
    "explanation_why_correct": "O Banco de Dados SQL do Azure protege o acesso externo por meio de **regras de firewall baseadas em endereço IP** (no nível do servidor lógico e/ou **um firewall em nível de banco de dados**). Quando seu endereço IP público muda, o novo IP deixa de corresponder à regra liberada no firewall SQL e a conexão é recusada.",
    "explanation_why_incorrect": "• **A (DHCP): Incorreta.** Como você consegue se conectar a outros recursos no Azure, sua rede local e endereço IP estão funcionando normalmente.\n• **B (DNS): Incorreta.** O nome do servidor SQL continua resolvendo normalmente.\n• **C (RBAC): Incorreta.** O RBAC do Azure gerencia permissões baseadas na identidade do usuário no portal, e não no endereço IP de origem.",
    "additional_reading": [
      {
        "title": "Regras de firewall de IP do Banco de Dados SQL do Azure",
        "url": "https://learn.microsoft.com/azure/azure-sql/database/firewall-configure"
      }
    ]
  },
  {
    "id": 21,
    "type": "single",
    "category": "Descrever os principais conceitos de dados (25-30%)",
    "category_en": "Describe core data concepts (25-30%)",
    "objective": "1.3 Identificar casos de uso adequados para bancos de dados relacionais",
    "what_it_tests": "Associar bancos de dados relacionais a cargas de trabalho com forte consistência e alto volume de gravações transacionais (ACID).",
    "question": "Escolha a opção correta para completar a frase: Um banco de dados relacional é apropriado para cenários que envolvem um alto volume de ___________________",
    "options": [
      {
        "id": "A",
        "text": "mudanças nos relacionamentos entre entidades"
      },
      {
        "id": "B",
        "text": "gravações distribuídas geograficamente"
      },
      {
        "id": "C",
        "text": "gravações transacionais"
      },
      {
        "id": "D",
        "text": "gravações que têm estruturas de dados variadas"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "Bancos de dados relacionais implementam propriedades ACID e são ideais para sistemas OLTP que processam um alto volume de gravações transacionais com forte integridade de dados.",
    "explanation_why_correct": "Um banco de dados relacional é projetado para cargas de trabalho **OLTP** que exigem conformidade **ACID** em um alto volume de **gravações transacionais** (como pedidos, pagamentos e movimentações bancárias).",
    "explanation_why_incorrect": "• **A: Incorreta.** Mudanças dinâmicas e frequentes em redes de relacionamentos são mais bem atendidas por bancos de dados de grafos.\n• **B: Incorreta.** Gravações distribuídas geograficamente em múltiplas regiões (multi-master) são um ponto forte do Azure Cosmos DB (NoSQL).\n• **D: Incorreta.** Estruturas de dados variadas (sem esquema fixo) são indicadas para bancos de documentos NoSQL.",
    "additional_reading": [
      {
        "title": "Quando usar um banco de dados relacional (OLTP)",
        "url": "https://learn.microsoft.com/azure/architecture/data-guide/relational-data/online-transaction-processing"
      }
    ]
  },
  {
    "id": 22,
    "type": "multi",
    "category": "Descrever os principais conceitos de dados (25-30%)",
    "category_en": "Describe core data concepts (25-30%)",
    "objective": "1.1 Comparar processamento de dados em lote (batch) e em tempo real (streaming)",
    "what_it_tests": "Identificar as duas principais características do processamento de fluxos de dados em tempo real.",
    "question": "Quais são as duas características do processamento de dados em tempo real?",
    "options": [
      {
        "id": "A",
        "text": "Alta latência é aceitável"
      },
      {
        "id": "B",
        "text": "Os dados são processados ​​periodicamente"
      },
      {
        "id": "C",
        "text": "Os dados são processados ​​à medida que são criados"
      },
      {
        "id": "D",
        "text": "Espera-se baixa latência"
      }
    ],
    "correct_answer": [
      "C",
      "D"
    ],
    "official_rationale": "No processamento em tempo real (streaming), cada evento de dado é processado continuamente à medida que é criado, e espera-se baixa latência (geralmente milissegundos ou segundos).",
    "explanation_why_correct": "• **C (Correta):** No processamento em tempo real, **os dados são processados à medida que são criados** (evento por evento ou em micro-janelas contínuas), sem aguardar o acúmulo de grandes lotes.\n• **D (Correta):** **Espera-se baixa latência**, permitindo respostas e alertas imediatos em questão de segundos ou milissegundos.",
    "explanation_why_incorrect": "• **A (Incorreta):** Alta latência (minutos ou horas) é aceitável apenas no processamento em **lote (*batch*)**.\n• **B (Incorreta):** Processar dados periodicamente em intervalos agendados é característica do processamento em **lote (*batch*)**.",
    "additional_reading": [
      {
        "title": "Processamento de fluxo (Stream Processing) vs Processamento em lote",
        "url": "https://learn.microsoft.com/azure/architecture/data-guide/big-data/real-time-processing"
      }
    ]
  },
  {
    "id": 23,
    "type": "single",
    "category": "Descrever os principais conceitos de dados (25-30%)",
    "category_en": "Describe core data concepts (25-30%)",
    "objective": "1.1 Diferenciar cargas de trabalho de dados em lote (batch) e transmissão (streaming)",
    "what_it_tests": "Classificar a ingestão contínua de milhares de eventos de compras online por segundo em tempo real como transmissão (streaming).",
    "question": "Podemos considerar que: Milhares de conjuntos de dados por segundo para compras online serão carregados em um data warehouse em tempo real.",
    "options": [
      {
        "id": "A",
        "text": "é uma transmissão"
      },
      {
        "id": "B",
        "text": "é um lote"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Dados gerados continuamente aos milhares por segundo e carregados em tempo real configuram uma carga de trabalho de transmissão (streaming).",
    "explanation_why_correct": "Como milhares de conjuntos de dados por segundo estão sendo recebidos e carregados continuamente **em tempo real**, trata-se de **uma transmissão (*streaming*)**.",
    "explanation_why_incorrect": "• **B (é um lote): Incorreta.** O processamento em lote (*batch*) coleta eventos ao longo de um período e os carrega juntos em intervalos programados (ex.: a cada hora ou toda meia-noite).",
    "additional_reading": [
      {
        "title": "Diferenças entre dados em lote e dados de streaming",
        "url": "https://learn.microsoft.com/training/modules/explore-core-data-concepts/"
      }
    ]
  },
  {
    "id": 24,
    "type": "single",
    "category": "Descrever considerações sobre o trabalho com dados não relacionais no Azure (15-20%)",
    "category_en": "Describe considerations for working with non-relational data on Azure (15-20%)",
    "objective": "3.1 Identificar recursos de segurança granular do Azure Data Lake Storage Gen2",
    "what_it_tests": "Reconhecer que o Azure Data Lake Storage suporta controle de acesso granular no nível de arquivo e pasta.",
    "question": "Qual solução de armazenamento oferece suporte ao controle de acesso baseado em função (RBAC) no nível de arquivo e pasta?",
    "options": [
      {
        "id": "A",
        "text": "Armazenamento em Disco do Azure"
      },
      {
        "id": "B",
        "text": "Armazenamento do Azure Data Lake"
      },
      {
        "id": "C",
        "text": "Armazenamento da Fila do Azure"
      },
      {
        "id": "D",
        "text": "Armazenamento de Blobs do Azure"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "O Armazenamento do Azure Data Lake (Gen2), por meio do namespace hierárquico, oferece suporte a controle de acesso baseado em função (RBAC) e listas de controle de acesso (ACLs POSIX) no nível individual de arquivo e pasta.",
    "explanation_why_correct": "O **Armazenamento do Azure Data Lake (ADLS Gen2)** permite configurar permissões de segurança detalhadas (**RBAC e ACLs POSIX**) diretamente no **nível de pasta (diretório) e arquivo individual**.",
    "explanation_why_incorrect": "• **A (Armazenamento em Disco): Incorreta.** Fornece discos de bloco para VMs, sem gerenciamento de pastas pelo Azure.\n• **C (Armazenamento da Fila): Incorreta.** Armazena mensagens em filas, não arquivos e pastas.\n• **D (Armazenamento de Blobs padrão): Incorreta.** Sem o namespace hierárquico do Data Lake Gen2, usa espaço de nomes plano onde o acesso é controlado no nível do contêiner.",
    "additional_reading": [
      {
        "title": "Controle de acesso no Azure Data Lake Storage Gen2",
        "url": "https://learn.microsoft.com/azure/storage/blobs/data-lake-storage-access-control"
      }
    ]
  },
  {
    "id": 25,
    "type": "single",
    "category": "Descrever uma carga de trabalho de análise no Azure (25-30%)",
    "category_en": "Describe an analytics workload on Azure (25-30%)",
    "objective": "4.2 Descrever modelagem dimensional (tabelas de fatos e tabelas de dimensões em esquema em estrela)",
    "what_it_tests": "Distinguir entre tabelas de Dimensão (entidades descritivas como Cliente, Produto, Tempo) e tabelas de Fato (métricas numéricas de eventos como Vendas).",
    "question": "Você está revisando o modelo de dados de um data warehouse (esquema em estrela) mostrado a seguir:\n\n[DimCustomer / Cliente] (CustomerID, Name, Email) 1 ─── * [FactSales / Vendas] (SalesID, CustomerID, ProductID, DateKey, Quantity, Amount) * ─── 1 [DimProduct / Produto]\n\nEscolha a opção correta para completar a frase: Cliente (Customer) é uma tabela de ___________________",
    "options": [
      {
        "id": "A",
        "text": "Dimensão"
      },
      {
        "id": "B",
        "text": "Fato"
      },
      {
        "id": "C",
        "text": "Ponte"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Em um esquema em estrela (star schema) de um data warehouse, a tabela Cliente (Customer) descreve as entidades associadas aos eventos de negócios, sendo classificada como uma tabela de Dimensão.",
    "explanation_why_correct": "Em um modelo dimensional (*star schema*), **Cliente (`Customer`)** é uma tabela de **Dimensão**, pois armazena atributos descritivos sobre \"quem\" realizou a compra (ID, nome, endereço, cidade), pelos quais as métricas da tabela de fatos (`Sales`) serão filtradas e agrupadas.",
    "explanation_why_incorrect": "• **B (Fato): Incorreta.** A tabela de **Fato** é a tabela central (ex.: `Sales` / Vendas) que armazena medidas numéricas agregáveis (quantidade vendida, valor total) e chaves estrangeiras para as dimensões.\n• **C (Ponte): Incorreta.** Tabelas ponte resolvem relacionamentos muitos-para-muitos especiais, o que não é o papel da entidade padrão `Customer`.",
    "additional_reading": [
      {
        "title": "Entender o esquema em estrela e a importância para o Power BI e Data Warehouses",
        "url": "https://learn.microsoft.com/power-bi/guidance/star-schema"
      }
    ]
  },
  {
    "id": 26,
    "type": "drag_drop",
    "category": "Descrever uma carga de trabalho de análise no Azure (25-30%)",
    "category_en": "Describe an analytics workload on Azure (25-30%)",
    "objective": "4.3 Associar perguntas de negócios às categorias de análise de dados (Diagnóstica, Prescritiva e Cognitiva)",
    "what_it_tests": "Vincular perguntas de causa ('Por que...'), recomendação de ação ('Como alocar...') e extração de IA em texto ('Quais pessoas são mencionadas...') aos tipos de análise.",
    "question": "Combine os tipos de análise que podem ser usados ​​para responder às perguntas de negócios.",
    "drag_drop_mode": "match",
    "values": [
      {
        "id": "V1",
        "text": "Prescritivo"
      },
      {
        "id": "V2",
        "text": "Cognitivo"
      },
      {
        "id": "V3",
        "text": "Diagnóstico"
      }
    ],
    "targets": [
      {
        "id": "target_1",
        "label": "Por que as vendas aumentaram no mês passado?",
        "prompt": "Por que as vendas aumentaram no mês passado?"
      },
      {
        "id": "target_2",
        "label": "Como alocar meu orçamento para comprar diferentes itens de estoque?",
        "prompt": "Como alocar meu orçamento para comprar diferentes itens de estoque?"
      },
      {
        "id": "target_3",
        "label": "Quais pessoas são mencionadas nos documentos comerciais de uma empresa?",
        "prompt": "Quais pessoas são mencionadas nos documentos comerciais de uma empresa?"
      }
    ],
    "correct_answer": {
      "target_1": "V3",
      "target_2": "V1",
      "target_3": "V2"
    },
    "official_rationale": "'Por que as vendas aumentaram?' é análise Diagnóstica; 'Como alocar meu orçamento?' é análise Prescritiva (recomenda ações); e 'Quais pessoas são mencionadas nos documentos?' é análise Cognitiva (usa PNL/IA para extrair entidades de dados não estruturados).",
    "explanation_why_correct": "• **\"Por que as vendas aumentaram no mês passado?\" → `Diagnóstico`:** Investiga as causas e razões pelas quais um evento histórico aconteceu.\n• **\"Como alocar meu orçamento para comprar diferentes itens de estoque?\" → `Prescritivo`:** Recomenda a melhor decisão ou linha de ação para otimizar um resultado.\n• **\"Quais pessoas são mencionadas nos documentos comerciais de uma empresa?\" → `Cognitivo`:** Utiliza modelos de IA e Processamento de Linguagem Natural (NER) para extrair conhecimento de textos e documentos não estruturados.",
    "explanation_why_incorrect": "Lembre-se da regra prática da prova DP-900:\n- *O que aconteceu?* = Descritiva\n- *Por que aconteceu?* = Diagnóstica\n- *O que acontecerá?* = Preditiva\n- *O que devo fazer / como alocar?* = Prescritiva\n- *Extrair informações de áudio, imagens ou documentos de texto com IA* = Cognitiva.",
    "additional_reading": [
      {
        "title": "Categorias de Análise de Dados (Descritiva, Diagnóstica, Preditiva, Prescritiva e Cognitiva)",
        "url": "https://learn.microsoft.com/training/modules/explore-concepts-of-data-analytics/"
      }
    ]
  },
  {
    "id": 27,
    "type": "single",
    "category": "Identificar considerações sobre dados relacionais no Azure (20-25%)",
    "category_en": "Identify considerations for relational data on Azure (20-25%)",
    "objective": "2.2 Interpretar consultas SQL básicas (cláusulas SELECT, FROM e WHERE)",
    "what_it_tests": "Identificar que o objeto referenciado na cláusula FROM (dbo.Produtos) é uma tabela.",
    "question": "Você tem a seguinte consulta SQL:\n\nSELECT ProductID, ProductName\nFROM dbo.Produtos\nWHERE CategoryID = 1;\n\nO que é dbo.Produtos?",
    "options": [
      {
        "id": "A",
        "text": "Um índice"
      },
      {
        "id": "B",
        "text": "Uma coluna"
      },
      {
        "id": "C",
        "text": "Uma tabela"
      },
      {
        "id": "D",
        "text": "Um Banco de dados"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "Em uma consulta SQL, a cláusula FROM especifica a tabela (ou exibição) da qual os dados estão sendo recuperados. Em dbo.Produtos, dbo é o esquema e Produtos é a tabela.",
    "explanation_why_correct": "Na cláusula `FROM dbo.Produtos`, `dbo` é o esquema (*schema*) padrão e **`dbo.Produtos`** é **uma tabela** do banco de dados de onde as linhas estão sendo consultadas.",
    "explanation_why_incorrect": "• **A (Um índice): Incorreta.** Índices não são consultados diretamente na cláusula `FROM` de um `SELECT` padrão.\n• **B (Uma coluna): Incorreta.** As colunas são os campos listados após o `SELECT` (`ProductID`, `ProductName`, `CategoryID`).\n• **D (Um Banco de dados): Incorreta.** O banco de dados é o contêiner maior que abriga esquemas e tabelas.",
    "additional_reading": [
      {
        "title": "Introdução às consultas Transact-SQL (SELECT e FROM)",
        "url": "https://learn.microsoft.com/sql/t-sql/queries/select-transact-sql"
      }
    ]
  },
  {
    "id": 28,
    "type": "single",
    "category": "Identificar considerações sobre dados relacionais no Azure (20-25%)",
    "category_en": "Identify considerations for relational data on Azure (20-25%)",
    "objective": "2.2 Interpretar consultas SQL básicas (cláusulas SELECT, FROM e WHERE)",
    "what_it_tests": "Identificar que os identificadores listados após a palavra-chave SELECT (como ProductName) são colunas da tabela.",
    "question": "Você tem a seguinte consulta SQL:\n\nSELECT ProductID, ProductName\nFROM dbo.Produtos\nWHERE CategoryID = 1;\n\nO que é ProductName?",
    "options": [
      {
        "id": "A",
        "text": "Um índice"
      },
      {
        "id": "B",
        "text": "Uma coluna"
      },
      {
        "id": "C",
        "text": "Um banco de dados"
      },
      {
        "id": "D",
        "text": "Uma tabela"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "Na cláusula SELECT ProductID, ProductName FROM dbo.Produtos, ProductName é uma coluna da tabela Produtos cujo valor será retornado no conjunto de resultados.",
    "explanation_why_correct": "**`ProductName`** é **uma coluna** (atributo/campo) pertencente à tabela `dbo.Produtos`, especificada na lista de seleção da cláusula `SELECT`.",
    "explanation_why_incorrect": "• **A (Um índice): Incorreta.** Índices são estruturas internas de busca.\n• **C (Um banco de dados): Incorreta.** O banco de dados contém as tabelas.\n• **D (Uma tabela): Incorreta.** A tabela na consulta é `dbo.Produtos`.",
    "additional_reading": [
      {
        "title": "Cláusula SELECT no Transact-SQL",
        "url": "https://learn.microsoft.com/sql/t-sql/queries/select-clause-transact-sql"
      }
    ]
  },
  {
    "id": 29,
    "type": "drag_drop",
    "category": "Descrever uma carga de trabalho de análise no Azure (25-30%)",
    "category_en": "Describe an analytics workload on Azure (25-30%)",
    "objective": "4.1 Descrever os principais componentes do Azure Data Factory (Pipelines, Datasets e Linked Services)",
    "what_it_tests": "Associar Pipeline, Conjunto de dados (Dataset) e Serviço vinculado (Linked Service) às suas definições no Azure Data Factory.",
    "question": "Corresponda os componentes do Azure Data Factory às descrições apropriadas.",
    "drag_drop_mode": "match",
    "values": [
      {
        "id": "V1",
        "text": "Pipeline"
      },
      {
        "id": "V2",
        "text": "Conjunto de dados"
      },
      {
        "id": "V3",
        "text": "Serviço vinculado"
      }
    ],
    "targets": [
      {
        "id": "target_1",
        "label": "Representação de estruturas de dados",
        "prompt": "Uma representação de estruturas de dados dentro de armazenamentos de dados:"
      },
      {
        "id": "target_2",
        "label": "Informações para conectar a recursos externos",
        "prompt": "As informações usadas para se conectar a recursos externos:"
      },
      {
        "id": "target_3",
        "label": "Agrupamento lógico de atividades agendável",
        "prompt": "Um agrupamento lógico de atividades que executa uma unidade de trabalho e pode ser agendado:"
      }
    ],
    "correct_answer": {
      "target_1": "V2",
      "target_2": "V3",
      "target_3": "V1"
    },
    "official_rationale": "No Azure Data Factory: um Conjunto de dados (Dataset) representa a estrutura dos dados nos armazenamentos; um Serviço vinculado (Linked service) armazena as informações de conexão (connection string/credenciais) para recursos externos; e um Pipeline é um agrupamento lógico de atividades que executa uma unidade de trabalho.",
    "explanation_why_correct": "• **Uma representação de estruturas de dados dentro de armazenamentos de dados → `Conjunto de dados` (*Dataset*):** Aponta para os dados que você deseja usar nas atividades (ex.: qual tabela SQL ou qual caminho de arquivo Parquet no Data Lake).\n• **As informações usadas para se conectar a recursos externos → `Serviço vinculado` (*Linked service*):** Funciona como uma string de conexão que define as credenciais e o endpoint para conectar o Data Factory a um banco de dados ou conta de armazenamento.\n• **Um agrupamento lógico de atividades que executa uma unidade de trabalho e pode ser agendado → `Pipeline`:** Orquestra um fluxo de atividades (cópia, transformação, execução de notebook) que pode ser agendado por gatilhos (*triggers*).",
    "explanation_why_incorrect": "Não confunda *Serviço vinculado* (conexão/autenticação com o serviço externo) com *Conjunto de dados* (formato/tabela/caminho específico dentro desse serviço).",
    "additional_reading": [
      {
        "title": "Introdução ao Azure Data Factory - Pipelines, conjuntos de dados e serviços vinculados",
        "url": "https://learn.microsoft.com/azure/data-factory/introduction"
      }
    ]
  },
  {
    "id": 30,
    "type": "single",
    "category": "Identificar considerações sobre dados relacionais no Azure (20-25%)",
    "category_en": "Identify considerations for relational data on Azure (20-25%)",
    "objective": "2.1 Descrever recursos gerenciados de backup, alta disponibilidade e segurança do Banco de Dados SQL do Azure",
    "what_it_tests": "Confirmar que o Banco de Dados SQL do Azure inclui backups automatizados, alta disponibilidade integrada e suporte ao Microsoft Defender for SQL.",
    "question": "Podemos afirmar que: ► O Banco de Dados SQL do Azure inclui um serviço de backup gerenciado. ► A Base de Dados Azure SQL tem alta disponibilidade incorporada. ►O Banco de Dados SQL do Azure pode usar o Azure Defender. Qual(is) alternativa(s) está(ão) correta(s)?",
    "options": [
      {
        "id": "A",
        "text": "O Banco de Dados SQL do Azure inclui um serviço de backup gerenciado."
      },
      {
        "id": "B",
        "text": "A Base de Dados Azure SQL tem alta disponibilidade incorporada."
      },
      {
        "id": "C",
        "text": "O Banco de Dados SQL do Azure pode usar o Azure Defender."
      },
      {
        "id": "D",
        "text": "Nenhuma das alternativas estão corretas"
      },
      {
        "id": "E",
        "text": "Todas as alternativas estão corretas"
      }
    ],
    "correct_answer": "E",
    "official_rationale": "Como um serviço PaaS totalmente gerenciado, o Banco de Dados SQL do Azure fornece backups automatizados gerenciados, arquitetura de alta disponibilidade integrada (SLA de no mínimo 99,99%) e proteção avançada contra ameaças via Microsoft Defender para SQL (Azure Defender).",
    "explanation_why_correct": "**Todas as alternativas estão corretas (E):**\n• O Banco de Dados SQL do Azure realiza **backups automáticos gerenciados** (completos semanalmente, diferenciais a cada 12–24h e de log de transações a cada 5–10 minutos).\n• Possui **alta disponibilidade incorporada** nativamente em todas as camadas de serviço.\n• Suporta o **Azure Defender (Microsoft Defender para SQL)** para avaliação de vulnerabilidades e detecção de atividades anômalas ou injeção de SQL.",
    "explanation_why_incorrect": "• **A, B, C: Incorretas isoladamente** porque todas as três afirmações são verdadeiras.\n• **D: Incorreta** pois todas as afirmações descrevem recursos reais do serviço.",
    "additional_reading": [
      {
        "title": "Alta disponibilidade e backups automatizados no Banco de Dados SQL do Azure",
        "url": "https://learn.microsoft.com/azure/azure-sql/database/high-availability-sla"
      }
    ]
  },
  {
    "id": 31,
    "type": "single",
    "category": "Descrever uma carga de trabalho de análise no Azure (25-30%)",
    "category_en": "Describe an analytics workload on Azure (25-30%)",
    "objective": "4.3 Classificar cenários de visualização de dados nas categorias de análise",
    "what_it_tests": "Identificar que um gráfico exibindo a contagem atual de matrículas por departamento é um exemplo de análise descritiva.",
    "question": "Escolha a opção correta para completar a frase: Uma visualização que ilustra a matrícula atual de alunos de uma universidade por departamento é um exemplo de análise ___________________",
    "options": [
      {
        "id": "A",
        "text": "prescritivo"
      },
      {
        "id": "B",
        "text": "preditivo"
      },
      {
        "id": "C",
        "text": "descriptive"
      },
      {
        "id": "D",
        "text": "cognitivo"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "Um gráfico ou relatório que resume o estado atual ou histórico (como a matrícula atual de alunos por departamento) é um exemplo de análise descritiva (descriptive analytics).",
    "explanation_why_correct": "A visualização resume e descreve dados factuais registrados (**a matrícula atual de alunos por departamento**), respondendo à pergunta *\"O que está acontecendo / o que aconteceu?\"*, o que caracteriza a análise **descritiva (`descriptive`)**.",
    "explanation_why_incorrect": "• **A (prescritivo): Incorreta.** Recomendaria ações sobre quantas turmas abrir ou como realocar professores.\n• **B (preditivo): Incorreta.** Projetaria quantos alunos se matricularão nos próximos semestres.\n• **D (cognitivo): Incorreta.** Envolveria IA para interpretar imagens, áudios ou textos não estruturados.",
    "additional_reading": [
      {
        "title": "Explorar conceitos de análise de dados - Análise Descritiva",
        "url": "https://learn.microsoft.com/training/modules/explore-concepts-of-data-analytics/"
      }
    ]
  },
  {
    "id": 32,
    "type": "single",
    "category": "Identificar considerações sobre dados relacionais no Azure (20-25%)",
    "category_en": "Identify considerations for relational data on Azure (20-25%)",
    "objective": "2.1 Configurar autenticação e segurança no Banco de Dados SQL do Azure",
    "what_it_tests": "Identificar qual método de autenticação do Banco de Dados SQL do Azure oferece suporte à Autenticação Multifator (MFA).",
    "question": "Você precisa garantir que os usuários usem a autenticação multifator (MFA) ao se conectarem a um banco de dados SQL do Azure. Que tipo de autenticação você deve usar?",
    "options": [
      {
        "id": "A",
        "text": "Autenticação SQL"
      },
      {
        "id": "B",
        "text": "autenticação de certificado"
      },
      {
        "id": "C",
        "text": "autenticação principal de serviço"
      },
      {
        "id": "D",
        "text": "Autenticação do Azure Active Directory (Azure AD)"
      }
    ],
    "correct_answer": "D",
    "official_rationale": "A autenticação do Azure Active Directory (atual Microsoft Entra ID) é o método de autenticação no Banco de Dados SQL do Azure que oferece suporte centralizado à autenticação multifator (MFA) e acesso condicional.",
    "explanation_why_correct": "A **Autenticação do Azure Active Directory (Azure AD / Microsoft Entra ID)** permite gerenciar identidades de usuários de forma centralizada e exigir **Autenticação Multifator (MFA)** e políticas de Acesso Condicional ao se conectar ao Banco de Dados SQL do Azure.",
    "explanation_why_incorrect": "• **A (Autenticação SQL): Incorreta.** Usa apenas nome de usuário e senha armazenados no banco, sem suporte a MFA.\n• **B (autenticação de certificado): Incorreta.** Não é o mecanismo de login interativo com MFA para usuários de banco de dados.\n• **C (autenticação principal de serviço): Incorreta.** Entidades de serviço (*Service Principals*) são usadas por aplicativos/serviços automatizados de forma não interativa, e não por usuários humanos com MFA.",
    "additional_reading": [
      {
        "title": "Usar a autenticação do Microsoft Entra (Azure AD) com autenticação multifator no SQL do Azure",
        "url": "https://learn.microsoft.com/azure/azure-sql/database/authentication-aad-overview"
      }
    ]
  }
];

const DP900_SIMULADO_2_QUESTIONS = [
  {
    "id": 1,
    "type": "single",
    "category": "Identificar considerações sobre dados relacionais no Azure (20-25%)",
    "category_en": "Identify considerations for relational data on Azure (20-25%)",
    "objective": "2.1 Comparar opções de implantação do SQL Server no Azure (Banco de Dados Único, Instância Gerenciada e VM)",
    "what_it_tests": "Identificar qual opção de implantação PaaS/híbrida oferece quase 100% de compatibilidade com instâncias locais do SQL Server para migrações lift-and-shift com o mínimo de alterações.",
    "question": "Qual implantação requer o menor número de alterações ao migrar uma solução local existente do SQL Server?",
    "options": [
      {
        "id": "A",
        "text": "Instância Gerenciada do Banco de Dados SQL do Azure"
      },
      {
        "id": "B",
        "text": "O SQL Server em execução em uma máquina virtual"
      },
      {
        "id": "C",
        "text": "Banco de Dados SQL do Azure - Banco de Dados Único"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "A Instância Gerenciada do Banco de Dados SQL do Azure (Azure SQL Managed Instance) oferece quase 100% de compatibilidade com o mecanismo de banco de dados do SQL Server local (incluindo SQL Server Agent, consultas entre bancos de dados e Service Broker), permitindo migrar soluções locais com o menor número de alterações para PaaS.",
    "explanation_why_correct": "A **Instância Gerenciada do Banco de Dados SQL do Azure (*Azure SQL Managed Instance*)** foi projetada especificamente para cenários de migração *lift-and-shift* de instalações locais do SQL Server para a nuvem PaaS, oferecendo **quase 100% de compatibilidade** com o SQL Server local e exigindo o menor número de alterações nos bancos de dados e aplicativos.",
    "explanation_why_incorrect": "• **B (SQL Server em execução em uma máquina virtual): Incorreta no contexto das ofertas gerenciadas.** Embora uma VM seja IaaS, ela exige gerenciar toda a infraestrutura do SO, patches e backups manuais (como abordado na Questão 3 deste mesmo módulo do Microsoft Learn).\n• **C (Banco de Dados Único): Incorreta.** Não suporta recursos no nível de instância (como consultas entre bancos de dados ou SQL Agent), exigindo mais refatoração ao migrar soluções locais complexas.",
    "additional_reading": [
      {
        "title": "O que é a Instância Gerenciada de SQL do Azure?",
        "url": "https://learn.microsoft.com/azure/azure-sql/managed-instance/sql-managed-instance-paas-overview"
      }
    ]
  },
  {
    "id": 2,
    "type": "single",
    "category": "Descrever os principais conceitos de dados (25-30%)",
    "category_en": "Describe core data concepts (25-30%)",
    "objective": "1.3 Descrever conceitos de dados relacionais (tabelas, linhas e colunas)",
    "what_it_tests": "Identificar a estrutura tabular fundamental (linhas e colunas) de um banco de dados relacional.",
    "question": "Como os dados são organizados em uma tabela relacional",
    "options": [
      {
        "id": "A",
        "text": "Linhas e colunas"
      },
      {
        "id": "B",
        "text": "Cabeçalho e rodapé"
      },
      {
        "id": "C",
        "text": "Páginas e parágrafos"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Em um banco de dados relacional, os dados são organizados em tabelas bidimensionais compostas por linhas (registros/tuplas) e colunas (atributos/campos).",
    "explanation_why_correct": "Em uma tabela relacional, todas as informações são organizadas em **linhas e colunas**: cada linha representa uma instância individual de uma entidade (um registro) e cada coluna representa um atributo com tipo de dado definido.",
    "explanation_why_incorrect": "• **B (Cabeçalho e rodapé): Incorreta.** São elementos de formatação de documentos de texto ou páginas impressas.\n• **C (Páginas e parágrafos): Incorreta.** São estruturas de documentos de texto não estruturados.",
    "additional_reading": [
      {
        "title": "Explorar conceitos de dados relacionais",
        "url": "https://learn.microsoft.com/training/modules/explore-relational-data-offerings/"
      }
    ]
  },
  {
    "id": 3,
    "type": "single",
    "category": "Identificar considerações sobre dados relacionais no Azure (20-25%)",
    "category_en": "Identify considerations for relational data on Azure (20-25%)",
    "objective": "2.1 Comparar responsabilidades administrativas em IaaS (SQL Server em VMs) vs PaaS",
    "what_it_tests": "Compreender a responsabilidade do cliente ao executar o SQL Server em uma máquina virtual (IaaS).",
    "question": "Qual afirmação a seguir é verdadeira em relação à execução do SQL Server em uma máquina virtual?",
    "options": [
      {
        "id": "A",
        "text": "É preciso instalar e manter o software do sistema de gerenciamento de banco de dados, mas os backups são automatizados"
      },
      {
        "id": "B",
        "text": "A instalação e a manutenção do software são automatizadas, mas é preciso fazer os backups"
      },
      {
        "id": "C",
        "text": "Você é responsável por toda a instalação e manutenção do software e por realizar backups"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "Ao executar o SQL Server em uma máquina virtual (IaaS), você tem controle total sobre o sistema operacional e o SGBD, o que significa que é responsável por toda a instalação, manutenção de software e realização de backups (a menos que configure serviços adicionais de automação).",
    "explanation_why_correct": "Executar o SQL Server em uma máquina virtual é uma abordagem **IaaS**: **você é responsável por toda a instalação e manutenção do software (sistema operacional e SQL Server) e por realizar backups**.",
    "explanation_why_incorrect": "• **A e B: Incorretas.** A automação nativa de instalação, aplicação de patches e backups sem intervenção do usuário é característica das ofertas **PaaS** (Banco de Dados SQL do Azure e Instância Gerenciada).",
    "additional_reading": [
      {
        "title": "Visão geral do SQL Server em Máquinas Virtuais do Azure",
        "url": "https://learn.microsoft.com/azure/azure-sql/virtual-machines/windows/sql-vm-overview"
      }
    ]
  },
  {
    "id": 4,
    "type": "single",
    "category": "Descrever os principais conceitos de dados (25-30%)",
    "category_en": "Describe core data concepts (25-30%)",
    "objective": "1.1 Identificar formatos de dados estruturados, semiestruturados e não estruturados",
    "what_it_tests": "Reconhecer arquivos de mídia (áudio e vídeo) como exemplos clássicos de dados não estruturados.",
    "question": "Qual das alternativas a seguir é um exemplo de dados não estruturados?",
    "options": [
      {
        "id": "A",
        "text": "Uma tabela de Funcionários com as colunas ID do Funcionário, Nome do Funcionário e Designação do Funcionário"
      },
      {
        "id": "B",
        "text": "Arquivos de audio e video"
      },
      {
        "id": "C",
        "text": "Uma tabela dentro do banco de dados do SQL Server"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "Arquivos de áudio, vídeo, imagens e documentos binários não seguem um esquema tabular ou hierárquico predefinido de campos, sendo classificados como dados não estruturados.",
    "explanation_why_correct": "**Arquivos de áudio e vídeo** são **dados não estruturados**, pois consistem em fluxos binários de mídia sem tabelas, linhas, colunas ou chaves predefinidas.",
    "explanation_why_incorrect": "• **A e C: Incorretas.** Tabelas com colunas fixas (como `ID do Funcionário`, `Nome`) e tabelas do SQL Server são exemplos de **dados estruturados**.",
    "additional_reading": [
      {
        "title": "Explorar os principais conceitos de dados - Formatos de dados",
        "url": "https://learn.microsoft.com/training/modules/explore-core-data-concepts/"
      }
    ]
  },
  {
    "id": 5,
    "type": "single",
    "category": "Descrever os principais conceitos de dados (25-30%)",
    "category_en": "Describe core data concepts (25-30%)",
    "objective": "1.1 Distinguir entre conjuntos de dados em lote (batch) e de transmissão (streaming)",
    "what_it_tests": "Identificar telemetria contínua de sensores (IoT) como um conjunto de dados de streaming.",
    "question": "Qual das alternativas a seguir é um exemplo de conjunto de dados de streming?",
    "options": [
      {
        "id": "A",
        "text": "Dados de feeds de sensores"
      },
      {
        "id": "B",
        "text": "Dados de vendas do mês anterior"
      },
      {
        "id": "C",
        "text": "Lista de funcionários que trabalham para uma empresa"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Feeds de sensores (dispositivos IoT) emitem eventos continuamente em tempo real à medida que as medições ocorrem, constituindo um conjunto de dados de streaming.",
    "explanation_why_correct": "**Dados de feeds de sensores** são gerados continuamente em tempo real por dispositivos e equipamentos, sendo o exemplo clássico de **conjunto de dados de streaming**.",
    "explanation_why_incorrect": "• **B (Dados de vendas do mês anterior): Incorreta.** É um conjunto histórico estático processado em **lote (*batch*)**.\n• **C (Lista de funcionários): Incorreta.** É um conjunto de dados cadastral estático/tabular.",
    "additional_reading": [
      {
        "title": "Processamento de fluxo e dados de streaming no Azure",
        "url": "https://learn.microsoft.com/azure/architecture/data-guide/big-data/real-time-processing"
      }
    ]
  },
  {
    "id": 6,
    "type": "single",
    "category": "Descrever uma carga de trabalho de análise no Azure (25-30%)",
    "category_en": "Describe an analytics workload on Azure (25-30%)",
    "objective": "4.3 Descrever recursos do Microsoft Power BI para visualização e relatórios",
    "what_it_tests": "Identificar o Power BI como a ferramenta de inteligência de negócios voltada para relatórios e visualização de dados.",
    "question": "Qual das ferramentas a seguir é usada para obter relatório e visualização?",
    "options": [
      {
        "id": "A",
        "text": "SQL Server Management Studio"
      },
      {
        "id": "B",
        "text": "Power BI"
      },
      {
        "id": "C",
        "text": "Linguagem SQL"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "O Microsoft Power BI é uma coleção de serviços de software, aplicativos e conectores que trabalham juntos para transformar fontes de dados em relatórios e visualizações interativas.",
    "explanation_why_correct": "O **Power BI** é a ferramenta analítica da Microsoft projetada especificamente para criar **relatórios interativos, painéis (dashboards) e visualizações gráficas de dados**.",
    "explanation_why_incorrect": "• **A (SQL Server Management Studio): Incorreta.** É uma ferramenta de administração e consulta de bancos de dados SQL.\n• **C (Linguagem SQL): Incorreta.** É uma linguagem de consulta e manipulação de dados, não uma plataforma gráfica de visualização e relatórios.",
    "additional_reading": [
      {
        "title": "O que é o Power BI?",
        "url": "https://learn.microsoft.com/power-bi/fundamentals/power-bi-overview"
      }
    ]
  },
  {
    "id": 7,
    "type": "single",
    "category": "Descrever os principais conceitos de dados (25-30%)",
    "category_en": "Describe core data concepts (25-30%)",
    "objective": "1.3 Descrever características fundamentais de tabelas em bancos de dados relacionais",
    "what_it_tests": "Reconhecer que cada linha em uma tabela relacional representa uma única instância de uma entidade e todas as linhas compartilham as mesmas colunas.",
    "question": "Qual das afirmações a seguir é uma característica dos bancos de dados relacionais?",
    "options": [
      {
        "id": "A",
        "text": "Todos os dados precisam ser armazenados como cadeias de caracteres"
      },
      {
        "id": "B",
        "text": "Uma linha em uma tabela representa apenas uma entidade"
      },
      {
        "id": "C",
        "text": "Linhas diferentes na mesma tabela podem conter colunas diferentes"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "Em um banco de dados relacional, cada tabela modela uma classe de entidade e cada linha (tupla) na tabela representa uma única instância dessa entidade, com todas as linhas seguindo exatamente o mesmo conjunto de colunas tipadas.",
    "explanation_why_correct": "Em um banco de dados relacional, **uma linha em uma tabela representa apenas uma entidade** (por exemplo, um único cliente ou um único pedido), e todas as linhas da mesma tabela possuem exatamente a mesma estrutura de colunas.",
    "explanation_why_incorrect": "• **A: Incorreta.** As colunas possuem tipos de dados específicos (`INT`, `DATE`, `DECIMAL`, `VARCHAR`, etc.), e não apenas cadeias de caracteres.\n• **C: Incorreta.** Em uma tabela relacional, o esquema é fixo: todas as linhas da mesma tabela têm as mesmas colunas (ter colunas variáveis por registro é característica de bancos NoSQL).",
    "additional_reading": [
      {
        "title": "Conceitos de tabelas relacionais no Azure",
        "url": "https://learn.microsoft.com/training/modules/explore-relational-data-offerings/"
      }
    ]
  },
  {
    "id": 8,
    "type": "single",
    "category": "Descrever os principais conceitos de dados (25-30%)",
    "category_en": "Describe core data concepts (25-30%)",
    "objective": "1.3 Descrever índices, tabelas e exibições em bancos de dados relacionais",
    "what_it_tests": "Definir corretamente o que é um índice em um banco de dados relacional.",
    "question": "O que é um índice?",
    "options": [
      {
        "id": "A",
        "text": "Uma estrutura que permite localizar linhas em uma tabela rapidamente, usando um valor indexado"
      },
      {
        "id": "B",
        "text": "Uma tabela virtual com base no conjunto de resultados de uma consulta"
      },
      {
        "id": "C",
        "text": "Uma estrutura que consiste em linhas e colunas que você usa para armazenar dados"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Um índice em um banco de dados funciona como o índice remissivo de um livro, permitindo localizar rapidamente linhas em uma tabela usando valores indexados sem precisar percorrer toda a tabela.",
    "explanation_why_correct": "Um **índice** é **uma estrutura que permite localizar linhas em uma tabela rapidamente, usando um valor indexado**, reduzindo drasticamente o tempo de leitura em consultas com cláusulas `WHERE`, `JOIN` e `ORDER BY`.",
    "explanation_why_incorrect": "• **B: Incorreta.** Uma tabela virtual com base no conjunto de resultados de uma consulta é a definição de uma **exibição (*View*)**.\n• **C: Incorreta.** Uma estrutura que consiste em linhas e colunas usada para armazenar dados é a definição de uma **tabela (*Table*)**.",
    "additional_reading": [
      {
        "title": "Explorar índices em bancos de dados relacionais",
        "url": "https://learn.microsoft.com/sql/relational-databases/indexes/indexes"
      }
    ]
  },
  {
    "id": 9,
    "type": "multi",
    "category": "Descrever considerações sobre o trabalho com dados não relacionais no Azure (15-20%)",
    "category_en": "Describe considerations for working with non-relational data on Azure (15-20%)",
    "objective": "3.2 Identificar o Azure Cosmos DB e suas APIs para bancos de dados não relacionais",
    "what_it_tests": "Selecionar os recursos voltados à implementação de bancos de dados não relacionais (NoSQL) no Azure.",
    "question": "Quais dos seguintes serviços você deve usar para implementar um banco de dados não relacional?",
    "options": [
      {
        "id": "A",
        "text": "Azure Cosmos DB"
      },
      {
        "id": "B",
        "text": "A API do Gremlin"
      },
      {
        "id": "C",
        "text": "Banco de dados SQL do Azure"
      }
    ],
    "correct_answer": [
      "A",
      "B"
    ],
    "official_rationale": "O Azure Cosmos DB (incluindo suas APIs não relacionais como a API do Gremlin para grafos) é o serviço de banco de dados não relacional (NoSQL) totalmente gerenciado do Azure, enquanto o Banco de Dados SQL do Azure é um serviço estritamente relacional.",
    "explanation_why_correct": "• **A (`Azure Cosmos DB` - Correta):** É o principal serviço de banco de dados não relacional (NoSQL) distribuído globalmente no Azure.\n• **B (`A API do Gremlin` - Correta):** É a API de banco de dados não relacional de grafos do Azure Cosmos DB para armazenar vértices e arestas.",
    "explanation_why_incorrect": "• **C (`Banco de dados SQL do Azure` - Incorreta):** É um banco de dados relacional baseado no mecanismo Microsoft SQL Server.",
    "additional_reading": [
      {
        "title": "Bem-vindo ao Azure Cosmos DB",
        "url": "https://learn.microsoft.com/azure/cosmos-db/introduction"
      }
    ]
  },
  {
    "id": 10,
    "type": "single",
    "category": "Descrever considerações sobre o trabalho com dados não relacionais no Azure (15-20%)",
    "category_en": "Describe considerations for working with non-relational data on Azure (15-20%)",
    "objective": "1.2 Descrever as características dos armazenamentos de dados não relacionais (NoSQL)",
    "what_it_tests": "Identificar que bancos de dados não relacionais não impõem um esquema tabular rígido (são livres de esquema ou têm esquemas relaxados).",
    "question": "Qual das alternativas a seguir é uma característica dos bancos de dados não relacionais?",
    "options": [
      {
        "id": "A",
        "text": "Bancos de dados não relacionais contêm tabelas com registros de coluna fixa simples"
      },
      {
        "id": "B",
        "text": "Banco de dados não relacionais são livres de esquema ou têm esquemas relaxados"
      },
      {
        "id": "C",
        "text": "Bancos de dados não relacionais exigem que você use técnicas de normalização para reduzir a duplicação de dados"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "Uma característica essencial dos bancos de dados não relacionais (NoSQL) é serem livres de esquema (schema-free) ou possuírem esquemas flexíveis/relaxados, permitindo armazenar entidades com diferentes propriedades na mesma coleção.",
    "explanation_why_correct": "**Bancos de dados não relacionais são livres de esquema (*schema-free*) ou têm esquemas relaxados**, o que permite armazenar documentos, pares chave/valor ou grafos cujas estruturas podem variar de um registro para outro.",
    "explanation_why_incorrect": "• **A: Incorreta.** Tabelas com registros de colunas fixas simples caracterizam bancos relacionais.\n• **C: Incorreta.** Bancos não relacionais priorizam a desnormalização (agrupando dados de uma entidade juntos para leitura rápida) em vez da normalização relacional.",
    "additional_reading": [
      {
        "title": "Dados não relacionais e NoSQL no Azure",
        "url": "https://learn.microsoft.com/azure/architecture/data-guide/big-data/non-relational-data"
      }
    ]
  },
  {
    "id": 11,
    "type": "single",
    "category": "Descrever uma carga de trabalho de análise no Azure (25-30%)",
    "category_en": "Describe an analytics workload on Azure (25-30%)",
    "objective": "4.1 Descrever o processo de ingestão e processamento de dados em soluções analíticas",
    "what_it_tests": "Definir o conceito de ingestão de dados (data ingestion).",
    "question": "O que é injestão de dados?",
    "options": [
      {
        "id": "A",
        "text": "O processo de transformar dados brutos em modelos que contêm informações significativas"
      },
      {
        "id": "B",
        "text": "Analisar dados para encontrar anomalias"
      },
      {
        "id": "C",
        "text": "Capturar fluxo de dados brutos de várias fontes e armazená-los"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "A ingestão de dados é a primeira etapa de um pipeline analítico, consistindo em capturar dados brutos provenientes de diversas fontes (bancos de dados, sensores, logs, arquivos) e armazená-los em um repositório central (como um data lake ou data warehouse).",
    "explanation_why_correct": "A **ingestão de dados** é o processo de **capturar fluxos ou lotes de dados brutos de várias fontes e armazená-los** para posterior transformação e análise.",
    "explanation_why_incorrect": "• **A: Incorreta.** Transformar dados brutos em modelos estruturados corresponde às fases de **processamento/transformação e modelagem de dados**.\n• **B: Incorreta.** Analisar dados para encontrar anomalias faz parte da etapa de **análise de dados**.",
    "additional_reading": [
      {
        "title": "Explorar conceitos de ingestão e análise de dados",
        "url": "https://learn.microsoft.com/training/modules/explore-concepts-of-data-analytics/"
      }
    ]
  },
  {
    "id": 12,
    "type": "single",
    "category": "Descrever uma carga de trabalho de análise no Azure (25-30%)",
    "category_en": "Describe an analytics workload on Azure (25-30%)",
    "objective": "4.3 Distinguir entre análises descritiva, preditiva e prescritiva",
    "what_it_tests": "Identificar que a análise descritiva responde a perguntas sobre o que aconteceu no passado.",
    "question": "Que tipo de análise ajuda a responder perguntas sobre o que aconteceu no passado?",
    "options": [
      {
        "id": "A",
        "text": "Análise descritiva"
      },
      {
        "id": "B",
        "text": "Análise prescritiva"
      },
      {
        "id": "C",
        "text": "Análise preditiva"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "A análise descritiva examina dados históricos para responder à pergunta: 'O que aconteceu no passado?'.",
    "explanation_why_correct": "A **Análise descritiva** utiliza agregações e resumos de dados históricos para responder perguntas sobre **o que aconteceu no passado**.",
    "explanation_why_incorrect": "• **B (Análise prescritiva): Incorreta.** Responde *\"O que devemos fazer a seguir?\"*.\n• **C (Análise preditiva): Incorreta.** Responde *\"O que provavelmente acontecerá no futuro?\"*.",
    "additional_reading": [
      {
        "title": "Categorias de análise de dados no Microsoft Learn",
        "url": "https://learn.microsoft.com/training/modules/explore-concepts-of-data-analytics/"
      }
    ]
  },
  {
    "id": 13,
    "type": "single",
    "category": "Identificar considerações sobre dados relacionais no Azure (20-25%)",
    "category_en": "Identify considerations for relational data on Azure (20-25%)",
    "objective": "2.1 Descrever o dimensionamento dinâmico no Banco de Dados SQL do Azure",
    "what_it_tests": "Compreender que o dimensionamento vertical (scale up) ou horizontal (scale out) no Banco de Dados SQL do Azure ocorre online sem necessidade de reinicialização manual.",
    "question": "Qual afirmação a seguir sobre o Banco de Dados SQL do Azure é verdadeira?",
    "options": [
      {
        "id": "A",
        "text": "O escalonamento vertical não entrará em vigor até que você reinicie o banco de dados"
      },
      {
        "id": "B",
        "text": "O escalonamento horizontal não entrará em vigor até que você reinicie o banco de dados"
      },
      {
        "id": "C",
        "text": "O escalonamento vertical ou expansão entrarão em vigor sem precisar reinciar o Banco de Dados SQL"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "No Banco de Dados SQL do Azure, você pode dimensionar recursos verticalmente (aumentar DTUs/vCores) ou horizontalmente (adicionar réplicas de leitura/fragmentos) de forma dinâmica, sem precisar reiniciar manualmente o banco de dados.",
    "explanation_why_correct": "**O escalonamento vertical ou expansão entrarão em vigor sem precisar reiniciar o Banco de Dados SQL**: como serviço PaaS em nuvem, o ajuste de capacidade é gerenciado dinamicamente pela plataforma.",
    "explanation_why_incorrect": "• **A e B: Incorretas.** O administrador não precisa reiniciar o serviço de banco de dados para aplicar alterações de camada de computação ou expansão.",
    "additional_reading": [
      {
        "title": "Dimensionar recursos dinamicamente no Banco de Dados SQL do Azure",
        "url": "https://learn.microsoft.com/azure/azure-sql/database/scale-resources"
      }
    ]
  },
  {
    "id": 14,
    "type": "single",
    "category": "Identificar considerações sobre dados relacionais no Azure (20-25%)",
    "category_en": "Identify considerations for relational data on Azure (20-25%)",
    "objective": "2.1 Descrever o gerenciamento de backups na Instância Gerenciada de SQL do Azure",
    "what_it_tests": "Reconhecer que os backups na Instância Gerenciada do Banco de Dados SQL do Azure são criados e gerenciados automaticamente pela plataforma.",
    "question": "Ao usar uma instância gerenciada do Banco de Dados SQL do Azure, qual é a maneira mais simples de implementar backups?",
    "options": [
      {
        "id": "A",
        "text": "Configuração manual do SQL Server"
      },
      {
        "id": "B",
        "text": "Criar uma tarefa agendada para fazer backup"
      },
      {
        "id": "C",
        "text": "Os backups são manipulados automaticamente"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "A Instância Gerenciada do Banco de Dados SQL do Azure cria backups automáticos armazenados em armazenamento com redundância geográfica por padrão, sem exigir configuração manual.",
    "explanation_why_correct": "Na Instância Gerenciada do Banco de Dados SQL do Azure (PaaS), **os backups são manipulados automaticamente** pelo próprio serviço do Azure (com suporte a restauração pontual — *point-in-time restore*).",
    "explanation_why_incorrect": "• **A e B: Incorretas.** Não é necessário configurar rotinas manuais nem criar tarefas agendadas para ter backups operacionais básicos.",
    "additional_reading": [
      {
        "title": "Backups automatizados no Banco de Dados SQL do Azure e Instância Gerenciada",
        "url": "https://learn.microsoft.com/azure/azure-sql/database/automated-backups-overview"
      }
    ]
  },
  {
    "id": 15,
    "type": "single",
    "category": "Identificar considerações sobre dados relacionais no Azure (20-25%)",
    "category_en": "Identify considerations for relational data on Azure (20-25%)",
    "objective": "2.1 Identificar ferramentas de migração para o Banco de Dados do Azure para PostgreSQL",
    "what_it_tests": "Selecionar o Serviço de Migração de Banco de Dados do Azure (Azure Database Migration Service) para migrar bancos PostgreSQL locais para o Azure.",
    "question": "Qual é a melhor maneira de transferir os dados em um banco de dados PostgreSQL executado localmente em um banco de dados que executa o serviço do Banco de Dados do Azure para PostgreSQL ?",
    "options": [
      {
        "id": "A",
        "text": "Exportar os dados do banco de dados local e importa-los manualmente para o banco de dados em execução no Azure"
      },
      {
        "id": "B",
        "text": "Carregar um arquivo de backup do banco de dados PostgreSQL no banco de dados em execução no Azure"
      },
      {
        "id": "C",
        "text": "Usar o Serviço de Migração de Banco de Dados do Azure"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "O Serviço de Migração de Banco de Dados do Azure (Azure Database Migration Service - DMS) permite migrar bancos de dados PostgreSQL locais para o Banco de Dados do Azure para PostgreSQL de forma contínua e com tempo de inatividade mínimo.",
    "explanation_why_correct": "A maneira recomendada para transferir um banco PostgreSQL local para a nuvem com tempo de inatividade mínimo é **usar o Serviço de Migração de Banco de Dados do Azure (*Azure Database Migration Service*)**.",
    "explanation_why_incorrect": "• **A e B: Incorretas.** Exportações/importações manuais ou cópia de arquivos brutos geram maior tempo de indisponibilidade e risco operacional em comparação com o serviço gerenciado de migração.",
    "additional_reading": [
      {
        "title": "O que é o Serviço de Migração de Banco de Dados do Azure?",
        "url": "https://learn.microsoft.com/azure/dms/dms-overview"
      }
    ]
  },
  {
    "id": 16,
    "type": "single",
    "category": "Descrever considerações sobre o trabalho com dados não relacionais no Azure (15-20%)",
    "category_en": "Describe considerations for working with non-relational data on Azure (15-20%)",
    "objective": "3.1 Descrever a estrutura de chaves no Armazenamento de Tabelas do Azure",
    "what_it_tests": "Identificar os dois elementos que compõem a chave composta de uma entidade no Armazenamento de Tabelas do Azure (Chave de partição e Chave de linha).",
    "question": "Quais são os elementos de uma chave do Armazenamento de tabelas do Azure?",
    "options": [
      {
        "id": "A",
        "text": "Nome da tabela e nome da coluna"
      },
      {
        "id": "B",
        "text": "Chave de partição e chave de linha"
      },
      {
        "id": "C",
        "text": "Número da linha"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "No Armazenamento de Tabelas do Azure, cada entidade (linha) é identificada exclusivamente pela combinação de dois campos de chave: a Chave de partição (PartitionKey) e a Chave de linha (RowKey).",
    "explanation_why_correct": "Uma chave no **Armazenamento de Tabelas do Azure** é composta por dois elementos: **`Chave de partição` (`PartitionKey`)** — que agrupa entidades relacionadas na mesma partição lógica — e **`Chave de linha` (`RowKey`)** — que identifica exclusivamente a linha dentro daquela partição.",
    "explanation_why_incorrect": "• **A e C: Incorretas.** O Armazenamento de Tabelas não utiliza números sequenciais automáticos de linha nem nomes de coluna como chave primária.",
    "additional_reading": [
      {
        "title": "Noções básicas sobre o modelo de dados do serviço Tabela do Azure",
        "url": "https://learn.microsoft.com/rest/api/storageservices/understanding-the-table-service-data-model"
      }
    ]
  },
  {
    "id": 17,
    "type": "single",
    "category": "Descrever considerações sobre o trabalho com dados não relacionais no Azure (15-20%)",
    "category_en": "Describe considerations for working with non-relational data on Azure (15-20%)",
    "objective": "3.1 Comparar tipos de blobs no Armazenamento de Blobs do Azure (Blobs de blocos, Blobs de páginas e Blobs de acréscimo)",
    "what_it_tests": "Distinguir os casos de uso entre blobs de páginas (acesso aleatório de leitura/gravação, como discos VHD) e blobs de blocos (objetos discretos como imagens, vídeos e arquivos).",
    "question": "Quando você deve usar um blob de blocos e quando você deve usar um blob de páginas?",
    "options": [
      {
        "id": "A",
        "text": "Usar um blob de blocos para dados não estruturados que exijam acesso aleatório para executar leituras e gravações. Usar um blob de páginas para objetos discretos que raramente são alterados."
      },
      {
        "id": "B",
        "text": "Usar um blob de blocos para dados ativos armazenados usando a camada de acesso a dados Quente e um blob de páginas para dados armazenados usando as camadas de acesso a dados Frias e de Arquivos."
      },
      {
        "id": "C",
        "text": "Usar um blob de páginas para blocos que exigem acesso aleatório de leitura e gravação. Usar um blob de blocos para objetos discretos que são alterados com pouca frequência."
      }
    ],
    "correct_answer": "C",
    "official_rationale": "Os blobs de páginas (page blobs) são otimizados para operações de leitura e gravação de acesso aleatório (como discos de máquinas virtuais VHD). Os blobs de blocos (block blobs) são otimizados para armazenar objetos discretos de dados binários/texto que são lidos ou substituídos como blocos.",
    "explanation_why_correct": "Você deve **usar um blob de páginas para blocos que exigem acesso aleatório de leitura e gravação** (como discos virtuais VHD de máquinas virtuais) e **usar um blob de blocos para objetos discretos que são alterados com pouca frequência** (como imagens, vídeos, documentos e backups).",
    "explanation_why_incorrect": "• **A: Incorreta.** Inverte os conceitos de blob de blocos e blob de páginas.\n• **B: Incorreta.** As camadas Quente, Fria e Arquivo (*Hot, Cool, Archive*) aplicam-se a **blobs de blocos**, e não a blobs de páginas.",
    "additional_reading": [
      {
        "title": "Noções básicas sobre blobs de blocos, blobs de acréscimo e blobs de páginas",
        "url": "https://learn.microsoft.com/rest/api/storageservices/understanding-block-blobs--append-blobs--and-page-blobs"
      }
    ]
  },
  {
    "id": 18,
    "type": "single",
    "category": "Descrever considerações sobre o trabalho com dados não relacionais no Azure (15-20%)",
    "category_en": "Describe considerations for working with non-relational data on Azure (15-20%)",
    "objective": "3.1 Identificar cenários de uso para o Armazenamento de Arquivos do Azure (Azure Files)",
    "what_it_tests": "Compreender o propósito principal do Armazenamento de Arquivos do Azure: compartilhamento de arquivos na nuvem acessível de diferentes locais via SMB/NFS.",
    "question": "Por que você pode usar o Armazenamento de arquivos do Azure?",
    "options": [
      {
        "id": "A",
        "text": "Para compartilhar arquivos armazenados localmente com usuários localizados em outros sites."
      },
      {
        "id": "B",
        "text": "Para permitir que usuários em sites diferentes compartilhem arquivos."
      },
      {
        "id": "C",
        "text": "Para armazenar arquivos de dados binários grandes contendo imagens ou outros dados não estruturados."
      }
    ],
    "correct_answer": "B",
    "official_rationale": "O Armazenamento de Arquivos do Azure (Azure Files) oferece compartilhamentos de arquivos totalmente gerenciados na nuvem, permitindo que usuários e aplicativos em sites diferentes compartilhem e montem os mesmos arquivos simultaneamente via protocolo SMB ou NFS.",
    "explanation_why_correct": "O **Armazenamento de Arquivos do Azure (*Azure Files*)** é usado **para permitir que usuários (e servidores) em sites diferentes compartilhem arquivos** por meio de compartilhamentos de rede padrão (protocolos SMB e NFS).",
    "explanation_why_incorrect": "• **A: Incorreta.** Os arquivos ficam hospedados no compartilhamento em nuvem do Azure (embora possam ser sincronizados via Azure File Sync).\n• **C: Incorreta.** Para grandes volumes de objetos binários não estruturados (imagens, vídeos) sem necessidade de sistema de arquivos SMB montável, o serviço indicado é o **Armazenamento de Blobs do Azure**.",
    "additional_reading": [
      {
        "title": "O que é o Arquivos do Azure (Azure Files)?",
        "url": "https://learn.microsoft.com/azure/storage/files/storage-files-introduction"
      }
    ]
  },
  {
    "id": 19,
    "type": "single",
    "category": "Descrever considerações sobre o trabalho com dados não relacionais no Azure (15-20%)",
    "category_en": "Describe considerations for working with non-relational data on Azure (15-20%)",
    "objective": "3.2 Selecionar o Azure Cosmos DB para cargas de trabalho de IoT e telemetria de baixa latência em larga escala",
    "what_it_tests": "Escolher a arquitetura NoSQL adequada para ingerir e processar rapidamente dados de telemetria de milhares de prédios e sensores.",
    "question": "Voce está criando um sistema que monitora a temperatura em um conjunto de blocos do escritório e define o ar-condicionado em cada sala em cada bloco para manter uma temperatura ambiente agradéval. Seu sistema precisa gerenciar o ar-condicionado em vários milhares de prédios espalhados pelo país/região, e cada prédio normalmente contém pelo menos 100 salas com ar-condicionado. Que tipo de armazenamento de dados NoSQL é mais apropriado para capturar os dados de temperatura e permitir que eles sejam processados rapidamente?",
    "options": [
      {
        "id": "A",
        "text": "Enviar os dados para um banco de dados do Azure Cosmos DB e usar o Azure Functions para processar os dados."
      },
      {
        "id": "B",
        "text": "Armazenar os dados em um arquivo armazenado em um compartilhamento criado usando o Armazenamento de Arquivos do Azure."
      },
      {
        "id": "C",
        "text": "Gravar as temperaturas em um blob no Armazenamento de Blocos do Azure."
      }
    ],
    "correct_answer": "A",
    "official_rationale": "O Azure Cosmos DB é capaz de ingerir grandes volumes de leituras de sensores IoT com latência de milissegundos e escalabilidade elástica, acionando o Azure Functions (por exemplo, via Change Feed) para processar e ajustar o ar-condicionado em tempo real.",
    "explanation_why_correct": "**Enviar os dados para um banco de dados do Azure Cosmos DB e usar o Azure Functions para processar os dados** garante gravações distribuídas de altíssima taxa de transferência e baixa latência (milissegundos), ideais para telemetria IoT de centenas de milhares de salas.",
    "explanation_why_incorrect": "• **B (Armazenamento de Arquivos) e C (Armazenamento de Blobs): Incorretas.** Gravar arquivos em compartilhamentos SMB ou blobs não oferece a indexação em tempo real nem a baixa latência transacional ponto-a-ponto exigidas para controle imediato de dispositivos em milhares de prédios.",
    "additional_reading": [
      {
        "title": "Casos de uso de IoT no Azure Cosmos DB",
        "url": "https://learn.microsoft.com/azure/cosmos-db/use-cases"
      }
    ]
  },
  {
    "id": 20,
    "type": "single",
    "category": "Identificar considerações sobre dados relacionais no Azure (20-25%)",
    "category_en": "Identify considerations for relational data on Azure (20-25%)",
    "objective": "2.1 Compreender o conceito de provisionamento de serviços de dados no Azure",
    "what_it_tests": "Definir o termo 'provisionamento' no contexto de serviços em nuvem.",
    "question": "O que é provisionamento?",
    "options": [
      {
        "id": "A",
        "text": "É o ato de executar uma série de tarefas que um provedor de serviços realiza para criar e configurar um serviço."
      },
      {
        "id": "B",
        "text": "Fornecer acesso a um serviço existente a outros usuários."
      },
      {
        "id": "C",
        "text": "Ajustar um serviço para aprimorar o desempenho"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "O provisionamento é o ato de executar uma série de tarefas que um provedor de serviços em nuvem (como o Azure) realiza para criar, alocar recursos e configurar um serviço com base nas especificações solicitadas.",
    "explanation_why_correct": "**Provisionamento** **é o ato de executar uma série de tarefas que um provedor de serviços realiza para criar e configurar um serviço** (alocar computação, armazenamento, rede e configurações iniciais).",
    "explanation_why_incorrect": "• **B: Incorreta.** Conceder acesso a usuários existentes refere-se a **autorização / controle de acesso (RBAC)**.\n• **C: Incorreta.** Ajustar um serviço para melhorar a velocidade refere-se a **otimização / ajuste de desempenho (*tuning*)**.",
    "additional_reading": [
      {
        "title": "Provisionar e implantar serviços de banco de dados no Azure",
        "url": "https://learn.microsoft.com/training/modules/explore-relational-data-offerings/"
      }
    ]
  },
  {
    "id": 21,
    "type": "single",
    "category": "Identificar considerações sobre dados relacionais no Azure (20-25%)",
    "category_en": "Identify considerations for relational data on Azure (20-25%)",
    "objective": "2.1 Descrever conceitos de autenticação e controle de acesso no Azure (Entidade de Segurança / Security Principal)",
    "what_it_tests": "Definir o que é uma entidade de segurança (security principal) no Microsoft Entra ID / Azure RBAC.",
    "question": "O que é uma entidade de segurança?",
    "options": [
      {
        "id": "A",
        "text": "Uma coleção nomeada de permissões que podem ser concedidas a um serviço, como a campacidade de usar o serviço para ler, gravar e exluir dados. No Azure, os exemplos incluem Proprietário e Colaborador"
      },
      {
        "id": "B",
        "text": "Um conjunto de recursos gerenciados por um serviço ao qual você pode permitir acesso."
      },
      {
        "id": "C",
        "text": "Um objeto que representa um usuário, grupo, serviço ou identidade gerenciada que está solicitando acesso aos recursos do Azure"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "Uma entidade de segurança (security principal) é um objeto que representa um usuário, grupo, aplicativo/serviço ou identidade gerenciada que solicita acesso aos recursos do Azure.",
    "explanation_why_correct": "Uma **entidade de segurança (*security principal*)** é **um objeto que representa um usuário, grupo, serviço ou identidade gerenciada que está solicitando acesso aos recursos do Azure**.",
    "explanation_why_incorrect": "• **A: Incorreta.** Uma coleção nomeada de permissões (como Proprietário e Colaborador) é a definição de uma **função (*Role Definition*)** no RBAC.\n• **B: Incorreta.** O conjunto de recursos ao qual o acesso se aplica é a definição de **escopo (*Scope*)**.",
    "additional_reading": [
      {
        "title": "Entender o Azure RBAC - Entidade de segurança, Definição de função e Escopo",
        "url": "https://learn.microsoft.com/azure/role-based-access-control/overview"
      }
    ]
  },
  {
    "id": 22,
    "type": "single",
    "category": "Descrever considerações sobre o trabalho com dados não relacionais no Azure (15-20%)",
    "category_en": "Describe considerations for working with non-relational data on Azure (15-20%)",
    "objective": "3.2 Descrever os benefícios da replicação de várias regiões no Azure Cosmos DB",
    "what_it_tests": "Identificar o aumento da disponibilidade (e redução da latência) como vantagem da replicação multi-região no Cosmos DB.",
    "question": "Qual das alternativas a seguir é uma vantagem do uso da replicação de várias regiões com o Cosmos DB?",
    "options": [
      {
        "id": "A",
        "text": "Os dados sempre serão consistentes em todas as regiões."
      },
      {
        "id": "B",
        "text": "A disponibilidade é aumentada."
      },
      {
        "id": "C",
        "text": "Maior segurança para os dados."
      }
    ],
    "correct_answer": "B",
    "official_rationale": "A replicação de várias regiões no Azure Cosmos DB mantém cópias dos dados em múltiplos datacenters pelo mundo, aumentando significativamente a disponibilidade (mesmo se uma região inteira falhar) e reduzindo a latência para usuários globais.",
    "explanation_why_correct": "Com a replicação de várias regiões no Azure Cosmos DB, **a disponibilidade é aumentada**, pois o aplicativo continua operando normalmente a partir de outras regiões caso uma região sofra uma interrupção.",
    "explanation_why_incorrect": "• **A: Incorreta.** Dependendo do nível de consistência configurado (como *Eventual*, *Consistent Prefix* ou *Session*), os dados podem apresentar latência de propagação entre regiões em vez de consistência forte imediata.\n• **C: Incorreta.** A replicação geográfica foca em alta disponibilidade e baixa latência, não em alterar o nível de criptografia/segurança.",
    "additional_reading": [
      {
        "title": "Distribuir dados globalmente com o Azure Cosmos DB",
        "url": "https://learn.microsoft.com/azure/cosmos-db/distribute-data-globally"
      }
    ]
  },
  {
    "id": 23,
    "type": "single",
    "category": "Descrever uma carga de trabalho de análise no Azure (25-30%)",
    "category_en": "Describe an analytics workload on Azure (25-30%)",
    "objective": "4.2 Identificar cenários de uso do Azure Synapse Analytics",
    "what_it_tests": "Reconhecer que o Azure Synapse Analytics é projetado para processar consultas analíticas e agregações muito complexas sobre grandes volumes de dados (OLAP/Big Data).",
    "question": "Quando você deve usar o Azure Synapse Analytics?",
    "options": [
      {
        "id": "A",
        "text": "Para executar consultas e agregações muito complexas"
      },
      {
        "id": "B",
        "text": "Para criar dashboards com base em dados tabulares"
      },
      {
        "id": "C",
        "text": "Para habilitar um grande número de usuários para consultar dados de análise"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "O Azure Synapse Analytics utiliza processamento massivamente paralelo (MPP) para executar consultas analíticas e agregações muito complexas sobre grandes volumes de dados em um data warehouse ou data lake.",
    "explanation_why_correct": "Você deve usar o **Azure Synapse Analytics** **para executar consultas e agregações muito complexas** sobre grandes volumes de dados históricos e analíticos.",
    "explanation_why_incorrect": "• **B: Incorreta.** A criação de dashboards visuais interativos para usuários finais é o papel do **Microsoft Power BI**.\n• **C: Incorreta.** Um pool SQL dedicado de data warehouse é otimizado para um número menor de consultas analíticas extremamente pesadas e complexas, e não para dezenas de milhares de acessos concorrentes leves.",
    "additional_reading": [
      {
        "title": "O que é o Azure Synapse Analytics?",
        "url": "https://learn.microsoft.com/azure/synapse-analytics/overview-what-is"
      }
    ]
  },
  {
    "id": 24,
    "type": "single",
    "category": "Descrever uma carga de trabalho de análise no Azure (25-30%)",
    "category_en": "Describe an analytics workload on Azure (25-30%)",
    "objective": "4.3 Descrever os tipos de análise de dados (Descritiva, Diagnóstica, Preditiva, Prescritiva e Cognitiva)",
    "what_it_tests": "Definir a análise descritiva com base no uso de dados históricos para responder o que aconteceu.",
    "question": "Uma análise do tipo Descritiva...",
    "options": [
      {
        "id": "A",
        "text": "Ajuda a responder perguntas sobre o que aconteceu, com base em dados históriocos"
      },
      {
        "id": "B",
        "text": "Ajuda a responder a perguntas sobre por que as coisas aconteceram"
      },
      {
        "id": "C",
        "text": "Ajuda a responder perguntas sobre o que acontecerá no futuro"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "A análise descritiva ajuda a responder perguntas sobre o que aconteceu com base em dados históricos.",
    "explanation_why_correct": "Uma análise do tipo **Descritiva** **ajuda a responder perguntas sobre o que aconteceu, com base em dados históricos**.",
    "explanation_why_incorrect": "• **B: Incorreta.** Responder *por que* as coisas aconteceram é função da análise **diagnóstica**.\n• **C: Incorreta.** Responder *o que acontecerá no futuro* é função da análise **preditiva**.",
    "additional_reading": [
      {
        "title": "Explorar conceitos de análise de dados",
        "url": "https://learn.microsoft.com/training/modules/explore-concepts-of-data-analytics/"
      }
    ]
  },
  {
    "id": 25,
    "type": "single",
    "category": "Descrever uma carga de trabalho de análise no Azure (25-30%)",
    "category_en": "Describe an analytics workload on Azure (25-30%)",
    "objective": "4.1 Compreender a finalidade da etapa de ingestão de dados em uma arquitetura de análise",
    "what_it_tests": "Distinguir a captura rápida de dados (ingestão) das etapas posteriores de transformação complexa e visualização.",
    "question": "Qual é a finalidade da ingestão de dados?",
    "options": [
      {
        "id": "A",
        "text": "Para executar transformações de dados complexas sobre os dados recebidos de fontes externas"
      },
      {
        "id": "B",
        "text": "Para capturar dados que fluem para um sistema de data warehouse o mais rápido possível"
      },
      {
        "id": "C",
        "text": "Para visualizar os resultados da análise de dados"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "A finalidade primordial da ingestão de dados é capturar dados provenientes de fontes externas que fluem para um data lake ou sistema de data warehouse com eficiência e rapidez.",
    "explanation_why_correct": "A finalidade da ingestão de dados é **capturar dados que fluem para um sistema de data warehouse (ou data lake) o mais rápido possível**, garantindo que os dados brutos sejam coletados com segurança.",
    "explanation_why_incorrect": "• **A: Incorreta.** Refere-se à etapa de **transformação/processamento de dados**.\n• **C: Incorreta.** Refere-se à etapa de **visualização e geração de relatórios** (ex.: Power BI).",
    "additional_reading": [
      {
        "title": "Ingestão e processamento de dados em larga escala",
        "url": "https://learn.microsoft.com/training/modules/explore-concepts-of-data-analytics/"
      }
    ]
  },
  {
    "id": 26,
    "type": "single",
    "category": "Descrever uma carga de trabalho de análise no Azure (25-30%)",
    "category_en": "Describe an analytics workload on Azure (25-30%)",
    "objective": "4.3 Identificar exemplos de análise cognitiva",
    "what_it_tests": "Reconhecer que a transcrição de arquivos de áudio (conversão de fala em texto com IA) é um exemplo de análise cognitiva.",
    "question": "Transcrever arquivos de áudio é um exemplo de?",
    "options": [
      {
        "id": "A",
        "text": "Preditivo"
      },
      {
        "id": "B",
        "text": "Descritivo"
      },
      {
        "id": "C",
        "text": "Cognitivo"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "A análise cognitiva aplica algoritmos de inteligência artificial e aprendizado de máquina a dados não estruturados (como transcrever arquivos de áudio, reconhecer objetos em imagens ou extrair entidades de textos).",
    "explanation_why_correct": "Transcrever arquivos de áudio para texto utiliza modelos de inteligência artificial (reconhecimento de fala) sobre dados não estruturados, sendo um exemplo clássico de análise **Cognitiva (`Cognitivo`)**.",
    "explanation_why_incorrect": "• **A (Preditivo): Incorreta.** Estima tendências futuras com base em séries históricas.\n• **B (Descritivo): Incorreta.** Resume métricas numéricas históricas.",
    "additional_reading": [
      {
        "title": "Análise Cognitiva nos conceitos de análise de dados",
        "url": "https://learn.microsoft.com/training/modules/explore-concepts-of-data-analytics/"
      }
    ]
  },
  {
    "id": 27,
    "type": "single",
    "category": "Descrever uma carga de trabalho de análise no Azure (25-30%)",
    "category_en": "Describe an analytics workload on Azure (25-30%)",
    "objective": "4.2 Comparar um Data Lake e um Data Warehouse",
    "what_it_tests": "Identificar a diferença estrutural fundamental entre um data lake (dados brutos em formatos nativos) e um data warehouse (dados estruturados e modelados).",
    "question": "Qual é a principal diferença entre um data lake e um data warehouse?",
    "options": [
      {
        "id": "A",
        "text": "Um data lake armazena informações estruturadas, mas um data wirehoise armazena dados brutos"
      },
      {
        "id": "B",
        "text": "Um data lake armazena dados brutos, mas um data warehouse armazena informações estruturadas"
      },
      {
        "id": "C",
        "text": "Os dados armazenados em um data lake são dinâmicos, mas as informações armazenadas em um data warehouse são estáticas"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "Um data lake armazena grandes volumes de dados brutos (estruturados, semiestruturados e não estruturados) em seu formato nativo, enquanto um data warehouse armazena informações estruturadas e processadas em tabelas relacionais/dimensionais.",
    "explanation_why_correct": "**Um data lake armazena dados brutos** (em qualquer formato: CSV, JSON, Parquet, logs, imagens), **mas um data warehouse armazena informações estruturadas** (organizadas em esquemas de tabelas de fatos e dimensões prontas para consultas analíticas).",
    "explanation_why_incorrect": "• **A: Incorreta.** Inverte os conceitos de data lake e data warehouse.\n• **C: Incorreta.** Tanto o data lake quanto o data warehouse recebem atualizações periódicas ou contínuas de novos dados.",
    "additional_reading": [
      {
        "title": "Data Lake vs Data Warehouse no Azure",
        "url": "https://learn.microsoft.com/azure/architecture/data-guide/relational-data/data-warehousing"
      }
    ]
  },
  {
    "id": 28,
    "type": "single",
    "category": "Descrever uma carga de trabalho de análise no Azure (25-30%)",
    "category_en": "Describe an analytics workload on Azure (25-30%)",
    "objective": "4.3 Descrever o fluxo de trabalho padrão entre Power BI Desktop, Serviço do Power BI e Power BI Mobile",
    "what_it_tests": "Identificar a sequência correta de criação no Power BI Desktop, publicação no Serviço do Power BI e consumo no serviço/Power BI Mobile.",
    "question": "Qual o fluxo comum de uma atividade no Power BI?",
    "options": [
      {
        "id": "A",
        "text": "Crie um relatório no Power BI Mobile, compartilhe-o com o Power BI Desktop, visualize e interaja no serviço do Power BI"
      },
      {
        "id": "B",
        "text": "Crie um relatório no serviço do Power BI, compartilhe-o com o Power BI Mobile, interaja com ele no Power BI Desktop"
      },
      {
        "id": "C",
        "text": "Traga os dados para o Power BI Desktop e crie um relatório, compartilhe-o com o serviço do Power BI, visualize e interaja com relatórios e painéis no serviço e no Power Bi Mobile"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "O fluxo de trabalho comum no Power BI começa conectando-se aos dados e criando o modelo e o relatório no Power BI Desktop; em seguida, publica-se no Serviço do Power BI (na nuvem), onde painéis são criados e compartilhados para visualização no navegador ou no Power BI Mobile.",
    "explanation_why_correct": "O fluxo padrão é: **1) Trazer os dados para o Power BI Desktop e criar um relatório; 2) Compartilhá-lo (publicá-lo) no serviço do Power BI; 3) Visualizar e interagir com relatórios e painéis no serviço do Power BI e no aplicativo Power BI Mobile**.",
    "explanation_why_incorrect": "• **A e B: Incorretas.** O Power BI Mobile é um aplicativo voltado ao consumo e visualização de relatórios/painéis em dispositivos móveis, e não a ferramenta de autoria de modelos de dados.",
    "additional_reading": [
      {
        "title": "O fluxo de trabalho comum no Power BI",
        "url": "https://learn.microsoft.com/power-bi/fundamentals/power-bi-overview#the-flow-of-work-in-power-bi"
      }
    ]
  },
  {
    "id": 29,
    "type": "multi",
    "category": "Descrever considerações sobre o trabalho com dados não relacionais no Azure (15-20%)",
    "category_en": "Describe considerations for working with non-relational data on Azure (15-20%)",
    "objective": "3.1 Selecionar opções de redundância geográfica para Contas de Armazenamento do Azure",
    "what_it_tests": "Identificar os dois tipos de replicação que copiam dados automaticamente para uma região secundária fora da região primária (GRS e RA-GRS).",
    "question": "Você precisa criar uma conta de armazenamento do Azure. Os dados na conta devem ser replicados automaticamente fora da região. Quais dois tipos de replicação você pode usar para a conta de armazenamento?",
    "options": [
      {
        "id": "A",
        "text": "Armazenamento com redundância de zona (ZRS)"
      },
      {
        "id": "B",
        "text": "Armazenamento com redundãncia geográfica com acesso de leitura (RA-GRS)"
      },
      {
        "id": "C",
        "text": "Armazenamento georredundant local (LRS)"
      },
      {
        "id": "D",
        "text": "Armazenamento georredundante (GRS)"
      }
    ],
    "correct_answer": [
      "B",
      "D"
    ],
    "official_rationale": "Para replicar dados automaticamente para uma região secundária distante da região primária, você deve usar o Armazenamento com Redundância Geográfica (GRS) ou o Armazenamento com Redundância Geográfica com Acesso de Leitura (RA-GRS).",
    "explanation_why_correct": "• **B (`Armazenamento com redundância geográfica com acesso de leitura - RA-GRS` - Correta):** Replica os dados assincronamente para uma região secundária e permite leitura na região secundária.\n• **D (`Armazenamento georredundante - GRS` - Correta):** Replica os dados automaticamente para uma segunda região geográfica pareada.",
    "explanation_why_incorrect": "• **A (`ZRS` - Incorreta):** Replica os dados entre três zonas de disponibilidade **dentro da mesma região**.\n• **C (`LRS` - Incorreta):** Mantém três cópias apenas dentro de um único datacenter **na mesma região**.",
    "additional_reading": [
      {
        "title": "Redundância do Armazenamento do Azure (LRS, ZRS, GRS, RA-GRS)",
        "url": "https://learn.microsoft.com/azure/storage/common/storage-redundancy"
      }
    ]
  },
  {
    "id": 30,
    "type": "single",
    "category": "Descrever uma carga de trabalho de análise no Azure (25-30%)",
    "category_en": "Describe an analytics workload on Azure (25-30%)",
    "objective": "4.3 Identificar os cinco blocos de construção (building blocks) do Microsoft Power BI",
    "what_it_tests": "Reconhecer os blocos de construção fundamentais do Power BI: Visualizações, Conjuntos de dados, Relatórios, Painéis e Blocos (Tiles).",
    "question": "Quais dos seguintes são blocos de construção do Power BI?",
    "options": [
      {
        "id": "A",
        "text": "Blocos, painéis, bancos de dados, dispositivos móveis"
      },
      {
        "id": "B",
        "text": "Visualizações, conjunto de dados, relatórios, painéis, blocos"
      },
      {
        "id": "C",
        "text": "Visual Studio, C# e arquivos JSON"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "Os cinco blocos de construção básicos do Power BI são: Visualizações (Visualizations), Conjuntos de dados (Datasets / Semantic models), Relatórios (Reports), Painéis (Dashboards) e Blocos (Tiles).",
    "explanation_why_correct": "Os blocos de construção oficiais do Power BI são: **Visualizações, conjunto de dados, relatórios, painéis e blocos (*tiles*)**.",
    "explanation_why_incorrect": "• **A: Incorreta.** Dispositivos móveis e bancos de dados são plataformas/fontes externas, e não blocos de construção internos do Power BI.\n• **C: Incorreta.** Visual Studio e C# são ferramentas de desenvolvimento de software.",
    "additional_reading": [
      {
        "title": "Os blocos de construção do Power BI",
        "url": "https://learn.microsoft.com/power-bi/fundamentals/power-bi-overview#the-building-blocks-of-power-bi"
      }
    ]
  },
  {
    "id": 31,
    "type": "single",
    "category": "Descrever uma carga de trabalho de análise no Azure (25-30%)",
    "category_en": "Describe an analytics workload on Azure (25-30%)",
    "objective": "4.3 Descrever Aplicativos (Apps) no serviço do Microsoft Power BI",
    "what_it_tests": "Identificar o recurso 'Aplicativo' (App) no Power BI como uma coleção empacotada de painéis e relatórios prontos para distribuição.",
    "question": "Como se chama uma coleção de visuais prontos, pré-organizados em painéis e relatórios no Power BI?",
    "options": [
      {
        "id": "A",
        "text": "A Tela"
      },
      {
        "id": "B",
        "text": "Atualização programada"
      },
      {
        "id": "C",
        "text": "Um Aplicativo"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "No Power BI, um Aplicativo (App) é uma coleção empacotada de painéis e relatórios prontos e pré-organizados que pode ser publicada e compartilhada com toda a organização ou grupos específicos.",
    "explanation_why_correct": "**Um Aplicativo (*App*)** no Power BI reúne painéis e relatórios relacionados em um único pacote organizado para distribuição simplificada aos consumidores de dados.",
    "explanation_why_incorrect": "• **A (A Tela / Canvas): Incorreta.** É a área de trabalho em branco onde os visuais são desenhados dentro de uma página de relatório.\n• **B (Atualização programada): Incorreta.** É o agendamento para recarregar os dados do conjunto de dados a partir da fonte.",
    "additional_reading": [
      {
        "title": "O que são aplicativos no Power BI?",
        "url": "https://learn.microsoft.com/power-bi/consumer/end-user-apps"
      }
    ]
  },
  {
    "id": 32,
    "type": "single",
    "category": "Descrever uma carga de trabalho de análise no Azure (25-30%)",
    "category_en": "Describe an analytics workload on Azure (25-30%)",
    "objective": "4.1 Descrever pipelines e gatilhos no Azure Data Factory",
    "what_it_tests": "Identificar que um Pipeline é o componente do Azure Data Factory disparado para executar atividades de ingestão e transformação.",
    "question": "Qual componente de um Azure Data Factory pode ser disparado para executar tarefas de ingestão de dados?",
    "options": [
      {
        "id": "A",
        "text": "Arquivo CSV"
      },
      {
        "id": "B",
        "text": "Pipeline"
      },
      {
        "id": "C",
        "text": "Serviço vinculado"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "No Azure Data Factory, um Pipeline é o agrupamento lógico de atividades que pode ser executado sob demanda ou disparado por um gatilho (trigger) para realizar tarefas de ingestão de dados.",
    "explanation_why_correct": "O **Pipeline** é o componente executável do Azure Data Factory que agrupa as atividades de movimentação e transformação de dados e pode ser disparado manualmente ou por agendamentos/eventos.",
    "explanation_why_incorrect": "• **A (Arquivo CSV): Incorreta.** É apenas um formato de arquivo de dados.\n• **C (Serviço vinculado): Incorreta.** Contém apenas as informações de conexão com a fonte ou destino, não executando tarefas por si só.",
    "additional_reading": [
      {
        "title": "Pipelines e atividades no Azure Data Factory",
        "url": "https://learn.microsoft.com/azure/data-factory/concepts-pipelines-activities"
      }
    ]
  },
  {
    "id": 33,
    "type": "single",
    "category": "Identificar considerações sobre dados relacionais no Azure (20-25%)",
    "category_en": "Identify considerations for relational data on Azure (20-25%)",
    "objective": "2.2 Classificar comandos SQL em DML, DDL e DCL",
    "what_it_tests": "Identificar INSERT como comando de Linguagem de Manipulação de Dados (DML).",
    "question": "Qual comando é um exemplo de linguagem de manipulação de dados (DML)",
    "options": [
      {
        "id": "A",
        "text": "REVOKE"
      },
      {
        "id": "B",
        "text": "DISABLE"
      },
      {
        "id": "C",
        "text": "INSERT"
      },
      {
        "id": "D",
        "text": "GRANT"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "INSERT é um comando DML (Data Manipulation Language) usado para inserir novas linhas de dados em uma tabela.",
    "explanation_why_correct": "**`INSERT`** pertence à **Linguagem de Manipulação de Dados (DML)**, junto com `SELECT`, `UPDATE` e `DELETE`.",
    "explanation_why_incorrect": "• **A (`REVOKE`) e D (`GRANT`): Incorretas.** Pertencem à DCL (*Data Control Language*), usada para gerenciar permissões de acesso.\n• **B (`DISABLE`): Incorreta.** É usada em comandos administrativos para desativar índices ou gatilhos.",
    "additional_reading": [
      {
        "title": "INSERT (Transact-SQL) - Microsoft Learn",
        "url": "https://learn.microsoft.com/sql/t-sql/statements/insert-transact-sql"
      }
    ]
  },
  {
    "id": 34,
    "type": "single",
    "category": "Descrever uma carga de trabalho de análise no Azure (25-30%)",
    "category_en": "Describe an analytics workload on Azure (25-30%)",
    "objective": "4.2 Descrever o uso do PolyBase para virtualização e ingestão de dados externos",
    "what_it_tests": "Compreender que o PolyBase permite usar consultas T-SQL para ler dados diretamente de fontes externas (como Data Lake Storage, Blob Storage ou bancos externos).",
    "question": "Quando você pode usar o PolyBase?",
    "options": [
      {
        "id": "A",
        "text": "Para consultar dados de fontes de dados externas do banco de dados SQL do Azure"
      },
      {
        "id": "B",
        "text": "Para ingerir dados de streaming usando o Azure Databricks"
      },
      {
        "id": "C",
        "text": "Para orquestrar atividades no Azure Data Factory"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "O PolyBase permite que o SQL Server, o Banco de Dados SQL / Instância Gerenciada e o Azure Synapse Analytics processem consultas Transact-SQL que leem dados diretamente de fontes de dados externas.",
    "explanation_why_correct": "O **PolyBase** é usado **para consultar dados de fontes de dados externas** (como arquivos no Azure Data Lake Storage / Blob Storage ou outros bancos relacionais) diretamente usando instruções T-SQL e tabelas externas.",
    "explanation_why_incorrect": "• **B: Incorreta.** O PolyBase é um recurso do ecossistema SQL/Synapse SQL, não do Azure Databricks.\n• **C: Incorreta.** A orquestração de atividades no Azure Data Factory é feita por pipelines e fluxos de controle.",
    "additional_reading": [
      {
        "title": "Introdução ao PolyBase - Virtualização de dados com T-SQL",
        "url": "https://learn.microsoft.com/sql/relational-databases/polybase/polybase-guide"
      }
    ]
  },
  {
    "id": 35,
    "type": "single",
    "category": "Descrever uma carga de trabalho de análise no Azure (25-30%)",
    "category_en": "Describe an analytics workload on Azure (25-30%)",
    "objective": "4.1 Identificar serviços de ingestão de dados compatíveis com o Azure Synapse Analytics",
    "what_it_tests": "Reconhecer o Azure Data Factory (e os Pipelines do Synapse baseados nele) como o serviço usado para ingerir dados no Azure Synapse Analytics.",
    "question": "Quais desses serviços podem ser usados para ingerir dados no Azure Synapse Analyics?",
    "options": [
      {
        "id": "A",
        "text": "Azure Data Factory"
      },
      {
        "id": "B",
        "text": "Power BI"
      },
      {
        "id": "C",
        "text": "Azure Active Directory"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "O Azure Data Factory (ou o mecanismo integrado de Pipelines do Azure Synapse, que compartilha a mesma tecnologia) é o serviço de integração usado para ingerir e carregar dados no Azure Synapse Analytics.",
    "explanation_why_correct": "O **Azure Data Factory** é o serviço de orquestração e ETL/ELT projetado para conectar-se a dezenas de fontes externas e **ingerir dados no Azure Synapse Analytics**.",
    "explanation_why_incorrect": "• **B (Power BI): Incorreta.** É uma ferramenta de visualização que consome dados do Synapse para exibir relatórios, não um serviço de ingestão para o data warehouse.\n• **C (Azure Active Directory): Incorreta.** É um serviço de gerenciamento de identidade e controle de acesso.",
    "additional_reading": [
      {
        "title": "Carregar dados no Azure Synapse Analytics usando o Azure Data Factory",
        "url": "https://learn.microsoft.com/azure/data-factory/connector-azure-sql-data-warehouse"
      }
    ]
  },
  {
    "id": 36,
    "type": "single",
    "category": "Descrever uma carga de trabalho de análise no Azure (25-30%)",
    "category_en": "Describe an analytics workload on Azure (25-30%)",
    "objective": "4.2 Selecionar o mecanismo de processamento adequado no Azure Synapse Analytics",
    "what_it_tests": "Identificar que o Pool de SQL do Synapse (Synapse SQL pool) armazena tabelas relacionais do data warehouse e carrega dados do Data Lake (via PolyBase/COPY).",
    "question": "Você tem um grande volume de dados mantidos em arquivos no Azure Data Lake Storage. Você deseja recuperar os dados desses arquivos e usá-los para preencher as tabelas mantidas no Azure Synapse Analytics. Qual opção de processamento é mais apropriada?",
    "options": [
      {
        "id": "A",
        "text": "Usar o link do Azure Synapse para se conectar ao Azure Data Lake Storage e baixar os dados"
      },
      {
        "id": "B",
        "text": "Pool de SQL do Synapse"
      },
      {
        "id": "C",
        "text": "Pool de Spark do Synapse"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "Para recuperar dados de arquivos no Azure Data Lake Storage e preencher tabelas relacionais mantidas no Azure Synapse Analytics, utiliza-se o Pool de SQL do Synapse (com PolyBase ou a instrução COPY INTO).",
    "explanation_why_correct": "O **Pool de SQL do Synapse (*Synapse SQL pool*)** é o mecanismo que hospeda as tabelas do data warehouse no Azure Synapse Analytics e permite importar rapidamente grandes volumes de arquivos do Azure Data Lake Storage (usando `COPY INTO` ou PolyBase).",
    "explanation_why_incorrect": "• **A (Link do Azure Synapse): Incorreta.** O *Azure Synapse Link* conecta bancos de dados operacionais (como Azure Cosmos DB ou SQL/Dataverse) ao Synapse para HTAP, e não baixa arquivos do Data Lake Storage.\n• **C (Pool de Spark do Synapse): Incorreta.** Embora o Spark processe arquivos no Data Lake na memória, as tabelas relacionais dedicadas do data warehouse do Synapse são mantidas e preenchidas no **Pool de SQL do Synapse**.",
    "additional_reading": [
      {
        "title": "Carregar dados no pool de SQL dedicado do Azure Synapse Analytics",
        "url": "https://learn.microsoft.com/azure/synapse-analytics/sql-data-warehouse/design-elt-data-loading"
      }
    ]
  },
  {
    "id": 37,
    "type": "single",
    "category": "Descrever uma carga de trabalho de análise no Azure (25-30%)",
    "category_en": "Describe an analytics workload on Azure (25-30%)",
    "objective": "4.2 Descrever os componentes do Azure Synapse Analytics (SQL pools, Spark pools, Pipelines, Studio)",
    "what_it_tests": "Identificar que os Pools do Apache Spark no Azure Synapse Analytics permitem executar código de ciência de dados e treinar modelos de IA integrados ao Azure Machine Learning.",
    "question": "Quais dos componentes do Azure Synapse Analytics permitem treinar os modelos de IA usando o AzureML?",
    "options": [
      {
        "id": "A",
        "text": "Synapse Studio"
      },
      {
        "id": "B",
        "text": "Pipelines do Synapse"
      },
      {
        "id": "C",
        "text": "Spark do Synapse"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "O Apache Spark no Azure Synapse Analytics (Spark do Synapse) oferece suporte a Python, Scala, R e bibliotecas de aprendizado de máquina (como MLlib e integração com o Azure Machine Learning) para treinar modelos de IA.",
    "explanation_why_correct": "O **Spark do Synapse (*Synapse Spark pool*)** fornece clusters Apache Spark onde cientistas de dados podem executar notebooks Python/Scala e integrar com o **Azure Machine Learning (AzureML)** para treinar modelos de IA.",
    "explanation_why_incorrect": "• **A (Synapse Studio): Incorreta.** É apenas a interface web de desenvolvimento e gerenciamento.\n• **B (Pipelines do Synapse): Incorreta.** São usados para orquestração de fluxos de trabalho e movimentação de dados.",
    "additional_reading": [
      {
        "title": "Aprendizado de máquina com Apache Spark no Azure Synapse Analytics",
        "url": "https://learn.microsoft.com/azure/synapse-analytics/machine-learning/what-is-machine-learning"
      }
    ]
  },
  {
    "id": 38,
    "type": "single",
    "category": "Identificar considerações sobre dados relacionais no Azure (20-25%)",
    "category_en": "Identify considerations for relational data on Azure (20-25%)",
    "objective": "1.3 Descrever o uso de exibições (Views) em bancos de dados relacionais",
    "what_it_tests": "Selecionar uma View (exibição) para salvar uma consulta SQL com junções e colunas calculadas para reutilização por outros usuários.",
    "question": "Você tem uma consulta SQL que combina dados do cliente e dados do pedido. A consulta inclui colunas calculadas. Você precisa criar um objeto de banco de dados que permita que outros usuários executem novamente a mesma consulta SQL. O que você deve criar?",
    "options": [
      {
        "id": "A",
        "text": "Index"
      },
      {
        "id": "B",
        "text": "View"
      },
      {
        "id": "C",
        "text": "Table"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "Uma View (exibição) é uma tabela virtual baseada no conjunto de resultados de uma consulta SQL. Ela permite encapsular junções (JOINs) e colunas calculadas para que outros usuários possam consultá-la facilmente como se fosse uma tabela.",
    "explanation_why_correct": "Você deve criar uma **`View`** (exibição): ela salva a definição da consulta SQL (incluindo o `JOIN` entre clientes e pedidos e as colunas calculadas) como um objeto reutilizável no banco de dados.",
    "explanation_why_incorrect": "• **A (Index): Incorreta.** Um índice acelera buscas em colunas, mas não encapsula uma consulta reutilizável para os usuários.\n• **C (Table): Incorreta.** Uma tabela armazena dados físicos estáticos; duplicar os dados em outra tabela exigiria recarregá-la manualmente sempre que os pedidos mudassem.",
    "additional_reading": [
      {
        "title": "Exibições (Views) no SQL Server e Banco de Dados SQL do Azure",
        "url": "https://learn.microsoft.com/sql/relational-databases/views/views"
      }
    ]
  },
  {
    "id": 39,
    "type": "single",
    "category": "Descrever uma carga de trabalho de análise no Azure (25-30%)",
    "category_en": "Describe an analytics workload on Azure (25-30%)",
    "objective": "4.2 Trabalhar com notebooks no Azure Databricks",
    "what_it_tests": "Identificar a sintaxe de comando mágico (%language, como %scala, %python, %sql) para alterar a linguagem de uma célula individual em um notebook do Azure Databricks.",
    "question": "No Azure Databricks, como alterar a linguagem usada por uma célula?",
    "options": [
      {
        "id": "A",
        "text": "A primeira linha da célula é %language. Por exemplo, %scala"
      },
      {
        "id": "B",
        "text": "Altere a linguagem do notebook antes de escrever os comandos"
      },
      {
        "id": "C",
        "text": "Encapsular o comando na célula com ##language##"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Nos notebooks do Azure Databricks, você pode substituir a linguagem padrão em uma célula específica colocando o comando mágico %<linguagem> (como %scala, %python, %sql ou %r) na primeira linha da célula.",
    "explanation_why_correct": "No Azure Databricks, você altera a linguagem de uma célula específica usando um *magic command* na **primeira linha da célula no formato `%language` (por exemplo, `%scala`, `%python`, `%sql`, `%r` ou `%md`)**.",
    "explanation_why_incorrect": "• **B: Incorreta.** Alterar a linguagem do notebook muda a linguagem padrão do notebook inteiro, não apenas de uma célula específica.\n• **C: Incorreta.** A sintaxe `##language##` não existe no Databricks.",
    "additional_reading": [
      {
        "title": "Notebooks do Azure Databricks - Misturar linguagens com comandos mágicos",
        "url": "https://learn.microsoft.com/azure/databricks/notebooks/notebooks-code#mix-languages"
      }
    ]
  },
  {
    "id": 40,
    "type": "multi",
    "category": "Descrever os principais conceitos de dados (25-30%)",
    "category_en": "Describe core data concepts (25-30%)",
    "objective": "1.1 Identificar características do processamento de dados em tempo real (streaming)",
    "what_it_tests": "Selecionar as duas propriedades do processamento em tempo real: baixa latência e processamento contínuo à medida que os dados são criados.",
    "question": "Quais são as duas características do processamento de dados em tempo real?",
    "options": [
      {
        "id": "A",
        "text": "Os dados são processados periodicamente"
      },
      {
        "id": "B",
        "text": "Espera-se baixa latência"
      },
      {
        "id": "C",
        "text": "Alta latência é aceitável"
      },
      {
        "id": "D",
        "text": "Os dados são processados à medida que são criados"
      }
    ],
    "correct_answer": [
      "B",
      "D"
    ],
    "official_rationale": "O processamento de dados em tempo real caracteriza-se pela expectativa de baixa latência e pelo processamento imediato dos dados à medida que são gerados.",
    "explanation_why_correct": "• **B (`Espera-se baixa latência` - Correta):** Sistemas em tempo real respondem em milissegundos ou segundos.\n• **D (`Os dados são processados à medida que são criados` - Correta):** Cada evento é processado em fluxo contínuo assim que chega.",
    "explanation_why_incorrect": "• **A (`Os dados são processados periodicamente`) e C (`Alta latência é aceitável`): Incorretas.** Ambas descrevem o processamento em **lote (*batch*)**.",
    "additional_reading": [
      {
        "title": "Processamento de dados em tempo real no Azure",
        "url": "https://learn.microsoft.com/azure/architecture/data-guide/big-data/real-time-processing"
      }
    ]
  },
  {
    "id": 41,
    "type": "single",
    "category": "Identificar considerações sobre dados relacionais no Azure (20-25%)",
    "category_en": "Identify considerations for relational data on Azure (20-25%)",
    "objective": "2.1 Selecionar a oferta de banco de dados relacional que minimiza a manutenção contínua",
    "what_it_tests": "Identificar o Banco de Dados SQL do Azure como o serviço relacional PaaS que exige o mínimo de manutenção administrativa.",
    "question": "Sua empresa precisa implementar um banco de dados relacional no azure. A solucção deve minimizar a manutenção contínua. Qual serviço do Azure você deve usar?",
    "options": [
      {
        "id": "A",
        "text": "Azure HDInsight"
      },
      {
        "id": "B",
        "text": "Banco de Dados SQL do Azure"
      },
      {
        "id": "C",
        "text": "Azure Cosmos DB"
      },
      {
        "id": "D",
        "text": "SQL Server em máquinas virtuais do Azure"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "O Banco de Dados SQL do Azure é uma oferta PaaS totalmente gerenciada que cuida de patches, backups e alta disponibilidade automaticamente, minimizando a manutenção contínua.",
    "explanation_why_correct": "O **Banco de Dados SQL do Azure** (PaaS) é um banco de dados relacional totalmente gerenciado que **minimiza a manutenção contínua** de infraestrutura e software.",
    "explanation_why_incorrect": "• **A (Azure HDInsight): Incorreta.** Serviço de clusters de Big Data Apache Hadoop/Spark.\n• **C (Azure Cosmos DB): Incorreta.** Serviço de banco de dados não relacional (NoSQL).\n• **D (SQL Server em máquinas virtuais do Azure): Incorreta.** Oferta IaaS na qual você precisa gerenciar o sistema operacional e o banco de dados.",
    "additional_reading": [
      {
        "title": "Visão geral do Banco de Dados SQL do Azure (PaaS)",
        "url": "https://learn.microsoft.com/azure/azure-sql/database/sql-database-paas-overview"
      }
    ]
  },
  {
    "id": 42,
    "type": "single",
    "category": "Identificar considerações sobre dados relacionais no Azure (20-25%)",
    "category_en": "Identify considerations for relational data on Azure (20-25%)",
    "objective": "2.1 Descrever a automação de provisionamento com modelos do Azure Resource Manager (ARM templates)",
    "what_it_tests": "Compreender a finalidade dos modelos do Azure Resource Manager (Infraestrutura como Código para implantar grupos interdependentes de recursos de forma repetível).",
    "question": "Quando você pode usar um modelo do Azure Resource Manager?",
    "options": [
      {
        "id": "A",
        "text": "Para automatizar a criação de um grupo interdependente de recursos do Azure de forma repetível"
      },
      {
        "id": "B",
        "text": "Para aplicar politicas do Azure para implantações de vários locatários"
      },
      {
        "id": "C",
        "text": "Para provisionar assinaturas do Azure"
      },
      {
        "id": "D",
        "text": "Para controlar quais servilois e adminstradores e desenvolvedores de recursos pode implantar no portal do Azure"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Um modelo do Azure Resource Manager (ARM template) é um arquivo JSON (ou Bicep) de Infraestrutura como Código que permite automatizar a criação e implantação de um grupo interdependente de recursos do Azure de maneira consistente e repetível.",
    "explanation_why_correct": "Você usa um **modelo do Azure Resource Manager (*ARM template*)** **para automatizar a criação de um grupo interdependente de recursos do Azure de forma repetível** (Infraestrutura como Código — IaC).",
    "explanation_why_incorrect": "• **B e D: Incorretas.** Aplicar regras de governança e restringir quais recursos os desenvolvedores podem implantar é função do **Azure Policy** e do **Azure RBAC**.\n• **C: Incorreta.** Modelos ARM padrão são implantados dentro de uma assinatura/grupo de recursos para criar serviços, sendo a criação de assinaturas gerenciada no nível de faturamento/grupos de gerenciamento.",
    "additional_reading": [
      {
        "title": "O que são modelos do Azure Resource Manager (ARM templates)?",
        "url": "https://learn.microsoft.com/azure/azure-resource-manager/templates/overview"
      }
    ]
  }
];

const DP900_SIMULADO_3_QUESTIONS = [
  {
    "id": 1,
    "type": "single",
    "category": "Identificar considerações sobre dados relacionais no Azure (20-25%)",
    "category_en": "Identify considerations for relational data on Azure (20-25%)",
    "objective": "2.1 Comparar o Banco de Dados SQL do Azure (Banco de Dados Único) e a Instância Gerenciada de SQL do Azure",
    "what_it_tests": "Identificar o diferencial exclusivo da Instância Gerenciada de SQL do Azure em relação ao Banco de Dados SQL individual: suporte nativo a consultas e transações entre bancos de dados na mesma instância.",
    "question": "Qual é a vantagem de hospedar um banco de dados na instância gerenciada do Azure SQL em comparação com um banco de dados Azure SQL?",
    "options": [
      {
        "id": "A",
        "text": "alta disponibilidade integrada"
      },
      {
        "id": "B",
        "text": "backups automáticos iniciados pelo sistema"
      },
      {
        "id": "C",
        "text": "suporte para criptografia em repouso"
      },
      {
        "id": "D",
        "text": "suporte nativo para consultas e transações entre bancos de dados"
      }
    ],
    "correct_answer": "D",
    "official_rationale": "Diferentemente de um Banco de Dados SQL do Azure individual, a Instância Gerenciada de SQL do Azure oferece suporte nativo para consultas e transações distribuídas entre vários bancos de dados (cross-database queries and transactions) hospedados na mesma instância.",
    "explanation_why_correct": "A grande vantagem da **Instância Gerenciada do Azure SQL (*Azure SQL Managed Instance*)** sobre o Banco de Dados SQL individual é o **suporte nativo para consultas e transações entre bancos de dados (*cross-database queries*)**, além de recursos no nível de instância como o SQL Server Agent.",
    "explanation_why_incorrect": "• **A (alta disponibilidade integrada), B (backups automáticos) e C (criptografia em repouso - TDE): Incorretas.** Todos esses três recursos já estão presentes tanto no Banco de Dados SQL do Azure quanto na Instância Gerenciada.",
    "additional_reading": [
      {
        "title": "Comparar o Banco de Dados SQL do Azure e a Instância Gerenciada de SQL do Azure",
        "url": "https://learn.microsoft.com/azure/azure-sql/database/features-comparison"
      }
    ]
  },
  {
    "id": 2,
    "type": "drag_drop",
    "category": "Identificar considerações sobre dados relacionais no Azure (20-25%)",
    "category_en": "Identify considerations for relational data on Azure (20-25%)",
    "objective": "2.2 Escrever consultas SQL de agregação com cláusulas SELECT, AVG, GROUP BY e ORDER BY",
    "what_it_tests": "Construir uma consulta SQL que calcula a média de vendas por data usando SELECT ... AVG() e GROUP BY.",
    "question": "Você tem uma tabela chamada \"Sales\" que contém colunas `SalesDate` e `SalesAmount`.\nVocê precisa consultar a tabela para retornar o valor médio de vendas por dia (`AVG(SalesAmount)`), agrupado e ordenado por data (`SalesDate`).\n\nAssocie as cláusulas SQL às partes correspondentes da consulta:",
    "drag_drop_mode": "match",
    "values": [
      {
        "id": "V1",
        "text": "SELECT"
      },
      {
        "id": "V2",
        "text": "GROUP BY"
      }
    ],
    "targets": [
      {
        "id": "target_1",
        "label": "Primeira cláusula (projeção e agregação)",
        "prompt": "________ SalesDate, AVG(SalesAmount) FROM Sales"
      },
      {
        "id": "target_2",
        "label": "Segunda cláusula (agrupamento por data)",
        "prompt": "________ SalesDate ORDER BY SalesDate"
      }
    ],
    "correct_answer": {
      "target_1": "V1",
      "target_2": "V2"
    },
    "official_rationale": "Para calcular o valor médio por dia em SQL, a consulta inicia com SELECT SalesDate, AVG(SalesAmount) FROM Sales e agrupa os resultados por dia usando GROUP BY SalesDate ORDER BY SalesDate.",
    "explanation_why_correct": "• **`SELECT` → `SalesDate, AVG(SalesAmount) FROM Sales`:** A cláusula `SELECT` especifica a coluna de data e a função de agregação `AVG(SalesAmount)`.\n• **`GROUP BY` → `SalesDate ORDER BY SalesDate`:** Sempre que combinamos uma coluna simples (`SalesDate`) com uma função de agregação (`AVG`), devemos agrupar por essa coluna usando `GROUP BY SalesDate`.",
    "explanation_why_incorrect": "Inverter `SELECT` e `GROUP BY` violaria a estrutura sintática obrigatória do Transact-SQL (`SELECT ... FROM ... GROUP BY ... ORDER BY ...`).",
    "additional_reading": [
      {
        "title": "Cláusula GROUP BY e funções de agregação no Transact-SQL",
        "url": "https://learn.microsoft.com/sql/t-sql/queries/select-group-by-transact-sql"
      }
    ]
  },
  {
    "id": 3,
    "type": "single",
    "category": "Descrever os principais conceitos de dados (25-30%)",
    "category_en": "Describe core data concepts (25-30%)",
    "objective": "1.1 Distinguir entre Processamento de Transações Online (OLTP) e Processamento Analítico Online (OLAP)",
    "what_it_tests": "Identificar que um aplicativo de comércio eletrônico que lê e grava pedidos em um banco relacional utiliza OLTP.",
    "question": "Você tem um aplicativo de comércio eletrônico que lê e grava dados em um banco de dados SQL do Azure. Que tipo de processamento o aplicativo usa?",
    "options": [
      {
        "id": "A",
        "text": "Processamento de fluxo"
      },
      {
        "id": "B",
        "text": "Processamento analítico online (OLAP)"
      },
      {
        "id": "C",
        "text": "Processamento em lotes"
      },
      {
        "id": "D",
        "text": "Processamento de transações on-line (OLTP)"
      }
    ],
    "correct_answer": "D",
    "official_rationale": "Aplicativos operacionais de negócios, como sistemas de comércio eletrônico que registram e atualizam pedidos em tempo real em um banco relacional, utilizam Processamento de Transações Online (OLTP).",
    "explanation_why_correct": "Um aplicativo de comércio eletrônico realiza leituras e gravações transacionais rápidas e frequentes (carrinhos, pedidos, pagamentos), o que caracteriza o **Processamento de transações on-line (OLTP)**.",
    "explanation_why_incorrect": "• **A (Processamento de fluxo): Incorreta.** Refere-se à ingestão contínua de fluxos de eventos/telemetria.\n• **B (OLAP): Incorreta.** Refere-se a consultas analíticas pesadas em data warehouses.\n• **C (Processamento em lotes): Incorreta.** Refere-se ao processamento agendado de grandes volumes acumulados.",
    "additional_reading": [
      {
        "title": "Processamento de transações online (OLTP) vs OLAP",
        "url": "https://learn.microsoft.com/azure/architecture/data-guide/relational-data/online-transaction-processing"
      }
    ]
  },
  {
    "id": 4,
    "type": "multi",
    "category": "Descrever considerações sobre o trabalho com dados não relacionais no Azure (15-20%)",
    "category_en": "Describe considerations for working with non-relational data on Azure (15-20%)",
    "objective": "3.2 Configurar bancos de dados e contêineres no Azure Cosmos DB",
    "what_it_tests": "Identificar quais configurações são definidas no nível do contêiner no Azure Cosmos DB (taxa de transferência em RUs e chave de partição).",
    "question": "Você tem uma conta do Azure Cosmos DB que usa a API Core (SQL). Quais duas configurações você pode definir no nível do contêiner?",
    "options": [
      {
        "id": "A",
        "text": "a taxa de transferência"
      },
      {
        "id": "B",
        "text": "a chave de partição"
      },
      {
        "id": "C",
        "text": "a região de leitura"
      },
      {
        "id": "D",
        "text": "a API"
      }
    ],
    "correct_answer": [
      "A",
      "B"
    ],
    "official_rationale": "No Azure Cosmos DB for NoSQL (API Core/SQL), a chave de partição (partition key) é sempre definida no nível do contêiner, e a taxa de transferência (throughput em RU/s) pode ser configurada no nível do contêiner (ou compartilhada no banco de dados). A API e as regiões de leitura são definidas no nível da conta do Cosmos DB.",
    "explanation_why_correct": "• **A (`a taxa de transferência` - Correta):** Você pode provisionar Unidades de Solicitação por segundo (RU/s) dedicadas diretamente no nível do contêiner.\n• **B (`a chave de partição` - Correta):** A chave de partição (*Partition Key*) é obrigatoriamente definida ao criar cada contêiner para distribuir os itens entre partições lógicas e físicas.",
    "explanation_why_incorrect": "• **C (`a região de leitura` - Incorreta):** As regiões de replicação e leitura são configuradas no nível da **conta** do Azure Cosmos DB.\n• **D (`a API` - Incorreta):** A API (NoSQL/SQL, MongoDB, Cassandra, Gremlin, Table) é escolhida uma única vez na criação da **conta** do Cosmos DB.",
    "additional_reading": [
      {
        "title": "Contêineres, bancos de dados e contas no Azure Cosmos DB",
        "url": "https://learn.microsoft.com/azure/cosmos-db/resource-model"
      }
    ]
  },
  {
    "id": 5,
    "type": "single",
    "category": "Descrever considerações sobre o trabalho com dados não relacionais no Azure (15-20%)",
    "category_en": "Describe considerations for working with non-relational data on Azure (15-20%)",
    "objective": "1.2 Identificar tipos de armazenamento de dados não relacionais (colunar / família de colunas)",
    "what_it_tests": "Reconhecer a estrutura de um banco de dados de família de colunas (columnar / column-family) onde colunas relacionadas são agrupadas em famílias para cada chave de linha.",
    "question": "Sua empresa está projetando um armazenamento de dados que conterá dados de alunos organizados em famílias de colunas no seguinte formato:\n\n| StudentID | Name (FirstName, LastName) | Contact (Phone, Email) | Address (Street, City) |\n\nQue tipo de armazenamento de dados você deve usar?",
    "options": [
      {
        "id": "A",
        "text": "colunar"
      },
      {
        "id": "B",
        "text": "gráfico"
      },
      {
        "id": "C",
        "text": "valor/chave"
      },
      {
        "id": "D",
        "text": "objeto"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Um armazenamento de dados de família de colunas (colunar / column-family, como o Apache Cassandra no Azure Cosmos DB) organiza dados em linhas e agrupa colunas relacionadas em famílias de colunas (como Name, Contact e Address).",
    "explanation_why_correct": "O formato exibido agrupa atributos relacionados (como `FirstName` e `LastName` dentro de `Name`, ou `Phone` e `Email` dentro de `Contact`) sob uma chave de identificação (`StudentID`), que é a estrutura clássica de um banco de dados **colunar (família de colunas / *column-family*)**, como a API Apache Cassandra do Azure Cosmos DB.",
    "explanation_why_incorrect": "• **B (gráfico): Incorreta.** Armazena vértices e arestas.\n• **C (valor/chave): Incorreta.** Associa uma chave a um único valor opaco, sem dividir atributos em famílias de colunas.\n• **D (objeto): Incorreta.** Armazena blobs binários arbitrários.",
    "additional_reading": [
      {
        "title": "Bancos de dados de família de colunas (Column-family) no Azure",
        "url": "https://learn.microsoft.com/azure/architecture/data-guide/big-data/non-relational-data#column-family-data-stores"
      }
    ]
  },
  {
    "id": 6,
    "type": "single",
    "category": "Descrever os principais conceitos de dados (25-30%)",
    "category_en": "Describe core data concepts (25-30%)",
    "objective": "1.3 Identificar quando usar um banco de dados relacional",
    "what_it_tests": "Associar a escolha de um banco de dados relacional à exigência de fortes garantias de consistência (ACID).",
    "question": "Escolha a opção correta para completar a frase: Um banco de dados relacional deve ser usado quando ___________________",
    "options": [
      {
        "id": "A",
        "text": "é necessário um esquema dinâmico."
      },
      {
        "id": "B",
        "text": "armazenar imagens e vídeos grandes."
      },
      {
        "id": "C",
        "text": "os dados serão armazenados como pares chave/valor."
      },
      {
        "id": "D",
        "text": "são necessárias fortes garantias de consistência."
      }
    ],
    "correct_answer": "D",
    "official_rationale": "Bancos de dados relacionais garantem transações ACID e integridade referencial, devendo ser usados quando são necessárias fortes garantias de consistência.",
    "explanation_why_correct": "Um banco de dados relacional deve ser usado quando **são necessárias fortes garantias de consistência** (conformidade **ACID**: Atomicidade, Consistência, Isolamento e Durabilidade).",
    "explanation_why_incorrect": "• **A (esquema dinâmico): Incorreta.** Esquemas dinâmicos/flexíveis indicam bancos de documentos NoSQL.\n• **B (imagens e vídeos grandes): Incorreta.** Arquivos binários grandes de mídia devem ser armazenados no Armazenamento de Blobs do Azure.\n• **C (pares chave/valor): Incorreta.** Indica o Armazenamento de Tabelas do Azure ou Redis/Cosmos DB Table API.",
    "additional_reading": [
      {
        "title": "Características de bancos de dados relacionais e transações ACID",
        "url": "https://learn.microsoft.com/training/modules/explore-relational-data-offerings/"
      }
    ]
  },
  {
    "id": 7,
    "type": "single",
    "category": "Descrever considerações sobre o trabalho com dados não relacionais no Azure (15-20%)",
    "category_en": "Describe considerations for working with non-relational data on Azure (15-20%)",
    "objective": "3.2 Comparar as APIs disponíveis no Azure Cosmos DB",
    "what_it_tests": "Identificar que a API Core (SQL) — também chamada de API for NoSQL — permite consultar documentos JSON usando instruções SELECT.",
    "question": "Escolha a opção correta para completar a frase: A API do Azure Cosmos DB___________________ permite o uso de instruções SELECT para recuperar documentos do Azure Cosmos DB.",
    "options": [
      {
        "id": "A",
        "text": "Core (SQL)"
      },
      {
        "id": "B",
        "text": "MongoDB"
      },
      {
        "id": "C",
        "text": "Gremlin"
      },
      {
        "id": "D",
        "text": "Table"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "A API Core (SQL) do Azure Cosmos DB (atualmente denominada Azure Cosmos DB for NoSQL) armazena documentos JSON e permite consultá-los usando a sintaxe familiar de instruções SELECT da linguagem SQL.",
    "explanation_why_correct": "A API **`Core (SQL)`** do Azure Cosmos DB é a API nativa de documentos que permite usar instruções **`SELECT`** para consultar e filtrar documentos JSON.",
    "explanation_why_incorrect": "• **B (MongoDB): Incorreta.** Usa a sintaxe de consulta de métodos do MongoDB (ex.: `db.collection.find()`).\n• **C (Gremlin): Incorreta.** Usa a linguagem de travessia de grafos Apache Gremlin (ex.: `g.V().has()`).\n• **D (Table): Incorreta.** Usa chamadas de chave/valor compatíveis com o Azure Table Storage.",
    "additional_reading": [
      {
        "title": "Introdução às consultas SQL no Azure Cosmos DB for NoSQL (Core SQL)",
        "url": "https://learn.microsoft.com/azure/cosmos-db/nosql/query/getting-started"
      }
    ]
  },
  {
    "id": 8,
    "type": "single",
    "category": "Descrever os principais conceitos de dados (25-30%)",
    "category_en": "Describe core data concepts (25-30%)",
    "objective": "1.1 Compreender destinos de saída para cargas de trabalho de processamento em lote (batch)",
    "what_it_tests": "Confirmar que um trabalho de processamento em lote pode gravar seus resultados em um banco de dados relacional.",
    "question": "A afirmação a seguir é verdadeira ou falso? O processamento em lote pode enviar dados para um banco de dados relacional",
    "options": [
      {
        "id": "A",
        "text": "Verdadeiro"
      },
      {
        "id": "B",
        "text": "Falso"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "O processamento em lote pode ler e gravar dados em diversos tipos de armazenamento de destino, incluindo bancos de dados relacionais, bancos NoSQL, data lakes e data warehouses.",
    "explanation_why_correct": "**Verdadeiro.** O processamento em lote (*batch processing*) pode enviar os dados processados para um **banco de dados relacional** (por exemplo, via Azure Data Factory gravando no Banco de Dados SQL do Azure ou Azure Synapse).",
    "explanation_why_incorrect": "• **B (Falso): Incorreta.** Não há qualquer restrição que impeça pipelines em lote de gravarem em bancos relacionais.",
    "additional_reading": [
      {
        "title": "Processamento em lote (Batch processing) no Azure",
        "url": "https://learn.microsoft.com/azure/architecture/data-guide/big-data/batch-processing"
      }
    ]
  },
  {
    "id": 9,
    "type": "drag_drop",
    "category": "Identificar considerações sobre dados relacionais no Azure (20-25%)",
    "category_en": "Identify considerations for relational data on Azure (20-25%)",
    "objective": "2.1 Descrever camadas de segurança no Banco de Dados SQL do Azure (Firewall, Autenticação e Criptografia)",
    "what_it_tests": "Associar Firewall, Autenticação e Criptografia aos seus cenários de proteção no Banco de Dados SQL do Azure.",
    "question": "Combine os componentes de segurança com os cenários apropriados.",
    "drag_drop_mode": "match",
    "values": [
      {
        "id": "V1",
        "text": "Autenticação"
      },
      {
        "id": "V2",
        "text": "Firewall"
      },
      {
        "id": "V3",
        "text": "Criptografia"
      }
    ],
    "targets": [
      {
        "id": "target_1",
        "label": "Impedir acesso de outra rede",
        "prompt": "Impedir o acesso a um banco de dados SQL do Azure de outra rede:"
      },
      {
        "id": "target_2",
        "label": "Logins do Azure AD",
        "prompt": "Suporte de autenticação Entradas do Azure Active Directory (Azure AD) para um banco de dados SQL do Azure:"
      },
      {
        "id": "target_3",
        "label": "Dados confidenciais nunca em texto simples",
        "prompt": "Certifique-se de que os dados confidenciais nunca apareçam como texto simples em um banco de dados SQL do Azure:"
      }
    ],
    "correct_answer": {
      "target_1": "V2",
      "target_2": "V1",
      "target_3": "V3"
    },
    "official_rationale": "Um Firewall restringe o acesso de rede com base no endereço IP/rede de origem; a Autenticação valida a identidade do usuário (como logins do Azure AD); e a Criptografia (como Always Encrypted ou TDE) garante que os dados confidenciais não fiquem expostos em texto simples.",
    "explanation_why_correct": "• **Impedir o acesso a um banco de dados SQL do Azure de outra rede → `Firewall`:** Filtra o tráfego de rede permitindo apenas endereços IP ou redes virtuais autorizadas.\n• **Suporte de entradas do Azure Active Directory (Azure AD) → `Autenticação`:** Verifica a identidade de quem está tentando se conectar ao banco de dados.\n• **Certifique-se de que os dados confidenciais nunca apareçam como texto simples → `Criptografia`:** Recursos como *Always Encrypted* e *TDE* protegem os dados codificando-os para que nunca apareçam em texto simples.",
    "explanation_why_incorrect": "Lembre-se: *Firewall* = controle de rede/IP; *Autenticação* = verificação de identidade; *Criptografia* = codificação de dados contra leitura em texto simples.",
    "additional_reading": [
      {
        "title": "Visão geral dos recursos de segurança do Banco de Dados SQL do Azure",
        "url": "https://learn.microsoft.com/azure/azure-sql/database/security-overview"
      }
    ]
  },
  {
    "id": 10,
    "type": "drag_drop",
    "category": "Descrever os principais conceitos de dados (25-30%)",
    "category_en": "Describe core data concepts (25-30%)",
    "objective": "1.3 Definir objetos fundamentais de bancos de dados relacionais (Table, View, Index)",
    "what_it_tests": "Corresponder Table (Tabela), View (Exibição) e Index (Índice) às suas definições exatas.",
    "question": "Combine os termos com as descrições apropriadas.",
    "drag_drop_mode": "match",
    "values": [
      {
        "id": "V1",
        "text": "Index"
      },
      {
        "id": "V2",
        "text": "View"
      },
      {
        "id": "V3",
        "text": "Table"
      }
    ],
    "targets": [
      {
        "id": "target_1",
        "label": "Objeto que contém dados",
        "prompt": "Um objeto de banco de dados que contém dados:"
      },
      {
        "id": "target_2",
        "label": "Objeto definido por uma consulta",
        "prompt": "Um objeto de banco de dados cujo conteúdo é definido por uma consulta:"
      },
      {
        "id": "target_3",
        "label": "Objeto que melhora a velocidade de recuperação",
        "prompt": "Um objeto de banco de dados que ajuda a melhorar a velocidade de recuperação de dados:"
      }
    ],
    "correct_answer": {
      "target_1": "V3",
      "target_2": "V2",
      "target_3": "V1"
    },
    "official_rationale": "Uma Tabela (Table) armazena fisicamente os dados em linhas e colunas; uma Exibição (View) é uma tabela virtual cujo conteúdo é definido por uma consulta; e um Índice (Index) é uma estrutura que melhora a velocidade de recuperação de dados.",
    "explanation_why_correct": "• **Um objeto de banco de dados que contém dados → `Table` (Tabela):** Armazena os registros em linhas e colunas.\n• **Um objeto de banco de dados cujo conteúdo é definido por uma consulta → `View` (Exibição):** Projeta dinamicamente o resultado de um `SELECT`.\n• **Um objeto de banco de dados que ajuda a melhorar a velocidade de recuperação de dados → `Index` (Índice):** Otimiza buscas evitando varreduras completas da tabela.",
    "explanation_why_incorrect": "Esses três conceitos formam a base do domínio de bancos de dados relacionais na prova DP-900.",
    "additional_reading": [
      {
        "title": "Tabelas, Exibições e Índices em Bancos de Dados Relacionais",
        "url": "https://learn.microsoft.com/training/modules/explore-relational-data-offerings/"
      }
    ]
  },
  {
    "id": 11,
    "type": "single",
    "category": "Identificar considerações sobre dados relacionais no Azure (20-25%)",
    "category_en": "Identify considerations for relational data on Azure (20-25%)",
    "objective": "2.1 Classificar o Banco de Dados do Azure para PostgreSQL como serviço PaaS",
    "what_it_tests": "Identificar que o serviço gerenciado Banco de Dados do Azure para PostgreSQL pertence ao modelo Plataforma como Serviço (PaaS).",
    "question": "Você planeja implantar um banco de dados PostgreSQL no Azure. Qual modelo de hospedagem corresponde às opções de implantação disponíveis? Banco de dados do Azure para PostgreSQL:",
    "options": [
      {
        "id": "A",
        "text": "Software como serviço (SaaS)"
      },
      {
        "id": "B",
        "text": "Plataforma como serviço (PaaS)"
      },
      {
        "id": "C",
        "text": "Infraestrutura como serviço (IaaS)"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "O Banco de Dados do Azure para PostgreSQL é uma oferta de Plataforma como Serviço (PaaS) totalmente gerenciada no Azure, que automatiza patches, backups, alta disponibilidade e dimensionamento.",
    "explanation_why_correct": "O **Banco de dados do Azure para PostgreSQL** é um serviço gerenciado de **Plataforma como serviço (PaaS)**: a Microsoft administra o hardware, o sistema operacional e o mecanismo PostgreSQL.",
    "explanation_why_incorrect": "• **A (SaaS): Incorreta.** Não é um aplicativo final para usuários corporativos, mas sim uma plataforma de banco de dados.\n• **C (IaaS): Incorreta.** Seria IaaS apenas se você instalasse manualmente o PostgreSQL dentro de Máquinas Virtuais do Azure.",
    "additional_reading": [
      {
        "title": "O que é o Banco de Dados do Azure para PostgreSQL?",
        "url": "https://learn.microsoft.com/azure/postgresql/flexible-server/overview"
      }
    ]
  },
  {
    "id": 12,
    "type": "single",
    "category": "Descrever os principais conceitos de dados (25-30%)",
    "category_en": "Describe core data concepts (25-30%)",
    "objective": "1.1 Compreender destinos de saída para cargas de trabalho de processamento em lote (batch)",
    "what_it_tests": "Confirmar que um trabalho de processamento em lote pode enviar dados para um banco de dados NoSQL.",
    "question": "A afirmação a seguir é verdadeira ou falso? O processamento em lote pode enviar dados para um banco de dados NoSQL",
    "options": [
      {
        "id": "A",
        "text": "Verdadeiro"
      },
      {
        "id": "B",
        "text": "Falso"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "O processamento em lote pode gravar seus resultados em qualquer armazenamento de dados compatível, incluindo bancos de dados NoSQL (como o Azure Cosmos DB), bancos relacionais ou data lakes.",
    "explanation_why_correct": "**Verdadeiro.** O processamento em lote pode carregar dados transformados em um **banco de dados NoSQL** (como o Azure Cosmos DB ou o Armazenamento de Tabelas do Azure).",
    "explanation_why_incorrect": "• **B (Falso): Incorreta.** Bancos NoSQL suportam tanto ingestão em tempo real quanto cargas em lote.",
    "additional_reading": [
      {
        "title": "Processamento em lote no Azure",
        "url": "https://learn.microsoft.com/azure/architecture/data-guide/big-data/batch-processing"
      }
    ]
  },
  {
    "id": 13,
    "type": "multi",
    "category": "Descrever considerações sobre o trabalho com dados não relacionais no Azure (15-20%)",
    "category_en": "Describe considerations for working with non-relational data on Azure (15-20%)",
    "objective": "3.1 Selecionar tipos de replicação geográfica para Contas de Armazenamento do Azure",
    "what_it_tests": "Escolher os dois modelos de redundância que replicam dados para fora da região primária do Azure (GRS e RA-GRS).",
    "question": "Você precisa criar uma conta de armazenamento do Azure. Os dados na conta devem ser replicados automaticamente fora da região do Azure. Quais dois tipos de replicação você pode usar para a conta de armazenamento?",
    "options": [
      {
        "id": "A",
        "text": "armazenamento georredundante (GRS)"
      },
      {
        "id": "B",
        "text": "armazenamento com redundância de zona (ZRS)"
      },
      {
        "id": "C",
        "text": "armazenamento com redundância geográfica com acesso de leitura (RA-GRS)"
      },
      {
        "id": "D",
        "text": "armazenamento com redundância local (LRS)"
      }
    ],
    "correct_answer": [
      "A",
      "C"
    ],
    "official_rationale": "O armazenamento com redundância geográfica (GRS) e o armazenamento com redundância geográfica com acesso de leitura (RA-GRS) replicam os dados automaticamente para uma região secundária fora da região primária.",
    "explanation_why_correct": "• **A (`armazenamento georredundante - GRS` - Correta):** Copia os dados para uma região secundária pareada.\n• **C (`armazenamento com redundância geográfica com acesso de leitura - RA-GRS` - Correta):** Copia os dados para uma região secundária e habilita acesso de leitura ao endpoint secundário.",
    "explanation_why_incorrect": "• **B (`ZRS` - Incorreta):** Replica apenas entre zonas de disponibilidade dentro da **mesma região**.\n• **D (`LRS` - Incorreta):** Replica apenas dentro de um único datacenter na **mesma região**.",
    "additional_reading": [
      {
        "title": "Redundância do Armazenamento do Azure",
        "url": "https://learn.microsoft.com/azure/storage/common/storage-redundancy"
      }
    ]
  },
  {
    "id": 14,
    "type": "drag_drop",
    "category": "Descrever uma carga de trabalho de análise no Azure (25-30%)",
    "category_en": "Describe an analytics workload on Azure (25-30%)",
    "objective": "4.1 Compreender onde ocorre cada etapa de um processo ELT (Extração, Carregamento e Transformação)",
    "what_it_tests": "Associar as etapas Extrair, Carregar e Transformar do processo ELT aos locais onde ocorrem (Sistema de CRM de origem e Armazém de dados de destino).",
    "question": "Sua empresa planeja carregar dados de um sistema de gerenciamento de relacionamento com o cliente (CRM) para um data warehouse usando um processo de extração, carregamento e transformação (ELT). Onde ocorre o processamento de dados para cada etapa do processo ELT?",
    "drag_drop_mode": "match",
    "values": [
      {
        "id": "V1",
        "text": "O sistema de CRM"
      },
      {
        "id": "V2",
        "text": "Uma ferramenta de análise de dados independente"
      },
      {
        "id": "V3",
        "text": "O armazém de dados"
      }
    ],
    "targets": [
      {
        "id": "target_1",
        "label": "Extrair (Extract)",
        "prompt": "Extrair:"
      },
      {
        "id": "target_2",
        "label": "Carregar (Load)",
        "prompt": "Carregar:"
      },
      {
        "id": "target_3",
        "label": "Transformar (Transform)",
        "prompt": "Transformar:"
      }
    ],
    "correct_answer": {
      "target_1": "V1",
      "target_2": "V3",
      "target_3": "V3"
    },
    "official_rationale": "Em um processo ELT (Extract, Load, Transform), os dados brutos são extraídos do sistema de origem (o sistema de CRM), carregados diretamente no armazenamento de destino (o armazém de dados) e transformados usando o próprio mecanismo de computação do armazém de dados.",
    "explanation_why_correct": "• **Extrair → `O sistema de CRM`:** Os dados brutos são lidos/extraídos a partir do sistema operacional de origem (CRM).\n• **Carregar → `O armazém de dados`:** Os dados brutos extraídos são carregados diretamente no data warehouse de destino.\n• **Transformar → `O armazém de dados`:** A diferença crucial do **ELT** para o ETL é que a etapa de transformação utiliza a capacidade de processamento paralelo do próprio **armazém de dados** de destino, sem depender de um servidor de transformação intermediário separado.",
    "explanation_why_incorrect": "Em um fluxo **ELT**, `Uma ferramenta de análise de dados independente` não é necessária para transformar os dados antes da carga, pois tanto o carregamento quanto a transformação ocorrem no **armazém de dados**.",
    "additional_reading": [
      {
        "title": "Extração, carregamento e transformação (ELT) no Azure",
        "url": "https://learn.microsoft.com/azure/architecture/data-guide/relational-data/etl#extract-load-and-transform-elt"
      }
    ]
  },
  {
    "id": 15,
    "type": "single",
    "category": "Identificar considerações sobre dados relacionais no Azure (20-25%)",
    "category_en": "Identify considerations for relational data on Azure (20-25%)",
    "objective": "2.2 Identificar comandos de Linguagem de Manipulação de Dados (DML)",
    "what_it_tests": "Selecionar UPDATE como instrução DML.",
    "question": "Qual declaração é um exemplo de linguagem de manipulação de dados (DML)?",
    "options": [
      {
        "id": "A",
        "text": "UPDATE"
      },
      {
        "id": "B",
        "text": "REVOKE"
      },
      {
        "id": "C",
        "text": "DISABLE"
      },
      {
        "id": "D",
        "text": "CREATE"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "UPDATE faz parte da Linguagem de Manipulação de Dados (DML), sendo usada para modificar valores de dados existentes nas linhas de uma tabela.",
    "explanation_why_correct": "**`UPDATE`** é uma instrução **DML (*Data Manipulation Language*)** usada para atualizar dados em linhas existentes de uma tabela (junto com `SELECT`, `INSERT` e `DELETE`).",
    "explanation_why_incorrect": "• **B (`REVOKE`): Incorreta.** Pertence à DCL (*Data Control Language*).\n• **C (`DISABLE`): Incorreta.** Usada para desabilitar objetos como índices ou triggers.\n• **D (`CREATE`): Incorreta.** Pertence à DDL (*Data Definition Language*).",
    "additional_reading": [
      {
        "title": "UPDATE (Transact-SQL) - Microsoft Learn",
        "url": "https://learn.microsoft.com/sql/t-sql/queries/update-transact-sql"
      }
    ]
  },
  {
    "id": 16,
    "type": "single",
    "category": "Identificar considerações sobre dados relacionais no Azure (20-25%)",
    "category_en": "Identify considerations for relational data on Azure (20-25%)",
    "objective": "2.2 Identificar os recursos do Azure Data Studio",
    "what_it_tests": "Confirmar que o Azure Data Studio oferece suporte à conexão e consulta a bancos SQL Server, Azure SQL e clusters de big data do SQL Server.",
    "question": "A afirmação a seguir é verdadeira ou falso? Você pode usar o Azure Data Studio para consultar um cluster de big data do Microsoft SQL Server.",
    "options": [
      {
        "id": "A",
        "text": "Verdadeiro"
      },
      {
        "id": "B",
        "text": "Falso"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "O Azure Data Studio é uma ferramenta multiplataforma que permite consultar bancos de dados SQL Server locais, Banco de Dados SQL do Azure, PostgreSQL, Azure Synapse Analytics e clusters de Big Data do SQL Server.",
    "explanation_why_correct": "**Verdadeiro.** O **Azure Data Studio** foi projetado com suporte integrado (incluindo notebooks e extensões) para conectar-se e consultar o SQL Server, o Banco de Dados SQL do Azure e clusters de big data do Microsoft SQL Server.",
    "explanation_why_incorrect": "• **B (Falso): Incorreta.** O Azure Data Studio possui suporte nativo a esse cenário.",
    "additional_reading": [
      {
        "title": "O que é o Azure Data Studio?",
        "url": "https://learn.microsoft.com/sql/azure-data-studio/what-is-azure-data-studio"
      }
    ]
  },
  {
    "id": 17,
    "type": "single",
    "category": "Descrever considerações sobre o trabalho com dados não relacionais no Azure (15-20%)",
    "category_en": "Describe considerations for working with non-relational data on Azure (15-20%)",
    "objective": "1.2 Selecionar um banco de dados de grafos para análise de redes e dependências",
    "what_it_tests": "Identificar que analisar como alterações em um ponto da rede afetam outros nós conectados requer um banco de dados de grafos.",
    "question": "Sua empresa precisa projetar um banco de dados que mostre como as alterações no tráfego de rede em uma área da rede afetam o tráfego de rede em outras áreas da rede. Que tipo de armazenamento de dados você deve usar?",
    "options": [
      {
        "id": "A",
        "text": "gráfico"
      },
      {
        "id": "B",
        "text": "valor/chave"
      },
      {
        "id": "C",
        "text": "documento"
      },
      {
        "id": "D",
        "text": "colunar"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Um banco de dados de grafos (graph database) modela nós (equipamentos/áreas de rede) e arestas (conexões de tráfego), sendo ideal para analisar dependências e impactos em cadeia através de uma rede.",
    "explanation_why_correct": "Um armazenamento de dados de **gráfico (*graph*)** (como a API Gremlin do Azure Cosmos DB) modela áreas/roteadores como **vértices** e os links de comunicação como **arestas**, permitindo percorrer rapidamente a topologia e avaliar como o tráfego em uma área impacta outras áreas conectadas.",
    "explanation_why_incorrect": "• **B (valor/chave): Incorreta.** Realiza apenas buscas simples por chave individual, sem modelar conexões de rede.\n• **C (documento): Incorreta.** Armazena entidades isoladas em JSON.\n• **D (colunar): Incorreta.** Otimizado para tabelas de famílias de colunas ou agregações colunares.",
    "additional_reading": [
      {
        "title": "Introdução ao Azure Cosmos DB para Apache Gremlin (Grafos)",
        "url": "https://learn.microsoft.com/azure/cosmos-db/gremlin/introduction"
      }
    ]
  },
  {
    "id": 18,
    "type": "single",
    "category": "Identificar considerações sobre dados relacionais no Azure (20-25%)",
    "category_en": "Identify considerations for relational data on Azure (20-25%)",
    "objective": "1.3 Descrever o uso de exibições (Views) em bancos de dados relacionais",
    "what_it_tests": "Selecionar uma View para permitir que outros usuários reexecutem facilmente uma consulta SQL com junções e colunas calculadas.",
    "question": "Você tem uma consulta SQL que combina dados do cliente e dados do pedido. A consulta inclui colunas calculadas. Você precisa criar um objeto de banco de dados que permita que outros usuários executem novamente a mesma consulta SQL. O que você deve criar?",
    "options": [
      {
        "id": "A",
        "text": "uma função"
      },
      {
        "id": "B",
        "text": "um índice"
      },
      {
        "id": "C",
        "text": "uma tabela"
      },
      {
        "id": "D",
        "text": "uma view"
      }
    ],
    "correct_answer": "D",
    "official_rationale": "Uma view (exibição) encapsula uma consulta SELECT complexa (com JOINs e colunas calculadas) como uma tabela virtual que pode ser consultada repetidamente por outros usuários.",
    "explanation_why_correct": "Você deve criar **uma view** (exibição): ela armazena a consulta SQL que combina dados de clientes e pedidos com colunas calculadas e permite que outros usuários a consultem facilmente.",
    "explanation_why_incorrect": "• **A (uma função): Incorreta.** Uma *View* é o objeto padrão para expor uma consulta `SELECT` reutilizável como tabela virtual.\n• **B (um índice): Incorreta.** Acelera buscas, mas não salva uma consulta para execução direta pelos usuários.\n• **C (uma tabela): Incorreta.** Duplicaria os dados fisicamente em vez de reexecutar a consulta dinamicamente.",
    "additional_reading": [
      {
        "title": "Exibições (Views) no Banco de Dados SQL",
        "url": "https://learn.microsoft.com/sql/relational-databases/views/views"
      }
    ]
  },
  {
    "id": 19,
    "type": "single",
    "category": "Identificar considerações sobre dados relacionais no Azure (20-25%)",
    "category_en": "Identify considerations for relational data on Azure (20-25%)",
    "objective": "2.1 Identificar considerações de licenciamento e gerenciamento do Banco de Dados SQL do Azure",
    "what_it_tests": "Reconhecer o Benefício Híbrido do Azure (Azure Hybrid Benefit), que permite reutilizar licenças existentes do SQL Server com Software Assurance para reduzir custos no Banco de Dados SQL do Azure.",
    "question": "Qual das alternativas está correta?",
    "options": [
      {
        "id": "A",
        "text": "Você pode usar licenças existentes do Microsoft SQL Server para reduzir o custo dos bancos de dados SQL do Azure."
      },
      {
        "id": "B",
        "text": "Você deve aplicar atualizações do sistema operacional aos bancos de dados SQL do Azure regularmente."
      },
      {
        "id": "C",
        "text": "Você precisa de uma assinatura do Microsoft 365 para criar um banco de dados SQL do Azure."
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Com o Benefício Híbrido do Azure (Azure Hybrid Benefit), você pode usar suas licenças locais existentes do SQL Server com Software Assurance para obter descontos substanciais no Banco de Dados SQL do Azure (no modelo de compra vCore).",
    "explanation_why_correct": "A alternativa **A** está correta: por meio do **Benefício Híbrido do Azure (*Azure Hybrid Benefit*)**, **você pode usar licenças existentes do Microsoft SQL Server para reduzir o custo dos bancos de dados SQL do Azure**.",
    "explanation_why_incorrect": "• **B: Incorreta.** Como o Banco de Dados SQL do Azure é um serviço **PaaS**, a própria Microsoft aplica todas as atualizações do sistema operacional e do SQL automaticamente.\n• **C: Incorreta.** Para criar recursos no Azure é necessária uma **assinatura do Azure**, e não uma assinatura do Microsoft 365.",
    "additional_reading": [
      {
        "title": "Benefício Híbrido do Azure para o Banco de Dados SQL do Azure",
        "url": "https://learn.microsoft.com/azure/azure-sql/azure-hybrid-benefit"
      }
    ]
  },
  {
    "id": 20,
    "type": "single",
    "category": "Descrever considerações sobre o trabalho com dados não relacionais no Azure (15-20%)",
    "category_en": "Describe considerations for working with non-relational data on Azure (15-20%)",
    "objective": "3.2 Comparar a API de Tabela do Azure Cosmos DB com o Armazenamento de Tabelas do Azure",
    "what_it_tests": "Identificar o benefício exclusivo da API for Table do Azure Cosmos DB sobre o Armazenamento de Tabelas padrão: suporte a gravações em várias regiões (modelo multi-mestre / multi-master).",
    "question": "Qual é um benefício da API de tabela do Azure Cosmos DB em comparação com o armazenamento de tabela do Azure?",
    "options": [
      {
        "id": "A",
        "text": "fornece resiliência se uma região do Azure falhar"
      },
      {
        "id": "B",
        "text": "suporta particionamento"
      },
      {
        "id": "C",
        "text": "fornece uma maior capacidade de armazenamento"
      },
      {
        "id": "D",
        "text": "suporta um modelo multi-mestre"
      }
    ],
    "correct_answer": "D",
    "official_rationale": "A API de Tabela do Azure Cosmos DB oferece distribuição global turnkey com suporte a gravações em várias regiões simultaneamente (modelo multi-mestre / multi-master), indexação automática em todas as propriedades e latência de menos de 10 ms garantida por SLA.",
    "explanation_why_correct": "Um benefício exclusivo da **API de Tabela do Azure Cosmos DB** em comparação com o Armazenamento de Tabelas do Azure padrão é que ela **suporta um modelo multi-mestre (*multi-master* / gravações em várias regiões)**, permitindo que todas as regiões recebam leituras e gravações simultaneamente.",
    "explanation_why_incorrect": "• **A: Incorreta.** O Armazenamento de Tabelas do Azure padrão também oferece resiliência contra falha regional (via GRS/RA-GRS).\n• **B: Incorreta.** Ambos suportam particionamento por `PartitionKey`.\n• **C: Incorreta.** Ambos escalam horizontalmente para grandes volumes de armazenamento.",
    "additional_reading": [
      {
        "title": "Azure Cosmos DB for Table vs Armazenamento de Tabelas do Azure",
        "url": "https://learn.microsoft.com/azure/cosmos-db/table/introduction#table-offerings"
      }
    ]
  },
  {
    "id": 21,
    "type": "multi",
    "category": "Identificar considerações sobre dados relacionais no Azure (20-25%)",
    "category_en": "Identify considerations for relational data on Azure (20-25%)",
    "objective": "2.1 Descrever os benefícios das ofertas PaaS de banco de dados relacional no Azure",
    "what_it_tests": "Selecionar as duas vantagens principais do Banco de Dados SQL do Azure (PaaS): acesso contínuo aos recursos mais recentes e redução do esforço administrativo de infraestrutura.",
    "question": "Quais são os dois benefícios das ofertas de banco de dados relacional de plataforma como serviço (PaaS) no Azure, como o Banco de Dados SQL do Azure?",
    "options": [
      {
        "id": "A",
        "text": "controle total sobre os processos de backup e restauração"
      },
      {
        "id": "B",
        "text": "acesso aos recursos mais recentes"
      },
      {
        "id": "C",
        "text": "esforço administrativo reduzido para gerenciar a infraestrutura do servidor"
      },
      {
        "id": "D",
        "text": "serviços de aprendizado de máquina no banco de dados"
      }
    ],
    "correct_answer": [
      "B",
      "C"
    ],
    "official_rationale": "Ofertas PaaS como o Banco de Dados SQL do Azure oferecem SQL 'sempre atualizado' (acesso imediato aos recursos mais recentes sem atualizações manuais) e reduzem drasticamente o esforço administrativo para gerenciar a infraestrutura de servidores e SO.",
    "explanation_why_correct": "• **B (`acesso aos recursos mais recentes` - Correta):** O Banco de Dados SQL do Azure é *evergreen* (sempre atualizado com a versão mais recente do mecanismo SQL).\n• **C (`esforço administrativo reduzido para gerenciar a infraestrutura do servidor` - Correta):** O Azure gerencia hardware, sistema operacional, alta disponibilidade e backups automaticamente.",
    "explanation_why_incorrect": "• **A (`controle total sobre os processos de backup e restauração` - Incorreta):** O controle total manual no nível de arquivos/SO é uma característica de **IaaS** (SQL Server em VMs).\n• **D (`serviços de aprendizado de máquina no banco de dados` - Incorreta):** Os Serviços de Machine Learning no banco de dados (R/Python) são suportados no SQL Server em VMs e na Instância Gerenciada, mas não no Banco de Dados SQL do Azure individual.",
    "additional_reading": [
      {
        "title": "Comparação entre PaaS (Banco de Dados SQL) e IaaS (SQL Server em VMs)",
        "url": "https://learn.microsoft.com/azure/azure-sql/database/sql-database-paas-overview"
      }
    ]
  },
  {
    "id": 22,
    "type": "single",
    "category": "Descrever uma carga de trabalho de análise no Azure (25-30%)",
    "category_en": "Describe an analytics workload on Azure (25-30%)",
    "objective": "4.3 Distinguir entre análises descritiva, diagnóstica, preditiva e prescritiva",
    "what_it_tests": "Identificar que a projeção de vendas para um trimestre futuro (T4, após o fechamento do T3) é um exemplo de análise preditiva.",
    "question": "Sua empresa informou recentemente as vendas fechadas do terceiro trimestre (T3). Você tem um gráfico que exibe as vendas realizadas no T1, T2 e T3 e uma barra tracejada projetando as vendas estimadas para o quarto trimestre (T4).\n\nQue tipo de análise é apresentada no quarto trimestre (T4)?",
    "options": [
      {
        "id": "A",
        "text": "preditivo"
      },
      {
        "id": "B",
        "text": "diagnóstico"
      },
      {
        "id": "C",
        "text": "descritivo"
      },
      {
        "id": "D",
        "text": "prescritivo"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Como a empresa acabou de informar as vendas do terceiro trimestre (T3), os valores apresentados para o quarto trimestre (T4) representam uma previsão futura baseada nas tendências históricas, caracterizando a análise preditiva.",
    "explanation_why_correct": "Como o terceiro trimestre acabou de ser encerrado, o quarto trimestre ainda está no **futuro**. Projetar ou estimar as vendas do quarto trimestre com base no histórico dos trimestres anteriores é um exemplo de análise **preditiva (`preditivo`)**.",
    "explanation_why_incorrect": "• **B (diagnóstico): Incorreta.** Explicaria *por que* as vendas mudaram nos trimestres passados.\n• **C (descritivo): Incorreta.** As barras de T1, T2 e T3 (passado) são descritivas, mas a barra projetada do T4 (futuro) é **preditiva**.\n• **D (prescritivo): Incorreta.** Recomendaria ações específicas a tomar.",
    "additional_reading": [
      {
        "title": "Análise Preditiva vs Descritiva no Microsoft Learn",
        "url": "https://learn.microsoft.com/training/modules/explore-concepts-of-data-analytics/"
      }
    ]
  },
  {
    "id": 23,
    "type": "drag_drop",
    "category": "Descrever uma carga de trabalho de análise no Azure (25-30%)",
    "category_en": "Describe an analytics workload on Azure (25-30%)",
    "objective": "4.3 Identificar tipos de visualizações de dados no Microsoft Power BI",
    "what_it_tests": "Associar os visuais Mapa de árvore (Treemap), Influenciador chave (Key influencer) e Dispersão (Scatter chart) às suas descrições.",
    "question": "Combine os tipos de visualizações com as descrições apropriadas.",
    "drag_drop_mode": "match",
    "values": [
      {
        "id": "V1",
        "text": "Influenciador chave"
      },
      {
        "id": "V2",
        "text": "Mapa de árvore"
      },
      {
        "id": "V3",
        "text": "Dispersão"
      }
    ],
    "targets": [
      {
        "id": "target_1",
        "label": "Gráfico de retângulos coloridos e aninhados",
        "prompt": "Um gráfico de retângulos coloridos e aninhados que exibe pontos de dados individuais representados pelo tamanho e cor de um retângulo relativo:"
      },
      {
        "id": "target_2",
        "label": "Principais contribuintes de um resultado",
        "prompt": "Um gráfico que exibe os principais contribuintes de um resultado ou valor selecionado:"
      },
      {
        "id": "target_3",
        "label": "Relação entre dois valores numéricos",
        "prompt": "Um gráfico que mostra a relação entre dois valores numéricos:"
      }
    ],
    "correct_answer": {
      "target_1": "V2",
      "target_2": "V1",
      "target_3": "V3"
    },
    "official_rationale": "Um Mapa de árvore (Treemap) exibe dados hierárquicos como retângulos coloridos aninhados; um gráfico de Influenciadores principais (Key influencers) analisa os principais fatores que contribuem para uma métrica; e um gráfico de Dispersão (Scatter chart) plota a relação entre duas variáveis numéricas nos eixos X e Y.",
    "explanation_why_correct": "• **Retângulos coloridos e aninhados... → `Mapa de árvore` (*Treemap*):** Representa proporções hierárquicas usando a área e a cor de retângulos aninhados.\n• **Principais contribuintes de um resultado ou valor selecionado → `Influenciador chave` (*Key influencer*):** Visual analítico com IA do Power BI que identifica quais fatores mais impactam uma métrica.\n• **Mostra a relação entre dois valores numéricos → `Dispersão` (*Scatter chart*):** Exibe pontos em coordenadas cartesianas (eixo X e eixo Y) para revelar correlações e agrupamentos.",
    "explanation_why_incorrect": "Conhecer os visuais nativos do Power BI (*Treemap*, *Key Influencers*, *Scatter*, *Waterfall*, *Funnel*) é essencial para o domínio de análise da prova DP-900.",
    "additional_reading": [
      {
        "title": "Tipos de visualização no Power BI",
        "url": "https://learn.microsoft.com/power-bi/visuals/power-bi-visualization-types-for-reports-and-q-and-a"
      }
    ]
  },
  {
    "id": 24,
    "type": "single",
    "category": "Descrever uma carga de trabalho de análise no Azure (25-30%)",
    "category_en": "Describe an analytics workload on Azure (25-30%)",
    "objective": "4.3 Classificar visualizações de relatórios nas categorias de análise de dados",
    "what_it_tests": "Identificar que um gráfico comparando a matrícula atual de alunos com a capacidade máxima da universidade é uma análise descritiva.",
    "question": "Escolha a opção correta para completar a frase: Uma visualização que mostra a matrícula atual de alunos de uma universidade versus a capacidade máxima é um exemplo de análise ___________________",
    "options": [
      {
        "id": "A",
        "text": "cognitiva."
      },
      {
        "id": "B",
        "text": "preditiva."
      },
      {
        "id": "C",
        "text": "descritiva."
      },
      {
        "id": "D",
        "text": "prescritiva."
      }
    ],
    "correct_answer": "C",
    "official_rationale": "Um indicador ou gráfico que mostra o estado atual de uma métrica (matrícula atual versus capacidade máxima) resume fatos presentes/históricos e constitui um exemplo de análise descritiva.",
    "explanation_why_correct": "Mostrar a matrícula atual em comparação com a capacidade máxima apenas reporta **o estado atual dos dados**, sendo um exemplo de análise **descritiva (`descritiva.`)**.",
    "explanation_why_incorrect": "• **A (cognitiva): Incorreta.** Não envolve extração de IA sobre dados não estruturados.\n• **B (preditiva): Incorreta.** Não faz projeções sobre matrículas futuras.\n• **D (prescritiva): Incorreta.** Não sugere decisões ou alocação ótima de recursos.",
    "additional_reading": [
      {
        "title": "Análise Descritiva nos conceitos de análise de dados",
        "url": "https://learn.microsoft.com/training/modules/explore-concepts-of-data-analytics/"
      }
    ]
  },
  {
    "id": 25,
    "type": "single",
    "category": "Descrever uma carga de trabalho de análise no Azure (25-30%)",
    "category_en": "Describe an analytics workload on Azure (25-30%)",
    "objective": "4.2 Descrever a arquitetura de Processamento Massivamente Paralelo (MPP) do Azure Synapse Analytics",
    "what_it_tests": "Compreender que o nó de controle (Control node) do mecanismo MPP do Azure Synapse Analytics distribui o processamento das consultas entre vários nós de computação (Compute nodes).",
    "question": "Escolha a opção correta para completar a frase: O mecanismo de processamento massivo (MPP) do Azure Synapse Analytics ___________________",
    "options": [
      {
        "id": "A",
        "text": "distribui o processamento entre nós de computação."
      },
      {
        "id": "B",
        "text": "redireciona as conexões do cliente entre nós de computação."
      },
      {
        "id": "C",
        "text": "distribui o processamento pelos nós de controle."
      },
      {
        "id": "D",
        "text": "redireciona as conexões do cliente entre os nós de controle."
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Na arquitetura de Processamento Massivamente Paralelo (MPP) do Azure Synapse Analytics, os aplicativos se conectam ao nó de controle, que divide e distribui o processamento da consulta em paralelo entre vários nós de computação.",
    "explanation_why_correct": "O mecanismo de **Processamento Massivamente Paralelo (MPP)** do Azure Synapse Analytics **distribui o processamento entre nós de computação (*Compute nodes*)**: cada nó de computação processa uma fração dos dados em paralelo e devolve os resultados ao nó de controle.",
    "explanation_why_incorrect": "• **B e D: Incorretas.** Os clientes sempre se conectam a um único ponto de entrada (o **nó de controle**), e não diretamente aos nós de computação.\n• **C: Incorreta.** Há um nó de controle que coordena o trabalho, enquanto o processamento pesado é distribuído pelos **nós de computação**.",
    "additional_reading": [
      {
        "title": "Arquitetura do pool de SQL dedicado (MPP) no Azure Synapse Analytics",
        "url": "https://learn.microsoft.com/azure/synapse-analytics/sql-data-warehouse/massively-parallel-processing-mpp-architecture"
      }
    ]
  },
  {
    "id": 26,
    "type": "single",
    "category": "Identificar considerações sobre dados relacionais no Azure (20-25%)",
    "category_en": "Identify considerations for relational data on Azure (20-25%)",
    "objective": "2.1 Descrever os benefícios das ofertas de banco de dados PaaS no Azure",
    "what_it_tests": "Confirmar que os serviços de banco de dados PaaS no Azure fornecem alta disponibilidade integrada nativamente.",
    "question": "A afirmação a seguir é verdadeira ou falso? A oferta de banco de dados de plataforma como serviço (PaaS) no Azure fornece alta disponibilidade interna.",
    "options": [
      {
        "id": "A",
        "text": "Falso"
      },
      {
        "id": "B",
        "text": "Verdadeiro"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "As ofertas de banco de dados PaaS no Azure (como o Banco de Dados SQL do Azure) fornecem alta disponibilidade interna (built-in high availability) sem exigir configuração manual de clusters de failover.",
    "explanation_why_correct": "**Verdadeiro.** Os serviços de banco de dados **PaaS** no Azure possuem **alta disponibilidade interna (*built-in high availability*)** com SLA garantido de pelo menos 99,99%.",
    "explanation_why_incorrect": "• **A (Falso): Incorreta.** A alta disponibilidade integrada é um dos pilares do modelo PaaS no Azure.",
    "additional_reading": [
      {
        "title": "Alta disponibilidade para o Banco de Dados SQL do Azure",
        "url": "https://learn.microsoft.com/azure/azure-sql/database/high-availability-sla"
      }
    ]
  },
  {
    "id": 27,
    "type": "single",
    "category": "Identificar considerações sobre dados relacionais no Azure (20-25%)",
    "category_en": "Identify considerations for relational data on Azure (20-25%)",
    "objective": "2.1 Comparar ofertas de banco de dados PaaS e IaaS no Azure",
    "what_it_tests": "Identificar a afirmação correta sobre bancos de dados PaaS vs IaaS no Azure.",
    "question": "Qual das alternativas está correta?",
    "options": [
      {
        "id": "A",
        "text": "As ofertas de banco de dados de plataforma como serviço (PaaS) no Azure exigem menos esforço de configuração do que as ofertas de banco de dados de infraestrutura como serviço (IaaS)."
      },
      {
        "id": "B",
        "text": "Todas as ofertas de banco de dados de plataforma como serviço (PaaS) relacional e não relacional no Azure podem ser pausadas para reduzir custos."
      },
      {
        "id": "C",
        "text": "A oferta de banco de dados de plataforma como serviço (PaaS) no Azure fornece aos administradores a capacidade de controlar e atualizar a versão do sistema operacional."
      }
    ],
    "correct_answer": "A",
    "official_rationale": "As ofertas de banco de dados de Plataforma como Serviço (PaaS) no Azure exigem significativamente menos esforço de configuração e administração do que as ofertas de Infraestrutura como Serviço (IaaS), pois o Azure provisiona e gerencia o sistema operacional e o SGBD.",
    "explanation_why_correct": "A alternativa **A** está correta: **as ofertas de banco de dados de plataforma como serviço (PaaS) no Azure exigem menos esforço de configuração do que as ofertas de banco de dados de infraestrutura como serviço (IaaS)**.",
    "explanation_why_incorrect": "• **B: Incorreta.** Nem todas as ofertas PaaS relacionais e não relacionais (como contas provisionadas do Azure Cosmos DB ou determinadas camadas do SQL) podem ser pausadas manualmente.\n• **C: Incorreta.** No modelo PaaS, o sistema operacional é abstraído e gerenciado exclusivamente pelo Azure; controlar a versão do SO é característica de **IaaS** (VMs).",
    "additional_reading": [
      {
        "title": "Comparar opções de PaaS e IaaS para bancos de dados no Azure",
        "url": "https://learn.microsoft.com/azure/azure-sql/database/sql-database-paas-overview"
      }
    ]
  },
  {
    "id": 28,
    "type": "single",
    "category": "Descrever os principais conceitos de dados (25-30%)",
    "category_en": "Describe core data concepts (25-30%)",
    "objective": "1.3 Distinguir entre índices clusterizados e não clusterizados em bancos de dados relacionais",
    "what_it_tests": "Identificar que um índice clusterizado (clustered index) ordena e armazena fisicamente as linhas de dados na tabela com base nos valores de chave.",
    "question": "Escolha a opção correta para completar a frase: ___________________ é um objeto associado a uma tabela que classifica e armazena as linhas de dados com base em seus valores de chave.",
    "options": [
      {
        "id": "A",
        "text": "Uma tabela de arquivos"
      },
      {
        "id": "B",
        "text": "Um índice clusterizado"
      },
      {
        "id": "C",
        "text": "Um procedimento armazenado"
      },
      {
        "id": "D",
        "text": "Uma chave estrangeira"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "Um índice clusterizado (clustered index) classifica e armazena fisicamente as linhas de dados da tabela ou exibição com base em seus valores de chave (por padrão, a chave primária). Só pode haver um índice clusterizado por tabela.",
    "explanation_why_correct": "**Um índice clusterizado (*clustered index*)** é o objeto associado a uma tabela que **classifica e armazena fisicamente as próprias linhas de dados com base em seus valores de chave**.",
    "explanation_why_incorrect": "• **A (Uma tabela de arquivos): Incorreta.** Não define a ordenação física de chave de uma tabela relacional.\n• **C (Um procedimento armazenado): Incorreta.** É um bloco de código SQL executável.\n• **D (Uma chave estrangeira): Incorreta.** É uma restrição de integridade referencial que aponta para a chave primária de outra tabela.",
    "additional_reading": [
      {
        "title": "Índices clusterizados e não clusterizados descritos",
        "url": "https://learn.microsoft.com/sql/relational-databases/indexes/clustered-and-nonclustered-indexes-described"
      }
    ]
  },
  {
    "id": 29,
    "type": "single",
    "category": "Descrever os principais conceitos de dados (25-30%)",
    "category_en": "Describe core data concepts (25-30%)",
    "objective": "1.1 Distinguir entre processamento em lote (batch) e processamento de fluxo (streaming)",
    "what_it_tests": "Classificar o carregamento agendado de um catálogo de produtos a cada 12 horas como um processamento em lote (batch).",
    "question": "Podemos considerar que: Os dados de um catálogo de produtos serão carregados a cada 12 horas em um data warehouse.",
    "options": [
      {
        "id": "A",
        "text": "é um lote"
      },
      {
        "id": "B",
        "text": "é uma transmissão"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Carregar conjuntos de dados em intervalos periódicos programados (como a cada 12 horas) é a definição clássica de processamento em lote (batch processing).",
    "explanation_why_correct": "Como os dados do catálogo são acumulados e carregados periodicamente em um intervalo agendado (**a cada 12 horas**), trata-se de **um lote (*batch*)**.",
    "explanation_why_incorrect": "• **B (é uma transmissão): Incorreta.** Uma transmissão (*streaming*) processa eventos continuamente em tempo real à medida que ocorrem, e não de 12 em 12 horas.",
    "additional_reading": [
      {
        "title": "Processamento em lote vs Processamento de fluxo",
        "url": "https://learn.microsoft.com/azure/architecture/data-guide/big-data/batch-processing"
      }
    ]
  },
  {
    "id": 30,
    "type": "single",
    "category": "Identificar considerações sobre dados relacionais no Azure (20-25%)",
    "category_en": "Identify considerations for relational data on Azure (20-25%)",
    "objective": "2.1 Descrever a escalabilidade de serviços PaaS de banco de dados no Azure",
    "what_it_tests": "Confirmar que os serviços de banco de dados PaaS no Azure oferecem opções de dimensionamento configuráveis (vertical e horizontal).",
    "question": "A afirmação a seguir é verdadeira ou falso? As ofertas de banco de dados de plataforma como serviço (PaaS) no Azure fornecem opções de dimensionamento configuráveis.",
    "options": [
      {
        "id": "A",
        "text": "Falso"
      },
      {
        "id": "B",
        "text": "Verdadeiro"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "As ofertas de banco de dados PaaS no Azure fornecem opções de dimensionamento (scaling) facilmente configuráveis sob demanda (aumentando/reduzindo DTUs, vCores ou armazenamento sem tempo de inatividade prolongado).",
    "explanation_why_correct": "**Verdadeiro.** As ofertas de banco de dados **PaaS** no Azure fornecem **opções de dimensionamento configuráveis**, permitindo ajustar dinamicamente a capacidade de computação e armazenamento conforme a demanda.",
    "explanation_why_incorrect": "• **A (Falso): Incorreta.** A elasticidade e o dimensionamento configurável são vantagens essenciais das ofertas PaaS em nuvem.",
    "additional_reading": [
      {
        "title": "Dimensionar recursos no Banco de Dados SQL do Azure",
        "url": "https://learn.microsoft.com/azure/azure-sql/database/scale-resources"
      }
    ]
  },
  {
    "id": 31,
    "type": "single",
    "category": "Descrever os principais conceitos de dados (25-30%)",
    "category_en": "Describe core data concepts (25-30%)",
    "objective": "1.3 Compreender os benefícios da normalização de bancos de dados relacionais",
    "what_it_tests": "Confirmar que a normalização melhora a integridade dos dados ao eliminar redundâncias e anomalias de atualização.",
    "question": "A afirmação a seguir é verdadeira ou falso? A normalização melhora a integridade dos dados.",
    "options": [
      {
        "id": "A",
        "text": "Verdadeiro"
      },
      {
        "id": "B",
        "text": "Falso"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Ao reduzir a duplicação de dados e impor chaves primárias e estrangeiras, a normalização evita inconsistências (anomalias de inserção, atualização e exclusão) e melhora diretamente a integridade dos dados.",
    "explanation_why_correct": "**Verdadeiro.** A **normalização** elimina dados duplicados e aplica integridade referencial entre tabelas, o que **melhora a integridade e a consistência dos dados**.",
    "explanation_why_incorrect": "• **B (Falso): Incorreta.** Melhorar a integridade dos dados e reduzir a redundância são os dois principais benefícios da normalização.",
    "additional_reading": [
      {
        "title": "Normalização de banco de dados no Microsoft Learn",
        "url": "https://learn.microsoft.com/training/modules/explore-relational-data-offerings/"
      }
    ]
  },
  {
    "id": 32,
    "type": "single",
    "category": "Identificar considerações sobre dados relacionais no Azure (20-25%)",
    "category_en": "Identify considerations for relational data on Azure (20-25%)",
    "objective": "2.2 Identificar instruções DDL para modificar objetos de banco de dados (ALTER VIEW)",
    "what_it_tests": "Selecionar a instrução DDL ALTER para modificar a definição de uma exibição (view) existente adicionando uma nova coluna.",
    "question": "Você precisa modificar uma exibição em um banco de dados relacional adicionando uma nova coluna. Qual declaração você deve usar?",
    "options": [
      {
        "id": "A",
        "text": "ALTER"
      },
      {
        "id": "B",
        "text": "INSERT"
      },
      {
        "id": "C",
        "text": "UPDATE"
      },
      {
        "id": "D",
        "text": "MERGE"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Para modificar a estrutura ou a definição de um objeto existente no banco de dados (como uma tabela ou uma exibição/view), utiliza-se a instrução DDL ALTER (por exemplo, ALTER VIEW).",
    "explanation_why_correct": "Você deve usar a instrução DDL **`ALTER`** (`ALTER VIEW nome_da_view AS SELECT ...`) para modificar a definição de uma exibição existente e incluir uma nova coluna.",
    "explanation_why_incorrect": "• **B (`INSERT`), C (`UPDATE`) e D (`MERGE`): Incorretas.** São instruções **DML** usadas para inserir ou atualizar linhas de dados, e não para alterar a estrutura/definição de uma *View*.",
    "additional_reading": [
      {
        "title": "ALTER VIEW (Transact-SQL) - Microsoft Learn",
        "url": "https://learn.microsoft.com/sql/t-sql/statements/alter-view-transact-sql"
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    DP900_SIMULADO_1_QUESTIONS,
    DP900_SIMULADO_2_QUESTIONS,
    DP900_SIMULADO_3_QUESTIONS
  };
}
