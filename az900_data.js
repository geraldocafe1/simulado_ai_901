// Simulado Oficial Microsoft Exam AZ-900: Microsoft Azure Fundamentals
// Extraído do Quizizz (Simulado AZ-900 2024 - 02) - Total: 73 questões comentadas em PT-BR

const AZ900_SIMULADO_1_QUESTIONS = [
  {
    "id": 1,
    "type": "single",
    "category": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "category_en": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "objective": "3.1 Descrever os fatores que podem afetar os custos no Azure",
    "what_it_tests": "As Tags (marcações) são pares de nome/valor usados apenas para organização lógica e controle de faturamento, não gerando nem alterando o custo dos recursos.",
    "question": "Qual dos seguintes não afeta os custos no Azure?",
    "options": [
      {
        "id": "A",
        "text": "Uso de recursos"
      },
      {
        "id": "B",
        "text": "Tamanho da instância das VMs"
      },
      {
        "id": "C",
        "text": "Tags"
      },
      {
        "id": "D",
        "text": "Tipo de recurso"
      },
      {
        "id": "E",
        "text": "Localização"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "As Tags (marcações) são pares de nome/valor usados apenas para organização lógica e controle de faturamento, não gerando nem alterando o custo dos recursos.",
    "explanation_why_correct": "As **Tags (marcações)** servem para categorizar recursos (por departamento, ambiente ou centro de custo) e não têm custo nem alteram o preço dos serviços no Azure.",
    "explanation_why_incorrect": "Uso de recursos, tamanho da instância da VM, tipo de recurso e localização (região do Azure) impactam diretamente o valor cobrado na fatura mensal.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 2,
    "type": "single",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "objective": "2.2 Descrever os serviços de computação e rede do Azure",
    "what_it_tests": "O Azure Content Delivery Network (CDN) é uma rede de distribuição de conteúdo em cache na borda, não um serviço de computação para execução de contêineres.",
    "question": "Quais dos seguintes serviços Azure NÃO podem ser usados para implantar um aplicativo em contêiner?",
    "options": [
      {
        "id": "A",
        "text": "Azure Kubernetes Service (AKS)"
      },
      {
        "id": "B",
        "text": "Azure Virtual Machines (VMs)"
      },
      {
        "id": "C",
        "text": "Azure Container Instances (ACI)"
      },
      {
        "id": "D",
        "text": "Azure Content Delivery Network (CDN)"
      }
    ],
    "correct_answer": "D",
    "official_rationale": "O Azure Content Delivery Network (CDN) é uma rede de distribuição de conteúdo em cache na borda, não um serviço de computação para execução de contêineres.",
    "explanation_why_correct": "O **Azure Content Delivery Network (CDN)** distribui conteúdo estático em servidores de borda (POPs) para reduzir a latência, mas não hospeda nem executa contêineres.",
    "explanation_why_incorrect": "AKS (Kubernetes), Máquinas Virtuais (VMs) e Azure Container Instances (ACI) permitem implantar e executar aplicativos em contêineres.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 3,
    "type": "single",
    "category": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "category_en": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "objective": "3.1 Descrever o gerenciamento de custos no Azure",
    "what_it_tests": "O balanceamento de carga distribui o tráfego de rede para alta disponibilidade e desempenho, não sendo um mecanismo de desconto ou redução direta de custos.",
    "question": "Qual dos seguintes não é uma solução de economia de custos?",
    "options": [
      {
        "id": "A",
        "text": "Usar uma assinatura de pagamento conforme o uso"
      },
      {
        "id": "B",
        "text": "Usar instâncias de Máquina Virtual Reservada do Azure"
      },
      {
        "id": "C",
        "text": "Balancear a carga de suas máquinas virtuais para gerenciar o tráfego de entrada"
      },
      {
        "id": "D",
        "text": "Escolher um tipo de instância apropriado para uma VM"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "O balanceamento de carga distribui o tráfego de rede para alta disponibilidade e desempenho, não sendo um mecanismo de desconto ou redução direta de custos.",
    "explanation_why_correct": "**Balancear a carga de suas máquinas virtuais** é uma solução de disponibilidade e resiliência de rede, e não uma modalidade de economia financeira.",
    "explanation_why_incorrect": "Instâncias Reservadas, dimensionamento correto do tamanho da VM e escolha adequada do modelo de assinatura ajudam a otimizar os gastos.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 4,
    "type": "single",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "objective": "2.4 Descrever identidade, acesso e segurança no Azure",
    "what_it_tests": "O Logon Único (Single Sign-On - SSO) permite que o usuário se autentique uma única vez e acesse múltiplos aplicativos e sistemas confiáveis sem precisar digitar a senha novamente.",
    "question": "O ________________ habilita um usuário a fazer login uma vez e usar essas credenciais para acessar vários recursos e aplicativos de diferentes provedores.",
    "options": [
      {
        "id": "A",
        "text": "Sem Senha (Passwordless)"
      },
      {
        "id": "B",
        "text": "Serviço de Nome de Domínio (DNS)"
      },
      {
        "id": "C",
        "text": "SSO (Single Sign On)"
      },
      {
        "id": "D",
        "text": "Autenticação Multifator (MFA)"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "O Logon Único (Single Sign-On - SSO) permite que o usuário se autentique uma única vez e acesse múltiplos aplicativos e sistemas confiáveis sem precisar digitar a senha novamente.",
    "explanation_why_correct": "O **SSO (Single Sign-On / Logon Único)** reduz a fadiga de senhas e centraliza a autenticação, permitindo acessar diversos aplicativos com uma única sessão autenticada.",
    "explanation_why_incorrect": "MFA exige um segundo fator de verificação; Passwordless substitui a senha por biometria/chave; e DNS traduz nomes de domínio em endereços IP.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 5,
    "type": "multi",
    "category": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "category_en": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "objective": "3.1 Comparar a Calculadora de Preços e a Calculadora de Custo Total de Propriedade (TCO)",
    "what_it_tests": "Na Calculadora de TCO (Total Cost of Ownership), você informa sua infraestrutura local atual (servidores, bancos, armazenamento), custos de energia elétrica e custos de mão de obra de TI.",
    "question": "Quais informações você pode inserir no calculadora de TCO para estimar a diferença de custo entre seu datacenter atual e o Azure? (Selecione todas as opções corretas)",
    "options": [
      {
        "id": "A",
        "text": "Custos de mão de obra de TI"
      },
      {
        "id": "B",
        "text": "Configuração de infraestrutura atual"
      },
      {
        "id": "C",
        "text": "Tipo de assinatura"
      },
      {
        "id": "D",
        "text": "Custos de energia"
      }
    ],
    "correct_answer": [
      "A",
      "B",
      "D"
    ],
    "official_rationale": "Na Calculadora de TCO (Total Cost of Ownership), você informa sua infraestrutura local atual (servidores, bancos, armazenamento), custos de energia elétrica e custos de mão de obra de TI.",
    "explanation_why_correct": "A **Calculadora de TCO** estima a economia ao migrar do datacenter local para o Azure considerando **Custos de mão de obra de TI (A)**, **Configuração de infraestrutura atual (B)** e **Custos de energia (D)**.",
    "explanation_why_incorrect": "O tipo de assinatura do Azure (C) não faz parte do levantamento de custos atuais do ambiente local (on-premises) na entrada do TCO.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 6,
    "type": "single",
    "category": "Descrever os conceitos da nuvem (25-30%)",
    "category_en": "Descrever os conceitos da nuvem (25-30%)",
    "objective": "1.3 Descrever o modelo de responsabilidade compartilhada e tipos de serviços em nuvem (IaaS, PaaS, SaaS)",
    "what_it_tests": "No modelo SaaS (Software como Serviço), o provedor de nuvem gerencia toda a infraestrutura e o software; o consumidor apenas utiliza e configura parâmetros básicos da solução SaaS.",
    "question": "Quando você, como consumidor, está implementando uma solução Software as a Service (SaaS), você é responsável por configurar alta disponibilidade.",
    "options": [
      {
        "id": "A",
        "text": "Instalar a solução SaaS"
      },
      {
        "id": "B",
        "text": "Criar um grupo de recursos"
      },
      {
        "id": "C",
        "text": "Configurar a solução SaaS"
      },
      {
        "id": "D",
        "text": "Nenhuma alteração é necessária"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "No modelo SaaS (Software como Serviço), o provedor de nuvem gerencia toda a infraestrutura e o software; o consumidor apenas utiliza e configura parâmetros básicos da solução SaaS.",
    "explanation_why_correct": "Em uma solução **SaaS**, o cliente não instala servidores nem cria grupos de recursos de infraestrutura; cabe ao cliente apenas **configurar a solução SaaS** (dados, usuários e preferências).",
    "explanation_why_incorrect": "A instalação física/lógica do serviço e a infraestrutura de alta disponibilidade são responsabilidades do provedor SaaS.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 7,
    "type": "single",
    "category": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "category_en": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "objective": "3.4 Descrever ferramentas de monitoramento no Azure",
    "what_it_tests": "Ferramentas de monitoramento de desempenho (como Azure Monitor e Application Insights) visam detectar gargalos de utilização e otimizar a disponibilidade e performance do sistema.",
    "question": "Qual é o objetivo principal do uso de ferramentas de monitoramento de desempenho?",
    "options": [
      {
        "id": "A",
        "text": "Otimizar a eficiência de código"
      },
      {
        "id": "B",
        "text": "Ajudar a rastrear bugs e problemas no código"
      },
      {
        "id": "C",
        "text": "Identificar gargalos de desempenho e melhorar o desempenho do sistema"
      },
      {
        "id": "D",
        "text": "Melhorar a segurança do sistema"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "Ferramentas de monitoramento de desempenho (como Azure Monitor e Application Insights) visam detectar gargalos de utilização e otimizar a disponibilidade e performance do sistema.",
    "explanation_why_correct": "O objetivo central do monitoramento de desempenho é **identificar gargalos de desempenho e melhorar o desempenho do sistema** antes que os usuários sejam afetados.",
    "explanation_why_incorrect": "Depuração de código-fonte é papel da IDE/debugger, e segurança é papel do Microsoft Defender for Cloud / Microsoft Sentinel.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 8,
    "type": "single",
    "category": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "category_en": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "objective": "3.1 Comparar a Calculadora de Preços e a Calculadora de TCO",
    "what_it_tests": "A Calculadora de Preços do Azure (Pricing Calculator) permite configurar serviços do Azure e estimar o custo mensal antes de provisioná-los.",
    "question": "Qual é o objetivo principal da Calculadora de Preços do Azure?",
    "options": [
      {
        "id": "A",
        "text": "Provisionar recursos no Azure"
      },
      {
        "id": "B",
        "text": "Gerenciar a cobrança da sua conta Azure"
      },
      {
        "id": "C",
        "text": "Estimar o custo de provisionamento de recursos no Azure"
      },
      {
        "id": "D",
        "text": "Comparar os custos de execução no local e na infraestrutura do Azure Cloud"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "A Calculadora de Preços do Azure (Pricing Calculator) permite configurar serviços do Azure e estimar o custo mensal antes de provisioná-los.",
    "explanation_why_correct": "A **Calculadora de Preços do Azure** tem como finalidade **estimar o custo de provisionamento de recursos no Azure** com base nas configurações escolhidas.",
    "explanation_why_incorrect": "Ela apenas simula valores (não provisiona recursos nem gerencia faturas reais), enquanto a comparação com o datacenter local é papel da Calculadora de TCO.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 9,
    "type": "single",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "objective": "2.3 Descrever os serviços de armazenamento do Azure",
    "what_it_tests": "No contexto desta questão do simulado, o serviço de armazenamento de dados em escala na nuvem é avaliado quanto à capacidade de lidar com dados não estruturados/semi-estruturados.",
    "question": "Qual serviço do Azure é usado para armazenar e recuperar grandes volumes de dados não estruturados, como blobs, arquivos e discos?",
    "options": [
      {
        "id": "A",
        "text": "Azure Data Lake Storage"
      },
      {
        "id": "B",
        "text": "Azure Backup"
      },
      {
        "id": "C",
        "text": "Azure Cosmos DB"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "No contexto desta questão do simulado, o serviço de armazenamento de dados em escala na nuvem é avaliado quanto à capacidade de lidar com dados não estruturados/semi-estruturados.",
    "explanation_why_correct": "No gabarito deste simulado, a opção destacada é **C (Azure Cosmos DB)** (embora para blobs e arquivos brutos na prova oficial lembre-se também do **Azure Storage Account / Azure Blob Storage** e **Azure Data Lake Storage**).",
    "explanation_why_incorrect": "O Azure Backup é exclusivo para cópias de segurança e recuperação de desastres.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 10,
    "type": "single",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "objective": "2.2 Descrever os serviços de rede e segurança de rede do Azure",
    "what_it_tests": "Um Grupo de Segurança de Rede (NSG - Network Security Group) filtra o tráfego de rede de entrada e saída para sub-redes e interfaces de rede de VMs no Azure.",
    "question": "Sua equipe de conformidade entrou em contato com você e afirmou que uma determinada VM executando um banco de dados crítico para missões (com dados confidenciais) não deve ser capaz de se conectar a outros aplicativos e VMs. Como você faria isso?",
    "options": [
      {
        "id": "A",
        "text": "Implantar a VM em uma determinada sub-rede e restringir o tráfego usando um Grupo de Segurança de Rede (NSG)."
      },
      {
        "id": "B",
        "text": "Implantar a VM em um novo grupo de recursos"
      },
      {
        "id": "C",
        "text": "Usar um Azure Load Balancer"
      },
      {
        "id": "D",
        "text": "Não é necessário fazer nada, pois uma VM não pode se comunicar com outros serviços."
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Um Grupo de Segurança de Rede (NSG - Network Security Group) filtra o tráfego de rede de entrada e saída para sub-redes e interfaces de rede de VMs no Azure.",
    "explanation_why_correct": "Para isolar a comunicação de rede de uma VM, você deve **implantar a VM em uma determinada sub-rede e restringir o tráfego usando um Grupo de Segurança de Rede (NSG)**.",
    "explanation_why_incorrect": "Grupos de recursos são apenas contêineres lógicos de gerenciamento e não isolam o tráfego de rede entre VMs.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 11,
    "type": "single",
    "category": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "category_en": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "objective": "3.1 Descrever a Conta Gratuita do Azure e planos de suporte",
    "what_it_tests": "A Conta Gratuita do Azure inclui apenas o suporte Básico (Basic), e não o plano de suporte pago Standard.",
    "question": "Se você configurar uma conta gratuita do Azure, o plano de suporte Standard vem junto com essa conta gratuita?",
    "options": [
      {
        "id": "A",
        "text": "Não"
      },
      {
        "id": "B",
        "text": "Sim"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "A Conta Gratuita do Azure inclui apenas o suporte Básico (Basic), e não o plano de suporte pago Standard.",
    "explanation_why_correct": "**Não (A).** O plano de suporte **Standard** é um plano pago e não está incluído gratuitamente na Conta Gratuita do Azure.",
    "explanation_why_incorrect": "Contas gratuitas contam com o plano Basic e acesso aos fóruns da comunidade Microsoft Q&A.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 12,
    "type": "single",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "objective": "2.2 Descrever os serviços de computação e contêineres do Azure",
    "what_it_tests": "O Azure Kubernetes Service (AKS) é o serviço de orquestração gerenciada para implantar, gerenciar e dimensionar contêineres em escala.",
    "question": "Quais dos seguintes serviços podem facilitar a implantação e o dimensionamento de contêineres?",
    "options": [
      {
        "id": "A",
        "text": "Azure Cognitive Services (Serviços Cognitivos do Azure)"
      },
      {
        "id": "B",
        "text": "Azure Active Directory"
      },
      {
        "id": "C",
        "text": "Azure Logic Apps (Aplicativos Lógicos)"
      },
      {
        "id": "D",
        "text": "Azure Kubernetes"
      }
    ],
    "correct_answer": "D",
    "official_rationale": "O Azure Kubernetes Service (AKS) é o serviço de orquestração gerenciada para implantar, gerenciar e dimensionar contêineres em escala.",
    "explanation_why_correct": "O **Azure Kubernetes (AKS)** automatiza a implantação, o balanceamento e o dimensionamento elástico de clusters de contêineres.",
    "explanation_why_incorrect": "Cognitive Services são APIs de IA; Azure AD (Microsoft Entra ID) gerencia identidades; e Logic Apps automatiza fluxos de trabalho.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 13,
    "type": "multi",
    "category": "Descrever os conceitos da nuvem (25-30%)",
    "category_en": "Descrever os conceitos da nuvem (25-30%)",
    "objective": "1.2 Descrever os benefícios do uso de serviços em nuvem",
    "what_it_tests": "A computação em nuvem oferece escalabilidade sob demanda (elasticidade), menor custo inicial (OpEx em vez de CapEx) e alcance/acesso global.",
    "question": "Quais são os principais benefícios da implantação de uma solução em nuvem em comparação com uma implantação local? (Selecione todas as opções corretas)",
    "options": [
      {
        "id": "A",
        "text": "Escalabilidade sob demanda"
      },
      {
        "id": "B",
        "text": "Menor custo inicial"
      },
      {
        "id": "C",
        "text": "Maior controle sobre a segurança"
      },
      {
        "id": "D",
        "text": "Acesso global"
      }
    ],
    "correct_answer": [
      "A",
      "B",
      "D"
    ],
    "official_rationale": "A computação em nuvem oferece escalabilidade sob demanda (elasticidade), menor custo inicial (OpEx em vez de CapEx) e alcance/acesso global.",
    "explanation_why_correct": "Os principais benefícios em relação ao ambiente local são **Escalabilidade sob demanda (A)**, **Menor custo inicial (B)** e **Acesso global (D)**.",
    "explanation_why_incorrect": "Na nuvem a segurança segue o modelo de responsabilidade compartilhada, enquanto no datacenter próprio você detém todo o controle físico.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 14,
    "type": "single",
    "category": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "category_en": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "objective": "3.3 Descrever ferramentas para interagir com o Azure (Azure PowerShell, CLI, Cloud Shell)",
    "what_it_tests": "O módulo Az do Azure PowerShell pode ser instalado localmente em computadores Windows, Linux ou macOS, além de rodar no navegador via Cloud Shell.",
    "question": "É possível executar um módulo PowerShell diretamente de um computador Windows com o Azure PowerShell instalado?",
    "options": [
      {
        "id": "A",
        "text": "Não"
      },
      {
        "id": "B",
        "text": "Sim"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "O módulo Az do Azure PowerShell pode ser instalado localmente em computadores Windows, Linux ou macOS, além de rodar no navegador via Cloud Shell.",
    "explanation_why_correct": "**Sim (B).** Após instalar o módulo Azure PowerShell (`Az`) no Windows, você pode executar cmdlets diretamente do terminal local para gerenciar recursos do Azure.",
    "explanation_why_incorrect": "O Azure PowerShell não é restrito apenas ao navegador; ele suporta execução local multiplataforma.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 15,
    "type": "single",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "objective": "2.3 Descrever os serviços de armazenamento do Azure (Filas)",
    "what_it_tests": "O Azure Queue Storage armazena grandes quantidades de mensagens assíncronas para desacoplar componentes de aplicações distribuídas.",
    "question": "Qual dos seguintes serviços pode ajudar a desacoplar componentes e armazenamento de mensagens assíncronas, para comunicação entre componentes de aplicativos, estejam eles em execução na nuvem, na área de trabalho, no local ou em dispositivos móveis?",
    "options": [
      {
        "id": "A",
        "text": "Azure Asynchronous Communicator"
      },
      {
        "id": "B",
        "text": "Azure Queue Storage (Armazenamento de Filas)"
      },
      {
        "id": "C",
        "text": "Azure Data Box"
      },
      {
        "id": "D",
        "text": "Azure File Sync"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "O Azure Queue Storage armazena grandes quantidades de mensagens assíncronas para desacoplar componentes de aplicações distribuídas.",
    "explanation_why_correct": "O **Azure Queue Storage (Armazenamento de Filas)** permite que componentes de aplicativos se comuniquem de forma assíncrona e independente por meio de filas de mensagens HTTP/HTTPS.",
    "explanation_why_incorrect": "Azure Data Box é um dispositivo físico de migração offline; Azure File Sync sincroniza servidores de arquivos Windows locais.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 16,
    "type": "single",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "objective": "2.2 Descrever serviços de IA e Serviços Cognitivos no Azure",
    "what_it_tests": "Os Serviços Cognitivos do Azure (atualmente Azure AI Services / Foundry Tools) fornecem APIs pré-treinadas de visão, fala, linguagem e decisão.",
    "question": "Qual dos seguintes serviços você usaria para incorporar a capacidade de ver, ouvir, falar, pesquisar, entender e acelerar a tomada de decisões em seus aplicativos sem ter experiência em aprendizado de máquina?",
    "options": [
      {
        "id": "A",
        "text": "Azure Events Hub"
      },
      {
        "id": "B",
        "text": "Serviços Cognitivos Azure"
      },
      {
        "id": "C",
        "text": "Azure Machine Learning Studio"
      },
      {
        "id": "D",
        "text": "Serviço de Aplicativo Azure"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "Os Serviços Cognitivos do Azure (atualmente Azure AI Services / Foundry Tools) fornecem APIs pré-treinadas de visão, fala, linguagem e decisão.",
    "explanation_why_correct": "Os **Serviços Cognitivos do Azure (Azure AI Services)** oferecem modelos pré-treinados prontos para uso via API REST/SDK sem exigir experiência prévia em ciência de dados.",
    "explanation_why_incorrect": "Event Hubs é para ingestão de eventos de streaming; App Service hospeda aplicações web; e Azure Machine Learning é para treinar modelos próprios.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 17,
    "type": "single",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "objective": "2.2 Descrever serviços de contêineres e microsserviços no Azure",
    "what_it_tests": "O Azure Kubernetes Service (AKS) é ideal para arquiteturas de microsserviços baseadas em contêineres que precisam escalar cada serviço de forma independente.",
    "question": "Você está projetando uma arquitetura de microsserviços no Azure e deseja garantir que cada microsserviço possa ser escalado independentemente. Qual serviço do Azure você usaria para implementar essa capacidade?",
    "options": [
      {
        "id": "A",
        "text": "Azure Logic Apps"
      },
      {
        "id": "B",
        "text": "Azure Functions"
      },
      {
        "id": "C",
        "text": "Azure Container Registry"
      },
      {
        "id": "D",
        "text": "Azure Kubernetes Service"
      }
    ],
    "correct_answer": "D",
    "official_rationale": "O Azure Kubernetes Service (AKS) é ideal para arquiteturas de microsserviços baseadas em contêineres que precisam escalar cada serviço de forma independente.",
    "explanation_why_correct": "O **Azure Kubernetes Service (AKS)** orquestra microsserviços em contêineres, permitindo escalar cada componente de maneira isolada conforme a demanda.",
    "explanation_why_incorrect": "O Azure Container Registry (ACR) apenas armazena as imagens de contêiner, sem executá-las.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 18,
    "type": "single",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "objective": "2.3 Descrever serviços de análise de dados no Azure",
    "what_it_tests": "O Azure Databricks é a plataforma de análise de Big Data baseada em Apache Spark otimizada para o Microsoft Azure.",
    "question": "Qual dos seguintes serviços é uma plataforma de análise baseada em Apache Spark otimizada para a plataforma de serviços em nuvem Microsoft Azure?",
    "options": [
      {
        "id": "A",
        "text": "Azure Machine Learning Studio"
      },
      {
        "id": "B",
        "text": "Azure Databricks"
      },
      {
        "id": "C",
        "text": "Azure Cognitive Services"
      },
      {
        "id": "D",
        "text": "Azure Bot Services"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "O Azure Databricks é a plataforma de análise de Big Data baseada em Apache Spark otimizada para o Microsoft Azure.",
    "explanation_why_correct": "O **Azure Databricks** fornece clusters Apache Spark gerenciados e notebooks colaborativos integrados nativamente aos serviços de dados do Azure.",
    "explanation_why_incorrect": "Bot Services cria bots conversacionais e Cognitive Services oferece APIs de IA pré-treinadas.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 19,
    "type": "single",
    "category": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "category_en": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "objective": "3.2 Descrever bloqueios de recursos (Resource Locks) no Azure",
    "what_it_tests": "Um bloqueio CanNotDelete (Delete Lock) em um recurso filho impede a exclusão desse recurso e também bloqueia a exclusão do grupo de recursos pai até que o bloqueio seja removido.",
    "question": "Se você tiver um bloqueio de exclusão em um recurso e tentar excluir seu grupo de recursos, todos os recursos dentro do grupo de recursos ainda serão excluídos.",
    "options": [
      {
        "id": "A",
        "text": "Sim"
      },
      {
        "id": "B",
        "text": "Não"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "Um bloqueio CanNotDelete (Delete Lock) em um recurso filho impede a exclusão desse recurso e também bloqueia a exclusão do grupo de recursos pai até que o bloqueio seja removido.",
    "explanation_why_correct": "**Não (B).** Se qualquer recurso dentro do Grupo de Recursos possuir um bloqueio de exclusão (`CanNotDelete`), a tentativa de excluir o Grupo de Recursos falhará e os recursos serão protegidos.",
    "explanation_why_incorrect": "Os bloqueios de recursos protegem contra exclusões acidentais mesmo quando acionadas no nível do grupo de recursos.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 20,
    "type": "single",
    "category": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "category_en": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "objective": "3.4 Descrever a finalidade do Azure Advisor",
    "what_it_tests": "O Azure Advisor analisa suas implantações e fornece recomendações de confiabilidade, segurança, desempenho, custo e excelência operacional para diversos serviços, incluindo ExpressRoute.",
    "question": "Sim ou Não: O Azure Advisor tem a capacidade de fornecer recomendações para o Azure ExpressRoute",
    "options": [
      {
        "id": "A",
        "text": "Não"
      },
      {
        "id": "B",
        "text": "Sim"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "O Azure Advisor analisa suas implantações e fornece recomendações de confiabilidade, segurança, desempenho, custo e excelência operacional para diversos serviços, incluindo ExpressRoute.",
    "explanation_why_correct": "**Sim (B).** O **Azure Advisor** analisa circuitos e gateways do Azure ExpressRoute e emite recomendações de alta disponibilidade e otimização.",
    "explanation_why_incorrect": "O escopo do Azure Advisor abrange máquinas virtuais, bancos de dados, redes e ExpressRoute.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 21,
    "type": "single",
    "category": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "category_en": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "objective": "3.4 Descrever ferramentas de monitoramento e diagnóstico de rede no Azure",
    "what_it_tests": "O Azure Network Watcher fornece ferramentas de monitoramento e diagnóstico de rede (como VPN Troubleshoot, IP Flow Verify e Connection Troubleshoot).",
    "question": "Você configurou uma conexão VPN entre uma rede local e uma rede virtual Azure usando VPN de site a site (IPsec). No entanto, você está enfrentando problemas de conectividade e suspeita que há um problema com o gateway VPN.\nQual serviço Azure você pode usar para diagnosticar problemas de conectividade para o gateway VPN?",
    "options": [
      {
        "id": "A",
        "text": "Azure Traffic Manager"
      },
      {
        "id": "B",
        "text": "Azure Network Watcher"
      },
      {
        "id": "C",
        "text": "Azure ExpressRoute"
      },
      {
        "id": "D",
        "text": "Azure Application Gateway"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "O Azure Network Watcher fornece ferramentas de monitoramento e diagnóstico de rede (como VPN Troubleshoot, IP Flow Verify e Connection Troubleshoot).",
    "explanation_why_correct": "O **Azure Network Watcher** possui o recurso de diagnóstico de VPN (*VPN Diagnostics*) para investigar e solucionar falhas de conectividade em Gateways de VPN.",
    "explanation_why_incorrect": "Traffic Manager e Application Gateway são balanceadores de tráfego, e ExpressRoute é um link dedicado privado.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 22,
    "type": "single",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "objective": "2.2 Descrever ferramentas de ciclo de vida e desenvolvimento no Azure",
    "what_it_tests": "O Azure DevOps é um conjunto de serviços colaborativos (Boards, Repos, Pipelines, Test Plans, Artifacts) para planejar, desenvolver, testar e entregar software.",
    "question": "O que é o Azure DevOps?",
    "options": [
      {
        "id": "A",
        "text": "Um serviço de orquestração de contêineres no Azure"
      },
      {
        "id": "B",
        "text": "Um serviço de segurança e conformidade no Azure"
      },
      {
        "id": "C",
        "text": "Um conjunto de serviços para desenvolvimento de software"
      },
      {
        "id": "D",
        "text": "Um serviço de monitoramento e solução de problemas no Azure"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "O Azure DevOps é um conjunto de serviços colaborativos (Boards, Repos, Pipelines, Test Plans, Artifacts) para planejar, desenvolver, testar e entregar software.",
    "explanation_why_correct": "O **Azure DevOps** é **um conjunto de serviços para desenvolvimento de software** que suporta planejamento ágil, controle de versão Git e pipelines de CI/CD.",
    "explanation_why_incorrect": "Orquestração de contêineres é papel do AKS; segurança é do Defender for Cloud; monitoramento é do Azure Monitor.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 23,
    "type": "single",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "objective": "2.1 e 2.4 Descrever assinaturas do Azure e relação com o Microsoft Entra ID",
    "what_it_tests": "Quando uma assinatura do Azure expira, o locatário do Microsoft Entra ID continua existindo, mas o acesso aos recursos vinculados àquela assinatura expirada é bloqueado/desabilitado.",
    "question": "Sim ou Não:\nQuando uma Subscrição expira, a instância confiável do serviço Microsoft Entra ID permanece, mas os princípios de segurança ainda mantêm acesso aos recursos Azure.",
    "options": [
      {
        "id": "A",
        "text": "Não"
      },
      {
        "id": "B",
        "text": "Sim"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Quando uma assinatura do Azure expira, o locatário do Microsoft Entra ID continua existindo, mas o acesso aos recursos vinculados àquela assinatura expirada é bloqueado/desabilitado.",
    "explanation_why_correct": "**Não (A).** Embora o diretório do Microsoft Entra ID permaneça ativo, os princípios de segurança **perdem o acesso** aos recursos da assinatura expirada até que ela seja reativada.",
    "explanation_why_incorrect": "Recursos de uma assinatura expirada são desativados e não permanecem acessíveis normalmente.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 24,
    "type": "single",
    "category": "Descrever os conceitos da nuvem (25-30%)",
    "category_en": "Descrever os conceitos da nuvem (25-30%)",
    "objective": "1.3 Descrever os tipos de serviços de nuvem (IaaS, PaaS, SaaS)",
    "what_it_tests": "O Azure Load Balancer padrão opera na camada 4 para distribuir tráfego entre Máquinas Virtuais (IaaS), não sendo necessário nem o componente PaaS web adequado para parear apenas com um Azure SQL Database.",
    "question": "Suponha que o arquiteto líder de sua empresa tenha pedido à sua equipe para implementar uma solução baseada em PaaS no Azure para um rápido teste de conceito (Proof-of-Concept, POC) para a alta gerência. Um de seus colegas prossegue e cria um Banco de Dados SQL do Azure e um Balanceador de Carga do Azure.\nVocê concordaria com essa implementação?",
    "options": [
      {
        "id": "A",
        "text": "Sim"
      },
      {
        "id": "B",
        "text": "Não"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "O Azure Load Balancer padrão opera na camada 4 para distribuir tráfego entre Máquinas Virtuais (IaaS), não sendo necessário nem o componente PaaS web adequado para parear apenas com um Azure SQL Database.",
    "explanation_why_correct": "**Não (B).** Um Balanceador de Carga do Azure (Load Balancer) é voltado para distribuir tráfego entre VMs (IaaS); uma solução PaaS completa usaria, por exemplo, o **Azure App Service** conectado ao Azure SQL Database.",
    "explanation_why_incorrect": "Criar apenas um banco SQL e um Load Balancer sem camada de aplicação PaaS não atende à arquitetura solicitada.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 25,
    "type": "single",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "objective": "2.1 Descrever a hierarquia de gerenciamento do Azure e locatários do Microsoft Entra ID",
    "what_it_tests": "Cada assinatura do Azure pode estabelecer relação de confiança com apenas UM único diretório (locatário / tenant) do Microsoft Entra ID por vez (embora um tenant possa conter várias assinaturas).",
    "question": "Sim ou Não:  Uma subscrição do Azure pode confiar em vários locatários do Microsoft Entra ID?",
    "options": [
      {
        "id": "A",
        "text": "Não"
      },
      {
        "id": "B",
        "text": "Sim"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Cada assinatura do Azure pode estabelecer relação de confiança com apenas UM único diretório (locatário / tenant) do Microsoft Entra ID por vez (embora um tenant possa conter várias assinaturas).",
    "explanation_why_correct": "**Não (A).** Uma assinatura do Azure só pode confiar em **um único locatário (tenant) do Microsoft Entra ID** de cada vez (relação 1 tenant : N assinaturas).",
    "explanation_why_incorrect": "Múltiplas assinaturas podem confiar no mesmo diretório, mas uma assinatura nunca confia em vários diretórios simultaneamente.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 26,
    "type": "single",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "objective": "2.2 Descrever serviços de contêineres no Azure",
    "what_it_tests": "O Azure Kubernetes Service (AKS) permite criar, implantar, escalar e gerenciar aplicações conteinerizadas em clusters Kubernetes gerenciados.",
    "question": "Qual serviço do Azure é usado para criar, implantar e gerenciar aplicativos em contêineres?",
    "options": [
      {
        "id": "A",
        "text": "Azure Kubernetes Service (AKS)"
      },
      {
        "id": "B",
        "text": "Azure Virtual Machine"
      },
      {
        "id": "C",
        "text": "Azure Functions"
      },
      {
        "id": "D",
        "text": "Azure Container Registry"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "O Azure Kubernetes Service (AKS) permite criar, implantar, escalar e gerenciar aplicações conteinerizadas em clusters Kubernetes gerenciados.",
    "explanation_why_correct": "O **Azure Kubernetes Service (AKS)** é o serviço completo para criar, implantar e gerenciar aplicativos em contêineres em produção.",
    "explanation_why_incorrect": "O Azure Container Registry (ACR) apenas armazena imagens; Azure Functions é computação serverless orientada a eventos.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 27,
    "type": "single",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "objective": "2.4 Descrever serviços de segurança e gerenciamento de segredos no Azure",
    "what_it_tests": "O Azure Key Vault é o cofre em nuvem projetado para armazenar e gerenciar com segurança chaves criptográficas, segredos (senhas/strings de conexão) e certificados SSL/TLS.",
    "question": "Sua gerente pediu que você recomendasse um serviço Azure que possa ser usado para gerenciar e armazenar certificados de forma segura para os serviços da sua equipe. Qual dos seguintes você recomendaria?",
    "options": [
      {
        "id": "A",
        "text": "Azure Bastion"
      },
      {
        "id": "B",
        "text": "Microsoft Entra ID"
      },
      {
        "id": "C",
        "text": "Azure Confidential Ledger"
      },
      {
        "id": "D",
        "text": "Azure Key Vault"
      }
    ],
    "correct_answer": "D",
    "official_rationale": "O Azure Key Vault é o cofre em nuvem projetado para armazenar e gerenciar com segurança chaves criptográficas, segredos (senhas/strings de conexão) e certificados SSL/TLS.",
    "explanation_why_correct": "O **Azure Key Vault** centraliza o armazenamento seguro, o controle de acesso e a rotação automática de certificados, segredos e chaves criptográficas.",
    "explanation_why_incorrect": "Azure Bastion fornece acesso RDP/SSH seguro a VMs; Microsoft Entra ID gerencia identidades de usuários.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 28,
    "type": "single",
    "category": "Descrever os conceitos da nuvem (25-30%)",
    "category_en": "Descrever os conceitos da nuvem (25-30%)",
    "objective": "1.2 Descrever Acordos de Nível de Serviço (SLAs) e alta disponibilidade",
    "what_it_tests": "Os SLAs (Acordos de Nível de Serviço) do Azure calculam o percentual de tempo de atividade (uptime) com base em um ciclo de faturamento mensal.",
    "question": "A disponibilidade de todos os serviços do Azure é calculada em um ciclo de cobrança ____________.",
    "options": [
      {
        "id": "A",
        "text": "mensal"
      },
      {
        "id": "B",
        "text": "trimestral"
      },
      {
        "id": "C",
        "text": "anual"
      },
      {
        "id": "D",
        "text": "semanal"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Os SLAs (Acordos de Nível de Serviço) do Azure calculam o percentual de tempo de atividade (uptime) com base em um ciclo de faturamento mensal.",
    "explanation_why_correct": "A disponibilidade garantida nos SLAs do Azure é sempre apurada em um ciclo de cobrança **mensal (A)**.",
    "explanation_why_incorrect": "Os créditos de serviço por violação de SLA são calculados sobre a fatura mensal do respectivo serviço.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 29,
    "type": "single",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "objective": "2.4 Descrever edições e SLA do Microsoft Entra ID (Azure AD)",
    "what_it_tests": "A camada Gratuita (Free) do Microsoft Entra ID (antigo Azure AD) não possui SLA financeiro de 99,99%; o SLA de 99,99% aplica-se às edições pagas (P1/P2).",
    "question": "Sim ou Não: O Azure garante 99,99% de disponibilidade para a versão gratuita do Azure Active Directory (AAD).",
    "options": [
      {
        "id": "A",
        "text": "Não"
      },
      {
        "id": "B",
        "text": "Sim"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "A camada Gratuita (Free) do Microsoft Entra ID (antigo Azure AD) não possui SLA financeiro de 99,99%; o SLA de 99,99% aplica-se às edições pagas (P1/P2).",
    "explanation_why_correct": "**Não (A).** Serviços em camadas gratuitas (Free tier), incluindo a edição gratuita do Azure AD / Microsoft Entra ID, não oferecem garantia financeira de SLA de 99,99%.",
    "explanation_why_incorrect": "O SLA de 99,99% de disponibilidade do Microsoft Entra ID exige licenciamento Premium (P1 ou P2).",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 30,
    "type": "multi",
    "category": "Descrever os conceitos da nuvem (25-30%)",
    "category_en": "Descrever os conceitos da nuvem (25-30%)",
    "objective": "1.2 Descrever Acordos de Nível de Serviço (SLAs) no Azure",
    "what_it_tests": "Os documentos de SLA do Azure definem formalmente Metas de Desempenho, Garantias de Disponibilidade/Conectividade e Créditos de Serviço caso a meta não seja cumprida.",
    "question": "Escolha 3 componentes dos SLAs (Acordos de Nível de Serviço) do Azure:",
    "options": [
      {
        "id": "A",
        "text": "Metas de Desempenho"
      },
      {
        "id": "B",
        "text": "Metas de Uso"
      },
      {
        "id": "C",
        "text": "Garantias de Disponibilidade e Conectividade"
      },
      {
        "id": "D",
        "text": "Créditos de Serviço"
      }
    ],
    "correct_answer": [
      "A",
      "C",
      "D"
    ],
    "official_rationale": "Os documentos de SLA do Azure definem formalmente Metas de Desempenho, Garantias de Disponibilidade/Conectividade e Créditos de Serviço caso a meta não seja cumprida.",
    "explanation_why_correct": "Os 3 componentes presentes nos SLAs do Azure são **Metas de Desempenho (A)**, **Garantias de Disponibilidade e Conectividade (C)** e **Créditos de Serviço (D)**.",
    "explanation_why_incorrect": "Metas de Uso (B) não fazem parte de um Acordo de Nível de Serviço.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 31,
    "type": "single",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "objective": "2.1 Descrever grupos de recursos no Azure",
    "what_it_tests": "Grupos de recursos são agrupamentos lógicos para gerenciamento de ciclo de vida; recursos em grupos diferentes podem interagir e se comunicar normalmente.",
    "question": "Sim ou Não:\nUm recurso pode se conectar a recursos de outros grupos de recursos.",
    "options": [
      {
        "id": "A",
        "text": "Sim"
      },
      {
        "id": "B",
        "text": "Não"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Grupos de recursos são agrupamentos lógicos para gerenciamento de ciclo de vida; recursos em grupos diferentes podem interagir e se comunicar normalmente.",
    "explanation_why_correct": "**Sim (A).** Um recurso em um grupo de recursos pode se conectar e interagir livremente com recursos situados em outros grupos de recursos.",
    "explanation_why_incorrect": "O grupo de recursos não restringe a comunicação de rede ou integração entre serviços.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 32,
    "type": "single",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "objective": "2.2 Descrever os serviços de rede do Azure (VNet)",
    "what_it_tests": "A Rede Virtual do Azure (Azure Virtual Network - VNet) permite provisionar redes privadas isoladas na nuvem e conectá-las ao ambiente on-premises via VPN ou ExpressRoute.",
    "question": "O serviço Azure ________ permite criar e gerenciar redes privadas na nuvem e conectá-las a redes locais usando um gateway VPN.",
    "options": [
      {
        "id": "A",
        "text": "Centro de Segurança do Azure"
      },
      {
        "id": "B",
        "text": "DNS do Azure"
      },
      {
        "id": "C",
        "text": "Gerenciador de Tráfego do Azure"
      },
      {
        "id": "D",
        "text": "Rede Virtual do Azure"
      }
    ],
    "correct_answer": "D",
    "official_rationale": "A Rede Virtual do Azure (Azure Virtual Network - VNet) permite provisionar redes privadas isoladas na nuvem e conectá-las ao ambiente on-premises via VPN ou ExpressRoute.",
    "explanation_why_correct": "A **Rede Virtual do Azure (Azure Virtual Network / VNet)** é o bloco fundamental para criar redes privadas no Azure e conectá-las a redes locais.",
    "explanation_why_incorrect": "Azure DNS hospeda zonas de domínio; Traffic Manager faz balanceamento global por DNS.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 33,
    "type": "single",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "objective": "2.1 Descrever assinaturas e diretórios no Azure",
    "what_it_tests": "Cada assinatura do Azure confia em exatamente um único diretório do Microsoft Entra ID (Active Directory).",
    "question": "Verdadeiro ou Falso:  Cada Subscrição do Azure pode confiar em vários Diretórios Ativos.",
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
    "correct_answer": "B",
    "official_rationale": "Cada assinatura do Azure confia em exatamente um único diretório do Microsoft Entra ID (Active Directory).",
    "explanation_why_correct": "**Falso (B).** Uma assinatura do Azure só pode estar associada e confiar em **um único diretório** do Microsoft Entra ID por vez.",
    "explanation_why_incorrect": "A relação é de 1 diretório para muitas assinaturas, nunca de 1 assinatura para vários diretórios.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 34,
    "type": "single",
    "category": "Descrever os conceitos da nuvem (25-30%)",
    "category_en": "Descrever os conceitos da nuvem (25-30%)",
    "objective": "1.2 Calcular SLAs compostos no Azure",
    "what_it_tests": "Quando um aplicativo depende de múltiplos serviços em série, o SLA composto é obtido multiplicando os percentuais individuais, resultando em um valor MENOR que os SLAs individuais.",
    "question": "A SLA composta para um aplicativo que depende de vários serviços seria maior do que as SLAs individuais dos serviços em particular?",
    "options": [
      {
        "id": "A",
        "text": "Sim"
      },
      {
        "id": "B",
        "text": "Não"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "Quando um aplicativo depende de múltiplos serviços em série, o SLA composto é obtido multiplicando os percentuais individuais, resultando em um valor MENOR que os SLAs individuais.",
    "explanation_why_correct": "**Não (B).** A multiplicação de duas probabilidades menores que 100% (ex.: 99,9% × 99,9% = 99,8%) resulta sempre em um SLA composto **menor** que os SLAs individuais.",
    "explanation_why_incorrect": "Para elevar o SLA composto, é necessário adicionar redundância em paralelo (failover), e não encadear dependências em série.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 35,
    "type": "single",
    "category": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "category_en": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "objective": "3.1 Descrever o ciclo de vida de assinaturas no Azure",
    "what_it_tests": "Ao cancelar uma assinatura, o Azure desativa os recursos temporariamente e retém os dados por um período de carência (30 a 90 dias) caso o cliente deseje reativar a conta.",
    "question": "Sim ou Não:\nQuando você cancela uma Assinatura Azure, seus recursos são imediatamente excluídos permanentemente para liberar espaço.",
    "options": [
      {
        "id": "A",
        "text": "Não"
      },
      {
        "id": "B",
        "text": "Sim"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Ao cancelar uma assinatura, o Azure desativa os recursos temporariamente e retém os dados por um período de carência (30 a 90 dias) caso o cliente deseje reativar a conta.",
    "explanation_why_correct": "**Não (A).** Os recursos não são excluídos permanentemente no mesmo instante; há um período de retenção de segurança antes da exclusão definitiva.",
    "explanation_why_incorrect": "Isso evita perda irreversível de dados em caso de cancelamento acidental ou falha temporária de pagamento.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 36,
    "type": "single",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "objective": "2.2 Descrever conectividade híbrida no Azure (VPN Gateway)",
    "what_it_tests": "O Azure VPN Gateway estabelece túneis IPsec/IKE criptografados para enviar tráfego seguro entre uma VNet do Azure e uma rede local através da Internet pública.",
    "question": "_______ é capaz de enviar tráfego criptografado entre uma rede virtual do Azure e um local localizado no local através da Internet pública.",
    "options": [
      {
        "id": "A",
        "text": "Um Gateway VPN"
      },
      {
        "id": "B",
        "text": "Um Firewall"
      },
      {
        "id": "C",
        "text": "Grupo de Segurança de Rede (NSG)"
      },
      {
        "id": "D",
        "text": "Um Gateway de Aplicativo"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "O Azure VPN Gateway estabelece túneis IPsec/IKE criptografados para enviar tráfego seguro entre uma VNet do Azure e uma rede local através da Internet pública.",
    "explanation_why_correct": "**Um Gateway VPN (A)** é o tipo específico de gateway de rede virtual que envia tráfego criptografado entre o Azure e o datacenter local pela Internet.",
    "explanation_why_incorrect": "Firewall e NSG filtram tráfego; Application Gateway é um balanceador de tráfego HTTP/HTTPS de camada 7.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 37,
    "type": "multi",
    "category": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "category_en": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "objective": "3.1 Descrever os benefícios da Conta Gratuita do Azure (Azure Free Account)",
    "what_it_tests": "A Conta Gratuita do Azure oferece crédito inicial para usar nos primeiros 30 dias, 12 meses de serviços populares gratuitos e mais de 25 serviços sempre gratuitos.",
    "question": "No contexto das assinaturas do Azure, o que uma assinatura de avaliação gratuita do Azure fornece? (Selecione todas as opções que se aplicam)",
    "options": [
      {
        "id": "A",
        "text": "Acesso a mais de 25 produtos que são sempre gratuitos"
      },
      {
        "id": "B",
        "text": "Crédito para gastar nos primeiros 30 dias"
      },
      {
        "id": "C",
        "text": "Acesso ilimitado a todos os serviços Azure"
      },
      {
        "id": "D",
        "text": "Acesso a um número de produtos Azure gratuitos por 12 meses"
      }
    ],
    "correct_answer": [
      "A",
      "B",
      "D"
    ],
    "official_rationale": "A Conta Gratuita do Azure oferece crédito inicial para usar nos primeiros 30 dias, 12 meses de serviços populares gratuitos e mais de 25 serviços sempre gratuitos.",
    "explanation_why_correct": "A avaliação gratuita do Azure inclui: **Mais de 25 produtos sempre gratuitos (A)**, **Crédito para gastar nos primeiros 30 dias (B)** e **Produtos populares gratuitos por 12 meses (D)**.",
    "explanation_why_incorrect": "Ela não oferece acesso ilimitado gratuito a todos os serviços do Azure (C).",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 38,
    "type": "single",
    "category": "Descrever os conceitos da nuvem (25-30%)",
    "category_en": "Descrever os conceitos da nuvem (25-30%)",
    "objective": "1.3 Descrever o modelo de responsabilidade compartilhada (IaaS, PaaS, SaaS)",
    "what_it_tests": "Em IaaS (Infraestrutura como Serviço), o cliente é responsável pela segurança do sistema operacional, middlewares, tempo de execução, aplicativos, rede virtual e dados.",
    "question": "Qual dos seguintes requer o maior esforço de segurança de sua parte?",
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
    "correct_answer": "C",
    "official_rationale": "Em IaaS (Infraestrutura como Serviço), o cliente é responsável pela segurança do sistema operacional, middlewares, tempo de execução, aplicativos, rede virtual e dados.",
    "explanation_why_correct": "**Infraestrutura como serviço - IaaS (C)** exige o maior esforço de segurança por parte do cliente entre os modelos em nuvem, pois o cliente gerencia o SO, patches e configurações de firewall.",
    "explanation_why_incorrect": "Em PaaS e SaaS, o provedor de nuvem assume a segurança do sistema operacional e da plataforma subjacente.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 39,
    "type": "single",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "objective": "2.1 Descrever Zonas de Disponibilidade e Conjuntos de Disponibilidade",
    "what_it_tests": "Zonas de Disponibilidade (e Conjuntos de Disponibilidade) garantem que a aplicação continue operando durante eventos de manutenção planejada ou falhas.",
    "question": "Você está projetando uma solução para melhorar a resiliência de sua aplicação no Azure. Qual das seguintes opções você escolheria para garantir que sua aplicação permaneça disponível durante eventos de manutenção planejados?",
    "options": [
      {
        "id": "A",
        "text": "Zonas de Disponibilidade"
      },
      {
        "id": "B",
        "text": "Conjuntos de Disponibilidade"
      },
      {
        "id": "C",
        "text": "Conjuntos de Dimensionamento"
      },
      {
        "id": "D",
        "text": "Azure Container Registry"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Zonas de Disponibilidade (e Conjuntos de Disponibilidade) garantem que a aplicação continue operando durante eventos de manutenção planejada ou falhas.",
    "explanation_why_correct": "As **Zonas de Disponibilidade (A)** distribuem instâncias em datacenters fisicamente separados dentro de uma região, mantendo a aplicação ativa durante manutenções planejadas ou falhas de um datacenter inteiro.",
    "explanation_why_incorrect": "O Azure Container Registry (D) é apenas um repositório de imagens de contêiner.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 40,
    "type": "multi",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "objective": "2.2 Descrever o Azure App Service",
    "what_it_tests": "O Azure App Service suporta a implantação de código ou de contêineres Docker (Web Apps for Containers), além de compartilhar sua plataforma subjacente com o Azure Functions.",
    "question": "Quais são as opções de implantação suportadas pelo Azure App Service (Serviço de Aplicativo do Azure)? (Selecione todas as opções corretas)",
    "options": [
      {
        "id": "A",
        "text": "Kubernetes"
      },
      {
        "id": "B",
        "text": "Virtual Machines (Máquinas Virtuais)"
      },
      {
        "id": "C",
        "text": "Docker Containers"
      },
      {
        "id": "D",
        "text": "Azure Functions"
      }
    ],
    "correct_answer": [
      "C",
      "D"
    ],
    "official_rationale": "O Azure App Service suporta a implantação de código ou de contêineres Docker (Web Apps for Containers), além de compartilhar sua plataforma subjacente com o Azure Functions.",
    "explanation_why_correct": "No gabarito deste simulado, as opções válidas são **Docker Containers (C)** e **Azure Functions (D)** (que pode ser executado sobre um plano do App Service).",
    "explanation_why_incorrect": "Kubernetes (AKS) e Máquinas Virtuais (VMs) são serviços distintos do Azure App Service.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 41,
    "type": "single",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "objective": "2.2 Descrever tipos de conexão de Gateway de VPN no Azure",
    "what_it_tests": "Conexões entre redes por meio de gateways de VPN utilizam túneis IPsec/IKE (Site-to-Site / VNet-to-VNet).",
    "question": "Você deseja configurar uma conexão VPN entre duas redes virtuais do Azure que estão em regiões diferentes. Qual dos seguintes tipos de conexão VPN seria mais adequado para esse cenário?",
    "options": [
      {
        "id": "A",
        "text": "Point-to-Site (VPN sobre SSL)"
      },
      {
        "id": "B",
        "text": "VNet-to-VNet (IPsec)"
      },
      {
        "id": "C",
        "text": "ExpressRoute"
      },
      {
        "id": "D",
        "text": "Site-to-Site (IPsec)"
      }
    ],
    "correct_answer": "D",
    "official_rationale": "Conexões entre redes por meio de gateways de VPN utilizam túneis IPsec/IKE (Site-to-Site / VNet-to-VNet).",
    "explanation_why_correct": "No gabarito deste simulado, a resposta marcada é **D. Site-to-Site (IPsec)** (observação técnica para a prova: conexões entre duas VNets via VPN Gateway usam túneis IPsec equivalentes ao Site-to-Site / VNet-to-VNet).",
    "explanation_why_incorrect": "Point-to-Site (A) conecta um computador individual à VNet, e ExpressRoute (C) é um circuito dedicado privado que não usa VPN pela Internet.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 42,
    "type": "single",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "objective": "2.3 Descrever o Azure Blob Storage",
    "what_it_tests": "O Azure Blob Storage é o serviço de armazenamento de objetos otimizado para armazenar grandes volumes de dados não estruturados (textos, imagens, vídeos, backups).",
    "question": "Quais dos seguintes serviços podem ser usados para armazenar dados não estruturados no Azure?",
    "options": [
      {
        "id": "A",
        "text": "Azure Blob Storage"
      },
      {
        "id": "B",
        "text": "Azure Queue Storage"
      },
      {
        "id": "C",
        "text": "Azure Event Grid"
      },
      {
        "id": "D",
        "text": "Azure Virtual Machines"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "O Azure Blob Storage é o serviço de armazenamento de objetos otimizado para armazenar grandes volumes de dados não estruturados (textos, imagens, vídeos, backups).",
    "explanation_why_correct": "O **Azure Blob Storage (A)** foi projetado especificamente para armazenar dados não estruturados (objetos/blobs) em escala massiva.",
    "explanation_why_incorrect": "Queue Storage armazena pequenas mensagens de fila; Event Grid roteia eventos; e VMs são recursos de computação.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 43,
    "type": "single",
    "category": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "category_en": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "objective": "3.2 Descrever a herança de Bloqueios de Recursos (Resource Locks)",
    "what_it_tests": "Recursos filhos herdam bloqueios do grupo de recursos pai, e o bloqueio mais restritivo (ReadOnly é mais restritivo que CanNotDelete) sempre prevalece.",
    "question": "Sim ou Não:\nNo caso dos grupos de recursos, o bloqueio mais restritivo na herança tem precedência.",
    "options": [
      {
        "id": "A",
        "text": "Não"
      },
      {
        "id": "B",
        "text": "Sim"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "Recursos filhos herdam bloqueios do grupo de recursos pai, e o bloqueio mais restritivo (ReadOnly é mais restritivo que CanNotDelete) sempre prevalece.",
    "explanation_why_correct": "**Sim (B).** Na hierarquia do Azure, os bloqueios são herdados e **o bloqueio mais restritivo sempre tem precedência**.",
    "explanation_why_incorrect": "Mesmo que um usuário tenha permissão de Proprietário (Owner), o bloqueio ativo impede a ação até que seja removido.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 44,
    "type": "multi",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "objective": "2.2 Comparar Máquinas Virtuais (VMs) e Contêineres",
    "what_it_tests": "VMs virtualizam o hardware completo com tamanho de disco/memória alocado e forte isolamento de SO, enquanto contêineres compartilham o kernel do host, inicializam em segundos e possuem implantação independente.",
    "question": "Quais são as principais diferenças entre uma VM (Máquina Virtual) e um contêiner? (Selecione todas as opções corretas)",
    "options": [
      {
        "id": "A",
        "text": "VMs tem um tamanho fixo"
      },
      {
        "id": "B",
        "text": "Contêineres têm um tempo de inicialização mais rápido"
      },
      {
        "id": "C",
        "text": "VM possui isolamento de recursos"
      },
      {
        "id": "D",
        "text": "Contêineres possuem implantação independente"
      }
    ],
    "correct_answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "official_rationale": "VMs virtualizam o hardware completo com tamanho de disco/memória alocado e forte isolamento de SO, enquanto contêineres compartilham o kernel do host, inicializam em segundos e possuem implantação independente.",
    "explanation_why_correct": "Todas as quatro características (**A, B, C e D**) destacam propriedades verdadeiras na comparação entre Máquinas Virtuais e Contêineres.",
    "explanation_why_incorrect": "Nenhuma alternativa está incorreta neste item de múltipla escolha.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 45,
    "type": "single",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "objective": "2.1 Descrever regras e características de Grupos de Recursos no Azure",
    "what_it_tests": "Um grupo de recursos armazena metadados em uma região, mas pode conter recursos implantados em qualquer outra região do Azure.",
    "question": "Qual dessas NÃO é uma restrição válida do grupo de recursos do Azure?",
    "options": [
      {
        "id": "A",
        "text": "Um grupo de recursos pode conter recursos pertencentes a diferentes assinaturas"
      },
      {
        "id": "B",
        "text": "Um grupo de recursos pode conter recursos localizados em diferentes regiões"
      },
      {
        "id": "C",
        "text": "Um grupo de recursos pode ser usado para aplicar políticas consistentes aos recursos usando outro serviço."
      },
      {
        "id": "D",
        "text": "Um grupo de recursos deve estar na mesma região que seus recursos"
      }
    ],
    "correct_answer": "D",
    "official_rationale": "Um grupo de recursos armazena metadados em uma região, mas pode conter recursos implantados em qualquer outra região do Azure.",
    "explanation_why_correct": "A afirmação **D (\"Um grupo de recursos deve estar na mesma região que seus recursos\")** NÃO é uma restrição válida, pois um grupo de recursos pode conter recursos de várias regiões diferentes.",
    "explanation_why_incorrect": "Observação: um recurso individual pertence a apenas um grupo de recursos, mas pode residir em região diferente da região do grupo de recursos.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 46,
    "type": "single",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "objective": "2.1 Descrever a infraestrutura física global do Azure (Datacenters, Regiões, Zonas)",
    "what_it_tests": "Os Datacenters do Azure são instalações físicas (edifícios) espalhadas pelo mundo que abrigam racks de servidores, armazenamento e equipamentos de rede.",
    "question": "Os _____________ do Azure são edifícios físicos exclusivos - localizados em todo o mundo - que abrigam um grupo de servidores de computador em rede.",
    "options": [
      {
        "id": "A",
        "text": "Zonas de Disponibilidade"
      },
      {
        "id": "B",
        "text": "Geografias"
      },
      {
        "id": "C",
        "text": "Datacenters"
      },
      {
        "id": "D",
        "text": "Regiões"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "Os Datacenters do Azure são instalações físicas (edifícios) espalhadas pelo mundo que abrigam racks de servidores, armazenamento e equipamentos de rede.",
    "explanation_why_correct": "Os **Datacenters (C)** são os edifícios físicos exclusivos que abrigam os servidores em rede do Azure.",
    "explanation_why_incorrect": "Regiões são áreas geográficas contendo um ou mais datacenters; Zonas de Disponibilidade são agrupamentos isolados de datacenters dentro de uma região.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 47,
    "type": "single",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "objective": "2.2 Descrever conceitos de DevOps e CI/CD",
    "what_it_tests": "Um pipeline de CI/CD (Integração Contínua / Entrega Contínua) automatiza as etapas de compilação (build), execução de testes e implantação (deploy) de software.",
    "question": "O que é um pipeline de CI/CD?",
    "options": [
      {
        "id": "A",
        "text": "Um processo para gerenciar as configurações de infraestrutura"
      },
      {
        "id": "B",
        "text": "Um processo para automatizar a compilação, testes e implantação de um aplicativo"
      },
      {
        "id": "C",
        "text": "Um processo para monitorar o desempenho do aplicativo"
      },
      {
        "id": "D",
        "text": "Um processo para rastrear e resolver bugs de software"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "Um pipeline de CI/CD (Integração Contínua / Entrega Contínua) automatiza as etapas de compilação (build), execução de testes e implantação (deploy) de software.",
    "explanation_why_correct": "Um pipeline de CI/CD é **um processo para automatizar a compilação, testes e implantação de um aplicativo (B)**.",
    "explanation_why_incorrect": "Monitoramento de desempenho é APM (Application Insights) e gerenciamento de configuração de políticas é Azure Policy.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 48,
    "type": "single",
    "category": "Descrever os conceitos da nuvem (25-30%)",
    "category_en": "Descrever os conceitos da nuvem (25-30%)",
    "objective": "1.3 Identificar serviços adequados para hospedar aplicações PaaS",
    "what_it_tests": "Event Hubs é um serviço de ingestão de streaming de eventos e Blob Storage é armazenamento de objetos; nenhum dos dois hospeda a lógica/interface de uma aplicação web PaaS geral.",
    "question": "Suponha que o arquiteto líder em sua empresa tenha solicitado à sua equipe a implementação de uma solução baseada em PaaS no Azure para uma rápida Prova de Conceito (PoC) para a alta administração. Um de seus colegas prossegue e cria um Azure Event Hubs e um Azure Blob Storage.\nVocê concorda com essa implementação?",
    "options": [
      {
        "id": "A",
        "text": "Não"
      },
      {
        "id": "B",
        "text": "Sim"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Event Hubs é um serviço de ingestão de streaming de eventos e Blob Storage é armazenamento de objetos; nenhum dos dois hospeda a lógica/interface de uma aplicação web PaaS geral.",
    "explanation_why_correct": "**Não (A).** Criar apenas um Event Hubs e um Blob Storage não fornece um ambiente de hospedagem de aplicativo PaaS (como o Azure App Service) para demonstrar a aplicação.",
    "explanation_why_incorrect": "É fundamental escolher os serviços PaaS correspondentes à arquitetura da aplicação.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 49,
    "type": "single",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "objective": "2.2 Descrever Integração Contínua (CI)",
    "what_it_tests": "A Integração Contínua (CI) compila e valida automaticamente cada alteração de código enviada ao repositório para garantir que o código-fonte permaneça íntegro e funcional.",
    "question": "Qual é o objetivo principal da integração contínua (CI)?",
    "options": [
      {
        "id": "A",
        "text": "Identificar e corrigir bugs de software"
      },
      {
        "id": "B",
        "text": "Otimizar o desempenho de um aplicativo"
      },
      {
        "id": "C",
        "text": "Garantir que o código-fonte de um aplicativo funcione corretamente"
      },
      {
        "id": "D",
        "text": "Automatizar a implantação de um aplicativo"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "A Integração Contínua (CI) compila e valida automaticamente cada alteração de código enviada ao repositório para garantir que o código-fonte permaneça íntegro e funcional.",
    "explanation_why_correct": "O objetivo principal da Integração Contínua (CI) é **garantir que o código-fonte de um aplicativo funcione corretamente (C)** a cada mesclagem (merge/commit) por meio de builds e testes automatizados.",
    "explanation_why_incorrect": "A implantação automatizada em ambientes de produção corresponde à etapa de Entrega/Implantação Contínua (CD).",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 50,
    "type": "single",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "objective": "2.3 Descrever o Azure HDInsight",
    "what_it_tests": "O Azure HDInsight é um serviço gerenciado de nuvem para análise de Big Data que executa frameworks open-source como Apache Hadoop, Spark, Hive, Kafka e HBase.",
    "question": "Sim ou Não:\nO Azure HDInsight pode ser usado para executar estruturas de código aberto populares, incluindo Apache Hadoop, Spark, Hive, Kafka e outros para análise de dados de código aberto.",
    "options": [
      {
        "id": "A",
        "text": "Sim"
      },
      {
        "id": "B",
        "text": "Não"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "O Azure HDInsight é um serviço gerenciado de nuvem para análise de Big Data que executa frameworks open-source como Apache Hadoop, Spark, Hive, Kafka e HBase.",
    "explanation_why_correct": "**Sim (A).** O **Azure HDInsight** permite provisionar clusters gerenciados com frameworks populares de código aberto (Hadoop, Spark, Hive, Kafka).",
    "explanation_why_incorrect": "O HDInsight facilita a migração de cargas de trabalho Hadoop/Spark locais para a nuvem.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 51,
    "type": "single",
    "category": "Descrever os conceitos da nuvem (25-30%)",
    "category_en": "Descrever os conceitos da nuvem (25-30%)",
    "objective": "1.2 Descrever os conceitos de escalabilidade, elasticidade e agilidade na nuvem",
    "what_it_tests": "Escalabilidade é a capacidade de um sistema lidar com o aumento da carga de trabalho adicionando recursos (vertical ou horizontalmente) sem perder desempenho.",
    "question": "O que significa o termo escalabilidade no contexto de computação em nuvem?",
    "options": [
      {
        "id": "A",
        "text": "A capacidade de um sistema se recuperar de falhas e interrupções"
      },
      {
        "id": "B",
        "text": "A capacidade de um sistema lidar com cargas de trabalho crescentes sem degradar o desempenho"
      },
      {
        "id": "C",
        "text": "A capacidade de um sistema se adaptar automaticamente às mudanças de demanda"
      },
      {
        "id": "D",
        "text": "A capacidade de um sistema ser facilmente dimensionado para cima ou para baixo"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "Escalabilidade é a capacidade de um sistema lidar com o aumento da carga de trabalho adicionando recursos (vertical ou horizontalmente) sem perder desempenho.",
    "explanation_why_correct": "Escalabilidade é **a capacidade de um sistema lidar com cargas de trabalho crescentes sem degradar o desempenho (B)**.",
    "explanation_why_incorrect": "Recuperar-se de falhas refere-se a Resiliência/Tolerância a falhas; ajustar-se automaticamente à demanda em tempo real refere-se especificamente à Elasticidade (Auto-scaling).",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 52,
    "type": "single",
    "category": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "category_en": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "objective": "3.2 Descrever tipos de Bloqueios de Recursos (ReadOnly vs CanNotDelete)",
    "what_it_tests": "O bloqueio ReadOnly (Somente Leitura) impede tanto a exclusão quanto qualquer modificação na configuração do recurso.",
    "question": "Como consultor, qual dos seguintes bloqueios você recomendaria a uma organização para impedir a exclusão ou modificação de recursos críticos para a missão?",
    "options": [
      {
        "id": "A",
        "text": "isCritical"
      },
      {
        "id": "B",
        "text": "CanNotChange"
      },
      {
        "id": "C",
        "text": "CanNotModify"
      },
      {
        "id": "D",
        "text": "ReadOnly"
      }
    ],
    "correct_answer": "D",
    "official_rationale": "O bloqueio ReadOnly (Somente Leitura) impede tanto a exclusão quanto qualquer modificação na configuração do recurso.",
    "explanation_why_correct": "O bloqueio **`ReadOnly` (D)** é o único que impede simultaneamente a **exclusão** e a **modificação** de recursos críticos.",
    "explanation_why_incorrect": "Os nomes `isCritical`, `CanNotChange` e `CanNotModify` não existem no Azure (os dois tipos oficiais são `ReadOnly` e `CanNotDelete`).",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 53,
    "type": "single",
    "category": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "category_en": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "objective": "3.4 Descrever o Azure Monitor e alertas de métricas/autoscale",
    "what_it_tests": "O Azure Monitor coleta métricas e logs de atividade dos recursos, permitindo configurar regras de alerta quando o dimensionamento automático (Autoscale) dispara novas instâncias ou ocorrem falhas.",
    "question": "Qual dos seguintes você precisaria configurar alertas para interrupções ou quando o dimensionamento automático está prestes a implantar novas instâncias?",
    "options": [
      {
        "id": "A",
        "text": "Azure Monitor"
      },
      {
        "id": "B",
        "text": "Azure Bastion"
      },
      {
        "id": "C",
        "text": "Azure Service Health (Integridade do Serviço Azure)"
      },
      {
        "id": "D",
        "text": "Azure Advisor (Assistente)"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "O Azure Monitor coleta métricas e logs de atividade dos recursos, permitindo configurar regras de alerta quando o dimensionamento automático (Autoscale) dispara novas instâncias ou ocorrem falhas.",
    "explanation_why_correct": "O **Azure Monitor (A)** permite configurar alertas baseados em métricas, logs e eventos de dimensionamento automático (*autoscale*).",
    "explanation_why_incorrect": "Azure Bastion é para acesso remoto RDP/SSH; Azure Advisor fornece recomendações estáticas de boas práticas.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 54,
    "type": "single",
    "category": "Descrever os conceitos da nuvem (25-30%)",
    "category_en": "Descrever os conceitos da nuvem (25-30%)",
    "objective": "1.3 Comparar IaaS, PaaS e SaaS",
    "what_it_tests": "Quando o objetivo é eliminar 100% da administração e manutenção manual de infraestrutura e plataforma, SaaS é o modelo com menor responsabilidade administrativa para o cliente.",
    "question": "Você tem gerenciado um aplicativo que desenvolveu e implantou localmente por muito tempo, mas agora deseja migrá-lo para o Azure e se livrar de toda a administração e manutenção manual. Qual dos seguintes serviços seria mais adequado para o seu caso de uso?",
    "options": [
      {
        "id": "A",
        "text": "Software como Serviço (Saas)"
      },
      {
        "id": "B",
        "text": "Plataforma como Serviço (Paas)"
      },
      {
        "id": "C",
        "text": "Infraestrutura como Serviço (Iaas)"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Quando o objetivo é eliminar 100% da administração e manutenção manual de infraestrutura e plataforma, SaaS é o modelo com menor responsabilidade administrativa para o cliente.",
    "explanation_why_correct": "No gabarito deste simulado, a resposta é **A. Software como Serviço (SaaS)**, pois é o modelo que elimina toda a administração e manutenção técnica manual (observação: para hospedar código próprio sem gerenciar servidores, lembre-se também de **PaaS**).",
    "explanation_why_incorrect": "Em IaaS, você continua responsável por toda a manutenção do sistema operacional, patches e configurações da máquina virtual.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 55,
    "type": "multi",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "objective": "2.2 e 2.3 Descrever soluções de IoT e Big Data no Azure",
    "what_it_tests": "O Azure IoT Hub gerencia a comunicação bidirecional com milhões de dispositivos IoT, e o Azure Data Lake armazena grandes volumes de dados capturados para análise posterior.",
    "question": "Uma empresa abordou você para ajudá-la a planejar uma arquitetura capaz de capturar dados de milhões de dispositivos conectados e armazená-los com segurança para análise. Quais dos dois serviços a seguir você incluiria na proposta do projeto?",
    "options": [
      {
        "id": "A",
        "text": "Azure Notification Hubs"
      },
      {
        "id": "B",
        "text": "Azure IoT Hubs"
      },
      {
        "id": "C",
        "text": "Azure Data Lake"
      },
      {
        "id": "D",
        "text": "Azure ExpressRoute"
      }
    ],
    "correct_answer": [
      "B",
      "C"
    ],
    "official_rationale": "O Azure IoT Hub gerencia a comunicação bidirecional com milhões de dispositivos IoT, e o Azure Data Lake armazena grandes volumes de dados capturados para análise posterior.",
    "explanation_why_correct": "A combinação ideal é **Azure IoT Hubs (B)** para ingestão segura de telemetria de milhões de dispositivos e **Azure Data Lake (C)** para armazenamento analítico em larga escala.",
    "explanation_why_incorrect": "Notification Hubs envia notificações push para celulares; ExpressRoute é um link dedicado de rede privada.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 56,
    "type": "single",
    "category": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "category_en": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "objective": "3.1 Descrever custos de tráfego de rede (Ingress vs Egress e entre regiões)",
    "what_it_tests": "A transferência de dados de entrada (ingress) para o Azure é gratuita, mas a transferência de saída (egress) e a transferência de dados entre regiões diferentes do Azure são cobradas.",
    "question": "A transferência de dados entre serviços do Azure localizados em duas regiões é gratuita?",
    "options": [
      {
        "id": "A",
        "text": "Sim"
      },
      {
        "id": "B",
        "text": "Não"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "A transferência de dados de entrada (ingress) para o Azure é gratuita, mas a transferência de saída (egress) e a transferência de dados entre regiões diferentes do Azure são cobradas.",
    "explanation_why_correct": "**Não (B).** A transferência de dados entre serviços localizados em **duas regiões diferentes** gera custo de largura de banda de saída entre regiões.",
    "explanation_why_incorrect": "Apenas o tráfego de entrada (upload para os datacenters do Azure) é gratuito.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 57,
    "type": "single",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "objective": "2.2 Descrever Máquinas Virtuais do Azure (Azure Virtual Machines)",
    "what_it_tests": "O serviço Azure Virtual Machine fornece máquinas virtuais (IaaS) seguras, personalizáveis e com suporte sob demanda na nuvem.",
    "question": "Qual dos seguintes serviços do Azure é um serviço de computação em nuvem que fornece uma máquina virtual altamente segura e com suporte?",
    "options": [
      {
        "id": "A",
        "text": "Azure Functions"
      },
      {
        "id": "B",
        "text": "Azure Container Instances"
      },
      {
        "id": "C",
        "text": "Azure Virtual Machine"
      },
      {
        "id": "D",
        "text": "Azure Virtual Network"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "O serviço Azure Virtual Machine fornece máquinas virtuais (IaaS) seguras, personalizáveis e com suporte sob demanda na nuvem.",
    "explanation_why_correct": "**Azure Virtual Machine (C)** é o serviço de computação que disponibiliza uma máquina virtual completa na nuvem.",
    "explanation_why_incorrect": "Azure Functions é computação sem servidor (serverless); Container Instances executa contêineres isolados; e Virtual Network é um serviço de rede.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 58,
    "type": "multi",
    "category": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "category_en": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "objective": "3.3 Descrever o Azure Resource Manager (ARM)",
    "what_it_tests": "O Azure Resource Manager (ARM) organiza e implanta recursos utilizando Assinaturas (Subscriptions), Grupos de Recursos (Resource Groups) e Modelos ARM (ARM Templates).",
    "question": "Quais são os principais componentes do Azure Resource Manager? (Selecione todas as opções corretas)",
    "options": [
      {
        "id": "A",
        "text": "Conjuntos de Dimensionamento"
      },
      {
        "id": "B",
        "text": "Grupos de Recursos"
      },
      {
        "id": "C",
        "text": "Modelos ARM"
      },
      {
        "id": "D",
        "text": "Subscrições do Azure"
      }
    ],
    "correct_answer": [
      "B",
      "C",
      "D"
    ],
    "official_rationale": "O Azure Resource Manager (ARM) organiza e implanta recursos utilizando Assinaturas (Subscriptions), Grupos de Recursos (Resource Groups) e Modelos ARM (ARM Templates).",
    "explanation_why_correct": "Os componentes diretamente ligados à camada de gerenciamento do ARM são **Grupos de Recursos (B)**, **Modelos ARM (C)** e **Subscrições do Azure (D)**.",
    "explanation_why_incorrect": "Conjuntos de Dimensionamento (Scale Sets) são um recurso específico de computação de VMs, e não um componente estrutural do ARM.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 59,
    "type": "single",
    "category": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "category_en": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "objective": "3.2 Descrever a finalidade do Azure Policy",
    "what_it_tests": "O Azure Policy permite criar, atribuir e gerenciar políticas que impõem regras de conformidade e mantêm as configurações dos recursos do Azure consistentes com os padrões corporativos.",
    "question": "O ________ do Azure é um serviço de gerenciamento de configuração que ajuda a manter as configurações dos recursos do Azure consistentes.",
    "options": [
      {
        "id": "A",
        "text": "Azure Advisor (Assistente do Azure)"
      },
      {
        "id": "B",
        "text": "Azure Policy (Política do Azure)"
      },
      {
        "id": "C",
        "text": "Gerenciador de Tráfego do Azure"
      },
      {
        "id": "D",
        "text": "Centro de Segurança do Azure"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "O Azure Policy permite criar, atribuir e gerenciar políticas que impõem regras de conformidade e mantêm as configurações dos recursos do Azure consistentes com os padrões corporativos.",
    "explanation_why_correct": "O **Azure Policy (B)** avalia recursos em tempo de criação e continuamente para garantir conformidade com as regras de configuração da empresa.",
    "explanation_why_incorrect": "Azure Advisor apenas sugere recomendações sem impor regras; Traffic Manager é um balanceador de tráfego DNS.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 60,
    "type": "single",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "objective": "2.2 Descrever o Azure App Service",
    "what_it_tests": "O Azure App Service é o serviço PaaS baseado em HTTP para hospedar aplicativos web, back-ends móveis e APIs RESTful.",
    "question": "Qual serviço do Azure é usado para hospedar aplicativos web, móveis, RESTful e APIs no Azure?",
    "options": [
      {
        "id": "A",
        "text": "Azure App Service (Serviço de Aplicativo)"
      },
      {
        "id": "B",
        "text": "Azure Functions"
      },
      {
        "id": "C",
        "text": "Azure Front Door"
      },
      {
        "id": "D",
        "text": "Azure Logic Apps (Aplicativos Lógicos)"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "O Azure App Service é o serviço PaaS baseado em HTTP para hospedar aplicativos web, back-ends móveis e APIs RESTful.",
    "explanation_why_correct": "O **Azure App Service (A)** fornece hospedagem gerenciada para aplicações web, back-ends de aplicativos móveis e APIs RESTful em múltiplas linguagens (.NET, Java, Node.js, Python, PHP).",
    "explanation_why_incorrect": "Azure Front Door é uma CDN/balanceador global; Logic Apps é para automação de fluxos de trabalho.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 61,
    "type": "single",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "objective": "2.3 Descrever a Conta de Armazenamento do Azure (Azure Storage Account)",
    "what_it_tests": "Uma Conta de Armazenamento do Azure fornece um namespace exclusivo para armazenar blobs, arquivos, filas e tabelas de forma altamente escalonável, segura e durável.",
    "question": "O que é uma conta de armazenamento do Azure?",
    "options": [
      {
        "id": "A",
        "text": "Uma máquina virtual no Azure"
      },
      {
        "id": "B",
        "text": "Um serviço de armazenamento altamente escalonável e durável no Azure"
      },
      {
        "id": "C",
        "text": "Um serviço de gerenciamento de identidade"
      },
      {
        "id": "D",
        "text": "Um banco de dados relacional no Azure"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "Uma Conta de Armazenamento do Azure fornece um namespace exclusivo para armazenar blobs, arquivos, filas e tabelas de forma altamente escalonável, segura e durável.",
    "explanation_why_correct": "Uma Conta de Armazenamento do Azure é **um serviço de armazenamento altamente escalonável e durável no Azure (B)**.",
    "explanation_why_incorrect": "Ela não é uma máquina virtual, nem um serviço de identidade, nem um SGBD relacional SQL.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 62,
    "type": "single",
    "category": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "category_en": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "objective": "3.2 Descrever recursos de privacidade e conformidade da Microsoft",
    "what_it_tests": "A Declaração de Privacidade da Microsoft (Microsoft Privacy Statement) explica quais dados pessoais a Microsoft coleta, como os processa e com quais finalidades.",
    "question": "Onde você pode obter detalhes atualizados sobre os dados pessoais que a Microsoft processa, como os processa e para quais finalidades?",
    "options": [
      {
        "id": "A",
        "text": "Compliance Manager"
      },
      {
        "id": "B",
        "text": "Azure Trust Center"
      },
      {
        "id": "C",
        "text": "Centro de Conhecimento Azure"
      },
      {
        "id": "D",
        "text": "Declaração de Privacidade da Microsoft"
      }
    ],
    "correct_answer": "D",
    "official_rationale": "A Declaração de Privacidade da Microsoft (Microsoft Privacy Statement) explica quais dados pessoais a Microsoft coleta, como os processa e com quais finalidades.",
    "explanation_why_correct": "A **Declaração de Privacidade da Microsoft (D)** é o documento oficial que detalha os dados pessoais processados pela Microsoft e a finalidade desse processamento.",
    "explanation_why_incorrect": "O Compliance Manager ajuda a gerenciar posturas regulatórias e o Trust Center reúne informações gerais de segurança e conformidade.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 63,
    "type": "multi",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "objective": "2.3 Descrever as camadas de acesso do Azure Blob Storage",
    "what_it_tests": "O Azure Blob Storage oferece as camadas Quente (Hot), Fria (Cool), Fria/Gelada (Cold) e de Arquivamento (Archive).",
    "question": "Selecione os três tipos de camadas de armazenamento para o Azure Blob Storage (armazenamento de blobs):",
    "options": [
      {
        "id": "A",
        "text": "Camada Quente"
      },
      {
        "id": "B",
        "text": "Camada Fria"
      },
      {
        "id": "C",
        "text": "Camada de Arquivamento"
      },
      {
        "id": "D",
        "text": "Camada de Sono Profundo"
      },
      {
        "id": "E",
        "text": "Camada de Acesso Infrequente"
      }
    ],
    "correct_answer": [
      "A",
      "B",
      "C"
    ],
    "official_rationale": "O Azure Blob Storage oferece as camadas Quente (Hot), Fria (Cool), Fria/Gelada (Cold) e de Arquivamento (Archive).",
    "explanation_why_correct": "As três camadas clássicas de armazenamento do Azure Blob Storage presentes nas opções são **Camada Quente / Hot (A)**, **Camada Fria / Cool (B)** e **Camada de Arquivamento / Archive (C)**.",
    "explanation_why_incorrect": "\"Camada de Sono Profundo\" (Deep Archive) e \"Acesso Infrequente\" são nomenclaturas da AWS (Amazon S3), e não do Microsoft Azure.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 64,
    "type": "single",
    "category": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "category_en": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "objective": "3.1 Descrever limites, cotas e solicitações de suporte no Azure",
    "what_it_tests": "Para aumentar limites ou cotas ajustáveis de recursos em uma assinatura do Azure acima do padrão, basta abrir um chamado de suporte técnico/cota online gratuitamente no portal.",
    "question": "Se você deseja aumentar o limite ou a cota acima do limite padrão, _____________________",
    "options": [
      {
        "id": "A",
        "text": "crie uma política do Azure definindo esse aumento, mas será cobrado."
      },
      {
        "id": "B",
        "text": "defina um blueprint no Azure Blueprint para implementar essa alteração."
      },
      {
        "id": "C",
        "text": "abra uma solicitação de suporte ao cliente online sem custo."
      },
      {
        "id": "D",
        "text": "Atualize seu plano de suporte"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "Para aumentar limites ou cotas ajustáveis de recursos em uma assinatura do Azure acima do padrão, basta abrir um chamado de suporte técnico/cota online gratuitamente no portal.",
    "explanation_why_correct": "Para elevar uma cota padrão no Azure, você deve **abrir uma solicitação de suporte ao cliente online sem custo (C)**.",
    "explanation_why_incorrect": "Solicitações de aumento de cota e suporte de faturamento são gratuitas para todas as contas do Azure.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 65,
    "type": "single",
    "category": "Descrever os conceitos da nuvem (25-30%)",
    "category_en": "Descrever os conceitos da nuvem (25-30%)",
    "objective": "1.1 Descrever fases de lançamento de recursos no Azure (Private Preview, Public Preview, GA)",
    "what_it_tests": "Na Visualização Privada (Private Preview), apenas clientes selecionados/convidados testam o recurso. É na Visualização Pública (Public Preview) que todos os clientes podem testar.",
    "question": "Verdadeiro ou Falso:\nEm uma Visualização Privada, a Azure convida todos os clientes a participarem do acesso antecipado a novos conceitos e recursos.",
    "options": [
      {
        "id": "A",
        "text": "FALSE"
      },
      {
        "id": "B",
        "text": "TRUE"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Na Visualização Privada (Private Preview), apenas clientes selecionados/convidados testam o recurso. É na Visualização Pública (Public Preview) que todos os clientes podem testar.",
    "explanation_why_correct": "**FALSE / Falso (A).** Em uma **Visualização Privada (Private Preview)**, o recurso é disponibilizado apenas para um grupo restrito de clientes mediante convite/aprovação.",
    "explanation_why_incorrect": "Quando o recurso é aberto para todos os clientes testarem antes do lançamento final (GA), chama-se Visualização Pública (Public Preview).",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 66,
    "type": "single",
    "category": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "category_en": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "objective": "3.3 Descrever o Azure Cloud Shell",
    "what_it_tests": "O Azure Cloud Shell é executado diretamente no navegador web, permitindo usar tanto Bash quanto PowerShell a partir de qualquer sistema operacional (Windows, Ubuntu Linux, macOS).",
    "question": "Sim ou Não:\nÉ possível implantar uma VM do Azure a partir de um sistema Ubuntu usando o PowerShell no Cloud Shell.",
    "options": [
      {
        "id": "A",
        "text": "Sim"
      },
      {
        "id": "B",
        "text": "Não"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "O Azure Cloud Shell é executado diretamente no navegador web, permitindo usar tanto Bash quanto PowerShell a partir de qualquer sistema operacional (Windows, Ubuntu Linux, macOS).",
    "explanation_why_correct": "**Sim (A).** Como o **Azure Cloud Shell** roda no navegador, você pode usar o ambiente PowerShell do Cloud Shell a partir de um computador com Ubuntu Linux para criar uma VM.",
    "explanation_why_incorrect": "O Cloud Shell independe do sistema operacional local da máquina do usuário.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 67,
    "type": "multi",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "objective": "2.3 Descrever o Azure Cosmos DB",
    "what_it_tests": "O Azure Cosmos DB é um banco de dados NoSQL multimodelo globalmente distribuído que oferece baixa latência, 5 níveis de consistência (incluindo consistência forte) e API para NoSQL (SQL).",
    "question": "Quais são os principais benefícios do uso do Azure Cosmos DB? (Selecione todas as opções corretas)",
    "options": [
      {
        "id": "A",
        "text": "Consistência forte"
      },
      {
        "id": "B",
        "text": "Suporte a SQL"
      },
      {
        "id": "C",
        "text": "Escalabilidade global"
      },
      {
        "id": "D",
        "text": "Modelos de dados flexíveis"
      }
    ],
    "correct_answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "official_rationale": "O Azure Cosmos DB é um banco de dados NoSQL multimodelo globalmente distribuído que oferece baixa latência, 5 níveis de consistência (incluindo consistência forte) e API para NoSQL (SQL).",
    "explanation_why_correct": "Todos os quatro itens (**Consistência forte [A]**, **Suporte a consultas estilo SQL na API NoSQL [B]**, **Escalabilidade global [C]** e **Modelos de dados flexíveis [D]**) são benefícios reais do Azure Cosmos DB.",
    "explanation_why_incorrect": "Nenhuma das alternativas está incorreta.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 68,
    "type": "single",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "objective": "2.1 e 2.2 Diferenciar Conjuntos de Dimensionamento (Scale Sets) e Zonas de Disponibilidade",
    "what_it_tests": "Um Conjunto de Dimensionamento (VM Scale Set) em um único datacenter não protege contra a queda daquele datacenter inteiro; para resistir à falha de um datacenter, é preciso usar Zonas de Disponibilidade.",
    "question": "Uma startup implantou um conjunto de Máquinas Virtuais que são fundamentais para suas operações diárias. Eles precisam garantir sua disponibilidade mesmo se um único data center ficar inativo. Um dos estagiários sugeriu que implantar as VMs por meio de um Conjunto de Escala resolveria o problema. Você concorda?",
    "options": [
      {
        "id": "A",
        "text": "Sim"
      },
      {
        "id": "B",
        "text": "Não"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "Um Conjunto de Dimensionamento (VM Scale Set) em um único datacenter não protege contra a queda daquele datacenter inteiro; para resistir à falha de um datacenter, é preciso usar Zonas de Disponibilidade.",
    "explanation_why_correct": "**Não (B).** Apenas usar um Conjunto de Escala (Scale Set) padrão dentro de um único datacenter não protege contra a queda desse datacenter; é necessário implantar os recursos distribuídos entre **Zonas de Disponibilidade (Availability Zones)**.",
    "explanation_why_incorrect": "Scale Sets focam em escalar a quantidade de VMs automaticamente, enquanto Availability Zones protegem contra falha física de um datacenter.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 69,
    "type": "single",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "objective": "2.2 Descrever o Azure App Service como oferta PaaS",
    "what_it_tests": "O Azure App Service é a oferta de Plataforma como Serviço (PaaS) totalmente gerenciada para hospedar, implantar e escalar aplicações web e APIs.",
    "question": "O Azure ________ é uma Plataforma como Serviço (PaaS) totalmente gerenciada que fornece um ambiente de tempo de execução para hospedar, implantar e dimensionar aplicativos.",
    "options": [
      {
        "id": "A",
        "text": "Azure App Service (Serviço de Aplicativo)"
      },
      {
        "id": "B",
        "text": "Azure Advisor"
      },
      {
        "id": "C",
        "text": "Azure Logic Apps (Aplicativos Lógicos)"
      },
      {
        "id": "D",
        "text": "Azure Front Door"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "O Azure App Service é a oferta de Plataforma como Serviço (PaaS) totalmente gerenciada para hospedar, implantar e escalar aplicações web e APIs.",
    "explanation_why_correct": "O **Azure App Service (A)** fornece o ambiente de tempo de execução PaaS gerenciado para hospedar e dimensionar aplicativos web.",
    "explanation_why_incorrect": "Azure Advisor é um assistente de recomendações; Logic Apps orquestra fluxos de integração; Front Door é um balanceador global.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 70,
    "type": "single",
    "category": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "category_en": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "objective": "3.1 Descrever o limite de gastos (Spending Limit) na Conta Gratuita do Azure",
    "what_it_tests": "As Contas Gratuitas do Azure vêm com um limite de gastos (Spending Limit) ativado por padrão para evitar cobranças no cartão de crédito caso o crédito gratuito se esgote.",
    "question": "Há um limite de gastos padrão para a conta gratuita do Azure?",
    "options": [
      {
        "id": "A",
        "text": "Sim"
      },
      {
        "id": "B",
        "text": "Não"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "As Contas Gratuitas do Azure vêm com um limite de gastos (Spending Limit) ativado por padrão para evitar cobranças no cartão de crédito caso o crédito gratuito se esgote.",
    "explanation_why_correct": "**Sim (A).** A Conta Gratuita do Azure possui um **limite de gastos padrão** que suspende os recursos pagos automaticamente caso o crédito de avaliação acabe, garantindo que você não seja cobrado sem autorizar o upgrade.",
    "explanation_why_incorrect": "O usuário só passa a ser cobrado se optar explicitamente por remover o limite de gastos e mudar para o plano Pay-As-You-Go.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 71,
    "type": "single",
    "category": "Descrever os conceitos da nuvem (25-30%)",
    "category_en": "Descrever os conceitos da nuvem (25-30%)",
    "objective": "1.1 Descrever características de recursos em Preview no Azure",
    "what_it_tests": "Recursos em fase de visualização (Private Preview ou Public Preview) não possuem SLA nem cobertura de suporte formal padrão de produção.",
    "question": "Sim ou Não:\nA fase de visualização privada de um serviço inclui suporte formal.",
    "options": [
      {
        "id": "A",
        "text": "Não"
      },
      {
        "id": "B",
        "text": "Sim"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Recursos em fase de visualização (Private Preview ou Public Preview) não possuem SLA nem cobertura de suporte formal padrão de produção.",
    "explanation_why_correct": "**Não (A).** Serviços em fase de visualização privada (*Private Preview*) são fornecidos para avaliação antecipada e **não incluem SLA nem suporte formal de produção**.",
    "explanation_why_incorrect": "O suporte formal completo e as garantias de SLA passam a valer quando o serviço atinge a Disponibilidade Geral (GA - General Availability).",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 72,
    "type": "single",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "objective": "2.2 Descrever o Azure App Service",
    "what_it_tests": "O Azure App Service permite hospedar aplicativos web escaláveis e altamente disponíveis em um ambiente de nuvem PaaS totalmente gerenciado.",
    "question": "Qual dos seguintes serviços do Azure é usado para hospedar aplicativos web escaláveis e altamente disponíveis em um ambiente de nuvem gerenciado?",
    "options": [
      {
        "id": "A",
        "text": "Azure App Service"
      },
      {
        "id": "B",
        "text": "Azure Logic Apps"
      },
      {
        "id": "C",
        "text": "Azure Functions"
      },
      {
        "id": "D",
        "text": "Azure Virtual Machines"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "O Azure App Service permite hospedar aplicativos web escaláveis e altamente disponíveis em um ambiente de nuvem PaaS totalmente gerenciado.",
    "explanation_why_correct": "O **Azure App Service (A)** é o serviço gerenciado ideal para hospedar aplicações web escaláveis com alta disponibilidade integrada.",
    "explanation_why_incorrect": "Em Azure Virtual Machines (IaaS), o gerenciamento do sistema operacional e servidor web não é gerenciado automaticamente pela plataforma.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  },
  {
    "id": 73,
    "type": "single",
    "category": "Descrever os conceitos da nuvem (25-30%)",
    "category_en": "Descrever os conceitos da nuvem (25-30%)",
    "objective": "1.3 Classificar serviços em IaaS, PaaS e SaaS",
    "what_it_tests": "O Azure HDInsight é uma oferta de Plataforma como Serviço (PaaS) para clusters de Big Data, e não um Software como Serviço (SaaS) voltado ao usuário final.",
    "question": "Sim ou Não: O Azure HDInsight é um exemplo de oferta de Software como Serviço (SaaS).",
    "options": [
      {
        "id": "A",
        "text": "Sim"
      },
      {
        "id": "B",
        "text": "Não"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "O Azure HDInsight é uma oferta de Plataforma como Serviço (PaaS) para clusters de Big Data, e não um Software como Serviço (SaaS) voltado ao usuário final.",
    "explanation_why_correct": "**Não (B).** O Azure HDInsight é um serviço de **Plataforma como Serviço (PaaS)**, pois fornece a plataforma gerenciada de clusters Hadoop/Spark para engenheiros e cientistas de dados.",
    "explanation_why_incorrect": "Exemplos de SaaS da Microsoft são o Microsoft 365 (Word, Excel, Teams online) e o Dynamics 365.",
    "additional_reading": [
      {
        "title": "Roteiro de Aprendizagem Oficial Microsoft Learn: AZ-900 Azure Fundamentals",
        "url": "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/"
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { AZ900_SIMULADO_1_QUESTIONS };
}
