// Simulados Oficiais AWS Certified Cloud Practitioner (CLF-C02)
// Extraídos do Quizizz / Wayground - Total: 180 questões comentadas em PT-BR
// Simulado 1: 65 questões | Simulado 2: 50 questões | Simulado 3: 65 questões

const AWS_SIMULADO_1_QUESTIONS = [
  {
    "id": 1,
    "type": "single",
    "category": "Cobrança, Preços e Suporte da AWS (12%)",
    "category_en": "Cobrança, Preços e Suporte da AWS (12%)",
    "objective": "4.2 Identificar recursos para gerenciamento de faturamento, orçamento e custos",
    "what_it_tests": "O AWS Cost Explorer possui uma interface gráfica interativa que permite visualizar, entender e gerenciar custos e uso da AWS ao longo do tempo.",
    "question": "Onde você pode acompanhar os custos ocorridos até agora em sua conta da AWS com uma visualização gráfica?",
    "options": [
      {
        "id": "A",
        "text": "AWS Consolidated Billing"
      },
      {
        "id": "B",
        "text": "AWS Budgets"
      },
      {
        "id": "C",
        "text": "AWS Cost Explorer"
      },
      {
        "id": "D",
        "text": "AWS Cost and Usage Reports"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "O AWS Cost Explorer possui uma interface gráfica interativa que permite visualizar, entender e gerenciar custos e uso da AWS ao longo do tempo.",
    "explanation_why_correct": "O **AWS Cost Explorer** oferece gráficos interativos para analisar os custos incorridos até o momento e projetar gastos futuros na conta AWS.",
    "explanation_why_incorrect": "Consolidated Billing unifica faturas de múltiplas contas; AWS Budgets envia alertas de limite; e Cost and Usage Reports gera arquivos detalhados em CSV/Parquet no S3.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 2,
    "type": "single",
    "category": "Segurança e Conformidade na AWS (30%)",
    "category_en": "Segurança e Conformidade na AWS (30%)",
    "objective": "2.3 Identificar recursos e serviços para gerenciamento de acesso",
    "what_it_tests": "Para autenticar chamadas programáticas via AWS CLI ou SDK, são necessárias Chaves de Acesso (Access Key ID e Secret Access Key) associadas a um usuário ou função IAM.",
    "question": "Qual das opções abaixo é necessária para recuperar uma lista de instâncias EC2 usando o AWS CLI?",
    "options": [
      {
        "id": "A",
        "text": "Access Keys - Par de Chaves de Acesso"
      },
      {
        "id": "B",
        "text": "MFA"
      },
      {
        "id": "C",
        "text": "Chaves SSH"
      },
      {
        "id": "D",
        "text": "Usuário e senha"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Para autenticar chamadas programáticas via AWS CLI ou SDK, são necessárias Chaves de Acesso (Access Key ID e Secret Access Key) associadas a um usuário ou função IAM.",
    "explanation_why_correct": "As **Access Keys (Par de Chaves de Acesso)** compostas por Access Key ID e Secret Access Key são usadas para assinar requisições programáticas feitas no AWS CLI.",
    "explanation_why_incorrect": "Usuário e senha são usados no Console de Gerenciamento Web; chaves SSH acessam o sistema operacional de instâncias EC2 Linux; e MFA é um segundo fator de autenticação.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 3,
    "type": "multi",
    "category": "Cobrança, Preços e Suporte da AWS (12%)",
    "category_en": "Cobrança, Preços e Suporte da AWS (12%)",
    "objective": "4.3 Identificar recursos técnicos e opções do AWS Support",
    "what_it_tests": "O plano AWS Enterprise Support garante tempo de resposta de até 15 minutos para sistemas críticos para os negócios inativos.",
    "question": "Qual das seguintes afirmações é verdadeira sobre os tempos de resposta de suporte técnico aprimorado do plano de suporte Enterprise na AWS? (Selecione DUAS)",
    "options": [
      {
        "id": "A",
        "text": "Fornece um suporte de tempo de resposta de 1 hora se o seu sistema de produção ficar inativo"
      },
      {
        "id": "B",
        "text": "Fornece um suporte de tempo de resposta de 15 minutos se o seu sistema crítico para os negócios ficar inativo"
      },
      {
        "id": "C",
        "text": "Fornece um suporte de tempo de resposta de 12 horas para orientação geral"
      },
      {
        "id": "D",
        "text": "Fornece um suporte de tempo de resposta de 2 horas se o seu sistema de produção for prejudicado"
      },
      {
        "id": "E",
        "text": "Fornece um suporte de tempo de resposta de 48 horas para orientação geral"
      }
    ],
    "correct_answer": [
      "B",
      "D"
    ],
    "official_rationale": "O plano AWS Enterprise Support garante tempo de resposta de até 15 minutos para sistemas críticos para os negócios inativos.",
    "explanation_why_correct": "No plano **Enterprise**, o tempo de resposta para sistemas críticos de negócios inativos é de **15 minutos (B)** (além da opção **D** marcada neste gabarito do simulado).",
    "explanation_why_incorrect": "No plano Enterprise oficial, orientação geral tem SLA de < 24h e sistema de produção inativo < 1h.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 4,
    "type": "single",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.2 Identificar os serviços de computação da AWS",
    "what_it_tests": "O AWS Lambda é o serviço de computação serverless (sem servidor) orientado a eventos da AWS que executa código sem provisionar ou gerenciar servidores.",
    "question": "Qual das afirmações abaixo é um serviço de computação sem servidor da  AWS?",
    "options": [
      {
        "id": "A",
        "text": "AWS Lambda"
      },
      {
        "id": "B",
        "text": "Amazon Athena"
      },
      {
        "id": "C",
        "text": "Amazon DynamoDB"
      },
      {
        "id": "D",
        "text": "Amazon Aurora"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "O AWS Lambda é o serviço de computação serverless (sem servidor) orientado a eventos da AWS que executa código sem provisionar ou gerenciar servidores.",
    "explanation_why_correct": "O **AWS Lambda** é um serviço de computação sem servidor (serverless) onde você carrega o código e paga apenas pelo tempo de execução em milissegundos.",
    "explanation_why_incorrect": "Amazon Athena é um serviço de consulta interativa no S3; DynamoDB é um banco NoSQL; e Aurora é um banco de dados relacional.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 5,
    "type": "single",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.4 Identificar os serviços de rede da AWS",
    "what_it_tests": "O Application Load Balancer (ALB) opera na camada 7 (aplicação) e permite registrar funções AWS Lambda diretamente em Target Groups para receber requisições HTTP/HTTPS.",
    "question": "Qual tipo de Elastic Load Balancer permite você encaminhar as requisições de entrada para um target group que tem uma função Lambda como target?",
    "options": [
      {
        "id": "A",
        "text": "Nenhum das opções abaixo"
      },
      {
        "id": "B",
        "text": "Classic Load Balancer"
      },
      {
        "id": "C",
        "text": "Network Load Balancer"
      },
      {
        "id": "D",
        "text": "Application Load Balancer"
      }
    ],
    "correct_answer": "D",
    "official_rationale": "O Application Load Balancer (ALB) opera na camada 7 (aplicação) e permite registrar funções AWS Lambda diretamente em Target Groups para receber requisições HTTP/HTTPS.",
    "explanation_why_correct": "O **Application Load Balancer (ALB)** suporta o roteamento de requisições HTTP/HTTPS diretamente para Target Groups compostos por funções **AWS Lambda**.",
    "explanation_why_incorrect": "Network Load Balancer (camada 4) e Classic Load Balancer não suportam funções AWS Lambda como destinos (targets).",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 6,
    "type": "single",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.1 Descrever os métodos de implantação e operação na Nuvem AWS",
    "what_it_tests": "O AWS CodePipeline é um serviço totalmente gerenciado de entrega contínua (CI/CD) que automatiza os estágios de compilação, teste e implantação.",
    "question": "Qual das seguintes opções abaixo é um serviço de entrega contínua que você deve usar para automatizar suas pipelines para uma aplicação mais rápida e confiável e atualizações de infraestrutura?",
    "options": [
      {
        "id": "A",
        "text": "AWS CodeCommit"
      },
      {
        "id": "B",
        "text": "AWS CodePipeline"
      },
      {
        "id": "C",
        "text": "Amazon Data Pipeline"
      },
      {
        "id": "D",
        "text": "AWS CodeDeploy"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "O AWS CodePipeline é um serviço totalmente gerenciado de entrega contínua (CI/CD) que automatiza os estágios de compilação, teste e implantação.",
    "explanation_why_correct": "O **AWS CodePipeline** orquestra e automatiza todo o fluxo de lançamento (pipeline de entrega contínua) para atualizações rápidas e confiáveis de aplicações e infraestrutura.",
    "explanation_why_incorrect": "CodeCommit é repositório Git; CodeDeploy automatiza apenas a etapa de deploy em instâncias/containers; e Data Pipeline move dados entre serviços.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 7,
    "type": "multi",
    "category": "Segurança e Conformidade na AWS (30%)",
    "category_en": "Segurança e Conformidade na AWS (30%)",
    "objective": "2.4 Identificar componentes e recursos para segurança",
    "what_it_tests": "O Amazon GuardDuty detecta ameaças continuamente usando machine learning e inteligência de ameaças, e o Amazon Detective auxilia na investigação de segurança com gráficos e ML.",
    "question": "Quais serviços de segurança na AWS usa sistemas inteligentes e aprendizado de máquina para identificar rapidamente ameaças de segurança e problemas em sua conta AWS? (Selecione DUAS)",
    "options": [
      {
        "id": "A",
        "text": "Amazon Detective"
      },
      {
        "id": "B",
        "text": "AWS Mobile Hub"
      },
      {
        "id": "C",
        "text": "AWS Sumerian"
      },
      {
        "id": "D",
        "text": "AWS IAM"
      },
      {
        "id": "E",
        "text": "Amazon GuardDuty"
      }
    ],
    "correct_answer": [
      "A",
      "E"
    ],
    "official_rationale": "O Amazon GuardDuty detecta ameaças continuamente usando machine learning e inteligência de ameaças, e o Amazon Detective auxilia na investigação de segurança com gráficos e ML.",
    "explanation_why_correct": "O **Amazon GuardDuty (E)** monitora logs para detecção inteligente de ameaças via ML, e o **Amazon Detective (A)** analisa a causa raiz de descobertas de segurança.",
    "explanation_why_incorrect": "IAM gerencia permissões de acesso; Mobile Hub e Sumerian não são serviços de detecção inteligente de ameaças.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 8,
    "type": "multi",
    "category": "Conceitos da Nuvem AWS (24%)",
    "category_en": "Conceitos da Nuvem AWS (24%)",
    "objective": "1.1 Definir os benefícios da Nuvem AWS",
    "what_it_tests": "Entre as 6 vantagens da computação em nuvem da AWS estão: trocar despesas de capital (CapEx) por despesas variáveis (OpEx) e aumentar a velocidade e a agilidade.",
    "question": "Quais opções abaixo são vantagens de Computação em Nuvem? (Selecione DUAS)",
    "options": [
      {
        "id": "A",
        "text": "Grandes descontos para seus computadores, dispositivos de redes e outros equipamentos da loja online da Amazon"
      },
      {
        "id": "B",
        "text": "Alcance baixas economias de escala."
      },
      {
        "id": "C",
        "text": "Troque despesas de capital por despesas variáveis"
      },
      {
        "id": "D",
        "text": "Aumente a velocidade e agilidade"
      },
      {
        "id": "E",
        "text": "Troque despesas variáveis por despesas capitais"
      }
    ],
    "correct_answer": [
      "C",
      "D"
    ],
    "official_rationale": "Entre as 6 vantagens da computação em nuvem da AWS estão: trocar despesas de capital (CapEx) por despesas variáveis (OpEx) e aumentar a velocidade e a agilidade.",
    "explanation_why_correct": "Duas das seis vantagens oficiais da nuvem AWS são **trocar despesas de capital por despesas variáveis (C)** e **aumentar a velocidade e a agilidade (D)**.",
    "explanation_why_incorrect": "A nuvem gera altas economias de escala (não baixas), não dá descontos no varejo Amazon.com e não troca despesas variáveis por capital.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 9,
    "type": "multi",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.3 Identificar os serviços de armazenamento e banco de dados da AWS",
    "what_it_tests": "Para dados transacionais e arquivos compartilhados em mudança constante com baixa latência de leitura/gravação entre as opções listadas, utilizam-se Amazon RDS e Amazon EFS.",
    "question": "Uma empresa está planejando implantar seu aplicativo de negociação de alta frequência (HFT) que armazenará dados financeiros em constante mudança na AWS e exigirá acesso de baixa latência. Quais serviços da AWS abaixo você deve usar? (Selecione DUAS)",
    "options": [
      {
        "id": "A",
        "text": "AWS Snowball"
      },
      {
        "id": "B",
        "text": "Amazon RDS"
      },
      {
        "id": "C",
        "text": "Amazon S3"
      },
      {
        "id": "D",
        "text": "Amazon EFS"
      },
      {
        "id": "E",
        "text": "Amazon Glacier"
      }
    ],
    "correct_answer": [
      "B",
      "D"
    ],
    "official_rationale": "Para dados transacionais e arquivos compartilhados em mudança constante com baixa latência de leitura/gravação entre as opções listadas, utilizam-se Amazon RDS e Amazon EFS.",
    "explanation_why_correct": "O **Amazon RDS (B)** oferece banco de dados relacional transacional de baixa latência e o **Amazon EFS (D)** oferece sistema de arquivos compartilhado em tempo real.",
    "explanation_why_incorrect": "Snowball é um dispositivo físico de migração offline; S3 é armazenamento de objetos; e Glacier é voltado para arquivamento de longo prazo.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 10,
    "type": "single",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.8 Identificar serviços de gerenciamento, governança e AWS Marketplace",
    "what_it_tests": "O AWS Marketplace é um catálogo digital com milhares de listagens de software de fornecedores independentes (ISVs) para encontrar, testar, comprar e implantar na AWS.",
    "question": "______ é uma loja de software online que ajuda os clientes a encontrar, comprar e começar a usar imediatamente o software e os serviços executados na AWS.",
    "options": [
      {
        "id": "A",
        "text": "AWS IQ"
      },
      {
        "id": "B",
        "text": "Amazon.com"
      },
      {
        "id": "C",
        "text": "AWS Marketplace"
      },
      {
        "id": "D",
        "text": "Reserved Instance Marketplace"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "O AWS Marketplace é um catálogo digital com milhares de listagens de software de fornecedores independentes (ISVs) para encontrar, testar, comprar e implantar na AWS.",
    "explanation_why_correct": "O **AWS Marketplace** é a loja de software online onde clientes podem buscar, comprar e implantar rapidamente soluções de terceiros que rodam na AWS.",
    "explanation_why_incorrect": "AWS IQ conecta clientes a especialistas freelancers certificados; Amazon.com é e-commerce de varejo; e RI Marketplace vende apenas reservas EC2 de terceiros.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 11,
    "type": "multi",
    "category": "Cobrança, Preços e Suporte da AWS (12%)",
    "category_en": "Cobrança, Preços e Suporte da AWS (12%)",
    "objective": "4.1 Comparar os diferentes modelos de preços da AWS",
    "what_it_tests": "Tanto o Amazon EC2 quanto o Amazon RDS oferecem a opção de compra de Instâncias Reservadas (Reserved Instances) para compromissos de 1 ou 3 anos com desconto.",
    "question": "Quais dos serviços abaixo permite você comprar instâncias Reservadas? (Selecione DUAS)",
    "options": [
      {
        "id": "A",
        "text": "AWS Elastic Beanstalk"
      },
      {
        "id": "B",
        "text": "Amazon EC2"
      },
      {
        "id": "C",
        "text": "Amazon EKS"
      },
      {
        "id": "D",
        "text": "Amazon RDS"
      },
      {
        "id": "E",
        "text": "AWS Batch"
      }
    ],
    "correct_answer": [
      "B",
      "D"
    ],
    "official_rationale": "Tanto o Amazon EC2 quanto o Amazon RDS oferecem a opção de compra de Instâncias Reservadas (Reserved Instances) para compromissos de 1 ou 3 anos com desconto.",
    "explanation_why_correct": "Você pode adquirir **Instâncias Reservadas (RIs)** diretamente no **Amazon EC2 (B)** e no **Amazon RDS (D)** para reduzir os custos em comparação ao modelo sob demanda.",
    "explanation_why_incorrect": "Elastic Beanstalk, EKS e AWS Batch não possuem uma modalidade própria chamada Instância Reservada (você reserva as instâncias EC2 subjacentes).",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 12,
    "type": "single",
    "category": "Cobrança, Preços e Suporte da AWS (12%)",
    "category_en": "Cobrança, Preços e Suporte da AWS (12%)",
    "objective": "4.2 Identificar recursos para gerenciamento de faturamento, orçamento e custos",
    "what_it_tests": "No gabarito deste simulado, o painel de faturamento (AWS Billing Dashboard / Cost Management) centraliza o acesso às ferramentas de gerenciamento e recomendações financeiras.",
    "question": "Qual das opções a seguir fornece acesso a recomendações de compra de Instâncias Reservadas (RI) com base em seu uso anterior e indica oportunidades potenciais de economia em comparação ao uso sob demanda?",
    "options": [
      {
        "id": "A",
        "text": "AWS Cost Explorer - Explorador de Custos"
      },
      {
        "id": "B",
        "text": "AWS Cost and Usage report Relatório de Uso"
      },
      {
        "id": "C",
        "text": "AWS Budgets - Orçamentos"
      },
      {
        "id": "D",
        "text": "AWS Billing Dashboard - Painel de Faturamento"
      }
    ],
    "correct_answer": "D",
    "official_rationale": "No gabarito deste simulado, o painel de faturamento (AWS Billing Dashboard / Cost Management) centraliza o acesso às ferramentas de gerenciamento e recomendações financeiras.",
    "explanation_why_correct": "No gabarito deste simulado, a resposta apontada é **D (AWS Billing Dashboard - Painel de Faturamento)**, que dá acesso ao hub de gerenciamento de custos (nota: na prova oficial, lembre-se também de que o **AWS Cost Explorer** gera relatórios específicos de recomendação de compra de RIs e Savings Plans).",
    "explanation_why_incorrect": "Cost and Usage Report gera planilhas brutas de uso e o AWS Budgets foca em alertas de limites orçamentários.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 13,
    "type": "single",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.7 Identificar serviços de migração e transferência de dados da AWS",
    "what_it_tests": "O AWS Database Migration Service (AWS DMS) permite migrar bancos de dados relacionais e não relacionais para a AWS de forma rápida, segura e sem tempo de inatividade.",
    "question": "Você tem a tarefa de simplificar a migração de seus bancos de dados do servidor local para a AWS. Qual serviço se encaixa melhor para esta finalidade?",
    "options": [
      {
        "id": "A",
        "text": "AWS Snowmobile"
      },
      {
        "id": "B",
        "text": "AWS Database Migration Service"
      },
      {
        "id": "C",
        "text": "AWS Snowball"
      },
      {
        "id": "D",
        "text": "AWS Server Migration Service"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "O AWS Database Migration Service (AWS DMS) permite migrar bancos de dados relacionais e não relacionais para a AWS de forma rápida, segura e sem tempo de inatividade.",
    "explanation_why_correct": "O **AWS Database Migration Service (DMS)** facilita a migração homogênea ou heterogênea de bancos de dados locais para a AWS mantendo o banco de origem operacional.",
    "explanation_why_incorrect": "Snowmobile e Snowball são dispositivos físicos para transferência offline em massa; Server Migration Service (SMS) migra máquinas virtuais inteiras.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 14,
    "type": "single",
    "category": "Cobrança, Preços e Suporte da AWS (12%)",
    "category_en": "Cobrança, Preços e Suporte da AWS (12%)",
    "objective": "4.1 Comparar os diferentes modelos de preços da AWS",
    "what_it_tests": "Para cargas de trabalho previsíveis e contínuas com duração de 1 ou 3 anos, as Instâncias Reservadas oferecem até 72% de economia em relação às instâncias Sob Demanda.",
    "question": "Qual tipo de instância EC2 é mais adequada e econômica se o cliente estiver executando cargas de trabalho de missão crítica continuamente por um ano inteiro?",
    "options": [
      {
        "id": "A",
        "text": "Reservado"
      },
      {
        "id": "B",
        "text": "Dedicado"
      },
      {
        "id": "C",
        "text": "Sob Demanda"
      },
      {
        "id": "D",
        "text": "Spot"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Para cargas de trabalho previsíveis e contínuas com duração de 1 ou 3 anos, as Instâncias Reservadas oferecem até 72% de economia em relação às instâncias Sob Demanda.",
    "explanation_why_correct": "O modelo **Reservado (Reserved Instances)** é o mais econômico para cargas de trabalho de missão crítica com uso contínuo comprometido por 1 ou 3 anos.",
    "explanation_why_incorrect": "Sob Demanda não oferece desconto de longo prazo; Spot pode ser interrompida pela AWS com aviso de 2 minutos; e Dedicado tem custo elevado para isolamento físico.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 15,
    "type": "single",
    "category": "Segurança e Conformidade na AWS (30%)",
    "category_en": "Segurança e Conformidade na AWS (30%)",
    "objective": "2.4 Identificar componentes e recursos para segurança de rede",
    "what_it_tests": "O Security Group (Grupo de Segurança) atua como um firewall virtual stateful no nível da instância (interface de rede ENI) para controlar o tráfego de entrada e saída.",
    "question": "Qual serviço atua como firewall para suas instâncias EC2?",
    "options": [
      {
        "id": "A",
        "text": "Elastic Network Interface - Interface de rede elástica"
      },
      {
        "id": "B",
        "text": "Network ACL - Listas de Controle de Acessos"
      },
      {
        "id": "C",
        "text": "Security Group - Grupo de Segurança"
      },
      {
        "id": "D",
        "text": "VPC - Rede Privada Virtual"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "O Security Group (Grupo de Segurança) atua como um firewall virtual stateful no nível da instância (interface de rede ENI) para controlar o tráfego de entrada e saída.",
    "explanation_why_correct": "O **Security Group (Grupo de Segurança)** funciona como um firewall virtual diretamente associado às instâncias EC2 para permitir tráfego com base em portas, protocolos e origens.",
    "explanation_why_incorrect": "Network ACL atua no nível da sub-rede (stateless); ENI é a placa de rede virtual; e VPC é a rede isolada como um todo.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 16,
    "type": "single",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.6 Identificar serviços de integração de aplicativos da AWS",
    "what_it_tests": "O Amazon Simple Notification Service (Amazon SNS) é um serviço de mensagens pub/sub que permite enviar notificações push diretamente para dispositivos móveis, além de SMS e e-mail.",
    "question": "Um cliente deseja enviar notificações push para seus usuários móveis (mobile) sempre que um novo patch for lançado. Qual serviço é o mais adequado para esta tarefa?",
    "options": [
      {
        "id": "A",
        "text": "SNS"
      },
      {
        "id": "B",
        "text": "SES"
      },
      {
        "id": "C",
        "text": "SQS"
      },
      {
        "id": "D",
        "text": "SMS"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "O Amazon Simple Notification Service (Amazon SNS) é um serviço de mensagens pub/sub que permite enviar notificações push diretamente para dispositivos móveis, além de SMS e e-mail.",
    "explanation_why_correct": "O **Amazon SNS (Simple Notification Service)** permite disparar notificações push móveis, SMS e alertas para milhões de assinantes de um tópico.",
    "explanation_why_incorrect": "SES é exclusivo para envio/recebimento de e-mails; SQS é fila de mensagens por polling; e SMS (Server Migration Service) é para migração de servidores.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 17,
    "type": "single",
    "category": "Segurança e Conformidade na AWS (30%)",
    "category_en": "Segurança e Conformidade na AWS (30%)",
    "objective": "2.3 Identificar recursos e serviços para gerenciamento de acesso",
    "what_it_tests": "No AWS IAM, as Políticas (IAM Policies) são documentos JSON que definem explicitamente quais ações são permitidas ou negadas em quais recursos da AWS.",
    "question": "Qual serviço do IAM é responsável por impor privilégios e controles de acesso em seu ambiente AWS?",
    "options": [
      {
        "id": "A",
        "text": "IAM Role"
      },
      {
        "id": "B",
        "text": "IAM User"
      },
      {
        "id": "C",
        "text": "IAM Policy"
      },
      {
        "id": "D",
        "text": "IAM Group"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "No AWS IAM, as Políticas (IAM Policies) são documentos JSON que definem explicitamente quais ações são permitidas ou negadas em quais recursos da AWS.",
    "explanation_why_correct": "A **IAM Policy (Política do IAM)** é o documento que define e impõe as permissões e controles de acesso quando anexada a usuários, grupos ou funções.",
    "explanation_why_incorrect": "IAM User, IAM Group e IAM Role são identidades (quem solicita o acesso), mas só têm privilégios por meio das IAM Policies anexadas a elas.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 18,
    "type": "single",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.4 Identificar os serviços de rede e conectividade híbrida da AWS",
    "what_it_tests": "Uma conexão AWS Site-to-Site VPN criptografada com IPsec requer um Virtual Private Gateway (VPN Gateway) na VPC e um Customer Gateway (Gateway do cliente) no datacenter local.",
    "question": "Qual das opções a seguir você deve configurar para conectar sua rede VPC da AWS à sua rede local por meio de um túnel IPsec?",
    "options": [
      {
        "id": "A",
        "text": "Um NAT Gateway em sua subnet privada conectado com sua rede on-premises"
      },
      {
        "id": "B",
        "text": "Um VPN Gateway em sua VPC conectado ao Gateway do cliente em sua rede on-premises"
      },
      {
        "id": "C",
        "text": "Conexão VPC Peering entre sua rede on-premises e VPC"
      },
      {
        "id": "D",
        "text": "Um dispositivo de NAT Gateway no seu ambiente on-premises conectado ao seu VPC Internet Gateway"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "Uma conexão AWS Site-to-Site VPN criptografada com IPsec requer um Virtual Private Gateway (VPN Gateway) na VPC e um Customer Gateway (Gateway do cliente) no datacenter local.",
    "explanation_why_correct": "Para estabelecer um túnel IPsec VPN entre a VPC e o datacenter local, você conecta um **VPN Gateway na VPC ao Customer Gateway (Gateway do cliente) na rede on-premises**.",
    "explanation_why_incorrect": "NAT Gateway serve apenas para saída de internet de sub-redes privadas; VPC Peering conecta apenas duas VPCs da AWS entre si.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 19,
    "type": "single",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.8 Identificar serviços de monitoramento e observabilidade da AWS",
    "what_it_tests": "O Amazon CloudWatch monitora métricas de recursos da AWS (como utilização de CPU do EC2) e permite configurar alarmes que disparam notificações ou ações automáticas.",
    "question": "Qual serviço permite você criar alarmes que notificam quando o limite de CPU da EC2 é ultrapassado?",
    "options": [
      {
        "id": "A",
        "text": "Amazon CloudWatch"
      },
      {
        "id": "B",
        "text": "AWS Auto Scaling"
      },
      {
        "id": "C",
        "text": "Amazon SNS"
      },
      {
        "id": "D",
        "text": "AWS Config"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "O Amazon CloudWatch monitora métricas de recursos da AWS (como utilização de CPU do EC2) e permite configurar alarmes que disparam notificações ou ações automáticas.",
    "explanation_why_correct": "O **Amazon CloudWatch** coleta métricas de desempenho (como uso de CPU da instância EC2) e permite criar **CloudWatch Alarms** quando um limite é ultrapassado.",
    "explanation_why_incorrect": "Auto Scaling ajusta a capacidade com base nos alarmes do CloudWatch; SNS apenas entrega a mensagem; e AWS Config avalia alterações de configuração.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 20,
    "type": "single",
    "category": "Cobrança, Preços e Suporte da AWS (12%)",
    "category_en": "Cobrança, Preços e Suporte da AWS (12%)",
    "objective": "4.2 Identificar recursos para gerenciamento de faturamento e AWS Organizations",
    "what_it_tests": "O AWS Organizations permite agrupar múltiplas contas AWS e ativar o Faturamento Consolidado (Consolidated Billing), somando o uso de todas as contas para alcançar faixas de desconto por volume.",
    "question": "Você tem múltiplas contas AWS em sua organização. Como você pode tirar uma vantagem disso para economizar em seus custos mensais?",
    "options": [
      {
        "id": "A",
        "text": "Utilize o AWS Organizations e ative o faturamento consolidado"
      },
      {
        "id": "B",
        "text": "Configure um budget para cada conta para minimizar os gastos"
      },
      {
        "id": "C",
        "text": "Crie um grupo do IAM contendo todas suas contas AWS e ative o faturamento consolidado"
      },
      {
        "id": "D",
        "text": "Migre todos os recursos para uma conta central para conseguir uma vantagem de descontos de volume"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "O AWS Organizations permite agrupar múltiplas contas AWS e ativar o Faturamento Consolidado (Consolidated Billing), somando o uso de todas as contas para alcançar faixas de desconto por volume.",
    "explanation_why_correct": "Ao usar o **AWS Organizations com faturamento consolidado**, o uso de recursos de todas as contas é combinado, permitindo aproveitar descontos por volume e compartilhar RIs/Savings Plans.",
    "explanation_why_incorrect": "Budgets apenas alerta sobre gastos; grupos do IAM não agrupam contas AWS; e migrar tudo para uma única conta perde o isolamento de segurança e governança.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 21,
    "type": "multi",
    "category": "Cobrança, Preços e Suporte da AWS (12%)",
    "category_en": "Cobrança, Preços e Suporte da AWS (12%)",
    "objective": "4.1 Comparar os diferentes modelos de preços da AWS",
    "what_it_tests": "Ao comprar uma Instância Reservada (Padrão ou Conversível), a AWS oferece três opções de pagamento: Pagamento total adiantado (All Upfront), Pagamento parcial adiantado (Partial Upfront) e Sem pagamento adiantado (No Upfront).",
    "question": "Dentro das opções de pagamento abaixo, quais opções você pode escolher quando você compra uma Instância reservada padrão ou conversível? (Selecione DUAS)",
    "options": [
      {
        "id": "A",
        "text": "Todos os pagamentos antecipados"
      },
      {
        "id": "B",
        "text": "Pagamento reservado"
      },
      {
        "id": "C",
        "text": "Pagamento Bill-me-Later"
      },
      {
        "id": "D",
        "text": "Pagamento antecipado parcial"
      },
      {
        "id": "E",
        "text": "Pagamento diferido"
      }
    ],
    "correct_answer": [
      "A",
      "D"
    ],
    "official_rationale": "Ao comprar uma Instância Reservada (Padrão ou Conversível), a AWS oferece três opções de pagamento: Pagamento total adiantado (All Upfront), Pagamento parcial adiantado (Partial Upfront) e Sem pagamento adiantado (No Upfront).",
    "explanation_why_correct": "As opções oficiais de pagamento para Instâncias Reservadas presentes na lista são **Todos os pagamentos antecipados / All Upfront (A)** e **Pagamento antecipado parcial / Partial Upfront (D)**.",
    "explanation_why_incorrect": "Pagamento reservado, Bill-me-Later e Pagamento diferido não são modalidades de pagamento de Instâncias Reservadas na AWS.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 22,
    "type": "single",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.5 Identificar serviços de análise de dados (Analytics) da AWS",
    "what_it_tests": "O Amazon EMR (Elastic MapReduce) é a plataforma de Big Data na nuvem para processar grandes volumes de dados usando frameworks código aberto como Apache Spark, Hadoop, Hive e Presto.",
    "question": "Qual serviço da AWS oferece suporte a várias ferramentas de business intelligence, como Apache Spark, para que você possa executar cargas de trabalho de transformação de dados (ETL) e análises a um custo baixo?",
    "options": [
      {
        "id": "A",
        "text": "AWS Elastisearch"
      },
      {
        "id": "B",
        "text": "Amazon EMR"
      },
      {
        "id": "C",
        "text": "Amazon RDS"
      },
      {
        "id": "D",
        "text": "Amazon Redshift"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "O Amazon EMR (Elastic MapReduce) é a plataforma de Big Data na nuvem para processar grandes volumes de dados usando frameworks código aberto como Apache Spark, Hadoop, Hive e Presto.",
    "explanation_why_correct": "O **Amazon EMR** permite provisionar clusters gerenciados para rodar **Apache Spark** e Hadoop em cargas de trabalho de ETL e análise de big data a baixo custo.",
    "explanation_why_incorrect": "OpenSearch/Elasticsearch é para busca e análise de logs; RDS é banco relacional transacional (OLTP); e Redshift é data warehouse colunar SQL.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 23,
    "type": "single",
    "category": "Segurança e Conformidade na AWS (30%)",
    "category_en": "Segurança e Conformidade na AWS (30%)",
    "objective": "2.2 Descrever a governança e auditoria de segurança na AWS",
    "what_it_tests": "O AWS CloudTrail registra todas as chamadas de API e eventos de atividade na conta AWS. Criar uma trilha (Trail) multi-região garante auditoria contínua de todas as regiões.",
    "question": "Qual é o melhor caminho para manter o acompanhamento de todas atividades feita em sua conta AWS?",
    "options": [
      {
        "id": "A",
        "text": "Configure login com MFA para saber quem está em seu ambiente"
      },
      {
        "id": "B",
        "text": "Utilize o Amazon CloudWatch Logs para registrar todas as atividades"
      },
      {
        "id": "C",
        "text": "Use autenticação LDAP em sua conta AWS"
      },
      {
        "id": "D",
        "text": "Crie uma Trail multi-região no AWS CloudTrail"
      }
    ],
    "correct_answer": "D",
    "official_rationale": "O AWS CloudTrail registra todas as chamadas de API e eventos de atividade na conta AWS. Criar uma trilha (Trail) multi-região garante auditoria contínua de todas as regiões.",
    "explanation_why_correct": "Criar uma **Trail multi-região no AWS CloudTrail** é a prática recomendada para registrar e auditar todas as ações e chamadas de API realizadas na conta AWS.",
    "explanation_why_incorrect": "MFA protege o login mas não registra histórico de atividades; CloudWatch Logs foca em logs de aplicações/sistemas; e LDAP é protocolo de diretório.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 24,
    "type": "single",
    "category": "Conceitos da Nuvem AWS (24%)",
    "category_en": "Conceitos da Nuvem AWS (24%)",
    "objective": "1.3 Descrever os princípios de design da arquitetura na nuvem",
    "what_it_tests": "Aplicar mecanismos de cache (como Amazon CloudFront na borda ou Amazon ElastiCache em memória) reduz a carga nos servidores web, diminui a latência e melhora a eficiência de custo.",
    "question": "Seus servidores web estão mostrando uma performance relativamente baixa na entrega de conteúdo. Como você pode aumentar essa performance e eficiência de custo?",
    "options": [
      {
        "id": "A",
        "text": "Solicite que a AWS use cabos de rede mais rápidos para seus servidores"
      },
      {
        "id": "B",
        "text": "Aplique o mecanismo de cache para guardar conteúdos frequentemente acessados."
      },
      {
        "id": "C",
        "text": "Use o protocolo HTTP para diminuir o tempo consumido na descriptografia do conteúdo"
      },
      {
        "id": "D",
        "text": "Rode mais servidores web para distribuir a carga"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "Aplicar mecanismos de cache (como Amazon CloudFront na borda ou Amazon ElastiCache em memória) reduz a carga nos servidores web, diminui a latência e melhora a eficiência de custo.",
    "explanation_why_correct": "**Aplicar o mecanismo de cache para guardar conteúdos frequentemente acessados** melhora drasticamente o tempo de resposta e reduz a necessidade de escalar servidores web.",
    "explanation_why_incorrect": "O cliente não gerencia cabos físicos na AWS; usar HTTP sem criptografia compromete a segurança; e apenas adicionar mais servidores aumenta o custo sem otimizar a entrega.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 25,
    "type": "multi",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.6 Identificar serviços de integração de aplicativos da AWS",
    "what_it_tests": "O Amazon SQS (Simple Queue Service) é um serviço de enfileiramento de mensagens que permite desacoplar e coordenar componentes de microsserviços e fluxos de trabalho.",
    "question": "Qual das seguintes ocasiões você deve usar o sistema de aplicação Amazon SQS? (Selecione DUAS)",
    "options": [
      {
        "id": "A",
        "text": "Se você precisar desacoplar certas partes do seu sistema para melhor tolerância a falhas"
      },
      {
        "id": "B",
        "text": "Se você precisar de um armazenamento durável para seus evento ou mensagens do aplicativo"
      },
      {
        "id": "C",
        "text": "Quando você precisa automatizar determinadas tarefas em seu fluxo de trabalho"
      },
      {
        "id": "D",
        "text": "Quando seu aplicativo requer o uso de protocolos de mensagens padrão do setor para entrega de mensagens"
      },
      {
        "id": "E",
        "text": "Se você precisar enviar notificações push para os assinantes do evento"
      }
    ],
    "correct_answer": [
      "A",
      "C"
    ],
    "official_rationale": "O Amazon SQS (Simple Queue Service) é um serviço de enfileiramento de mensagens que permite desacoplar e coordenar componentes de microsserviços e fluxos de trabalho.",
    "explanation_why_correct": "O **Amazon SQS** é usado para **desacoplar partes do sistema para maior tolerância a falhas (A)** e **automatizar tarefas entre componentes em fluxos de trabalho (C)**.",
    "explanation_why_incorrect": "Notificações push para assinantes são feitas pelo Amazon SNS; protocolos padrão de mensageria da indústria (AMQP, MQTT, STOMP) são papel do Amazon MQ.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 26,
    "type": "single",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.3 Identificar os serviços de armazenamento da AWS",
    "what_it_tests": "No gabarito deste simulado para instância EC2 equilibrando alto desempenho e custo, a resposta selecionada é o volume EBS SSD de uso geral (gp2/gp3).",
    "question": "Você está planejando implantar um aplicativo de streaming de vídeo com cargas de trabalho de alta taxa de transferência acessadas com frequência para sua instância do EC2, o que requer taxa de transferência rápida e consistente. Que tipo de volume do EBS você deve usar para maximizar o desempenho e o custo?",
    "options": [
      {
        "id": "A",
        "text": "Cold HDD"
      },
      {
        "id": "B",
        "text": "HDD otimizado para taxa de transferência"
      },
      {
        "id": "C",
        "text": "SSD IOPS provisionados"
      },
      {
        "id": "D",
        "text": "SSD de uso geral"
      }
    ],
    "correct_answer": "D",
    "official_rationale": "No gabarito deste simulado para instância EC2 equilibrando alto desempenho e custo, a resposta selecionada é o volume EBS SSD de uso geral (gp2/gp3).",
    "explanation_why_correct": "No gabarito deste simulado, a opção correta é **SSD de uso geral (General Purpose SSD - gp2/gp3) (D)**, que oferece excelente relação custo-benefício e desempenho consistente para a maioria das cargas no EC2 (nota: lembre-se também do *Throughput Optimized HDD - st1* quando a prova pedir especificamente HDD para grandes volumes sequenciais de streaming).",
    "explanation_why_incorrect": "Cold HDD (sc1) é para dados acessados com pouca frequência; e Provisioned IOPS SSD (io1/io2) tem alto custo voltado para bancos de dados críticos de I/O intenso.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 27,
    "type": "single",
    "category": "Segurança e Conformidade na AWS (30%)",
    "category_en": "Segurança e Conformidade na AWS (30%)",
    "objective": "2.1 Descrever o Modelo de Responsabilidade Compartilhada da AWS",
    "what_it_tests": "Na nuvem AWS, o cliente mantém total propriedade e controle sobre seus próprios dados, incluindo onde são armazenados, como são criptografados e quem tem acesso a eles.",
    "question": "Qual das seguintes afirmações é verdadeira se você armazena seus dados na AWS?",
    "options": [
      {
        "id": "A",
        "text": "Todos os dados são armazenados de forma durável e redundante em diferentes AZs"
      },
      {
        "id": "B",
        "text": "A AWS tem o direito de revisar quaisquer dados armazenados em busca de possíveis ameaças"
      },
      {
        "id": "C",
        "text": "Você é o proprietário dos dados que armazena na AWS"
      },
      {
        "id": "D",
        "text": "A criptografia é necessária para todos os dados em repouso e em trânsito"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "Na nuvem AWS, o cliente mantém total propriedade e controle sobre seus próprios dados, incluindo onde são armazenados, como são criptografados e quem tem acesso a eles.",
    "explanation_why_correct": "**Você é o proprietário dos dados que armazena na AWS (C).** A AWS nunca acessa nem divulga dados do cliente sem autorização e você decide a região e os controles de segurança.",
    "explanation_why_incorrect": "Nem todos os serviços replicam em múltiplas AZs (ex.: S3 One Zone-IA e EBS ficam em uma única AZ); a AWS não revisa seus dados privados; e a criptografia em todos os serviços depende da configuração do cliente.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 28,
    "type": "multi",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.2 Identificar os serviços de computação e contêineres da AWS",
    "what_it_tests": "O Amazon ECR (Elastic Container Registry) armazena imagens Docker, enquanto o Amazon ECS (Elastic Container Service) orquestra e executa contêineres Docker na AWS.",
    "question": "Qual dos seguintes serviços permite armazenar imagens do Docker e orquestrar contêineres do Docker de maneira simples e econômica? (Selecione DUAS)",
    "options": [
      {
        "id": "A",
        "text": "Amazon ECS"
      },
      {
        "id": "B",
        "text": "AWS CodeCommit"
      },
      {
        "id": "C",
        "text": "AWS Lambda"
      },
      {
        "id": "D",
        "text": "Amazon ECR"
      },
      {
        "id": "E",
        "text": "AWS Batch"
      }
    ],
    "correct_answer": [
      "A",
      "D"
    ],
    "official_rationale": "O Amazon ECR (Elastic Container Registry) armazena imagens Docker, enquanto o Amazon ECS (Elastic Container Service) orquestra e executa contêineres Docker na AWS.",
    "explanation_why_correct": "O **Amazon ECR (D)** é o registro gerenciado para armazenar imagens Docker e o **Amazon ECS (A)** é o serviço de orquestração de contêineres rápido e econômico.",
    "explanation_why_incorrect": "CodeCommit armazena código-fonte Git; AWS Lambda executa funções serverless; e AWS Batch executa jobs de processamento em lote.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 29,
    "type": "single",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.8 Identificar serviços de Infraestrutura como Código (IaC) da AWS",
    "what_it_tests": "O AWS CloudFormation permite modelar toda a infraestrutura em arquivos de template (JSON ou YAML) para provisionar e replicar ambientes inteiros em qualquer região de forma automatizada.",
    "question": "Como você pode facilmente e seguramente copiar sua infraestrutura para outra região AWS?",
    "options": [
      {
        "id": "A",
        "text": "Ative o multi-AZ do RDS para ter um banco de dados similar rodando em uma nova região"
      },
      {
        "id": "B",
        "text": "Tire uma snapshot do EBS em todos os seus dispositivos de armazenamento e copie eles para uma nova região"
      },
      {
        "id": "C",
        "text": "Crie um template do CloudFormation e lançe ele em uma nova região"
      },
      {
        "id": "D",
        "text": "Crie uma AMI dourada que você pode usar para relançar suas instâncias em uma nova região."
      }
    ],
    "correct_answer": "C",
    "official_rationale": "O AWS CloudFormation permite modelar toda a infraestrutura em arquivos de template (JSON ou YAML) para provisionar e replicar ambientes inteiros em qualquer região de forma automatizada.",
    "explanation_why_correct": "Com o **AWS CloudFormation**, você define toda a pilha de recursos em um **template** e pode lançá-lo em outra região AWS com segurança e repetibilidade.",
    "explanation_why_incorrect": "RDS Multi-AZ replica apenas dentro da mesma região; snapshots EBS e AMIs copiam apenas discos/servidores isolados, sem recriar VPC, balanceadores e bancos automaticamente.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 30,
    "type": "multi",
    "category": "Conceitos da Nuvem AWS (24%)",
    "category_en": "Conceitos da Nuvem AWS (24%)",
    "objective": "1.3 Descrever os pilares do AWS Well-Architected Framework",
    "what_it_tests": "O pilar de Excelência Operacional recomenda realizar mudanças pequenas, frequentes e reversíveis (automação via CodeDeploy) e testar respostas a incidentes regularmente com GameDays.",
    "question": "Quais das seguintes práticas demonstra uma excelência operacional na nuvem AWS? (Selecione DUAS)",
    "options": [
      {
        "id": "A",
        "text": "Monitore a métrica de consumo da EC2 e ajuste o tipo de instância de acordo com a métrica"
      },
      {
        "id": "B",
        "text": "Performe mensalmente gamedays em seu ambiente AWS"
      },
      {
        "id": "C",
        "text": "Use aplicações sem servidor como o AWS Lambda"
      },
      {
        "id": "D",
        "text": "Lance sua infraestrutura manualmente via o Console AWS"
      },
      {
        "id": "E",
        "text": "Implante pequenas alterações incrementais em seus servidores de produção usando o AWS CodeDeploy"
      }
    ],
    "correct_answer": [
      "B",
      "E"
    ],
    "official_rationale": "O pilar de Excelência Operacional recomenda realizar mudanças pequenas, frequentes e reversíveis (automação via CodeDeploy) e testar respostas a incidentes regularmente com GameDays.",
    "explanation_why_correct": "No pilar de **Excelência Operacional**, são boas práticas **realizar GameDays mensais (B)** para simular eventos e **implantar pequenas alterações incrementais automatizadas com AWS CodeDeploy (E)**.",
    "explanation_why_incorrect": "Ajustar tipos de instância por métrica e usar serverless pertencem a Eficiência de Performance/Otimização de Custos; mudanças manuais pelo console violam a excelência operacional.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 31,
    "type": "single",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.5 Identificar serviços de banco de dados e analytics da AWS",
    "what_it_tests": "O Amazon Redshift é o serviço de Data Warehouse corporativo em escala de petabytes da AWS, projetado para análises complexas (OLAP) e Business Intelligence.",
    "question": "Qual serviço é o mais usado para análise de dados e data warehouse?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Aurora"
      },
      {
        "id": "B",
        "text": "Amazon DynamoDB"
      },
      {
        "id": "C",
        "text": "Amazon S3"
      },
      {
        "id": "D",
        "text": "Amazon Redshift"
      }
    ],
    "correct_answer": "D",
    "official_rationale": "O Amazon Redshift é o serviço de Data Warehouse corporativo em escala de petabytes da AWS, projetado para análises complexas (OLAP) e Business Intelligence.",
    "explanation_why_correct": "O **Amazon Redshift** é o banco de dados colunar de **Data Warehouse** da AWS, ideal para consultas analíticas rápidas sobre grandes volumes de dados.",
    "explanation_why_incorrect": "Aurora é banco relacional transacional (OLTP); DynamoDB é banco NoSQL chave-valor; e S3 é armazenamento de objetos.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 32,
    "type": "single",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.3 Identificar os serviços de armazenamento da AWS e seu escopo regional/zonal",
    "what_it_tests": "Um volume do Amazon EBS (Elastic Block Store) é criado em uma Zona de Disponibilidade (AZ) específica e só pode ser anexado a instâncias EC2 na mesma AZ.",
    "question": "Qual das opções abaixo está vinculada a uma Zona de Disponibilidade específica onde foi implementado?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Machine Image"
      },
      {
        "id": "B",
        "text": "Amazon EC2 key pairs"
      },
      {
        "id": "C",
        "text": "Amazon EFS"
      },
      {
        "id": "D",
        "text": "EBS volume"
      }
    ],
    "correct_answer": "D",
    "official_rationale": "Um volume do Amazon EBS (Elastic Block Store) é criado em uma Zona de Disponibilidade (AZ) específica e só pode ser anexado a instâncias EC2 na mesma AZ.",
    "explanation_why_correct": "O **volume EBS (D)** está fisicamente vinculado à **Zona de Disponibilidade (AZ)** específica em que foi provisionado.",
    "explanation_why_incorrect": "AMIs, pares de chaves EC2 (Key Pairs) e sistemas de arquivos Amazon EFS possuem escopo Regional (abrangem múltiplas AZs de uma região).",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 33,
    "type": "single",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.8 Identificar recursos de organização e governança na AWS",
    "what_it_tests": "As Tags (etiquetas) são pares de chave-valor que permitem classificar e organizar recursos da AWS por ambiente (dev, staging, prod), departamento ou projeto.",
    "question": "Qual recurso permitirá rotular e classificar suas instâncias do EC2 de acordo com o estágio de implantação (desenvolvimento, preparação, produção)?",
    "options": [
      {
        "id": "A",
        "text": "Metadata da Instância"
      },
      {
        "id": "B",
        "text": "Userdata da Instância"
      },
      {
        "id": "C",
        "text": "Tags da Instância"
      },
      {
        "id": "D",
        "text": "Tipo de Instância"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "As Tags (etiquetas) são pares de chave-valor que permitem classificar e organizar recursos da AWS por ambiente (dev, staging, prod), departamento ou projeto.",
    "explanation_why_correct": "As **Tags da Instância** permitem atribuir metadados personalizados (como `Ambiente=Producao`) para organizar, filtrar e rastrear custos de instâncias EC2.",
    "explanation_why_incorrect": "Instance Metadata fornece dados internos da instância; User Data executa scripts de inicialização (boot); e Instance Type define CPU e memória.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 34,
    "type": "single",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.2 Identificar os serviços de computação e PaaS da AWS",
    "what_it_tests": "O AWS Elastic Beanstalk é um serviço PaaS fácil de usar para implantar e escalar aplicações web; você faz upload do código e o serviço provisiona automaticamente EC2, ELB e Auto Scaling.",
    "question": "Qual serviço irá permitir você rapidamente implementar sua aplicação dentro da nuvem AWS sem ter que construir ou lançar os recursos individuais por si mesmo?",
    "options": [
      {
        "id": "A",
        "text": "Amazon EBS"
      },
      {
        "id": "B",
        "text": "Amazon ECS"
      },
      {
        "id": "C",
        "text": "AWS Elastic Beanstalk"
      },
      {
        "id": "D",
        "text": "Amazon EKS"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "O AWS Elastic Beanstalk é um serviço PaaS fácil de usar para implantar e escalar aplicações web; você faz upload do código e o serviço provisiona automaticamente EC2, ELB e Auto Scaling.",
    "explanation_why_correct": "O **AWS Elastic Beanstalk** provisiona e gerencia automaticamente a infraestrutura subjacente (servidores, balanceamento de carga, escalonamento) a partir do código da sua aplicação.",
    "explanation_why_incorrect": "EBS é armazenamento de bloco; ECS e EKS são orquestradores específicos para contêineres Docker e Kubernetes.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 35,
    "type": "single",
    "category": "Conceitos da Nuvem AWS (24%)",
    "category_en": "Conceitos da Nuvem AWS (24%)",
    "objective": "1.3 Descrever os pilares do AWS Well-Architected Framework",
    "what_it_tests": "O pilar de Eficiência de Performance (Performance Efficiency) concentra-se no uso eficiente de recursos de computação para atender aos requisitos do sistema e manter essa eficiência conforme a demanda muda.",
    "question": "Qual dos seguintes pilares do Well-architected da AWS discute o uso dos recursos de computação corretos para atender aos níveis de demanda, mesmo quando a demanda muda e as tecnologias evoluem?",
    "options": [
      {
        "id": "A",
        "text": "Otimização de Custo"
      },
      {
        "id": "B",
        "text": "Confiabilidade"
      },
      {
        "id": "C",
        "text": "Eficiência de performance"
      },
      {
        "id": "D",
        "text": "Excelência operacional"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "O pilar de Eficiência de Performance (Performance Efficiency) concentra-se no uso eficiente de recursos de computação para atender aos requisitos do sistema e manter essa eficiência conforme a demanda muda.",
    "explanation_why_correct": "O pilar **Eficiência de Performance** trata da seleção dos tipos e tamanhos corretos de recursos com base na carga de trabalho e da evolução contínua conforme novas tecnologias surgem.",
    "explanation_why_incorrect": "Otimização de Custo foca em evitar gastos desnecessários; Confiabilidade foca em recuperação de falhas; e Excelência Operacional foca em processos e automação.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 36,
    "type": "multi",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.3 Identificar os serviços de armazenamento e backup do Amazon EBS",
    "what_it_tests": "Os backups pontuais do Amazon EBS são chamados de Snapshots. Eles são incrementais e armazenados de forma durável e automática no Amazon S3 (gerenciado pela AWS).",
    "question": "Você está planejando criar backups pontuais de seus volumes do Amazon EBS. Quais das seguintes afirmações são corretas? (Selecione DOIS.)",
    "options": [
      {
        "id": "A",
        "text": "A instância terá que ser interrompida primeiro para iniciar o backup do EBS"
      },
      {
        "id": "B",
        "text": "Você pode criar backups pontuais por meio de snapshots do EBS"
      },
      {
        "id": "C",
        "text": "Os backups do EBS podem ser armazenados de forma durável no Amazon S3"
      },
      {
        "id": "D",
        "text": "Você pode fazer backups do EBS criando Amazon Machine Images (AMIs)"
      },
      {
        "id": "E",
        "text": "Fazer backup do mesmo volume do EBS criará um novo backup de todo o volume"
      }
    ],
    "correct_answer": [
      "B",
      "C"
    ],
    "official_rationale": "Os backups pontuais do Amazon EBS são chamados de Snapshots. Eles são incrementais e armazenados de forma durável e automática no Amazon S3 (gerenciado pela AWS).",
    "explanation_why_correct": "Você cria backups pontuais de volumes EBS por meio de **snapshots do EBS (B)**, que são **armazenados de forma durável no Amazon S3 (C)**.",
    "explanation_why_incorrect": "Não é obrigatório parar a instância para tirar um snapshot; AMIs servem para imagens de máquinas completas; e os snapshots são incrementais (copiam apenas os blocos alterados).",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 37,
    "type": "single",
    "category": "Segurança e Conformidade na AWS (30%)",
    "category_en": "Segurança e Conformidade na AWS (30%)",
    "objective": "2.3 Identificar recursos e serviços para gerenciamento de acesso no IAM",
    "what_it_tests": "O alias de conta do IAM (Account Alias) permite substituir o ID numérico de 12 dígitos da conta AWS por um nome amigável na URL de login do Console de Gerenciamento.",
    "question": "O AWS Identity and Access Management (IAM) permite você gerenciar acessos aos serviços AWS e recursos de forma segura. Qual das seguintes opções descreve melhor o que é um alias de conta no IAM?",
    "options": [
      {
        "id": "A",
        "text": "Um substituto para um ID de conta no endereço da web da sua conta"
      },
      {
        "id": "B",
        "text": "O valor numérico do ID da sua conta"
      },
      {
        "id": "C",
        "text": "Seu nome de usuário raiz do IAM"
      },
      {
        "id": "D",
        "text": "O nome que a AWS atribui à sua conta"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "O alias de conta do IAM (Account Alias) permite substituir o ID numérico de 12 dígitos da conta AWS por um nome amigável na URL de login do Console de Gerenciamento.",
    "explanation_why_correct": "Um **alias de conta no IAM** funciona como **um substituto amigável para o ID de conta de 12 dígitos na URL de login web** (ex.: `https://meu-alias.signin.aws.amazon.com/console`).",
    "explanation_why_incorrect": "Não é o número de 12 dígitos em si, nem o usuário raiz (root user), nem um nome gerado automaticamente pela AWS.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 38,
    "type": "single",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.4 Identificar recursos de balanceamento de carga (Elastic Load Balancing)",
    "what_it_tests": "O Elastic Load Balancing usa verificações de integridade (Health Checks) para testar as instâncias registradas e roteia tráfego apenas para instâncias saudáveis (InService).",
    "question": "Você notou que não pode acessar um de seus servidores Web EC2 atrás de um ELB sempre que inserir o nome DNS do seu balanceador de carga. Qual das seguintes opções você deve verificar primeiro para obter mais informações sobre o problema?",
    "options": [
      {
        "id": "A",
        "text": "AWS CloudTrail"
      },
      {
        "id": "B",
        "text": "AWS Config"
      },
      {
        "id": "C",
        "text": "ELB Health Check"
      },
      {
        "id": "D",
        "text": "Amazon CloudWatch"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "O Elastic Load Balancing usa verificações de integridade (Health Checks) para testar as instâncias registradas e roteia tráfego apenas para instâncias saudáveis (InService).",
    "explanation_why_correct": "Você deve verificar primeiro o **ELB Health Check**, pois se uma instância EC2 falhar na verificação de integridade, o balanceador de carga deixará de enviar tráfego para ela.",
    "explanation_why_incorrect": "CloudTrail registra chamadas de API; AWS Config audita configurações de recursos; e verificar diretamente o Health Check no ELB diagnostica imediatamente se o destino está fora de serviço.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 39,
    "type": "single",
    "category": "Segurança e Conformidade na AWS (30%)",
    "category_en": "Segurança e Conformidade na AWS (30%)",
    "objective": "2.4 Identificar serviços de proteção de rede e mitigação de DDoS",
    "what_it_tests": "O AWS Shield é um serviço gerenciado de proteção contra ataques de Negação de Serviço Distribuída (DDoS) que protege aplicações executadas na AWS.",
    "question": "Qual serviço da AWS protege seus recursos contra ataques DDoS comuns de maneira proativa?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Inspector"
      },
      {
        "id": "B",
        "text": "AWS Shield"
      },
      {
        "id": "C",
        "text": "AWS WAF"
      },
      {
        "id": "D",
        "text": "Security Groups"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "O AWS Shield é um serviço gerenciado de proteção contra ataques de Negação de Serviço Distribuída (DDoS) que protege aplicações executadas na AWS.",
    "explanation_why_correct": "O **AWS Shield** (Standard gratuito para todos os clientes e Advanced pago) protege proativamente recursos da AWS contra ataques **DDoS**.",
    "explanation_why_incorrect": "Amazon Inspector avalia vulnerabilidades em EC2/ECR/Lambda; AWS WAF filtra ataques web na camada 7 (SQLi/XSS); e Security Groups são firewalls de instância.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 40,
    "type": "multi",
    "category": "Segurança e Conformidade na AWS (30%)",
    "category_en": "Segurança e Conformidade na AWS (30%)",
    "objective": "2.4 Identificar componentes de segurança de rede em uma Amazon VPC",
    "what_it_tests": "Dentro de uma Amazon VPC, a segurança de tráfego é controlada em duas camadas: Security Groups (nível de instância, stateful) e Network ACLs (nível de sub-rede, stateless).",
    "question": "Quais dos seguintes serviços da AWS são usados para assegurar sua rede VPC? (Selecione DOIS)",
    "options": [
      {
        "id": "A",
        "text": "Security group"
      },
      {
        "id": "B",
        "text": "Network ACL"
      },
      {
        "id": "C",
        "text": "IAM"
      },
      {
        "id": "D",
        "text": "Application load balancer"
      },
      {
        "id": "E",
        "text": "CloudFront"
      }
    ],
    "correct_answer": [
      "A",
      "B"
    ],
    "official_rationale": "Dentro de uma Amazon VPC, a segurança de tráfego é controlada em duas camadas: Security Groups (nível de instância, stateful) e Network ACLs (nível de sub-rede, stateless).",
    "explanation_why_correct": "Os dois mecanismos nativos para proteger o tráfego dentro de uma VPC são o **Security Group (A)** e a **Network ACL (B)**.",
    "explanation_why_incorrect": "IAM controla permissões de API/identidade; Application Load Balancer distribui tráfego; e CloudFront é uma CDN.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 41,
    "type": "multi",
    "category": "Segurança e Conformidade na AWS (30%)",
    "category_en": "Segurança e Conformidade na AWS (30%)",
    "objective": "2.4 Identificar componentes e regras de Security Groups",
    "what_it_tests": "Em um Security Group, a origem/destino de uma regra pode ser um endereço IP/intervalo CIDR (como 203.0.113.0/24) ou o ID de outro Security Group.",
    "question": "Quais das seguintes regras do grupo de segurança são válidas? (Selecione DUAS)",
    "options": [
      {
        "id": "A",
        "text": "Regra TCP de entrada com ID de instância como origem"
      },
      {
        "id": "B",
        "text": "Regra HTTPS de saída com o nome de host como destino"
      },
      {
        "id": "C",
        "text": "Regra HTTP de entrada com ID do grupo de segurança com origem"
      },
      {
        "id": "D",
        "text": "Regra RDP de entrada com um intervalo de endereços como origem"
      },
      {
        "id": "E",
        "text": "Regra MYSQL de saída com endereço IP com origem"
      }
    ],
    "correct_answer": [
      "C",
      "D"
    ],
    "official_rationale": "Em um Security Group, a origem/destino de uma regra pode ser um endereço IP/intervalo CIDR (como 203.0.113.0/24) ou o ID de outro Security Group.",
    "explanation_why_correct": "Regras válidas de Security Group permitem especificar um **ID de Security Group como origem (C)** ou um **intervalo de endereços IP (CIDR) como origem (D)**.",
    "explanation_why_incorrect": "Security Groups não aceitam ID de instância EC2 nem nomes de host (DNS) como origem ou destino, e regras de saída usam destino (não origem).",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 42,
    "type": "multi",
    "category": "Segurança e Conformidade na AWS (30%)",
    "category_en": "Segurança e Conformidade na AWS (30%)",
    "objective": "2.1 Descrever o Modelo de Responsabilidade Compartilhada da AWS",
    "what_it_tests": "No modelo de responsabilidade compartilhada, o cliente é responsável pela segurança NA nuvem, o que inclui gerenciar usuários/acessos no IAM e gerenciar os dados armazenados.",
    "question": "Quais das opções abaixo são responsabilidade do cliente na nuvem AWS? (Selecione DUAS)",
    "options": [
      {
        "id": "A",
        "text": "Garantir que os serviços da AWS estejam em conformidade com os padrões exigidos"
      },
      {
        "id": "B",
        "text": "Atualizando chipsets para o produto mais recente disponível comercialmente"
      },
      {
        "id": "C",
        "text": "Gerenciando usuários em sua conta da AWS"
      },
      {
        "id": "D",
        "text": "Descarte de unidades de disco"
      },
      {
        "id": "E",
        "text": "Gerenciando dados armazenados nos recursos da AWS"
      }
    ],
    "correct_answer": [
      "C",
      "E"
    ],
    "official_rationale": "No modelo de responsabilidade compartilhada, o cliente é responsável pela segurança NA nuvem, o que inclui gerenciar usuários/acessos no IAM e gerenciar os dados armazenados.",
    "explanation_why_correct": "São responsabilidades do cliente **gerenciar usuários em sua conta da AWS (C)** e **gerenciar os dados armazenados nos recursos da AWS (E)**.",
    "explanation_why_incorrect": "Conformidade física dos serviços AWS, atualização de chipsets de hardware e descarte seguro de discos físicos são responsabilidades exclusivas da AWS.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 43,
    "type": "single",
    "category": "Conceitos da Nuvem AWS (24%)",
    "category_en": "Conceitos da Nuvem AWS (24%)",
    "objective": "1.3 Descrever os princípios de design da arquitetura na nuvem",
    "what_it_tests": "O recurso Multipart Upload do Amazon S3 divide um arquivo grande em partes menores e faz o upload delas simultaneamente em várias threads, exemplificando o princípio \"Pense paralelo\" (Think parallel).",
    "question": "O uso de multithreading em suas solicitações do Amazon S3 por meio da API Multipart Upload é um exemplo de qual prática recomendada da nuvem AWS?",
    "options": [
      {
        "id": "A",
        "text": "Permitir arquiteturas evolutivas"
      },
      {
        "id": "B",
        "text": "Desacoplar seus componentes"
      },
      {
        "id": "C",
        "text": "Implementar elasticidade"
      },
      {
        "id": "D",
        "text": "Pense paralelo"
      }
    ],
    "correct_answer": "D",
    "official_rationale": "O recurso Multipart Upload do Amazon S3 divide um arquivo grande em partes menores e faz o upload delas simultaneamente em várias threads, exemplificando o princípio \"Pense paralelo\" (Think parallel).",
    "explanation_why_correct": "Dividir objetos em partes e enviá-los simultaneamente via S3 Multipart Upload é um exemplo clássico do princípio de design **\"Pense paralelo\" (Think parallel)**.",
    "explanation_why_incorrect": "Não se trata de arquitetura evolutiva, desacoplamento de fila ou autoescalonamento elástico de servidores.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 44,
    "type": "single",
    "category": "Cobrança, Preços e Suporte da AWS (12%)",
    "category_en": "Cobrança, Preços e Suporte da AWS (12%)",
    "objective": "4.3 Identificar recursos técnicos e opções do AWS Support",
    "what_it_tests": "Os planos Basic e Developer oferecem acesso apenas às verificações principais do AWS Trusted Advisor; o acesso total a todas as verificações começa no plano Business Support.",
    "question": "Qual é o plano de suporte mínimo, que você precisa contratar, para ter acesso total às verificações do Trusted Advisor?",
    "options": [
      {
        "id": "A",
        "text": "Enterprise"
      },
      {
        "id": "B",
        "text": "Basic"
      },
      {
        "id": "C",
        "text": "Developer"
      },
      {
        "id": "D",
        "text": "Business"
      }
    ],
    "correct_answer": "D",
    "official_rationale": "Os planos Basic e Developer oferecem acesso apenas às verificações principais do AWS Trusted Advisor; o acesso total a todas as verificações começa no plano Business Support.",
    "explanation_why_correct": "O plano de suporte mínimo que libera **acesso total a todas as verificações do AWS Trusted Advisor** é o plano **Business (D)**.",
    "explanation_why_incorrect": "Basic e Developer oferecem apenas as verificações básicas de segurança e cotas; Enterprise também oferece acesso total, mas não é o plano mínimo.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 45,
    "type": "multi",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.4 Identificar serviços de alta disponibilidade e roteamento de tráfego",
    "what_it_tests": "Tanto o Amazon Route 53 (via DNS failover e health checks) quanto o Elastic Load Balancing (via health checks nas instâncias) redirecionam o tráfego automaticamente para recursos íntegros.",
    "question": "Quais dos seguintes serviços permitem mascarar o tempo de inatividade de seu aplicativo redirecionando seu tráfego para instâncias íntegras? (Selecione DOIS.)",
    "options": [
      {
        "id": "A",
        "text": "Amazon CloudFront"
      },
      {
        "id": "B",
        "text": "Amazon Route 53"
      },
      {
        "id": "C",
        "text": "AWS ELB (Elastic Load Balancing)"
      },
      {
        "id": "D",
        "text": "VPC Route tables"
      },
      {
        "id": "E",
        "text": "AWS EC2 Auto Scaling"
      }
    ],
    "correct_answer": [
      "B",
      "C"
    ],
    "official_rationale": "Tanto o Amazon Route 53 (via DNS failover e health checks) quanto o Elastic Load Balancing (via health checks nas instâncias) redirecionam o tráfego automaticamente para recursos íntegros.",
    "explanation_why_correct": "O **Amazon Route 53 (B)** e o **AWS ELB - Elastic Load Balancing (C)** realizam verificações de integridade e redirecionam o tráfego apenas para instâncias saudáveis.",
    "explanation_why_incorrect": "CloudFront é CDN de cache; VPC Route Tables são tabelas estáticas de sub-rede; e EC2 Auto Scaling substitui instâncias, mas quem roteia o tráfego de rede é o ELB/Route 53.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 46,
    "type": "single",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.4 Identificar os serviços de rede e DNS da AWS",
    "what_it_tests": "O Amazon Route 53 é um serviço global de DNS com políticas de roteamento de Failover que permite redirecionar o tráfego para outra Região da AWS em caso de desastre.",
    "question": "Qual dos seguintes serviços poderá redirecionar o tráfego para suas instâncias secundárias do EC2 em outra região durante a recuperação de desastres?",
    "options": [
      {
        "id": "A",
        "text": "VPC Peering"
      },
      {
        "id": "B",
        "text": "Amazon VPC"
      },
      {
        "id": "C",
        "text": "AWS ELB"
      },
      {
        "id": "D",
        "text": "Amazon Route 53"
      }
    ],
    "correct_answer": "D",
    "official_rationale": "O Amazon Route 53 é um serviço global de DNS com políticas de roteamento de Failover que permite redirecionar o tráfego para outra Região da AWS em caso de desastre.",
    "explanation_why_correct": "O **Amazon Route 53** opera globalmente e pode detectar falhas em uma região primária e redirecionar o tráfego DNS para instâncias EC2 em outra região.",
    "explanation_why_incorrect": "Amazon VPC e AWS ELB são recursos regionais (atuam dentro de uma única região), e VPC Peering apenas conecta redes privadas sem fazer failover de DNS público.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 47,
    "type": "single",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.1 Descrever ferramentas de implantação (CI/CD) na AWS",
    "what_it_tests": "O AWS CodeDeploy automatiza a implantação de código de aplicativos (a partir do GitHub, S3 ou Bitbucket) diretamente em instâncias Amazon EC2, servidores locais ou Lambda.",
    "question": "Um cliente deseja executar seu aplicativo na nuvem por meio de instâncias do EC2. Seu código está atualmente armazenado no Github. Qual ferramenta eles poderiam usar para lançar seu código em instâncias do EC2?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Kinesis"
      },
      {
        "id": "B",
        "text": "AWS CodeCommit"
      },
      {
        "id": "C",
        "text": "AWS CloudFormation"
      },
      {
        "id": "D",
        "text": "AWS CodeDeploy"
      }
    ],
    "correct_answer": "D",
    "official_rationale": "O AWS CodeDeploy automatiza a implantação de código de aplicativos (a partir do GitHub, S3 ou Bitbucket) diretamente em instâncias Amazon EC2, servidores locais ou Lambda.",
    "explanation_why_correct": "O **AWS CodeDeploy** integra-se nativamente ao GitHub para automatizar a implantação de código em frotas de instâncias Amazon EC2.",
    "explanation_why_incorrect": "Kinesis é para streaming de dados; CodeCommit é um repositório Git (concorrente do GitHub); e CloudFormation provisiona infraestrutura, não deploy contínuo de código Git.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 48,
    "type": "single",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.4 Identificar os benefícios do Elastic Load Balancing (ELB)",
    "what_it_tests": "O Elastic Load Balancing distribui o tráfego de entrada entre múltiplos destinos (como instâncias EC2) em conjunto com o Auto Scaling para proporcionar elasticidade conforme a demanda.",
    "question": "Qual é o principal motivo pelo qual você deve usar um balanceador de carga elástico?",
    "options": [
      {
        "id": "A",
        "text": "ELBs ajudam a reforçar a segurança por meio do uso de grupos de segurança"
      },
      {
        "id": "B",
        "text": "Os ELBs ajudam você a dimensionar facilmente sem intervenção manual"
      },
      {
        "id": "C",
        "text": "Os ELBs fornecem elasticidade direcionando o tráfego para um número mínimo de instâncias necessárias para lidar com a carga de tráfego"
      },
      {
        "id": "D",
        "text": "ELBs aumentam o desempenho geral do seu site"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "O Elastic Load Balancing distribui o tráfego de entrada entre múltiplos destinos (como instâncias EC2) em conjunto com o Auto Scaling para proporcionar elasticidade conforme a demanda.",
    "explanation_why_correct": "No gabarito deste simulado, a resposta correta é **C: Os ELBs fornecem elasticidade direcionando o tráfego para as instâncias necessárias para lidar com a carga de tráfego**.",
    "explanation_why_incorrect": "ELBs distribuem a carga entre múltiplas instâncias saudáveis para evitar sobrecarga de um único servidor e suportar arquiteturas elásticas.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 49,
    "type": "single",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.8 Identificar serviços de gerenciamento de configuração na AWS",
    "what_it_tests": "O AWS OpsWorks fornece instâncias gerenciadas de ferramentas de automação de configuração Chef Automate e Puppet Enterprise.",
    "question": "Qual serviço da AWS permite hospedar sua própria infraestrutura Puppet Enterprise?",
    "options": [
      {
        "id": "A",
        "text": "AWS Service Catalog"
      },
      {
        "id": "B",
        "text": "AWS Elastic Beanstalk"
      },
      {
        "id": "C",
        "text": "AWS CloudFormation"
      },
      {
        "id": "D",
        "text": "AWS Opsworks"
      }
    ],
    "correct_answer": "D",
    "official_rationale": "O AWS OpsWorks fornece instâncias gerenciadas de ferramentas de automação de configuração Chef Automate e Puppet Enterprise.",
    "explanation_why_correct": "O **AWS OpsWorks** (especificamente o *AWS OpsWorks for Puppet Enterprise*) permite hospedar e gerenciar sua infraestrutura **Puppet Enterprise** e Chef na AWS.",
    "explanation_why_incorrect": "Service Catalog gerencia portfólios aprovados; Elastic Beanstalk é PaaS para web apps; e CloudFormation usa templates próprios em YAML/JSON.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 50,
    "type": "single",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.9 Identificar serviços de computação para usuário final (End-User Computing)",
    "what_it_tests": "O Amazon WorkSpaces é um serviço totalmente gerenciado de Desktop como Serviço (DaaS) que provisiona áreas de trabalho virtuais Windows ou Linux em minutos.",
    "question": "Qual serviço da AWS permite provisionar desktops Windows ou Linux em apenas alguns minutos e pode ser dimensionado facilmente para fornecer milhares de desktops aos funcionários?",
    "options": [
      {
        "id": "A",
        "text": "AWS Systems Manager"
      },
      {
        "id": "B",
        "text": "Amazon Workspaces"
      },
      {
        "id": "C",
        "text": "AWS Organizations"
      },
      {
        "id": "D",
        "text": "AWS Cloud9"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "O Amazon WorkSpaces é um serviço totalmente gerenciado de Desktop como Serviço (DaaS) que provisiona áreas de trabalho virtuais Windows ou Linux em minutos.",
    "explanation_why_correct": "O **Amazon WorkSpaces** permite provisionar desktops virtuais Windows ou Linux na nuvem de forma segura e escalar para milhares de colaboradores.",
    "explanation_why_incorrect": "Systems Manager gerencia operações de servidores; Organizations gerencia múltiplas contas AWS; e Cloud9 é uma IDE no navegador para escrita de código.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 51,
    "type": "single",
    "category": "Conceitos da Nuvem AWS (24%)",
    "category_en": "Conceitos da Nuvem AWS (24%)",
    "objective": "1.2 Descrever os benefícios da computação sem servidor (Serverless)",
    "what_it_tests": "O principal benefício da computação Serverless é eliminar a sobrecarga operacional de provisionar, escalar e aplicar patches em servidores, permitindo focar no código do aplicativo.",
    "question": "Qual é o principal benefício que você recebe ao utilizar serviços de computação Sem Servidor?",
    "options": [
      {
        "id": "A",
        "text": "Segurança é totalmente gerenciada para você pelo provedor de serviços"
      },
      {
        "id": "B",
        "text": "Serviços Sem Servidor são altamente disponíveis para que você não precise se preocupar com o tempo de inatividade"
      },
      {
        "id": "C",
        "text": "Você obtém custos gerais mais baratos em comparação com o uso de serviços sem servidor"
      },
      {
        "id": "D",
        "text": "Serviços Sem Servidor removem a sobrecarga de gerenciamento para que você possa se concentrar em seu aplicativo."
      }
    ],
    "correct_answer": "D",
    "official_rationale": "O principal benefício da computação Serverless é eliminar a sobrecarga operacional de provisionar, escalar e aplicar patches em servidores, permitindo focar no código do aplicativo.",
    "explanation_why_correct": "**Serviços Sem Servidor removem a sobrecarga de gerenciamento de infraestrutura para que você possa se concentrar em seu aplicativo (D).**",
    "explanation_why_incorrect": "A segurança continua sendo compartilhada (o cliente protege código, dados e permissões IAM) e o foco central do serverless é abstrair o gerenciamento de servidores.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 52,
    "type": "single",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.3 Identificar as classes de armazenamento do Amazon S3",
    "what_it_tests": "O Amazon S3 Glacier Deep Archive é a classe de armazenamento de menor custo do Amazon S3, projetada para retenção de longo prazo de dados acessados uma ou duas vezes por ano, com restauração padrão em até 12 horas.",
    "question": "Você tem um grande número de arquivos de log que serão arquivados na AWS por um longo tempo e devem ter um tempo de recuperação de 12 horas ou menos. Qual serviço é a classe de armazenamento mais econômica para essa finalidade?",
    "options": [
      {
        "id": "A",
        "text": "Amazon S3 Glacier"
      },
      {
        "id": "B",
        "text": "Amazon S3 Glacier Deep Archive"
      },
      {
        "id": "C",
        "text": "Amazon S3 Standard-IA"
      },
      {
        "id": "D",
        "text": "Amazon EBS Cold HDD"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "O Amazon S3 Glacier Deep Archive é a classe de armazenamento de menor custo do Amazon S3, projetada para retenção de longo prazo de dados acessados uma ou duas vezes por ano, com restauração padrão em até 12 horas.",
    "explanation_why_correct": "O **Amazon S3 Glacier Deep Archive** é a opção mais econômica para arquivamento de longo prazo quando um tempo de recuperação de até **12 horas** é aceitável.",
    "explanation_why_incorrect": "S3 Glacier Flexible Retrieval e S3 Standard-IA têm custo de armazenamento por GB maior; EBS Cold HDD é armazenamento de bloco anexado ao EC2.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 53,
    "type": "single",
    "category": "Segurança e Conformidade na AWS (30%)",
    "category_en": "Segurança e Conformidade na AWS (30%)",
    "objective": "2.2 Descrever os serviços de auditoria e governança na AWS",
    "what_it_tests": "O AWS CloudTrail registra todas as chamadas de API feitas na conta AWS, incluindo quem executou a ação (usuário IAM), qual ação foi executada (`TerminateInstances`), quando e de qual IP.",
    "question": "Um cliente precisa identificar o usuário IAM que terminou em produção sua instância EC2 na AWS. Qual serviço você deve usar nessa situação?",
    "options": [
      {
        "id": "A",
        "text": "AWS Systems Manager"
      },
      {
        "id": "B",
        "text": "AWS CloudTrail"
      },
      {
        "id": "C",
        "text": "Amazon AppStream 2.0"
      },
      {
        "id": "D",
        "text": "Amazon CloudWatch"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "O AWS CloudTrail registra todas as chamadas de API feitas na conta AWS, incluindo quem executou a ação (usuário IAM), qual ação foi executada (`TerminateInstances`), quando e de qual IP.",
    "explanation_why_correct": "O **AWS CloudTrail** registra o histórico de chamadas de API na conta, permitindo identificar exatamente qual usuário do IAM encerrou (`TerminateInstances`) uma instância EC2.",
    "explanation_why_incorrect": "CloudWatch monitora métricas de performance; Systems Manager gerencia sistemas operacionais; e AppStream 2.0 transmite aplicativos desktop.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 54,
    "type": "single",
    "category": "Segurança e Conformidade na AWS (30%)",
    "category_en": "Segurança e Conformidade na AWS (30%)",
    "objective": "2.2 Descrever o funcionamento do AWS CloudTrail",
    "what_it_tests": "Ao criar uma trilha (Trail) no Console de Gerenciamento do AWS CloudTrail, por padrão ela é configurada como multi-região, aplicando-se a todas as Regiões da AWS.",
    "question": "Qual das seguintes afirmações é verdadeira em relação ao AWS CloudTrail?",
    "options": [
      {
        "id": "A",
        "text": "O CloudTrail é desabilitado por padrão para contas da AWS recém-criadas"
      },
      {
        "id": "B",
        "text": "Ao criar uma trilha no Console de gerenciamento da AWS, a trilha se aplica a todas as regiões da AWS por padrão"
      },
      {
        "id": "C",
        "text": "O CloudTrail é capaz de capturar logs de erros de aplicativos de suas instâncias do EC2"
      },
      {
        "id": "D",
        "text": "CloudTrail cobra por cada trilha de evento de gerenciamento criada"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "Ao criar uma trilha (Trail) no Console de Gerenciamento do AWS CloudTrail, por padrão ela é configurada como multi-região, aplicando-se a todas as Regiões da AWS.",
    "explanation_why_correct": "**Ao criar uma trilha no Console de gerenciamento da AWS, a trilha se aplica a todas as regiões da AWS por padrão (B).**",
    "explanation_why_incorrect": "O histórico de eventos do CloudTrail já vem habilitado por padrão por 90 dias; a primeira trilha de eventos de gerenciamento é gratuita; e logs internos de aplicativos são papel do CloudWatch Logs.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 55,
    "type": "single",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.4 Identificar a relação entre VPC, Sub-redes e Zonas de Disponibilidade",
    "what_it_tests": "Enquanto uma Amazon VPC abrange toda uma Região da AWS, cada sub-rede (Subnet) dentro da VPC deve residir inteiramente dentro de uma única Zona de Disponibilidade (AZ).",
    "question": "Qual das seguintes infraestruturas se correlaciona com a sub-rede de uma VPC?",
    "options": [
      {
        "id": "A",
        "text": "Zona de disponibilidade"
      },
      {
        "id": "B",
        "text": "Pontos de presença"
      },
      {
        "id": "C",
        "text": "Região"
      },
      {
        "id": "D",
        "text": "Servidor"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Enquanto uma Amazon VPC abrange toda uma Região da AWS, cada sub-rede (Subnet) dentro da VPC deve residir inteiramente dentro de uma única Zona de Disponibilidade (AZ).",
    "explanation_why_correct": "Cada sub-rede (subnet) de uma VPC está associada diretamente a uma única **Zona de Disponibilidade (Availability Zone - A)**.",
    "explanation_why_incorrect": "Uma Região contém a VPC inteira (várias sub-redes), e Pontos de Presença (Edge Locations) são usados pelo CloudFront/Route 53.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 56,
    "type": "single",
    "category": "Cobrança, Preços e Suporte da AWS (12%)",
    "category_en": "Cobrança, Preços e Suporte da AWS (12%)",
    "objective": "4.1 Comparar modelos de preços do Amazon RDS",
    "what_it_tests": "Para instâncias de banco de dados de produção executadas continuamente a longo prazo, as Instâncias Reservadas do Amazon RDS oferecem descontos significativos (compromisso de 1 ou 3 anos).",
    "question": "Como suas instâncias de produção do RDS podem ser mais econômicas quando são usadas por um longo período de tempo?",
    "options": [
      {
        "id": "A",
        "text": "Você pode facilmente fazer backup, encerrar e restaurar instâncias do RDS quando precisar"
      },
      {
        "id": "B",
        "text": "A AWS não cobra quando o RDS está ocioso"
      },
      {
        "id": "C",
        "text": "Você pode interromper suas instâncias do RDS quando ociosas para evitar que a AWS carregue você durante esse período"
      },
      {
        "id": "D",
        "text": "Você pode aproveitar a instância reservada para obter descontos nos custos da sua instância"
      }
    ],
    "correct_answer": "D",
    "official_rationale": "Para instâncias de banco de dados de produção executadas continuamente a longo prazo, as Instâncias Reservadas do Amazon RDS oferecem descontos significativos (compromisso de 1 ou 3 anos).",
    "explanation_why_correct": "Para cargas de produção de longo prazo no RDS, **você pode aproveitar a Instância Reservada (Reserved Instance) para obter descontos significativos (D)**.",
    "explanation_why_incorrect": "Instâncias de produção precisam ficar ativas 24/7 (parar o RDS só dura até 7 dias e é voltado para dev/test), e a AWS cobra pelo tempo em que a instância está provisionada em execução.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 57,
    "type": "single",
    "category": "Cobrança, Preços e Suporte da AWS (12%)",
    "category_en": "Cobrança, Preços e Suporte da AWS (12%)",
    "objective": "4.3 Identificar os benefícios dos planos do AWS Support",
    "what_it_tests": "A Equipe de Suporte de Concierge (AWS Support Concierge Team), especializada em análises de faturamento e gerenciamento de conta executiva, está incluída no plano Enterprise Support.",
    "question": "Qual plano de suporte da AWS inclui uma equipe de suporte de concierge que o ajudará com suas dúvidas de cobrança e conta e trabalhará com você para implementar as práticas recomendadas de cobrança e conta?",
    "options": [
      {
        "id": "A",
        "text": "Plano de suporte Developer"
      },
      {
        "id": "B",
        "text": "Plano de suporte Enterprise"
      },
      {
        "id": "C",
        "text": "Plano de suporte Business"
      },
      {
        "id": "D",
        "text": "Plano de suporte Basic"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "A Equipe de Suporte de Concierge (AWS Support Concierge Team), especializada em análises de faturamento e gerenciamento de conta executiva, está incluída no plano Enterprise Support.",
    "explanation_why_correct": "O **Plano de suporte Enterprise (B)** inclui acesso à equipe de **Support Concierge** para assistência dedicada em cobrança e contas (bem como no Enterprise On-Ramp).",
    "explanation_why_incorrect": "Os planos Basic, Developer e Business não incluem a equipe de Concierge dedicada.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 58,
    "type": "single",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.6 Identificar serviços de engajamento de usuários e marketing digital",
    "what_it_tests": "O Amazon Pinpoint é um serviço flexível e escalável de comunicação de marketing de entrada/saída que permite engajar usuários finais por e-mail, SMS, push e voz, além de medir métricas de campanha.",
    "question": "________ é o serviço digital de envolvimento do usuário da AWS que permite que os clientes da AWS se comuniquem efetivamente com seus usuários finais e avaliem o envolvimento do usuário em vários canais, incluindo e-mail, mensagens de texto (SMS) e notificações push móveis.",
    "options": [
      {
        "id": "A",
        "text": "Amazon Simple Email Service"
      },
      {
        "id": "B",
        "text": "Amazon Simple Notification Service (SNS)"
      },
      {
        "id": "C",
        "text": "Amazon Pinpoint"
      },
      {
        "id": "D",
        "text": "Amazon SNS Mobile Push"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "O Amazon Pinpoint é um serviço flexível e escalável de comunicação de marketing de entrada/saída que permite engajar usuários finais por e-mail, SMS, push e voz, além de medir métricas de campanha.",
    "explanation_why_correct": "O **Amazon Pinpoint** é o serviço de engajamento digital do usuário que permite criar campanhas segmentadas e analisar métricas de interação via e-mail, SMS e notificações push.",
    "explanation_why_incorrect": "SES foca apenas em e-mail; SNS foca em mensageria pub/sub de sistemas; e Pinpoint adiciona análise de engajamento e campanhas multicanal.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 59,
    "type": "single",
    "category": "Segurança e Conformidade na AWS (30%)",
    "category_en": "Segurança e Conformidade na AWS (30%)",
    "objective": "2.3 Identificar serviços de autenticação para aplicativos móveis e web",
    "what_it_tests": "O Amazon Cognito adiciona cadastro de usuários, login e controle de acesso a aplicativos web e móveis, suportando provedores sociais (Google, Facebook, Apple, Amazon) e SAML 2.0/OIDC.",
    "question": "Qual serviço você deve usar para adicionar a inscrição do usuário, login e controle de acesso ao seu aplicativo móvel com um recurso que suporta login com provedores de identidade social, como Facebook, Google e Amazon, e empresas provedores de identidade via SAML 2.0?",
    "options": [
      {
        "id": "A",
        "text": "AWS Directory Service"
      },
      {
        "id": "B",
        "text": "AWS Single Sign-On (SSO)"
      },
      {
        "id": "C",
        "text": "Amazon Cognito"
      },
      {
        "id": "D",
        "text": "AWS Identity and Access Management (IAM)"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "O Amazon Cognito adiciona cadastro de usuários, login e controle de acesso a aplicativos web e móveis, suportando provedores sociais (Google, Facebook, Apple, Amazon) e SAML 2.0/OIDC.",
    "explanation_why_correct": "O **Amazon Cognito** gerencia autenticação e federação de identidade para aplicativos móveis e web com suporte nativo a login social e SAML 2.0.",
    "explanation_why_incorrect": "IAM e IAM Identity Center (SSO) são para colaboradores internos acessarem contas AWS; Directory Service gerencia Active Directory.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 60,
    "type": "single",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.3 Identificar serviços de armazenamento de arquivos escaláveis",
    "what_it_tests": "O Amazon EFS (Elastic File System) fornece armazenamento de arquivos elástico, totalmente gerenciado e escalável que suporta acesso paralelo massivo de milhares de instâncias e servidores locais (via Direct Connect/VPN).",
    "question": "Você tem uma frota de servidores locais que exigem um armazenamento de arquivos centralizado escalável e durável. Deve ser capaz de suportar acesso paralelo massivo. Qual dos seguintes é o serviço mais apropriado para usar?",
    "options": [
      {
        "id": "A",
        "text": "Amazon S3"
      },
      {
        "id": "B",
        "text": "Amazon EFS"
      },
      {
        "id": "C",
        "text": "Amazon Storage Gateway - File Gateway"
      },
      {
        "id": "D",
        "text": "Amazon Redshift"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "O Amazon EFS (Elastic File System) fornece armazenamento de arquivos elástico, totalmente gerenciado e escalável que suporta acesso paralelo massivo de milhares de instâncias e servidores locais (via Direct Connect/VPN).",
    "explanation_why_correct": "O **Amazon EFS** oferece um sistema de arquivos NFS centralizado, elástico e altamente durável capaz de suportar acesso paralelo massivo.",
    "explanation_why_incorrect": "Amazon S3 é armazenamento de objetos (não sistema de arquivos POSIX/NFS); Redshift é um data warehouse.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 61,
    "type": "single",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.8 Identificar serviços de otimização e melhores práticas da AWS",
    "what_it_tests": "O AWS Trusted Advisor inspeciona seu ambiente AWS e fornece recomendações em tempo real de acordo com as melhores práticas da AWS em 5 categorias: otimização de custos, performance, segurança, tolerância a falhas e limites de serviço.",
    "question": "Qual serviço da AWS permite verificar se os recursos em execução estão em conformidade com as melhores práticas da AWS?",
    "options": [
      {
        "id": "A",
        "text": "AWS Trusted Advisor"
      },
      {
        "id": "B",
        "text": "AWS Config"
      },
      {
        "id": "C",
        "text": "Amazon CloudWatch"
      },
      {
        "id": "D",
        "text": "AWS IAM"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "O AWS Trusted Advisor inspeciona seu ambiente AWS e fornece recomendações em tempo real de acordo com as melhores práticas da AWS em 5 categorias: otimização de custos, performance, segurança, tolerância a falhas e limites de serviço.",
    "explanation_why_correct": "O **AWS Trusted Advisor** analisa sua conta e verifica se os recursos provisionados seguem as **melhores práticas da AWS** em custo, segurança, desempenho, resiliência e limites.",
    "explanation_why_incorrect": "AWS Config audita o histórico de configurações e regras personalizadas; CloudWatch monitora métricas/logs; e IAM gerencia identidades.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 62,
    "type": "single",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.8 Identificar serviços de gerenciamento e automação de implantação híbrida",
    "what_it_tests": "No gabarito deste simulado, o AWS OpsWorks permite usar Chef/Puppet para implantar e reverter aplicativos de repositórios Git tanto em instâncias EC2 quanto em servidores locais (on-premises).",
    "question": "Qual dos seguintes serviços você deve usar para implantar e reverter facilmente um aplicativo Web do seu repositório Git para o seu servidor local?",
    "options": [
      {
        "id": "A",
        "text": "AWS CloudFormation"
      },
      {
        "id": "B",
        "text": "AWS OpsWorks"
      },
      {
        "id": "C",
        "text": "AWS Elastic Beanstalk"
      },
      {
        "id": "D",
        "text": "AWS Systems Manager"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "No gabarito deste simulado, o AWS OpsWorks permite usar Chef/Puppet para implantar e reverter aplicativos de repositórios Git tanto em instâncias EC2 quanto em servidores locais (on-premises).",
    "explanation_why_correct": "O **AWS OpsWorks (B)** permite configurar camadas e implantar ou reverter facilmente aplicativos web a partir de um repositório Git em instâncias EC2 ou em seus próprios servidores locais.",
    "explanation_why_incorrect": "Elastic Beanstalk e CloudFormation provisionam recursos na nuvem AWS, não sendo voltados para gerenciar servidores on-premises.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 63,
    "type": "single",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.4 Identificar os serviços de rede da AWS (Amazon VPC)",
    "what_it_tests": "A Amazon Virtual Private Cloud (Amazon VPC) permite provisionar uma seção logicamente isolada da Nuvem AWS onde você pode iniciar recursos em uma rede virtual que você mesmo define.",
    "question": "Qual serviço da AWS permite provisionar uma seção logicamente isolada da Nuvem AWS onde você pode iniciar recursos da AWS?",
    "options": [
      {
        "id": "A",
        "text": "Internet Gateway"
      },
      {
        "id": "B",
        "text": "AWS Elastic Beanstalk"
      },
      {
        "id": "C",
        "text": "Amazon VPC"
      },
      {
        "id": "D",
        "text": "Amazon EC2"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "A Amazon Virtual Private Cloud (Amazon VPC) permite provisionar uma seção logicamente isolada da Nuvem AWS onde você pode iniciar recursos em uma rede virtual que você mesmo define.",
    "explanation_why_correct": "O **Amazon VPC (Virtual Private Cloud)** fornece uma rede virtual logicamente isolada na nuvem AWS com controle total sobre endereçamento IP, sub-redes, tabelas de rotas e gateways.",
    "explanation_why_incorrect": "Internet Gateway é apenas um componente da VPC; Elastic Beanstalk é PaaS; e EC2 são máquinas virtuais iniciadas dentro da VPC.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 64,
    "type": "single",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.6 Identificar serviços de orquestração de fluxos de trabalho serverless",
    "what_it_tests": "O AWS Step Functions é um orquestrador de fluxos de trabalho sem servidor (serverless) que permite coordenar vários serviços da AWS (como funções Lambda) em máquinas de estado visuais.",
    "question": "Qual das opções a seguir é o serviço mais econômico a ser usado se você deseja coordenar vários serviços da AWS em fluxos de trabalho sem servidor?",
    "options": [
      {
        "id": "A",
        "text": "Amazon SWF"
      },
      {
        "id": "B",
        "text": "AWS Lambda"
      },
      {
        "id": "C",
        "text": "AWS Step Functions"
      },
      {
        "id": "D",
        "text": "AWS Batch"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "O AWS Step Functions é um orquestrador de fluxos de trabalho sem servidor (serverless) que permite coordenar vários serviços da AWS (como funções Lambda) em máquinas de estado visuais.",
    "explanation_why_correct": "O **AWS Step Functions** permite coordenar múltiplos serviços da AWS em fluxos de trabalho serverless resilientes de forma visual e econômica.",
    "explanation_why_incorrect": "Amazon SWF é para fluxos legados baseados em servidores EC2; AWS Lambda executa funções individuais; e AWS Batch roda processamento em lote.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 65,
    "type": "single",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.3 Identificar casos de uso do Amazon S3",
    "what_it_tests": "O Amazon S3 possui suporte nativo para hospedagem de sites estáticos (HTML, CSS, JavaScript, imagens) usando a classe de armazenamento S3 Standard a um custo extremamente baixo e sem servidores.",
    "question": "Você deseja hospedar um site estático próprio na AWS a um custo baixo. Qual serviço deve ser usado para esse fim?",
    "options": [
      {
        "id": "A",
        "text": "Amazon S3 Standard"
      },
      {
        "id": "B",
        "text": "Amazon EC2"
      },
      {
        "id": "C",
        "text": "Amazon S3 Infrequent Access"
      },
      {
        "id": "D",
        "text": "Amazon Elastic Load Balancer"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "O Amazon S3 possui suporte nativo para hospedagem de sites estáticos (HTML, CSS, JavaScript, imagens) usando a classe de armazenamento S3 Standard a um custo extremamente baixo e sem servidores.",
    "explanation_why_correct": "O **Amazon S3 Standard** permite hospedar sites estáticos diretamente de um bucket com alta disponibilidade, escalabilidade automática e baixíssimo custo.",
    "explanation_why_incorrect": "EC2 e Elastic Load Balancer exigem custos contínuos por hora de servidores; S3 Infrequent Access cobra taxa por cada recuperação de arquivo, sendo inadequado para um site acessado frequentemente.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  }
];

const AWS_SIMULADO_2_QUESTIONS = [
  {
    "id": 1,
    "type": "single",
    "category": "Segurança e Conformidade na AWS (30%)",
    "category_en": "Segurança e Conformidade na AWS (30%)",
    "objective": "2.1 Descrever o Modelo de Responsabilidade Compartilhada da AWS",
    "what_it_tests": "No modelo de responsabilidade compartilhada, a proteção dos dados do cliente (incluindo habilitar a criptografia de dados em repouso e em trânsito) é responsabilidade do cliente.",
    "question": "Sob o modelo de responsabilidade compartilhada, de qual dos seguintes o cliente é responsável?",
    "options": [
      {
        "id": "A",
        "text": "Garantir que as unidades de disco sejam apagadas após o uso."
      },
      {
        "id": "B",
        "text": "Garantir que o firmware esteja atualizado nos dispositivos de hardware."
      },
      {
        "id": "C",
        "text": "Garantir que os dados estejam criptografados em repouso."
      },
      {
        "id": "D",
        "text": "Garantir que os cabos de rede sejam de categoria seis ou superior."
      }
    ],
    "correct_answer": "C",
    "official_rationale": "No modelo de responsabilidade compartilhada, a proteção dos dados do cliente (incluindo habilitar a criptografia de dados em repouso e em trânsito) é responsabilidade do cliente.",
    "explanation_why_correct": "**Garantir que os dados estejam criptografados em repouso (C)** faz parte da segurança NA nuvem, sendo responsabilidade direta do cliente.",
    "explanation_why_incorrect": "Apagar/destruir discos físicos após o uso, atualizar firmware de hardware físico e gerenciar cabeamento de rede física nos datacenters são responsabilidades exclusivas da AWS.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 2,
    "type": "single",
    "category": "Cobrança, Preços e Suporte da AWS (12%)",
    "category_en": "Cobrança, Preços e Suporte da AWS (12%)",
    "objective": "4.2 Identificar recursos para gerenciamento de faturamento, orçamento e custos",
    "what_it_tests": "As etiquetas de alocação de custos (Cost Allocation Tags) permitem rotular recursos (por centro de custo, projeto ou equipe) e rastrear os gastos de forma detalhada nos relatórios de faturamento.",
    "question": "O uso de qual função ou serviço da AWS permite que as empresas acompanhem e categorizem os gastos em um nível detalhado?",
    "options": [
      {
        "id": "A",
        "text": "Etiquetas de alocação de custos (Cost allocation tags)"
      },
      {
        "id": "B",
        "text": "Faturamento consolidado (Consolidated Billing)"
      },
      {
        "id": "C",
        "text": "Orçamentos AWS (AWS Budgets)"
      },
      {
        "id": "D",
        "text": "AWS Marketplace"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "As etiquetas de alocação de custos (Cost Allocation Tags) permitem rotular recursos (por centro de custo, projeto ou equipe) e rastrear os gastos de forma detalhada nos relatórios de faturamento.",
    "explanation_why_correct": "As **Etiquetas de alocação de custos (Cost allocation tags - A)** permitem categorizar e acompanhar detalhadamente os gastos de recursos na AWS.",
    "explanation_why_incorrect": "Consolidated Billing unifica a fatura de várias contas; AWS Budgets define alertas de limites; e AWS Marketplace é a loja de softwares de terceiros.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 3,
    "type": "single",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.3 Identificar os serviços de armazenamento da AWS",
    "what_it_tests": "O Amazon S3 (Simple Storage Service) é um serviço de armazenamento de objetos que oferece acesso em tempo real, versionamento de objetos e políticas de gerenciamento de ciclo de vida.",
    "question": "Qual serviço armazena objetos, fornece acesso em tempo real a esses objetos e oferece funções de controle de versões e ciclo de vida?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Glacier"
      },
      {
        "id": "B",
        "text": "AWS Storage Gateway"
      },
      {
        "id": "C",
        "text": "Amazon S3"
      },
      {
        "id": "D",
        "text": "Amazon EBS"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "O Amazon S3 (Simple Storage Service) é um serviço de armazenamento de objetos que oferece acesso em tempo real, versionamento de objetos e políticas de gerenciamento de ciclo de vida.",
    "explanation_why_correct": "O **Amazon S3 (C)** armazena objetos com acesso imediato (tempo real) e oferece recursos nativos de **controle de versões (Versioning)** e **políticas de ciclo de vida (Lifecycle)**.",
    "explanation_why_incorrect": "Glacier é voltado para arquivamento frio sem acesso em tempo real; Storage Gateway é armazenamento híbrido; e EBS é armazenamento em blocos para uma única instância EC2.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 4,
    "type": "single",
    "category": "Cobrança, Preços e Suporte da AWS (12%)",
    "category_en": "Cobrança, Preços e Suporte da AWS (12%)",
    "objective": "4.3 Identificar recursos técnicos, AWS Support e serviços profissionais",
    "what_it_tests": "A equipe de Serviços Profissionais da AWS (AWS Professional Services) é uma organização global de especialistas que auxilia clientes por meio de engajamentos pagos em práticas especializadas de adoção da nuvem.",
    "question": "Qual equipe da AWS ajuda os clientes a acelerar a adoção da nuvem através de compromissos pagos em qualquer uma das diversas áreas de prática especializadas?",
    "options": [
      {
        "id": "A",
        "text": "Suporte Empresarial da AWS"
      },
      {
        "id": "B",
        "text": "Arquitetos de Soluções da AWS"
      },
      {
        "id": "C",
        "text": "Serviços Profissionais da AWS"
      },
      {
        "id": "D",
        "text": "Gerentes de Conta da AWS"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "A equipe de Serviços Profissionais da AWS (AWS Professional Services) é uma organização global de especialistas que auxilia clientes por meio de engajamentos pagos em práticas especializadas de adoção da nuvem.",
    "explanation_why_correct": "Os **Serviços Profissionais da AWS (AWS Professional Services - C)** trabalham junto à equipe do cliente mediante compromissos pagos para acelerar projetos de migração e adoção da nuvem.",
    "explanation_why_incorrect": "Enterprise Support é um plano de suporte técnico; Arquitetos de Soluções dão orientação arquitetural; e Gerentes de Conta cuidam do relacionamento comercial.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 5,
    "type": "single",
    "category": "Conceitos da Nuvem AWS (24%)",
    "category_en": "Conceitos da Nuvem AWS (24%)",
    "objective": "1.2 Identificar programas de parceiros da AWS (AWS Partner Network - APN)",
    "what_it_tests": "Os Parceiros de Consultoria da APN (AWS Partner Network Consulting Partners) são empresas de serviços profissionais que ajudam clientes de todos os portes a projetar, arquitetar, construir, migrar e gerenciar cargas de trabalho na AWS.",
    "question": "Um cliente deseja projetar e criar uma nova carga de trabalho na nuvem da AWS, mas não possui a experiência técnica interna do software relacionado à AWS.\nQual dos seguintes programas da AWS um cliente pode aproveitar para alcançar esse resultado?",
    "options": [
      {
        "id": "A",
        "text": "AWS Partner Network Technology Partners"
      },
      {
        "id": "B",
        "text": "AWS Marketplace"
      },
      {
        "id": "C",
        "text": "AWS Partner Network Consulting Partners"
      },
      {
        "id": "D",
        "text": "AWS Service Catalog"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "Os Parceiros de Consultoria da APN (AWS Partner Network Consulting Partners) são empresas de serviços profissionais que ajudam clientes de todos os portes a projetar, arquitetar, construir, migrar e gerenciar cargas de trabalho na AWS.",
    "explanation_why_correct": "Os **AWS Partner Network Consulting Partners (C)** fornecem consultoria especializada para projetar e construir cargas de trabalho quando o cliente não possui experiência técnica interna.",
    "explanation_why_incorrect": "Technology Partners fornecem produtos de software/hardware; AWS Marketplace vende licenças de software; e Service Catalog gerencia catálogos internos.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 6,
    "type": "single",
    "category": "Conceitos da Nuvem AWS (24%)",
    "category_en": "Conceitos da Nuvem AWS (24%)",
    "objective": "1.3 Descrever os princípios de design da arquitetura na nuvem",
    "what_it_tests": "Distribuir cargas de trabalho em múltiplas Zonas de Disponibilidade (AZs) garante que, se um datacenter ou AZ inteira falhar, a aplicação continue operando normalmente — princípio \"Projetar para falhas\" (Design for failure).",
    "question": "Qual princípio de design de arquitetura de nuvem é compatível com a distribuição de cargas de trabalho em várias zonas de disponibilidade?",
    "options": [
      {
        "id": "A",
        "text": "Implementar a automação."
      },
      {
        "id": "B",
        "text": "Design para agilidade."
      },
      {
        "id": "C",
        "text": "Design para falhas"
      },
      {
        "id": "D",
        "text": "Implementar elasticidade."
      }
    ],
    "correct_answer": "C",
    "official_rationale": "Distribuir cargas de trabalho em múltiplas Zonas de Disponibilidade (AZs) garante que, se um datacenter ou AZ inteira falhar, a aplicação continue operando normalmente — princípio \"Projetar para falhas\" (Design for failure).",
    "explanation_why_correct": "O princípio **\"Design para falhas\" (Design for failure - C)** orienta a distribuir recursos em múltiplas Zonas de Disponibilidade para resistir automaticamente a falhas de infraestrutura.",
    "explanation_why_incorrect": "Automação foca em eliminar processos manuais; agilidade foca em velocidade de entrega; e elasticidade foca em escalar conforme a demanda.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 7,
    "type": "multi",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.3 Identificar serviços para hospedagem de bancos de dados na AWS",
    "what_it_tests": "Um banco de dados Microsoft SQL Server pode ser executado como serviço gerenciado no Amazon RDS for SQL Server ou autogerenciado pelo cliente instalando o SQL Server em uma instância Amazon EC2.",
    "question": "Quais serviços da AWS podem hospedar um banco de dados Microsoft SQL Server? (Escolha dois.)",
    "options": [
      {
        "id": "A",
        "text": "Amazon EC2"
      },
      {
        "id": "B",
        "text": "Amazon Aurora"
      },
      {
        "id": "C",
        "text": "Amazon S3"
      },
      {
        "id": "D",
        "text": "Serviço de banco de dados relacional da Amazon (Amazon RDS)"
      },
      {
        "id": "E",
        "text": "Amazon Redshift"
      }
    ],
    "correct_answer": [
      "A",
      "D"
    ],
    "official_rationale": "Um banco de dados Microsoft SQL Server pode ser executado como serviço gerenciado no Amazon RDS for SQL Server ou autogerenciado pelo cliente instalando o SQL Server em uma instância Amazon EC2.",
    "explanation_why_correct": "Você pode hospedar o Microsoft SQL Server tanto no **Amazon EC2 (A)** (autogerenciado em máquina virtual) quanto no **Amazon RDS (D)** (serviço de banco de dados relacional gerenciado).",
    "explanation_why_incorrect": "Amazon Aurora é compatível apenas com MySQL e PostgreSQL; Amazon S3 é armazenamento de objetos; e Redshift é baseado em PostgreSQL para Data Warehouse.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 8,
    "type": "single",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.8 Identificar serviços de otimização e melhores práticas da AWS",
    "what_it_tests": "O AWS Trusted Advisor inspeciona continuamente o ambiente AWS em busca de oportunidades para economizar dinheiro (Cost Optimization), melhorar o desempenho (Performance), segurança e tolerância a falhas.",
    "question": "Qual das seguintes opções inspeciona os ambientes da AWS para encontrar oportunidades que possam economizar dinheiro aos usuários e também melhorar o desempenho do sistema?",
    "options": [
      {
        "id": "A",
        "text": "AWS Cost Explorer"
      },
      {
        "id": "B",
        "text": "AWS Trusted Advisor"
      },
      {
        "id": "C",
        "text": "Faturamento consolidado"
      },
      {
        "id": "D",
        "text": "Faturamento detalhado"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "O AWS Trusted Advisor inspeciona continuamente o ambiente AWS em busca de oportunidades para economizar dinheiro (Cost Optimization), melhorar o desempenho (Performance), segurança e tolerância a falhas.",
    "explanation_why_correct": "O **AWS Trusted Advisor (B)** analisa os recursos da conta e fornece recomendações práticas para reduzir custos (ex.: recursos ociosos) e otimizar o desempenho do sistema.",
    "explanation_why_incorrect": "Cost Explorer, Faturamento Consolidado e Faturamento Detalhado mostram apenas dados financeiros e de consumo, sem inspecionar configurações de desempenho técnico.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 9,
    "type": "single",
    "category": "Cobrança, Preços e Suporte da AWS (12%)",
    "category_en": "Cobrança, Preços e Suporte da AWS (12%)",
    "objective": "4.1 Comparar os diferentes modelos de preços do Amazon EC2",
    "what_it_tests": "Os Hosts Dedicados do Amazon EC2 (Dedicated Hosts) são servidores físicos inteiramente dedicados ao cliente que oferecem visibilidade de soquetes e núcleos físicos, permitindo trazer licenças vinculadas a servidor físico (BYOL, como Windows Server e SQL Server).",
    "question": "Qual dos seguintes modelos de preços do Amazon EC2 permite que os clientes utilizem licenças de software vinculadas ao servidor existentes?",
    "options": [
      {
        "id": "A",
        "text": "Instâncias pontuais"
      },
      {
        "id": "B",
        "text": "Hosts dedicados"
      },
      {
        "id": "C",
        "text": "Instâncias reservadas"
      },
      {
        "id": "D",
        "text": "Instâncias sob demanda"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "Os Hosts Dedicados do Amazon EC2 (Dedicated Hosts) são servidores físicos inteiramente dedicados ao cliente que oferecem visibilidade de soquetes e núcleos físicos, permitindo trazer licenças vinculadas a servidor físico (BYOL, como Windows Server e SQL Server).",
    "explanation_why_correct": "Os **Hosts dedicados (Dedicated Hosts - B)** permitem utilizar licenças de software existentes vinculadas a núcleos ou soquetes de servidores físicos.",
    "explanation_why_incorrect": "Instâncias Spot, Reservadas e Sob Demanda rodam em hardware compartilhado sem visibilidade direta de soquetes físicos para licenciamento BYOL restrito ao servidor.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 10,
    "type": "multi",
    "category": "Conceitos da Nuvem AWS (24%)",
    "category_en": "Conceitos da Nuvem AWS (24%)",
    "objective": "1.1 Definir os benefícios econômicos e operacionais da Nuvem AWS",
    "what_it_tests": "Para cargas de trabalho com demanda variável e dinâmica, a combinação de Elasticidade (escalar para cima e para baixo automaticamente) com Preços de pagamento conforme o uso (Pay-as-you-go) garante que você pague apenas pelos recursos necessários a cada momento.",
    "question": "Quais características da AWS tornam a AWS rentável para uma carga de trabalho com uma demanda dinâmica dos usuários? (Escolha duas.)",
    "options": [
      {
        "id": "A",
        "text": "Alta disponibilidade"
      },
      {
        "id": "B",
        "text": "Elasticidade"
      },
      {
        "id": "C",
        "text": "Confiabilidade"
      },
      {
        "id": "D",
        "text": "Modelo de segurança compartilhada"
      },
      {
        "id": "E",
        "text": "Preços de pagamento por uso"
      }
    ],
    "correct_answer": [
      "E",
      "B"
    ],
    "official_rationale": "Para cargas de trabalho com demanda variável e dinâmica, a combinação de Elasticidade (escalar para cima e para baixo automaticamente) com Preços de pagamento conforme o uso (Pay-as-you-go) garante que você pague apenas pelos recursos necessários a cada momento.",
    "explanation_why_correct": "A **Elasticidade (B)** combinada com **Preços de pagamento por uso (E)** torna a AWS altamente rentável para demandas dinâmicas, evitando o provisionamento excessivo.",
    "explanation_why_incorrect": "Alta disponibilidade, confiabilidade e responsabilidade compartilhada são importantes para resiliência e segurança, mas não são os fatores que reduzem o custo de demandas variáveis.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 11,
    "type": "single",
    "category": "Segurança e Conformidade na AWS (30%)",
    "category_en": "Segurança e Conformidade na AWS (30%)",
    "objective": "2.2 Descrever a governança e auditoria de segurança na AWS",
    "what_it_tests": "O AWS CloudTrail permite a auditoria de governança, conformidade e riscos operacionais ao registrar continuamente chamadas de API e ações feitas no Console, CLI e SDKs da AWS.",
    "question": "Qual serviço permite a auditoria de riscos ao monitorar e registrar continuamente a atividade da conta, incluindo as ações dos usuários no Console de Gerenciamento da AWS e nos\nSDKs da AWS?",
    "options": [
      {
        "id": "A",
        "text": "Amazon CloudWatch"
      },
      {
        "id": "B",
        "text": "AWS Config"
      },
      {
        "id": "C",
        "text": "AWS CloudTrail"
      },
      {
        "id": "D",
        "text": "AWS Health"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "O AWS CloudTrail permite a auditoria de governança, conformidade e riscos operacionais ao registrar continuamente chamadas de API e ações feitas no Console, CLI e SDKs da AWS.",
    "explanation_why_correct": "O **AWS CloudTrail (C)** registra todas as atividades e ações de usuários na conta AWS (via Console, CLI ou SDKs) para fins de auditoria de segurança.",
    "explanation_why_incorrect": "CloudWatch monitora desempenho operacional; AWS Config avalia o estado de configuração dos recursos; e AWS Health informa sobre eventos de integridade dos serviços AWS.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 12,
    "type": "multi",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.3 Identificar as características do Amazon S3",
    "what_it_tests": "O Amazon S3 (Simple Storage Service) é um repositório de armazenamento de objetos (Object Store) projetado para oferecer 99,999999999% (11 noves) de durabilidade.",
    "question": "Quais das seguintes são características do Amazon S3? (Escolha duas.)",
    "options": [
      {
        "id": "A",
        "text": "Um sistema de arquivos global"
      },
      {
        "id": "B",
        "text": "Um armazenamento de arquivos local"
      },
      {
        "id": "C",
        "text": "Um sistema de armazenamento durável"
      },
      {
        "id": "D",
        "text": "Uma loja de objetos"
      },
      {
        "id": "E",
        "text": "Um sistema de arquivos de rede"
      }
    ],
    "correct_answer": [
      "D",
      "C"
    ],
    "official_rationale": "O Amazon S3 (Simple Storage Service) é um repositório de armazenamento de objetos (Object Store) projetado para oferecer 99,999999999% (11 noves) de durabilidade.",
    "explanation_why_correct": "O Amazon S3 caracteriza-se por ser **um sistema de armazenamento durável (C)** (11 noves de durabilidade) e **uma loja de objetos / armazenamento de objetos (D)**.",
    "explanation_why_incorrect": "O S3 não é um sistema de arquivos local ou de rede POSIX (esse papel cabe ao Amazon EFS ou Amazon FSx).",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 13,
    "type": "multi",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.4 Identificar serviços para arquiteturas híbridas na AWS",
    "what_it_tests": "Em uma arquitetura híbrida (que integra o datacenter local à AWS), o Virtual Private Gateway conecta a VPC via VPN/Direct Connect ao ambiente local, e o Amazon Route 53 (Resolver) resolve DNS entre a nuvem e a rede on-premises.",
    "question": "Quais serviços podem ser utilizados em arquiteturas híbridas da AWS Cloud? (Escolha dois.)",
    "options": [
      {
        "id": "A",
        "text": "Amazon Route 53"
      },
      {
        "id": "B",
        "text": "Virtual Private Gateway"
      },
      {
        "id": "C",
        "text": "Classic Load Balancer"
      },
      {
        "id": "D",
        "text": "Auto Scaling"
      }
    ],
    "correct_answer": [
      "A",
      "B"
    ],
    "official_rationale": "Em uma arquitetura híbrida (que integra o datacenter local à AWS), o Virtual Private Gateway conecta a VPC via VPN/Direct Connect ao ambiente local, e o Amazon Route 53 (Resolver) resolve DNS entre a nuvem e a rede on-premises.",
    "explanation_why_correct": "O **Amazon Route 53 (A)** e o **Virtual Private Gateway (B)** são amplamente utilizados para integrar resolução de nomes e conectividade de rede segura em arquiteturas híbridas.",
    "explanation_why_incorrect": "Classic Load Balancer e EC2 Auto Scaling operam exclusivamente sobre recursos dentro da nuvem AWS.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 14,
    "type": "single",
    "category": "Cobrança, Preços e Suporte da AWS (12%)",
    "category_en": "Cobrança, Preços e Suporte da AWS (12%)",
    "objective": "4.1 Comparar o Custo Total de Propriedade (TCO) local com a nuvem AWS",
    "what_it_tests": "O cálculo de Custo Total de Propriedade (TCO) de um datacenter físico inclui custos de instalações, energia, refrigeração, espaço físico e segurança física do centro de dados.",
    "question": "Quais custos são incluídos ao comparar o custo total de propriedade (TCO) da AWS com o TCO local?",
    "options": [
      {
        "id": "A",
        "text": "Gerenciamento de projetos"
      },
      {
        "id": "B",
        "text": "Segurança do centro de dados"
      },
      {
        "id": "C",
        "text": "Licenças de software antivírus"
      },
      {
        "id": "D",
        "text": "Desenvolvimento de software"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "O cálculo de Custo Total de Propriedade (TCO) de um datacenter físico inclui custos de instalações, energia, refrigeração, espaço físico e segurança física do centro de dados.",
    "explanation_why_correct": "A **Segurança do centro de dados (B)** faz parte dos custos de infraestrutura física contabilizados ao comparar o TCO de um ambiente local com a AWS.",
    "explanation_why_incorrect": "Gerenciamento de projetos, licenças de antivírus de aplicação e desenvolvimento de software continuam sob gestão da empresa independentemente de usar nuvem ou datacenter próprio.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 15,
    "type": "single",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.2 Identificar os serviços de computação e persistência de volumes EC2",
    "what_it_tests": "Instâncias Amazon EC2 apoiadas por volumes Amazon EBS (Elastic Block Store) podem ser interrompidas (stopped) à noite para economizar custos de computação enquanto os dados do banco permanecem intactos no volume EBS.",
    "question": "Uma empresa está considerando usar AWS para um banco de dados autohospedado que requer um desligamento noturno para fins de manutenção e economia de custos.\nQual serviço a empresa deve utilizar?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Redshift"
      },
      {
        "id": "B",
        "text": "Amazon Elastic Compute Cloud (Amazon EC2) com loja de instâncias Amazon EC2"
      },
      {
        "id": "C",
        "text": "Amazon DynamoDB"
      },
      {
        "id": "D",
        "text": "Amazon EC2 com Amazon Elastic Block Store (Amazon EBS)"
      }
    ],
    "correct_answer": "D",
    "official_rationale": "Instâncias Amazon EC2 apoiadas por volumes Amazon EBS (Elastic Block Store) podem ser interrompidas (stopped) à noite para economizar custos de computação enquanto os dados do banco permanecem intactos no volume EBS.",
    "explanation_why_correct": "Usar **Amazon EC2 com Amazon EBS (D)** permite parar a instância EC2 durante a noite (deixando de pagar pelas horas de computação EC2) sem perder os dados persistidos no volume EBS.",
    "explanation_why_incorrect": "No EC2 Instance Store (B), os dados são efêmeros e perdidos quando a instância é parada; DynamoDB é NoSQL gerenciado serverless; e Redshift é um data warehouse analítico.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 16,
    "type": "single",
    "category": "Conceitos da Nuvem AWS (24%)",
    "category_en": "Conceitos da Nuvem AWS (24%)",
    "objective": "1.2 Descrever a infraestrutura global da AWS",
    "what_it_tests": "Na infraestrutura global da AWS, cada Região geográfica contém múltiplas Zonas de Disponibilidade (AZs) isoladas, e cada AZ é composta por um ou mais datacenters.",
    "question": "Qual das seguintes é uma relação correta entre regiões, zonas de disponibilidade e locais de borda?",
    "options": [
      {
        "id": "A",
        "text": "Os centros de dados contêm regiões."
      },
      {
        "id": "B",
        "text": "As zonas de disponibilidade contêm locais de borda (edge locations)."
      },
      {
        "id": "C",
        "text": "As regiões contêm zonas de disponibilidade."
      },
      {
        "id": "D",
        "text": "Os locais de borda (edge locations) contêm regiões."
      }
    ],
    "correct_answer": "C",
    "official_rationale": "Na infraestrutura global da AWS, cada Região geográfica contém múltiplas Zonas de Disponibilidade (AZs) isoladas, e cada AZ é composta por um ou mais datacenters.",
    "explanation_why_correct": "**As regiões contêm zonas de disponibilidade (C).** Cada Região da AWS possui no mínimo três Zonas de Disponibilidade fisicamente separadas.",
    "explanation_why_incorrect": "Zonas de disponibilidade contêm datacenters (não o inverso), e Edge Locations são pontos de presença distribuídos mundialmente fora da hierarquia de contêiner de regiões.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 17,
    "type": "multi",
    "category": "Cobrança, Preços e Suporte da AWS (12%)",
    "category_en": "Cobrança, Preços e Suporte da AWS (12%)",
    "objective": "4.2 Identificar ferramentas de estimativa e controle de custos da AWS",
    "what_it_tests": "No gabarito deste simulado clássico da AWS, as três opções marcadas para auxiliar no planejamento e estimativa de custos são a Calculadora Mensal Simples (hoje AWS Pricing Calculator), a Calculadora de TCO e as Etiquetas de alocação de custos.",
    "question": "Quais ferramentas da AWS ajudam a estimar os custos? (Escolha três.)",
    "options": [
      {
        "id": "A",
        "text": "Relatório de faturamento detalhado"
      },
      {
        "id": "B",
        "text": "Calculadora mensal simples da AWS"
      },
      {
        "id": "C",
        "text": "Estimador de custos"
      },
      {
        "id": "D",
        "text": "Etiquetas de alocação de custos"
      },
      {
        "id": "E",
        "text": "Calculadora do custo total de propriedade (TCO) da AWS"
      }
    ],
    "correct_answer": [
      "E",
      "D",
      "B"
    ],
    "official_rationale": "No gabarito deste simulado clássico da AWS, as três opções marcadas para auxiliar no planejamento e estimativa de custos são a Calculadora Mensal Simples (hoje AWS Pricing Calculator), a Calculadora de TCO e as Etiquetas de alocação de custos.",
    "explanation_why_correct": "As três ferramentas da AWS selecionadas são **Calculadora mensal simples da AWS (B)**, **Etiquetas de alocação de custos (D)** e **Calculadora do custo total de propriedade - TCO (E)**.",
    "explanation_why_incorrect": "\"Estimador de custos\" genérico não é o nome oficial de uma ferramenta, e o Relatório de faturamento detalhado mostra faturas passadas já encerradas.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 18,
    "type": "multi",
    "category": "Cobrança, Preços e Suporte da AWS (12%)",
    "category_en": "Cobrança, Preços e Suporte da AWS (12%)",
    "objective": "4.2 Identificar os benefícios do Faturamento Consolidado (Consolidated Billing)",
    "what_it_tests": "O Faturamento Consolidado no AWS Organizations oferece quatro benefícios principais: uma única fatura para várias contas, rastreamento fácil de cobranças, uso combinado para descontos por volume e sem taxa extra.",
    "question": "Quais das seguintes são vantagens da faturação consolidada da AWS? (Escolha duas.)",
    "options": [
      {
        "id": "A",
        "text": "A capacidade de receber uma fatura para várias contas."
      },
      {
        "id": "B",
        "text": "Um desconto fixo na fatura mensal"
      },
      {
        "id": "C",
        "text": "Os limites de serviço aumentam automaticamente em todas as contas"
      },
      {
        "id": "D",
        "text": "Possíveis descontos por volume, pois o uso é combinado em todas as contas"
      },
      {
        "id": "E",
        "text": "A extensão automática do plano de suporte da AWS da conta principal para todas as contas"
      }
    ],
    "correct_answer": [
      "A",
      "D"
    ],
    "official_rationale": "O Faturamento Consolidado no AWS Organizations oferece quatro benefícios principais: uma única fatura para várias contas, rastreamento fácil de cobranças, uso combinado para descontos por volume e sem taxa extra.",
    "explanation_why_correct": "São vantagens do faturamento consolidado: **receber uma única fatura para várias contas (A)** e **obter descontos por volume combinando o uso de todas as contas (D)**.",
    "explanation_why_incorrect": "Não há desconto fixo automático, os limites de serviço não sobem sozinhos e o plano de suporte não é estendido gratuitamente a todas as contas.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 19,
    "type": "single",
    "category": "Cobrança, Preços e Suporte da AWS (12%)",
    "category_en": "Cobrança, Preços e Suporte da AWS (12%)",
    "objective": "4.1 Comparar os modelos de preços de Instâncias Reservadas (RIs)",
    "what_it_tests": "O maior desconto percentual sobre o preço sob demanda (até 72%) é obtido ao escolher uma Instância Reservada Padrão (Standard RI) com prazo de 3 anos e pagamento total adiantado (All Upfront).",
    "question": "Qual dos seguintes modelos de preços de instâncias reservadas (RI) proporciona a maior economia média em comparação com os preços sob demanda?",
    "options": [
      {
        "id": "A",
        "text": "Um ano, sem pagamento inicial, preço RI padrão"
      },
      {
        "id": "B",
        "text": "Três anos, tudo por adiantado, preço RI padrão"
      },
      {
        "id": "C",
        "text": "Um ano, tudo por adiantado, preço RI conversível"
      },
      {
        "id": "D",
        "text": "Três anos, sem pagamento inicial, preço RI conversível"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "O maior desconto percentual sobre o preço sob demanda (até 72%) é obtido ao escolher uma Instância Reservada Padrão (Standard RI) com prazo de 3 anos e pagamento total adiantado (All Upfront).",
    "explanation_why_correct": "**Três anos, tudo por adiantado, preço RI padrão (3-year, All Upfront, Standard RI - B)** proporciona a maior economia média em relação às instâncias sob demanda.",
    "explanation_why_incorrect": "Prazos de 1 ano, opções sem pagamento inicial (No Upfront) e RIs Conversíveis oferecem descontos menores em troca de maior flexibilidade.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 20,
    "type": "single",
    "category": "Conceitos da Nuvem AWS (24%)",
    "category_en": "Conceitos da Nuvem AWS (24%)",
    "objective": "1.1 Definir os benefícios econômicos da Nuvem AWS",
    "what_it_tests": "Na nuvem AWS, você não precisa fazer investimentos iniciais em hardware (custos iniciais mais baixos) e se beneficia das economias de escala da AWS para pagar taxas de uso menores (custos variáveis mais baixos).",
    "question": "Em comparação com os custos dos centros de dados tradicionais e virtualizados, a AWS tem:",
    "options": [
      {
        "id": "A",
        "text": "maiores custos variáveis e maiores custos iniciais."
      },
      {
        "id": "B",
        "text": "menores custos variáveis e maiores custos iniciais."
      },
      {
        "id": "C",
        "text": "custos de uso fixos e custos iniciais mais baixos."
      },
      {
        "id": "D",
        "text": "custos variáveis mais baixos e custos iniciais mais baixos."
      }
    ],
    "correct_answer": "D",
    "official_rationale": "Na nuvem AWS, você não precisa fazer investimentos iniciais em hardware (custos iniciais mais baixos) e se beneficia das economias de escala da AWS para pagar taxas de uso menores (custos variáveis mais baixos).",
    "explanation_why_correct": "Em comparação com datacenters tradicionais, a AWS oferece **custos variáveis mais baixos e custos iniciais mais baixos (D)**.",
    "explanation_why_incorrect": "A AWS elimina a necessidade de gastos iniciais de capital (CapEx) e reduz os custos variáveis graças às enormes economias de escala.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 21,
    "type": "single",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.4 Identificar a função dos Pontos de Presença (Edge Locations)",
    "what_it_tests": "As Edge Locations (localizações de borda) são utilizadas pelo Amazon CloudFront para armazenar conteúdo em cache próximo aos usuários finais, reduzindo a latência e evitando ir até o servidor de origem.",
    "question": "Uma característica das localizações de periferia (edge locations) é que:",
    "options": [
      {
        "id": "A",
        "text": "hospedar instâncias do Amazon EC2 mais perto dos usuários."
      },
      {
        "id": "B",
        "text": "armazenar em cache os dados que mudam com frequência sem chegar ao servidor de origem."
      },
      {
        "id": "C",
        "text": "ajudar a reduzir a latência e melhorar o desempenho dos usuários."
      },
      {
        "id": "D",
        "text": "atualizar as mudanças de dados diariamente."
      }
    ],
    "correct_answer": "B",
    "official_rationale": "As Edge Locations (localizações de borda) são utilizadas pelo Amazon CloudFront para armazenar conteúdo em cache próximo aos usuários finais, reduzindo a latência e evitando ir até o servidor de origem.",
    "explanation_why_correct": "No gabarito deste simulado, a opção marcada é **B** (armazenar dados em cache na borda sem precisar buscar toda requisição no servidor de origem, o que reduz a latência para os usuários finais).",
    "explanation_why_incorrect": "Edge Locations não hospedam instâncias EC2 padrão e não se limitam a atualizações diárias.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 22,
    "type": "single",
    "category": "Segurança e Conformidade na AWS (30%)",
    "category_en": "Segurança e Conformidade na AWS (30%)",
    "objective": "2.3 Identificar controles de acesso para o Amazon S3",
    "what_it_tests": "O acesso aos buckets e objetos do Amazon S3 por usuários específicos da conta é controlado por meio de Políticas do AWS IAM (IAM Policies) e Políticas de Bucket (Bucket Policies).",
    "question": "Qual das seguintes opções pode limitar o acesso ao depósito do Amazon Storage Service (Amazon S3) a usuários específicos?",
    "options": [
      {
        "id": "A",
        "text": "Um par de chaves públicas e privadas"
      },
      {
        "id": "B",
        "text": "Amazon Inspector"
      },
      {
        "id": "C",
        "text": "Políticas do AWS Identity and Access Management (IAM)"
      },
      {
        "id": "D",
        "text": "Grupos de segurança"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "O acesso aos buckets e objetos do Amazon S3 por usuários específicos da conta é controlado por meio de Políticas do AWS IAM (IAM Policies) e Políticas de Bucket (Bucket Policies).",
    "explanation_why_correct": "As **Políticas do AWS Identity and Access Management (IAM Policies - C)** permitem conceder ou restringir o acesso a buckets específicos do Amazon S3 para usuários e funções.",
    "explanation_why_incorrect": "Pares de chaves SSH e Security Groups aplicam-se a instâncias EC2/VPC; Amazon Inspector realiza varredura de vulnerabilidades.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 23,
    "type": "single",
    "category": "Cobrança, Preços e Suporte da AWS (12%)",
    "category_en": "Cobrança, Preços e Suporte da AWS (12%)",
    "objective": "4.3 Identificar recursos gratuitos de documentação e segurança da AWS",
    "what_it_tests": "Todos os clientes da AWS têm acesso gratuito a fóruns de discussão, blogs oficiais de segurança, whitepapers (documentos técnicos) e guias de melhores práticas.",
    "question": "Quais das seguintes ações relacionadas à segurança estão disponíveis sem custo?",
    "options": [
      {
        "id": "A",
        "text": "Ligar para o AWS Support"
      },
      {
        "id": "B",
        "text": "Acesso a fóruns, blogs e documentos técnicos"
      },
      {
        "id": "C",
        "text": "Entrar em contato com os serviços profissionais da AWS para solicitar um workshop"
      },
      {
        "id": "D",
        "text": "Assistir a aulas da AWS em uma universidade local"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "Todos os clientes da AWS têm acesso gratuito a fóruns de discussão, blogs oficiais de segurança, whitepapers (documentos técnicos) e guias de melhores práticas.",
    "explanation_why_correct": "O **acesso a fóruns, blogs e documentos técnicos / whitepapers (B)** está disponível gratuitamente para qualquer usuário ou cliente da AWS.",
    "explanation_why_incorrect": "Suporte técnico telefônico da AWS, workshops do AWS Professional Services e cursos universitários possuem custos associados.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 24,
    "type": "single",
    "category": "Cobrança, Preços e Suporte da AWS (12%)",
    "category_en": "Cobrança, Preços e Suporte da AWS (12%)",
    "objective": "4.1 Comparar Instâncias Reservadas Padrão e Conversíveis",
    "what_it_tests": "As Instâncias Reservadas Conversíveis (Convertible RIs) permitem trocar os atributos da reserva (família de instância, sistema operacional, locação) durante o prazo de vigência, desde que a nova reserva tenha valor igual ou superior.",
    "question": "Qual dos modelos de preços de instâncias reservadas (RI) pode mudar os atributos da RI sempre que a troca resultar na criação de RI de igual ou maior valor?",
    "options": [
      {
        "id": "A",
        "text": "Instâncias Reservadas dedicadas (Dedicated RIs)"
      },
      {
        "id": "B",
        "text": "Instâncias Reservadas convertíveis (Convertible RIs)"
      },
      {
        "id": "C",
        "text": "Instâncias Reservadas programadas (Scheduled RIs)"
      },
      {
        "id": "D",
        "text": "Instâncias Reservadas padrão (Standard RIs)"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "As Instâncias Reservadas Conversíveis (Convertible RIs) permitem trocar os atributos da reserva (família de instância, sistema operacional, locação) durante o prazo de vigência, desde que a nova reserva tenha valor igual ou superior.",
    "explanation_why_correct": "As **Instâncias Reservadas convertíveis (Convertible RIs - B)** oferecem a flexibilidade de alterar atributos da instância ao longo do contrato.",
    "explanation_why_incorrect": "Standard RIs oferecem maior desconto, mas não permitem trocar a família de instância ou o sistema operacional.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 25,
    "type": "single",
    "category": "Conceitos da Nuvem AWS (24%)",
    "category_en": "Conceitos da Nuvem AWS (24%)",
    "objective": "1.1 Definir os conceitos de economia e TCO na Nuvem AWS",
    "what_it_tests": "A computação elástica permite dimensionar a capacidade para cima ou para baixo automaticamente conforme a demanda real, evitando pagar por servidores ociosos e reduzindo diretamente o TCO.",
    "question": "Qual função da AWS reduzirá o custo total de propriedade (TCO) do cliente?",
    "options": [
      {
        "id": "A",
        "text": "Modelo de segurança de responsabilidade compartilhada"
      },
      {
        "id": "B",
        "text": "Computação elástica"
      },
      {
        "id": "C",
        "text": "Habitação individual"
      },
      {
        "id": "D",
        "text": "Criptografia"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "A computação elástica permite dimensionar a capacidade para cima ou para baixo automaticamente conforme a demanda real, evitando pagar por servidores ociosos e reduzindo diretamente o TCO.",
    "explanation_why_correct": "A **Computação elástica (B)** reduz o Custo Total de Propriedade (TCO) ao ajustar os recursos à demanda real, eliminando a capacidade ociosa.",
    "explanation_why_incorrect": "Habitação individual (Single-tenancy / Dedicated) aumenta o custo; criptografia e responsabilidade compartilhada são pilares de segurança, não redutores diretos de TCO.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 26,
    "type": "single",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.4 Identificar serviços que escalam automaticamente com o tráfego web",
    "what_it_tests": "O Elastic Load Balancing (ELB) é um serviço gerenciado que escala automaticamente sua capacidade de balanceamento em resposta ao aumento do tráfego de rede e web recebido.",
    "question": "Qual dos seguintes serviços será escalado automaticamente com um aumento esperado no tráfego web?",
    "options": [
      {
        "id": "A",
        "text": "AWS CodePipeline"
      },
      {
        "id": "B",
        "text": "Amazon EBS"
      },
      {
        "id": "C",
        "text": "Elastic Load Balancing"
      },
      {
        "id": "D",
        "text": "AWS Direct Connect"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "O Elastic Load Balancing (ELB) é um serviço gerenciado que escala automaticamente sua capacidade de balanceamento em resposta ao aumento do tráfego de rede e web recebido.",
    "explanation_why_correct": "O **Elastic Load Balancing (C)** dimensiona automaticamente para lidar com variações e picos no tráfego web de entrada e distribuí-lo entre as instâncias.",
    "explanation_why_incorrect": "CodePipeline é de CI/CD; Amazon EBS é volume de disco de bloco; e AWS Direct Connect é um link físico dedicado de rede.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 27,
    "type": "single",
    "category": "Segurança e Conformidade na AWS (30%)",
    "category_en": "Segurança e Conformidade na AWS (30%)",
    "objective": "2.2 Identificar recursos de conformidade e relatórios de auditoria na AWS",
    "what_it_tests": "O AWS Artifact é o portal centralizado sob demanda e sem custo para acessar relatórios de conformidade e auditoria de terceiros da AWS, como relatórios SOC 1, SOC 2, SOC 3, ISO e PCI.",
    "question": "Onde estão os documentos de conformidade da AWS, como um relatório SOC 1?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Inspector"
      },
      {
        "id": "B",
        "text": "AWS Artifact"
      },
      {
        "id": "C",
        "text": "AWS CloudTrail"
      },
      {
        "id": "D",
        "text": "AWS Certificate Manager"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "O AWS Artifact é o portal centralizado sob demanda e sem custo para acessar relatórios de conformidade e auditoria de terceiros da AWS, como relatórios SOC 1, SOC 2, SOC 3, ISO e PCI.",
    "explanation_why_correct": "O **AWS Artifact (B)** fornece acesso sob demanda aos relatórios de segurança e conformidade da AWS, incluindo **SOC 1**, ISO 27001 e PCI DSS.",
    "explanation_why_incorrect": "Amazon Inspector avalia vulnerabilidades; CloudTrail registra chamadas de API; e Certificate Manager gerencia certificados SSL/TLS.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 28,
    "type": "multi",
    "category": "Segurança e Conformidade na AWS (30%)",
    "category_en": "Segurança e Conformidade na AWS (30%)",
    "objective": "2.1 Descrever o Modelo de Responsabilidade Compartilhada da AWS",
    "what_it_tests": "No modelo de responsabilidade compartilhada, o cliente é responsável por criptografar seus próprios dados no lado do cliente (Client-side encryption) e configurar controles de rede da VPC, como Network ACLs.",
    "question": "De acordo com o modelo de responsabilidade compartilhada da AWS, quais das seguintes atividades são responsabilidade do cliente? (Escolha duas.)",
    "options": [
      {
        "id": "A",
        "text": "Aplicação de patches nos componentes do sistema operacional para Amazon Relational Database Server (Amazon RDS)"
      },
      {
        "id": "B",
        "text": "Treinamento do pessoal do centro de dados"
      },
      {
        "id": "C",
        "text": "Manter controles ambientais dentro de um centro de dados"
      },
      {
        "id": "D",
        "text": "Criptografar dados no lado do cliente"
      },
      {
        "id": "E",
        "text": "Configuração de listas de controle de acesso à rede (ACL) (Access Control Lists)"
      }
    ],
    "correct_answer": [
      "D",
      "E"
    ],
    "official_rationale": "No modelo de responsabilidade compartilhada, o cliente é responsável por criptografar seus próprios dados no lado do cliente (Client-side encryption) e configurar controles de rede da VPC, como Network ACLs.",
    "explanation_why_correct": "São responsabilidades do cliente **criptografar dados no lado do cliente (D)** e **configurar listas de controle de acesso à rede - Network ACLs (E)**.",
    "explanation_why_incorrect": "Aplicar patches no SO do Amazon RDS (serviço gerenciado), treinar funcionários dos datacenters da AWS e manter controles ambientais físicos são responsabilidades da AWS.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 29,
    "type": "single",
    "category": "Conceitos da Nuvem AWS (24%)",
    "category_en": "Conceitos da Nuvem AWS (24%)",
    "objective": "1.3 Descrever padrões de arquitetura de alta disponibilidade na AWS",
    "what_it_tests": "Uma arquitetura de alta disponibilidade na AWS assume que falhas acontecerão e projeta o aplicativo de forma distribuída e resiliente para continuar funcionando mesmo quando um componente individual falha.",
    "question": "Qual é um padrão recomendado para projetar uma arquitetura de alta disponibilidade na AWS?",
    "options": [
      {
        "id": "A",
        "text": "Certifique-se de que os componentes tenham conectividade de rede de baixa latência."
      },
      {
        "id": "B",
        "text": "Certifique-se de que o aplicativo esteja projetado para se adaptar a falhas de qualquer componente."
      },
      {
        "id": "C",
        "text": "Execute instâncias suficientes do Amazon EC2 para operar com a carga máxima."
      },
      {
        "id": "D",
        "text": "Use um aplicativo monolítico que gerencie todas as operações."
      }
    ],
    "correct_answer": "B",
    "official_rationale": "Uma arquitetura de alta disponibilidade na AWS assume que falhas acontecerão e projeta o aplicativo de forma distribuída e resiliente para continuar funcionando mesmo quando um componente individual falha.",
    "explanation_why_correct": "**Certificar-se de que o aplicativo esteja projetado para se adaptar a falhas de qualquer componente (B)** é o padrão fundamental de alta disponibilidade na nuvem.",
    "explanation_why_incorrect": "Arquiteturas monolíticas têm ponto único de falha; manter instâncias fixas na carga máxima desperdiça recursos; e baixa latência por si só não garante recuperação de falhas.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 30,
    "type": "single",
    "category": "Conceitos da Nuvem AWS (24%)",
    "category_en": "Conceitos da Nuvem AWS (24%)",
    "objective": "1.3 Descrever os princípios de design da arquitetura na nuvem",
    "what_it_tests": "O acoplamento fraco (componentes desacoplados / loosely coupled) garante que se um componente falhar ou ficar sobrecarregado, os demais componentes continuem funcionando de forma independente (usando filas como SQS ou balanceadores).",
    "question": "De acordo com as melhores práticas, como deve ser projetado um aplicativo para ser executado na nuvem da AWS?",
    "options": [
      {
        "id": "A",
        "text": "Use componentes fortemente acoplados."
      },
      {
        "id": "B",
        "text": "Use componentes desacoplados."
      },
      {
        "id": "C",
        "text": "Use componentes acoplados com pouca frequência."
      },
      {
        "id": "D",
        "text": "Use componentes frequentemente acoplados."
      }
    ],
    "correct_answer": "B",
    "official_rationale": "O acoplamento fraco (componentes desacoplados / loosely coupled) garante que se um componente falhar ou ficar sobrecarregado, os demais componentes continuem funcionando de forma independente (usando filas como SQS ou balanceadores).",
    "explanation_why_correct": "As melhores práticas da AWS recomendam **usar componentes desacoplados (loosely coupled - B)** para isolar falhas e facilitar a escalabilidade independente.",
    "explanation_why_incorrect": "Componentes fortemente acoplados (tightly coupled) propagam falhas em cascata por todo o sistema.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 31,
    "type": "multi",
    "category": "Segurança e Conformidade na AWS (30%)",
    "category_en": "Segurança e Conformidade na AWS (30%)",
    "objective": "2.3 Identificar práticas recomendadas de segurança para usuários do AWS IAM",
    "what_it_tests": "Para proteger contas de usuários do IAM, a AWS suporta a aplicação de políticas de senha (complexidade mínima e expiração periódica) e a habilitação da Autenticação Multifator (MFA).",
    "question": "A AWS suporta quais dos seguintes métodos para adicionar segurança aos usuários do Identity and Access Management (IAM)? (Escolha dois.)",
    "options": [
      {
        "id": "A",
        "text": "Implementação do Amazon Rekognition"
      },
      {
        "id": "B",
        "text": "Bloquear o acesso com grupos de segurança"
      },
      {
        "id": "C",
        "text": "Uso de recursos protegidos pelo AWS Shield"
      },
      {
        "id": "D",
        "text": "Impor a segurança e a expiração da senha"
      },
      {
        "id": "E",
        "text": "Uso da autenticação multifator (MFA)"
      }
    ],
    "correct_answer": [
      "D",
      "E"
    ],
    "official_rationale": "Para proteger contas de usuários do IAM, a AWS suporta a aplicação de políticas de senha (complexidade mínima e expiração periódica) e a habilitação da Autenticação Multifator (MFA).",
    "explanation_why_correct": "Você adiciona segurança aos usuários do IAM ao **impor políticas de força e expiração de senha (D)** e ao **habilitar a autenticação multifator - MFA (E)**.",
    "explanation_why_incorrect": "Amazon Rekognition é visão computacional de IA; Security Groups protegem instâncias EC2 na rede; e AWS Shield protege contra DDoS.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 32,
    "type": "multi",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.3 Identificar serviços para dados que mudam constantemente",
    "what_it_tests": "Para dados dinâmicos que exigem leituras e gravações constantes com baixa latência, o Amazon RDS (banco de dados relacional transacional) e o Amazon EFS (sistema de arquivos compartilhado em tempo real) são ideais.",
    "question": "Quais serviços da AWS devem ser utilizados para leitura/escrita de dados que mudam constantemente? (Escolha dois.)",
    "options": [
      {
        "id": "A",
        "text": "Amazon Glacier"
      },
      {
        "id": "B",
        "text": "AWS Snowball"
      },
      {
        "id": "C",
        "text": "Amazon EFS"
      },
      {
        "id": "D",
        "text": "Amazon RDS"
      },
      {
        "id": "E",
        "text": "Amazon Redshift"
      }
    ],
    "correct_answer": [
      "D",
      "C"
    ],
    "official_rationale": "Para dados dinâmicos que exigem leituras e gravações constantes com baixa latência, o Amazon RDS (banco de dados relacional transacional) e o Amazon EFS (sistema de arquivos compartilhado em tempo real) são ideais.",
    "explanation_why_correct": "O **Amazon EFS (C)** e o **Amazon RDS (D)** são projetados para leitura e escrita contínua de dados que mudam constantemente.",
    "explanation_why_incorrect": "Glacier é para arquivamento frio; Snowball é dispositivo físico de transferência; e Redshift é otimizado para cargas analíticas OLAP em lote (data warehouse).",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 33,
    "type": "single",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.3 Identificar os benefícios do Amazon RDS",
    "what_it_tests": "O Amazon RDS é um serviço gerenciado que automatiza e simplifica tarefas administrativas demoradas, como provisionamento de hardware, configuração do banco, aplicação de patches e backups automatizados.",
    "question": "Qual é uma das vantagens do Amazon Relational Database Service (Amazon RDS)?",
    "options": [
      {
        "id": "A",
        "text": "Simplifica as tarefas de administração de bancos de dados relacionais."
      },
      {
        "id": "B",
        "text": "Escala automaticamente os bancos de dados para cargas."
      },
      {
        "id": "C",
        "text": "Fornece 99,99999999999% de confiabilidade e durabilidade."
      },
      {
        "id": "D",
        "text": "Permite que os usuários ajustem dinamicamente os recursos de CPU e RAM."
      }
    ],
    "correct_answer": "A",
    "official_rationale": "O Amazon RDS é um serviço gerenciado que automatiza e simplifica tarefas administrativas demoradas, como provisionamento de hardware, configuração do banco, aplicação de patches e backups automatizados.",
    "explanation_why_correct": "A principal vantagem do Amazon RDS é que ele **simplifica as tarefas de administração de bancos de dados relacionais (A)**.",
    "explanation_why_incorrect": "11 noves de durabilidade é característica do Amazon S3; e no RDS tradicional a instância tem tamanho definido (quem escala armazenamento automaticamente até 128 TB é o Aurora).",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 34,
    "type": "single",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.3 Identificar os serviços de banco de dados relacionais da AWS",
    "what_it_tests": "O Amazon Aurora é um banco de dados relacional nativo da nuvem totalmente compatível com MySQL e PostgreSQL, oferecendo até 5 vezes o desempenho do MySQL padrão e escalabilidade automática de armazenamento.",
    "question": "Um cliente precisa executar um banco de dados MySQL que possa ser escalado facilmente.\nQual serviço da AWS eles deveriam usar?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Aurora"
      },
      {
        "id": "B",
        "text": "Amazon DynamoDB"
      },
      {
        "id": "C",
        "text": "Amazon Redshift"
      },
      {
        "id": "D",
        "text": "Amazon ElastiCache"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "O Amazon Aurora é um banco de dados relacional nativo da nuvem totalmente compatível com MySQL e PostgreSQL, oferecendo até 5 vezes o desempenho do MySQL padrão e escalabilidade automática de armazenamento.",
    "explanation_why_correct": "O **Amazon Aurora (A)** é totalmente compatível com **MySQL** (e PostgreSQL) e foi projetado para escalar facilmente com alta disponibilidade em múltiplas AZs.",
    "explanation_why_incorrect": "DynamoDB é NoSQL; Redshift é Data Warehouse baseado em PostgreSQL; e ElastiCache é cache em memória (Redis/Memcached).",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 35,
    "type": "single",
    "category": "Conceitos da Nuvem AWS (24%)",
    "category_en": "Conceitos da Nuvem AWS (24%)",
    "objective": "1.2 Descrever os componentes da infraestrutura global da AWS",
    "what_it_tests": "Uma Zona de Disponibilidade (Availability Zone - AZ) consiste em um ou mais datacenters discretos com energia, refrigeração e redes redundantes, interconectados por links de fibra de ultrabaixa latência.",
    "question": "Qual dos seguintes componentes da infraestrutura global da AWS consiste em um ou mais data centers discretos interconectados por meio de links de baixa latência?",
    "options": [
      {
        "id": "A",
        "text": "Zona de disponibilidade"
      },
      {
        "id": "B",
        "text": "Redes privadas"
      },
      {
        "id": "C",
        "text": "Região"
      },
      {
        "id": "D",
        "text": "Edge Location"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Uma Zona de Disponibilidade (Availability Zone - AZ) consiste em um ou mais datacenters discretos com energia, refrigeração e redes redundantes, interconectados por links de fibra de ultrabaixa latência.",
    "explanation_why_correct": "Uma **Zona de disponibilidade (Availability Zone - A)** é composta por um ou mais datacenters discretos interconectados por links de baixa latência.",
    "explanation_why_incorrect": "Uma Região é um conjunto de Zonas de Disponibilidade; Edge Location é um ponto de presença de cache do CloudFront.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 36,
    "type": "single",
    "category": "Segurança e Conformidade na AWS (30%)",
    "category_en": "Segurança e Conformidade na AWS (30%)",
    "objective": "2.1 Identificar controles compartilhados no Modelo de Responsabilidade Compartilhada",
    "what_it_tests": "Os Controles Compartilhados (Shared Controls) aplicam-se tanto à camada de infraestrutura quanto à camada do cliente: incluem Gerenciamento de Patches, Gerenciamento de Configuração e Conscientização e Treinamento (Awareness and Training).",
    "question": "Qual dos seguintes é um controle compartilhado entre o cliente e a AWS?",
    "options": [
      {
        "id": "A",
        "text": "Fornecer uma chave para a criptografia do lado do cliente do Amazon S3"
      },
      {
        "id": "B",
        "text": "Controles ambientais dos centros de dados físicos da AWS (Environmental controls of AWS data centers)"
      },
      {
        "id": "C",
        "text": "Configuração de uma instância Amazon EC2"
      },
      {
        "id": "D",
        "text": "Conscientização e treinamento (Awareness and training)"
      }
    ],
    "correct_answer": "D",
    "official_rationale": "Os Controles Compartilhados (Shared Controls) aplicam-se tanto à camada de infraestrutura quanto à camada do cliente: incluem Gerenciamento de Patches, Gerenciamento de Configuração e Conscientização e Treinamento (Awareness and Training).",
    "explanation_why_correct": "**Conscientização e treinamento (Awareness and training - D)** é um controle compartilhado: a AWS treina seus funcionários e o cliente treina sua própria equipe.",
    "explanation_why_incorrect": "Controles ambientais físicos são 100% da AWS; já chaves de criptografia do lado do cliente e configuração de instâncias EC2 são responsabilidades do cliente.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 37,
    "type": "single",
    "category": "Conceitos da Nuvem AWS (24%)",
    "category_en": "Conceitos da Nuvem AWS (24%)",
    "objective": "1.3 Descrever arquiteturas de alta disponibilidade na AWS",
    "what_it_tests": "Para alcançar alta disponibilidade e tolerância a falhas de datacenter em uma Região da AWS, os recursos de computação devem ser distribuídos em pelo menos duas Zonas de Disponibilidade (Multi-AZ).",
    "question": "Em quantas zonas de disponibilidade os recursos computacionais devem ser provisionados para alcançar alta disponibilidade?",
    "options": [
      {
        "id": "A",
        "text": "Um mínimo de um"
      },
      {
        "id": "B",
        "text": "Um mínimo de três"
      },
      {
        "id": "C",
        "text": "Um mínimo de dois"
      },
      {
        "id": "D",
        "text": "Um mínimo de quatro ou mais"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "Para alcançar alta disponibilidade e tolerância a falhas de datacenter em uma Região da AWS, os recursos de computação devem ser distribuídos em pelo menos duas Zonas de Disponibilidade (Multi-AZ).",
    "explanation_why_correct": "Para alcançar alta disponibilidade, os recursos devem ser provisionados em **um mínimo de duas (C)** Zonas de Disponibilidade.",
    "explanation_why_incorrect": "Implantar em apenas uma AZ deixa a aplicação vulnerável a falhas daquela zona; três ou quatro AZs não são o mínimo exigido.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 38,
    "type": "single",
    "category": "Conceitos da Nuvem AWS (24%)",
    "category_en": "Conceitos da Nuvem AWS (24%)",
    "objective": "1.1 Definir os benefícios da migração para a Nuvem AWS",
    "what_it_tests": "Ao migrar de um datacenter local para a AWS, a empresa deixa de gastar tempo e recursos gerenciando hardware pesado (\"undifferentiated heavy lifting\") e passa a se concentrar nas atividades que diferenciam seu negócio.",
    "question": "Uma das vantagens de mover a infraestrutura de um data center local para a nuvem da AWS é:",
    "options": [
      {
        "id": "A",
        "text": "permite que a empresa elimine as faturas de TI. (IT bills)"
      },
      {
        "id": "B",
        "text": "permite que a empresa se concentre nas atividades comerciais."
      },
      {
        "id": "C",
        "text": "permite à empresa instalar um servidor no data center de cada cliente."
      },
      {
        "id": "D",
        "text": "permite que a empresa deixe os servidores sem patch."
      }
    ],
    "correct_answer": "B",
    "official_rationale": "Ao migrar de um datacenter local para a AWS, a empresa deixa de gastar tempo e recursos gerenciando hardware pesado (\"undifferentiated heavy lifting\") e passa a se concentrar nas atividades que diferenciam seu negócio.",
    "explanation_why_correct": "Mover para a AWS **permite que a empresa se concentre nas atividades comerciais e de inovação do seu negócio (B)** em vez de manter datacenters físicos.",
    "explanation_why_incorrect": "A nuvem não elimina totalmente os custos de TI (há a fatura mensal de uso da AWS) nem dispensa a aplicação de patches em sistemas sob responsabilidade do cliente.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 39,
    "type": "single",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.3 Comparar opções de armazenamento para backups de recuperação imediata",
    "what_it_tests": "O Amazon S3 oferece alta durabilidade (11 noves), baixo custo por GB e recuperação imediata (em milissegundos), sendo ideal para armazenar backups que precisam estar prontos para restauração rápida.",
    "question": "Qual é a opção de armazenamento duradouro e de menor custo para conservar os backups do banco de dados para recuperação imediata?",
    "options": [
      {
        "id": "A",
        "text": "Amazon S3"
      },
      {
        "id": "B",
        "text": "Amazon EBS"
      },
      {
        "id": "C",
        "text": "Amazon Glacier"
      },
      {
        "id": "D",
        "text": "Amazon EC2 Instance Store"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "O Amazon S3 oferece alta durabilidade (11 noves), baixo custo por GB e recuperação imediata (em milissegundos), sendo ideal para armazenar backups que precisam estar prontos para restauração rápida.",
    "explanation_why_correct": "O **Amazon S3 (A)** combina alta durabilidade, baixo custo e **recuperação imediata** para backups de banco de dados.",
    "explanation_why_incorrect": "O Amazon Glacier tem custo ainda menor, mas a recuperação leva de minutos a horas (não é imediata como o S3 Standard); EBS é mais caro; e Instance Store é temporário.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 40,
    "type": "single",
    "category": "Segurança e Conformidade na AWS (30%)",
    "category_en": "Segurança e Conformidade na AWS (30%)",
    "objective": "2.3 Identificar credenciais para acesso via AWS CLI",
    "what_it_tests": "Para acessar os serviços da AWS de forma programática através da AWS CLI (Command Line Interface) ou SDKs, os usuários do IAM utilizam Chaves de Acesso (Access Keys).",
    "question": "Qual função do AWS IAM permite que os desenvolvedores acessem os serviços da AWS através da AWS CLI?",
    "options": [
      {
        "id": "A",
        "text": "Chaves de API"
      },
      {
        "id": "B",
        "text": "Nomes de usuário/Senhas"
      },
      {
        "id": "C",
        "text": "Chaves de acesso"
      },
      {
        "id": "D",
        "text": "Chaves SSH"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "Para acessar os serviços da AWS de forma programática através da AWS CLI (Command Line Interface) ou SDKs, os usuários do IAM utilizam Chaves de Acesso (Access Keys).",
    "explanation_why_correct": "As **Chaves de acesso (Access keys - C)** do AWS IAM (compostas por Access Key ID e Secret Access Key) autenticam desenvolvedores na AWS CLI.",
    "explanation_why_incorrect": "Nomes de usuário e senhas são para login no Console Web; Chaves SSH são para acessar o sistema operacional de instâncias EC2 Linux.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 41,
    "type": "single",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.3 Identificar os serviços de banco de dados NoSQL da AWS",
    "what_it_tests": "O Amazon DynamoDB é um banco de dados NoSQL de chave-valor e documentos totalmente gerenciado e serverless, que oferece desempenho rápido e previsível em escala de milissegundos de um dígito.",
    "question": "Qual dos seguintes é um serviço de banco de dados NoSQL rápido e confiável?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Redshift"
      },
      {
        "id": "B",
        "text": "Amazon DynamoDB"
      },
      {
        "id": "C",
        "text": "Amazon RDS"
      },
      {
        "id": "D",
        "text": "Amazon S3"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "O Amazon DynamoDB é um banco de dados NoSQL de chave-valor e documentos totalmente gerenciado e serverless, que oferece desempenho rápido e previsível em escala de milissegundos de um dígito.",
    "explanation_why_correct": "O **Amazon DynamoDB (B)** é o serviço de banco de dados **NoSQL** rápido, confiável e totalmente gerenciado da AWS.",
    "explanation_why_incorrect": "Amazon RDS e Amazon Redshift são bancos de dados relacionais (SQL), e o Amazon S3 é armazenamento de objetos.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 42,
    "type": "single",
    "category": "Conceitos da Nuvem AWS (24%)",
    "category_en": "Conceitos da Nuvem AWS (24%)",
    "objective": "1.1 Definir o conceito de agilidade na Nuvem AWS",
    "what_it_tests": "A agilidade na nuvem refere-se à velocidade com que novos recursos de TI são disponibilizados para os desenvolvedores — reduzindo de semanas/meses para apenas alguns minutos o tempo para provisionar servidores.",
    "question": "Qual é um exemplo de agilidade na nuvem da AWS?",
    "options": [
      {
        "id": "A",
        "text": "Acesso a múltiplos tipos de instâncias"
      },
      {
        "id": "B",
        "text": "Uso de Faturamento consolidado para produzir uma única fatura"
      },
      {
        "id": "C",
        "text": "Acesso aos serviços gerenciados"
      },
      {
        "id": "D",
        "text": "Diminuição do tempo de aquisição de novos recursos computacionais"
      }
    ],
    "correct_answer": "D",
    "official_rationale": "A agilidade na nuvem refere-se à velocidade com que novos recursos de TI são disponibilizados para os desenvolvedores — reduzindo de semanas/meses para apenas alguns minutos o tempo para provisionar servidores.",
    "explanation_why_correct": "A **diminuição do tempo de aquisição/provisionamento de novos recursos computacionais (D)** é o exemplo clássico de agilidade na nuvem AWS.",
    "explanation_why_incorrect": "Faturamento consolidado é uma vantagem financeira/administrativa, enquanto a agilidade mede a rapidez de experimentação e entrega de recursos.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 43,
    "type": "single",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.8 Identificar serviços de governança de múltiplas contas na AWS",
    "what_it_tests": "O AWS Organizations permite consolidar várias contas da AWS em uma organização que você cria e gerencia centralmente, aplicando Políticas de Controle de Serviço (SCPs) e faturamento unificado.",
    "question": "Que serviço um cliente deve usar para consolidar e gerenciar centralmente várias contas da AWS?",
    "options": [
      {
        "id": "A",
        "text": "AWS IAM"
      },
      {
        "id": "B",
        "text": "AWS Schema Conversion Tool"
      },
      {
        "id": "C",
        "text": "AWS Organizations"
      },
      {
        "id": "D",
        "text": "AWS Config"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "O AWS Organizations permite consolidar várias contas da AWS em uma organização que você cria e gerencia centralmente, aplicando Políticas de Controle de Serviço (SCPs) e faturamento unificado.",
    "explanation_why_correct": "O **AWS Organizations (C)** permite consolidar e gerenciar centralmente múltiplas contas da AWS.",
    "explanation_why_incorrect": "IAM gerencia acessos dentro de uma conta; Schema Conversion Tool converte esquemas de banco de dados; e AWS Config audita configurações de recursos.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 44,
    "type": "single",
    "category": "Conceitos da Nuvem AWS (24%)",
    "category_en": "Conceitos da Nuvem AWS (24%)",
    "objective": "1.3 Descrever princípios de arquitetura elástica e paralela na AWS",
    "what_it_tests": "A nuvem permite escalar horizontalmente (\"Pense paralelo\"): como o custo de usar 100 instâncias por 1 hora é o mesmo de usar 1 instância por 100 horas, usar muitas instâncias em paralelo termina o trabalho muito mais rápido.",
    "question": "Qual abordagem para transcodificar uma grande quantidade de arquivos de vídeo individuais adere aos princípios da arquitetura da AWS?",
    "options": [
      {
        "id": "A",
        "text": "Usando muitas instâncias em paralelo"
      },
      {
        "id": "B",
        "text": "Usando hardware dedicado"
      },
      {
        "id": "C",
        "text": "Usar uma única instância grande durante as horas de menor atividade"
      },
      {
        "id": "D",
        "text": "Usar um tipo de instância de GPU grande (GPU large instance type)"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "A nuvem permite escalar horizontalmente (\"Pense paralelo\"): como o custo de usar 100 instâncias por 1 hora é o mesmo de usar 1 instância por 100 horas, usar muitas instâncias em paralelo termina o trabalho muito mais rápido.",
    "explanation_why_correct": "**Usar muitas instâncias em paralelo (A)** aplica o princípio de escalabilidade horizontal e processamento paralelo da arquitetura AWS.",
    "explanation_why_incorrect": "Usar uma única instância gigante ou hardware dedicado cria gargalos, leva mais tempo e cria um ponto único de falha.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 45,
    "type": "single",
    "category": "Segurança e Conformidade na AWS (30%)",
    "category_en": "Segurança e Conformidade na AWS (30%)",
    "objective": "2.1 Identificar responsabilidades exclusivas da AWS",
    "what_it_tests": "A segurança física dos datacenters (guardas, biometria, câmeras, controle de acesso físico e auditoria das instalações físicas) é de responsabilidade exclusiva da AWS.",
    "question": "De qual processo de auditoria a AWS é a única responsável?",
    "options": [
      {
        "id": "A",
        "text": "Políticas de AWS IAM (AWS IAM policies)"
      },
      {
        "id": "B",
        "text": "Políticas de bucket de Amazon S3 (Amazon S3 bucket policies)"
      },
      {
        "id": "C",
        "text": "Segurança física (Physical security)"
      },
      {
        "id": "D",
        "text": "Registros de AWS CloudTrail (AWS CloudTrail Logs)"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "A segurança física dos datacenters (guardas, biometria, câmeras, controle de acesso físico e auditoria das instalações físicas) é de responsabilidade exclusiva da AWS.",
    "explanation_why_correct": "A **Segurança física (Physical security - C)** dos datacenters e sua respectiva auditoria física são responsabilidades exclusivas da AWS.",
    "explanation_why_incorrect": "Políticas do IAM, políticas de bucket do S3 e análise dos registros do CloudTrail da conta são responsabilidades do cliente.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 46,
    "type": "single",
    "category": "Conceitos da Nuvem AWS (24%)",
    "category_en": "Conceitos da Nuvem AWS (24%)",
    "objective": "1.2 Descrever os benefícios da infraestrutura global da AWS",
    "what_it_tests": "O Alcance Global (Global Reach) da infraestrutura da AWS (múltiplas Regiões e centenas de Pontos de Presença do CloudFront ao redor do mundo) permite implantar aplicações próximas aos usuários finais para garantir baixa latência.",
    "question": "Qual função da nuvem da AWS suportará os requisitos de baixa latência de uma empresa internacional para todos os seus clientes?",
    "options": [
      {
        "id": "A",
        "text": "Tolerância a falhas (Fault tolerance)"
      },
      {
        "id": "B",
        "text": "Preços de pagamento por uso (Pay-as-you-go pricing)"
      },
      {
        "id": "C",
        "text": "Alcance global (Global reach)"
      },
      {
        "id": "D",
        "text": "Alta disponibilidade (High availability)"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "O Alcance Global (Global Reach) da infraestrutura da AWS (múltiplas Regiões e centenas de Pontos de Presença do CloudFront ao redor do mundo) permite implantar aplicações próximas aos usuários finais para garantir baixa latência.",
    "explanation_why_correct": "O **Alcance global (Global reach - C)** da AWS permite posicionar aplicativos e caches perto de clientes internacionais para atender a requisitos de baixa latência.",
    "explanation_why_incorrect": "Tolerância a falhas e alta disponibilidade focam em resiliência contra quedas; preços pay-as-you-go focam em modelo financeiro.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 47,
    "type": "single",
    "category": "Segurança e Conformidade na AWS (30%)",
    "category_en": "Segurança e Conformidade na AWS (30%)",
    "objective": "2.1 Descrever o Modelo de Responsabilidade Compartilhada para o Amazon EC2",
    "what_it_tests": "Para serviços de IaaS como o Amazon EC2, o cliente é responsável pelo gerenciamento do sistema operacional convidado (Guest OS), incluindo a instalação de atualizações e aplicação de patches de segurança.",
    "question": "Qual das seguintes é responsabilidade do cliente segundo o modelo de responsabilidade compartilhada da AWS?",
    "options": [
      {
        "id": "A",
        "text": "Correção da infraestrutura subjacente (Patching underlying infrastructure)"
      },
      {
        "id": "B",
        "text": "Correção de instâncias Amazon EC2 (Patching Amazon EC2 instances)"
      },
      {
        "id": "C",
        "text": "Segurança física (Physical security)"
      },
      {
        "id": "D",
        "text": "Correção da infraestrutura de rede (Patching network infrastructure)"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "Para serviços de IaaS como o Amazon EC2, o cliente é responsável pelo gerenciamento do sistema operacional convidado (Guest OS), incluindo a instalação de atualizações e aplicação de patches de segurança.",
    "explanation_why_correct": "A **correção (patching) de instâncias Amazon EC2 (B)** (sistema operacional convidado e aplicativos instalados) é responsabilidade do cliente.",
    "explanation_why_incorrect": "A correção da infraestrutura física subjacente, segurança física e infraestrutura de rede global são responsabilidades da AWS.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 48,
    "type": "single",
    "category": "Cobrança, Preços e Suporte da AWS (12%)",
    "category_en": "Cobrança, Preços e Suporte da AWS (12%)",
    "objective": "4.2 Identificar benefícios financeiros do AWS Organizations",
    "what_it_tests": "Ao ativar o Faturamento Consolidado (Consolidated Billing) no AWS Organizations, o uso de todas as contas-membro é somado para atingir faixas de desconto por volume sem precisar mover ou alterar recursos.",
    "question": "Um cliente utiliza várias contas da AWS com faturamento independente.\nComo o cliente pode aproveitar os descontos por volume com um impacto mínimo nos recursos da AWS?",
    "options": [
      {
        "id": "A",
        "text": "Crie uma conta global da AWS e mova todos os recursos da AWS para essa conta."
      },
      {
        "id": "B",
        "text": "Utilize a função de faturamento consolidado do AWS Organizations."
      },
      {
        "id": "C",
        "text": "Inscreva-se para obter três anos de preços de instância reservada antecipadamente."
      },
      {
        "id": "D",
        "text": "Inscreva-se no plano de suporte da AWS Enterprise para obter descontos por volume."
      }
    ],
    "correct_answer": "B",
    "official_rationale": "Ao ativar o Faturamento Consolidado (Consolidated Billing) no AWS Organizations, o uso de todas as contas-membro é somado para atingir faixas de desconto por volume sem precisar mover ou alterar recursos.",
    "explanation_why_correct": "Utilizar a **função de faturamento consolidado do AWS Organizations (B)** agrega o consumo de todas as contas para obter descontos por volume sem impacto nos recursos.",
    "explanation_why_incorrect": "Mover todos os recursos para uma única conta gera alto impacto operacional e risco; RIs e Enterprise Support não substituem a agregação de volume entre contas.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 49,
    "type": "multi",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.8 Identificar as características do Amazon CloudWatch Logs",
    "what_it_tests": "O Amazon CloudWatch Logs permite monitorar logs de aplicativos e sistemas quase em tempo real e oferece configurações de retenção ajustáveis (de 1 dia a 10 anos, ou sem expiração).",
    "question": "Quais das seguintes são características do Amazon CloudWatch Logs? (Escolha duas.)",
    "options": [
      {
        "id": "A",
        "text": "Resumos do Amazon Simple Notification Service (Amazon SNS)"
      },
      {
        "id": "B",
        "text": "Fornecido sem custo"
      },
      {
        "id": "C",
        "text": "Retenção ajustável"
      },
      {
        "id": "D",
        "text": "Análises gratuitas do Amazon Elasticsearch Service"
      },
      {
        "id": "E",
        "text": "Monitoramento em tempo real"
      }
    ],
    "correct_answer": [
      "C",
      "E"
    ],
    "official_rationale": "O Amazon CloudWatch Logs permite monitorar logs de aplicativos e sistemas quase em tempo real e oferece configurações de retenção ajustáveis (de 1 dia a 10 anos, ou sem expiração).",
    "explanation_why_correct": "São características do Amazon CloudWatch Logs a **retenção ajustável (C)** (você define por quanto tempo os logs são guardados) e o **monitoramento em tempo real (E)**.",
    "explanation_why_incorrect": "O CloudWatch Logs é um serviço pago conforme ingestão/armazenamento (acima do nível gratuito) e o OpenSearch/Elasticsearch também é cobrado pelos recursos consumidos.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 50,
    "type": "single",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.4 Identificar os serviços de rede e DNS da AWS",
    "what_it_tests": "O Amazon Route 53 é um serviço web de Sistema de Nomes de Domínio (DNS) em nuvem altamente disponível e escalável gerenciado pela AWS.",
    "question": "Qual dos seguintes é um serviço web do Sistema de Nomes de Domínio (DNS) gerenciado pela AWS?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Route 53"
      },
      {
        "id": "B",
        "text": "Amazon SageMaker"
      },
      {
        "id": "C",
        "text": "Amazon Neptune"
      },
      {
        "id": "D",
        "text": "Amazon Lightsail"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "O Amazon Route 53 é um serviço web de Sistema de Nomes de Domínio (DNS) em nuvem altamente disponível e escalável gerenciado pela AWS.",
    "explanation_why_correct": "O **Amazon Route 53 (A)** é o serviço gerenciado de DNS (Domain Name System) da AWS que traduz nomes de domínio em endereços IP e gerencia o roteamento de tráfego.",
    "explanation_why_incorrect": "SageMaker é para Machine Learning; Amazon Neptune é banco de dados de grafos; e Amazon Lightsail é servidor virtual privado simplificado (VPS).",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  }
];

const AWS_SIMULADO_3_QUESTIONS = [
  {
    "id": 1,
    "type": "single",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.3 Identificar as classes de armazenamento do Amazon S3",
    "what_it_tests": "Como os sprites de personagens são baixados e armazenados em cache localmente no computador do jogador (sendo acessados com pouca frequência no S3 após o download inicial), carregar diretamente para o S3 Standard-IA (Infrequent Access) reduz o custo de armazenamento desde o primeiro dia.",
    "question": "Um cliente está usando seu serviço baseado em S3 para armazenar sprites de personagens do jogo. Quando os jogadores recuperam esses sprites, eles são armazenados temporariamente no computador do jogador. Se o bucket do S3 estiver usando uma classe de armazenamento padrão, como você pode otimizar ainda mais os custos?",
    "options": [
      {
        "id": "A",
        "text": "Faça com que o cliente carregue diretamente os sprites para o S3 Standard - Acesso Infrequente"
      },
      {
        "id": "B",
        "text": "Faça com que o cliente comprima os sprites para reduzir o consumo de armazenamento"
      },
      {
        "id": "C",
        "text": "Adicione um ciclo de vida para mover sprites para o padrão S3 - Acesso pouco frequente após o cliente carregá-los"
      },
      {
        "id": "D",
        "text": "Adicione uma política de ciclo de vida para mover sprites para o S3 Glacier depois que o cliente os carregar"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Como os sprites de personagens são baixados e armazenados em cache localmente no computador do jogador (sendo acessados com pouca frequência no S3 após o download inicial), carregar diretamente para o S3 Standard-IA (Infrequent Access) reduz o custo de armazenamento desde o primeiro dia.",
    "explanation_why_correct": "Fazer upload diretamente para o **S3 Standard - Acesso Infrequente (S3 Standard-IA - A)** economiza custos de armazenamento para arquivos que são mantidos em cache no cliente e acessados com pouca frequência.",
    "explanation_why_incorrect": "Mover via política de ciclo de vida exige esperar pelo menos 30 dias no S3 Standard; e o S3 Glacier não permite acesso em tempo real quando um novo jogador precisar baixar os sprites.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 2,
    "type": "single",
    "category": "Cobrança, Preços e Suporte da AWS (12%)",
    "category_en": "Cobrança, Preços e Suporte da AWS (12%)",
    "objective": "4.1 Identificar opções de licenciamento (BYOL) no Amazon RDS",
    "what_it_tests": "No Amazon RDS, o mecanismo Oracle suporta o modelo Bring Your Own License (BYOL - Traga sua própria licença), além do modelo License Included.",
    "question": "Qual dos seguintes tipos de RDS permite trazer a sua própria licença (BYOL)?",
    "options": [
      {
        "id": "A",
        "text": "MS SQL"
      },
      {
        "id": "B",
        "text": "PostgreSQL"
      },
      {
        "id": "C",
        "text": "Oracle"
      },
      {
        "id": "D",
        "text": "MySQL"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "No Amazon RDS, o mecanismo Oracle suporta o modelo Bring Your Own License (BYOL - Traga sua própria licença), além do modelo License Included.",
    "explanation_why_correct": "O mecanismo **Oracle (C)** no Amazon RDS permite que você traga suas próprias licenças de banco de dados existentes (**BYOL**).",
    "explanation_why_incorrect": "PostgreSQL e MySQL são bancos de código aberto gratuitos (sem custo de licença comercial BYOL); e nesta questão do simulado o gabarito oficial aponta Oracle (C).",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 3,
    "type": "single",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.1 Identificar ferramentas de desenvolvedor e CI/CD na AWS",
    "what_it_tests": "O AWS CodeStar permite desenvolver, compilar e implantar aplicativos rapidamente na AWS, configurando automaticamente toda a cadeia de ferramentas de entrega contínua (CodeCommit, CodeBuild, CodeDeploy e CodePipeline) em minutos.",
    "question": "Ao implementar integração contínua e entrega contínua (CI/CD) em sua arquitetura de nuvem, qual serviço facilitará a configuração de toda a cadeia de ferramentas de desenvolvimento e entrega contínua para codificação, construção, teste e implantação do código do aplicativo?",
    "options": [
      {
        "id": "A",
        "text": "AWS CodeBuild"
      },
      {
        "id": "B",
        "text": "AWS CodePipeline"
      },
      {
        "id": "C",
        "text": "AWS CodeStar"
      },
      {
        "id": "D",
        "text": "AWS CodeCommit"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "O AWS CodeStar permite desenvolver, compilar e implantar aplicativos rapidamente na AWS, configurando automaticamente toda a cadeia de ferramentas de entrega contínua (CodeCommit, CodeBuild, CodeDeploy e CodePipeline) em minutos.",
    "explanation_why_correct": "O **AWS CodeStar (C)** fornece uma interface unificada que configura automaticamente toda a cadeia de ferramentas CI/CD (codificação, build, teste e deploy).",
    "explanation_why_incorrect": "CodeCommit, CodeBuild e CodePipeline são componentes individuais da esteira, enquanto o CodeStar cria e integra todos eles de uma só vez.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 4,
    "type": "single",
    "category": "Conceitos da Nuvem AWS (24%)",
    "category_en": "Conceitos da Nuvem AWS (24%)",
    "objective": "1.1 Comparar modelos de serviço em nuvem (IaaS, PaaS, SaaS)",
    "what_it_tests": "A Infraestrutura como Serviço (IaaS) fornece os blocos fundamentais de TI em nuvem (servidores virtuais como instâncias Amazon EC2, rede e armazenamento) com o mais alto nível de controle sobre o sistema operacional.",
    "question": "Qual modelo de computação em nuvem lida com serviços como instâncias do EC2?",
    "options": [
      {
        "id": "A",
        "text": "DBaaS"
      },
      {
        "id": "B",
        "text": "SaaS"
      },
      {
        "id": "C",
        "text": "PaaS"
      },
      {
        "id": "D",
        "text": "IaaS"
      }
    ],
    "correct_answer": "D",
    "official_rationale": "A Infraestrutura como Serviço (IaaS) fornece os blocos fundamentais de TI em nuvem (servidores virtuais como instâncias Amazon EC2, rede e armazenamento) com o mais alto nível de controle sobre o sistema operacional.",
    "explanation_why_correct": "O modelo **IaaS (Infrastructure as a Service - D)** abrange servidores virtuais como as instâncias do **Amazon EC2**.",
    "explanation_why_incorrect": "PaaS abstrai o sistema operacional (ex.: Elastic Beanstalk); SaaS entrega um software pronto ao usuário final; e DBaaS é específico para bancos gerenciados.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 5,
    "type": "single",
    "category": "Conceitos da Nuvem AWS (24%)",
    "category_en": "Conceitos da Nuvem AWS (24%)",
    "objective": "1.1 Definir as 6 vantagens da computação em nuvem AWS",
    "what_it_tests": "Ao usar a nuvem AWS, a empresa se beneficia das enormes economias de escala (massive economies of scale) agregadas de centenas de milhares de clientes, obtendo preços mais baixos.",
    "question": "Uma empresa está planejando usar a Nuvem AWS para aumentar os recursos de seu data center local para melhorar o atendimento de seus clientes em todo o mundo. Como uma empresa se beneficia ao usar a AWS?",
    "options": [
      {
        "id": "A",
        "text": "Beneficie-se de grandes descontos no site de compras Amazon.com"
      },
      {
        "id": "B",
        "text": "Substitua os altos custos variáveis por despesas iniciais de infraestrutura de capital"
      },
      {
        "id": "C",
        "text": "Beneficie-se de enormes economias em escala"
      },
      {
        "id": "D",
        "text": "Substitua os baixos custos variáveis por despesas iniciais de infraestrutura de capital"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "Ao usar a nuvem AWS, a empresa se beneficia das enormes economias de escala (massive economies of scale) agregadas de centenas de milhares de clientes, obtendo preços mais baixos.",
    "explanation_why_correct": "Uma das seis vantagens clássicas da nuvem AWS é **beneficiar-se de enormes economias em escala (C)**.",
    "explanation_why_incorrect": "A nuvem AWS troca despesas de capital (CapEx) por despesas variáveis baixas (não o contrário) e não concede descontos na loja de varejo Amazon.com.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 6,
    "type": "single",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.3 Identificar tipos de volumes do Amazon EBS",
    "what_it_tests": "Os volumes SSD de uso geral (General Purpose SSD - gp2/gp3) equilibram preço e desempenho para uma ampla variedade de cargas de trabalho e são recomendados pela AWS para volumes de inicialização (boot volumes).",
    "question": "Que tipo de volume do EBS é recomendado para a maioria das cargas de trabalho e também pode ser usado como volume de inicialização?",
    "options": [
      {
        "id": "A",
        "text": "HDD otimizado para taxa de transferência"
      },
      {
        "id": "B",
        "text": "SSD de uso geral"
      },
      {
        "id": "C",
        "text": "Disco rígido frio"
      },
      {
        "id": "D",
        "text": "SSD IOPS provisionados"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "Os volumes SSD de uso geral (General Purpose SSD - gp2/gp3) equilibram preço e desempenho para uma ampla variedade de cargas de trabalho e são recomendados pela AWS para volumes de inicialização (boot volumes).",
    "explanation_why_correct": "O **SSD de uso geral (General Purpose SSD - B)** é recomendado para a maioria das cargas de trabalho e pode ser usado como **volume de inicialização (boot)** do EC2.",
    "explanation_why_incorrect": "Volumes HDD (Throughput Optimized st1 e Cold HDD sc1) não podem ser usados como volumes de boot; Provisioned IOPS SSD (io1/io2) é voltado para cargas extremas de I/O de alto custo.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 7,
    "type": "single",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.4 Identificar serviços de entrega de conteúdo (CDN) da AWS",
    "what_it_tests": "O Amazon CloudFront é a rede de entrega de conteúdo (CDN) global da AWS que acelera a distribuição de conteúdo web tanto estático quanto dinâmico para usuários em todo o mundo.",
    "question": "Qual serviço da AWS permitirá que você forneça seu conteúdo dinâmico da web para usuários globalmente?",
    "options": [
      {
        "id": "A",
        "text": "Amazon S3"
      },
      {
        "id": "B",
        "text": "AWS Elastic Load Balancer"
      },
      {
        "id": "C",
        "text": "Amazon Route 53"
      },
      {
        "id": "D",
        "text": "Amazon CloudFront"
      }
    ],
    "correct_answer": "D",
    "official_rationale": "O Amazon CloudFront é a rede de entrega de conteúdo (CDN) global da AWS que acelera a distribuição de conteúdo web tanto estático quanto dinâmico para usuários em todo o mundo.",
    "explanation_why_correct": "O **Amazon CloudFront (D)** entrega conteúdo estático e dinâmico da web globalmente com baixa latência usando a rede global de Pontos de Presença (Edge Locations) e o backbone da AWS.",
    "explanation_why_incorrect": "Amazon S3 armazena objetos estáticos em uma região; ELB balanceia tráfego regional; e Route 53 é o serviço de DNS.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 8,
    "type": "single",
    "category": "Conceitos da Nuvem AWS (24%)",
    "category_en": "Conceitos da Nuvem AWS (24%)",
    "objective": "1.3 Descrever os princípios de design da arquitetura na nuvem AWS",
    "what_it_tests": "O princípio correto da AWS é \"Serviços, não servidores\" (Services, not servers) — ou seja, priorizar serviços gerenciados e serverless em vez de manter servidores físicos/virtuais manualmente.",
    "question": "Qual dos seguintes não é um princípio de design padrão ao projetar sistemas na AWS?",
    "options": [
      {
        "id": "A",
        "text": "Recursos descartáveis em vez de servidores fixos"
      },
      {
        "id": "B",
        "text": "Projeto contra falhas"
      },
      {
        "id": "C",
        "text": "Acoplamento solto"
      },
      {
        "id": "D",
        "text": "Servidores, não serviços"
      }
    ],
    "correct_answer": "D",
    "official_rationale": "O princípio correto da AWS é \"Serviços, não servidores\" (Services, not servers) — ou seja, priorizar serviços gerenciados e serverless em vez de manter servidores físicos/virtuais manualmente.",
    "explanation_why_correct": "**\"Servidores, não serviços\" (D)** NÃO é um princípio de design da AWS (o princípio correto é exatamente o oposto: *\"Serviços, não servidores\"*).",
    "explanation_why_incorrect": "Recursos descartáveis, projeto contra falhas e acoplamento fraco (solto) são princípios de design oficiais da arquitetura AWS.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 9,
    "type": "single",
    "category": "Cobrança, Preços e Suporte da AWS (12%)",
    "category_en": "Cobrança, Preços e Suporte da AWS (12%)",
    "objective": "4.2 Identificar ferramentas de acompanhamento de faturamento e Instâncias Reservadas",
    "what_it_tests": "No AWS Billing Console (Console de Faturamento e Gerenciamento de Custos), o cliente pode visualizar relatórios de utilização e cobertura de suas Instâncias Reservadas no último mês.",
    "question": "Onde o cliente pode visualizar o uso da Instância Reservada no último mês?",
    "options": [
      {
        "id": "A",
        "text": "AWS Billing Console"
      },
      {
        "id": "B",
        "text": "Amazon S3"
      },
      {
        "id": "C",
        "text": "AWS Organizations"
      },
      {
        "id": "D",
        "text": "Amazon EC2"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "No AWS Billing Console (Console de Faturamento e Gerenciamento de Custos), o cliente pode visualizar relatórios de utilização e cobertura de suas Instâncias Reservadas no último mês.",
    "explanation_why_correct": "O cliente pode visualizar o uso e relatórios de Instâncias Reservadas através do **AWS Billing Console (A)** (e relatórios do Cost Explorer dentro dele).",
    "explanation_why_incorrect": "Amazon S3 e Amazon EC2 são serviços de infraestrutura, e o AWS Organizations gerencia a estrutura de contas.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 10,
    "type": "single",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.3 Identificar serviços de armazenamento de objetos na AWS",
    "what_it_tests": "O Amazon S3 (Simple Storage Service) é o serviço de armazenamento de objetos da AWS projetado para oferecer escalabilidade praticamente ilimitada, alta durabilidade e excelente custo-benefício.",
    "question": "Qual das opções a seguir é a escolha mais econômica e escalável para armazenamento de objetos?",
    "options": [
      {
        "id": "A",
        "text": "AWS Storage Gateway"
      },
      {
        "id": "B",
        "text": "Amazon EFS"
      },
      {
        "id": "C",
        "text": "Amazon EBS"
      },
      {
        "id": "D",
        "text": "Amazon S3"
      }
    ],
    "correct_answer": "D",
    "official_rationale": "O Amazon S3 (Simple Storage Service) é o serviço de armazenamento de objetos da AWS projetado para oferecer escalabilidade praticamente ilimitada, alta durabilidade e excelente custo-benefício.",
    "explanation_why_correct": "O **Amazon S3 (D)** é a escolha mais econômica, durável e escalável para **armazenamento de objetos** na AWS.",
    "explanation_why_incorrect": "EBS é armazenamento de bloco; EFS é armazenamento de arquivos NFS; e Storage Gateway é uma solução de armazenamento híbrido.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 11,
    "type": "single",
    "category": "Cobrança, Preços e Suporte da AWS (12%)",
    "category_en": "Cobrança, Preços e Suporte da AWS (12%)",
    "objective": "4.2 Identificar descontos por volume no Faturamento Consolidado",
    "what_it_tests": "O Amazon S3 possui preços escalonados por faixas de volume (tiered pricing): quanto mais terabytes você armazena e transfere, menor o preço por GB. Com o Faturamento Consolidado, o uso de S3 de todas as contas é somado.",
    "question": "Qual serviço oferece descontos por volume quando você habilita o faturamento consolidado?",
    "options": [
      {
        "id": "A",
        "text": "Amazon CloudFront"
      },
      {
        "id": "B",
        "text": "Amazon S3"
      },
      {
        "id": "C",
        "text": "AWS CloudTrail"
      },
      {
        "id": "D",
        "text": "Amazon SNS"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "O Amazon S3 possui preços escalonados por faixas de volume (tiered pricing): quanto mais terabytes você armazena e transfere, menor o preço por GB. Com o Faturamento Consolidado, o uso de S3 de todas as contas é somado.",
    "explanation_why_correct": "O **Amazon S3 (B)** oferece preços por faixas de uso (descontos por volume) que são combinados entre todas as contas quando você ativa o faturamento consolidado.",
    "explanation_why_incorrect": "No gabarito deste simulado para exemplo clássico de desconto por volume de armazenamento no Consolidated Billing, a resposta é Amazon S3 (B).",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 12,
    "type": "single",
    "category": "Cobrança, Preços e Suporte da AWS (12%)",
    "category_en": "Cobrança, Preços e Suporte da AWS (12%)",
    "objective": "4.1 Identificar fatores de preço do Amazon S3",
    "what_it_tests": "Na AWS, a transferência de dados de entrada (Data Transfer IN) da internet para o Amazon S3 (fazer upload de objetos) é gratuita.",
    "question": "Qual das ações a seguir não afeta os custos ao usar o Amazon S3?",
    "options": [
      {
        "id": "A",
        "text": "Fazendo solicitações GET para seus objetos S3"
      },
      {
        "id": "B",
        "text": "Custos de transferência de dados para fazer upload de objetos em seu bucket do S3"
      },
      {
        "id": "C",
        "text": "Escolhendo S3 Standard IA em vez de One Zone IA"
      },
      {
        "id": "D",
        "text": "Movendo objetos do seu bucket do S3 para outro bucket"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "Na AWS, a transferência de dados de entrada (Data Transfer IN) da internet para o Amazon S3 (fazer upload de objetos) é gratuita.",
    "explanation_why_correct": "Os **custos de transferência de dados para fazer upload de objetos em seu bucket do S3 (B)** não afetam a fatura, pois a transferência de entrada (upload da internet para o S3) é **gratuita**.",
    "explanation_why_incorrect": "Solicitações GET, escolha da classe de armazenamento (Standard-IA vs One Zone-IA) e transferência entre buckets de regiões diferentes geram cobranças.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 13,
    "type": "single",
    "category": "Conceitos da Nuvem AWS (24%)",
    "category_en": "Conceitos da Nuvem AWS (24%)",
    "objective": "1.3 Descrever arquiteturas de alta disponibilidade (Multi-AZ) na AWS",
    "what_it_tests": "O recurso Multi-AZ do Amazon RDS mantém automaticamente uma réplica em espera (standby) síncrona em outra Zona de Disponibilidade e realiza failover automático em caso de falha.",
    "question": "Qual das opções a seguir é um exemplo de ter um aplicativo altamente disponível na AWS?",
    "options": [
      {
        "id": "A",
        "text": "Executando instâncias spot para suas cargas de trabalho do EC2"
      },
      {
        "id": "B",
        "text": "Executando sua instância do RDS com multi-AZ habilitado"
      },
      {
        "id": "C",
        "text": "Usando SQS para desacoplar mensagens entre um remetente e um destinatário"
      },
      {
        "id": "D",
        "text": "Executando o CloudFront para o site estático em seu bucket do S3"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "O recurso Multi-AZ do Amazon RDS mantém automaticamente uma réplica em espera (standby) síncrona em outra Zona de Disponibilidade e realiza failover automático em caso de falha.",
    "explanation_why_correct": "**Executar sua instância do RDS com Multi-AZ habilitado (B)** é um exemplo clássico de alta disponibilidade, garantindo continuidade caso uma AZ inteira falhe.",
    "explanation_why_incorrect": "Instâncias Spot podem ser interrompidas a qualquer momento; SQS foca em desacoplamento; e CloudFront foca em cache/latência.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 14,
    "type": "single",
    "category": "Conceitos da Nuvem AWS (24%)",
    "category_en": "Conceitos da Nuvem AWS (24%)",
    "objective": "1.1 Definir os benefícios econômicos da Nuvem AWS",
    "what_it_tests": "Graças às economias de escala e à otimização contínua de seus datacenters, a AWS historicamente reduz os preços de seus serviços e repassa essa economia aos clientes sem que eles precisem comprar novos hardwares.",
    "question": "Qual é a PRINCIPAL vantagem da computação em nuvem quando se trata de gastos com equipamentos?",
    "options": [
      {
        "id": "A",
        "text": "A AWS garante que os dispositivos físicos sejam continuamente protegidos e monitorados"
      },
      {
        "id": "B",
        "text": "Você pode dimensionar e gerenciar facilmente o número de recursos em execução em seu ambiente de nuvem"
      },
      {
        "id": "C",
        "text": "A AWS oferece ferramentas e serviços que ajudam você a monitorar seu consumo de orçamento na nuvem"
      },
      {
        "id": "D",
        "text": "AWS introduz reduções de custo a cada ano em seus serviços"
      }
    ],
    "correct_answer": "D",
    "official_rationale": "Graças às economias de escala e à otimização contínua de seus datacenters, a AWS historicamente reduz os preços de seus serviços e repassa essa economia aos clientes sem que eles precisem comprar novos hardwares.",
    "explanation_why_correct": "No gabarito deste simulado, a resposta destacada quanto à vantagem financeira contínua é que a **AWS introduz reduções de custo regularmente em seus serviços (D)** graças às economias de escala.",
    "explanation_why_incorrect": "As demais opções descrevem segurança física, escalabilidade operacional e monitoramento orçamentário.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 15,
    "type": "multi",
    "category": "Cobrança, Preços e Suporte da AWS (12%)",
    "category_en": "Cobrança, Preços e Suporte da AWS (12%)",
    "objective": "4.2 Identificar as características do AWS Cost and Usage Report (CUR)",
    "what_it_tests": "O AWS Cost and Usage Report (CUR) contém o conjunto mais abrangente e granular de dados de custos e uso disponível, e integra-se nativamente com Amazon Athena, Amazon Redshift e Amazon QuickSight.",
    "question": "Qual das seguintes afirmações é verdadeira em relação ao AWS Cost and Usage Reports? (Selecione DOIS.)",
    "options": [
      {
        "id": "A",
        "text": "Fornece dados granulares sobre seus custos e uso da AWS"
      },
      {
        "id": "B",
        "text": "Ajuda você a visualizar, entender e gerenciar seus custos e uso da AWS ao longo do tempo por meio de uma interface intuitiva que permite criar relatórios personalizados rapidamente"
      },
      {
        "id": "C",
        "text": "Fornece um painel que permite visualizar o status de suas despesas mensais da AWS e fornece acesso a vários outros produtos de gerenciamento de custos que podem ajudá-lo a aprofundar seus custos e uso da AWS"
      },
      {
        "id": "D",
        "text": "Permite carregar suas informações de custo e uso no Amazon Athena, Amazon Redshift e AWS QuickSight"
      },
      {
        "id": "E",
        "text": "Permite definir orçamentos personalizados de custo e uso que alertam quando esses limites são excedidos"
      }
    ],
    "correct_answer": [
      "A",
      "D"
    ],
    "official_rationale": "O AWS Cost and Usage Report (CUR) contém o conjunto mais abrangente e granular de dados de custos e uso disponível, e integra-se nativamente com Amazon Athena, Amazon Redshift e Amazon QuickSight.",
    "explanation_why_correct": "O **AWS Cost and Usage Reports** **fornece os dados mais granulares sobre custos e uso (A)** e **permite carregar essas informações no Amazon Athena, Amazon Redshift e Amazon QuickSight (D)**.",
    "explanation_why_incorrect": "A visualização gráfica interativa é do Cost Explorer (B); o painel geral é do Billing Dashboard (C); e alertas de orçamento são do AWS Budgets (E).",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 16,
    "type": "single",
    "category": "Conceitos da Nuvem AWS (24%)",
    "category_en": "Conceitos da Nuvem AWS (24%)",
    "objective": "1.1 Definir os benefícios da elasticidade (\"Pare de adivinhar a capacidade\")",
    "what_it_tests": "Em datacenters locais, empresas costumam comprar servidores extras que ficam ociosos (\"acumulando poeira\"). Na nuvem AWS, você provisiona recursos somente quando precisa deles.",
    "question": "Vários servidores em seu data center local estão acumulando poeira nos últimos anos. Qual é o PRINCIPAL benefício de migrar para a nuvem, neste caso?",
    "options": [
      {
        "id": "A",
        "text": "A capacidade de pagar apenas pelo que você usa"
      },
      {
        "id": "B",
        "text": "A capacidade de provisionar recursos somente quando você precisar deles"
      },
      {
        "id": "C",
        "text": "Os servidores físicos são gerenciados e mantidos pela AWS para você"
      },
      {
        "id": "D",
        "text": "A AWS tem serviços automatizados para você"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "Em datacenters locais, empresas costumam comprar servidores extras que ficam ociosos (\"acumulando poeira\"). Na nuvem AWS, você provisiona recursos somente quando precisa deles.",
    "explanation_why_correct": "Quando servidores locais ficam ociosos, o principal benefício de migrar para a nuvem é **a capacidade de provisionar recursos somente quando você precisar deles (B)** (parar de adivinhar a capacidade).",
    "explanation_why_incorrect": "Evitar o superprovisionamento prévio de hardware ocioso responde diretamente ao problema de servidores parados acumulando poeira.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 17,
    "type": "single",
    "category": "Conceitos da Nuvem AWS (24%)",
    "category_en": "Conceitos da Nuvem AWS (24%)",
    "objective": "1.1 Comparar modelos de implantação em nuvem (Nuvem, Híbrido, On-premises)",
    "what_it_tests": "Um modelo de implantação híbrida (Hybrid Cloud) permite que uma organização mantenha dados sensíveis sob exigências estritas de conformidade no datacenter local enquanto executa servidores web escaláveis na AWS.",
    "question": "Seus servidores locais estão precisando de um upgrade para atender melhor seus consumidores. No entanto, os dados armazenados localmente não podem ser migrados devido a requisitos de conformidade. Qual modelo você deve adotar para este cenário?",
    "options": [
      {
        "id": "A",
        "text": "Utilize os servidores da web da AWS, mas mantenha seus dados localmente. Configure um modelo híbrido no qual os servidores web na AWS se comunicarão com seu armazenamento de dados local"
      },
      {
        "id": "B",
        "text": "Não realize nenhuma migração por enquanto para economizar algum capital para uma migração em grande escala no futuro"
      },
      {
        "id": "C",
        "text": "Descarte todos os seus servidores e migre seus dados para a AWS, pois será mais barato e mais durável armazenar dados na nuvem"
      },
      {
        "id": "D",
        "text": "Migre lentamente seus servidores e dados da web para a AWS enquanto mantém seu orçamento sob controle"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Um modelo de implantação híbrida (Hybrid Cloud) permite que uma organização mantenha dados sensíveis sob exigências estritas de conformidade no datacenter local enquanto executa servidores web escaláveis na AWS.",
    "explanation_why_correct": "A melhor solução é adotar um **modelo híbrido, utilizando os servidores web na AWS comunicando-se com o armazenamento de dados mantido localmente (A)**.",
    "explanation_why_incorrect": "Deixar de atualizar os servidores prejudica os clientes, e migrar os dados violaria os requisitos regulatórios de conformidade mencionados.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 18,
    "type": "single",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.3 Identificar serviços de arquivamento de longo prazo na AWS",
    "what_it_tests": "O Amazon S3 Glacier (Amazon Glacier) é uma classe de armazenamento em nuvem segura, durável e de custo extremamente baixo para arquivamento de dados e backup de longo prazo.",
    "question": "Qual é o melhor lugar para arquivar logs e outros arquivos pouco acessados por um longo tempo sem tempo de recuperação estrito?",
    "options": [
      {
        "id": "A",
        "text": "Amazon EBS"
      },
      {
        "id": "B",
        "text": "Amazon Storage Gateway"
      },
      {
        "id": "C",
        "text": "Amazon S3 Standard-IA"
      },
      {
        "id": "D",
        "text": "Amazon Glacier"
      }
    ],
    "correct_answer": "D",
    "official_rationale": "O Amazon S3 Glacier (Amazon Glacier) é uma classe de armazenamento em nuvem segura, durável e de custo extremamente baixo para arquivamento de dados e backup de longo prazo.",
    "explanation_why_correct": "O **Amazon Glacier (D)** é o serviço ideal para arquivar logs e arquivos raramente acessados por longo prazo quando não há exigência de recuperação imediata.",
    "explanation_why_incorrect": "Amazon EBS e S3 Standard-IA têm custos por GB mais altos e são voltados para dados que exigem acesso imediato em milissegundos.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 19,
    "type": "single",
    "category": "Conceitos da Nuvem AWS (24%)",
    "category_en": "Conceitos da Nuvem AWS (24%)",
    "objective": "1.3 Descrever estratégias de Recuperação de Desastres (Multi-Region) na AWS",
    "what_it_tests": "Para proteger uma aplicação crítica contra uma eventual interrupção de uma Região inteira da AWS, o plano de recuperação de desastres deve implantar a aplicação em pelo menos duas Regiões diferentes.",
    "question": "Qual das opções abaixo é um bom plano de recuperação de desastres, considerando o seguinte cenário: você está disponibilizando um aplicativo da Web do tipo dinâmico com cargas de trabalho de missão crítica que precisam estar disponíveis o tempo todo?",
    "options": [
      {
        "id": "A",
        "text": "Sempre mantenha os dados de backup armazenados em dois buckets S3 diferentes"
      },
      {
        "id": "B",
        "text": "Execute aplicativos na nuvem, mas mantenha todos os dados localmente"
      },
      {
        "id": "C",
        "text": "Inicie aplicativos em duas regiões diferentes da AWS para evitar tempo de inatividade durante interrupções regionais"
      },
      {
        "id": "D",
        "text": "Inicie aplicativos em duas AZs diferentes para evitar tempo de inatividade durante interrupções regionais"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "Para proteger uma aplicação crítica contra uma eventual interrupção de uma Região inteira da AWS, o plano de recuperação de desastres deve implantar a aplicação em pelo menos duas Regiões diferentes.",
    "explanation_why_correct": "**Iniciar aplicativos em duas regiões diferentes da AWS para evitar tempo de inatividade durante interrupções regionais (C)** garante continuidade mesmo na queda de uma região inteira.",
    "explanation_why_incorrect": "Duas AZs na mesma região não protegem contra uma falha regional completa; dois buckets S3 não mantêm a camada de computação dinâmica ativa.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 20,
    "type": "single",
    "category": "Segurança e Conformidade na AWS (30%)",
    "category_en": "Segurança e Conformidade na AWS (30%)",
    "objective": "2.2 Identificar serviços de auditoria e conformidade de configuração na AWS",
    "what_it_tests": "O AWS Config avalia, audita e monitora continuamente as configurações dos seus recursos da AWS em relação às regras e diretrizes de conformidade desejadas (Config Rules).",
    "question": "Qual serviço da AWS pode monitorar o status de conformidade de seus recursos AWS, em relação a um conjunto de diretrizes de conformidade?",
    "options": [
      {
        "id": "A",
        "text": "AWS Artifact"
      },
      {
        "id": "B",
        "text": "AWS Config"
      },
      {
        "id": "C",
        "text": "Amazon CloudWatch"
      },
      {
        "id": "D",
        "text": "AWS IAM"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "O AWS Config avalia, audita e monitora continuamente as configurações dos seus recursos da AWS em relação às regras e diretrizes de conformidade desejadas (Config Rules).",
    "explanation_why_correct": "O **AWS Config (B)** monitora continuamente o histórico de configuração e o status de conformidade dos recursos da AWS em relação a diretrizes definidas.",
    "explanation_why_incorrect": "AWS Artifact baixa relatórios PDF de auditoria da AWS; CloudWatch monitora métricas de desempenho; e IAM gerencia usuários e permissões.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 21,
    "type": "multi",
    "category": "Segurança e Conformidade na AWS (30%)",
    "category_en": "Segurança e Conformidade na AWS (30%)",
    "objective": "2.3 Comparar Usuários do IAM (IAM Users) e Funções do IAM (IAM Roles)",
    "what_it_tests": "As Funções do IAM (IAM Roles) fornecem credenciais temporárias e devem ser usadas para delegar acesso a serviços da AWS (ex.: EC2/Lambda acessando S3) ou para entidades externas/federadas.",
    "question": "Qual das seguintes instâncias é melhor usar funções do IAM em vez de usuários do IAM? (Selecione DOIS.)",
    "options": [
      {
        "id": "A",
        "text": "Quando você tem entidades externas que precisam realizar ações específicas em sua conta da AWS"
      },
      {
        "id": "B",
        "text": "Quando você deseja fornecer permissões de serviços da AWS para realizar determinadas ações"
      },
      {
        "id": "C",
        "text": "Quando você precisa de um administrador para lidar com a conta da AWS para você"
      },
      {
        "id": "D",
        "text": "Quando você precisa de uma GUI para interagir com o sistema"
      },
      {
        "id": "E",
        "text": "Se você tiver funcionários que precisam constantemente de acesso aos seus recursos da AWS"
      }
    ],
    "correct_answer": [
      "A",
      "B"
    ],
    "official_rationale": "As Funções do IAM (IAM Roles) fornecem credenciais temporárias e devem ser usadas para delegar acesso a serviços da AWS (ex.: EC2/Lambda acessando S3) ou para entidades externas/federadas.",
    "explanation_why_correct": "É melhor usar **IAM Roles (Funções do IAM)** **quando entidades externas precisam realizar ações na conta (A)** e **quando você deseja conceder permissões a serviços da AWS para realizar ações (B)**.",
    "explanation_why_incorrect": "Funções do IAM usam credenciais temporárias em vez de credenciais fixas de longo prazo.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 22,
    "type": "single",
    "category": "Cobrança, Preços e Suporte da AWS (12%)",
    "category_en": "Cobrança, Preços e Suporte da AWS (12%)",
    "objective": "4.1 Comparar tipos de Instâncias Reservadas do Amazon EC2",
    "what_it_tests": "Para cargas de trabalho em estado estável (steady-state) executadas continuamente por 1 ou 3 anos, as Instâncias Reservadas Padrão (Standard RIs) oferecem o maior percentual de desconto em relação às RIs Conversíveis.",
    "question": "Qual das opções de compra a seguir oferece o desconto mais significativo em comparação com o preço da instância sob demanda para processar cargas de trabalho em estado estável, que serão executadas continuamente por um ano?",
    "options": [
      {
        "id": "A",
        "text": "Instância Dedicada"
      },
      {
        "id": "B",
        "text": "Instância Conversível Reservada"
      },
      {
        "id": "C",
        "text": "Instância Reservada Agendada"
      },
      {
        "id": "D",
        "text": "Instância Reservada Padrão"
      }
    ],
    "correct_answer": "D",
    "official_rationale": "Para cargas de trabalho em estado estável (steady-state) executadas continuamente por 1 ou 3 anos, as Instâncias Reservadas Padrão (Standard RIs) oferecem o maior percentual de desconto em relação às RIs Conversíveis.",
    "explanation_why_correct": "A **Instância Reservada Padrão (Standard Reserved Instance - D)** oferece o maior desconto em comparação ao preço sob demanda para cargas de trabalho previsíveis.",
    "explanation_why_incorrect": "RIs Conversíveis oferecem desconto menor em troca da flexibilidade de trocar a família da instância; Instâncias Dedicadas são mais caras.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 23,
    "type": "single",
    "category": "Cobrança, Preços e Suporte da AWS (12%)",
    "category_en": "Cobrança, Preços e Suporte da AWS (12%)",
    "objective": "4.1 Comparar opções de prazo e pagamento de Instâncias Reservadas",
    "what_it_tests": "Nas Instâncias Reservadas do EC2, quanto maior o compromisso de tempo (3 anos vs 1 ano) e maior o valor adiantado (All Upfront vs Partial/No Upfront), maior é o desconto concedido pela AWS.",
    "question": "Qual plano de pagamento lhe dará o maior desconto na compra de instâncias reservadas do EC2?",
    "options": [
      {
        "id": "A",
        "text": "Pagamento antecipado parcial para uma compra com prazo de 3 anos"
      },
      {
        "id": "B",
        "text": "Todos os pagamentos antecipados para uma compra com prazo de 1 ano"
      },
      {
        "id": "C",
        "text": "Todos os pagamentos antecipados para uma compra com prazo de 3 anos"
      },
      {
        "id": "D",
        "text": "Pagamento antecipado parcial para uma compra com prazo de 1 ano"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "Nas Instâncias Reservadas do EC2, quanto maior o compromisso de tempo (3 anos vs 1 ano) e maior o valor adiantado (All Upfront vs Partial/No Upfront), maior é o desconto concedido pela AWS.",
    "explanation_why_correct": "**Todos os pagamentos antecipados para uma compra com prazo de 3 anos (All Upfront, 3-year term - C)** concede o maior desconto possível na compra de RIs.",
    "explanation_why_incorrect": "Contratos de 1 ano ou pagamentos parciais (Partial Upfront) oferecem percentuais de desconto inferiores.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 24,
    "type": "single",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.3 Comparar Amazon EBS e Amazon EC2 Instance Store",
    "what_it_tests": "O Amazon EC2 Instance Store fornece armazenamento temporário em nível de bloco fisicamente conectado ao servidor host da instância EC2, entregando altíssima velocidade de I/O local.",
    "question": "Qual serviço de armazenamento da AWS oferece desempenho de leitura e gravação de disco mais rápido e fornece armazenamento temporário em nível de bloco para sua instância?",
    "options": [
      {
        "id": "A",
        "text": "Instance Store"
      },
      {
        "id": "B",
        "text": "EFS"
      },
      {
        "id": "C",
        "text": "EBS Throughput Optimized HDD"
      },
      {
        "id": "D",
        "text": "EBS Provisioned IOPS SSD"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "O Amazon EC2 Instance Store fornece armazenamento temporário em nível de bloco fisicamente conectado ao servidor host da instância EC2, entregando altíssima velocidade de I/O local.",
    "explanation_why_correct": "O **Instance Store (A)** oferece armazenamento temporário (efêmero) em nível de bloco anexado diretamente ao host físico com altíssimo desempenho de leitura e gravação.",
    "explanation_why_incorrect": "EBS e EFS são armazenamentos persistentes conectados via rede.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 25,
    "type": "multi",
    "category": "Segurança e Conformidade na AWS (30%)",
    "category_en": "Segurança e Conformidade na AWS (30%)",
    "objective": "2.3 Identificar ferramentas e credenciais para acesso programático à AWS",
    "what_it_tests": "Para interagir programaticamente com a AWS a partir do código de uma aplicação, o desenvolvedor utiliza o AWS SDK (Software Development Kit) autenticado com Access Keys (ou IAM Roles).",
    "question": "Qual dos seguintes serviços você precisa para interagir programaticamente com seu ambiente AWS? (Selecione DOIS.)",
    "options": [
      {
        "id": "A",
        "text": "Access keys"
      },
      {
        "id": "B",
        "text": "AWS Lambda"
      },
      {
        "id": "C",
        "text": "AWS SDK"
      },
      {
        "id": "D",
        "text": "AWS Management Console"
      },
      {
        "id": "E",
        "text": "Nome de Conta e Senha"
      }
    ],
    "correct_answer": [
      "A",
      "C"
    ],
    "official_rationale": "Para interagir programaticamente com a AWS a partir do código de uma aplicação, o desenvolvedor utiliza o AWS SDK (Software Development Kit) autenticado com Access Keys (ou IAM Roles).",
    "explanation_why_correct": "Para interagir programaticamente com o ambiente AWS, você utiliza **Access keys (A)** e o **AWS SDK (C)**.",
    "explanation_why_incorrect": "O AWS Management Console e o login com nome de conta/senha são voltados para acesso manual via navegador web.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 26,
    "type": "single",
    "category": "Conceitos da Nuvem AWS (24%)",
    "category_en": "Conceitos da Nuvem AWS (24%)",
    "objective": "1.3 Descrever as melhores práticas de arquitetura na nuvem AWS",
    "what_it_tests": "O Auto Scaling ajusta automaticamente a capacidade de computação para cima (scale out) quando a demanda sobe e para baixo (scale in) quando a demanda cai, sendo a implementação direta do princípio \"Implementar elasticidade\".",
    "question": "O Auto-Scaling baseado na demanda é uma implementação de qual melhor prática de nuvem AWS?",
    "options": [
      {
        "id": "A",
        "text": "Design para perfeição"
      },
      {
        "id": "B",
        "text": "Impulsione arquiteturas usando dados"
      },
      {
        "id": "C",
        "text": "Implementar elasticidade"
      },
      {
        "id": "D",
        "text": "Projeto para falha"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "O Auto Scaling ajusta automaticamente a capacidade de computação para cima (scale out) quando a demanda sobe e para baixo (scale in) quando a demanda cai, sendo a implementação direta do princípio \"Implementar elasticidade\".",
    "explanation_why_correct": "O Auto Scaling baseado na demanda é a implementação clássica da prática recomendada **\"Implementar elasticidade\" (Implement elasticity - C)**.",
    "explanation_why_incorrect": "Projeto para falha refere-se a redundância Multi-AZ/Multi-Região, enquanto elasticidade refere-se ao dimensionamento dinâmico conforme a carga.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 27,
    "type": "single",
    "category": "Conceitos da Nuvem AWS (24%)",
    "category_en": "Conceitos da Nuvem AWS (24%)",
    "objective": "1.1 Classificar serviços da AWS em IaaS, PaaS e SaaS",
    "what_it_tests": "O Amazon EC2 (Elastic Compute Cloud) fornece máquinas virtuais onde o cliente gerencia o sistema operacional, sendo o principal exemplo de Infraestrutura como Serviço (IaaS) na AWS.",
    "question": "Qual das opções a seguir é um exemplo de IaaS na AWS?",
    "options": [
      {
        "id": "A",
        "text": "AWS CloudFormation"
      },
      {
        "id": "B",
        "text": "Amazon EC2"
      },
      {
        "id": "C",
        "text": "AWS IAM"
      },
      {
        "id": "D",
        "text": "AWS Elastic Beanstalk"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "O Amazon EC2 (Elastic Compute Cloud) fornece máquinas virtuais onde o cliente gerencia o sistema operacional, sendo o principal exemplo de Infraestrutura como Serviço (IaaS) na AWS.",
    "explanation_why_correct": "O **Amazon EC2 (B)** é um exemplo de **IaaS (Infraestrutura como Serviço)** na AWS.",
    "explanation_why_incorrect": "Elastic Beanstalk é PaaS; CloudFormation é ferramenta de IaC; e IAM é serviço de gerenciamento de identidade.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 28,
    "type": "single",
    "category": "Conceitos da Nuvem AWS (24%)",
    "category_en": "Conceitos da Nuvem AWS (24%)",
    "objective": "1.3 Descrever os pilares do AWS Well-Architected Framework",
    "what_it_tests": "No gabarito deste simulado, selecionar o número e tipo mais econômico e dimensionado corretamente (right-sizing) para evitar pagar por recursos superdimensionados está associado ao pilar de Otimização de Custos.",
    "question": "Qual dos seguintes conceitos referentes ao AWS Well-Architected Framework enfatiza a importância de selecionar o número mais adequado e correto de tipos de recursos para seus requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Eficiência de Performance"
      },
      {
        "id": "B",
        "text": "Confiabilidade"
      },
      {
        "id": "C",
        "text": "Otimização de custos"
      },
      {
        "id": "D",
        "text": "Excelência operacional"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "No gabarito deste simulado, selecionar o número e tipo mais econômico e dimensionado corretamente (right-sizing) para evitar pagar por recursos superdimensionados está associado ao pilar de Otimização de Custos.",
    "explanation_why_correct": "O pilar **Otimização de custos (Cost Optimization - C)** enfatiza o dimensionamento correto (*right-sizing*) para selecionar o número e tipo adequado de recursos sem desperdício financeiro.",
    "explanation_why_incorrect": "Confiabilidade foca em recuperação de falhas e Excelência Operacional foca em processos operacionais.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 29,
    "type": "single",
    "category": "Segurança e Conformidade na AWS (30%)",
    "category_en": "Segurança e Conformidade na AWS (30%)",
    "objective": "2.2 Identificar programas de conformidade na AWS (HIPAA, PCI DSS, SOC)",
    "what_it_tests": "O HIPAA (Health Insurance Portability and Accountability Act) é a regulamentação de conformidade dos Estados Unidos que estabelece padrões de proteção para informações médicas e de saúde protegidas (PHI).",
    "question": "Qual requisito de conformidade estadunidense a AWS atingiu e que permite o manuseio de informações médicas?",
    "options": [
      {
        "id": "A",
        "text": "HIPAA"
      },
      {
        "id": "B",
        "text": "SOC 1"
      },
      {
        "id": "C",
        "text": "SOC 2"
      },
      {
        "id": "D",
        "text": "PCI DSS"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "O HIPAA (Health Insurance Portability and Accountability Act) é a regulamentação de conformidade dos Estados Unidos que estabelece padrões de proteção para informações médicas e de saúde protegidas (PHI).",
    "explanation_why_correct": "O **HIPAA (A)** é o requisito de conformidade estadunidense voltado para a proteção e manuseio seguro de **informações médicas e de saúde**.",
    "explanation_why_incorrect": "PCI DSS aplica-se a dados de cartões de pagamento; SOC 1 e SOC 2 são relatórios de controles de auditoria financeira e operacional.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 30,
    "type": "single",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.3 Comparar Amazon RDS Multi-AZ e Réplicas de Leitura (Read Replicas)",
    "what_it_tests": "As Réplicas de Leitura do Amazon RDS (Read Replicas) permitem escalar horizontalmente cargas de trabalho de banco de dados com leitura intensa (read-heavy), descarregando as consultas SELECT da instância principal.",
    "question": "Um determinado cliente tem um site popular, com milhões de espectadores de todo o mundo e tem cargas de trabalho de banco de dados de leitura pesada. Qual das opções a seguir é a melhor, para ser usada com a intenção de se aumentar a taxa de transferência de leitura em seu banco de dados?",
    "options": [
      {
        "id": "A",
        "text": "Habilitar réplicas de espera do Amazon RDS"
      },
      {
        "id": "B",
        "text": "Habilitar réplicas de leitura do Amazon RDS"
      },
      {
        "id": "C",
        "text": "Habilitar implantações Multi-AZ"
      },
      {
        "id": "D",
        "text": "Use o SQS para enfileirar as solicitações"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "As Réplicas de Leitura do Amazon RDS (Read Replicas) permitem escalar horizontalmente cargas de trabalho de banco de dados com leitura intensa (read-heavy), descarregando as consultas SELECT da instância principal.",
    "explanation_why_correct": "**Habilitar réplicas de leitura do Amazon RDS (B)** aumenta a taxa de transferência de leitura distribuindo o tráfego de consultas.",
    "explanation_why_incorrect": "Implantações Multi-AZ (réplicas de espera/standby) servem apenas para alta disponibilidade e failover — a instância standby não atende consultas de leitura.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 31,
    "type": "single",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.3 Identificar estratégias de escalonamento para bancos de dados relacionais",
    "what_it_tests": "Como a carga de trabalho é de gravação intensa (write-heavy) e alto consumo de memória no MariaDB RDS, adicionar réplicas de leitura não resolve o gargalo de escrita; a solução direta é escalar verticalmente (scale up) a instância para uma classe com mais RAM e CPU.",
    "question": "Um banco de dados MariaDB RDS é conhecido por ter alto consumo de memória durante os horários de pico, o que deteriora o desempenho geral do seu aplicativo. Que alteração econômica você pode introduzir para resolver esse problema se o banco de dados estiver lidando com operações de gravação intensa?",
    "options": [
      {
        "id": "A",
        "text": "Distribua a carga de trabalho executando várias instâncias"
      },
      {
        "id": "B",
        "text": "Adicione réplicas de leitura para diminuir a carga das operações de leitura"
      },
      {
        "id": "C",
        "text": "Dimensione a instância verticalmente para uma capacidade de memória maior"
      },
      {
        "id": "D",
        "text": "Mude para o DynamoDB para aproveitar a latência de milissegundos"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "Como a carga de trabalho é de gravação intensa (write-heavy) e alto consumo de memória no MariaDB RDS, adicionar réplicas de leitura não resolve o gargalo de escrita; a solução direta é escalar verticalmente (scale up) a instância para uma classe com mais RAM e CPU.",
    "explanation_why_correct": "**Dimensionar a instância verticalmente para uma capacidade de memória maior (C)** resolve o gargalo de memória em um banco RDS com operações de gravação intensa.",
    "explanation_why_incorrect": "Réplicas de leitura ajudam apenas em leituras (SELECT), e migrar de MariaDB relacional para DynamoDB NoSQL exigiria reescrever toda a aplicação.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 32,
    "type": "single",
    "category": "Cobrança, Preços e Suporte da AWS (12%)",
    "category_en": "Cobrança, Preços e Suporte da AWS (12%)",
    "objective": "4.3 Comparar os tempos de resposta (SLA) dos planos do AWS Support",
    "what_it_tests": "Apenas o plano AWS Enterprise Support (e Enterprise On-Ramp para casos críticos) oferece tempo de resposta de até 15 minutos para sistemas de missão crítica para os negócios que estejam inativos.",
    "question": "Você tem um servidor de missão crítica que está atualmente inativo na AWS e precisa ativá-lo novamente em 15 minutos para a continuidade do serviço. Qual dos seguintes planos de suporte permitirá que você entre em contato com o suporte técnico para resolver esse problema imediatamente?",
    "options": [
      {
        "id": "A",
        "text": "Basic"
      },
      {
        "id": "B",
        "text": "Developer"
      },
      {
        "id": "C",
        "text": "Business"
      },
      {
        "id": "D",
        "text": "Enterprise"
      }
    ],
    "correct_answer": "D",
    "official_rationale": "Apenas o plano AWS Enterprise Support (e Enterprise On-Ramp para casos críticos) oferece tempo de resposta de até 15 minutos para sistemas de missão crítica para os negócios que estejam inativos.",
    "explanation_why_correct": "O plano de suporte **Enterprise (D)** garante tempo de resposta de **15 minutos** (24/7) quando um sistema crítico para os negócios fica inativo.",
    "explanation_why_incorrect": "Basic não inclui suporte técnico; Developer tem SLA de 12h/24h em horário comercial; e Business tem SLA mínimo de 1 hora para sistema de produção inativo.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 33,
    "type": "single",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.2 Identificar o uso de Amazon Machine Images (AMIs) entre Regiões",
    "what_it_tests": "Para lançar uma cópia idêntica de uma instância EC2 customizada em outra Região da AWS, você cria uma imagem AMI (Golden AMI) da instância e copia essa AMI para a região de destino.",
    "question": "Você tem uma instância EC2 customizada executando seu aplicativo web mais recente. Como você pode criar uma cópia exata desta instância em outra região?",
    "options": [
      {
        "id": "A",
        "text": "Crie backups de todos os seus volumes do EBS e copie-os para outra região"
      },
      {
        "id": "B",
        "text": "Não há como fazer isso na AWS. Você terá que realizar a transferência manualmente"
      },
      {
        "id": "C",
        "text": "Crie uma AMI dourada (Golden AMI) da instância e copie-a para outra região"
      },
      {
        "id": "D",
        "text": "Crie um balanceador de carga com um grupo de dimensionamento automático vinculado entre suas duas regiões. Escale verticalmente para ter outra instância em execução na outra região"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "Para lançar uma cópia idêntica de uma instância EC2 customizada em outra Região da AWS, você cria uma imagem AMI (Golden AMI) da instância e copia essa AMI para a região de destino.",
    "explanation_why_correct": "**Criar uma AMI dourada (Golden AMI) da instância e copiá-la para outra região (C)** permite iniciar novas instâncias idênticas na região de destino.",
    "explanation_why_incorrect": "Snapshots EBS isolados não copiam a configuração completa de lançamento da instância como uma AMI, e grupos de Auto Scaling/ELB não abrangem múltiplas regiões diretamente.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 34,
    "type": "single",
    "category": "Conceitos da Nuvem AWS (24%)",
    "category_en": "Conceitos da Nuvem AWS (24%)",
    "objective": "1.2 Identificar os componentes da infraestrutura global da AWS",
    "what_it_tests": "A infraestrutura global da AWS é composta por Regiões (Regions), Zonas de Disponibilidade (Availability Zones) e Pontos de Presença (Points of Presence / Edge Locations). \"Grupos de canais\" não existe na infraestrutura global.",
    "question": "Qual dos itens a seguir não faz parte da infraestrutura global da AWS?",
    "options": [
      {
        "id": "A",
        "text": "Grupos de canais"
      },
      {
        "id": "B",
        "text": "Pontos de Presença"
      },
      {
        "id": "C",
        "text": "Zonas de Disponibilidade"
      },
      {
        "id": "D",
        "text": "Regiões"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "A infraestrutura global da AWS é composta por Regiões (Regions), Zonas de Disponibilidade (Availability Zones) e Pontos de Presença (Points of Presence / Edge Locations). \"Grupos de canais\" não existe na infraestrutura global.",
    "explanation_why_correct": "**Grupos de canais (A)** não fazem parte da infraestrutura global da AWS.",
    "explanation_why_incorrect": "Pontos de Presença, Zonas de Disponibilidade e Regiões são os pilares oficiais da infraestrutura global da AWS.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 35,
    "type": "single",
    "category": "Conceitos da Nuvem AWS (24%)",
    "category_en": "Conceitos da Nuvem AWS (24%)",
    "objective": "1.3 Descrever o AWS Well-Architected Framework",
    "what_it_tests": "O AWS Well-Architected Framework ajuda arquitetos de nuvem a construir infraestruturas seguras, de alto desempenho, resilientes e eficientes com base em seus pilares fundamentais.",
    "question": "________ foi desenvolvido para ajudar os arquitetos de nuvem a construir uma infraestrutura segura, de alto desempenho, resiliente e eficiente para seus aplicativos com base em cinco pilares: excelência operacional, segurança, confiabilidade, eficiência de desempenho e otimização de custos",
    "options": [
      {
        "id": "A",
        "text": "Well-Architected Framework"
      },
      {
        "id": "B",
        "text": "AWS Cloud Adoption Framework"
      },
      {
        "id": "C",
        "text": "Scrum Development Process"
      },
      {
        "id": "D",
        "text": "AWS Serverless Application Model"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "O AWS Well-Architected Framework ajuda arquitetos de nuvem a construir infraestruturas seguras, de alto desempenho, resilientes e eficientes com base em seus pilares fundamentais.",
    "explanation_why_correct": "O **Well-Architected Framework (A)** fornece o conjunto de perguntas, práticas recomendadas e pilares arquiteturais (Excelência Operacional, Segurança, Confiabilidade, Eficiência de Performance, Otimização de Custos e Sustentabilidade).",
    "explanation_why_incorrect": "O AWS Cloud Adoption Framework (CAF) foca na transformação organizacional de negócios/pessoas/governança para migração, e o SAM é para aplicações serverless.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 36,
    "type": "single",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.2 Identificar os casos de uso do Amazon Lightsail",
    "what_it_tests": "O Amazon Lightsail fornece servidores virtuais privados (VPS) simples com imagens pré-configuradas de um clique (como WordPress, LAMP, Magento, Node.js) por um preço mensal fixo e previsível.",
    "question": "Se você for encarregado de criar um simples site Wordpress na AWS, sem precisar instalar o pacote por conta própria, qual solução PaaS na AWS permitirá que você faça isso facilmente?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Lightsail"
      },
      {
        "id": "B",
        "text": "AWS Elastic Beanstalk"
      },
      {
        "id": "C",
        "text": "Amazon GameLift"
      },
      {
        "id": "D",
        "text": "AWS Glue"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "O Amazon Lightsail fornece servidores virtuais privados (VPS) simples com imagens pré-configuradas de um clique (como WordPress, LAMP, Magento, Node.js) por um preço mensal fixo e previsível.",
    "explanation_why_correct": "O **Amazon Lightsail (A)** é a maneira mais simples de lançar um site **WordPress** pré-configurado na AWS sem precisar instalar pacotes ou gerenciar infraestrutura complexa.",
    "explanation_why_incorrect": "Elastic Beanstalk é voltado para desenvolvedores subirem seu próprio código; GameLift é para jogos multiplayer; e AWS Glue é um serviço de ETL.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 37,
    "type": "single",
    "category": "Conceitos da Nuvem AWS (24%)",
    "category_en": "Conceitos da Nuvem AWS (24%)",
    "objective": "1.1 Definir as 6 vantagens da computação em nuvem AWS",
    "what_it_tests": "A vantagem \"Torne-se global em minutos\" (Go global in minutes) descreve a capacidade de implantar facilmente sua aplicação em múltiplas Regiões da AWS ao redor do mundo com apenas alguns cliques.",
    "question": "Qual vantagem da computação em nuvem descreve como você pode implementar facilmente seu aplicativo em várias regiões da AWS com apenas alguns cliques?",
    "options": [
      {
        "id": "A",
        "text": "Pare de gastar dinheiro executando e mantendo data centers"
      },
      {
        "id": "B",
        "text": "Pare de adivinhar a capacidade"
      },
      {
        "id": "C",
        "text": "Torne-se global em minutos"
      },
      {
        "id": "D",
        "text": "Beneficie-se de enormes economias em escala"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "A vantagem \"Torne-se global em minutos\" (Go global in minutes) descreve a capacidade de implantar facilmente sua aplicação em múltiplas Regiões da AWS ao redor do mundo com apenas alguns cliques.",
    "explanation_why_correct": "**\"Torne-se global em minutos\" (Go global in minutes - C)** descreve a facilidade de implantar aplicações em várias regiões do mundo rapidamente para reduzir a latência.",
    "explanation_why_incorrect": "As outras três alternativas são vantagens válidas da nuvem, mas referem-se a custos de datacenter, elasticidade de capacidade e economia de escala.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 38,
    "type": "single",
    "category": "Cobrança, Preços e Suporte da AWS (12%)",
    "category_en": "Cobrança, Preços e Suporte da AWS (12%)",
    "objective": "4.3 Comparar os planos do AWS Support",
    "what_it_tests": "A partir do plano AWS Developer Support (o plano pago mais baixo), os clientes podem abrir um número ilimitado de casos de suporte técnico.",
    "question": "Qual é o plano de suporte mais baixo que permite a abertura de um número ilimitado de casos de suporte técnico?",
    "options": [
      {
        "id": "A",
        "text": "Enterprise"
      },
      {
        "id": "B",
        "text": "Business"
      },
      {
        "id": "C",
        "text": "Basic"
      },
      {
        "id": "D",
        "text": "Developer"
      }
    ],
    "correct_answer": "D",
    "official_rationale": "A partir do plano AWS Developer Support (o plano pago mais baixo), os clientes podem abrir um número ilimitado de casos de suporte técnico.",
    "explanation_why_correct": "O plano de suporte mais baixo que permite abrir um número ilimitado de casos de suporte técnico é o **Developer (D)**.",
    "explanation_why_incorrect": "O plano Basic é gratuito mas não inclui abertura de chamados de suporte técnico; Business e Enterprise são planos mais caros.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 39,
    "type": "single",
    "category": "Segurança e Conformidade na AWS (30%)",
    "category_en": "Segurança e Conformidade na AWS (30%)",
    "objective": "2.1 Identificar controles herdados no Modelo de Responsabilidade Compartilhada",
    "what_it_tests": "Os Controles Herdados (Inherited Controls) são aqueles que o cliente herda integralmente da AWS, como os Controles Físicos e Ambientais (segurança física dos datacenters, energia, climatização e extinção de incêndio).",
    "question": "Qual dos seguintes controles o cliente herda totalmente da AWS com base no Modelo de Responsabilidade Compartilhada?",
    "options": [
      {
        "id": "A",
        "text": "Gerenciamento de Configuração"
      },
      {
        "id": "B",
        "text": "Controles Físicos e Ambientais"
      },
      {
        "id": "C",
        "text": "Gerenciamento de patches"
      },
      {
        "id": "D",
        "text": "Conscientização e Treinamento"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "Os Controles Herdados (Inherited Controls) são aqueles que o cliente herda integralmente da AWS, como os Controles Físicos e Ambientais (segurança física dos datacenters, energia, climatização e extinção de incêndio).",
    "explanation_why_correct": "O cliente herda totalmente da AWS os **Controles Físicos e Ambientais (B)**.",
    "explanation_why_incorrect": "Gerenciamento de configuração, gerenciamento de patches e conscientização/treinamento são Controles Compartilhados (Shared Controls) entre a AWS e o cliente.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 40,
    "type": "single",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.4 Identificar a infraestrutura utilizada pelo Amazon CloudFront",
    "what_it_tests": "O Amazon CloudFront utiliza uma rede mundial de Pontos de Presença (Points of Presence - Edge Locations e Regional Edge Caches) para armazenar conteúdo em cache perto dos espectadores.",
    "question": "Qual infraestrutura o Amazon CloudFront utiliza para acelerar a entrega de conteúdo aos clientes?",
    "options": [
      {
        "id": "A",
        "text": "Pontos de Presença"
      },
      {
        "id": "B",
        "text": "Cabos de fibra óptica"
      },
      {
        "id": "C",
        "text": "Zona de Disponibilidade"
      },
      {
        "id": "D",
        "text": "Direct Connect"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "O Amazon CloudFront utiliza uma rede mundial de Pontos de Presença (Points of Presence - Edge Locations e Regional Edge Caches) para armazenar conteúdo em cache perto dos espectadores.",
    "explanation_why_correct": "O Amazon CloudFront utiliza os **Pontos de Presença (Edge Locations - A)** para entregar conteúdo em cache com baixa latência.",
    "explanation_why_incorrect": "Direct Connect é conexão dedicada de datacenter; e Zonas de Disponibilidade hospedam recursos regionais como EC2 e RDS.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 41,
    "type": "single",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.3 Identificar serviços de armazenamento híbrido da AWS",
    "what_it_tests": "O AWS Storage Gateway é um serviço de armazenamento em nuvem híbrida que oferece ao datacenter local acesso contínuo a armazenamento praticamente ilimitado na nuvem AWS (S3/Glacier) usando protocolos padrão (NFS, SMB, iSCSI).",
    "question": "Qual dos seguintes serviços você deve acessar se seu data center local precisar de espaço de armazenamento adicional sem precisar migrar dados?",
    "options": [
      {
        "id": "A",
        "text": "AWS Direct Connect"
      },
      {
        "id": "B",
        "text": "AWS Storage Gateway"
      },
      {
        "id": "C",
        "text": "AWS Snowball Edge"
      },
      {
        "id": "D",
        "text": "Amazon Data Pipeline"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "O AWS Storage Gateway é um serviço de armazenamento em nuvem híbrida que oferece ao datacenter local acesso contínuo a armazenamento praticamente ilimitado na nuvem AWS (S3/Glacier) usando protocolos padrão (NFS, SMB, iSCSI).",
    "explanation_why_correct": "O **AWS Storage Gateway (B)** conecta o ambiente local ao armazenamento da AWS, expandindo a capacidade local sem precisar migrar as aplicações.",
    "explanation_why_incorrect": "Direct Connect é apenas conectividade de rede; Snowball Edge é um dispositivo físico de transporte de dados; e Data Pipeline orquestra movimentação de dados.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 42,
    "type": "single",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.8 Identificar recursos do AWS Systems Manager",
    "what_it_tests": "O AWS Systems Manager (por meio do Patch Manager e do Run Command) permite automatizar a aplicação de patches de segurança e executar comandos em frotas de instâncias Windows e Linux sem precisar abrir conexão RDP ou SSH.",
    "question": "Qual serviço da AWS me permite corrigir minhas instâncias do Windows EC2 sem precisar fazer RDP nelas?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Simple Workflow"
      },
      {
        "id": "B",
        "text": "AWS CloudFormation"
      },
      {
        "id": "C",
        "text": "AWS Systems Manager"
      },
      {
        "id": "D",
        "text": "AWS CodeDeploy"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "O AWS Systems Manager (por meio do Patch Manager e do Run Command) permite automatizar a aplicação de patches de segurança e executar comandos em frotas de instâncias Windows e Linux sem precisar abrir conexão RDP ou SSH.",
    "explanation_why_correct": "O **AWS Systems Manager (C)** permite automatizar a aplicação de patches em instâncias EC2 Windows e Linux remotamente, sem necessidade de acesso manual via RDP.",
    "explanation_why_incorrect": "Simple Workflow (SWF) coordena tarefas; CloudFormation provisiona stacks de infraestrutura; e CodeDeploy implanta código de aplicação.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 43,
    "type": "single",
    "category": "Cobrança, Preços e Suporte da AWS (12%)",
    "category_en": "Cobrança, Preços e Suporte da AWS (12%)",
    "objective": "4.1 Descrever a cobrança por segundo do Amazon EC2",
    "what_it_tests": "Para instâncias executando Amazon Linux ou Ubuntu, a AWS aplica a cobrança por segundo (per-second billing, com mínimo de 60 segundos), cobrando exatamente pelo tempo de execução.",
    "question": "Você tem uma instância do Amazon Linux EC2 em execução por uma hora e trinta minutos. Como a AWS cobrará você em termos de uso?",
    "options": [
      {
        "id": "A",
        "text": "Você será cobrado por uma hora e trinta minutos de acordo com a regra de cobrança por segundo"
      },
      {
        "id": "B",
        "text": "Você será cobrado por uma hora e trinta minutos de acordo com a regra de cobrança por hora"
      },
      {
        "id": "C",
        "text": "Você será cobrado por uma hora e vinte e nove minutos de acordo com a regra de cobrança por segundo"
      },
      {
        "id": "D",
        "text": "Você só será cobrado por uma hora de acordo com a regra de cobrança por hora"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Para instâncias executando Amazon Linux ou Ubuntu, a AWS aplica a cobrança por segundo (per-second billing, com mínimo de 60 segundos), cobrando exatamente pelo tempo de execução.",
    "explanation_why_correct": "Com uma instância Amazon Linux rodando por 1h30min, **você será cobrado por exatamente uma hora e trinta minutos de acordo com a regra de cobrança por segundo (A)**.",
    "explanation_why_incorrect": "O Amazon Linux utiliza cobrança por segundo (não arredonda para horas cheias nem desconta minutos).",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 44,
    "type": "multi",
    "category": "Conceitos da Nuvem AWS (24%)",
    "category_en": "Conceitos da Nuvem AWS (24%)",
    "objective": "1.2 Distinguir serviços Globais de serviços Regionais na AWS",
    "what_it_tests": "O Amazon Route 53 (DNS global) e o AWS WAF / CloudFront / IAM operam como serviços globais, não ficando restritos a uma única região específica como VPC ou Lambda.",
    "question": "Quais dos seguintes serviços da AWS não são considerados serviços específicos da região? (Selecione DOIS.)",
    "options": [
      {
        "id": "A",
        "text": "AWS WAF"
      },
      {
        "id": "B",
        "text": "AWS Lambda"
      },
      {
        "id": "C",
        "text": "Amazon VPC"
      },
      {
        "id": "D",
        "text": "AWS CloudTrail"
      },
      {
        "id": "E",
        "text": "Amazon Route 53"
      }
    ],
    "correct_answer": [
      "A",
      "E"
    ],
    "official_rationale": "O Amazon Route 53 (DNS global) e o AWS WAF / CloudFront / IAM operam como serviços globais, não ficando restritos a uma única região específica como VPC ou Lambda.",
    "explanation_why_correct": "No gabarito deste simulado, os dois serviços considerados globais (não restritos a uma única região) são **AWS WAF (A)** (integrado globalmente ao CloudFront) e **Amazon Route 53 (E)**.",
    "explanation_why_incorrect": "AWS Lambda e Amazon VPC são serviços estritamente regionais.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 45,
    "type": "single",
    "category": "Segurança e Conformidade na AWS (30%)",
    "category_en": "Segurança e Conformidade na AWS (30%)",
    "objective": "2.1 Aplicar o Modelo de Responsabilidade Compartilhada a incidentes de aplicação",
    "what_it_tests": "Ataques na camada de aplicação (como SQL Injection contra um aplicativo web hospedado pelo cliente no EC2) estão dentro da responsabilidade do cliente (\"Segurança NA Nuvem\": código da aplicação, configuração de WAF e banco de dados).",
    "question": "Um cliente sofreu recentemente um ataque de injeção de SQL no banco de dados de seu aplicativo da web, hospedado no EC2. Eles enviaram um tíquete de reclamação à AWS. Qual deve ser a resposta da AWS?",
    "options": [
      {
        "id": "A",
        "text": "A AWS deve proteger melhor sua infraestrutura para reduzir esses tipos de incidentes"
      },
      {
        "id": "B",
        "text": "A AWS não deve ser responsabilizada pelos danos, pois o cliente deve ter corrigido corretamente a instância do EC2"
      },
      {
        "id": "C",
        "text": "A AWS e o cliente devem entrar em contato com um auditor terceirizado para verificar o incidente"
      },
      {
        "id": "D",
        "text": "A AWS deve reiterar que o cliente é responsável pela segurança de seus aplicativos na Nuvem"
      }
    ],
    "correct_answer": "D",
    "official_rationale": "Ataques na camada de aplicação (como SQL Injection contra um aplicativo web hospedado pelo cliente no EC2) estão dentro da responsabilidade do cliente (\"Segurança NA Nuvem\": código da aplicação, configuração de WAF e banco de dados).",
    "explanation_why_correct": "**A AWS deve reiterar que o cliente é responsável pela segurança de seus aplicativos na Nuvem (D)** (proteger o código contra SQL Injection ou configurar o AWS WAF é papel do cliente).",
    "explanation_why_incorrect": "A AWS é responsável pela infraestrutura subjacente (Segurança DA Nuvem), e não pelas vulnerabilidades de código nas aplicações desenvolvidas pelo cliente.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 46,
    "type": "single",
    "category": "Conceitos da Nuvem AWS (24%)",
    "category_en": "Conceitos da Nuvem AWS (24%)",
    "objective": "1.3 Descrever práticas recomendadas de alta disponibilidade na AWS",
    "what_it_tests": "Para garantir alta disponibilidade e tolerância a falhas contra quedas de um datacenter, a AWS recomenda distribuir servidores e bancos de dados em pelo menos duas Zonas de Disponibilidade (AZs) diferentes.",
    "question": "Para prevenção, em caso de desastre ou interrupção de serviços, a AWS recomenda que você distribua seus servidores e bancos de dados pelo menos em diferentes _____?",
    "options": [
      {
        "id": "A",
        "text": "VPCs"
      },
      {
        "id": "B",
        "text": "Regiões"
      },
      {
        "id": "C",
        "text": "Contas da AWS"
      },
      {
        "id": "D",
        "text": "Zonas de Disponibilidade"
      }
    ],
    "correct_answer": "D",
    "official_rationale": "Para garantir alta disponibilidade e tolerância a falhas contra quedas de um datacenter, a AWS recomenda distribuir servidores e bancos de dados em pelo menos duas Zonas de Disponibilidade (AZs) diferentes.",
    "explanation_why_correct": "A AWS recomenda distribuir seus servidores e bancos de dados pelo menos em diferentes **Zonas de Disponibilidade (Availability Zones - D)**.",
    "explanation_why_incorrect": "Distribuir em múltiplas Zonas de Disponibilidade dentro de uma região é a base de toda arquitetura Multi-AZ resiliente.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 47,
    "type": "single",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.3 Comparar bancos de dados gerenciados (Amazon RDS) com bancos locais/autogerenciados",
    "what_it_tests": "O Amazon RDS é um serviço totalmente gerenciado em que a AWS assume as tarefas administrativas rotineiras, como provisionamento de hardware, configuração, aplicação de patches e backups.",
    "question": "Quando usar o Amazon RDS é uma escolha melhor do que usar um banco de dados local?",
    "options": [
      {
        "id": "A",
        "text": "Quando você precisa de controle total do seu banco de dados SQL"
      },
      {
        "id": "B",
        "text": "Quando você precisa de uma licença Enterprise gratuita para seus bancos de dados Enterprise"
      },
      {
        "id": "C",
        "text": "Quando você precisa de uma conexão de rede rápida com seus servidores da Web locais"
      },
      {
        "id": "D",
        "text": "Quando você deseja tirar as responsabilidades administrativas de si mesmo"
      }
    ],
    "correct_answer": "D",
    "official_rationale": "O Amazon RDS é um serviço totalmente gerenciado em que a AWS assume as tarefas administrativas rotineiras, como provisionamento de hardware, configuração, aplicação de patches e backups.",
    "explanation_why_correct": "O Amazon RDS é a melhor escolha **quando você deseja tirar as responsabilidades administrativas de banco de dados de si mesmo (D)**.",
    "explanation_why_incorrect": "Se você precisar de controle total sobre o sistema operacional subjacente, deve usar EC2; e o RDS não torna licenças Enterprise gratuitas.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 48,
    "type": "single",
    "category": "Segurança e Conformidade na AWS (30%)",
    "category_en": "Segurança e Conformidade na AWS (30%)",
    "objective": "2.1 Descrever o processo de desativação de mídias de armazenamento da AWS",
    "what_it_tests": "Quando um dispositivo de armazenamento físico atinge o fim de sua vida útil, a AWS segue um rigoroso processo de descomissionamento e destruição de mídia (desmagnetização e trituração) alinhado às normas NIST 800-88.",
    "question": "O que a AWS faz quando um dispositivo de armazenamento chega ao fim de sua vida útil?",
    "options": [
      {
        "id": "A",
        "text": "A AWS limpa as unidades e as envia de volta ao fabricante para adquirir uma nova"
      },
      {
        "id": "B",
        "text": "A AWS simplesmente limpa o dispositivo e o armazena"
      },
      {
        "id": "C",
        "text": "A AWS arquiva o dispositivo caso os clientes solicitem seus dados novamente"
      },
      {
        "id": "D",
        "text": "A AWS segue um rigoroso processo de desativação conforme descrito nos procedimentos de conformidade"
      }
    ],
    "correct_answer": "D",
    "official_rationale": "Quando um dispositivo de armazenamento físico atinge o fim de sua vida útil, a AWS segue um rigoroso processo de descomissionamento e destruição de mídia (desmagnetização e trituração) alinhado às normas NIST 800-88.",
    "explanation_why_correct": "**A AWS segue um rigoroso processo de desativação (decommissioning) conforme descrito nos procedimentos de conformidade (D)** para garantir que nenhum dado de cliente seja exposto.",
    "explanation_why_incorrect": "A AWS nunca arquiva discos antigos para devolver dados nem envia discos usados sem destruição/sanitização certificada.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 49,
    "type": "single",
    "category": "Cobrança, Preços e Suporte da AWS (12%)",
    "category_en": "Cobrança, Preços e Suporte da AWS (12%)",
    "objective": "4.3 Identificar o plano de suporte que inclui um Technical Account Manager (TAM)",
    "what_it_tests": "O plano AWS Enterprise Support é o único entre as opções que inclui um Gerente Técnico de Contas dedicado (Technical Account Manager - TAM) para orientação proativa e revisões arquiteturais.",
    "question": "Um cliente está escolhendo o melhor plano de suporte da AWS que inclui um gerente técnico de contas dedicado. Qual das seguintes opções eles devem escolher?",
    "options": [
      {
        "id": "A",
        "text": "Enterprise"
      },
      {
        "id": "B",
        "text": "Business"
      },
      {
        "id": "C",
        "text": "Developer"
      },
      {
        "id": "D",
        "text": "Basic"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "O plano AWS Enterprise Support é o único entre as opções que inclui um Gerente Técnico de Contas dedicado (Technical Account Manager - TAM) para orientação proativa e revisões arquiteturais.",
    "explanation_why_correct": "O cliente deve escolher o plano **Enterprise (A)**, que inclui um **Gerente Técnico de Contas dedicado (TAM)**.",
    "explanation_why_incorrect": "Os planos Basic, Developer e Business não incluem um TAM dedicado.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 50,
    "type": "single",
    "category": "Conceitos da Nuvem AWS (24%)",
    "category_en": "Conceitos da Nuvem AWS (24%)",
    "objective": "1.1 Descrever a mudança de CapEx para OpEx/Despesa Variável na nuvem",
    "what_it_tests": "Uma das seis vantagens oficiais da computação em nuvem da AWS é \"Trocar despesas de capital (CapEx) por despesas variáveis (Variable Expense)\".",
    "question": "Como as despesas são deslocadas ao passar dos servidores tradicionais para a nuvem?",
    "options": [
      {
        "id": "A",
        "text": "A despesa variável é trocada para despesa de capital"
      },
      {
        "id": "B",
        "text": "A despesa operacional é trocada por despesa variável"
      },
      {
        "id": "C",
        "text": "A despesa de capital é trocada por despesa variável"
      },
      {
        "id": "D",
        "text": "A despesa de capital é trocada para despesa operacional"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "Uma das seis vantagens oficiais da computação em nuvem da AWS é \"Trocar despesas de capital (CapEx) por despesas variáveis (Variable Expense)\".",
    "explanation_why_correct": "Ao migrar de servidores tradicionais para a nuvem, **a despesa de capital é trocada por despesa variável (C)** — você paga apenas conforme consome os recursos.",
    "explanation_why_incorrect": "Em vez de investir pesado antecipadamente em data centers físicos (despesa de capital), você assume custos variáveis proporcionais ao uso.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 51,
    "type": "multi",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.3 Identificar os benefícios do Amazon DynamoDB",
    "what_it_tests": "O Amazon DynamoDB é um banco de dados NoSQL flexível (suporta dados semi-estruturados/não estruturados de chave-valor e documentos) e dimensiona automaticamente sua capacidade de armazenamento e taxa de transferência.",
    "question": "Quais são os benefícios de usar o Amazon DynamoDB como seu banco de dados? (Selecione DOIS)",
    "options": [
      {
        "id": "A",
        "text": "Você pode armazenar diferentes tipos de dados não estruturados que normalmente não seriam adequados para bancos de dados relacionais"
      },
      {
        "id": "B",
        "text": "O DynamoDB é auto recuperável, o que significa que seus dados são verificados em busca de erros e reparados continuamente"
      },
      {
        "id": "C",
        "text": "O tamanho do banco de dados é dimensionado automaticamente para que você não precise se preocupar com a capacidade"
      },
      {
        "id": "D",
        "text": "O DynamoDB oferece 11 9's em termos de durabilidade, de acordo com o SLA"
      },
      {
        "id": "E",
        "text": "Você pode realizar consultas e junções muito complexas sem deterioração no desempenho"
      }
    ],
    "correct_answer": [
      "A",
      "C"
    ],
    "official_rationale": "O Amazon DynamoDB é um banco de dados NoSQL flexível (suporta dados semi-estruturados/não estruturados de chave-valor e documentos) e dimensiona automaticamente sua capacidade de armazenamento e taxa de transferência.",
    "explanation_why_correct": "São benefícios do Amazon DynamoDB: **armazenar diferentes tipos de dados flexíveis/não estruturados que não exigiriam esquema relacional rígido (A)** e **dimensionar automaticamente o tamanho do banco sem preocupações com capacidade (C)**.",
    "explanation_why_incorrect": "Junções SQL complexas (JOINs) são próprias de bancos relacionais (RDS/Aurora/Redshift), não de bancos NoSQL como o DynamoDB.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 52,
    "type": "single",
    "category": "Conceitos da Nuvem AWS (24%)",
    "category_en": "Conceitos da Nuvem AWS (24%)",
    "objective": "1.2 Ordenar os componentes da infraestrutura global da AWS por abrangência geográfica",
    "what_it_tests": "Em ordem decrescente de cobertura geográfica: uma Região abrange uma grande área geográfica e contém várias Zonas de Disponibilidade (clusters de datacenters), enquanto Pontos de Presença são instalações individuais de borda.",
    "question": "Qual é a disposição correta dos componentes da infraestrutura global da AWS de acordo com o tamanho da área de cobertura geográfica, em ordem decrescente?",
    "options": [
      {
        "id": "A",
        "text": "Regiões, zonas de disponibilidade, pontos de presença"
      },
      {
        "id": "B",
        "text": "Pontos de presença, zonas de disponibilidade, regiões"
      },
      {
        "id": "C",
        "text": "Regiões, pontos de presença, zonas de disponibilidade"
      },
      {
        "id": "D",
        "text": "Zonas de disponibilidade, pontos de presença. Regiões"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Em ordem decrescente de cobertura geográfica: uma Região abrange uma grande área geográfica e contém várias Zonas de Disponibilidade (clusters de datacenters), enquanto Pontos de Presença são instalações individuais de borda.",
    "explanation_why_correct": "Em ordem decrescente de área geográfica: **Regiões, zonas de disponibilidade, pontos de presença (A)**.",
    "explanation_why_incorrect": "As Regiões são as maiores entidades geográficas, contendo múltiplas Zonas de Disponibilidade.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 53,
    "type": "multi",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.8 Identificar as categorias do AWS Trusted Advisor",
    "what_it_tests": "Se o Auto Scaling parou de lançar novas instâncias EC2 durante um pico, ele provavelmente atingiu a cota máxima de instâncias da conta (categoria Limites de Serviço / Service Limits), além de impactar a categoria de Performance.",
    "question": "Devido a um grande número de visitantes, muitos clientes estão atingindo o limite de tempo do seu site que está sendo executado em um grupo de Autoscaling de instâncias do EC2, atrás de um ELB. Ao se verificar o ocorrido, foi descoberto que o grupo de Autoscaling parou de adicionar novas instâncias ao seu grupo. Qual das seguintes categorias do Trusted Advisor fornecerá mais informações sobre esse problema? (Selecione DOIS.)",
    "options": [
      {
        "id": "A",
        "text": "Limites de Serviço"
      },
      {
        "id": "B",
        "text": "Tolerância a Falha"
      },
      {
        "id": "C",
        "text": "Performance"
      },
      {
        "id": "D",
        "text": "Otimização de Custo"
      },
      {
        "id": "E",
        "text": "Segurança"
      }
    ],
    "correct_answer": [
      "A",
      "C"
    ],
    "official_rationale": "Se o Auto Scaling parou de lançar novas instâncias EC2 durante um pico, ele provavelmente atingiu a cota máxima de instâncias da conta (categoria Limites de Serviço / Service Limits), além de impactar a categoria de Performance.",
    "explanation_why_correct": "As duas categorias do Trusted Advisor que ajudarão a diagnosticar o problema são **Limites de Serviço / Service Limits (A)** (que alerta quando o uso passa de 80% do limite de instâncias EC2) e **Performance (C)**.",
    "explanation_why_incorrect": "O bloqueio na criação de novas instâncias pelo Auto Scaling ocorre tipicamente por atingir o limite de serviço (quota) de vCPUs/instâncias EC2 na região.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 54,
    "type": "single",
    "category": "Segurança e Conformidade na AWS (30%)",
    "category_en": "Segurança e Conformidade na AWS (30%)",
    "objective": "2.3 Identificar práticas recomendadas para proteger o usuário raiz (Root User) da conta AWS",
    "what_it_tests": "Como o usuário raiz (Root User) tem acesso irrestrito a toda a conta AWS, a prática fundamental de segurança é habilitar a Autenticação Multifator (MFA) imediatamente na conta root.",
    "question": "Você acredita que sua conta root da AWS pode ter sido usada sem você saber. O que você pode fazer para aumentar a segurança na conta root?",
    "options": [
      {
        "id": "A",
        "text": "Configure o MFA para sua conta root"
      },
      {
        "id": "B",
        "text": "Ative o CloudTrail para monitorar logins suspeitos"
      },
      {
        "id": "C",
        "text": "Mude a senha da conta root frequentemente"
      },
      {
        "id": "D",
        "text": "Desative as credenciais da conta root e use um usuário IAM com privilégios de ADMIN."
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Como o usuário raiz (Root User) tem acesso irrestrito a toda a conta AWS, a prática fundamental de segurança é habilitar a Autenticação Multifator (MFA) imediatamente na conta root.",
    "explanation_why_correct": "Para aumentar a segurança da conta root, você deve **configurar o MFA (Autenticação Multifator) para sua conta root (A)**.",
    "explanation_why_incorrect": "O CloudTrail apenas registra eventos após ocorrerem, e a senha do console da conta root não pode ser \"desativada\" completamente sem MFA — por isso habilitar MFA no root é essencial.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 55,
    "type": "single",
    "category": "Segurança e Conformidade na AWS (30%)",
    "category_en": "Segurança e Conformidade na AWS (30%)",
    "objective": "2.1 Descrever os benefícios herdados da governança e arquitetura da AWS",
    "what_it_tests": "Ao criar uma conta na AWS, o cliente se beneficia imediatamente das políticas rigorosas de segurança, arquitetura resiliente e processos operacionais da AWS construídos para atender aos clientes mais sensíveis à segurança.",
    "question": "Como cliente da AWS, que oferta você herda naturalmente da AWS depois de se inscrever?",
    "options": [
      {
        "id": "A",
        "text": "Todo o hardware e software que você provisiona na nuvem AWS"
      },
      {
        "id": "B",
        "text": "Todas as responsabilidades na aplicação das políticas de segurança e conformidade da sua organização"
      },
      {
        "id": "C",
        "text": "Todos os dados que você armazena e recupera da AWS"
      },
      {
        "id": "D",
        "text": "Todas as melhores práticas de políticas, arquitetura e processos operacionais da AWS criados para atender aos seus requisitos"
      }
    ],
    "correct_answer": "D",
    "official_rationale": "Ao criar uma conta na AWS, o cliente se beneficia imediatamente das políticas rigorosas de segurança, arquitetura resiliente e processos operacionais da AWS construídos para atender aos clientes mais sensíveis à segurança.",
    "explanation_why_correct": "O cliente herda **todas as melhores práticas de políticas, arquitetura e processos operacionais da AWS criados para atender aos requisitos mais exigentes (D)**.",
    "explanation_why_incorrect": "O cliente continua sendo o proprietário de seus dados e compartilha a responsabilidade de configurar seus recursos na nuvem.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 56,
    "type": "multi",
    "category": "Segurança e Conformidade na AWS (30%)",
    "category_en": "Segurança e Conformidade na AWS (30%)",
    "objective": "2.1 Identificar responsabilidades da AWS no Modelo de Responsabilidade Compartilhada",
    "what_it_tests": "A AWS é responsável pela \"Segurança DA Nuvem\", o que inclui aplicar patches no hipervisor do Amazon EC2 e proteger fisicamente os datacenters contra riscos ambientais.",
    "question": "Qual das seguintes opções a AWS trata automaticamente para você? (Selecione DOIS.)",
    "options": [
      {
        "id": "A",
        "text": "Garante que seus dados sejam mantidos e replicados com segurança entre as AZs"
      },
      {
        "id": "B",
        "text": "Introduzir atualizações e patches para hipervisores EC2"
      },
      {
        "id": "C",
        "text": "Introduzir atualizações e patches para sistemas operacionais convidados EC2"
      },
      {
        "id": "D",
        "text": "Forneça proteção de firewall de aplicativo da Web para seus endpoints públicos"
      },
      {
        "id": "E",
        "text": "Proteja os data centers da AWS contra riscos ambientais"
      }
    ],
    "correct_answer": [
      "B",
      "E"
    ],
    "official_rationale": "A AWS é responsável pela \"Segurança DA Nuvem\", o que inclui aplicar patches no hipervisor do Amazon EC2 e proteger fisicamente os datacenters contra riscos ambientais.",
    "explanation_why_correct": "A AWS trata automaticamente de **introduzir atualizações e patches para hipervisores EC2 (B)** e **proteger os data centers da AWS contra riscos ambientais (E)**.",
    "explanation_why_incorrect": "Aplicar patches no sistema operacional convidado (Guest OS) do EC2, configurar o AWS WAF e definir replicação de dados do cliente são responsabilidades do cliente.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 57,
    "type": "multi",
    "category": "Segurança e Conformidade na AWS (30%)",
    "category_en": "Segurança e Conformidade na AWS (30%)",
    "objective": "2.4 Identificar serviços adicionais de segurança de rede e detecção de ameaças na AWS",
    "what_it_tests": "Além de Security Groups e NACLs, o cliente pode usar o AWS WAF (Web Application Firewall) para filtrar tráfego web malicioso na camada 7 e o Amazon GuardDuty para detecção inteligente de ameaças em logs de fluxo da VPC e DNS.",
    "question": "Um cliente deseja proteger ainda mais sua rede além de grupos de segurança e listas de controle de acesso à rede. Quais dos serviços abaixo podem ser usados para fornecer os recursos de segurança adicionais? (Selecione DOIS.)",
    "options": [
      {
        "id": "A",
        "text": "Amazon SQS"
      },
      {
        "id": "B",
        "text": "Amazon GuardDuty"
      },
      {
        "id": "C",
        "text": "AWS Single Sign-On"
      },
      {
        "id": "D",
        "text": "AWS WAF"
      },
      {
        "id": "E",
        "text": "AWS Key Management Service"
      }
    ],
    "correct_answer": [
      "B",
      "D"
    ],
    "official_rationale": "Além de Security Groups e NACLs, o cliente pode usar o AWS WAF (Web Application Firewall) para filtrar tráfego web malicioso na camada 7 e o Amazon GuardDuty para detecção inteligente de ameaças em logs de fluxo da VPC e DNS.",
    "explanation_why_correct": "Para proteger ainda mais a rede e aplicações, você pode usar o **Amazon GuardDuty (B)** (detecção de ameaças) e o **AWS WAF (D)** (firewall de aplicação web).",
    "explanation_why_incorrect": "SQS é fila de mensagens; Single Sign-On gerencia autenticação de usuários; e KMS gerencia chaves de criptografia.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 58,
    "type": "single",
    "category": "Conceitos da Nuvem AWS (24%)",
    "category_en": "Conceitos da Nuvem AWS (24%)",
    "objective": "1.2 Explicar o isolamento físico das Zonas de Disponibilidade (AZs)",
    "what_it_tests": "As Zonas de Disponibilidade de uma Região são separadas fisicamente umas das outras (até cerca de 100 km / 60 milhas) para garantir que desastres locais (incêndios, inundações, quedas de energia) não afetem mais de uma AZ.",
    "question": "As zonas de disponibilidade são fisicamente separadas por uma distância significativa de qualquer outra AZ, embora todas estejam a 100 km ou 60 milhas umas das outras. Qual é a principal razão pela qual as zonas de disponibilidade são configuradas da forma como estão agora?",
    "options": [
      {
        "id": "A",
        "text": "Para obter uma melhor conectividade de rede para os usuários no local"
      },
      {
        "id": "B",
        "text": "O preço do terreno é mais barato nesses locais"
      },
      {
        "id": "C",
        "text": "Para maximizar a cobertura da área em uma região"
      },
      {
        "id": "D",
        "text": "Para mantê-los afastados uns dos outros em caso de desastre"
      }
    ],
    "correct_answer": "D",
    "official_rationale": "As Zonas de Disponibilidade de uma Região são separadas fisicamente umas das outras (até cerca de 100 km / 60 milhas) para garantir que desastres locais (incêndios, inundações, quedas de energia) não afetem mais de uma AZ.",
    "explanation_why_correct": "As Zonas de Disponibilidade são separadas fisicamente **para mantê-las afastadas umas das outras e isoladas em caso de desastre (D)**, mantendo baixa latência entre si.",
    "explanation_why_incorrect": "O objetivo da distância entre AZs dentro da mesma região é o isolamento de falhas e desastres naturais.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 59,
    "type": "single",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.3 Identificar as características do Amazon Aurora",
    "what_it_tests": "O Amazon Aurora possui um subsistema de armazenamento distribuído, tolerante a falhas e com capacidade de autocorreção (self-healing) que mantém 6 cópias dos dados em 3 Zonas de Disponibilidade e entrega altíssimo rendimento.",
    "question": "Você precisa de um banco de dados que seja capaz de autocorreção e tenha um alto rendimento. Qual dos seguintes serviços se enquadra nesses critérios?",
    "options": [
      {
        "id": "A",
        "text": "Amazon DynamoDB"
      },
      {
        "id": "B",
        "text": "Amazon Redshift"
      },
      {
        "id": "C",
        "text": "Amazon Aurora"
      },
      {
        "id": "D",
        "text": "Amazon RDS"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "O Amazon Aurora possui um subsistema de armazenamento distribuído, tolerante a falhas e com capacidade de autocorreção (self-healing) que mantém 6 cópias dos dados em 3 Zonas de Disponibilidade e entrega altíssimo rendimento.",
    "explanation_why_correct": "O **Amazon Aurora (C)** possui armazenamento com **autocorreção (self-healing)** que verifica erros continuamente nos blocos de disco e os repara automaticamente usando réplicas em 3 AZs.",
    "explanation_why_incorrect": "O armazenamento distribuído autorecuperável de 6 cópias em 3 AZs com até 5x o throughput do MySQL é a marca registrada do Amazon Aurora.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 60,
    "type": "multi",
    "category": "Cobrança, Preços e Suporte da AWS (12%)",
    "category_en": "Cobrança, Preços e Suporte da AWS (12%)",
    "objective": "4.3 Identificar os benefícios do plano AWS Enterprise Support",
    "what_it_tests": "O plano AWS Enterprise Support oferece gerenciamento técnico proativo de contas através de um TAM dedicado e suporte com tempo de resposta de 15 minutos para sistemas críticos inativos.",
    "question": "Qual das opções a seguir o plano de suporte Enterprise oferece aos clientes na AWS? (Selecione DOIS.)",
    "options": [
      {
        "id": "A",
        "text": "Acesso limitado às 7 verificações do Core Trusted Advisor"
      },
      {
        "id": "B",
        "text": "Acesso a laboratórios autoguiados online"
      },
      {
        "id": "C",
        "text": "Suporte de tempo de resposta de 5 minutos se o seu sistema crítico para os negócios ficar inativo"
      },
      {
        "id": "D",
        "text": "Gerenciamento técnico proativo de contas"
      },
      {
        "id": "E",
        "text": "Suporte de tempo de resposta de 15 minutos se o seu sistema de produção ficar inativo"
      }
    ],
    "correct_answer": [
      "D",
      "E"
    ],
    "official_rationale": "O plano AWS Enterprise Support oferece gerenciamento técnico proativo de contas através de um TAM dedicado e suporte com tempo de resposta de 15 minutos para sistemas críticos inativos.",
    "explanation_why_correct": "O plano Enterprise oferece **Gerenciamento técnico proativo de contas via TAM (D)** e **suporte com tempo de resposta de 15 minutos para sistemas críticos/produção inativos neste gabarito (E)**.",
    "explanation_why_incorrect": "No plano Enterprise o acesso ao Trusted Advisor é total (não limitado a 7 verificações) e não existe SLA de 5 minutos nesse plano padrão.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 61,
    "type": "single",
    "category": "Segurança e Conformidade na AWS (30%)",
    "category_en": "Segurança e Conformidade na AWS (30%)",
    "objective": "2.3 Aplicar o Princípio do Menor Privilégio (Least Privilege) no AWS IAM",
    "what_it_tests": "Uma das práticas fundamentais de segurança do AWS IAM é conceder o menor privilégio (Grant Least Privilege): conceder apenas as permissões estritamente necessárias para o usuário realizar sua tarefa.",
    "question": "Um funcionário está solicitando acesso aos seus buckets do S3. Qual deve ser o nível de acesso que você deve fornecer a ele?",
    "options": [
      {
        "id": "A",
        "text": "Dê a ele níveis de acesso de administrador"
      },
      {
        "id": "B",
        "text": "Pergunte que tipo de acesso ele precisa e forneça apenas essas permissões"
      },
      {
        "id": "C",
        "text": "Dê a ele acesso somente leitura"
      },
      {
        "id": "D",
        "text": "Dê a ele acesso total ao S3"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "Uma das práticas fundamentais de segurança do AWS IAM é conceder o menor privilégio (Grant Least Privilege): conceder apenas as permissões estritamente necessárias para o usuário realizar sua tarefa.",
    "explanation_why_correct": "Seguindo o **Princípio do Menor Privilégio**, você deve **perguntar que tipo de acesso ele precisa e fornecer apenas essas permissões específicas (B)**.",
    "explanation_why_incorrect": "Dar acesso de administrador ou acesso total ao S3 sem necessidade viola o princípio do menor privilégio, e dar somente leitura pode impedir o trabalho se ele precisar gravar objetos.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 62,
    "type": "single",
    "category": "Conceitos da Nuvem AWS (24%)",
    "category_en": "Conceitos da Nuvem AWS (24%)",
    "objective": "1.3 Definir os benefícios de sistemas escaláveis na nuvem",
    "what_it_tests": "Um sistema escalável é projetado para expandir ou contrair sua capacidade de recursos a fim de lidar com diferentes volumes de tráfego e cargas variadas de trabalho sem perda de desempenho.",
    "question": "Qual é o principal benefício de criar um sistema escalável?",
    "options": [
      {
        "id": "A",
        "text": "Os aplicativos não são facilmente visados por ataques maliciosos"
      },
      {
        "id": "B",
        "text": "Os recursos do aplicativo custarão menos do que o normal"
      },
      {
        "id": "C",
        "text": "Os aplicativos são capazes de lidar com cargas variadas de trabalho"
      },
      {
        "id": "D",
        "text": "Os aplicativos são capazes de fazer failover normalmente"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "Um sistema escalável é projetado para expandir ou contrair sua capacidade de recursos a fim de lidar com diferentes volumes de tráfego e cargas variadas de trabalho sem perda de desempenho.",
    "explanation_why_correct": "O principal benefício de criar um sistema escalável é que **os aplicativos são capazes de lidar com cargas variadas de trabalho (C)**.",
    "explanation_why_incorrect": "Proteção contra ataques diz respeito à segurança, e fazer failover refere-se à alta disponibilidade/tolerância a falhas.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 63,
    "type": "single",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.2 Identificar serviços de computação de borda 5G da AWS",
    "what_it_tests": "O AWS Wavelength incorpora serviços de computação e armazenamento da AWS dentro das redes 5G de provedores de telecomunicações, permitindo desenvolver aplicações móveis com latência de poucos milissegundos.",
    "question": "Quais dos seguintes serviços combinam redes 5G com serviços de computação e armazenamento da AWS para o benefício de aplicativos móveis de alto desempenho?",
    "options": [
      {
        "id": "A",
        "text": "AWS Amplify"
      },
      {
        "id": "B",
        "text": "AWS Wavelength"
      },
      {
        "id": "C",
        "text": "AWS Cloud9"
      },
      {
        "id": "D",
        "text": "AWS Control Tower"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "O AWS Wavelength incorpora serviços de computação e armazenamento da AWS dentro das redes 5G de provedores de telecomunicações, permitindo desenvolver aplicações móveis com latência de poucos milissegundos.",
    "explanation_why_correct": "O **AWS Wavelength (B)** combina redes **5G** com serviços de computação e armazenamento da AWS na borda das operadoras móveis.",
    "explanation_why_incorrect": "AWS Amplify é para desenvolvimento web/mobile front-end; Cloud9 é uma IDE no navegador; e Control Tower governa ambientes multi-conta.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 64,
    "type": "single",
    "category": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "category_en": "Tecnologia e Serviços da Nuvem AWS (34%)",
    "objective": "3.8 Identificar casos de uso do AWS Marketplace",
    "what_it_tests": "O AWS Marketplace oferece milhares de AMIs (Amazon Machine Images) e softwares pré-configurados e licenciados por fornecedores independentes, permitindo implantar pilhas prontas em instâncias EC2 rapidamente.",
    "question": "Uma engenheira está tendo problemas para migrar e configurar um aplicativo licenciado que ela usa em suas instâncias do EC2. Que alternativa ela precisa fazer para colocar seus aplicativos em funcionamento rapidamente na AWS?",
    "options": [
      {
        "id": "A",
        "text": "Configure uma conexão VPN de sua rede local para sua AWS VPC, o que essencialmente significa que seu trabalho agora está sendo executado na nuvem"
      },
      {
        "id": "B",
        "text": "Ela pode simplesmente usar o AWS Application Discovery Service para criar uma cópia exata do aplicativo no EC2"
      },
      {
        "id": "C",
        "text": "Tente procurar uma AMI no AWS Marketplace que forneça uma configuração semelhante à pilha de aplicativos dela"
      },
      {
        "id": "D",
        "text": "Crie uma imagem do Docker do aplicativo e inicie o Docker nas instâncias do EC2"
      }
    ],
    "correct_answer": "C",
    "official_rationale": "O AWS Marketplace oferece milhares de AMIs (Amazon Machine Images) e softwares pré-configurados e licenciados por fornecedores independentes, permitindo implantar pilhas prontas em instâncias EC2 rapidamente.",
    "explanation_why_correct": "Ela deve **procurar uma AMI no AWS Marketplace que forneça uma configuração semelhante à pilha de aplicativos dela (C)** para colocar o software licenciado em funcionamento rapidamente.",
    "explanation_why_incorrect": "VPN apenas conecta a rede local; Application Discovery Service apenas coleta inventário para planejamento de migração; e empacotar em Docker manualmente não resolve problemas de licenciamento no EC2 tão rápido quanto o Marketplace.",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  },
  {
    "id": 65,
    "type": "single",
    "category": "Segurança e Conformidade na AWS (30%)",
    "category_en": "Segurança e Conformidade na AWS (30%)",
    "objective": "2.3 Identificar práticas recomendadas de segurança do AWS IAM",
    "what_it_tests": "A AWS recomenda fortemente não usar o usuário raiz (root user) da conta para tarefas diárias; em vez disso, você deve criar usuários ou funções do IAM (mesmo para tarefas administrativas) e proteger o root.",
    "question": "Qual das opções a seguir é um exemplo de uma prática recomendada de segurança na AWS?",
    "options": [
      {
        "id": "A",
        "text": "Conceder o maior privilégio"
      },
      {
        "id": "B",
        "text": "Habilite o MFS apenas na conta root"
      },
      {
        "id": "C",
        "text": "Sempre defina manualmente as permissões para cada usuário individual do IAM"
      },
      {
        "id": "D",
        "text": "Crie um usuário do IAM com privilégios de administrador em vez de usar root"
      }
    ],
    "correct_answer": "D",
    "official_rationale": "A AWS recomenda fortemente não usar o usuário raiz (root user) da conta para tarefas diárias; em vez disso, você deve criar usuários ou funções do IAM (mesmo para tarefas administrativas) e proteger o root.",
    "explanation_why_correct": "É uma prática recomendada de segurança da AWS **criar um usuário do IAM com privilégios de administrador para o dia a dia em vez de usar a conta root (D)**.",
    "explanation_why_incorrect": "Deve-se conceder o menor privilégio (não o maior), habilitar MFA em todos os usuários (não apenas no root) e atribuir permissões por meio de Grupos/Roles do IAM (não anexando manualmente em cada usuário individual).",
    "additional_reading": [
      {
        "title": "Guia Oficial do Exame AWS Certified Cloud Practitioner (CLF-C02)",
        "url": "https://aws.amazon.com/pt/certification/certified-cloud-practitioner/"
      },
      {
        "title": "Documentação Oficial da AWS (Português)",
        "url": "https://docs.aws.amazon.com/pt_br/"
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    AWS_SIMULADO_1_QUESTIONS,
    AWS_SIMULADO_2_QUESTIONS,
    AWS_SIMULADO_3_QUESTIONS
  };
}
