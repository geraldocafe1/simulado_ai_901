// Simulados Oficiais Microsoft AZ-900: Microsoft Azure Fundamentals
// Extraídos do Quizizz / Wayground
// Simulado 1 (2024 - 02): 73 questões | Simulado 2 (03 - 2024): 65 questões

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

const AZ900_SIMULADO_2_QUESTIONS = [
  {
    "id": 1,
    "type": "single",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Describe Azure architecture and services (35-40%)",
    "objective": "Identificar os serviços de IA e Machine Learning no Azure",
    "what_it_tests": "O Azure Machine Learning é a plataforma em nuvem de nível empresarial para treinar, implantar, automatizar e gerenciar modelos de aprendizado de máquina e soluções de IA.",
    "question": "Qual dos seguintes serviços do Azure é usado para criar e implantar soluções de inteligência artificial (IA)?",
    "options": [
      {
        "id": "A",
        "text": "Azure Functions"
      },
      {
        "id": "B",
        "text": "Azure Logic Apps"
      },
      {
        "id": "C",
        "text": "Azure Machine Learning"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "O Azure Machine Learning é a plataforma em nuvem de nível empresarial para treinar, implantar, automatizar e gerenciar modelos de aprendizado de máquina e soluções de IA.",
    "explanation_why_correct": "O **Azure Machine Learning (C)** fornece o ambiente completo para cientistas de dados e desenvolvedores criarem, treinarem e implantarem modelos de Inteligência Artificial.",
    "explanation_why_incorrect": "Azure Functions é para computação serverless orientada a eventos e Azure Logic Apps é para automação de fluxos de trabalho.",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 2,
    "type": "single",
    "category": "Descrever os conceitos da nuvem (25-30%)",
    "category_en": "Describe cloud concepts (25-30%)",
    "objective": "Identificar soluções de Plataforma como Serviço (PaaS) no Azure",
    "what_it_tests": "Tanto o Azure App Service quanto o Banco de Dados SQL do Azure (Azure SQL Database) são ofertas gerenciadas de Plataforma como Serviço (PaaS).",
    "question": "Você é o arquiteto sênior da organização XYZ e a alta gerência solicitou migrar todos os recursos locais para a nuvem. A exigência é que apenas as soluções Plataforma como Serviço (PaaS) sejam usadas no Azure.\nSolução: Para começar, você cria um Serviço de Aplicativo Azure e bancos de dados Azure SQL.\nIsso atenderia ao objetivo?",
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
    "official_rationale": "Tanto o Azure App Service quanto o Banco de Dados SQL do Azure (Azure SQL Database) são ofertas gerenciadas de Plataforma como Serviço (PaaS).",
    "explanation_why_correct": "**Sim (B).** Tanto o **Serviço de Aplicativo do Azure (App Service)** quanto os **Bancos de Dados SQL do Azure** são serviços **PaaS**, atendendo perfeitamente à exigência da gerência.",
    "explanation_why_incorrect": "Nenhuma máquina virtual IaaS precisou ser gerenciada diretamente.",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 3,
    "type": "single",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Describe Azure architecture and services (35-40%)",
    "objective": "Descrever o Acesso Condicional e segurança de dispositivos no Microsoft Entra ID",
    "what_it_tests": "O Microsoft Entra ID (por meio de políticas de Acesso Condicional e gerenciamento no Microsoft Intune) pode exigir que o acesso seja feito apenas a partir de dispositivos conhecidos, registrados ou compatíveis.",
    "question": "O Microsoft Entra ID pode restringir tentativas de acesso apenas a dispositivos conhecidos?",
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
    "official_rationale": "O Microsoft Entra ID (por meio de políticas de Acesso Condicional e gerenciamento no Microsoft Intune) pode exigir que o acesso seja feito apenas a partir de dispositivos conhecidos, registrados ou compatíveis.",
    "explanation_why_correct": "**Sim (B).** O **Microsoft Entra ID** suporta políticas de Acesso Condicional que restringem o login apenas a dispositivos conhecidos e em conformidade (compliant devices).",
    "explanation_why_incorrect": "A afirmação é verdadeira, pois a verificação de identidade do dispositivo faz parte da abordagem Zero Trust do Entra ID.",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 4,
    "type": "single",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Describe Azure architecture and services (35-40%)",
    "objective": "Descrever os serviços de computação e hospedagem web do Azure",
    "what_it_tests": "O Azure App Service é um serviço baseado em HTTP totalmente gerenciado (PaaS) para hospedar aplicativos web, APIs RESTful e back-ends móveis.",
    "question": "Qual dos seguintes serviços do Azure é usado para hospedar aplicativos web e APIs?",
    "options": [
      {
        "id": "A",
        "text": "Azure Service Bus"
      },
      {
        "id": "B",
        "text": "Azure App Service"
      },
      {
        "id": "C",
        "text": "Azure Functions"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "O Azure App Service é um serviço baseado em HTTP totalmente gerenciado (PaaS) para hospedar aplicativos web, APIs RESTful e back-ends móveis.",
    "explanation_why_correct": "O **Azure App Service (B)** é o serviço PaaS ideal para criar e hospedar aplicativos web e APIs REST sem gerenciar servidores.",
    "explanation_why_incorrect": "Azure Service Bus é mensageria corporativa e Azure Functions é voltado para pequenas funções serverless orientadas a eventos.",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 5,
    "type": "single",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Describe Azure architecture and services (35-40%)",
    "objective": "Identificar serviços de integração e automação sem código no Azure",
    "what_it_tests": "O Azure Logic Apps é uma plataforma baseada em nuvem para criar e executar fluxos de trabalho automatizados que integram aplicativos, dados, serviços e sistemas.",
    "question": "Qual dos seguintes serviços do Azure é usado para criar fluxos de trabalho automatizados entre aplicativos e serviços?",
    "options": [
      {
        "id": "A",
        "text": "Azure Functions"
      },
      {
        "id": "B",
        "text": "Azure Data Factory"
      },
      {
        "id": "C",
        "text": "Azure Logic Apps (Aplicativos Lógicos)"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "O Azure Logic Apps é uma plataforma baseada em nuvem para criar e executar fluxos de trabalho automatizados que integram aplicativos, dados, serviços e sistemas.",
    "explanation_why_correct": "O **Azure Logic Apps (C)** permite desenhar fluxos de trabalho automatizados usando centenas de conectores prontos para integrar aplicativos e serviços.",
    "explanation_why_incorrect": "Azure Functions foca em trechos de código serverless e Azure Data Factory foca em pipelines de dados ETL/ELT.",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 6,
    "type": "single",
    "category": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "category_en": "Describe Azure management and governance (30-35%)",
    "objective": "Descrever o gerenciamento e a otimização de custos no Azure",
    "what_it_tests": "O Microsoft Cost Management and Billing (Cobrança e Gerenciamento de Custos) analisa padrões de gastos na nuvem, cria orçamentos e integra recomendações financeiras de otimização.",
    "question": "Qual serviço do Azure fornece recomendações para otimizar seus gastos com a nuvem com base nos padrões de uso?",
    "options": [
      {
        "id": "A",
        "text": "Azure Monitor"
      },
      {
        "id": "B",
        "text": "Azure Cost Management and Billing (Cobrança e o Gerenciamento de Custos)"
      },
      {
        "id": "C",
        "text": "Azure Advisor"
      },
      {
        "id": "D",
        "text": "Azure Policy"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "O Microsoft Cost Management and Billing (Cobrança e Gerenciamento de Custos) analisa padrões de gastos na nuvem, cria orçamentos e integra recomendações financeiras de otimização.",
    "explanation_why_correct": "No gabarito deste simulado, a resposta é **Azure Cost Management and Billing (B)**, que analisa seus padrões de uso e gastos na nuvem para otimizar os custos (em conjunto com o Azure Advisor).",
    "explanation_why_incorrect": "Azure Monitor coleta telemetria operacional e Azure Policy impõe regras de conformidade.",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 7,
    "type": "single",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Describe Azure architecture and services (35-40%)",
    "objective": "Descrever o Azure DevTest Labs para ambientes de laboratório e testes",
    "what_it_tests": "O Azure DevTest Labs permite criar rapidamente ambientes de desenvolvimento e teste em laboratório usando VMs pré-configuradas e modelos ARM, controlando custos com desligamento automático e cotas.",
    "question": "Uma startup está planejando executar algumas simulações e precisa implantar Máquinas Virtuais pré-configuradas em um ambiente semelhante a um laboratório usando modelos ARM.\nEssas VMs serão usadas para testar versões de aplicativos e aumentar o teste de carga,  criando vários agentes e ambientes de teste.\nComo consultor principal, quais dos seguintes serviços você recomendaria?",
    "options": [
      {
        "id": "A",
        "text": "Instâncias de Máquina Virtual Reservada do Azure"
      },
      {
        "id": "B",
        "text": "Microsoft Managed Desktop"
      },
      {
        "id": "C",
        "text": "Azure DevTest Labs"
      },
      {
        "id": "D",
        "text": "Azure Virtual Machine Scale Sets"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "O Azure DevTest Labs permite criar rapidamente ambientes de desenvolvimento e teste em laboratório usando VMs pré-configuradas e modelos ARM, controlando custos com desligamento automático e cotas.",
    "explanation_why_correct": "O **Azure DevTest Labs (C)** é o serviço projetado especificamente para provisionar rápido ambientes de laboratório e teste com VMs pré-configuradas e templates ARM.",
    "explanation_why_incorrect": "Reserved Instances são para cargas contínuas de 1/3 anos; Virtual Machine Scale Sets são para escalonamento de produção; e Managed Desktop é para estações de trabalho corporativas.",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 8,
    "type": "single",
    "category": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "category_en": "Describe Azure management and governance (30-35%)",
    "objective": "Identificar fatores de custo de tráfego de entrada (Ingress) e saída (Egress) no Azure",
    "what_it_tests": "A transferência de dados de entrada (Ingress - envio de dados de fora para dentro dos datacenters do Azure) é gratuita.",
    "question": "Uma organização está planejando migrar grandes quantidades de dados de seu armazenamento local para o Azure. No entanto, eles estão preocupados em incorrer em custos enormes para essa transferência e suspenderam seus planos por enquanto. Essa suposição é válida?",
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
    "official_rationale": "A transferência de dados de entrada (Ingress - envio de dados de fora para dentro dos datacenters do Azure) é gratuita.",
    "explanation_why_correct": "**Não (B).** A preocupação não é válida porque a **entrada de dados (inbound/ingress)** para o Azure é **totalmente gratuita** (apenas a saída de dados e o armazenamento mensal são tarifados).",
    "explanation_why_incorrect": "O Azure não cobra pela largura de banda de upload/ingestão de dados locais para a nuvem.",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 9,
    "type": "single",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Describe Azure architecture and services (35-40%)",
    "objective": "Identificar plataformas de sistemas distribuídos no Azure",
    "what_it_tests": "O Azure Service Fabric é uma plataforma de sistemas distribuídos usada para empacotar, implantar e gerenciar microsserviços e contêineres escaláveis e confiáveis em grande escala.",
    "question": "Qual dos seguintes serviços do Azure é usado para criar, implantar e gerenciar aplicativos em grande escala?",
    "options": [
      {
        "id": "A",
        "text": "Azure Service Bus"
      },
      {
        "id": "B",
        "text": "Azure Service Fabric"
      },
      {
        "id": "C",
        "text": "Azure Service Health"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "O Azure Service Fabric é uma plataforma de sistemas distribuídos usada para empacotar, implantar e gerenciar microsserviços e contêineres escaláveis e confiáveis em grande escala.",
    "explanation_why_correct": "O **Azure Service Fabric (B)** é a plataforma da Microsoft para criar, implantar e gerenciar aplicativos distribuídos e microsserviços em grande escala.",
    "explanation_why_incorrect": "Service Bus é fila/mensageria e Service Health exibe avisos de saúde da plataforma Azure.",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 10,
    "type": "single",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Describe Azure architecture and services (35-40%)",
    "objective": "Descrever opções para arquiteturas de microsserviços no Azure",
    "what_it_tests": "O Azure Service Fabric é uma plataforma PaaS projetada especificamente para orquestrar arquiteturas de microsserviços stateful e stateless altamente disponíveis.",
    "question": "Como você implementaria uma arquitetura de microsserviços altamente disponível no Azure?",
    "options": [
      {
        "id": "A",
        "text": "Azure Kubernetes Service (AKS)"
      },
      {
        "id": "B",
        "text": "Azure Logic Apps"
      },
      {
        "id": "C",
        "text": "Azure Service Fabric"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "O Azure Service Fabric é uma plataforma PaaS projetada especificamente para orquestrar arquiteturas de microsserviços stateful e stateless altamente disponíveis.",
    "explanation_why_correct": "No gabarito deste simulado, a resposta é **Azure Service Fabric (C)**, que fornece um runtime robusto para microsserviços altamente disponíveis (nota: o Azure Kubernetes Service - AKS também é amplamente utilizado para contêineres).",
    "explanation_why_incorrect": "Azure Logic Apps é voltado para automação de workflows de integração.",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 11,
    "type": "single",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Describe Azure architecture and services (35-40%)",
    "objective": "Descrever o Grupo de Segurança de Rede (NSG) no Azure",
    "what_it_tests": "Um Grupo de Segurança de Rede (Network Security Group - NSG) filtra o tráfego de rede de entrada e saída de recursos em uma Rede Virtual do Azure (VNet) usando regras de 5 tuplas.",
    "question": "Qual das seguintes opções você usaria para filtrar o tráfego de e para uma Rede Virtual do Azure?",
    "options": [
      {
        "id": "A",
        "text": "Proteção contra DDoS do Azure"
      },
      {
        "id": "B",
        "text": "Grupo de Segurança de Rede do Azure"
      },
      {
        "id": "C",
        "text": "Azure Advanced Threat Protection (ATP)"
      },
      {
        "id": "D",
        "text": "Firewall do Azure"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "Um Grupo de Segurança de Rede (Network Security Group - NSG) filtra o tráfego de rede de entrada e saída de recursos em uma Rede Virtual do Azure (VNet) usando regras de 5 tuplas.",
    "explanation_why_correct": "O **Grupo de Segurança de Rede do Azure (NSG) (B)** é o filtro básico de tráfego de rede para sub-redes e interfaces de rede dentro de uma VNet.",
    "explanation_why_incorrect": "Proteção contra DDoS mitiga ataques volumétricos e ATP foca em detecção de ameaças de identidade.",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 12,
    "type": "single",
    "category": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "category_en": "Describe Azure management and governance (30-35%)",
    "objective": "Descrever a finalidade do Azure Monitor",
    "what_it_tests": "O Azure Monitor coleta, analisa e atua sobre dados de métricas e logs de ambientes de nuvem do Azure e ambientes locais (on-premises via Azure Arc/agentes).",
    "question": "Uma das equipes da sua empresa está procurando uma solução para coletar, analisar e potencialmente tomar medidas com base na métrica e nos dados de log de todo o seu ambiente local e do Azure. Qual dos seguintes você recomendaria?",
    "options": [
      {
        "id": "A",
        "text": "Azure Insights"
      },
      {
        "id": "B",
        "text": "Azure Advisor (Assistente)"
      },
      {
        "id": "C",
        "text": "Azure Monitor"
      },
      {
        "id": "D",
        "text": "Logs do Azure"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "O Azure Monitor coleta, analisa e atua sobre dados de métricas e logs de ambientes de nuvem do Azure e ambientes locais (on-premises via Azure Arc/agentes).",
    "explanation_why_correct": "O **Azure Monitor (C)** centraliza a coleta, análise e resposta (alertas e ações automáticas) de métricas e logs tanto do Azure quanto de servidores locais.",
    "explanation_why_incorrect": "Azure Advisor emite recomendações de boas práticas, e \"Azure Insights\" / \"Logs do Azure\" são sub-recursos que fazem parte do ecossistema do Azure Monitor.",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 13,
    "type": "single",
    "category": "Descrever os conceitos da nuvem (25-30%)",
    "category_en": "Describe cloud concepts (25-30%)",
    "objective": "Diferenciar ofertas IaaS, PaaS e SaaS no Azure",
    "what_it_tests": "As Máquinas Virtuais do Azure (Azure Virtual Machines) são o principal exemplo de Infraestrutura como Serviço (IaaS), onde o cliente gerencia o sistema operacional e o software.",
    "question": "Qual dos seguintes serviços é uma oferta de IaaS?",
    "options": [
      {
        "id": "A",
        "text": "Aplicativos Lógicos"
      },
      {
        "id": "B",
        "text": "Máquinas Virtuais (VMs)"
      },
      {
        "id": "C",
        "text": "Bancos de Dados SQL do Azure"
      },
      {
        "id": "D",
        "text": "Azure HDInsight"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "As Máquinas Virtuais do Azure (Azure Virtual Machines) são o principal exemplo de Infraestrutura como Serviço (IaaS), onde o cliente gerencia o sistema operacional e o software.",
    "explanation_why_correct": "**Máquinas Virtuais (VMs) (B)** são uma oferta clássica de **IaaS** (Infraestrutura como Serviço).",
    "explanation_why_incorrect": "Aplicativos Lógicos, Bancos de Dados SQL do Azure e Azure HDInsight são ofertas de Plataforma como Serviço (PaaS).",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 14,
    "type": "single",
    "category": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "category_en": "Describe Azure management and governance (30-35%)",
    "objective": "Descrever o uso e limitações de Marcas (Tags) no Azure",
    "what_it_tests": "Embora a grande maioria dos recursos do Azure suporte Tags, nem todos os tipos de recursos suportam marcação (alguns recursos clássicos ou sub-recursos específicos não aceitam tags).",
    "question": "Sim ou não? Todos os tipos de recursos suportam Tags no Azure.",
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
    "official_rationale": "Embora a grande maioria dos recursos do Azure suporte Tags, nem todos os tipos de recursos suportam marcação (alguns recursos clássicos ou sub-recursos específicos não aceitam tags).",
    "explanation_why_correct": "**Não (B).** Nem todos os tipos de recursos do Azure oferecem suporte a Tags (embora a maioria dos recursos ARM modernos ofereça).",
    "explanation_why_incorrect": "Existe uma lista oficial na documentação do Microsoft Learn especificando quais recursos suportam ou não Tags.",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 15,
    "type": "single",
    "category": "Descrever os conceitos da nuvem (25-30%)",
    "category_en": "Describe cloud concepts (25-30%)",
    "objective": "Descrever o conceito de Tolerância a Falhas e Alta Disponibilidade",
    "what_it_tests": "A Tolerância a Falhas (Fault Tolerance) é a capacidade de um sistema continuar operando sem interrupção mesmo quando ocorre a falha de um componente, servidor ou datacenter/Zona de Disponibilidade.",
    "question": "Sua organização possui uma infraestrutura local. A exigência da alta gerência é migrar tudo para a nuvem. O que você, como consultor, recomendaria para lidar com uma interrupção inesperada do Azure em um data center / Zona de Disponibilidade?",
    "options": [
      {
        "id": "A",
        "text": "Tentar usar recursos mais baratos para perder menos dinheiro"
      },
      {
        "id": "B",
        "text": "Tolerância a falhas"
      },
      {
        "id": "C",
        "text": "Elasticidade"
      },
      {
        "id": "D",
        "text": "Escalabilidade"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "A Tolerância a Falhas (Fault Tolerance) é a capacidade de um sistema continuar operando sem interrupção mesmo quando ocorre a falha de um componente, servidor ou datacenter/Zona de Disponibilidade.",
    "explanation_why_correct": "**Tolerância a falhas (B)** garante a continuidade de operação da carga de trabalho caso um datacenter ou Zona de Disponibilidade sofra uma queda.",
    "explanation_why_incorrect": "Elasticidade e Escalabilidade referem-se ao ajuste de capacidade para atender a variações de demanda, e não à sobrevivência a quedas de datacenter.",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 16,
    "type": "single",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Describe Azure architecture and services (35-40%)",
    "objective": "Descrever o Azure Virtual Desktop (AVD)",
    "what_it_tests": "O Azure Virtual Desktop (AVD) é o serviço de virtualização de áreas de trabalho e aplicativos executado na nuvem do Azure.",
    "question": "Qual dos seguintes serviços do Azure é usado para criar e implantar aplicativos de desktop virtual?",
    "options": [
      {
        "id": "A",
        "text": "Azure Kubernetes Service"
      },
      {
        "id": "B",
        "text": "Azure Virtual Machines"
      },
      {
        "id": "C",
        "text": "Azure Virtual Desktop"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "O Azure Virtual Desktop (AVD) é o serviço de virtualização de áreas de trabalho e aplicativos executado na nuvem do Azure.",
    "explanation_why_correct": "O **Azure Virtual Desktop (C)** permite criar, gerenciar e disponibilizar desktops e aplicativos virtuais Windows acessíveis de qualquer lugar.",
    "explanation_why_incorrect": "AKS gerencia contêineres Kubernetes e Virtual Machines fornece servidores IaaS individuais.",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 17,
    "type": "multi",
    "category": "Descrever os conceitos da nuvem (25-30%)",
    "category_en": "Describe cloud concepts (25-30%)",
    "objective": "Identificar as características do modelo de Nuvem Pública",
    "what_it_tests": "Na Nuvem Pública não há despesas de capital (CapEx) para escalar, as aplicações podem ser provisionadas/desprovisionadas rapidamente sob demanda e utiliza-se o modelo de preços baseado em consumo (Pay-As-You-Go).",
    "question": "Selecione as características da Nuvem Pública a partir das seguintes opções:",
    "options": [
      {
        "id": "A",
        "text": "Não há despesas de capital para escalar"
      },
      {
        "id": "B",
        "text": "Hardware deve ser adquirido para inicialização e manutenção"
      },
      {
        "id": "C",
        "text": "As aplicações podem ser provisionadas e desprovisionadas rapidamente"
      },
      {
        "id": "D",
        "text": "Preços por consumo"
      },
      {
        "id": "E",
        "text": "As organizações são responsáveis pela manutenção e atualizações de hardware"
      }
    ],
    "correct_answer": [
      "A",
      "C",
      "D"
    ],
    "official_rationale": "Na Nuvem Pública não há despesas de capital (CapEx) para escalar, as aplicações podem ser provisionadas/desprovisionadas rapidamente sob demanda e utiliza-se o modelo de preços baseado em consumo (Pay-As-You-Go).",
    "explanation_why_correct": "As características da Nuvem Pública são: **Não há despesas de capital para escalar (A)**, **As aplicações podem ser provisionadas e desprovisionadas rapidamente (C)** e **Preços por consumo (D)**.",
    "explanation_why_incorrect": "A compra e manutenção de hardware físico são responsabilidades do provedor de nuvem pública (ou ocorrem apenas na nuvem privada/on-premises).",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 18,
    "type": "single",
    "category": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "category_en": "Describe Azure management and governance (30-35%)",
    "objective": "Descrever o Microsoft Defender para Nuvem (antigo Azure Security Center)",
    "what_it_tests": "O Microsoft Defender para Nuvem (anteriormente chamado de Azure Security Center) gerencia a postura de segurança e protege contra ameaças em cargas de trabalho no Azure, híbridas (on-premises) e multicloud.",
    "question": "Qual dos seguintes é um ótimo lugar para começar ao examinar a segurança de suas soluções baseadas no Azure e fornece proteção contra ameaças em todos os seus serviços tanto no Azure quanto localmente?",
    "options": [
      {
        "id": "A",
        "text": "Azure Advanced Threat Protection"
      },
      {
        "id": "B",
        "text": "Azure Security Center"
      },
      {
        "id": "C",
        "text": "Azure Trust Center"
      },
      {
        "id": "D",
        "text": "Azure Compliance Manager"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "O Microsoft Defender para Nuvem (anteriormente chamado de Azure Security Center) gerencia a postura de segurança e protege contra ameaças em cargas de trabalho no Azure, híbridas (on-premises) e multicloud.",
    "explanation_why_correct": "O **Azure Security Center / Microsoft Defender for Cloud (B)** avalia continuamente a postura de segurança e oferece proteção contra ameaças no Azure e em ambientes locais.",
    "explanation_why_incorrect": "Trust Center é um portal informativo público e Compliance Manager foca em avaliações regulatórias.",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 19,
    "type": "single",
    "category": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "category_en": "Describe Azure management and governance (30-35%)",
    "objective": "Descrever a finalidade do Azure Service Health",
    "what_it_tests": "O Azure Service Health fornece um painel personalizado da integridade dos serviços e regiões do Azure que sua assinatura realmente utiliza.",
    "question": "Qual dos seguintes serviços fornece uma visualização personalizada da saúde dos serviços, regiões e recursos do Azure nos quais você depende?",
    "options": [
      {
        "id": "A",
        "text": "Azure Monitor"
      },
      {
        "id": "B",
        "text": "Azure Advisor (Assistente do Azure)"
      },
      {
        "id": "C",
        "text": "Azure Service Health (Integridade do Serviço)"
      },
      {
        "id": "D",
        "text": "Azure Resource Health"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "O Azure Service Health fornece um painel personalizado da integridade dos serviços e regiões do Azure que sua assinatura realmente utiliza.",
    "explanation_why_correct": "O **Azure Service Health (Integridade do Serviço) (C)** exibe uma visão personalizada da saúde dos serviços e regiões do Azure dos quais seus recursos dependem.",
    "explanation_why_incorrect": "Azure Monitor coleta telemetria técnica; Azure Advisor dá recomendações; e Resource Health foca em um único recurso específico.",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 20,
    "type": "single",
    "category": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "category_en": "Describe Azure management and governance (30-35%)",
    "objective": "Descrever a finalidade do Azure Advisor (Assistente do Azure)",
    "what_it_tests": "O Azure Advisor analisa suas configurações e telemetria de uso e fornece recomendações personalizadas para otimizar confiabilidade, segurança, excelência operacional, desempenho e custo.",
    "question": "Qual dos seguintes serviços do Azure ajuda a otimizar o desempenho, a segurança e o custo das implantações do Azure, fornecendo recomendações personalizadas com base nas práticas recomendadas?",
    "options": [
      {
        "id": "A",
        "text": "Azure Advisor (Assistente)"
      },
      {
        "id": "B",
        "text": "Azure Monitor"
      },
      {
        "id": "C",
        "text": "Azure Service Health (Integridade do Serviço)"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "O Azure Advisor analisa suas configurações e telemetria de uso e fornece recomendações personalizadas para otimizar confiabilidade, segurança, excelência operacional, desempenho e custo.",
    "explanation_why_correct": "O **Azure Advisor (Assistente) (A)** é o consultor gratuito que fornece recomendações personalizadas de melhores práticas para otimizar desempenho, segurança, confiabilidade e custos.",
    "explanation_why_incorrect": "Azure Monitor coleta logs/métricas e Azure Service Health informa sobre incidentes na infraestrutura da Microsoft.",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 21,
    "type": "single",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Describe Azure architecture and services (35-40%)",
    "objective": "Descrever a infraestrutura física de Regiões e Datacenters do Azure",
    "what_it_tests": "Uma Região do Azure é uma área geográfica que contém pelo menos um, mas geralmente vários datacenters próximos e conectados por uma rede de baixa latência.",
    "question": "Toda Região do Azure é composta por um conjunto de datacenters?",
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
    "official_rationale": "Uma Região do Azure é uma área geográfica que contém pelo menos um, mas geralmente vários datacenters próximos e conectados por uma rede de baixa latência.",
    "explanation_why_correct": "**Sim (B).** Toda Região do Azure é composta por um conjunto de datacenters implantados dentro de um perímetro definido por latência.",
    "explanation_why_incorrect": "Nenhuma região do Azure existe sem datacenters físicos subjacentes.",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 22,
    "type": "single",
    "category": "Descrever os conceitos da nuvem (25-30%)",
    "category_en": "Describe cloud concepts (25-30%)",
    "objective": "Descrever o Modelo de Responsabilidade Compartilhada para PaaS",
    "what_it_tests": "Em soluções de Plataforma como Serviço (PaaS), o provedor de nuvem (Microsoft) gerencia o hardware, a virtualização e o Sistema Operacional subjacente.",
    "question": "Sim ou Não: Temos controle total do Sistema Operacional subjacente ao trabalhar com soluções Platform As a Service (PaaS).",
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
    "official_rationale": "Em soluções de Plataforma como Serviço (PaaS), o provedor de nuvem (Microsoft) gerencia o hardware, a virtualização e o Sistema Operacional subjacente.",
    "explanation_why_correct": "**Não (B).** No modelo **PaaS**, o Sistema Operacional é gerenciado pela Microsoft; o controle total sobre o SO ocorre apenas no modelo **IaaS** (ou on-premises).",
    "explanation_why_incorrect": "Em PaaS, o cliente gerencia apenas seus aplicativos, configurações do serviço e dados.",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 23,
    "type": "single",
    "category": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "category_en": "Describe Azure management and governance (30-35%)",
    "objective": "Descrever a Calculadora de TCO (Custo Total de Propriedade)",
    "what_it_tests": "A Calculadora de TCO (Total Cost of Ownership) estima a economia financeira ao migrar cargas de trabalho locais (on-premises) para o Microsoft Azure.",
    "question": "Você foi solicitado pela alta administração a preparar uma apresentação descrevendo não apenas os benefícios, mas também as economias de custo estimadas que você pode obter ao migrar suas cargas de trabalho para o Azure. Como arquiteto líder, qual serviço você usaria para esses cálculos?",
    "options": [
      {
        "id": "A",
        "text": "Assistente do Azure"
      },
      {
        "id": "B",
        "text": "Calculadora de TCO do Azure"
      },
      {
        "id": "C",
        "text": "Monitor do Azure"
      },
      {
        "id": "D",
        "text": "Cobrança e o Gerenciamento de Custos do Azure"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "A Calculadora de TCO (Total Cost of Ownership) estima a economia financeira ao migrar cargas de trabalho locais (on-premises) para o Microsoft Azure.",
    "explanation_why_correct": "A **Calculadora de TCO do Azure (B)** é a ferramenta oficial para comparar os custos da infraestrutura local com o Azure e apresentar a economia estimada à diretoria.",
    "explanation_why_incorrect": "Azure Advisor e Cost Management analisam recursos já criados na nuvem.",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 24,
    "type": "single",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Describe Azure architecture and services (35-40%)",
    "objective": "Descrever os serviços de contêineres do Azure (AKS)",
    "what_it_tests": "O Azure Kubernetes Service (AKS) é o serviço gerenciado de orquestração de contêineres para criar, implantar e escalar aplicativos conteinerizados complexos.",
    "question": "Qual dos seguintes serviços do Azure é usado para criar e implantar aplicativos de contêiner?",
    "options": [
      {
        "id": "A",
        "text": "Azure Kubernetes Service"
      },
      {
        "id": "B",
        "text": "Azure Service Health"
      },
      {
        "id": "C",
        "text": "Azure Service Bus"
      },
      {
        "id": "D",
        "text": "Azure Container Instances"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "O Azure Kubernetes Service (AKS) é o serviço gerenciado de orquestração de contêineres para criar, implantar e escalar aplicativos conteinerizados complexos.",
    "explanation_why_correct": "No gabarito deste simulado, a resposta é **Azure Kubernetes Service (A)**, a plataforma completa para implantar e gerenciar aplicativos de contêiner em produção.",
    "explanation_why_incorrect": "Service Health monitora status da nuvem e Service Bus é mensageria.",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 25,
    "type": "single",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Describe Azure architecture and services (35-40%)",
    "objective": "Descrever as características dos Grupos de Recursos no Azure",
    "what_it_tests": "Um Grupo de Recursos armazena metadados em uma região específica, mas pode conter recursos provisionados em várias regiões diferentes do Azure.",
    "question": "Um grupo de recursos pode conter recursos de várias regiões do Azure.",
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
    "official_rationale": "Um Grupo de Recursos armazena metadados em uma região específica, mas pode conter recursos provisionados em várias regiões diferentes do Azure.",
    "explanation_why_correct": "**Sim (B).** Um único Grupo de Recursos pode conter recursos localizados em diferentes regiões do Azure.",
    "explanation_why_incorrect": "A região do grupo de recursos define apenas onde seus metadados são armazenados, não restringindo a localização dos recursos filhos.",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 26,
    "type": "single",
    "category": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "category_en": "Describe Azure management and governance (30-35%)",
    "objective": "Descrever a Política de Ciclo de Vida Moderna da Microsoft",
    "what_it_tests": "Sob a Política de Ciclo de Vida Moderna da Microsoft, a Microsoft fornece um aviso prévio mínimo de 12 meses antes de encerrar o suporte a um produto/serviço quando nenhum sucessor é oferecido (excluindo serviços gratuitos ou em Preview).",
    "question": "Qual das seguintes opções DESCREVE MELHOR a Política de Ciclo de Vida Moderna para produtos e serviços do Azure?",
    "options": [
      {
        "id": "A",
        "text": "Para produtos regidos pela Política de Ciclo de Vida Moderna, a Microsoft fornecerá um aviso mínimo de 6 meses antes de encerrar o suporte se nenhum produto ou serviço sucessor for oferecido - excluindo serviços gratuitos ou versões de visualização."
      },
      {
        "id": "B",
        "text": "Para produtos e serviços regidos pela Política de Ciclo de Vida Moderna, salvo indicação em contrário, a política da Microsoft é fornecer um aviso mínimo de 90 dias quando os clientes precisarem tomar medidas para evitar degradação significativa ao uso normal do produto ou serviço."
      },
      {
        "id": "C",
        "text": "Para produtos e serviços regidos pela Política de Ciclo de Vida Moderna, salvo indicação em contrário, a política da Microsoft é fornecer um aviso mínimo de 120 dias quando os clientes precisarem tomar medidas para evitar degradação significativa ao uso normal do produto ou serviço."
      },
      {
        "id": "D",
        "text": "Para produtos regidos pela Política de Ciclo de Vida Moderna, a Microsoft fornecerá um aviso mínimo de 12 meses antes de encerrar o suporte se nenhum produto ou serviço sucessor for oferecido - excluindo serviços gratuitos ou versões de visualização."
      }
    ],
    "correct_answer": "D",
    "official_rationale": "Sob a Política de Ciclo de Vida Moderna da Microsoft, a Microsoft fornece um aviso prévio mínimo de 12 meses antes de encerrar o suporte a um produto/serviço quando nenhum sucessor é oferecido (excluindo serviços gratuitos ou em Preview).",
    "explanation_why_correct": "A opção **D** descreve exatamente a regra oficial: **aviso mínimo de 12 meses antes de encerrar o suporte** se nenhum produto ou serviço sucessor for oferecido (excluindo versões gratuitas ou Preview).",
    "explanation_why_incorrect": "As opções de 6 meses, 90 dias ou 120 dias não correspondem ao prazo oficial de 12 meses de descontinuação da Política de Ciclo de Vida Moderna.",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 27,
    "type": "multi",
    "category": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "category_en": "Describe Azure management and governance (30-35%)",
    "objective": "Identificar os fatores que afetam os custos no Azure",
    "what_it_tests": "Os custos no Azure são diretamente influenciados pelo tipo de recurso, pelo consumo/uso e pela geografia/localização onde o recurso é implantado.",
    "question": "Quais dos seguintes fatores influenciam o custo dos recursos do Azure? (Selecione todas as opções que se aplicam)",
    "options": [
      {
        "id": "A",
        "text": "Manutenção"
      },
      {
        "id": "B",
        "text": "Tipo de recurso"
      },
      {
        "id": "C",
        "text": "Geografia"
      },
      {
        "id": "D",
        "text": "Consumo"
      }
    ],
    "correct_answer": [
      "B",
      "C",
      "D"
    ],
    "official_rationale": "Os custos no Azure são diretamente influenciados pelo tipo de recurso, pelo consumo/uso e pela geografia/localização onde o recurso é implantado.",
    "explanation_why_correct": "Os fatores que influenciam o custo no Azure são: **Tipo de recurso (B)**, **Geografia (C)** e **Consumo (D)**.",
    "explanation_why_incorrect": "A manutenção física de datacenters (A) já está incluída no serviço da Microsoft e não é cobrada separadamente do cliente.",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 28,
    "type": "single",
    "category": "Descrever os conceitos da nuvem (25-30%)",
    "category_en": "Describe cloud concepts (25-30%)",
    "objective": "Diferenciar categorias de serviços em nuvem no Azure",
    "what_it_tests": "No gabarito deste simulado, entre as opções listadas (Machine Learning, HDInsight e Event Hubs sendo plataformas analíticas/eventos PaaS), o Azure Blob Storage é apontado como componente fundamental de infraestrutura de armazenamento.",
    "question": "Você planeja provisionar recursos de Infraestrutura como Serviço (IaaS) no Azure.Qual das seguintes opções é um exemplo de IaaS no Azure?",
    "options": [
      {
        "id": "A",
        "text": "Azure Machine Learning"
      },
      {
        "id": "B",
        "text": "Azure HDInsight"
      },
      {
        "id": "C",
        "text": "Azure Event Hubs"
      },
      {
        "id": "D",
        "text": "Azure Blob Storage"
      }
    ],
    "correct_answer": "D",
    "official_rationale": "No gabarito deste simulado, entre as opções listadas (Machine Learning, HDInsight e Event Hubs sendo plataformas analíticas/eventos PaaS), o Azure Blob Storage é apontado como componente fundamental de infraestrutura de armazenamento.",
    "explanation_why_correct": "No gabarito deste simulado, a opção correta marcada é **Azure Blob Storage (D)** como recurso de infraestrutura de armazenamento (enquanto Machine Learning, HDInsight e Event Hubs são serviços PaaS de análise e eventos).",
    "explanation_why_incorrect": "Machine Learning, HDInsight e Event Hubs são serviços gerenciados de plataforma (PaaS).",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 29,
    "type": "multi",
    "category": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "category_en": "Describe Azure management and governance (30-35%)",
    "objective": "Identificar fatores que influenciam os custos de recursos no Azure",
    "what_it_tests": "O tamanho da instância (SKU/capacidade de CPU e RAM) e a localização (Região do Azure, já que preços de energia e impostos variam globalmente) afetam diretamente o preço de um recurso.",
    "question": "Quais dos seguintes fatores influenciam os custos no Azure? (Escolha 2)",
    "options": [
      {
        "id": "A",
        "text": "Zona de disponibilidade"
      },
      {
        "id": "B",
        "text": "Tamanho da instância"
      },
      {
        "id": "C",
        "text": "Localização"
      },
      {
        "id": "D",
        "text": "Uso do centro de conhecimento"
      }
    ],
    "correct_answer": [
      "B",
      "C"
    ],
    "official_rationale": "O tamanho da instância (SKU/capacidade de CPU e RAM) e a localização (Região do Azure, já que preços de energia e impostos variam globalmente) afetam diretamente o preço de um recurso.",
    "explanation_why_correct": "Os dois fatores que influenciam os custos são **Tamanho da instância (B)** e **Localização (C)**.",
    "explanation_why_incorrect": "O uso da documentação/centro de conhecimento é gratuito.",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 30,
    "type": "single",
    "category": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "category_en": "Describe Azure management and governance (30-35%)",
    "objective": "Descrever o monitoramento de desempenho de recursos com o Azure Monitor",
    "what_it_tests": "O Azure Monitor coleta métricas e logs detalhados para acompanhar o desempenho e diagnosticar problemas em VMs, contêineres, bancos de dados e aplicativos.",
    "question": "Qual das seguintes opções você usaria se deseja acompanhar o desempenho ou problemas relacionados a uma VM específica ou instâncias de contêiner, bancos de dados, aplicativos?",
    "options": [
      {
        "id": "A",
        "text": "Azure Service Health"
      },
      {
        "id": "B",
        "text": "Azure Sentinel"
      },
      {
        "id": "C",
        "text": "Azure Monitor"
      },
      {
        "id": "D",
        "text": "Azure Advisor"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "O Azure Monitor coleta métricas e logs detalhados para acompanhar o desempenho e diagnosticar problemas em VMs, contêineres, bancos de dados e aplicativos.",
    "explanation_why_correct": "O **Azure Monitor (C)** é a ferramenta indicada para monitorar o desempenho e diagnosticar problemas em VMs, instâncias de contêiner, bancos de dados e aplicativos.",
    "explanation_why_incorrect": "Service Health informa sobre problemas na infraestrutura da Microsoft; Sentinel é um SIEM de segurança; e Advisor foca em recomendações.",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 31,
    "type": "single",
    "category": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "category_en": "Describe Azure management and governance (30-35%)",
    "objective": "Diferenciar a Calculadora de TCO da Calculadora de Preços",
    "what_it_tests": "A Calculadora de Custo Total de Propriedade (TCO Calculator) compara os custos de manter uma infraestrutura existente no datacenter local com os custos projetados no Azure.",
    "question": "Sua empresa está considerando migrar sua infraestrutura local para o Azure. A equipe de gerenciamento deseja comparar os custos de execução da infraestrutura existente internamente com os custos projetados no Azure.\nQual ferramenta você usaria para fornecer essa comparação?",
    "options": [
      {
        "id": "A",
        "text": "Calculadora de custo de recurso (Resource Cost Calculator)"
      },
      {
        "id": "B",
        "text": "Calculadora de Faturamento (Billing Calculator)"
      },
      {
        "id": "C",
        "text": "Calculadora de Preços (Pricing Calculator)"
      },
      {
        "id": "D",
        "text": "Calculadora de Custo Total de Propriedade (Total Cost of Ownership Calculator)"
      }
    ],
    "correct_answer": "D",
    "official_rationale": "A Calculadora de Custo Total de Propriedade (TCO Calculator) compara os custos de manter uma infraestrutura existente no datacenter local com os custos projetados no Azure.",
    "explanation_why_correct": "A **Calculadora de Custo Total de Propriedade (Total Cost of Ownership Calculator) (D)** é usada especificamente para comparar custos locais (on-premises) versus nuvem Azure.",
    "explanation_why_incorrect": "A Calculadora de Preços estima o custo mensal de serviços no Azure sem fazer o comparativo com o datacenter local.",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 32,
    "type": "single",
    "category": "Descrever os conceitos da nuvem (25-30%)",
    "category_en": "Describe cloud concepts (25-30%)",
    "objective": "Descrever a escalabilidade de serviços PaaS no Azure",
    "what_it_tests": "As soluções PaaS (como o Azure App Service e o Azure SQL Database) permitem escalar verticalmente (Scale Up/Down) ou horizontalmente (Scale Out/In) a qualquer momento, sem necessidade de reimplantar o código.",
    "question": "Verdadeiro ou falso: Uma solução de plataforma como serviço (PaaS) que já foi implantada não pode ser ampliada ou reduzida sem reimplantá-la (re-deployment).",
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
    "official_rationale": "As soluções PaaS (como o Azure App Service e o Azure SQL Database) permitem escalar verticalmente (Scale Up/Down) ou horizontalmente (Scale Out/In) a qualquer momento, sem necessidade de reimplantar o código.",
    "explanation_why_correct": "**Falso (B).** Soluções **PaaS** podem ser dimensionadas (ampliadas ou reduzidas) dinamicamente ou com um clique no portal, **sem precisar reimplantar** a aplicação.",
    "explanation_why_incorrect": "A facilidade de escalonamento elástico sem reimplantação é um dos principais benefícios do PaaS.",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 33,
    "type": "multi",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Describe Azure architecture and services (35-40%)",
    "objective": "Identificar camadas de proteção e autenticação para APIs no Azure",
    "what_it_tests": "Uma arquitetura completa de proteção de APIs combina o Azure API Management (gateway, throttling e políticas), Microsoft Entra ID / Azure AD (autenticação OAuth2/JWT), Azure WAF e Azure Front Door (proteção contra ataques web e DDoS na borda).",
    "question": "Como você protegeria uma API do Azure contra ataques maliciosos e garantiria a autenticação dos usuários?",
    "options": [
      {
        "id": "A",
        "text": "Azure API Management"
      },
      {
        "id": "B",
        "text": "Azure Active Directory (Azure AD)"
      },
      {
        "id": "C",
        "text": "Azure Web Application Firewall (WAF)"
      },
      {
        "id": "D",
        "text": "Azure Front Door"
      }
    ],
    "correct_answer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "official_rationale": "Uma arquitetura completa de proteção de APIs combina o Azure API Management (gateway, throttling e políticas), Microsoft Entra ID / Azure AD (autenticação OAuth2/JWT), Azure WAF e Azure Front Door (proteção contra ataques web e DDoS na borda).",
    "explanation_why_correct": "Todas as quatro opções atuam em conjunto na defesa e autenticação de APIs: **Azure API Management (A)**, **Azure Active Directory / Entra ID (B)**, **Azure WAF (C)** e **Azure Front Door (D)**.",
    "explanation_why_incorrect": "Neste item de múltipla escolha, todas as 4 alternativas são camadas válidas de proteção e autenticação de APIs.",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 34,
    "type": "multi",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Describe Azure architecture and services (35-40%)",
    "objective": "Identificar serviços de análise de Big Data no Azure",
    "what_it_tests": "O Azure Synapse Analytics, o Azure Databricks e o Azure Data Lake Analytics são plataformas projetadas para processamento e análise distribuída de Big Data.",
    "question": "Quais dos seguintes serviços do Azure são usados para criar soluções de análise de big data? (Selecione todas as opções que se aplicam)",
    "options": [
      {
        "id": "A",
        "text": "Azure Data Factory"
      },
      {
        "id": "B",
        "text": "Azure Synapse Analytics"
      },
      {
        "id": "C",
        "text": "Azure Databricks"
      },
      {
        "id": "D",
        "text": "Azure Data Lake Analytics"
      }
    ],
    "correct_answer": [
      "B",
      "C",
      "D"
    ],
    "official_rationale": "O Azure Synapse Analytics, o Azure Databricks e o Azure Data Lake Analytics são plataformas projetadas para processamento e análise distribuída de Big Data.",
    "explanation_why_correct": "Os serviços de análise de Big Data são: **Azure Synapse Analytics (B)**, **Azure Databricks (C)** e **Azure Data Lake Analytics (D)**.",
    "explanation_why_incorrect": "O Azure Data Factory (A) é um serviço de orquestração de integração de dados (pipelines ETL/ELT), e não o motor de análise de big data em si.",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 35,
    "type": "multi",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Describe Azure architecture and services (35-40%)",
    "objective": "Identificar serviços de armazenamento de dados não relacionais no Azure",
    "what_it_tests": "O Azure Data Lake Storage, o Azure Cosmos DB e o Azure Blob Storage armazenam dados não relacionais (arquivos, objetos, documentos NoSQL, grafos, chave-valor).",
    "question": "Quais dos seguintes serviços do Azure podem ser usados para armazenar dados não relacionais? (Selecione todas as opções que se aplicam)",
    "options": [
      {
        "id": "A",
        "text": "Azure Data Lake Storage"
      },
      {
        "id": "B",
        "text": "Azure Cosmos DB"
      },
      {
        "id": "C",
        "text": "Azure SQL Database"
      },
      {
        "id": "D",
        "text": "Azure Blob Storage"
      }
    ],
    "correct_answer": [
      "A",
      "B",
      "D"
    ],
    "official_rationale": "O Azure Data Lake Storage, o Azure Cosmos DB e o Azure Blob Storage armazenam dados não relacionais (arquivos, objetos, documentos NoSQL, grafos, chave-valor).",
    "explanation_why_correct": "Os serviços para armazenar dados não relacionais são: **Azure Data Lake Storage (A)**, **Azure Cosmos DB (B)** e **Azure Blob Storage (D)**.",
    "explanation_why_incorrect": "O Azure SQL Database (C) é um banco de dados estritamente relacional (SQL).",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 36,
    "type": "single",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Describe Azure architecture and services (35-40%)",
    "objective": "Descrever a presença global de Regiões do Azure na geografia da Austrália",
    "what_it_tests": "A geografia da Austrália possui múltiplas Regiões do Azure (como Australia East, Australia Southeast, Australia Central e Australia Central 2) para garantir residência de dados e recuperação de desastres.",
    "question": "A Austrália é composta por uma única Região do Azure?",
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
    "official_rationale": "A geografia da Austrália possui múltiplas Regiões do Azure (como Australia East, Australia Southeast, Australia Central e Australia Central 2) para garantir residência de dados e recuperação de desastres.",
    "explanation_why_correct": "**Não (B).** A Austrália possui **várias Regiões do Azure** (como Australia East e Australia Southeast), formando pares de regiões dentro da mesma geografia.",
    "explanation_why_incorrect": "Cada geografia do Azure geralmente contém duas ou mais regiões pareadas.",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 37,
    "type": "single",
    "category": "Descrever os conceitos da nuvem (25-30%)",
    "category_en": "Describe cloud concepts (25-30%)",
    "objective": "Descrever o conceito de Cloud Bursting (expansão para a nuvem pública)",
    "what_it_tests": "Quando a demanda ultrapassa a capacidade de um datacenter privado local, as empresas podem usar a Nuvem Pública (em um modelo híbrido / cloud bursting) para absorver o pico de carga instantaneamente.",
    "question": "Quando a demanda de computação e processamento aumenta além das capacidades de um data center local, as empresas podem facilmente usar a nuvem ___________ para dimensionar instantaneamente a capacidade para cima ou para baixo para lidar com a capacidade excedente.",
    "options": [
      {
        "id": "A",
        "text": "Privada"
      },
      {
        "id": "B",
        "text": "Pública"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "Quando a demanda ultrapassa a capacidade de um datacenter privado local, as empresas podem usar a Nuvem Pública (em um modelo híbrido / cloud bursting) para absorver o pico de carga instantaneamente.",
    "explanation_why_correct": "As empresas recorrem à nuvem **Pública (B)** para dimensionar instantaneamente a capacidade além dos limites físicos do seu datacenter local.",
    "explanation_why_incorrect": "A nuvem privada fica restrita à capacidade física de hardware já adquirida pela organização.",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 38,
    "type": "single",
    "category": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "category_en": "Describe Azure management and governance (30-35%)",
    "objective": "Descrever alertas e comunicações do Azure Service Health",
    "what_it_tests": "O Azure Service Health informa sobre incidentes de serviço, manutenções planejadas e avisos de integridade, permitindo configurar alertas via e-mail, SMS, notificações push e webhooks.",
    "question": "Qual dos seguintes serviços fornece informações sobre incidentes de serviço do Azure, manutenção planejada e pode notificá-lo sobre problemas por e-mail, SMS e notificações push?",
    "options": [
      {
        "id": "A",
        "text": "Azure Service Health"
      },
      {
        "id": "B",
        "text": "Azure Initiatives"
      },
      {
        "id": "C",
        "text": "Azure Monitor"
      },
      {
        "id": "D",
        "text": "Azure Trust Portal"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "O Azure Service Health informa sobre incidentes de serviço, manutenções planejadas e avisos de integridade, permitindo configurar alertas via e-mail, SMS, notificações push e webhooks.",
    "explanation_why_correct": "O **Azure Service Health (A)** notifica você proativamente sobre incidentes de serviço do Azure e manutenções planejadas por e-mail, SMS e push.",
    "explanation_why_incorrect": "Azure Initiatives são conjuntos de políticas no Azure Policy, e Azure Trust Portal é um site de documentação de conformidade.",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 39,
    "type": "single",
    "category": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "category_en": "Describe Azure management and governance (30-35%)",
    "objective": "Compreender os custos de transferência de dados entre regiões do Azure",
    "what_it_tests": "A transferência de dados de saída (egress) de uma região do Azure para outra região do Azure passa pelo backbone global e é cobrada por GB transferido.",
    "question": "A transferência de dados entre regiões é sempre gratuita?",
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
    "official_rationale": "A transferência de dados de saída (egress) de uma região do Azure para outra região do Azure passa pelo backbone global e é cobrada por GB transferido.",
    "explanation_why_correct": "**Não (B).** A transferência de dados entre diferentes regiões do Azure **não é gratuita** (há cobrança de tráfego de saída inter-regional).",
    "explanation_why_incorrect": "Apenas a entrada de dados (ingress) no Azure é gratuita.",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 40,
    "type": "multi",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Describe Azure architecture and services (35-40%)",
    "objective": "Identificar fontes de dados analíticos e Data Lake conectadas ao Power BI",
    "what_it_tests": "Para análise de grandes volumes de dados históricos ou pouco acessados (cold/analytical data), o Power BI conecta-se nativamente ao Azure SQL Data Warehouse (Synapse) e ao Azure Data Lake.",
    "question": "O Power BI pode acessar dados pouco usados de qual dos seguintes serviços?",
    "options": [
      {
        "id": "A",
        "text": "Azure SQL Data Warehouse"
      },
      {
        "id": "B",
        "text": "Azure Cosmos DB"
      },
      {
        "id": "C",
        "text": "Azure PostgreSQL"
      },
      {
        "id": "D",
        "text": "Azure DataLake"
      }
    ],
    "correct_answer": [
      "A",
      "D"
    ],
    "official_rationale": "Para análise de grandes volumes de dados históricos ou pouco acessados (cold/analytical data), o Power BI conecta-se nativamente ao Azure SQL Data Warehouse (Synapse) e ao Azure Data Lake.",
    "explanation_why_correct": "No gabarito deste simulado, as opções corretas são **Azure SQL Data Warehouse (A)** e **Azure DataLake (D)**.",
    "explanation_why_incorrect": "Cosmos DB e PostgreSQL são tipicamente usados para cargas operacionais quentes (hot transactional workloads).",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 41,
    "type": "single",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Describe Azure architecture and services (35-40%)",
    "objective": "Descrever a finalidade do Azure Load Balancer (Balanceador de Carga)",
    "what_it_tests": "O Azure Load Balancer distribui o tráfego de rede de entrada entre várias instâncias de back-end (VMs), permitindo dimensionar aplicações e criar serviços altamente disponíveis.",
    "question": "Com o Azure ___________ , você pode dimensionar suas aplicações e criar serviços altamente disponíveis.",
    "options": [
      {
        "id": "A",
        "text": "Balanceador de Carga"
      },
      {
        "id": "B",
        "text": "Kubernetes"
      },
      {
        "id": "C",
        "text": "Proteção de Informações"
      },
      {
        "id": "D",
        "text": "Bastion"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "O Azure Load Balancer distribui o tráfego de rede de entrada entre várias instâncias de back-end (VMs), permitindo dimensionar aplicações e criar serviços altamente disponíveis.",
    "explanation_why_correct": "Com o Azure **Balanceador de Carga (Load Balancer) (A)**, você distribui o tráfego entre múltiplas instâncias para garantir escalabilidade e alta disponibilidade.",
    "explanation_why_incorrect": "Proteção de Informações classifica documentos e o Azure Bastion fornece acesso seguro RDP/SSH.",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 42,
    "type": "single",
    "category": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "category_en": "Describe Azure management and governance (30-35%)",
    "objective": "Identificar práticas para reduzir custos no Azure",
    "what_it_tests": "Como a transferência de dados entre regiões gera cobrança de largura de banda de saída (egress), reduzir o tráfego desnecessário entre regiões diminui a fatura do Azure.",
    "question": "Quais das seguintes ações podem ajudar a reduzir os custos do Azure?",
    "options": [
      {
        "id": "A",
        "text": "Reduzir a quantidade de dados transferidos entre regiões do Azure"
      },
      {
        "id": "B",
        "text": "Aumentar o número de máquinas virtuais implantadas"
      },
      {
        "id": "C",
        "text": "Habilitar dimensionamento automático para todas as máquinas virtuais"
      },
      {
        "id": "D",
        "text": "Manter todas as máquinas virtuais em execução 24/7"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Como a transferência de dados entre regiões gera cobrança de largura de banda de saída (egress), reduzir o tráfego desnecessário entre regiões diminui a fatura do Azure.",
    "explanation_why_correct": "**Reduzir a quantidade de dados transferidos entre regiões do Azure (A)** ajuda diretamente a reduzir os custos de rede na fatura.",
    "explanation_why_incorrect": "Aumentar o número de VMs ou manter VMs ligadas 24/7 sem necessidade aumenta os custos.",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 43,
    "type": "single",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Describe Azure architecture and services (35-40%)",
    "objective": "Descrever os recursos do Azure Cosmos DB",
    "what_it_tests": "O Azure Cosmos DB é o banco de dados NoSQL multimodal da Microsoft que suporta documentos, grafos, chave-valor e colunas, indexa todos os dados automaticamente e oferece replicação multi-região ativa-ativa.",
    "question": "Qual das seguintes soluções de armazenamento do Azure atende a TODOS os seguintes requisitos: 1) A capacidade de lidar com dados não estruturados (documentos, gráficos, chave-valor) 2) Indexar automaticamente todos os dados, independentemente do modelo de dados. 3) Gravações e distribuição de dados em várias regiões do Azure.",
    "options": [
      {
        "id": "A",
        "text": "Azure Cosmos DB"
      },
      {
        "id": "B",
        "text": "Azure Cache for Redis"
      },
      {
        "id": "C",
        "text": "Azure Database for MariaDB"
      },
      {
        "id": "D",
        "text": "Azure SQL Edge"
      },
      {
        "id": "E",
        "text": "Azure SQL Databases"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "O Azure Cosmos DB é o banco de dados NoSQL multimodal da Microsoft que suporta documentos, grafos, chave-valor e colunas, indexa todos os dados automaticamente e oferece replicação multi-região ativa-ativa.",
    "explanation_why_correct": "O **Azure Cosmos DB (A)** atende a todos os 3 requisitos: suporte a múltiplos modelos não estruturados/NoSQL, indexação automática e gravações em várias regiões do Azure.",
    "explanation_why_incorrect": "Cache for Redis é cache em memória; MariaDB, SQL Edge e SQL Database são bancos de dados relacionais.",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 44,
    "type": "single",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Describe Azure architecture and services (35-40%)",
    "objective": "Diferenciar Grupos de Recursos de Zonas de Disponibilidade",
    "what_it_tests": "Grupos de Recursos são apenas contêineres lógicos de gerenciamento e não oferecem isolamento físico contra quedas de datacenter. Para proteger VMs contra falha de um datacenter, deve-se usar Zonas de Disponibilidade (Availability Zones).",
    "question": "Uma startup implantou um conjunto de Máquinas Virtuais que são essenciais para suas operações diárias. Eles precisam garantir sua disponibilidade, mesmo que um único datacenter pare de funcionar. Um dos estagiários sugeriu que implantar essas VMs em vários grupos de recursos resolveria o problema. Você concorda?",
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
    "official_rationale": "Grupos de Recursos são apenas contêineres lógicos de gerenciamento e não oferecem isolamento físico contra quedas de datacenter. Para proteger VMs contra falha de um datacenter, deve-se usar Zonas de Disponibilidade (Availability Zones).",
    "explanation_why_correct": "**Não (B).** Distribuir VMs em vários grupos de recursos não protege contra a queda de um datacenter físico; para isso é necessário implantar as VMs em diferentes **Zonas de Disponibilidade (Availability Zones)**.",
    "explanation_why_incorrect": "Grupos de recursos são puramente organizacionais e administrativos.",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 45,
    "type": "single",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Describe Azure architecture and services (35-40%)",
    "objective": "Diferenciar Azure Event Grid de Azure Event Hubs",
    "what_it_tests": "O Azure Event Grid é um barramento de roteamento de eventos serverless que permite que recursos do Azure (como Blob Storage ou Resource Groups) enviem notificações de eventos reativos para aplicativos.",
    "question": "Qual dos seguintes serviços permite enviar eventos gerados a partir de recursos do Azure para aplicativos?",
    "options": [
      {
        "id": "A",
        "text": "Azure Event Hub (Hub de Eventos)"
      },
      {
        "id": "B",
        "text": "Azure Cognitive Services (Serviços Cognitivos)"
      },
      {
        "id": "C",
        "text": "Azure App Service (Serviço de Aplicativo)"
      },
      {
        "id": "D",
        "text": "Azure Event Grid (Grade de Eventos)"
      }
    ],
    "correct_answer": "D",
    "official_rationale": "O Azure Event Grid é um barramento de roteamento de eventos serverless que permite que recursos do Azure (como Blob Storage ou Resource Groups) enviem notificações de eventos reativos para aplicativos.",
    "explanation_why_correct": "O **Azure Event Grid (Grade de Eventos) (D)** permite rotear eventos gerados por recursos do Azure para aplicativos e funções em tempo real.",
    "explanation_why_incorrect": "Event Hubs é voltado para ingestão de streaming de big data (milhões de telemetrias por segundo); Cognitive Services são APIs de IA; e App Service hospeda sites.",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 46,
    "type": "single",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Describe Azure architecture and services (35-40%)",
    "objective": "Diferenciar Azure Kubernetes Service (AKS) de Azure Container Instances (ACI)",
    "what_it_tests": "O Azure Kubernetes Service (AKS) fornece orquestração completa para implantar, escalar e gerenciar aplicativos em contêiner distribuídos.",
    "question": "Qual dos seguintes serviços do Azure é usado para implantar e gerenciar aplicativos em contêiner?",
    "options": [
      {
        "id": "A",
        "text": "Azure Logic Apps"
      },
      {
        "id": "B",
        "text": "Azure Container Instances"
      },
      {
        "id": "C",
        "text": "Azure Kubernetes Service"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "O Azure Kubernetes Service (AKS) fornece orquestração completa para implantar, escalar e gerenciar aplicativos em contêiner distribuídos.",
    "explanation_why_correct": "O **Azure Kubernetes Service (AKS) (C)** é a plataforma completa para implantar e gerenciar aplicativos em contêiner em escala.",
    "explanation_why_incorrect": "Logic Apps é para fluxos de trabalho e Container Instances (ACI) executa contêineres isolados simples sem orquestração completa.",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 47,
    "type": "single",
    "category": "Descrever os conceitos da nuvem (25-30%)",
    "category_en": "Describe cloud concepts (25-30%)",
    "objective": "Definir Plataforma como Serviço (PaaS)",
    "what_it_tests": "No modelo PaaS (Platform as a Service), o provedor gerencia a infraestrutura subjacente (rede, armazenamento, servidores e SO), enquanto o cliente implanta seus próprios aplicativos usando linguagens, bibliotecas e ferramentas suportadas pelo provedor.",
    "question": "Em que modelo de serviço em nuvem os usuários podem executar aplicativos personalizados usando linguagens e ferramentas suportadas pelo provedor de nuvem?",
    "options": [
      {
        "id": "A",
        "text": "Infrastructure as a Service (IaaS)"
      },
      {
        "id": "B",
        "text": "Platform as a Service (PaaS)"
      },
      {
        "id": "C",
        "text": "Software as a Service (SaaS)"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "No modelo PaaS (Platform as a Service), o provedor gerencia a infraestrutura subjacente (rede, armazenamento, servidores e SO), enquanto o cliente implanta seus próprios aplicativos usando linguagens, bibliotecas e ferramentas suportadas pelo provedor.",
    "explanation_why_correct": "**Platform as a Service (PaaS) (B)** é o modelo onde os usuários executam aplicativos personalizados usando ferramentas e linguagens suportadas pelo provedor.",
    "explanation_why_incorrect": "Em IaaS o usuário gerencia também o sistema operacional; em SaaS o usuário apenas consome um software pronto.",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 48,
    "type": "multi",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Describe Azure architecture and services (35-40%)",
    "objective": "Identificar serviços do Azure para hospedar aplicativos web escaláveis e de alta disponibilidade",
    "what_it_tests": "Tanto o Azure App Service (PaaS para aplicações web) quanto o Azure Kubernetes Service - AKS (orquestração de microsserviços web em contêineres) oferecem escalonamento automático e alta disponibilidade integrados.",
    "question": "Qual serviço do Azure você usaria para implantar um aplicativo da web escalável e de alta disponibilidade?",
    "options": [
      {
        "id": "A",
        "text": "Azure Container Instances"
      },
      {
        "id": "B",
        "text": "Azure Virtual Machines"
      },
      {
        "id": "C",
        "text": "Azure Kubernetes Service (AKS)"
      },
      {
        "id": "D",
        "text": "Azure App Service"
      }
    ],
    "correct_answer": [
      "C",
      "D"
    ],
    "official_rationale": "Tanto o Azure App Service (PaaS para aplicações web) quanto o Azure Kubernetes Service - AKS (orquestração de microsserviços web em contêineres) oferecem escalonamento automático e alta disponibilidade integrados.",
    "explanation_why_correct": "Os dois serviços indicados no gabarito para implantar aplicativos web escaláveis e de alta disponibilidade são **Azure Kubernetes Service (AKS) (C)** e **Azure App Service (D)**.",
    "explanation_why_incorrect": "Container Instances não possui balanceamento/autoescalonamento nativo de alta disponibilidade, e uma VM isolada exige configuração manual de infraestrutura.",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 49,
    "type": "single",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Describe Azure architecture and services (35-40%)",
    "objective": "Descrever o Azure Functions como computação Serverless",
    "what_it_tests": "O Azure Functions é a principal solução de Função como Serviço (FaaS / Serverless) do Azure para executar código orientado a eventos sem gerenciar servidores.",
    "question": "Qual dos seguintes serviços do Azure é usado para criar aplicativos sem servidor (Serverless)?",
    "options": [
      {
        "id": "A",
        "text": "Azure Functions"
      },
      {
        "id": "B",
        "text": "Azure Service Health"
      },
      {
        "id": "C",
        "text": "Azure Service Bus (Barramento de Serviço)"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "O Azure Functions é a principal solução de Função como Serviço (FaaS / Serverless) do Azure para executar código orientado a eventos sem gerenciar servidores.",
    "explanation_why_correct": "O **Azure Functions (A)** é o serviço usado para criar aplicativos sem servidor (Serverless) orientados a eventos.",
    "explanation_why_incorrect": "Service Health monitora a saúde da nuvem e Service Bus é um serviço de filas de mensagens.",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 50,
    "type": "single",
    "category": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "category_en": "Describe Azure management and governance (30-35%)",
    "objective": "Conhecer os Planos de Suporte do Azure (Basic, Developer, Standard, Professional Direct)",
    "what_it_tests": "O plano Professional Direct inclui suporte técnico 24x7 por telefone e e-mail, acesso à API de suporte e treinamentos conduzidos por especialistas do Azure (webinars ProDirect).",
    "question": "Quais dos seguintes planos de suporte do Azure concedem acesso a: 1) Acesso 24 horas por dia, 7 dias por semana a engenheiros de suporte por e-mail e telefone 2) Treinamento na forma de webinars de especialistas do Azure 3) Acesso à API de suporte",
    "options": [
      {
        "id": "A",
        "text": "Standard"
      },
      {
        "id": "B",
        "text": "Básico"
      },
      {
        "id": "C",
        "text": "Desenvolvedor"
      },
      {
        "id": "D",
        "text": "Professional Direct"
      }
    ],
    "correct_answer": "D",
    "official_rationale": "O plano Professional Direct inclui suporte técnico 24x7 por telefone e e-mail, acesso à API de suporte e treinamentos conduzidos por especialistas do Azure (webinars ProDirect).",
    "explanation_why_correct": "O plano **Professional Direct (D)** concede acesso 24/7 a engenheiros de suporte, acesso à API de suporte e webinars exclusivos conduzidos por especialistas do Azure.",
    "explanation_why_incorrect": "Básico não tem suporte técnico por telefone; Desenvolvedor funciona apenas em horário comercial; e Standard não inclui os webinars ProDirect de especialistas.",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 51,
    "type": "single",
    "category": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "category_en": "Describe Azure management and governance (30-35%)",
    "objective": "Otimizar custos de Máquinas Virtuais com dimensionamento automático",
    "what_it_tests": "O dimensionamento automático (Autoscaling) permite ajustar os recursos de computação dinamicamente conforme a carga de trabalho oscila, evitando pagar por capacidade ociosa nos períodos de baixa demanda.",
    "question": "Sua organização implantou uma Máquina Virtual no Azure com o tamanho de VM Standard_D2s_v3. A Máquina Virtual está executando uma carga de trabalho intensiva em recursos e você deseja otimizar os custos. Qual das seguintes opções poderia ser uma maneira eficaz de alcançar isso?",
    "options": [
      {
        "id": "A",
        "text": "Usar um tamanho de VM menor para reduzir os custos"
      },
      {
        "id": "B",
        "text": "Usar uma região do Azure diferente com preços mais baixos para VMs."
      },
      {
        "id": "C",
        "text": "Usar um tamanho de VM maior para melhorar o desempenho"
      },
      {
        "id": "D",
        "text": "Habilitar dimensionamento automático para ajustar o tamanho da VM com base na carga de trabalho"
      }
    ],
    "correct_answer": "D",
    "official_rationale": "O dimensionamento automático (Autoscaling) permite ajustar os recursos de computação dinamicamente conforme a carga de trabalho oscila, evitando pagar por capacidade ociosa nos períodos de baixa demanda.",
    "explanation_why_correct": "**Habilitar dimensionamento automático para ajustar a capacidade com base na carga de trabalho (D)** otimiza os custos sem sacrificar o desempenho nos momentos de pico.",
    "explanation_why_incorrect": "Usar uma VM menor degradaria a carga intensiva, e usar uma VM maior aumentaria ainda mais os custos.",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 52,
    "type": "single",
    "category": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "category_en": "Describe Azure management and governance (30-35%)",
    "objective": "Identificar fatores de custo na replicação entre regiões (Disaster Recovery)",
    "what_it_tests": "Ao replicar VMs para outra região (como via Azure Site Recovery), o custo total é influenciado pelos tipos e quantidade de VMs replicadas, pelo volume de dados armazenados/replicados e pela largura de banda de rede entre as regiões.",
    "question": "Sua organização está usando o Azure para fins de recuperação de desastres. Você configurou a replicação de máquinas virtuais para uma região do Azure diferente da região primária. Quais dos seguintes fatores podem afetar o custo dessa configuração?",
    "options": [
      {
        "id": "A",
        "text": "Os tipos de máquinas virtuais sendo replicados"
      },
      {
        "id": "B",
        "text": "O número de máquinas virtuais sendo replicadas"
      },
      {
        "id": "C",
        "text": "Todos os fatores acima"
      },
      {
        "id": "D",
        "text": "A quantidade de dados sendo replicados"
      },
      {
        "id": "E",
        "text": "A largura de banda de rede entre as regiões primária e secundária"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "Ao replicar VMs para outra região (como via Azure Site Recovery), o custo total é influenciado pelos tipos e quantidade de VMs replicadas, pelo volume de dados armazenados/replicados e pela largura de banda de rede entre as regiões.",
    "explanation_why_correct": "**Todos os fatores acima (C)** (tipos de VMs, número de VMs, quantidade de dados replicados e largura de banda de rede entre as regiões) afetam o custo da configuração de recuperação de desastres.",
    "explanation_why_incorrect": "Como todos os itens listados em A, B, D e E geram consumo de licenciamento, armazenamento ou tráfego inter-regional, a opção C engloba todos.",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 53,
    "type": "multi",
    "category": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "category_en": "Describe Azure management and governance (30-35%)",
    "objective": "Identificar fatores que influenciam o custo do Banco de Dados SQL do Azure",
    "what_it_tests": "O custo do Azure SQL Database depende da camada de desempenho/DTUs ou vCores (desempenho de leitura/gravação), da região geográfica escolhida e do tamanho de armazenamento alocado para o banco de dados.",
    "question": "Quais dos seguintes fatores influenciam o custo de um banco de dados SQL do Azure? (Selecione todas as opções que se aplicam)",
    "options": [
      {
        "id": "A",
        "text": "Desempenho de leitura/gravação"
      },
      {
        "id": "B",
        "text": "Geografia"
      },
      {
        "id": "C",
        "text": "Número de tabelas"
      },
      {
        "id": "D",
        "text": "Tamanho do banco de dados"
      }
    ],
    "correct_answer": [
      "A",
      "B",
      "D"
    ],
    "official_rationale": "O custo do Azure SQL Database depende da camada de desempenho/DTUs ou vCores (desempenho de leitura/gravação), da região geográfica escolhida e do tamanho de armazenamento alocado para o banco de dados.",
    "explanation_why_correct": "Os fatores que influenciam o custo de um banco de dados SQL do Azure são: **Desempenho de leitura/gravação (A)**, **Geografia (B)** e **Tamanho do banco de dados (D)**.",
    "explanation_why_incorrect": "O número de tabelas criadas dentro do banco (C) não é cobrado pela Microsoft (o que importa é o espaço em GB consumido e os DTUs/vCores).",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 54,
    "type": "single",
    "category": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "category_en": "Describe Azure management and governance (30-35%)",
    "objective": "Descrever a observabilidade com o Azure Monitor",
    "what_it_tests": "O Azure Monitor é a solução unificada para monitorar, analisar e visualizar métricas de saúde, integridade e desempenho de todos os seus recursos do Azure.",
    "question": "Qual dos seguintes serviços do Azure é usado para monitorar, analisar e visualizar a saúde, a integridade e o desempenho dos seus recursos do Azure?",
    "options": [
      {
        "id": "A",
        "text": "Azure Service Health"
      },
      {
        "id": "B",
        "text": "Azure Advisor"
      },
      {
        "id": "C",
        "text": "Azure Monitor"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "O Azure Monitor é a solução unificada para monitorar, analisar e visualizar métricas de saúde, integridade e desempenho de todos os seus recursos do Azure.",
    "explanation_why_correct": "O **Azure Monitor (C)** é o serviço usado para monitorar, analisar e visualizar continuamente o desempenho e a integridade dos seus recursos.",
    "explanation_why_incorrect": "Azure Service Health foca em incidentes do datacenter da Microsoft e Azure Advisor emite recomendações.",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 55,
    "type": "single",
    "category": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "category_en": "Describe Azure management and governance (30-35%)",
    "objective": "Compreender as Zonas de Faturamento (Billing Zones) e Geografia no tráfego de rede",
    "what_it_tests": "Os preços de transferência de dados de saída (egress) no Azure variam de acordo com a Geografia / Zona de Faturamento (Billing Zone) de origem e destino.",
    "question": "Como o custo do tráfego de rede no Azure é afetado?",
    "options": [
      {
        "id": "A",
        "text": "Pela geografia"
      },
      {
        "id": "B",
        "text": "Pelo número de usuários"
      },
      {
        "id": "C",
        "text": "Pelo tipo de recurso"
      },
      {
        "id": "D",
        "text": "Pelo tipo de assinatura"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Os preços de transferência de dados de saída (egress) no Azure variam de acordo com a Geografia / Zona de Faturamento (Billing Zone) de origem e destino.",
    "explanation_why_correct": "O custo do tráfego de rede no Azure é afetado **pela geografia (A)** (as regiões são agrupadas em zonas geográficas de faturamento com tarifas por GB distintas).",
    "explanation_why_incorrect": "O número de usuários não altera a tarifa por GB de tráfego de rede.",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 56,
    "type": "multi",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Describe Azure architecture and services (35-40%)",
    "objective": "Identificar serviços de armazenamento para grandes volumes de dados não estruturados",
    "what_it_tests": "O Azure Blob Storage e o Azure Data Lake Storage Gen2 (construído sobre o Blob Storage com namespace hierárquico) são projetados para armazenar e consultar grandes volumes de dados não estruturados, como logs e mídia.",
    "question": "Qual serviço do Azure você usaria para armazenar e consultar grandes volumes de dados não estruturados, como logs e arquivos de mídia?",
    "options": [
      {
        "id": "A",
        "text": "Azure SQL Database"
      },
      {
        "id": "B",
        "text": "Azure Blob Storage"
      },
      {
        "id": "C",
        "text": "Azure Data Lake Storage"
      },
      {
        "id": "D",
        "text": "Azure Cosmos DB"
      }
    ],
    "correct_answer": [
      "B",
      "C"
    ],
    "official_rationale": "O Azure Blob Storage e o Azure Data Lake Storage Gen2 (construído sobre o Blob Storage com namespace hierárquico) são projetados para armazenar e consultar grandes volumes de dados não estruturados, como logs e mídia.",
    "explanation_why_correct": "Os dois serviços indicados são **Azure Blob Storage (B)** e **Azure Data Lake Storage (C)**.",
    "explanation_why_incorrect": "Azure SQL Database é para dados relacionais estruturados e Cosmos DB é para documentos NoSQL transacionais.",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 57,
    "type": "multi",
    "category": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "category_en": "Describe Azure management and governance (30-35%)",
    "objective": "Identificar serviços de visibilidade de integridade e monitoramento no Azure",
    "what_it_tests": "O Azure Service Health (Integridade do Serviço) e o Azure Monitor fornecem visibilidade em tempo real sobre o estado, disponibilidade e integridade dos serviços e recursos do Azure.",
    "question": "Quais dos seguintes serviços do Azure fornecem visibilidade sobre o estado e a integridade dos serviços do Azure? (Selecione todas as opções que se aplicam)",
    "options": [
      {
        "id": "A",
        "text": "Integridade do Serviço Azure (Servide Health)"
      },
      {
        "id": "B",
        "text": "Azure Advisor"
      },
      {
        "id": "C",
        "text": "Azure Monitor"
      }
    ],
    "correct_answer": [
      "A",
      "C"
    ],
    "official_rationale": "O Azure Service Health (Integridade do Serviço) e o Azure Monitor fornecem visibilidade em tempo real sobre o estado, disponibilidade e integridade dos serviços e recursos do Azure.",
    "explanation_why_correct": "Os serviços que fornecem visibilidade sobre o estado e a integridade são **Integridade do Serviço Azure / Service Health (A)** e **Azure Monitor (C)**.",
    "explanation_why_incorrect": "O Azure Advisor (B) é voltado para recomendações proativas de otimização.",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 58,
    "type": "single",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Describe Azure architecture and services (35-40%)",
    "objective": "Descrever os benefícios do Azure ExpressRoute",
    "what_it_tests": "O Azure ExpressRoute cria conexões privadas dedicadas entre o datacenter local e o Azure através de um provedor de conectividade, sem passar pela Internet pública, garantindo maior segurança, confiabilidade e baixa latência.",
    "question": "O Azure ExpressRoute permite estabelecer uma conexão dedicada entre sua infraestrutura local e os data centers do Azure.\nQual das seguintes afirmações é verdadeira sobre o Azure ExpressRoute?",
    "options": [
      {
        "id": "A",
        "text": "O Azure ExpressRoute oferece uma conexão privada, segura e de baixa latência com o Azure."
      },
      {
        "id": "B",
        "text": "O Azure ExpressRoute é uma conexão exclusiva para uso em serviços específicos do Azure."
      },
      {
        "id": "C",
        "text": "O Azure ExpressRoute é gratuito e não há cobranças associadas a essa opção de conectividade."
      },
      {
        "id": "D",
        "text": "O Azure ExpressRoute usa a Internet pública para estabelecer a conexão com o Azure."
      }
    ],
    "correct_answer": "A",
    "official_rationale": "O Azure ExpressRoute cria conexões privadas dedicadas entre o datacenter local e o Azure através de um provedor de conectividade, sem passar pela Internet pública, garantindo maior segurança, confiabilidade e baixa latência.",
    "explanation_why_correct": "**O Azure ExpressRoute oferece uma conexão privada, segura e de baixa latência com o Azure (A).**",
    "explanation_why_incorrect": "O ExpressRoute não passa pela Internet pública, não é gratuito e suporta múltiplos serviços do Azure e Microsoft 365.",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 59,
    "type": "single",
    "category": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "category_en": "Describe Azure management and governance (30-35%)",
    "objective": "Conhecer as regras de funcionamento dos Grupos de Recursos no Azure",
    "what_it_tests": "No Azure, os Grupos de Recursos NÃO podem ser aninhados (você não pode criar um grupo de recursos dentro de outro grupo de recursos).",
    "question": "Selecione a opção que é FALSA para Grupos de Recursos.",
    "options": [
      {
        "id": "A",
        "text": "Grupos de recursos podem ser aninhados (Nesting)"
      },
      {
        "id": "B",
        "text": "Você pode implantar até 800 instâncias de um tipo de recurso em cada grupo de recursos."
      },
      {
        "id": "C",
        "text": "Um recurso só pode pertencer a um grupo de recursos"
      },
      {
        "id": "D",
        "text": "Você pode adicionar ou remover um recurso de um grupo de recursos a qualquer momento."
      },
      {
        "id": "E",
        "text": "Os recursos podem ser movidos de um grupo de recursos para outro"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "No Azure, os Grupos de Recursos NÃO podem ser aninhados (você não pode criar um grupo de recursos dentro de outro grupo de recursos).",
    "explanation_why_correct": "A afirmação **FALSA** é **A: Grupos de recursos podem ser aninhados (Nesting)** — o Azure não permite colocar um Resource Group dentro de outro.",
    "explanation_why_incorrect": "Todas as outras afirmações (limite de 800 instâncias por tipo, pertencer a um único grupo, adicionar/remover e mover recursos entre grupos) são verdadeiras.",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 60,
    "type": "single",
    "category": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "category_en": "Describe Azure management and governance (30-35%)",
    "objective": "Descrever a finalidade do Azure Policy",
    "what_it_tests": "O Azure Policy permite criar, atribuir e gerenciar definições de políticas que aplicam regras aos recursos e avaliam a conformidade em toda a assinatura.",
    "question": "Qual serviço do Azure permite criar, atribuir e gerenciar políticas para aplicar diferentes regras e estar em conformidade com seus Acordos de Nível de Serviço (SLAs)?",
    "options": [
      {
        "id": "A",
        "text": "Azure Policy (Política do Azure)"
      },
      {
        "id": "B",
        "text": "Azure Blueprints"
      },
      {
        "id": "C",
        "text": "Azure Security Center"
      },
      {
        "id": "D",
        "text": "Azure Trust Portal"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "O Azure Policy permite criar, atribuir e gerenciar definições de políticas que aplicam regras aos recursos e avaliam a conformidade em toda a assinatura.",
    "explanation_why_correct": "O **Azure Policy (Política do Azure) (A)** é o serviço que cria, atribui e gerencia políticas para impor regras organizacionais e avaliar a conformidade.",
    "explanation_why_incorrect": "Blueprints empacota artefatos de implantação; Security Center foca em segurança; e Trust Portal é informativo.",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 61,
    "type": "single",
    "category": "Descrever os conceitos da nuvem (25-30%)",
    "category_en": "Describe cloud concepts (25-30%)",
    "objective": "Diferenciar Despesas Operacionais (OpEx) de Despesas de Capital (CapEx)",
    "what_it_tests": "O modelo de pagamento conforme o uso (Pay-As-You-Go) na nuvem sem investimento inicial em hardware físico enquadra-se em Despesas Operacionais (OpEx - Operational Expenditure).",
    "question": "Você tem dezenas de Máquinas Virtuais (VM) hospedadas no Azure. O arquiteto líder solicitou suas sugestões para migrar todas as VMs para uma assinatura Azure de pagamento conforme o uso. Qual modelo de gastos seria aplicado aos requisitos mencionados?",
    "options": [
      {
        "id": "A",
        "text": "Escalável"
      },
      {
        "id": "B",
        "text": "Tolerante a falhas"
      },
      {
        "id": "C",
        "text": "Operacional"
      },
      {
        "id": "D",
        "text": "Capital"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "O modelo de pagamento conforme o uso (Pay-As-You-Go) na nuvem sem investimento inicial em hardware físico enquadra-se em Despesas Operacionais (OpEx - Operational Expenditure).",
    "explanation_why_correct": "O modelo de gastos aplicado ao pagamento conforme o uso (Pay-As-You-Go) no Azure é o **Operacional (OpEx) (C)**.",
    "explanation_why_incorrect": "Despesa de Capital (CapEx) refere-se à compra antecipada de servidores físicos locais; Escalável e Tolerante a falhas são características técnicas, não modelos contábeis.",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 62,
    "type": "single",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Describe Azure architecture and services (35-40%)",
    "objective": "Identificar os serviços de Internet das Coisas (IoT) do Azure",
    "what_it_tests": "O Hub IoT do Azure (Azure IoT Hub) atua como um hub de mensagens central na nuvem para comunicação bidirecional segura entre aplicativos de IoT e os dispositivos que eles gerenciam.",
    "question": "Qual dos seguintes serviços do Azure é usado para criar aplicativos de Internet das Coisas (IoT)?",
    "options": [
      {
        "id": "A",
        "text": "Hub IoT do Azure"
      },
      {
        "id": "B",
        "text": "Azure Functions"
      },
      {
        "id": "C",
        "text": "Barramento de Serviço do Azure"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "O Hub IoT do Azure (Azure IoT Hub) atua como um hub de mensagens central na nuvem para comunicação bidirecional segura entre aplicativos de IoT e os dispositivos que eles gerenciam.",
    "explanation_why_correct": "O **Hub IoT do Azure (A)** é o serviço gerenciado projetado especificamente para conectar, monitorar e gerenciar bilhões de dispositivos de **Internet das Coisas (IoT)**.",
    "explanation_why_incorrect": "Azure Functions executa funções serverless e o Barramento de Serviço (Service Bus) é para mensagens entre sistemas corporativos.",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 63,
    "type": "single",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Describe Azure architecture and services (35-40%)",
    "objective": "Descrever o Azure Data Factory para orquestração de dados",
    "what_it_tests": "O Azure Data Factory é o serviço de integração de dados na nuvem que permite criar pipelines de dados orientados a dados (ETL/ELT) orquestrados e programáveis.",
    "question": "Qual dos seguintes serviços do Azure é usado para criar pipelines de dados orquestrados e programáveis?",
    "options": [
      {
        "id": "A",
        "text": "Azure Data Factory"
      },
      {
        "id": "B",
        "text": "Azure Service Health"
      },
      {
        "id": "C",
        "text": "Azure Service Bus"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "O Azure Data Factory é o serviço de integração de dados na nuvem que permite criar pipelines de dados orientados a dados (ETL/ELT) orquestrados e programáveis.",
    "explanation_why_correct": "O **Azure Data Factory (A)** é usado para criar, agendar e orquestrar pipelines de movimentação e transformação de dados em escala.",
    "explanation_why_incorrect": "Service Health monitora status do Azure e Service Bus é fila de mensagens.",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 64,
    "type": "single",
    "category": "Descrever o gerenciamento e a governança do Azure (30-35%)",
    "category_en": "Describe Azure management and governance (30-35%)",
    "objective": "Compreender a relação entre Recursos e Grupos de Recursos",
    "what_it_tests": "Cada recurso do Azure deve existir em um, e apenas um, Grupo de Recursos por vez.",
    "question": "Um recurso pode pertencer a mais de um grupo de recursos?",
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
    "official_rationale": "Cada recurso do Azure deve existir em um, e apenas um, Grupo de Recursos por vez.",
    "explanation_why_correct": "**Não (B).** Um recurso do Azure **só pode pertencer a um único grupo de recursos** (embora possa ser movido de um grupo para outro).",
    "explanation_why_incorrect": "Um recurso nunca pode estar associado a dois grupos de recursos simultaneamente.",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  },
  {
    "id": 65,
    "type": "multi",
    "category": "Descrever a arquitetura e os serviços do Azure (35-40%)",
    "category_en": "Describe Azure architecture and services (35-40%)",
    "objective": "Identificar serviços de ingestão e análise de streaming em tempo real no Azure",
    "what_it_tests": "Os Hubs de Eventos do Azure (Azure Event Hubs) ingerem milhões de eventos por segundo em tempo real, e o Azure Stream Analytics processa e analisa esses fluxos de dados em tempo real com consultas estilo SQL.",
    "question": "Quais dos seguintes serviços do Azure são usados para criar soluções de análise em tempo real? (Selecione todas as opções que se aplicam)",
    "options": [
      {
        "id": "A",
        "text": "Azure Stream Analytics"
      },
      {
        "id": "B",
        "text": "Azure Functions"
      },
      {
        "id": "C",
        "text": "Hubs de Eventos do Azure"
      },
      {
        "id": "D",
        "text": "Azure Logic Apps"
      }
    ],
    "correct_answer": [
      "A",
      "C"
    ],
    "official_rationale": "Os Hubs de Eventos do Azure (Azure Event Hubs) ingerem milhões de eventos por segundo em tempo real, e o Azure Stream Analytics processa e analisa esses fluxos de dados em tempo real com consultas estilo SQL.",
    "explanation_why_correct": "Os serviços usados para criar soluções de análise em tempo real são **Azure Stream Analytics (A)** e **Hubs de Eventos do Azure / Event Hubs (C)**.",
    "explanation_why_incorrect": "Azure Functions e Logic Apps são serviços de computação serverless e automação de workflows, não motores dedicados de streaming analítico.",
    "additional_reading": [
      {
        "title": "Guia de Estudo Oficial do Exame AZ-900: Microsoft Azure Fundamentals",
        "url": "https://learn.microsoft.com/pt-br/credentials/certifications/resources/study-guides/az-900"
      },
      {
        "title": "Roteiro de Aprendizagem: Microsoft Azure Fundamentals (Microsoft Learn)",
        "url": "https://learn.microsoft.com/pt-br/training/courses/az-900t00"
      }
    ]
  }
];
