// Simulado Oficial Google Cloud Associate Cloud Engineer (GCP-ACE)
// Extraído dos Google Forms (Simulados 1, 3 e 4) - Total: 150 questões comentadas em PT-BR

const GCP_SIMULADO_1_QUESTIONS = [
  {
    "id": 1,
    "type": "single",
    "category": "Configurar acesso e segurança (20%)",
    "category_en": "Configurar acesso e segurança (20%)",
    "objective": "5.1 Gerenciar gerenciamento de identidade e acesso (IAM) e OS Login",
    "what_it_tests": "O OS Login vincula chaves SSH à identidade do Google do usuário e gerencia o acesso administrativo a VMs via papéis do IAM (como roles/compute.osAdminLogin) em grupos do Google, permitindo auditoria individualizada.",
    "question": "Todos os funcionários da sua empresa possuem uma conta do Google. Sua equipe operacional precisa gerenciar um grande número de instâncias no Compute Engine. Cada membro dessa equipe precisa apenas de acesso administrativo aos servidores. Sua equipe de segurança quer garantir que a implantação de credenciais seja operacionalmente eficiente e precisa ser capaz de determinar quem acessou uma determinada instância. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Gerar um novo par de chaves SSH. Entregar a chave privada a cada membro da sua equipe. Configurar a chave pública nos metadados de cada instância."
      },
      {
        "id": "B",
        "text": "Pedir a cada membro da equipe que gere um novo par de chaves SSH e envie sua chave pública. Usar uma ferramenta de gerenciamento de configuração para implantar essas chaves em cada instância."
      },
      {
        "id": "C",
        "text": "Pedir a cada membro da equipe que gere um novo par de chaves SSH e adicione a chave pública à sua conta do Google. Conceder o papel “compute.osAdminLogin” ao grupo do Google correspondente a essa equipe."
      },
      {
        "id": "D",
        "text": "Gerar um novo par de chaves SSH. Entregar a chave privada a cada membro da sua equipe. Configurar a chave pública como uma chave SSH pública em todo o projeto no seu projeto do Cloud Platform e permitir chaves SSH públicas em todo o projeto em cada instância."
      }
    ],
    "correct_answer": "C",
    "official_rationale": "O OS Login vincula chaves SSH à identidade do Google do usuário e gerencia o acesso administrativo a VMs via papéis do IAM (como roles/compute.osAdminLogin) em grupos do Google, permitindo auditoria individualizada.",
    "explanation_why_correct": "Usar o **OS Login** associando a chave pública SSH à conta do Google de cada usuário e conceder o papel `roles/compute.osAdminLogin` ao grupo do Google da equipe centraliza o controle de acesso no IAM, elimina o gerenciamento manual de chaves nas VMs e garante rastreabilidade individual nos logs de auditoria.",
    "explanation_why_incorrect": "Compartilhar uma mesma chave privada entre membros (A e D) impede identificar quem acessou a instância e viola boas práticas de segurança. Implantar chaves manualmente via ferramenta de configuração (B) gera sobrecarga operacional desnecessária em comparação ao OS Login.",
    "additional_reading": [
      {
        "title": "Gerenciar acesso a instâncias com o OS Login",
        "url": "https://cloud.google.com/compute/docs/oslogin"
      }
    ]
  },
  {
    "id": 2,
    "type": "single",
    "category": "Configurar um ambiente de solução em nuvem (17.5%)",
    "category_en": "Configurar um ambiente de solução em nuvem (17.5%)",
    "objective": "1.3 Configurar redes VPC e sub-redes",
    "what_it_tests": "O bloco privado RFC 1918 10.0.0.0/8 oferece a maior máscara de sub-rede permitida em uma VPC do Google Cloud (/8, com mais de 16 milhões de endereços IP).",
    "question": "Você precisa criar uma VPC personalizada (custom VPC) com uma única sub-rede. O intervalo de endereços da sub-rede deve ser o maior possível. Qual intervalo você deve usar?",
    "options": [
      {
        "id": "A",
        "text": "0.0.0.0/0"
      },
      {
        "id": "B",
        "text": "10.0.0.0/8"
      },
      {
        "id": "C",
        "text": "172.16.0.0/12"
      },
      {
        "id": "D",
        "text": "192.168.0.0/16"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "O bloco privado RFC 1918 10.0.0.0/8 oferece a maior máscara de sub-rede permitida em uma VPC do Google Cloud (/8, com mais de 16 milhões de endereços IP).",
    "explanation_why_correct": "O intervalo **10.0.0.0/8** é o maior bloco de endereços IP privados RFC 1918 disponível (prefixo `/8`), fornecendo até $2^{24}$ endereços IP para a sub-rede na VPC.",
    "explanation_why_incorrect": "`0.0.0.0/0` (A) representa todas as rotas IPv4 e não é um intervalo RFC 1918 válido para sub-rede. `172.16.0.0/12` (C) e `192.168.0.0/16` (D) são blocos RFC 1918 válidos, porém menores que `/8`.",
    "additional_reading": [
      {
        "title": "Intervalos de sub-rede IPv4 válidos na VPC",
        "url": "https://cloud.google.com/vpc/docs/subnets"
      }
    ]
  },
  {
    "id": 3,
    "type": "single",
    "category": "Planejar e configurar uma solução de nuvem (17.5%)",
    "category_en": "Planejar e configurar uma solução de nuvem (17.5%)",
    "objective": "2.3 Selecionar e configurar opções de armazenamento e banco de dados relacional",
    "what_it_tests": "Para bancos de dados relacionais regionais de pequeno porte, o Cloud SQL é a opção mais econômica, e a recuperação pontual (PITR) no Cloud SQL para MySQL exige backups automatizados com binary logging habilitado.",
    "question": "Você deseja selecionar e configurar uma solução econômica para dados relacionais no Google Cloud Platform. Você está trabalhando com um pequeno conjunto de dados operacionais em uma única localização geográfica. Você precisa oferecer suporte à recuperação pontual (point-in-time recovery). O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Selecionar o Cloud SQL (MySQL). Verificar se a opção de habilitar o log binário (binary logging) está selecionada."
      },
      {
        "id": "B",
        "text": "Selecionar o Cloud SQL (MySQL). Selecionar a opção de criar réplicas de failover."
      },
      {
        "id": "C",
        "text": "Selecionar o Cloud Spanner. Configurar sua instância com 2 nós."
      },
      {
        "id": "D",
        "text": "Selecionar o Cloud Spanner. Configurar sua instância como multirregional."
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Para bancos de dados relacionais regionais de pequeno porte, o Cloud SQL é a opção mais econômica, e a recuperação pontual (PITR) no Cloud SQL para MySQL exige backups automatizados com binary logging habilitado.",
    "explanation_why_correct": "O **Cloud SQL (MySQL)** é ideal e econômico para cargas de trabalho relacionais em uma única região. Para habilitar a recuperação pontual (*Point-in-Time Recovery* - PITR), é necessário ativar os backups automáticos e o **log binário (binary logging)**.",
    "explanation_why_incorrect": "Réplicas de failover (B) fornecem alta disponibilidade zonal, e não recuperação pontual. O Cloud Spanner (C e D) é voltado para escala global e alto volume transacional, tendo custo muito superior para um pequeno conjunto de dados em um único local.",
    "additional_reading": [
      {
        "title": "Recuperação pontual (PITR) no Cloud SQL para MySQL",
        "url": "https://cloud.google.com/sql/docs/mysql/backup-recovery/pitr"
      }
    ]
  },
  {
    "id": 4,
    "type": "single",
    "category": "Implantar e implementar uma solução de nuvem (25%)",
    "category_en": "Implantar e implementar uma solução de nuvem (25%)",
    "objective": "3.1 Implantar e gerenciar grupos gerenciados de instâncias (MIGs)",
    "what_it_tests": "A recriação automática de instâncias não íntegras (autohealing) é configurada diretamente em um Grupo Gerenciado de Instâncias (MIG) por meio de uma verificação de integridade de autohealing.",
    "question": "Você deseja configurar aautocorreção (autohealing) para balanceamento de carga de rede para um grupo de instâncias do Compute Engine que são executadas em várias zonas, usando o menor número possível de etapas. Você precisa configurar a recriação de VMs se elas não responderem após 3 tentativas de 10 segundos cada. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Criar um balanceador de carga HTTP com uma configuração de backend que faça referência a um grupo de instâncias existente. Definir a verificação de integridade como íntegra (HTTP)."
      },
      {
        "id": "B",
        "text": "Criar um balanceador de carga HTTP com uma configuração de backend que faça referência a um grupo de instâncias existente. Definir um modo de balanceamento e configurar o RPS máximo para 10."
      },
      {
        "id": "C",
        "text": "Criar um grupo gerenciado de instâncias (Managed Instance Group). Definir a verificação de integridade de Autohealing como íntegra (HTTP)."
      },
      {
        "id": "D",
        "text": "Criar um grupo gerenciado de instâncias (Managed Instance Group). Verificar se a configuração de escalonamento automático (autoscaling) está ativada."
      }
    ],
    "correct_answer": "C",
    "official_rationale": "A recriação automática de instâncias não íntegras (autohealing) é configurada diretamente em um Grupo Gerenciado de Instâncias (MIG) por meio de uma verificação de integridade de autohealing.",
    "explanation_why_correct": "Criar um **Grupo Gerenciado de Instâncias (MIG)** regional (múltiplas zonas) e configurar uma **verificação de integridade (health check) de Autohealing** garante que o Compute Engine recrie automaticamente qualquer VM que falhe nas sondagens configuradas.",
    "explanation_why_incorrect": "Verificações de integridade do balanceador de carga (A e B) apenas evitam o envio de tráfego para instâncias com falha, mas não recriam as VMs. O escalonamento automático (D) adiciona ou remove instâncias conforme a carga, mas não substitui VMs travadas.",
    "additional_reading": [
      {
        "title": "Configurar autohealing em grupos gerenciados de instâncias",
        "url": "https://cloud.google.com/compute/docs/instance-groups/autohealing-instances-in-migs"
      }
    ]
  },
  {
    "id": 5,
    "type": "single",
    "category": "Configurar um ambiente de solução em nuvem (17.5%)",
    "category_en": "Configurar um ambiente de solução em nuvem (17.5%)",
    "objective": "1.2 Instalar e configurar a interface de linha de comando (Cloud SDK)",
    "what_it_tests": "O comando 'gcloud config configurations describe <NOME>' exibe todas as propriedades (incluindo container/cluster) de uma configuração específica do gcloud sem precisar ativá-la.",
    "question": "Você está usando várias configurações para o gcloud. Você deseja revisar o cluster do Kubernetes Engine configurado em uma configuração inativa usando o menor número possível de etapas. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Usar gcloud config configurations describe para revisar a saída."
      },
      {
        "id": "B",
        "text": "Usar gcloud config configurations activate e gcloud config list para revisar a saída."
      },
      {
        "id": "C",
        "text": "Usar kubectl config get-contexts para revisar a saída."
      },
      {
        "id": "D",
        "text": "Usar kubectl config use-context e kubectl config view para revisar a saída."
      }
    ],
    "correct_answer": "A",
    "official_rationale": "O comando 'gcloud config configurations describe <NOME>' exibe todas as propriedades (incluindo container/cluster) de uma configuração específica do gcloud sem precisar ativá-la.",
    "explanation_why_correct": "O comando **`gcloud config configurations describe`** mostra diretamente as propriedades definidas em uma configuração inativa da CLI `gcloud` (como `container/cluster`), em uma única etapa e sem alterar a configuração ativa.",
    "explanation_why_incorrect": "Ativar a configuração e listar (B) exige dois comandos e altera o estado ativo. Os comandos `kubectl config` (C e D) consultam o arquivo `kubeconfig` do Kubernetes, e não as configurações nomeadas do `gcloud`.",
    "additional_reading": [
      {
        "title": "Gerenciar configurações da CLI gcloud",
        "url": "https://cloud.google.com/sdk/gcloud/reference/config/configurations/describe"
      }
    ]
  },
  {
    "id": 6,
    "type": "single",
    "category": "Planejar e configurar uma solução de nuvem (17.5%)",
    "category_en": "Planejar e configurar uma solução de nuvem (17.5%)",
    "objective": "2.3 Selecionar classes de armazenamento do Cloud Storage",
    "what_it_tests": "O Coldline Storage (ou Archive) é a classe recomendada para arquivos de recuperação de desastres (DR) que são raramente acessados (menos de uma vez por trimestre/ano).",
    "question": "Sua empresa usa o Cloud Storage para armazenar arquivos de backup de aplicativos para fins de recuperação de desastres (disaster recovery). Você deseja seguir as práticas recomendadas pelo Google. Qual opção de armazenamento você deve usar?",
    "options": [
      {
        "id": "A",
        "text": "Multi-Regional Storage"
      },
      {
        "id": "B",
        "text": "Regional Storage"
      },
      {
        "id": "C",
        "text": "Nearline Storage"
      },
      {
        "id": "D",
        "text": "Coldline Storage"
      }
    ],
    "correct_answer": "D",
    "official_rationale": "O Coldline Storage (ou Archive) é a classe recomendada para arquivos de recuperação de desastres (DR) que são raramente acessados (menos de uma vez por trimestre/ano).",
    "explanation_why_correct": "O **Coldline Storage** foi projetado para dados acessados com pouquíssima frequência, como backups de **recuperação de desastres (disaster recovery)**, oferecendo custo de armazenamento muito baixo com disponibilidade imediata caso um desastre ocorra.",
    "explanation_why_incorrect": "Multi-Regional (A) e Regional (B) possuem custos de armazenamento mais altos por serem voltados a dados acessados frequentemente. Nearline (C) é indicado para dados acessados cerca de uma vez por mês.",
    "additional_reading": [
      {
        "title": "Classes de armazenamento do Cloud Storage",
        "url": "https://cloud.google.com/storage/docs/storage-classes"
      }
    ]
  },
  {
    "id": 7,
    "type": "single",
    "category": "Configurar um ambiente de solução em nuvem (17.5%)",
    "category_en": "Configurar um ambiente de solução em nuvem (17.5%)",
    "objective": "1.1 Configurar projetos e contas de faturamento na nuvem",
    "what_it_tests": "Contas de faturamento de autoatendimento são criadas diretamente no Console do Google Cloud configurando um método de pagamento, podendo então ser vinculadas aos projetos existentes.",
    "question": "Vários funcionários da sua empresa vêm criando projetos no Cloud Platform e pagando por eles com seus cartões de crédito pessoais, que a empresa reembolsa. A empresa deseja centralizar todos esses projetos em uma única e nova conta de faturamento. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Entrar em contato com cloud-billing@google.com informando seus dados bancários e solicitar uma conta de faturamento corporativa para sua empresa."
      },
      {
        "id": "B",
        "text": "Criar um chamado no Google Support e aguardar a ligação para compartilhar os dados do seu cartão de crédito por telefone."
      },
      {
        "id": "C",
        "text": "No Console do Google Cloud Platform, acessar o Resource Manager e mover todos os projetos para a Organização raiz."
      },
      {
        "id": "D",
        "text": "No Console do Google Cloud Platform, criar uma nova conta de faturamento e configurar um método de pagamento."
      }
    ],
    "correct_answer": "D",
    "official_rationale": "Contas de faturamento de autoatendimento são criadas diretamente no Console do Google Cloud configurando um método de pagamento, podendo então ser vinculadas aos projetos existentes.",
    "explanation_why_correct": "No Console do Google Cloud, você pode **criar diretamente uma nova conta de faturamento (Cloud Billing account)**, configurar o método de pagamento corporativo e vincular os projetos existentes a essa nova conta.",
    "explanation_why_incorrect": "O Google não cria contas de faturamento por e-mail (A) nem solicita dados de cartão de crédito por telefone (B). Mover projetos para a Organização (C) altera apenas a hierarquia no Resource Manager, não vinculando automaticamente uma conta de faturamento.",
    "additional_reading": [
      {
        "title": "Criar, modificar ou encerrar uma conta do Cloud Billing",
        "url": "https://cloud.google.com/billing/docs/how-to/manage-billing-account"
      }
    ]
  },
  {
    "id": 8,
    "type": "single",
    "category": "Implantar e implementar uma solução de nuvem (25%)",
    "category_en": "Implantar e implementar uma solução de nuvem (25%)",
    "objective": "3.1 Implantar e implementar recursos do Compute Engine e endereçamento IP",
    "what_it_tests": "Reservar um endereço IP interno estático garante que a VM do servidor de licenciamento receba exatamente o IP privado 10.0.3.21 e o mantenha permanentemente mesmo se a instância for recriada.",
    "question": "Você tem um aplicativo que procura seu servidor de licenciamento no IP 10.0.3.21. Você precisa implantar o servidor de licenciamento no Compute Engine. Você não quer alterar a configuração do aplicativo e deseja que ele consiga alcançar o servidor de licenciamento. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Reservar o IP 10.0.3.21 como um endereço IP interno estático usando o gcloud e atribuí-lo ao servidor de licenciamento."
      },
      {
        "id": "B",
        "text": "Reservar o IP 10.0.3.21 como um endereço IP público estático usando o gcloud e atribuí-lo ao servidor de licenciamento."
      },
      {
        "id": "C",
        "text": "Usar o IP 10.0.3.21 como um endereço IP efêmero personalizado e atribuí-lo ao servidor de licenciamento."
      },
      {
        "id": "D",
        "text": "Iniciar o servidor de licenciamento com um endereço IP efêmero automático e depois promovê-lo a um endereço IP interno estático."
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Reservar um endereço IP interno estático garante que a VM do servidor de licenciamento receba exatamente o IP privado 10.0.3.21 e o mantenha permanentemente mesmo se a instância for recriada.",
    "explanation_why_correct": "Reservar `10.0.3.21` como um **endereço IP interno estático** e atribuí-lo à instância do servidor de licenciamento garante que o endereço privado específico seja preservado de forma permanente na sub-rede.",
    "explanation_why_incorrect": "`10.0.3.21` é um endereço privado RFC 1918, portanto não pode ser reservado como IP público (B). Um IP efêmero personalizado (C) pode ser perdido se a instância for excluída/recriada. Um IP efêmero automático (D) escolheria um IP aleatório na sub-rede, provavelmente diferente de `10.0.3.21`.",
    "additional_reading": [
      {
        "title": "Reservar um endereço IP interno estático",
        "url": "https://cloud.google.com/compute/docs/ip-addresses/reserve-static-internal-ip-address"
      }
    ]
  },
  {
    "id": 9,
    "type": "single",
    "category": "Implantar e implementar uma solução de nuvem (25%)",
    "category_en": "Implantar e implementar uma solução de nuvem (25%)",
    "objective": "3.3 Implantar e implementar aplicativos no App Engine",
    "what_it_tests": "O Automatic Scaling no App Engine escalona com base na taxa de requisições e suporta o parâmetro min_idle_instances para manter um número mínimo de instâncias ociosas prontas para picos de tráfego.",
    "question": "Você está implantando um aplicativo no App Engine. Você deseja que o número de instâncias seja escalonado com base na taxa de requisições. Você precisa de pelo menos 3 instâncias desocupadas (ociosas) o tempo todo. Qual tipo de escalonamento você deve usar?",
    "options": [
      {
        "id": "A",
        "text": "Escalonamento Manual (Manual Scaling) com 3 instâncias."
      },
      {
        "id": "B",
        "text": "Escalonamento Básico (Basic Scaling) com min_instances definido como 3."
      },
      {
        "id": "C",
        "text": "Escalonamento Básico (Basic Scaling) com max_instances definido como 3."
      },
      {
        "id": "D",
        "text": "Escalonamento Automático (Automatic Scaling) com min_idle_instances definido como 3."
      }
    ],
    "correct_answer": "D",
    "official_rationale": "O Automatic Scaling no App Engine escalona com base na taxa de requisições e suporta o parâmetro min_idle_instances para manter um número mínimo de instâncias ociosas prontas para picos de tráfego.",
    "explanation_why_correct": "O **Automatic Scaling (Escalonamento Automático)** ajusta as instâncias conforme a taxa de requisições e permite configurar `min_idle_instances: 3` para manter sempre 3 instâncias ociosas aquecidas e prontas para atender picos imediatos.",
    "explanation_why_incorrect": "O Manual Scaling (A) mantém um número fixo de instâncias sem escalonar por taxa de requisições. O Basic Scaling (B e C) cria instâncias sob demanda e as desliga quando ociosas, não suportando instâncias ociosas permanentes (`min_idle_instances`).",
    "additional_reading": [
      {
        "title": "Como as instâncias são gerenciadas no App Engine",
        "url": "https://cloud.google.com/appengine/docs/standard/how-instances-are-managed"
      }
    ]
  },
  {
    "id": 10,
    "type": "single",
    "category": "Configurar acesso e segurança (20%)",
    "category_en": "Configurar acesso e segurança (20%)",
    "objective": "5.1 Gerenciar papéis personalizados do Cloud IAM",
    "what_it_tests": "O comando 'gcloud iam roles copy' copia um papel personalizado existente diretamente de um projeto de origem para um projeto de destino em um único passo.",
    "question": "Você tem um projeto de desenvolvimento com papéis apropriados do IAM definidos. Você está criando um projeto de produção e deseja ter os mesmos papéis do IAM no novo projeto, usando o menor número possível de etapas. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Usar gcloud iam roles copy e especificar o projeto de produção como o projeto de destino."
      },
      {
        "id": "B",
        "text": "Usar gcloud iam roles copy e especificar sua organização como a organização de destino."
      },
      {
        "id": "C",
        "text": "No Console do Google Cloud Platform, usar a funcionalidade ‘criar papel a partir de papel’ (create role from role)."
      },
      {
        "id": "D",
        "text": "No Console do Google Cloud Platform, usar a funcionalidade ‘criar papel’ (create role) e selecionar todas as permissões aplicáveis."
      }
    ],
    "correct_answer": "A",
    "official_rationale": "O comando 'gcloud iam roles copy' copia um papel personalizado existente diretamente de um projeto de origem para um projeto de destino em um único passo.",
    "explanation_why_correct": "O comando **`gcloud iam roles copy --source=<ROLE_ID> --source-project=<DEV_PROJECT> --dest-project=<PROD_PROJECT>`** copia diretamente os papéis personalizados do projeto de desenvolvimento para o projeto de produção com o menor número de etapas.",
    "explanation_why_incorrect": "Copiar para a organização (B) alteraria o escopo para nível organizacional em vez de apenas para o projeto de produção. As opções no Console (C e D) exigem etapas manuais repetitivas para cada papel e permissão.",
    "additional_reading": [
      {
        "title": "Copiar um papel personalizado do IAM",
        "url": "https://cloud.google.com/sdk/gcloud/reference/iam/roles/copy"
      }
    ]
  },
  {
    "id": 11,
    "type": "single",
    "category": "Implantar e implementar uma solução de nuvem (25%)",
    "category_en": "Implantar e implementar uma solução de nuvem (25%)",
    "objective": "3.6 Implantar soluções usando infraestrutura como código (Deployment Manager)",
    "what_it_tests": "O Cloud Deployment Manager é o serviço nativo de Infraestrutura como Código (IaC) que provisiona recursos do Google Cloud de forma declarativa a partir de arquivos de configuração (YAML/Python/Jinja2).",
    "question": "Você precisa de uma maneira dinâmica de provisionar VMs no Compute Engine. As especificações exatas estarão em um arquivo de configuração dedicado. Você deseja seguir as práticas recomendadas pelo Google. Qual método você deve usar?",
    "options": [
      {
        "id": "A",
        "text": "Deployment Manager"
      },
      {
        "id": "B",
        "text": "Cloud Composer"
      },
      {
        "id": "C",
        "text": "Managed Instance Group"
      },
      {
        "id": "D",
        "text": "Unmanaged Instance Group"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "O Cloud Deployment Manager é o serviço nativo de Infraestrutura como Código (IaC) que provisiona recursos do Google Cloud de forma declarativa a partir de arquivos de configuração (YAML/Python/Jinja2).",
    "explanation_why_correct": "O **Cloud Deployment Manager** permite definir especificações exatas de VMs e outros recursos em arquivos de configuração declarativos (YAML, Python ou Jinja2) para provisionamento automatizado e repetível.",
    "explanation_why_incorrect": "O Cloud Composer (B) é um orquestrador de fluxos de trabalho baseado no Apache Airflow. Grupos de instâncias gerenciados (C) e não gerenciados (D) agrupam VMs para balanceamento/auto-scaling, e não são ferramentas declarativas baseadas em arquivos de configuração IaC.",
    "additional_reading": [
      {
        "title": "Visão geral do Cloud Deployment Manager",
        "url": "https://cloud.google.com/deployment-manager/docs/overview"
      }
    ]
  },
  {
    "id": 12,
    "type": "single",
    "category": "Implantar e implementar uma solução de nuvem (25%)",
    "category_en": "Implantar e implementar uma solução de nuvem (25%)",
    "objective": "3.2 Implantar aplicativos em contêineres no Google Kubernetes Engine (GKE)",
    "what_it_tests": "O Kubernetes não executa Dockerfiles diretamente; é necessário construir a imagem de contêiner, armazená-la em um registro de imagens (Container Registry / Artifact Registry) e aplicar um manifesto de Deployment via kubectl.",
    "question": "Você tem um Dockerfile que precisa implantar no Kubernetes Engine. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Usar kubectl app deploy <dockerfilename>."
      },
      {
        "id": "B",
        "text": "Usar gcloud app deploy <dockerfilename>."
      },
      {
        "id": "C",
        "text": "Criar uma imagem Docker a partir do Dockerfile e fazer o upload para o Container Registry. Criar um arquivo YAML de Deployment para apontar para essa imagem. Usar o kubectl para criar a implantação com esse arquivo."
      },
      {
        "id": "D",
        "text": "Criar uma imagem Docker a partir do Dockerfile e fazer o upload para o Cloud Storage. Criar um arquivo YAML de Deployment para apontar para essa imagem. Usar o kubectl para criar a implantação com esse arquivo."
      }
    ],
    "correct_answer": "C",
    "official_rationale": "O Kubernetes não executa Dockerfiles diretamente; é necessário construir a imagem de contêiner, armazená-la em um registro de imagens (Container Registry / Artifact Registry) e aplicar um manifesto de Deployment via kubectl.",
    "explanation_why_correct": "Para implantar no GKE, você deve primeiro **construir a imagem Docker a partir do Dockerfile**, enviá-la para o **Container Registry (ou Artifact Registry)** e então usar o `kubectl` com um manifesto YAML de **Deployment** que referencie a imagem no registro.",
    "explanation_why_incorrect": "`kubectl app deploy` (A) não existe, e `gcloud app deploy` (B) é usado para o App Engine, não GKE. O Kubernetes puxa imagens de um registro compatível com OCI/Docker, e não diretamente como objetos de um bucket genérico do Cloud Storage (D).",
    "additional_reading": [
      {
        "title": "Implantar um aplicativo em contêiner no GKE",
        "url": "https://cloud.google.com/kubernetes-engine/docs/how-to/deploying-workloads-overview"
      }
    ]
  },
  {
    "id": 13,
    "type": "single",
    "category": "Implantar e implementar uma solução de nuvem (25%)",
    "category_en": "Implantar e implementar uma solução de nuvem (25%)",
    "objective": "3.5 Implantar uma solução usando o Cloud Marketplace",
    "what_it_tests": "O Cloud Marketplace (GCP Marketplace) oferece pacotes prontos para produção (como o Jenkins) que são implantados em poucos cliques com o menor número de etapas.",
    "question": "Sua equipe de desenvolvimento precisa de um novo servidor Jenkins para o projeto deles. Você precisa implantar o servidor usando o menor número possível de etapas. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Baixar e implantar o arquivo Java WAR do Jenkins no App Engine Standard."
      },
      {
        "id": "B",
        "text": "Criar uma nova instância do Compute Engine e instalar o Jenkins por meio da interface de linha de comando."
      },
      {
        "id": "C",
        "text": "Criar um cluster do Kubernetes no Compute Engine e criar um deployment com a imagem Docker do Jenkins."
      },
      {
        "id": "D",
        "text": "Usar o GCP Marketplace para iniciar a solução Jenkins."
      }
    ],
    "correct_answer": "D",
    "official_rationale": "O Cloud Marketplace (GCP Marketplace) oferece pacotes prontos para produção (como o Jenkins) que são implantados em poucos cliques com o menor número de etapas.",
    "explanation_why_correct": "Usar o **GCP Marketplace (Cloud Marketplace)** é a maneira mais rápida e com o menor número de etapas para implantar soluções de terceiros pré-configuradas, como o **Jenkins**, sem precisar configurar servidores ou clusters manualmente.",
    "explanation_why_incorrect": "Implantar manualmente no Compute Engine (B) ou criar e configurar um cluster Kubernetes (C) exige várias etapas manuais. O App Engine Standard (A) não é adequado para executar o servidor Jenkins tradicional com estado persistente em disco local.",
    "additional_reading": [
      {
        "title": "Visão geral do Cloud Marketplace",
        "url": "https://cloud.google.com/marketplace/docs"
      }
    ]
  },
  {
    "id": 14,
    "type": "single",
    "category": "Implantar e implementar uma solução de nuvem (25%)",
    "category_en": "Implantar e implementar uma solução de nuvem (25%)",
    "objective": "3.6 Atualizar implantações no Cloud Deployment Manager",
    "what_it_tests": "O comando 'gcloud deployment-manager deployments update --config <caminho>' aplica alterações a uma implantação existente de forma incremental.",
    "question": "Você precisa atualizar uma implantação no Deployment Manager sem qualquer tempo de inatividade (downtime) dos recursos na implantação. Qual comando você deve usar?",
    "options": [
      {
        "id": "A",
        "text": "gcloud deployment-manager deployments create --config <deployment-config-path>"
      },
      {
        "id": "B",
        "text": "gcloud deployment-manager deployments update --config <deployment-config-path>"
      },
      {
        "id": "C",
        "text": "gcloud deployment-manager resources create --config <deployment-config-path>"
      },
      {
        "id": "D",
        "text": "gcloud deployment-manager resources update --config <deployment-config-path>"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "O comando 'gcloud deployment-manager deployments update --config <caminho>' aplica alterações a uma implantação existente de forma incremental.",
    "explanation_why_correct": "O comando **`gcloud deployment-manager deployments update --config <deployment-config-path>`** atualiza uma implantação existente comparando o estado atual com a nova configuração sem recriar recursos desnecessariamente.",
    "explanation_why_incorrect": "`deployments create` (A) serve apenas para criar novas implantações. O grupo de subcomandos `resources` (C e D) possui apenas ações de leitura (`describe`, `list`), não possuindo `create` ou `update`.",
    "additional_reading": [
      {
        "title": "Atualizar uma implantação no Deployment Manager",
        "url": "https://cloud.google.com/sdk/gcloud/reference/deployment-manager/deployments/update"
      }
    ]
  },
  {
    "id": 15,
    "type": "single",
    "category": "Planejar e configurar uma solução de nuvem (17.5%)",
    "category_en": "Planejar e configurar uma solução de nuvem (17.5%)",
    "objective": "2.1 Estimar custos de consultas no BigQuery usando a Calculadora de Preços",
    "what_it_tests": "No modelo on-demand do BigQuery, a cobrança é baseada no volume de bytes lidos (processados), que pode ser estimado gratuitamente usando a flag --dry_run antes de converter o valor na Calculadora de Preços.",
    "question": "Você precisa executar uma consulta importante no BigQuery, mas espera que ela retorne muitos registros. Você quer descobrir quanto custará executar a consulta. Você está usando o modelo de preços sob demanda (on-demand). O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Providenciar a mudança para o preço de taxa fixa (Flat-Rate) para esta consulta e, em seguida, voltar para o modelo sob demanda."
      },
      {
        "id": "B",
        "text": "Usar a linha de comando para executar uma consulta de simulação (dry run) para estimar o número de bytes lidos. Em seguida, converter essa estimativa de bytes em dólares usando a Calculadora de Preços."
      },
      {
        "id": "C",
        "text": "Usar a linha de comando para executar uma consulta de simulação (dry run) para estimar o número de bytes retornados. Em seguida, converter essa estimativa de bytes em dólares usando a Calculadora de Preços."
      },
      {
        "id": "D",
        "text": "Executar um select count(*) para ter uma ideia de quantos registros sua consulta analisará. Em seguida, converter esse número de linhas em dólares usando a Calculadora de Preços."
      }
    ],
    "correct_answer": "B",
    "official_rationale": "No modelo on-demand do BigQuery, a cobrança é baseada no volume de bytes lidos (processados), que pode ser estimado gratuitamente usando a flag --dry_run antes de converter o valor na Calculadora de Preços.",
    "explanation_why_correct": "No modelo sob demanda do BigQuery, as consultas são cobradas com base nos **bytes lidos/processados**. Executar um **dry run** (`bq query --dry_run`) informa exatamente quantos bytes serão lidos sem executar nem cobrar pela consulta, permitindo calcular o custo na **Calculadora de Preços**.",
    "explanation_why_incorrect": "O BigQuery cobra por bytes lidos nas colunas consultadas, e não por bytes retornados (C) nem pelo número de linhas de um `COUNT(*)` (D). Mudar para Flat-Rate para uma única consulta (A) é impraticável e desnecessário.",
    "additional_reading": [
      {
        "title": "Estimar custos de armazenamento e consultas no BigQuery",
        "url": "https://cloud.google.com/bigquery/docs/estimate-costs"
      }
    ]
  },
  {
    "id": 16,
    "type": "single",
    "category": "Implantar e implementar uma solução de nuvem (25%)",
    "category_en": "Implantar e implementar uma solução de nuvem (25%)",
    "objective": "3.1 Implantar e escalonar grupos gerenciados de instâncias (MIGs)",
    "what_it_tests": "Para escalonar VMs do Compute Engine automaticamente com base no uso de CPU de forma nativa e eficiente, usa-se um Instance Template vinculado a um Managed Instance Group (MIG) com autoscaling ativado.",
    "question": "Você tem um aplicativo de binário único que deseja executar no Google Cloud Platform. Você decidiu escalonar automaticamente o aplicativo com base no uso de CPU da infraestrutura subjacente. Suas políticas organizacionais exigem que você use máquinas virtuais diretamente. Você precisa garantir que o escalonamento do aplicativo seja operacionalmente eficiente e concluído o mais rápido possível. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Criar um cluster do Google Kubernetes Engine e usar o escalonamento automático horizontal de pods (HPA) para escalonar o aplicativo."
      },
      {
        "id": "B",
        "text": "Criar um modelo de instância (instance template) e usar o modelo em um grupo gerenciado de instâncias (MIG) com o escalonamento automático configurado."
      },
      {
        "id": "C",
        "text": "Criar um modelo de instância (instance template) e usar o modelo em um grupo gerenciado de instâncias (MIG) que escalona para cima e para baixo com base no horário do dia."
      },
      {
        "id": "D",
        "text": "Usar um conjunto de ferramentas de terceiros para construir automação em torno do escalonamento do aplicativo para cima e para baixo, com base no monitoramento de uso de CPU do Stackdriver."
      }
    ],
    "correct_answer": "B",
    "official_rationale": "Para escalonar VMs do Compute Engine automaticamente com base no uso de CPU de forma nativa e eficiente, usa-se um Instance Template vinculado a um Managed Instance Group (MIG) com autoscaling ativado.",
    "explanation_why_correct": "Criar um **modelo de instância (instance template)** e vinculá-lo a um **grupo gerenciado de instâncias (MIG)** com **autoscaling baseado em utilização de CPU** atende à exigência de usar VMs diretamente com máxima eficiência operacional.",
    "explanation_why_incorrect": "O GKE (A) usa contêineres em vez de gerenciar o aplicativo diretamente em VMs conforme exigido pela política. Escalonar por horário do dia (C) não reage dinamicamente ao uso real de CPU, e usar ferramentas de terceiros (D) gera sobrecarga operacional desnecessária.",
    "additional_reading": [
      {
        "title": "Escalonamento automático de grupos de instâncias",
        "url": "https://cloud.google.com/compute/docs/autoscaler"
      }
    ]
  },
  {
    "id": 17,
    "type": "single",
    "category": "Configurar um ambiente de solução em nuvem (17.5%)",
    "category_en": "Configurar um ambiente de solução em nuvem (17.5%)",
    "objective": "1.1 Configurar exportação de dados de faturamento para o BigQuery",
    "what_it_tests": "A exportação nativa do Cloud Billing para o BigQuery permite analisar custos detalhados de múltiplos projetos usando consultas SQL padrão.",
    "question": "Você está analisando os custos de serviços do Google Cloud Platform de três projetos separados. Você deseja usar essas informações para criar estimativas de custo de serviço por tipo de serviço, diária e mensalmente, para os próximos seis meses usando sintaxe de consulta padrão. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Exportar sua fatura para um bucket do Cloud Storage e, em seguida, importar para o Cloud Bigtable para análise."
      },
      {
        "id": "B",
        "text": "Exportar sua fatura para um bucket do Cloud Storage e, em seguida, importar para o Google Sheets para análise."
      },
      {
        "id": "C",
        "text": "Exportar suas transações para um arquivo local e realizar a análise com uma ferramenta de desktop."
      },
      {
        "id": "D",
        "text": "Exportar sua fatura para um conjunto de dados (dataset) do BigQuery e, em seguida, escrever consultas SQL baseadas em janelas de tempo para análise."
      }
    ],
    "correct_answer": "D",
    "official_rationale": "A exportação nativa do Cloud Billing para o BigQuery permite analisar custos detalhados de múltiplos projetos usando consultas SQL padrão.",
    "explanation_why_correct": "Exportar os dados do Cloud Billing diretamente para um **conjunto de dados do BigQuery** permite realizar análises detalhadas e projeções por tipo de serviço e janelas de tempo utilizando **sintaxe SQL padrão**.",
    "explanation_why_incorrect": "Bigtable (A), Google Sheets (B) e ferramentas locais (C) não são o destino nativo recomendado para consultas analíticas SQL sobre faturamento em larga escala no Google Cloud.",
    "additional_reading": [
      {
        "title": "Exportar dados do Cloud Billing para o BigQuery",
        "url": "https://cloud.google.com/billing/docs/how-to/export-data-bigquery"
      }
    ]
  },
  {
    "id": 18,
    "type": "single",
    "category": "Garantir a operação bem-sucedida de uma solução de nuvem (20%)",
    "category_en": "Garantir a operação bem-sucedida de uma solução de nuvem (20%)",
    "objective": "4.2 Gerenciar recursos do Cloud Storage e ciclo de vida de objetos",
    "what_it_tests": "No Object Lifecycle Management do Cloud Storage, a condição Age é sempre medida em dias desde a criação original do objeto, e não desde a mudança de classe de armazenamento.",
    "question": "Você precisa configurar uma política para que os vídeos armazenados em um bucket Regional específico do Cloud Storage sejam movidos para a classe Coldline após 90 dias e, em seguida, excluídos após um ano a partir de sua criação. Como você deve configurar a política?",
    "options": [
      {
        "id": "A",
        "text": "Usar o Gerenciamento do Ciclo de Vida de Objetos (Object Lifecycle Management) do Cloud Storage usando condições de Idade (Age) com ações SetStorageClass e Delete. Definir a ação SetStorageClass para 90 dias e a ação Delete para 275 dias (365 – 90)."
      },
      {
        "id": "B",
        "text": "Usar o Gerenciamento do Ciclo de Vida de Objetos (Object Lifecycle Management) do Cloud Storage usando condições de Idade (Age) com ações SetStorageClass e Delete. Definir a ação SetStorageClass para 90 dias e a ação Delete para 365 dias."
      },
      {
        "id": "C",
        "text": "Usar gsutil rewrite e definir a ação Delete para 275 dias (365 - 90)."
      },
      {
        "id": "D",
        "text": "Usar gsutil rewrite e definir a ação Delete para 365 dias."
      }
    ],
    "correct_answer": "B",
    "official_rationale": "No Object Lifecycle Management do Cloud Storage, a condição Age é sempre medida em dias desde a criação original do objeto, e não desde a mudança de classe de armazenamento.",
    "explanation_why_correct": "No **Object Lifecycle Management**, a condição `Age` (Idade) é sempre contada a partir do **momento de criação do objeto**. Portanto, define-se `SetStorageClass` (para Coldline) com `Age: 90` dias e `Delete` com `Age: 365` dias.",
    "explanation_why_incorrect": "Definir `275` dias (A) excluiria o objeto após 275 dias da sua criação (e não 365). O comando `gsutil rewrite` (C e D) é um comando imperativo pontual e não uma política automática de ciclo de vida.",
    "additional_reading": [
      {
        "title": "Gerenciamento do ciclo de vida de objetos do Cloud Storage",
        "url": "https://cloud.google.com/storage/docs/lifecycle"
      }
    ]
  },
  {
    "id": 19,
    "type": "single",
    "category": "Configurar acesso e segurança (20%)",
    "category_en": "Configurar acesso e segurança (20%)",
    "objective": "5.2 Gerenciar contas de serviço em instâncias do Compute Engine",
    "what_it_tests": "A maneira recomendada e segura de anexar uma conta de serviço personalizada a uma VM do Compute Engine é selecioná-la na seção 'Identidade e acesso à API' durante a criação (ou edição com a VM parada), sem exportar chaves JSON.",
    "question": "Você tem uma VM Linux que deve se conectar ao Cloud SQL. Você criou uma conta de serviço (service account) com os direitos de acesso apropriados. Você quer ter certeza de que a VM use essa conta de serviço em vez da conta de serviço padrão do Compute Engine. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Ao criar a VM pelo console web, especificar a conta de serviço na seção ‘Identidade e acesso à API’ (Identity and API Access)."
      },
      {
        "id": "B",
        "text": "Baixar uma chave privada JSON para a conta de serviço. Nos Metadados do Projeto, adicionar esse JSON como o valor para a chave compute-engine-service-account."
      },
      {
        "id": "C",
        "text": "Baixar uma chave privada JSON para a conta de serviço. Nos Metadados Personalizados da VM, adicionar esse JSON como o valor para a chave compute-engine-service-account."
      },
      {
        "id": "D",
        "text": "Baixar uma chave privada JSON para a conta de serviço. Após criar a VM, conectar via SSH na VM e salvar o JSON em ~/.gcloud/compute-engine-service-account.json."
      }
    ],
    "correct_answer": "A",
    "official_rationale": "A maneira recomendada e segura de anexar uma conta de serviço personalizada a uma VM do Compute Engine é selecioná-la na seção 'Identidade e acesso à API' durante a criação (ou edição com a VM parada), sem exportar chaves JSON.",
    "explanation_why_correct": "Ao criar a VM no Console (ou via CLI), você deve selecionar a **conta de serviço personalizada na seção ‘Identity and API Access’ (Identidade e acesso à API)**. Assim, o servidor de metadados fornece tokens de curta duração automaticamente sem precisar gerenciar chaves privadas JSON.",
    "explanation_why_incorrect": "Baixar e armazenar chaves privadas JSON em metadados ou no disco da VM (B, C e D) é inseguro e desnecessário para recursos executados no próprio Compute Engine.",
    "additional_reading": [
      {
        "title": "Criar e habilitar contas de serviço para instâncias",
        "url": "https://cloud.google.com/compute/docs/access/create-enable-service-accounts-for-instances"
      }
    ]
  },
  {
    "id": 20,
    "type": "single",
    "category": "Implantar e implementar uma solução de nuvem (25%)",
    "category_en": "Implantar e implementar uma solução de nuvem (25%)",
    "objective": "3.1 Conectar-se a instâncias Windows no Compute Engine",
    "what_it_tests": "Para acessar uma VM Windows no Compute Engine via RDP, é necessário gerar um usuário e senha do Windows no Console, garantir que a porta TCP 3389 esteja liberada no firewall e conectar via RDP.",
    "question": "Você criou uma instância do SQL Server 2017 no Compute Engine para testar recursos na nova versão. Você deseja se conectar a essa instância usando o menor número de etapas. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Instalar um cliente RDP na sua área de trabalho. Verificar se existe uma regra de firewall para a porta 3389."
      },
      {
        "id": "B",
        "text": "Instalar um cliente RDP na sua área de trabalho. Definir um nome de usuário e senha do Windows no Console do GCP. Usar as credenciais para fazer login na instância."
      },
      {
        "id": "C",
        "text": "Definir uma senha do Windows no Console do GCP. Verificar se existe uma regra de firewall para a porta 22. Clicar no botão RDP no Console do GCP e fornecer as credenciais para fazer login."
      },
      {
        "id": "D",
        "text": "Definir um nome de usuário e senha do Windows no Console do GCP. Verificar se existe uma regra de firewall para a porta 3389. Clicar no botão RDP no Console do GCP e fornecer as credenciais para fazer login."
      }
    ],
    "correct_answer": "D",
    "official_rationale": "Para acessar uma VM Windows no Compute Engine via RDP, é necessário gerar um usuário e senha do Windows no Console, garantir que a porta TCP 3389 esteja liberada no firewall e conectar via RDP.",
    "explanation_why_correct": "Para se conectar a uma VM Windows Server, você deve **definir um nome de usuário e senha do Windows no Console do GCP**, **verificar se há uma regra de firewall permitindo tráfego na porta TCP 3389 (RDP)** e iniciar a conexão clicando no botão **RDP** fornecendo as credenciais.",
    "explanation_why_incorrect": "A opção A não gera as credenciais do Windows necessárias para autenticação. A opção B não verifica se a porta 3389 está aberta no firewall. A opção C verifica a porta 22 (SSH), que é usada para Linux, e não a porta 3389 (RDP).",
    "additional_reading": [
      {
        "title": "Conectar-se a VMs do Windows usando RDP",
        "url": "https://cloud.google.com/compute/docs/instances/connecting-to-windows"
      }
    ]
  },
  {
    "id": 21,
    "type": "single",
    "category": "Configurar um ambiente de solução em nuvem (17.5%)",
    "category_en": "Configurar um ambiente de solução em nuvem (17.5%)",
    "objective": "1.2 Gerenciar múltiplas contas e regiões com configurações do gcloud",
    "what_it_tests": "Para alternar facilmente entre múltiplas contas, projetos, regiões e zonas no Cloud SDK, criam-se configurações com 'gcloud config configurations create' e alterna-se entre elas com 'gcloud config configurations activate'.",
    "question": "Você tem uma conta do GCP executando na sua região e zona padrão e outra conta executando em uma região e zona não padrão. Você deseja iniciar uma nova instância do Compute Engine nessas duas contas do Google Cloud Platform usando a interface de linha de comando. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Criar duas configurações usando gcloud config configurations create [NAME]. Executar gcloud config configurations activate [NAME] para alternar entre as contas ao executar os comandos para iniciar as instâncias do Compute Engine."
      },
      {
        "id": "B",
        "text": "Criar duas configurações usando gcloud config configurations create [NAME]. Executar gcloud configurations list para iniciar as instâncias do Compute Engine."
      },
      {
        "id": "C",
        "text": "Ativar duas configurações usando gcloud configurations activate [NAME]. Executar gcloud config list para iniciar as instâncias do Compute Engine."
      },
      {
        "id": "D",
        "text": "Ativar duas configurações usando gcloud configurations activate [NAME]. Executar gcloud configurations list para iniciar as instâncias do Compute Engine."
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Para alternar facilmente entre múltiplas contas, projetos, regiões e zonas no Cloud SDK, criam-se configurações com 'gcloud config configurations create' e alterna-se entre elas com 'gcloud config configurations activate'.",
    "explanation_why_correct": "Usar **`gcloud config configurations create [NAME]`** para criar perfis separados para cada conta/região/zona e **`gcloud config configurations activate [NAME]`** para alternar entre eles antes de criar as instâncias é a prática padrão do Cloud SDK.",
    "explanation_why_incorrect": "Os comandos `gcloud configurations list` e `gcloud configurations activate` (sem `config`) têm sintaxe inválida, e `list` apenas lista configurações, não iniciando instâncias (B, C e D).",
    "additional_reading": [
      {
        "title": "Gerenciar configurações da CLI gcloud",
        "url": "https://cloud.google.com/sdk/docs/configurations"
      }
    ]
  },
  {
    "id": 22,
    "type": "single",
    "category": "Implantar e implementar uma solução de nuvem (25%)",
    "category_en": "Implantar e implementar uma solução de nuvem (25%)",
    "objective": "3.6 Pré-visualizar modelos do Cloud Deployment Manager",
    "what_it_tests": "A flag --preview do Deployment Manager valida a configuração, expande os templates e mostra quais recursos seriam criados ou modificados sem instanciar os recursos reais.",
    "question": "Você alterou significativamente um modelo complexo do Deployment Manager e deseja confirmar se as dependências de todos os recursos definidos são devidamente atendidas antes de aplicá-lo definitivamente ao projeto. Você deseja obter o feedback mais rápido sobre suas alterações. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Usar instruções de log granulares dentro de um modelo do Deployment Manager escrito em Python."
      },
      {
        "id": "B",
        "text": "Monitorar a atividade da execução do Deployment Manager na página do Stackdriver Logging no Console do GCP."
      },
      {
        "id": "C",
        "text": "Executar o modelo do Deployment Manager em um projeto separado com a mesma configuração e monitorar falhas."
      },
      {
        "id": "D",
        "text": "Executar o modelo do Deployment Manager usando a opção --preview no mesmo projeto e observar o estado dos recursos interdependentes."
      }
    ],
    "correct_answer": "D",
    "official_rationale": "A flag --preview do Deployment Manager valida a configuração, expande os templates e mostra quais recursos seriam criados ou modificados sem instanciar os recursos reais.",
    "explanation_why_correct": "Executar o Deployment Manager com a flag **`--preview`** no mesmo projeto valida imediatamente o template e a árvore de dependências dos recursos sem provisioná-los de fato, fornecendo o feedback mais rápido e seguro.",
    "explanation_why_incorrect": "Adicionar logs em Python (A) ou olhar o Cloud Logging após a falha (B) não evita que alterações incorretas sejam aplicadas ao projeto. Executar em outro projeto (C) leva muito mais tempo do que usar `--preview`.",
    "additional_reading": [
      {
        "title": "Visualizar uma implantação antes de confirmar (Preview)",
        "url": "https://cloud.google.com/deployment-manager/docs/deployments/updating-deployments#previewing_an_update"
      }
    ]
  },
  {
    "id": 23,
    "type": "single",
    "category": "Planejar e configurar uma solução de nuvem (17.5%)",
    "category_en": "Planejar e configurar uma solução de nuvem (17.5%)",
    "objective": "2.3 Planejar pipelines de dados de séries temporais e analíticos no Google Cloud",
    "what_it_tests": "A arquitetura de referência do Google Cloud para séries temporais utiliza Cloud Pub/Sub (ingestão), Cloud Dataflow (processamento de stream), Cloud Bigtable (armazenamento de séries temporais de baixa latência) e BigQuery (data warehouse analítico).",
    "question": "Você está construindo um pipeline para processar dados de séries temporais (Fluxo: Dispositivos -> [1: Ingestão de mensagens] -> [2: Processamento de stream] -> [3: Armazenamento NoSQL de séries temporais] e [4: Data Warehouse analítico]). Quais serviços do Google Cloud Platform você deve colocar nas caixas 1, 2, 3 e 4?",
    "options": [
      {
        "id": "A",
        "text": "Cloud Pub/Sub, Cloud Dataflow, Cloud Datastore, BigQuery"
      },
      {
        "id": "B",
        "text": "Firebase Messages, Cloud Pub/Sub, Cloud Spanner, BigQuery"
      },
      {
        "id": "C",
        "text": "Cloud Pub/Sub, Cloud Storage, BigQuery, Cloud Bigtable"
      },
      {
        "id": "D",
        "text": "Cloud Pub/Sub, Cloud Dataflow, Cloud Bigtable, BigQuery"
      }
    ],
    "correct_answer": "D",
    "official_rationale": "A arquitetura de referência do Google Cloud para séries temporais utiliza Cloud Pub/Sub (ingestão), Cloud Dataflow (processamento de stream), Cloud Bigtable (armazenamento de séries temporais de baixa latência) e BigQuery (data warehouse analítico).",
    "explanation_why_correct": "A arquitetura padrão de processamento de dados de séries temporais no Google Cloud utiliza: **1. Cloud Pub/Sub** (ingestão global de eventos em tempo real), **2. Cloud Dataflow** (processamento e enriquecimento de stream), **3. Cloud Bigtable** (banco NoSQL wide-column de alta vazão ideal para séries temporais) e **4. BigQuery** (análise SQL e data warehouse).",
    "explanation_why_incorrect": "O Cloud Datastore (A) e o Cloud Spanner (B) não são otimizados para ingestão massiva de séries temporais como o Cloud Bigtable. Na opção C, o Cloud Storage não é um motor de processamento de stream (caixa 2).",
    "additional_reading": [
      {
        "title": "Arquitetura de processamento de fluxos e séries temporais no Google Cloud",
        "url": "https://cloud.google.com/architecture/time-series-analytics"
      }
    ]
  },
  {
    "id": 24,
    "type": "single",
    "category": "Implantar e implementar uma solução de nuvem (25%)",
    "category_en": "Implantar e implementar uma solução de nuvem (25%)",
    "objective": "3.3 Implantar aplicativos do App Engine em múltiplos ambientes (projetos)",
    "what_it_tests": "Para criar um ambiente de produção isolado para o App Engine, cria-se um novo projeto (`gcloud projects create`) e executa-se `gcloud app deploy` apontando para o novo projeto.",
    "question": "Você tem um projeto para o seu aplicativo do App Engine que atende a um ambiente de desenvolvimento. Os testes necessários foram bem-sucedidos e você deseja criar um novo projeto para servir como seu ambiente de produção. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Usar o gcloud para criar o novo projeto e, em seguida, implantar seu aplicativo no novo projeto."
      },
      {
        "id": "B",
        "text": "Usar o gcloud para criar o novo projeto e copiar o aplicativo implantado para o novo projeto."
      },
      {
        "id": "C",
        "text": "Criar um arquivo de configuração do Deployment Manager que copie a implantação atual do App Engine para um novo projeto."
      },
      {
        "id": "D",
        "text": "Implantar seu aplicativo novamente usando o gcloud e especificar o parâmetro project com o nome do novo projeto para criar o novo projeto."
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Para criar um ambiente de produção isolado para o App Engine, cria-se um novo projeto (`gcloud projects create`) e executa-se `gcloud app deploy` apontando para o novo projeto.",
    "explanation_why_correct": "A prática recomendada é **criar o novo projeto usando `gcloud projects create`** e, em seguida, **implantar o código do aplicativo no novo projeto** usando `gcloud app deploy --project=<NOVO_PROJETO>`.",
    "explanation_why_incorrect": "Não existe comando no `gcloud` (B) nem recurso no Deployment Manager (C) para 'copiar' diretamente um aplicativo já implantado do App Engine entre projetos, e a flag `--project` no `gcloud app deploy` (D) exige que o projeto já exista previamente.",
    "additional_reading": [
      {
        "title": "Gerenciar projetos e implantar no App Engine",
        "url": "https://cloud.google.com/appengine/docs/standard/testing-and-deploying-your-app"
      }
    ]
  },
  {
    "id": 25,
    "type": "single",
    "category": "Configurar acesso e segurança (20%)",
    "category_en": "Configurar acesso e segurança (20%)",
    "objective": "5.1 Conceder papéis do IAM seguindo as práticas recomendadas do Google",
    "what_it_tests": "As práticas recomendadas do Google para o IAM determinam o uso de grupos do Google em vez de usuários individuais e a preferência por papéis predefinidos quando eles já atendem ao princípio do menor privilégio.",
    "question": "Você precisa configurar o acesso de auditoria de logs do IAM e visualização de dados no BigQuery para auditores externos. Você deseja seguir as práticas recomendadas pelo Google. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Adicionar o grupo de auditores aos papéis predefinidos do IAM ‘logging.viewer’ e ‘bigQuery.dataViewer’."
      },
      {
        "id": "B",
        "text": "Adicionar o grupo de auditores a dois novos papéis personalizados do IAM."
      },
      {
        "id": "C",
        "text": "Adicionar as contas de usuário dos auditores aos papéis predefinidos do IAM ‘logging.viewer’ e ‘bigQuery.dataViewer’."
      },
      {
        "id": "D",
        "text": "Adicionar as contas de usuário dos auditores a dois novos papéis personalizados do IAM."
      }
    ],
    "correct_answer": "A",
    "official_rationale": "As práticas recomendadas do Google para o IAM determinam o uso de grupos do Google em vez de usuários individuais e a preferência por papéis predefinidos quando eles já atendem ao princípio do menor privilégio.",
    "explanation_why_correct": "As boas práticas do Google Cloud IAM recomendam **atribuir permissões a Grupos do Google** (em vez de usuários individuais) e **usar papéis predefinidos** (`roles/logging.viewer` e `roles/bigquery.dataViewer`) sempre que atenderem exatamente à necessidade.",
    "explanation_why_incorrect": "Criar papéis personalizados (B e D) só é recomendado quando nenhum papel predefinido atende aos requisitos. Atribuir papéis diretamente a contas de usuário individuais (C e D) dificulta a governança e a manutenção do acesso.",
    "additional_reading": [
      {
        "title": "Práticas recomendadas para usar o Cloud IAM",
        "url": "https://cloud.google.com/iam/docs/using-iam-securely"
      }
    ]
  },
  {
    "id": 26,
    "type": "single",
    "category": "Configurar acesso e segurança (20%)",
    "category_en": "Configurar acesso e segurança (20%)",
    "objective": "5.2 Conceder permissões mínimas a contas de serviço para o Cloud Storage",
    "what_it_tests": "Seguindo o princípio do menor privilégio e as boas práticas do Google, controla-se o acesso de contas de serviço usando papéis do IAM no nível do recurso (bucket), sendo 'roles/storage.objectCreator' o papel mínimo para apenas gravar objetos.",
    "question": "Você precisa configurar permissões para um conjunto de instâncias do Compute Engine a fim de permitir que elas gravem dados em um determinado bucket do Cloud Storage. Você deseja seguir as práticas recomendadas pelo Google. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Criar uma conta de serviço com um escopo de acesso. Usar o escopo de acesso 'https://www.googleapis.com/auth/devstorage.write_only'."
      },
      {
        "id": "B",
        "text": "Criar uma conta de serviço com um escopo de acesso. Usar o escopo de acesso 'https://www.googleapis.com/auth/cloud-platform'."
      },
      {
        "id": "C",
        "text": "Criar uma conta de serviço e adicioná-la ao papel do IAM ‘storage.objectCreator’ para aquele bucket."
      },
      {
        "id": "D",
        "text": "Criar uma conta de serviço e adicioná-la ao papel do IAM ‘storage.objectAdmin’ para aquele bucket."
      }
    ],
    "correct_answer": "C",
    "official_rationale": "Seguindo o princípio do menor privilégio e as boas práticas do Google, controla-se o acesso de contas de serviço usando papéis do IAM no nível do recurso (bucket), sendo 'roles/storage.objectCreator' o papel mínimo para apenas gravar objetos.",
    "explanation_why_correct": "O Google recomenda controlar permissões por meio de **papéis do IAM** (e não escopos de acesso legados) aplicando o **menor privilégio**. Conceder `roles/storage.objectCreator` apenas naquele **bucket específico** permite que a conta de serviço crie objetos sem poder excluir ou sobrescrever outros arquivos.",
    "explanation_why_incorrect": "Escopos de acesso (A e B) são um mecanismo legado e atuam no nível de todo o projeto, não de um bucket específico. O papel `storage.objectAdmin` (D) concede permissões extras desnecessárias (leitura e exclusão de objetos).",
    "additional_reading": [
      {
        "title": "Papéis do IAM para o Cloud Storage",
        "url": "https://cloud.google.com/storage/docs/access-control/iam-roles"
      }
    ]
  },
  {
    "id": 27,
    "type": "single",
    "category": "Garantir a operação bem-sucedida de uma solução de nuvem (20%)",
    "category_en": "Garantir a operação bem-sucedida de uma solução de nuvem (20%)",
    "objective": "4.3 Consultar logs de Acesso a Dados (Data Access logs) no Cloud Logging",
    "what_it_tests": "Os logs de auditoria de Acesso a Dados (como leitura de objetos no Cloud Storage) não aparecem na aba simplificada Activity do Console; eles devem ser consultados e filtrados no visualizador de logs do Stackdriver (Cloud Logging).",
    "question": "Você tem dados confidenciais armazenados em três buckets do Cloud Storage e habilitou o registro de logs de acesso a dados (data access logging). Você deseja verificar as atividades de um determinado usuário nesses buckets, usando o menor número possível de etapas. Você precisa verificar a adição de rótulos de metadados e quais arquivos foram visualizados nesses buckets. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Usando o Console do GCP, filtrar o log de Atividades (Activity log) para visualizar as informações."
      },
      {
        "id": "B",
        "text": "Usando o Console do GCP, filtrar o log do Stackdriver (Cloud Logging) para visualizar as informações."
      },
      {
        "id": "C",
        "text": "Visualizar o bucket na seção Storage do Console do GCP."
      },
      {
        "id": "D",
        "text": "Criar um trace no Stackdriver para visualizar as informações."
      }
    ],
    "correct_answer": "B",
    "official_rationale": "Os logs de auditoria de Acesso a Dados (como leitura de objetos no Cloud Storage) não aparecem na aba simplificada Activity do Console; eles devem ser consultados e filtrados no visualizador de logs do Stackdriver (Cloud Logging).",
    "explanation_why_correct": "Para verificar tanto alterações de metadados quanto leituras de objetos (`DATA_READ` nos **Data Access audit logs**), você deve usar o **Stackdriver Logging (Cloud Logging)** no Console do GCP e filtrar pelo usuário e pelos buckets desejados.",
    "explanation_why_incorrect": "A página de Atividades (Activity) do Console (A) exibe principalmente eventos administrativos, omitindo logs detalhados de leitura de dados (`DATA_READ`). A seção Storage (C) não mostra histórico de quem leu cada arquivo, e o Cloud Trace (D) analisa latência de requisições de aplicativos.",
    "additional_reading": [
      {
        "title": "Logs de auditoria do Cloud para o Cloud Storage",
        "url": "https://cloud.google.com/storage/docs/audit-logging"
      }
    ]
  },
  {
    "id": 28,
    "type": "single",
    "category": "Configurar acesso e segurança (20%)",
    "category_en": "Configurar acesso e segurança (20%)",
    "objective": "5.1 Delegar administração de buckets e objetos no Cloud Storage com IAM",
    "what_it_tests": "O papel predefinido Storage Admin (roles/storage.admin) concede controle total para criar, configurar e excluir tanto buckets quanto objetos no Cloud Storage, seguindo o princípio do menor privilégio.",
    "question": "Você é o proprietário (Project Owner) de um projeto do GCP e deseja delegar o controle a colegas para gerenciar buckets e arquivos no Cloud Storage. Você deseja seguir as práticas recomendadas pelo Google. Quais papéis do IAM você deve conceder aos seus colegas?",
    "options": [
      {
        "id": "A",
        "text": "Project Editor"
      },
      {
        "id": "B",
        "text": "Storage Admin"
      },
      {
        "id": "C",
        "text": "Storage Object Admin"
      },
      {
        "id": "D",
        "text": "Storage Object Creator"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "O papel predefinido Storage Admin (roles/storage.admin) concede controle total para criar, configurar e excluir tanto buckets quanto objetos no Cloud Storage, seguindo o princípio do menor privilégio.",
    "explanation_why_correct": "O papel **Storage Admin (`roles/storage.admin`)** concede as permissões exatas necessárias para gerenciar **tanto buckets quanto objetos (arquivos)** no Cloud Storage, sem dar acesso indevido a outros serviços do projeto.",
    "explanation_why_incorrect": "Project Editor (A) é um papel básico/primitivo muito amplo que dá acesso a quase todos os serviços do projeto. Storage Object Admin (C) e Storage Object Creator (D) aplicam-se apenas a objetos (arquivos) e não permitem criar ou gerenciar buckets.",
    "additional_reading": [
      {
        "title": "Papéis do IAM no Cloud Storage",
        "url": "https://cloud.google.com/storage/docs/access-control/iam-roles"
      }
    ]
  },
  {
    "id": 29,
    "type": "single",
    "category": "Configurar acesso e segurança (20%)",
    "category_en": "Configurar acesso e segurança (20%)",
    "objective": "5.3 Compartilhar objetos do Cloud Storage temporariamente com URLs assinadas (Signed URLs)",
    "what_it_tests": "As URLs assinadas (Signed URLs) do Cloud Storage fornecem acesso temporário e criptograficamente autenticado a um objeto específico por um tempo determinado (ex.: 4 horas), sem exigir que o destinatário tenha uma conta do Google.",
    "question": "Você tem um objeto em um bucket do Cloud Storage que deseja compartilhar com uma empresa externa. O objeto contém dados confidenciais. Você deseja que o acesso ao conteúdo seja removido após quatro horas. A empresa externa não possui uma conta do Google à qual você possa conceder privilégios de acesso específicos baseados no usuário. Você deseja usar o método mais seguro que exija o menor número de etapas. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Criar uma URL assinada (signed URL) com expiração de quatro horas e compartilhar a URL com a empresa."
      },
      {
        "id": "B",
        "text": "Definir o acesso ao objeto como ‘público’ e usar o gerenciamento do ciclo de vida de objetos para remover o objeto após quatro horas."
      },
      {
        "id": "C",
        "text": "Configurar o bucket de armazenamento como um site estático e fornecer a URL do objeto para a empresa. Excluir o objeto do bucket de armazenamento após quatro horas."
      },
      {
        "id": "D",
        "text": "Criar um novo bucket do Cloud Storage especificamente para a empresa externa acessar. Copiar o objeto para esse bucket. Excluir o bucket após quatro horas."
      }
    ],
    "correct_answer": "A",
    "official_rationale": "As URLs assinadas (Signed URLs) do Cloud Storage fornecem acesso temporário e criptograficamente autenticado a um objeto específico por um tempo determinado (ex.: 4 horas), sem exigir que o destinatário tenha uma conta do Google.",
    "explanation_why_correct": "Criar uma **URL assinada (Signed URL)** com tempo de expiração de **quatro horas** concede acesso temporário de leitura ao objeto para qualquer portador do link, sem tornar o arquivo público na internet e sem exigir conta do Google.",
    "explanation_why_incorrect": "Tornar o objeto público (B e C) expõe dados confidenciais a qualquer pessoa e a exclusão por ciclo de vida é assíncrona (pode levar mais de 24h). Criar e excluir buckets manualmente (D) não resolve a falta de conta Google sem tornar o dado público e exige várias etapas manuais.",
    "additional_reading": [
      {
        "title": "Visão geral das URLs assinadas (Signed URLs)",
        "url": "https://cloud.google.com/storage/docs/access-control/signed-urls"
      }
    ]
  },
  {
    "id": 30,
    "type": "single",
    "category": "Implantar e implementar uma solução de nuvem (25%)",
    "category_en": "Implantar e implementar uma solução de nuvem (25%)",
    "objective": "3.2 Implantar cargas de trabalho em cada nó do GKE usando DaemonSets",
    "what_it_tests": "No Kubernetes, um DaemonSet garante que todos os nós (incluindo novos nós adicionados pelo Cluster Autoscaler) executem automaticamente uma cópia de um pod específico.",
    "question": "Você está criando um cluster do Google Kubernetes Engine (GKE) com o recurso de escalonamento automático de cluster (cluster autoscaler) habilitado. Você precisa garantir que cada nó do cluster execute um pod de monitoramento que envie métricas de contêiner para uma solução de monitoramento de terceiros. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Implantar o pod de monitoramento em um objeto StatefulSet."
      },
      {
        "id": "B",
        "text": "Implantar o pod de monitoramento em um objeto DaemonSet."
      },
      {
        "id": "C",
        "text": "Referenciar o pod de monitoramento em um objeto Deployment."
      },
      {
        "id": "D",
        "text": "Referenciar o pod de monitoramento em um inicializador de cluster no momento da criação do cluster GKE."
      }
    ],
    "correct_answer": "B",
    "official_rationale": "No Kubernetes, um DaemonSet garante que todos os nós (incluindo novos nós adicionados pelo Cluster Autoscaler) executem automaticamente uma cópia de um pod específico.",
    "explanation_why_correct": "Um objeto **DaemonSet** do Kubernetes garante que exatamente uma réplica do pod de monitoramento seja agendada e executada em **cada nó do cluster**, inclusive nos novos nós provisionados automaticamente pelo Cluster Autoscaler.",
    "explanation_why_incorrect": "Um StatefulSet (A) é usado para aplicações com estado e identidade de rede fixa. Um Deployment (C) distribui réplicas pelo cluster sem garantir um pod por nó. Inicializadores de cluster (D) não mantêm pods agendados continuamente.",
    "additional_reading": [
      {
        "title": "Implantar DaemonSets no Google Kubernetes Engine",
        "url": "https://cloud.google.com/kubernetes-engine/docs/concepts/daemonset"
      }
    ]
  },
  {
    "id": 31,
    "type": "single",
    "category": "Configurar um ambiente de solução em nuvem (17.5%)",
    "category_en": "Configurar um ambiente de solução em nuvem (17.5%)",
    "objective": "1.1 Habilitar APIs de serviços no Google Cloud",
    "what_it_tests": "As APIs de serviços do Google Cloud que estão desabilitadas precisam ser explicitamente habilitadas no projeto (via Console na API Library ou via 'gcloud services enable') antes que um aplicativo possa consumi-las.",
    "question": "Você deseja enviar e consumir mensagens do Cloud Pub/Sub a partir do seu aplicativo no App Engine. A API do Cloud Pub/Sub está atualmente desabilitada. Você usará uma conta de serviço para autenticar seu aplicativo na API. Você quer garantir que seu aplicativo possa usar o Cloud Pub/Sub. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Habilitar a API do Cloud Pub/Sub na Biblioteca de APIs (API Library) no Console do GCP."
      },
      {
        "id": "B",
        "text": "Confiar na habilitação automática da API do Cloud Pub/Sub quando a Conta de Serviço acessá-la."
      },
      {
        "id": "C",
        "text": "Usar o Deployment Manager para implantar seu aplicativo. Confiar na habilitação automática de todas as APIs usadas pelo aplicativo que está sendo implantado."
      },
      {
        "id": "D",
        "text": "Conceder à conta de serviço padrão do App Engine o papel de Cloud Pub/Sub Admin. Fazer com que seu aplicativo habilite a API na primeira conexão com o Cloud Pub/Sub."
      }
    ],
    "correct_answer": "A",
    "official_rationale": "As APIs de serviços do Google Cloud que estão desabilitadas precisam ser explicitamente habilitadas no projeto (via Console na API Library ou via 'gcloud services enable') antes que um aplicativo possa consumi-las.",
    "explanation_why_correct": "Antes que qualquer aplicativo ou conta de serviço possa publicar ou consumir mensagens, você deve **habilitar explicitamente a API do Cloud Pub/Sub na Biblioteca de APIs (API Library)** do Console do GCP (ou via `gcloud services enable pubsub.googleapis.com`).",
    "explanation_why_incorrect": "As APIs não são habilitadas automaticamente quando uma conta de serviço tenta acessá-las (B) nem pelo Deployment Manager sem configuração explícita (C), e o aplicativo não deve ter permissões administrativas para habilitar APIs em tempo de execução (D).",
    "additional_reading": [
      {
        "title": "Habilitar e desabilitar APIs nos projetos do Google Cloud",
        "url": "https://cloud.google.com/apis/docs/getting-started#enabling_apis"
      }
    ]
  },
  {
    "id": 32,
    "type": "single",
    "category": "Garantir a operação bem-sucedida de uma solução de nuvem (20%)",
    "category_en": "Garantir a operação bem-sucedida de uma solução de nuvem (20%)",
    "objective": "4.3 Consolidar o monitoramento de múltiplos projetos no Cloud Monitoring",
    "what_it_tests": "Para monitorar vários projetos do GCP em um único painel, configura-se um único Workspace (escopo de métricas) do Stackdriver/Cloud Monitoring em um projeto host e vinculam-se os demais projetos a ele.",
    "question": "Você precisa monitorar recursos que estão distribuídos em diferentes projetos no Google Cloud Platform. Você deseja consolidar os relatórios sob o mesmo painel do Stackdriver Monitoring (Cloud Monitoring). O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Usar uma Shared VPC para conectar todos os projetos e vincular o Stackdriver a um dos projetos."
      },
      {
        "id": "B",
        "text": "Para cada projeto, criar uma conta do Stackdriver. Em cada projeto, criar uma conta de serviço para esse projeto e conceder a ela o papel de Stackdriver Account Editor em todos os outros projetos."
      },
      {
        "id": "C",
        "text": "Configurar uma única conta (Workspace/escopo de métricas) do Stackdriver e vincular todos os projetos à mesma conta."
      },
      {
        "id": "D",
        "text": "Configurar uma única conta do Stackdriver para um dos projetos. No Stackdriver, criar um Grupo e adicionar os nomes dos outros projetos como critérios para esse Grupo."
      }
    ],
    "correct_answer": "C",
    "official_rationale": "Para monitorar vários projetos do GCP em um único painel, configura-se um único Workspace (escopo de métricas) do Stackdriver/Cloud Monitoring em um projeto host e vinculam-se os demais projetos a ele.",
    "explanation_why_correct": "Para consolidar métricas e painéis de múltiplos projetos, você deve **configurar um único Workspace (conta/escopo de métricas) do Stackdriver Monitoring** e **vincular todos os projetos monitorados a essa mesma conta**.",
    "explanation_why_incorrect": "A Shared VPC (A) compartilha apenas conectividade de rede, não métricas de monitoramento. Criar contas separadas do Stackdriver para cada projeto (B) impede a visualização consolidada, e criar apenas um Grupo sem vincular os projetos ao Workspace (D) não coleta métricas de outros projetos.",
    "additional_reading": [
      {
        "title": "Configurar escopos de métricas para vários projetos no Cloud Monitoring",
        "url": "https://cloud.google.com/monitoring/settings"
      }
    ]
  },
  {
    "id": 33,
    "type": "single",
    "category": "Implantar e implementar uma solução de nuvem (25%)",
    "category_en": "Implantar e implementar uma solução de nuvem (25%)",
    "objective": "3.1 Garantir disponibilidade de instância única com Grupo Gerenciado de Instâncias (MIG)",
    "what_it_tests": "Manter um MIG com autoscaling ativado (ou tamanho alvo fixo de 1) com mínimo=1 e máximo=1 garante que o MIG mantenha sempre exatamente 1 instância em execução e a recrie caso ela falhe.",
    "question": "Você está implantando um aplicativo em uma VM do Compute Engine em um grupo gerenciado de instâncias (MIG). O aplicativo deve estar em execução o tempo todo, mas apenas uma única instância da VM deve ser executada por projeto do GCP. Como você deve configurar o grupo de instâncias?",
    "options": [
      {
        "id": "A",
        "text": "Definir o escalonamento automático (autoscaling) como Ativado (On), definir o número mínimo de instâncias como 1 e, em seguida, definir o número máximo de instâncias como 1."
      },
      {
        "id": "B",
        "text": "Definir o escalonamento automático (autoscaling) como Desativado (Off), definir o número mínimo de instâncias como 1 e, em seguida, definir o número máximo de instâncias como 1."
      },
      {
        "id": "C",
        "text": "Definir o escalonamento automático (autoscaling) como Ativado (On), definir o número mínimo de instâncias como 1 e, em seguida, definir o número máximo de instâncias como 2."
      },
      {
        "id": "D",
        "text": "Definir o escalonamento automático (autoscaling) como Desativado (Off), definir o número mínimo de instâncias como 1 e, em seguida, definir o número máximo de instâncias como 2."
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Manter um MIG com autoscaling ativado (ou tamanho alvo fixo de 1) com mínimo=1 e máximo=1 garante que o MIG mantenha sempre exatamente 1 instância em execução e a recrie caso ela falhe.",
    "explanation_why_correct": "Configurar o MIG com **autoscaling ativado (On), mínimo de 1 instância e máximo de 1 instância** garante que haja sempre uma VM ativa (recriando-a caso pare ou falhe) e impede que uma segunda instância seja criada.",
    "explanation_why_incorrect": "Quando o autoscaling está desativado (B e D), os campos de mínimo e máximo de autoscaling não se aplicam. Definir o máximo como 2 (C) permitiria que duas instâncias rodassem simultaneamente, violando a restrição do requisito.",
    "additional_reading": [
      {
        "title": "Gerenciar grupos de instâncias de alta disponibilidade",
        "url": "https://cloud.google.com/compute/docs/instance-groups"
      }
    ]
  },
  {
    "id": 34,
    "type": "single",
    "category": "Configurar acesso e segurança (20%)",
    "category_en": "Configurar acesso e segurança (20%)",
    "objective": "5.1 Auditar membros e papéis do IAM atribuídos em um projeto",
    "what_it_tests": "A página IAM no Console do GCP (ou o comando 'gcloud projects get-iam-policy') lista todos os membros (usuários, grupos, contas de serviço) e os papéis atribuídos a eles no projeto.",
    "question": "Você deseja verificar os usuários e papéis do IAM atribuídos dentro de um projeto do GCP chamado 'my-project'. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Executar 'gcloud iam roles list'. Revisar a seção de saída."
      },
      {
        "id": "B",
        "text": "Executar 'gcloud iam service-accounts list'. Revisar a seção de saída."
      },
      {
        "id": "C",
        "text": "Navegar até o projeto e depois até a seção IAM no Console do GCP. Revisar os membros e papéis."
      },
      {
        "id": "D",
        "text": "Navegar até o projeto e depois até a seção Papéis (Roles) no Console do GCP. Revisar os papéis e o status."
      }
    ],
    "correct_answer": "C",
    "official_rationale": "A página IAM no Console do GCP (ou o comando 'gcloud projects get-iam-policy') lista todos os membros (usuários, grupos, contas de serviço) e os papéis atribuídos a eles no projeto.",
    "explanation_why_correct": "Navegar até a **seção IAM no Console do GCP** dentro do projeto exibe a lista completa de **membros (principais) e os papéis do IAM atribuídos** a cada um deles.",
    "explanation_why_incorrect": "O comando `gcloud iam roles list` (A) e a seção Roles no Console (D) listam apenas as definições de papéis disponíveis, sem mostrar quais usuários os possuem. O comando `gcloud iam service-accounts list` (B) lista apenas as contas de serviço criadas no projeto.",
    "additional_reading": [
      {
        "title": "Visualizar políticas e concessões de acesso no IAM",
        "url": "https://cloud.google.com/iam/docs/granting-changing-revoking-access"
      }
    ]
  },
  {
    "id": 35,
    "type": "single",
    "category": "Configurar um ambiente de solução em nuvem (17.5%)",
    "category_en": "Configurar um ambiente de solução em nuvem (17.5%)",
    "objective": "1.1 Criar uma conta de faturamento e vinculá-la a um projeto existente",
    "what_it_tests": "Para vincular uma nova conta de faturamento a um projeto existente, você cria a nova conta de faturamento (tornando-se Billing Account Administrator dela) e precisa ter o papel Project Billing Manager no projeto existente.",
    "question": "Você precisa criar uma nova conta de faturamento (billing account) e, em seguida, vinculá-la a um projeto existente do Google Cloud Platform. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Verificar se você é Project Billing Manager do projeto do GCP. Atualizar o projeto existente para vinculá-lo à conta de faturamento existente."
      },
      {
        "id": "B",
        "text": "Verificar se você é Project Billing Manager do projeto do GCP. Criar uma nova conta de faturamento e vincular a nova conta de faturamento ao projeto existente."
      },
      {
        "id": "C",
        "text": "Verificar se você é Billing Administrator da conta de faturamento. Criar um novo projeto e vincular o novo projeto à conta de faturamento existente."
      },
      {
        "id": "D",
        "text": "Verificar se você é Billing Administrator da conta de faturamento. Atualizar o projeto existente para vinculá-lo à conta de faturamento existente."
      }
    ],
    "correct_answer": "B",
    "official_rationale": "Para vincular uma nova conta de faturamento a um projeto existente, você cria a nova conta de faturamento (tornando-se Billing Account Administrator dela) e precisa ter o papel Project Billing Manager no projeto existente.",
    "explanation_why_correct": "Para associar uma nova conta de faturamento a um projeto existente, você deve **ter o papel `Project Billing Manager` no projeto do GCP**, **criar a nova conta de faturamento** (o que concede a você administração sobre ela) e **vincular essa nova conta ao projeto existente**.",
    "explanation_why_incorrect": "As opções A e D vinculam o projeto a uma conta de faturamento *existente* em vez de criar uma nova. A opção C cria um *novo projeto* em vez de vincular ao projeto existente.",
    "additional_reading": [
      {
        "title": "Permissões de controle de acesso do Cloud Billing",
        "url": "https://cloud.google.com/billing/docs/how-to/billing-access"
      }
    ]
  },
  {
    "id": 36,
    "type": "single",
    "category": "Configurar acesso e segurança (20%)",
    "category_en": "Configurar acesso e segurança (20%)",
    "objective": "5.2 Conceder permissões entre projetos (cross-project) para contas de serviço",
    "what_it_tests": "Contas de serviço são identidades globais que podem receber papéis do IAM em outros projetos; conceder Compute Storage Admin no projeto 'proj-vm' permite que a conta de serviço de 'proj-sa' tire snapshots dos discos de 'proj-vm'.",
    "question": "Você tem um projeto chamado 'proj-sa' onde gerencia todas as suas contas de serviço. Você deseja poder usar uma conta de serviço desse projeto para tirar snapshots de VMs executando em outro projeto chamado 'proj-vm'. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Baixar a chave privada da conta de serviço e adicioná-la aos metadados personalizados de cada VM."
      },
      {
        "id": "B",
        "text": "Baixar a chave privada da conta de serviço e adicioná-la às chaves SSH de cada VM."
      },
      {
        "id": "C",
        "text": "Conceder à conta de serviço o Papel do IAM de Compute Storage Admin no projeto chamado proj-vm."
      },
      {
        "id": "D",
        "text": "Ao criar as VMs, definir o escopo de API da conta de serviço para o Compute Engine como leitura/gravação."
      }
    ],
    "correct_answer": "C",
    "official_rationale": "Contas de serviço são identidades globais que podem receber papéis do IAM em outros projetos; conceder Compute Storage Admin no projeto 'proj-vm' permite que a conta de serviço de 'proj-sa' tire snapshots dos discos de 'proj-vm'.",
    "explanation_why_correct": "Você pode conceder permissões entre projetos simplesmente atribuindo à conta de serviço de `proj-sa` o papel **`Compute Storage Admin` (`roles/compute.storageAdmin`) diretamente no projeto `proj-vm`**, permitindo criar e gerenciar snapshots de discos naquele projeto.",
    "explanation_why_incorrect": "Armazenar chaves privadas em metadados (A) ou chaves SSH (B) é incorreto e inseguro. Definir escopos de API nas VMs (D) não concede permissão à conta de serviço externa sobre o projeto `proj-vm`.",
    "additional_reading": [
      {
        "title": "Papéis predefinidos do Compute Engine no IAM",
        "url": "https://cloud.google.com/compute/docs/access/iam"
      }
    ]
  },
  {
    "id": 37,
    "type": "single",
    "category": "Implantar e implementar uma solução de nuvem (25%)",
    "category_en": "Implantar e implementar uma solução de nuvem (25%)",
    "objective": "3.3 Entender restrições regionais de aplicativos do App Engine",
    "what_it_tests": "Cada projeto do Google Cloud pode conter apenas um único aplicativo do App Engine, e a região do App Engine é imutável após a criação, exigindo a criação de um novo projeto para mudar de região.",
    "question": "Você criou um projeto do Google Cloud Platform com um aplicativo do App Engine dentro do projeto. Inicialmente, você configurou o aplicativo para ser servido a partir da região us-central. Agora você deseja que o aplicativo seja servido a partir da região asia-northeast1. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Alterar a configuração da propriedade de região padrão no projeto existente do GCP para asia-northeast1."
      },
      {
        "id": "B",
        "text": "Alterar a configuração da propriedade de região no aplicativo existente do App Engine de us-central para asia-northeast1."
      },
      {
        "id": "C",
        "text": "Criar um segundo aplicativo do App Engine no projeto existente do GCP e especificar asia-northeast1 como a região para servir seu aplicativo."
      },
      {
        "id": "D",
        "text": "Criar um novo projeto do GCP e criar um aplicativo do App Engine dentro desse novo projeto. Especificar asia-northeast1 como a região para servir seu aplicativo."
      }
    ],
    "correct_answer": "D",
    "official_rationale": "Cada projeto do Google Cloud pode conter apenas um único aplicativo do App Engine, e a região do App Engine é imutável após a criação, exigindo a criação de um novo projeto para mudar de região.",
    "explanation_why_correct": "A região de um aplicativo do **App Engine não pode ser alterada** após sua criação, e cada projeto do GCP comporta **apenas um aplicativo do App Engine**. Portanto, você deve **criar um novo projeto do GCP** e criar o aplicativo do App Engine nele selecionando a região `asia-northeast1`.",
    "explanation_why_incorrect": "Alterar a região padrão do Compute Engine no projeto (A) não afeta o App Engine. Não é possível alterar a região de um App Engine existente (B) nem criar um segundo aplicativo do App Engine no mesmo projeto (C).",
    "additional_reading": [
      {
        "title": "Gerenciar projetos, aplicativos e faturamento no App Engine",
        "url": "https://cloud.google.com/appengine/docs/standard/managing-projects-apps-billing"
      }
    ]
  },
  {
    "id": 38,
    "type": "single",
    "category": "Configurar acesso e segurança (20%)",
    "category_en": "Configurar acesso e segurança (20%)",
    "objective": "5.1 Conceder acesso de leitura e gravação a bancos de dados do Cloud Spanner",
    "what_it_tests": "O papel 'roles/spanner.databaseUser' permite ler e editar dados em tabelas do Cloud Spanner, e a prática recomendada pelo Google é atribuir o papel a um grupo contendo os usuários.",
    "question": "Você precisa conceder acesso a três usuários para que eles possam visualizar e editar dados de tabelas em uma instância do Cloud Spanner. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Executar 'gcloud iam roles describe roles/spanner.databaseUser'. Adicionar os usuários ao papel."
      },
      {
        "id": "B",
        "text": "Executar 'gcloud iam roles describe roles/spanner.databaseUser'. Adicionar os usuários a um novo grupo. Adicionar o grupo ao papel."
      },
      {
        "id": "C",
        "text": "Executar 'gcloud iam roles describe roles/spanner.viewer --project my-project'. Adicionar os usuários ao papel."
      },
      {
        "id": "D",
        "text": "Executar 'gcloud iam roles describe roles/spanner.viewer --project my-project'. Adicionar os usuários a um novo grupo. Adicionar o grupo ao papel."
      }
    ],
    "correct_answer": "B",
    "official_rationale": "O papel 'roles/spanner.databaseUser' permite ler e editar dados em tabelas do Cloud Spanner, e a prática recomendada pelo Google é atribuir o papel a um grupo contendo os usuários.",
    "explanation_why_correct": "O papel **`roles/spanner.databaseUser`** concede permissões de leitura e gravação nas tabelas de um banco de dados do Cloud Spanner, e a boa prática do IAM exige **adicionar os usuários a um grupo do Google e atribuir o papel ao grupo**.",
    "explanation_why_incorrect": "Conceder o papel diretamente aos usuários individuais (A) contraria a boa prática de gerenciamento por grupos. O papel `roles/spanner.viewer` (C e D) permite apenas visualizar metadados da instância, não permitindo ler nem editar dados das tabelas.",
    "additional_reading": [
      {
        "title": "Controle de acesso com o IAM no Cloud Spanner",
        "url": "https://cloud.google.com/spanner/docs/iam"
      }
    ]
  },
  {
    "id": 39,
    "type": "single",
    "category": "Implantar e implementar uma solução de nuvem (25%)",
    "category_en": "Implantar e implementar uma solução de nuvem (25%)",
    "objective": "3.2 Manter nós de clusters GKE atualizados com Node Auto-Upgrades",
    "what_it_tests": "O recurso Node Auto-Upgrades do GKE mantém os nós do cluster automaticamente atualizados com a versão do plano de controle (control plane) em versões estáveis e suportadas do Kubernetes.",
    "question": "Você cria um novo cluster do Google Kubernetes Engine (GKE) e deseja garantir que ele sempre execute uma versão suportada e estável do Kubernetes. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Habilitar o recurso Node Auto-Repair (Autorreparo de nós) para o seu cluster GKE."
      },
      {
        "id": "B",
        "text": "Habilitar o recurso Node Auto-Upgrades (Atualização automática de nós) para o seu cluster GKE."
      },
      {
        "id": "C",
        "text": "Selecionar a versão mais recente disponível do cluster para o seu cluster GKE."
      },
      {
        "id": "D",
        "text": "Selecionar “Container-Optimized OS (cos)” como a imagem de nó para o seu cluster GKE."
      }
    ],
    "correct_answer": "B",
    "official_rationale": "O recurso Node Auto-Upgrades do GKE mantém os nós do cluster automaticamente atualizados com a versão do plano de controle (control plane) em versões estáveis e suportadas do Kubernetes.",
    "explanation_why_correct": "Habilitar o **Node Auto-Upgrades (Atualizações automáticas de nós)** garante que os nós do cluster GKE sejam atualizados automaticamente sempre que o plano de controle receber atualizações de versões estáveis e patches de segurança do Kubernetes.",
    "explanation_why_incorrect": "O Node Auto-Repair (A) apenas corrige nós não íntegros, sem atualizar a versão do Kubernetes. Selecionar a versão mais recente na criação (C) ou usar Container-Optimized OS (D) não garante que o cluster continuará atualizado no futuro sem o auto-upgrade.",
    "additional_reading": [
      {
        "title": "Atualizar automaticamente os nós do GKE",
        "url": "https://cloud.google.com/kubernetes-engine/docs/how-to/node-auto-upgrades"
      }
    ]
  },
  {
    "id": 40,
    "type": "single",
    "category": "Implantar e implementar uma solução de nuvem (25%)",
    "category_en": "Implantar e implementar uma solução de nuvem (25%)",
    "objective": "3.1 Configurar balanceamento de carga HTTP(S) externo com terminação SSL",
    "what_it_tests": "Para tráfego web público sobre HTTPS com terminação SSL no balanceador de carga, a recomendação oficial do Google Cloud é o External HTTP(S) Load Balancer.",
    "question": "Você tem um grupo de instâncias que deseja balancear a carga. Você quer que o balanceador de carga encerre (termine) a sessão SSL do cliente. O grupo de instâncias é usado para servir um aplicativo web público via HTTPS. Você deseja seguir as práticas recomendadas pelo Google. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Configurar um balanceador de carga HTTP(S)."
      },
      {
        "id": "B",
        "text": "Configurar um balanceador de carga TCP interno."
      },
      {
        "id": "C",
        "text": "Configurar um balanceador de carga de proxy SSL externo."
      },
      {
        "id": "D",
        "text": "Configurar um balanceador de carga de proxy TCP externo."
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Para tráfego web público sobre HTTPS com terminação SSL no balanceador de carga, a recomendação oficial do Google Cloud é o External HTTP(S) Load Balancer.",
    "explanation_why_correct": "Para **aplicativos web públicos sobre HTTPS** que exigem terminação SSL no balanceador de carga, a prática recomendada pelo Google é configurar um **Balanceador de Carga HTTP(S) (HTTP(S) Load Balancer)**.",
    "explanation_why_incorrect": "O balanceador de carga TCP interno (B) não é público nem realiza terminação SSL para HTTPS externo. O Proxy SSL externo (C) e o Proxy TCP externo (D) são voltados para tráfego TCP que **não** seja HTTP(S).",
    "additional_reading": [
      {
        "title": "Escolher um balanceador de carga no Google Cloud",
        "url": "https://cloud.google.com/load-balancing/docs/choosing-load-balancer"
      }
    ]
  },
  {
    "id": 41,
    "type": "single",
    "category": "Garantir a operação bem-sucedida de uma solução de nuvem (20%)",
    "category_en": "Garantir a operação bem-sucedida de uma solução de nuvem (20%)",
    "objective": "4.2 Otimizar o upload de grandes arquivos para o Cloud Storage com gsutil",
    "what_it_tests": "O recurso de uploads compostos paralelos (parallel composite uploads) do gsutil divide um arquivo grande em até 32 partes enviadas em paralelo e as recompõe no Cloud Storage, maximizando o uso da largura de banda de rede.",
    "question": "Você tem 32 GB de dados em um único arquivo que precisa enviar por upload para um bucket Nearline Storage. A conexão WAN que você está usando tem capacidade nominal de 1 Gbps, e você é a única pessoa na conexão. Você deseja usar o máximo possível da capacidade nominal de 1 Gbps para transferir o arquivo rapidamente. Como você deve fazer o upload do arquivo?",
    "options": [
      {
        "id": "A",
        "text": "Usar o Console do GCP para transferir o arquivo em vez do 'gsutil'."
      },
      {
        "id": "B",
        "text": "Habilitar uploads compostos paralelos (parallel composite uploads) usando o 'gsutil' na transferência do arquivo."
      },
      {
        "id": "C",
        "text": "Diminuir o tamanho da janela TCP na máquina que está iniciando a transferência."
      },
      {
        "id": "D",
        "text": "Alterar a classe de armazenamento do bucket de Nearline para Multi-Regional."
      }
    ],
    "correct_answer": "B",
    "official_rationale": "O recurso de uploads compostos paralelos (parallel composite uploads) do gsutil divide um arquivo grande em até 32 partes enviadas em paralelo e as recompõe no Cloud Storage, maximizando o uso da largura de banda de rede.",
    "explanation_why_correct": "Habilitar **uploads compostos paralelos (`parallel composite uploads`) no `gsutil`** (`-o GSUtil:parallel_composite_upload_threshold=...`) divide um arquivo grande em vários blocos enviados simultaneamente em várias conexões e depois os combina no bucket, saturando eficientemente o link de 1 Gbps.",
    "explanation_why_incorrect": "O upload pelo navegador no Console (A) usa um único fluxo e é mais lento para arquivos grandes. Diminuir a janela TCP (C) reduz a taxa de transferência na WAN. A classe de armazenamento do bucket (D) não limita a velocidade de ingestão do upload.",
    "additional_reading": [
      {
        "title": "Uploads compostos paralelos no Cloud Storage",
        "url": "https://cloud.google.com/storage/docs/parallel-composite-uploads"
      }
    ]
  },
  {
    "id": 42,
    "type": "single",
    "category": "Implantar e implementar uma solução de nuvem (25%)",
    "category_en": "Implantar e implementar uma solução de nuvem (25%)",
    "objective": "3.2 Armazenar dados confidenciais no Kubernetes usando objetos Secret",
    "what_it_tests": "No Kubernetes (GKE), credenciais, chaves e senhas devem ser armazenadas em objetos Secret e injetadas nos pods via variáveis de ambiente (valueFrom.secretKeyRef) ou volumes montados.",
    "question": "Você implantou um microsserviço chamado 'myapp1' em um cluster do Google Kubernetes Engine usando um arquivo YAML onde a variável de ambiente DB_PASSWORD está definida em texto simples (plain text). Você precisa refatorar essa configuração para que a senha do banco de dados não seja armazenada em texto simples. Você deseja seguir as práticas recomendadas pelo Google. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Armazenar a senha do banco de dados dentro da imagem Docker do contêiner, e não no arquivo YAML."
      },
      {
        "id": "B",
        "text": "Armazenar a senha do banco de dados dentro de um objeto Secret. Modificar o arquivo YAML para preencher a variável de ambiente DB_PASSWORD a partir do Secret."
      },
      {
        "id": "C",
        "text": "Armazenar a senha do banco de dados dentro de um objeto ConfigMap. Modificar o arquivo YAML para preencher a variável de ambiente DB_PASSWORD a partir do ConfigMap."
      },
      {
        "id": "D",
        "text": "Armazenar a senha do banco de dados em um arquivo dentro de um volume persistente do Kubernetes e usar um PersistentVolumeClaim para montar o volume no contêiner."
      }
    ],
    "correct_answer": "B",
    "official_rationale": "No Kubernetes (GKE), credenciais, chaves e senhas devem ser armazenadas em objetos Secret e injetadas nos pods via variáveis de ambiente (valueFrom.secretKeyRef) ou volumes montados.",
    "explanation_why_correct": "A prática recomendada no Kubernetes para proteger dados confidenciais como senhas é **criar um objeto `Secret`** e modificar o manifesto YAML do Deployment para referenciar o Secret na variável de ambiente `DB_PASSWORD` (`valueFrom: secretKeyRef`).",
    "explanation_why_incorrect": "Embutir senhas na imagem Docker (A) ou em um PersistentVolume (D) expõe a credencial e dificulta a rotação. O objeto `ConfigMap` (C) é destinado a configurações não confidenciais, e não a senhas.",
    "additional_reading": [
      {
        "title": "Usar Secrets de forma segura no Google Kubernetes Engine",
        "url": "https://cloud.google.com/kubernetes-engine/docs/concepts/secret"
      }
    ]
  },
  {
    "id": 43,
    "type": "single",
    "category": "Garantir a operação bem-sucedida de uma solução de nuvem (20%)",
    "category_en": "Garantir a operação bem-sucedida de uma solução de nuvem (20%)",
    "objective": "4.1 Ajustar verificações de integridade e atraso inicial em MIGs com autoscaling",
    "what_it_tests": "Quando o tempo de inicialização da VM (3 min = 180s) é maior que o atraso inicial/período de inicialização configurado (30s), o autoscaler considera a instância pronta prematuramente ou em falha de inicialização e provisiona instâncias extras; aumentar o atraso inicial para 200 segundos resolve o problema.",
    "question": "Você está executando um aplicativo em várias máquinas virtuais dentro de um grupo gerenciado de instâncias (MIG) e tem o escalonamento automático (autoscaling) habilitado. A política de escalonamento automático está configurada para que instâncias adicionais sejam adicionadas ao grupo se a utilização de CPU das instâncias ultrapassar 80%. VMs são adicionadas até que o grupo de instâncias atinja seu limite máximo de cinco VMs ou até que a utilização de CPU das instâncias caia para 80%. O atraso inicial (initial delay) para verificações de integridade HTTP nas instâncias está definido como 30 segundos. As instâncias de máquina virtual levam cerca de três minutos para ficarem disponíveis para os usuários. Você observa que, quando o grupo de instâncias escalona automaticamente, ele adiciona mais instâncias do que o necessário para suportar os níveis de tráfego dos usuários finais. Você deseja manter adequadamente os tamanhos do grupo de instâncias durante o escalonamento automático. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Definir o número máximo de instâncias como 1."
      },
      {
        "id": "B",
        "text": "Diminuir o número máximo de instâncias para 3."
      },
      {
        "id": "C",
        "text": "Usar uma verificação de integridade TCP em vez de uma verificação de integridade HTTP."
      },
      {
        "id": "D",
        "text": "Aumentar o atraso inicial (initial delay) da verificação de integridade HTTP para 200 segundos."
      }
    ],
    "correct_answer": "D",
    "official_rationale": "Quando o tempo de inicialização da VM (3 min = 180s) é maior que o atraso inicial/período de inicialização configurado (30s), o autoscaler considera a instância pronta prematuramente ou em falha de inicialização e provisiona instâncias extras; aumentar o atraso inicial para 200 segundos resolve o problema.",
    "explanation_why_correct": "Como as VMs levam **3 minutos (180 segundos)** para inicializar completamente, um atraso inicial de apenas 30 segundos faz com que a verificação de integridade/autoscaler avalie a instância antes de ela começar a atender tráfego e aliviar a CPU das demais. **Aumentar o atraso inicial para 200 segundos** aguarda a inicialização completa da VM antes de tomar novas decisões de escalonamento.",
    "explanation_why_incorrect": "Reduzir artificialmente o número máximo de instâncias (A e B) impediria que o grupo escalonasse quando houvesse demanda real. Trocar HTTP por TCP (C) não muda o tempo de 3 minutos que a aplicação leva para iniciar.",
    "additional_reading": [
      {
        "title": "Configurar verificações de integridade e período de inicialização no Autoscaler",
        "url": "https://cloud.google.com/compute/docs/autoscaler"
      }
    ]
  },
  {
    "id": 44,
    "type": "single",
    "category": "Planejar e configurar uma solução de nuvem (17.5%)",
    "category_en": "Planejar e configurar uma solução de nuvem (17.5%)",
    "objective": "2.2 Selecionar VMs preemptivas/Spot para processamento em lote (batch) econômico",
    "what_it_tests": "Instâncias de VM preemptivas (Preemptible/Spot VMs) oferecem até 80% de desconto em relação às VMs padrão e são ideais para tarefas em lote de curta duração (como 2 horas por noite).",
    "question": "Você precisa selecionar e configurar recursos de computação para um conjunto de tarefas de processamento em lote (batch jobs). Essas tarefas levam cerca de 2 horas para serem concluídas e são executadas todas as noites. Você deseja minimizar os custos de serviço. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Selecionar o Google Kubernetes Engine. Usar um cluster de nó único com um tipo de instância pequeno."
      },
      {
        "id": "B",
        "text": "Selecionar o Google Kubernetes Engine. Usar um cluster de três nós com tipos de instância micro."
      },
      {
        "id": "C",
        "text": "Selecionar o Compute Engine. Usar instâncias de VM preemptivas (Preemptible VMs) do tipo de máquina padrão apropriado."
      },
      {
        "id": "D",
        "text": "Selecionar o Compute Engine. Usar tipos de instância de VM que suportem micro bursting."
      }
    ],
    "correct_answer": "C",
    "official_rationale": "Instâncias de VM preemptivas (Preemptible/Spot VMs) oferecem até 80% de desconto em relação às VMs padrão e são ideais para tarefas em lote de curta duração (como 2 horas por noite).",
    "explanation_why_correct": "As **VMs preemptivas (Preemptible VMs / Spot VMs)** do Compute Engine oferecem descontos de até 80% e têm duração máxima de 24 horas, sendo a escolha ideal para **tarefas de processamento em lote noturnas de 2 horas** a fim de minimizar custos.",
    "explanation_why_incorrect": "Clusters GKE com instâncias pequenas ou micro (A e B) ou VMs de núcleo compartilhado com bursting (D) não oferecem o desempenho necessário para processamento batch nem a economia de custo de VMs preemptivas desligadas após as 2 horas.",
    "additional_reading": [
      {
        "title": "Instâncias de máquina virtual preemptivas no Compute Engine",
        "url": "https://cloud.google.com/compute/docs/instances/preemptible"
      }
    ]
  },
  {
    "id": 45,
    "type": "single",
    "category": "Implantar e implementar uma solução de nuvem (25%)",
    "category_en": "Implantar e implementar uma solução de nuvem (25%)",
    "objective": "3.3 Reverter (rollback) versões de aplicativos no App Engine",
    "what_it_tests": "No App Engine, as versões anteriores permanecem disponíveis na página Versions, permitindo reverter imediatamente um deploy migrando 100% do tráfego para a versão anterior.",
    "question": "Você implantou recentemente uma nova versão de um aplicativo no App Engine e descobriu um bug no lançamento. Você precisa reverter imediatamente para a versão anterior do aplicativo. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Executar 'gcloud app restore'."
      },
      {
        "id": "B",
        "text": "Na página do App Engine no Console do GCP, selecionar o aplicativo que precisa ser revertido e clicar em 'Revert'."
      },
      {
        "id": "C",
        "text": "Na página Versões (Versions) do App Engine no Console do GCP, direcionar 100% do tráfego para a versão anterior."
      },
      {
        "id": "D",
        "text": "Implantar a versão original como um aplicativo separado. Em seguida, ir às configurações do App Engine e dividir o tráfego entre os aplicativos para que a versão original atenda a 100% das requisições."
      }
    ],
    "correct_answer": "C",
    "official_rationale": "No App Engine, as versões anteriores permanecem disponíveis na página Versions, permitindo reverter imediatamente um deploy migrando 100% do tráfego para a versão anterior.",
    "explanation_why_correct": "Para fazer um rollback imediato no App Engine, basta acessar a página **Versões (Versions) do App Engine no Console do GCP**, selecionar a versão anterior estável e **migrar/direcionar 100% do tráfego para ela**.",
    "explanation_why_incorrect": "O comando `gcloud app restore` (A) e o botão 'Revert' no nível do aplicativo (B) não existem. Além disso, um projeto só pode ter um único aplicativo App Engine, tornando a opção D impossível.",
    "additional_reading": [
      {
        "title": "Dividir e migrar tráfego entre versões no App Engine",
        "url": "https://cloud.google.com/appengine/docs/standard/splitting-traffic"
      }
    ]
  },
  {
    "id": 46,
    "type": "single",
    "category": "Configurar um ambiente de solução em nuvem (17.5%)",
    "category_en": "Configurar um ambiente de solução em nuvem (17.5%)",
    "objective": "1.2 Diagnosticar a configuração ativa do Cloud SDK (gcloud)",
    "what_it_tests": "O comando 'gcloud app deploy' utiliza a propriedade 'core/project' da configuração ativa da CLI gcloud, que pode ser inspecionada executando 'gcloud config list'.",
    "question": "Você implantou um aplicativo do App Engine usando 'gcloud app deploy', mas ele não foi implantado no projeto pretendido. Você quer descobrir por que isso aconteceu e onde o aplicativo foi implantado. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Verificar o arquivo app.yaml do seu aplicativo e verificar as configurações do projeto."
      },
      {
        "id": "B",
        "text": "Verificar o arquivo web-application.xml do seu aplicativo e verificar as configurações do projeto."
      },
      {
        "id": "C",
        "text": "Acessar o Deployment Manager e revisar as configurações de implantação de aplicativos."
      },
      {
        "id": "D",
        "text": "Acessar o Cloud Shell e executar 'gcloud config list' para revisar a configuração do Google Cloud usada para a implantação."
      }
    ],
    "correct_answer": "D",
    "official_rationale": "O comando 'gcloud app deploy' utiliza a propriedade 'core/project' da configuração ativa da CLI gcloud, que pode ser inspecionada executando 'gcloud config list'.",
    "explanation_why_correct": "Quando você executa `gcloud app deploy` sem a flag `--project`, o comando usa o projeto definido na configuração ativa do Cloud SDK. Executar **`gcloud config list`** exibe a propriedade `project` ativa para identificar em qual projeto o aplicativo foi implantado.",
    "explanation_why_incorrect": "O arquivo `app.yaml` (A) não define mais o ID do projeto nas versões atuais do Cloud SDK, `web-application.xml` (B) não define o projeto do GCP, e o `gcloud app deploy` não usa o Deployment Manager (C).",
    "additional_reading": [
      {
        "title": "Visualizar propriedades da configuração ativa com gcloud config list",
        "url": "https://cloud.google.com/sdk/gcloud/reference/config/list"
      }
    ]
  },
  {
    "id": 47,
    "type": "single",
    "category": "Implantar e implementar uma solução de nuvem (25%)",
    "category_en": "Implantar e implementar uma solução de nuvem (25%)",
    "objective": "3.1 Configurar política de disponibilidade e manutenção de host em VMs do Compute Engine",
    "what_it_tests": "Para alta disponibilidade de VMs durante eventos de manutenção de infraestrutura e falhas de sistema, configura-se 'Automatic Restart: On' e 'On-host maintenance: Migrate VM instance' (Live Migration) no modelo de instância.",
    "question": "Você deseja configurar 10 instâncias do Compute Engine para disponibilidade quando ocorrer manutenção. Seus requisitos estabelecem que essas instâncias devem tentar reiniciar automaticamente se travarem. Além disso, as instâncias devem estar altamente disponíveis, inclusive durante a manutenção do sistema. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Criar um modelo de instância (instance template) para as instâncias. Definir ‘Automatic Restart’ (Reinicialização automática) como ativado (On). Definir ‘On-host maintenance’ (Manutenção no host) como Migrate VM instance (Migrar instância de VM). Adicionar o modelo de instância a um grupo de instâncias."
      },
      {
        "id": "B",
        "text": "Criar um modelo de instância para as instâncias. Definir ‘Automatic Restart’ como desativado (Off). Definir ‘On-host maintenance’ como Terminate VM instances (Encerrar instâncias de VM). Adicionar o modelo de instância a um grupo de instâncias."
      },
      {
        "id": "C",
        "text": "Criar um grupo de instâncias para as instâncias. Definir a verificação de integridade de ‘Autohealing’ como íntegra (HTTP)."
      },
      {
        "id": "D",
        "text": "Criar um grupo de instâncias para a instância. Verificar se a configuração de ‘Opções avançadas de criação’ para ‘não tentar novamente a criação da máquina’ está definida como desativada."
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Para alta disponibilidade de VMs durante eventos de manutenção de infraestrutura e falhas de sistema, configura-se 'Automatic Restart: On' e 'On-host maintenance: Migrate VM instance' (Live Migration) no modelo de instância.",
    "explanation_why_correct": "Definir **`Automatic Restart` como `On`** garante que o Compute Engine reinicie a VM caso ela sofra uma falha de hardware ou sistema, e definir **`On-host maintenance` como `Migrate VM instance`** utiliza a migração ao vivo (*Live Migration*) para manter a VM ativa sem interrupção durante manutenções no host físico.",
    "explanation_why_incorrect": "Desativar o Automatic Restart e encerrar a VM na manutenção (B) causa indisponibilidade. As opções C e D não configuram o comportamento da VM durante eventos de manutenção do host físico.",
    "additional_reading": [
      {
        "title": "Definir políticas de disponibilidade de instâncias de VM",
        "url": "https://cloud.google.com/compute/docs/instances/setting-instance-scheduling-options"
      }
    ]
  },
  {
    "id": 48,
    "type": "single",
    "category": "Garantir a operação bem-sucedida de uma solução de nuvem (20%)",
    "category_en": "Garantir a operação bem-sucedida de uma solução de nuvem (20%)",
    "objective": "4.2 Configurar metadados Content-Type de objetos no Cloud Storage",
    "what_it_tests": "O metadado padrão Content-Type de um objeto no Cloud Storage instrui o navegador sobre como renderizar o arquivo; defini-lo como 'application/pdf' faz com que o navegador exiba o PDF inline em vez de forçar o download.",
    "question": "Você hospeda um site estático no Cloud Storage. Recentemente, você começou a incluir links para arquivos PDF neste site. Atualmente, quando os usuários clicam nos links para esses arquivos PDF, seus navegadores solicitam que salvem o arquivo no sistema local. Em vez disso, você deseja que os arquivos PDF clicados sejam exibidos diretamente dentro da janela do navegador, sem solicitar que o usuário salve o arquivo localmente. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Habilitar o Cloud CDN no frontend do site."
      },
      {
        "id": "B",
        "text": "Habilitar ‘Compartilhar publicamente’ (Share publicly) nos objetos de arquivo PDF."
      },
      {
        "id": "C",
        "text": "Definir o metadado Content-Type como application/pdf nos objetos de arquivo PDF."
      },
      {
        "id": "D",
        "text": "Adicionar um rótulo (label) ao bucket de armazenamento com a chave Content-Type e o valor application/pdf."
      }
    ],
    "correct_answer": "C",
    "official_rationale": "O metadado padrão Content-Type de um objeto no Cloud Storage instrui o navegador sobre como renderizar o arquivo; defini-lo como 'application/pdf' faz com que o navegador exiba o PDF inline em vez de forçar o download.",
    "explanation_why_correct": "Definir o metadado **`Content-Type` como `application/pdf`** nos objetos PDF informa ao navegador que o conteúdo é um documento PDF, fazendo com que ele seja renderizado diretamente na janela do navegador em vez de ser baixado como binário genérico.",
    "explanation_why_incorrect": "O Cloud CDN (A) apenas faz cache do conteúdo. Os arquivos já estão públicos se os usuários conseguem baixá-los (B). Rótulos (labels) no bucket (D) servem apenas para organização e faturamento, não alterando cabeçalhos HTTP dos objetos.",
    "additional_reading": [
      {
        "title": "Editar metadados de objetos no Cloud Storage",
        "url": "https://cloud.google.com/storage/docs/metadata"
      }
    ]
  },
  {
    "id": 49,
    "type": "single",
    "category": "Garantir a operação bem-sucedida de uma solução de nuvem (20%)",
    "category_en": "Garantir a operação bem-sucedida de uma solução de nuvem (20%)",
    "objective": "4.1 Redimensionar a memória de uma instância de VM do Compute Engine",
    "what_it_tests": "Para aumentar apenas a memória de uma VM no Compute Engine mantendo as 2 vCPUs (usando tipos de máquina personalizados/estendidos), é necessário parar a VM, editar a quantidade de memória para 8 GB e iniciar a VM novamente.",
    "question": "Você tem uma máquina virtual que está atualmente configurada com 2 vCPUs e 4 GB de memória. Ela está ficando sem memória. Você deseja fazer o upgrade da máquina virtual para ter 8 GB de memória. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Confiar na migração ao vivo (live migration) para mover a carga de trabalho para uma máquina com mais memória."
      },
      {
        "id": "B",
        "text": "Usar o gcloud para adicionar metadados à VM. Definir a chave como 'required-memory-size' e o valor como '8 GB'."
      },
      {
        "id": "C",
        "text": "Parar a VM, alterar o tipo de máquina para 'n1-standard-8' e iniciar a VM."
      },
      {
        "id": "D",
        "text": "Parar a VM, aumentar a memória para '8 GB' e iniciar a VM."
      }
    ],
    "correct_answer": "D",
    "official_rationale": "Para aumentar apenas a memória de uma VM no Compute Engine mantendo as 2 vCPUs (usando tipos de máquina personalizados/estendidos), é necessário parar a VM, editar a quantidade de memória para 8 GB e iniciar a VM novamente.",
    "explanation_why_correct": "Para alterar a memória de uma instância existente sem pagar por 8 vCPUs desnecessárias, você deve **parar a VM, editar a configuração da instância aumentando a memória para 8 GB** (tipo de máquina personalizado) **e iniciar a VM novamente**.",
    "explanation_why_incorrect": "A migração ao vivo (A) não altera recursos de hardware da VM, e metadados (B) não mudam a memória alocada. Mudar para `n1-standard-8` (C) alocaria 8 vCPUs e 30 GB de RAM, muito além dos 8 GB de memória solicitados.",
    "additional_reading": [
      {
        "title": "Alterar o tipo de máquina de uma instância de VM",
        "url": "https://cloud.google.com/compute/docs/instances/changing-machine-type-of-stopped-instance"
      }
    ]
  },
  {
    "id": 50,
    "type": "single",
    "category": "Implantar e implementar uma solução de nuvem (25%)",
    "category_en": "Implantar e implementar uma solução de nuvem (25%)",
    "objective": "3.4 Configurar redes VPC personalizadas e comunicação entre sub-redes",
    "what_it_tests": "As VPCs no Google Cloud são globais: sub-redes dentro de uma mesma VPC (mesmo em regiões diferentes) têm roteamento interno automático entre si, desde que possuam intervalos CIDR distintos (sem sobreposição).",
    "question": "Você tem cargas de trabalho de produção e de teste que deseja implantar no Compute Engine. As VMs de produção precisam estar em uma sub-rede diferente das VMs de teste. Todas as VMs devem conseguir se comunicar entre si por IP interno sem criar rotas adicionais. Você precisa configurar a VPC e as 2 sub-redes. Qual configuração atende a esses requisitos?",
    "options": [
      {
        "id": "A",
        "text": "Criar uma única VPC personalizada com 2 sub-redes. Criar cada sub-rede em uma região diferente e com um intervalo CIDR diferente."
      },
      {
        "id": "B",
        "text": "Criar uma única VPC personalizada com 2 sub-redes. Criar cada sub-rede na mesma região e com o mesmo intervalo CIDR."
      },
      {
        "id": "C",
        "text": "Criar 2 VPCs personalizadas, cada uma com uma única sub-rede. Criar cada sub-rede em uma região diferente e com um intervalo CIDR diferente."
      },
      {
        "id": "D",
        "text": "Criar 2 VPCs personalizadas, cada uma com uma única sub-rede. Criar cada sub-rede na mesma região e com o mesmo intervalo CIDR."
      }
    ],
    "correct_answer": "A",
    "official_rationale": "As VPCs no Google Cloud são globais: sub-redes dentro de uma mesma VPC (mesmo em regiões diferentes) têm roteamento interno automático entre si, desde que possuam intervalos CIDR distintos (sem sobreposição).",
    "explanation_why_correct": "Uma **única VPC personalizada é um recurso global** no Google Cloud. Ao criar **2 sub-redes na mesma VPC com intervalos CIDR diferentes** (mesmo que em regiões diferentes), o Google Cloud cria automaticamente as rotas de sub-rede permitindo comunicação por IP interno entre todas as VMs.",
    "explanation_why_incorrect": "Duas sub-redes não podem ter o mesmo intervalo CIDR na mesma VPC (B). Criar 2 VPCs separadas (C e D) isola as redes e exigiria configurar VPC Network Peering ou Cloud VPN (rotas adicionais) para que as VMs se comunicassem.",
    "additional_reading": [
      {
        "title": "Visão geral de redes VPC e roteamento de sub-redes",
        "url": "https://cloud.google.com/vpc/docs/vpc"
      }
    ]
  }
];

const GCP_SIMULADO_3_QUESTIONS = [
  {
    "id": 1,
    "type": "single",
    "category": "Garantir a operação bem-sucedida de uma solução de nuvem (20%)",
    "category_en": "Garantir a operação bem-sucedida de uma solução de nuvem (20%)",
    "objective": "4.1 Prevenir exclusão acidental de instâncias do Compute Engine",
    "what_it_tests": "O recurso de proteção contra exclusão (deletion protection) de uma instância do Compute Engine impede que a VM seja excluída acidentalmente até que a flag seja explicitamente desativada.",
    "question": "Você precisa hospedar um aplicativo em uma instância do Compute Engine em um projeto compartilhado com outras equipes. Você deseja impedir que as outras equipes causem acidentalmente tempo de inatividade (downtime) nesse aplicativo. Qual recurso você deve usar?",
    "options": [
      {
        "id": "A",
        "text": "Usar uma Shielded VM (VM blindada)."
      },
      {
        "id": "B",
        "text": "Usar uma Preemptible VM (VM preemptiva)."
      },
      {
        "id": "C",
        "text": "Usar um nó de locatário único (sole-tenant node)."
      },
      {
        "id": "D",
        "text": "Habilitar a proteção contra exclusão (deletion protection) na instância."
      }
    ],
    "correct_answer": "D",
    "official_rationale": "O recurso de proteção contra exclusão (deletion protection) de uma instância do Compute Engine impede que a VM seja excluída acidentalmente até que a flag seja explicitamente desativada.",
    "explanation_why_correct": "Habilitar a **proteção contra exclusão (deletion protection)** na instância do Compute Engine bloqueia tentativas acidentais de exclusão da VM por usuários que compartilham o projeto.",
    "explanation_why_incorrect": "Shielded VMs (A) protegem contra rootkits e bootkits no nível de inicialização. Preemptible VMs (B) podem ser encerradas pelo Compute Engine a qualquer momento (aumentando o downtime). Nós de locatário único (C) dedicam hardware físico, mas não impedem exclusão acidental.",
    "additional_reading": [
      {
        "title": "Prevenir a exclusão acidental de VMs",
        "url": "https://cloud.google.com/compute/docs/instances/preventing-accidental-vm-deletion"
      }
    ]
  },
  {
    "id": 2,
    "type": "single",
    "category": "Configurar acesso e segurança (20%)",
    "category_en": "Configurar acesso e segurança (20%)",
    "objective": "5.1 Conceder acesso de consulta ao BigQuery aplicando o menor privilégio",
    "what_it_tests": "O papel predefinido roles/bigquery.user (combinado com leitura de dados quando aplicável, em contraste com dataOwner) permite executar jobs de consulta sem conceder a permissão de excluir conjuntos de dados existente em roles/bigquery.dataOwner.",
    "question": "Sua organização precisa conceder aos usuários acesso para consultar conjuntos de dados (datasets) no BigQuery, mas impedi-los de excluir acidentalmente os conjuntos de dados. Você deseja uma solução que siga as práticas recomendadas pelo Google. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Adicionar os usuários apenas ao papel roles/bigquery.user, em vez de roles/bigquery.dataOwner."
      },
      {
        "id": "B",
        "text": "Adicionar os usuários apenas ao papel roles/bigquery.dataEditor, em vez de roles/bigquery.dataOwner."
      },
      {
        "id": "C",
        "text": "Criar um papel personalizado removendo as permissões de exclusão e adicionar os usuários apenas a esse papel."
      },
      {
        "id": "D",
        "text": "Criar um papel personalizado removendo as permissões de exclusão. Adicionar os usuários ao grupo e, em seguida, adicionar o grupo ao papel personalizado."
      }
    ],
    "correct_answer": "A",
    "official_rationale": "O papel predefinido roles/bigquery.user (combinado com leitura de dados quando aplicável, em contraste com dataOwner) permite executar jobs de consulta sem conceder a permissão de excluir conjuntos de dados existente em roles/bigquery.dataOwner.",
    "explanation_why_correct": "Substituir `roles/bigquery.dataOwner` pelo papel predefinido **`roles/bigquery.user`** permite que os usuários executem consultas (jobs) no projeto sem terem permissão para excluir os conjuntos de dados, seguindo a recomendação de usar papéis predefinidos do IAM.",
    "explanation_why_incorrect": "O papel `roles/bigquery.dataEditor` (B) permite modificar e excluir tabelas/dados nos datasets. Criar papéis personalizados (C e D) não é recomendado quando papéis predefinidos do BigQuery já atendem à separação de permissões.",
    "additional_reading": [
      {
        "title": "Papéis predefinidos do IAM no BigQuery",
        "url": "https://cloud.google.com/bigquery/docs/access-control"
      }
    ]
  },
  {
    "id": 3,
    "type": "single",
    "category": "Configurar um ambiente de solução em nuvem (17.5%)",
    "category_en": "Configurar um ambiente de solução em nuvem (17.5%)",
    "objective": "1.2 Gerenciar componentes do Cloud SDK instalados via gerenciador de pacotes do sistema (apt)",
    "what_it_tests": "Quando o Cloud SDK é instalado via repositório de pacotes DEB/apt no Ubuntu/Debian, o gerenciador 'gcloud components' fica desabilitado e os componentes extras devem ser instalados via 'apt-get install google-cloud-sdk-<componente>'.",
    "question": "Você tem um laptop de desenvolvedor com o Cloud SDK instalado no Ubuntu. O Cloud SDK foi instalado a partir do repositório de pacotes do Ubuntu do Google Cloud. Você deseja testar seu aplicativo localmente no seu laptop com o Cloud Datastore. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Exportar dados do Cloud Datastore usando 'gcloud datastore export'."
      },
      {
        "id": "B",
        "text": "Criar um índice do Cloud Datastore usando 'gcloud datastore indexes create'."
      },
      {
        "id": "C",
        "text": "Instalar o componente 'google-cloud-sdk-datastore-emulator' usando o comando 'apt-get install'."
      },
      {
        "id": "D",
        "text": "Instalar o componente 'cloud-datastore-emulator' usando o comando 'gcloud components install'."
      }
    ],
    "correct_answer": "C",
    "official_rationale": "Quando o Cloud SDK é instalado via repositório de pacotes DEB/apt no Ubuntu/Debian, o gerenciador 'gcloud components' fica desabilitado e os componentes extras devem ser instalados via 'apt-get install google-cloud-sdk-<componente>'.",
    "explanation_why_correct": "Como o Cloud SDK foi instalado a partir do **repositório de pacotes do Ubuntu (`apt`)**, componentes adicionais não podem ser instalados via `gcloud components install`; você deve usar **`apt-get install google-cloud-sdk-datastore-emulator`**.",
    "explanation_why_incorrect": "O comando `gcloud components install` (D) falha quando o SDK foi instalado via gerenciador de pacotes `apt`/`yum`. Exportar dados (A) ou criar índices (B) não instala o emulador local para testes.",
    "additional_reading": [
      {
        "title": "Instalar a CLI gcloud e componentes adicionais no Debian/Ubuntu",
        "url": "https://cloud.google.com/sdk/docs/install#deb"
      }
    ]
  },
  {
    "id": 4,
    "type": "single",
    "category": "Configurar acesso e segurança (20%)",
    "category_en": "Configurar acesso e segurança (20%)",
    "objective": "5.1 Permitir visualização da hierarquia organizacional com o papel Browser",
    "what_it_tests": "O papel predefinido Browser (roles/browser) concede permissão mínima apenas para navegar pela hierarquia de recursos (organização, pastas e projetos), e a boa prática do IAM exige atribuí-lo a um grupo.",
    "question": "Sua empresa configurou uma estrutura organizacional complexa no Google Cloud. A estrutura inclui centenas de pastas e projetos. Apenas alguns membros da equipe devem poder visualizar a estrutura hierárquica. Você precisa atribuir permissões mínimas a esses membros da equipe e deseja seguir as práticas recomendadas pelo Google. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Adicionar os usuários ao papel roles/browser."
      },
      {
        "id": "B",
        "text": "Adicionar os usuários ao papel roles/iam.roleViewer."
      },
      {
        "id": "C",
        "text": "Adicionar os usuários a um grupo e adicionar esse grupo ao papel roles/browser."
      },
      {
        "id": "D",
        "text": "Adicionar os usuários a um grupo e adicionar esse grupo ao papel roles/iam.roleViewer."
      }
    ],
    "correct_answer": "C",
    "official_rationale": "O papel predefinido Browser (roles/browser) concede permissão mínima apenas para navegar pela hierarquia de recursos (organização, pastas e projetos), e a boa prática do IAM exige atribuí-lo a um grupo.",
    "explanation_why_correct": "Adicionar os usuários a um **grupo do Google** e conceder ao grupo o papel **`roles/browser`** segue as melhores práticas do IAM e permite apenas visualizar a hierarquia de pastas e projetos sem acesso aos recursos internos.",
    "explanation_why_incorrect": "Atribuir diretamente a usuários individuais (A) viola a boa prática de gerenciamento por grupos. O papel `roles/iam.roleViewer` (B e D) serve para visualizar definições de papéis do IAM, e não a hierarquia de pastas e projetos no Resource Manager.",
    "additional_reading": [
      {
        "title": "Controle de acesso para pastas e hierarquia no Resource Manager",
        "url": "https://cloud.google.com/resource-manager/docs/access-control-folders"
      }
    ]
  },
  {
    "id": 5,
    "type": "single",
    "category": "Configurar acesso e segurança (20%)",
    "category_en": "Configurar acesso e segurança (20%)",
    "objective": "5.1 Configurar autenticação SSO SAML no Cloud Identity com provedor externo",
    "what_it_tests": "Para autenticar usuários do Cloud Identity usando um IdP corporativo externo via SAML, configura-se o SSO no Cloud Identity com o provedor externo atuando como Identity Provider (IdP) e o Google atuando como Service Provider (SP).",
    "question": "Sua empresa possui um provedor de identidade de logon único (SSO) que oferece suporte à integração SAML (Security Assertion Markup Language) com provedores de serviços. Sua empresa possui usuários no Cloud Identity. Você gostaria que os usuários se autenticassem usando o provedor de SSO da sua empresa. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "No Cloud Identity, configurar o SSO com o Google como um provedor de identidade (IdP) para acessar aplicativos SAML personalizados."
      },
      {
        "id": "B",
        "text": "No Cloud Identity, configurar o SSO com um provedor de identidade de terceiros tendo o Google como provedor de serviços (SP)."
      },
      {
        "id": "C",
        "text": "Obter credenciais OAuth 2.0, configurar a tela de consentimento do usuário e configurar o OAuth 2.0 para Aplicativos Móveis e de Desktop."
      },
      {
        "id": "D",
        "text": "Obter credenciais OAuth 2.0, configurar a tela de consentimento do usuário e configurar o OAuth 2.0 para Aplicativos de Servidor Web."
      }
    ],
    "correct_answer": "B",
    "official_rationale": "Para autenticar usuários do Cloud Identity usando um IdP corporativo externo via SAML, configura-se o SSO no Cloud Identity com o provedor externo atuando como Identity Provider (IdP) e o Google atuando como Service Provider (SP).",
    "explanation_why_correct": "No Cloud Identity, você deve configurar o **SSO com um provedor de identidade (IdP) de terceiros tendo o Google como provedor de serviços (Service Provider - SP)**. Assim, o Google delega a autenticação SAML ao IdP corporativo.",
    "explanation_why_incorrect": "A opção A inverte os papéis (usando o Google como IdP para outros aplicativos). As opções C e D tratam de autorização OAuth 2.0 para aplicativos desenvolvidos por você, e não de federação SAML SSO para contas do Cloud Identity.",
    "additional_reading": [
      {
        "title": "Configurar SSO com um provedor de identidade de terceiros",
        "url": "https://cloud.google.com/architecture/identity/single-sign-on"
      }
    ]
  },
  {
    "id": 6,
    "type": "single",
    "category": "Configurar acesso e segurança (20%)",
    "category_en": "Configurar acesso e segurança (20%)",
    "objective": "5.2 Delegar a criação e o gerenciamento de contas de serviço",
    "what_it_tests": "O papel predefinido Service Account Admin (roles/iam.serviceAccountAdmin) concede as permissões mínimas necessárias para criar e gerenciar contas de serviço em um projeto.",
    "question": "Sua organização tem uma pessoa dedicada que cria e gerencia todas as contas de serviço para projetos do Google Cloud. Você precisa atribuir a essa pessoa o papel mínimo para os projetos. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Adicionar o usuário ao papel roles/iam.roleAdmin."
      },
      {
        "id": "B",
        "text": "Adicionar o usuário ao papel roles/iam.securityAdmin."
      },
      {
        "id": "C",
        "text": "Adicionar o usuário ao papel roles/iam.serviceAccountUser."
      },
      {
        "id": "D",
        "text": "Adicionar o usuário ao papel roles/iam.serviceAccountAdmin."
      }
    ],
    "correct_answer": "D",
    "official_rationale": "O papel predefinido Service Account Admin (roles/iam.serviceAccountAdmin) concede as permissões mínimas necessárias para criar e gerenciar contas de serviço em um projeto.",
    "explanation_why_correct": "O papel **`roles/iam.serviceAccountAdmin` (Administrador de contas de serviço)** concede exatamente as permissões necessárias para criar, atualizar e gerenciar contas de serviço em um projeto, respeitando o princípio do menor privilégio.",
    "explanation_why_incorrect": "`roles/iam.roleAdmin` (A) gerencia papéis personalizados, não contas de serviço. `roles/iam.securityAdmin` (B) permite alterar políticas de IAM de todo o projeto. `roles/iam.serviceAccountUser` (C) permite apenas anexar/usar uma conta de serviço existente, mas não criá-la.",
    "additional_reading": [
      {
        "title": "Papéis para gerenciar contas de serviço",
        "url": "https://cloud.google.com/iam/docs/service-account-permissions"
      }
    ]
  },
  {
    "id": 7,
    "type": "single",
    "category": "Planejar e configurar uma solução de nuvem (17.5%)",
    "category_en": "Planejar e configurar uma solução de nuvem (17.5%)",
    "objective": "2.3 Selecionar a classe de armazenamento econômica para acesso trimestral no Cloud Storage",
    "what_it_tests": "O Coldline Storage possui período mínimo de armazenamento de 90 dias e é a classe mais econômica para dados acessados no máximo uma vez por trimestre (a cada 90 dias).",
    "question": "Você está construindo uma solução de arquivamento para o seu data warehouse e selecionou o Cloud Storage para arquivar seus dados. Seus usuários precisam poder acessar esses dados arquivados uma vez por trimestre para alguns requisitos regulatórios. Você deseja selecionar uma opção econômica. Qual opção de armazenamento você deve usar?",
    "options": [
      {
        "id": "A",
        "text": "Coldline Storage (Cold Storage)"
      },
      {
        "id": "B",
        "text": "Nearline Storage"
      },
      {
        "id": "C",
        "text": "Regional Storage"
      },
      {
        "id": "D",
        "text": "Multi-Regional Storage"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "O Coldline Storage possui período mínimo de armazenamento de 90 dias e é a classe mais econômica para dados acessados no máximo uma vez por trimestre (a cada 90 dias).",
    "explanation_why_correct": "O **Coldline Storage** possui duração mínima de armazenamento de **90 dias** e menor custo por GB armazenado entre as opções listadas, sendo a escolha ideal para dados acessados **uma vez por trimestre**.",
    "explanation_why_incorrect": "Nearline Storage (B) é otimizado para dados acessados uma vez por mês (30 dias). Regional (C) e Multi-Regional (D) são voltados para dados acessados com alta frequência e têm custo de armazenamento mais elevado.",
    "additional_reading": [
      {
        "title": "Classes de armazenamento do Cloud Storage",
        "url": "https://cloud.google.com/storage/docs/storage-classes"
      }
    ]
  },
  {
    "id": 8,
    "type": "single",
    "category": "Implantar e implementar uma solução de nuvem (25%)",
    "category_en": "Implantar e implementar uma solução de nuvem (25%)",
    "objective": "3.2 Otimizar custos em clusters GKE com pools de nós de GPU e autoscaling",
    "what_it_tests": "O Node Auto-Provisioning (NAP) cria e exclui automaticamente pools de nós com GPUs sob demanda (escalonando a zero quando ocioso), atendendo a jobs longos e não reiniciáveis pelo menor custo.",
    "question": "Uma equipe de cientistas de dados precisa usar com pouca frequência um cluster do Google Kubernetes Engine (GKE) que você gerencia. Eles exigem GPUs para algumas tarefas de longa duração e que não podem ser reiniciadas (non-restartable). Você deseja minimizar os custos. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Habilitar o provisionamento automático de nós (node auto-provisioning) no cluster GKE."
      },
      {
        "id": "B",
        "text": "Criar um VerticalPodAutoscaler para essas cargas de trabalho."
      },
      {
        "id": "C",
        "text": "Criar um pool de nós (node pool) com VMs preemptivas e GPUs anexadas a essas VMs."
      },
      {
        "id": "D",
        "text": "Criar um pool de nós de instâncias com GPUs e habilitar o escalonamento automático (autoscaling) nesse pool de nós com tamanho mínimo de 1."
      }
    ],
    "correct_answer": "A",
    "official_rationale": "O Node Auto-Provisioning (NAP) cria e exclui automaticamente pools de nós com GPUs sob demanda (escalonando a zero quando ocioso), atendendo a jobs longos e não reiniciáveis pelo menor custo.",
    "explanation_why_correct": "Habilitar o **provisionamento automático de nós (Node Auto-Provisioning)** no GKE permite que o cluster crie dinamicamente um pool de nós com GPUs apenas quando os jobs forem submetidos e remova completamente esses nós (escalonando a 0) quando terminarem.",
    "explanation_why_incorrect": "VMs preemptivas (C) são encerradas em até 24h e podem sofrer preempção a qualquer momento, sendo inadequadas para jobs *longos e que não podem ser reiniciados*. Manter tamanho mínimo de 1 nó com GPU (D) gera custo contínuo mesmo quando ninguém está usando. O VPA (B) não provisiona nós com GPU.",
    "additional_reading": [
      {
        "title": "Usar o provisionamento automático de nós no GKE",
        "url": "https://cloud.google.com/kubernetes-engine/docs/how-to/node-auto-provisioning"
      }
    ]
  },
  {
    "id": 9,
    "type": "single",
    "category": "Configurar acesso e segurança (20%)",
    "category_en": "Configurar acesso e segurança (20%)",
    "objective": "5.1 Sincronizar identidades do Active Directory com o Cloud Identity via GCDS",
    "what_it_tests": "O Google Cloud Directory Sync (GCDS) sincroniza automaticamente usuários e grupos de um servidor Active Directory/LDAP local para o Cloud Identity, mantendo o AD como a fonte da verdade.",
    "question": "Sua organização possui identidades de usuários no Active Directory. Sua organização deseja usar o Active Directory como sua fonte da verdade (source of truth) para identidades. Sua organização quer ter controle total sobre as contas do Google usadas pelos funcionários para todos os serviços do Google, incluindo sua organização do Google Cloud Platform (GCP). O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Usar o Google Cloud Directory Sync (GCDS) para sincronizar usuários no Cloud Identity."
      },
      {
        "id": "B",
        "text": "Usar as APIs do Cloud Identity e escrever um script para sincronizar usuários no Cloud Identity."
      },
      {
        "id": "C",
        "text": "Exportar usuários do Active Directory como um arquivo CSV e importá-los para o Cloud Identity pelo Admin Console."
      },
      {
        "id": "D",
        "text": "Pedir a cada funcionário que crie uma conta do Google usando o autocadastro. Exigir que cada funcionário use o endereço de e-mail e a senha da empresa."
      }
    ],
    "correct_answer": "A",
    "official_rationale": "O Google Cloud Directory Sync (GCDS) sincroniza automaticamente usuários e grupos de um servidor Active Directory/LDAP local para o Cloud Identity, mantendo o AD como a fonte da verdade.",
    "explanation_why_correct": "O **Google Cloud Directory Sync (GCDS)** é a ferramenta oficial e gratuita do Google para sincronizar automaticamente usuários, grupos e unidades organizacionais do **Active Directory** para o **Cloud Identity**, garantindo que o AD continue sendo a fonte da verdade.",
    "explanation_why_incorrect": "Escrever scripts manuais (B) ou importar CSVs manualmente (C) gera sobrecarga operacional e erros de sincronização. Permitir autocadastro de contas de consumidor (D) tira o controle centralizado da organização.",
    "additional_reading": [
      {
        "title": "Sobre o Google Cloud Directory Sync (GCDS)",
        "url": "https://cloud.google.com/architecture/identity/federating-gcp-with-active-directory-synchronizing-user-accounts"
      }
    ]
  },
  {
    "id": 10,
    "type": "single",
    "category": "Configurar um ambiente de solução em nuvem (17.5%)",
    "category_en": "Configurar um ambiente de solução em nuvem (17.5%)",
    "objective": "1.1 Isolar ambientes de desenvolvimento e produção usando projetos distintos",
    "what_it_tests": "Criar um novo projeto dedicado para produção garante isolamento total de rede (VPC separada sem rotas entre desenvolvimento e produção) e de IAM, seguindo as práticas recomendadas pelo Google.",
    "question": "Você criou com sucesso um ambiente de desenvolvimento em um projeto para um aplicativo. Esse aplicativo usa o Compute Engine e o Cloud SQL. Agora você precisa criar um ambiente de produção para esse aplicativo. A equipe de segurança proibiu a existência de rotas de rede entre esses 2 ambientes e pediu que você seguisse as práticas recomendadas pelo Google. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Criar um novo projeto, habilitar as APIs do Compute Engine e do Cloud SQL nesse projeto e replicar a configuração que você criou no ambiente de desenvolvimento."
      },
      {
        "id": "B",
        "text": "Criar uma nova sub-rede de produção na VPC existente e uma nova instância de produção do Cloud SQL no seu projeto existente, e implantar seu aplicativo usando esses recursos."
      },
      {
        "id": "C",
        "text": "Criar um novo projeto, modificar sua VPC existente para ser uma Shared VPC, compartilhar essa VPC com seu novo projeto e replicar a configuração que você tem no ambiente de desenvolvimento nesse novo projeto na Shared VPC."
      },
      {
        "id": "D",
        "text": "Pedir à equipe de segurança para conceder a você o papel de Project Editor em um projeto de produção existente usado por outra divisão da sua empresa. Assim que concederem esse papel, replicar a configuração que você tem no ambiente de desenvolvimento nesse projeto."
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Criar um novo projeto dedicado para produção garante isolamento total de rede (VPC separada sem rotas entre desenvolvimento e produção) e de IAM, seguindo as práticas recomendadas pelo Google.",
    "explanation_why_correct": "Criar um **novo projeto dedicado para produção**, habilitar as APIs necessárias e replicar a arquitetura garante **isolamento completo de rede e segurança** (sem rotas de rede entre as VPCs dos dois ambientes), conforme recomendado pelo Google.",
    "explanation_why_incorrect": "Usar a mesma VPC no mesmo projeto (B) ou compartilhar a mesma VPC via Shared VPC (C) mantém rotas de rede ativas entre os ambientes de desenvolvimento e produção, violando a exigência da equipe de segurança. Compartilhar o projeto de outra divisão (D) viola o isolamento de recursos.",
    "additional_reading": [
      {
        "title": "Decidir uma hierarquia de recursos para sua zona de pouso no Google Cloud",
        "url": "https://cloud.google.com/architecture/landing-zones/decide-resource-hierarchy"
      }
    ]
  },
  {
    "id": 11,
    "type": "single",
    "category": "Configurar acesso e segurança (20%)",
    "category_en": "Configurar acesso e segurança (20%)",
    "objective": "5.1 Conceder acesso de leitura a auditores externos com Domain Restricted Sharing ativo",
    "what_it_tests": "Quando a política Domain Restricted Sharing está ativa, apenas identidades pertencentes ao domínio permitido do Cloud Identity podem receber papéis do IAM; o papel Viewer permite visualizar todos os recursos do projeto sem modificá-los.",
    "question": "Sua gerência pediu a um auditor externo para revisar todos os recursos em um projeto específico. A equipe de segurança habilitou a Política da Organização chamada Compartilhamento Restrito por Domínio (Domain Restricted Sharing) no nó da organização, especificando apenas o seu domínio do Cloud Identity. Você deseja que o auditor possa apenas visualizar, mas não modificar, os recursos naquele projeto. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Pedir ao auditor sua conta do Google e conceder a ele o papel Viewer no projeto."
      },
      {
        "id": "B",
        "text": "Pedir ao auditor sua conta do Google e conceder a ele o papel Security Reviewer no projeto."
      },
      {
        "id": "C",
        "text": "Criar uma conta temporária para o auditor no Cloud Identity e conceder a essa conta o papel Viewer no projeto."
      },
      {
        "id": "D",
        "text": "Criar uma conta temporária para o auditor no Cloud Identity e conceder a essa conta o papel Security Reviewer no projeto."
      }
    ],
    "correct_answer": "C",
    "official_rationale": "Quando a política Domain Restricted Sharing está ativa, apenas identidades pertencentes ao domínio permitido do Cloud Identity podem receber papéis do IAM; o papel Viewer permite visualizar todos os recursos do projeto sem modificá-los.",
    "explanation_why_correct": "Como a política **Domain Restricted Sharing** bloqueia contas externas ao seu domínio, você deve **criar uma conta temporária para o auditor dentro do seu próprio domínio do Cloud Identity** e conceder a ela o papel **`Viewer` (`roles/viewer`)**, que permite visualizar todos os recursos do projeto sem permissão de modificação.",
    "explanation_why_incorrect": "Contas externas (A e B) serão bloqueadas pela política da organização. O papel `Security Reviewer` (`roles/iam.securityReviewer`, em B e D) permite visualizar políticas de IAM, mas pode não exibir configurações completas de todos os recursos como o `Viewer`.",
    "additional_reading": [
      {
        "title": "Restringir identidades por domínio no IAM",
        "url": "https://cloud.google.com/resource-manager/docs/organization-policy/restricting-domains"
      }
    ]
  },
  {
    "id": 12,
    "type": "single",
    "category": "Garantir a operação bem-sucedida de uma solução de nuvem (20%)",
    "category_en": "Garantir a operação bem-sucedida de uma solução de nuvem (20%)",
    "objective": "4.1 Automatizar backups e retenção de discos persistentes com programação de snapshots",
    "what_it_tests": "As programações de snapshots (snapshot schedules) de discos persistentes no Compute Engine automatizam backups incrementais regulares e oferecem política integrada de retenção (exclusão automática de snapshots antigos).",
    "question": "Você tem uma carga de trabalho executando no Compute Engine que é crítica para o seu negócio. Você deseja garantir que os dados no disco de inicialização (boot disk) dessa carga de trabalho tenham backup regularmente. Você precisa ser capaz de restaurar um backup o mais rápido possível em caso de desastre. Você também deseja que os backups mais antigos sejam limpos automaticamente para economizar custos. Você quer seguir as práticas recomendadas pelo Google. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Criar uma Cloud Function para criar um modelo de instância (instance template)."
      },
      {
        "id": "B",
        "text": "Criar uma programação de snapshots (snapshot schedule) para o disco usando o intervalo desejado."
      },
      {
        "id": "C",
        "text": "Criar um job 'cron' para criar um novo disco a partir do disco usando o 'gcloud'."
      },
      {
        "id": "D",
        "text": "Criar uma Cloud Task para criar uma imagem e exportá-la para o Cloud Storage."
      }
    ],
    "correct_answer": "B",
    "official_rationale": "As programações de snapshots (snapshot schedules) de discos persistentes no Compute Engine automatizam backups incrementais regulares e oferecem política integrada de retenção (exclusão automática de snapshots antigos).",
    "explanation_why_correct": "Criar uma **programação de snapshots (snapshot schedule)** anexada ao disco persistente é a prática nativa recomendada pelo Google para realizar backups periódicos automáticos, restauração rápida e **limpeza automática (política de retenção)** de snapshots antigos.",
    "explanation_why_incorrect": "Modelos de instância (A) não fazem backup de dados de discos. Criar novos discos via cron (C) ou exportar imagens para o Cloud Storage (D) é mais caro, mais lento para restaurar e exige automação personalizada desnecessária.",
    "additional_reading": [
      {
        "title": "Programar snapshots automatizados de discos persistentes",
        "url": "https://cloud.google.com/compute/docs/disks/scheduled-snapshots"
      }
    ]
  },
  {
    "id": 13,
    "type": "single",
    "category": "Configurar acesso e segurança (20%)",
    "category_en": "Configurar acesso e segurança (20%)",
    "objective": "5.1 Conceder permissão para visualizar logs de Acesso a Dados (Data Access logs)",
    "what_it_tests": "O papel predefinido 'roles/logging.privateLogViewer' concede acesso a todos os logs do Cloud Logging, incluindo os logs confidenciais de Acesso a Dados (Data Access audit logs), sem necessidade de exportar para o Cloud Storage.",
    "question": "Você precisa atribuir um papel do Cloud Identity and Access Management (Cloud IAM) a um auditor externo. O auditor precisa ter permissões para revisar seus Logs de Auditoria do Google Cloud Platform (GCP) e também para revisar seus logs de Acesso a Dados (Data Access logs). O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Atribuir ao auditor o papel do IAM 'roles/logging.privateLogViewer'. Realizar a exportação de logs para o Cloud Storage."
      },
      {
        "id": "B",
        "text": "Atribuir ao auditor o papel do IAM 'roles/logging.privateLogViewer'. Orientar o auditor a revisar também os logs para alterações na política do Cloud IAM."
      },
      {
        "id": "C",
        "text": "Atribuir o usuário do IAM do auditor a um papel personalizado que tenha a permissão 'logging.privateLogEntries.list'. Realizar a exportação de logs para o Cloud Storage."
      },
      {
        "id": "D",
        "text": "Atribuir o usuário do IAM do auditor a um papel personalizado que tenha a permissão 'logging.privateLogEntries.list'. Orientar o auditor a revisar também os logs para alterações na política do Cloud IAM."
      }
    ],
    "correct_answer": "B",
    "official_rationale": "O papel predefinido 'roles/logging.privateLogViewer' concede acesso a todos os logs do Cloud Logging, incluindo os logs confidenciais de Acesso a Dados (Data Access audit logs), sem necessidade de exportar para o Cloud Storage.",
    "explanation_why_correct": "O papel predefinido **`roles/logging.privateLogViewer` (Private Logs Viewer)** inclui as permissões para visualizar tanto os logs padrão quanto os **Data Access audit logs** diretamente no Cloud Logging, onde o auditor também pode inspecionar alterações nas políticas do IAM.",
    "explanation_why_incorrect": "Não é necessário exportar logs para o Cloud Storage (A e C) para que o auditor os visualize no Cloud Logging, e as práticas recomendadas indicam usar o papel predefinido `roles/logging.privateLogViewer` em vez de criar papéis personalizados (C e D).",
    "additional_reading": [
      {
        "title": "Controle de acesso aos logs de auditoria no Cloud Logging",
        "url": "https://cloud.google.com/logging/docs/audit#access-control"
      }
    ]
  },
  {
    "id": 14,
    "type": "single",
    "category": "Garantir a operação bem-sucedida de uma solução de nuvem (20%)",
    "category_en": "Garantir a operação bem-sucedida de uma solução de nuvem (20%)",
    "objective": "4.3 Exportar e analisar logs combinados de múltiplos projetos por 60 dias",
    "what_it_tests": "Como a retenção padrão de muitos logs no Cloud Logging é de 30 dias e o requisito pede exploração e análise rápida de múltiplos projetos por 60 dias, a recomendação é exportar os logs via Sink para o BigQuery com expiração de tabela de 60 dias.",
    "question": "Você está gerenciando vários projetos do Google Cloud Platform (GCP) e precisa de acesso a todos os logs dos últimos 60 dias. Você deseja poder explorar e analisar rapidamente o conteúdo dos logs. Você quer seguir as práticas recomendadas pelo Google para obter os logs combinados de todos os projetos. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Navegar até o Stackdriver Logging e selecionar 'resource.labels.project_id=\"*\"'."
      },
      {
        "id": "B",
        "text": "Criar uma Exportação do Stackdriver Logging (Log Router Sink) com um destino de coletor (Sink) para um conjunto de dados do BigQuery. Configurar a expiração da tabela para 60 dias."
      },
      {
        "id": "C",
        "text": "Criar uma Exportação do Stackdriver Logging com um destino de coletor (Sink) para o Cloud Storage. Criar uma regra de ciclo de vida para excluir objetos após 60 dias."
      },
      {
        "id": "D",
        "text": "Configurar um job do Cloud Scheduler para ler do Stackdriver e armazenar os logs no BigQuery. Configurar a expiração da tabela para 60 dias."
      }
    ],
    "correct_answer": "B",
    "official_rationale": "Como a retenção padrão de muitos logs no Cloud Logging é de 30 dias e o requisito pede exploração e análise rápida de múltiplos projetos por 60 dias, a recomendação é exportar os logs via Sink para o BigQuery com expiração de tabela de 60 dias.",
    "explanation_why_correct": "Criar um **coletor de exportação (Sink) do Cloud Logging apontando para um dataset do BigQuery** e configurar a **expiração das tabelas para 60 dias** permite reter os logs além do padrão de 30 dias e analisá-los rapidamente de forma consolidada com consultas SQL.",
    "explanation_why_incorrect": "A retenção padrão do bucket `_Default` no Cloud Logging é de 30 dias (A). O Cloud Storage (C) é indicado para arquivamento frio de longo prazo, não para exploração e análise rápida. Usar o Cloud Scheduler (D) é desnecessário pois o Cloud Logging possui Sinks nativos.",
    "additional_reading": [
      {
        "title": "Roteamento e exportação de logs para o BigQuery",
        "url": "https://cloud.google.com/logging/docs/export/configure_export_v2"
      }
    ]
  },
  {
    "id": 15,
    "type": "single",
    "category": "Configurar um ambiente de solução em nuvem (17.5%)",
    "category_en": "Configurar um ambiente de solução em nuvem (17.5%)",
    "objective": "1.1 Encerrar um projeto do Google Cloud para interromper cobranças",
    "what_it_tests": "Encerrar (Shut down) o projeto como Project Owner interrompe imediatamente o faturamento e todos os serviços dentro do projeto no menor número de etapas.",
    "question": "Você precisa reduzir os custos de serviços do GCP para uma divisão da sua empresa usando o menor número possível de etapas. Você precisa desligar todos os serviços configurados em um projeto existente do GCP. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "1. Verificar se você possui o papel do IAM Project Owner atribuído para este projeto. 2. Localizar o projeto no console do GCP, clicar em 'Shut down' (Encerrar) e inserir o ID do projeto."
      },
      {
        "id": "B",
        "text": "1. Verificar se você possui o papel do IAM Project Owner atribuído para este projeto. 2. Alternar para o projeto no console do GCP, localizar os recursos e excluí-los."
      },
      {
        "id": "C",
        "text": "1. Verificar se você possui o papel do IAM Organizational Administrator atribuído para este projeto. 2. Localizar o projeto no console do GCP, inserir o ID do projeto e clicar em 'Shut down' (Encerrar)."
      },
      {
        "id": "D",
        "text": "1. Verificar se você possui o papel do IAM Organizational Administrator atribuído para este projeto. 2. Alternar para o projeto no console do GCP, localizar os recursos e excluí-los."
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Encerrar (Shut down) o projeto como Project Owner interrompe imediatamente o faturamento e todos os serviços dentro do projeto no menor número de etapas.",
    "explanation_why_correct": "Para desligar todos os serviços e interromper imediatamente as cobranças com o menor número de etapas, você deve ter o papel **Project Owner** no projeto, acessá-lo no Console do GCP, clicar em **'Shut down' (Encerrar)** e confirmar com o ID do projeto.",
    "explanation_why_incorrect": "Localizar e excluir cada recurso individualmente (B e D) é trabalhoso e sujeito a esquecer recursos cobráveis. O papel Organization Administrator por si só (C) gerencia políticas de IAM na organização, mas a permissão `resourcemanager.projects.delete` pertence ao Project Owner.",
    "additional_reading": [
      {
        "title": "Encerrar (excluir) projetos no Google Cloud",
        "url": "https://cloud.google.com/resource-manager/docs/creating-managing-projects#shutting_down_projects"
      }
    ]
  },
  {
    "id": 16,
    "type": "single",
    "category": "Configurar acesso e segurança (20%)",
    "category_en": "Configurar acesso e segurança (20%)",
    "objective": "5.2 Conceder acesso entre projetos para contas de serviço consultarem dados no BigQuery",
    "what_it_tests": "Pelo princípio do menor privilégio, a conta de serviço de web-applications deve receber 'roles/bigquery.dataViewer' no projeto onde estão os dados (crm-databases-proj) e os papéis necessários (como bigquery.jobUser) em seu próprio projeto.",
    "question": "Você está configurando contas de serviço para um aplicativo que abrange vários projetos. As máquinas virtuais (VMs) em execução no projeto web-applications precisam de acesso aos conjuntos de dados do BigQuery em crm-databases-proj. Você deseja seguir as práticas recomendadas pelo Google para conceder acesso à conta de serviço no projeto web-applications. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Conceder ao “project owner” de web-applications papéis apropriados para crm-databases-proj."
      },
      {
        "id": "B",
        "text": "Conceder o papel “project owner” para crm-databases-proj e para o projeto web-applications."
      },
      {
        "id": "C",
        "text": "Conceder o papel “project owner” para crm-databases-proj e o papel bigquery.dataViewer para web-applications."
      },
      {
        "id": "D",
        "text": "Conceder o papel bigquery.dataViewer em crm-databases-proj e papéis apropriados em web-applications."
      }
    ],
    "correct_answer": "D",
    "official_rationale": "Pelo princípio do menor privilégio, a conta de serviço de web-applications deve receber 'roles/bigquery.dataViewer' no projeto onde estão os dados (crm-databases-proj) e os papéis necessários (como bigquery.jobUser) em seu próprio projeto.",
    "explanation_why_correct": "Seguindo o princípio do menor privilégio, você deve conceder à conta de serviço o papel **`bigquery.dataViewer` no projeto `crm-databases-proj`** (para ler os datasets) e os **papéis apropriados no projeto `web-applications`** (para executar as VMs e jobs).",
    "explanation_why_incorrect": "Conceder o papel primitivo `Project Owner` (A, B e C) viola gravemente o princípio do menor privilégio do Google Cloud IAM.",
    "additional_reading": [
      {
        "title": "Conceder acesso a conjuntos de dados do BigQuery",
        "url": "https://cloud.google.com/bigquery/docs/dataset-access-controls"
      }
    ]
  },
  {
    "id": 17,
    "type": "single",
    "category": "Garantir a operação bem-sucedida de uma solução de nuvem (20%)",
    "category_en": "Garantir a operação bem-sucedida de uma solução de nuvem (20%)",
    "objective": "4.3 Auditar acesso de usuários a dados confidenciais usando Data Access audit logs",
    "what_it_tests": "Os Data Access audit logs registram chamadas de API que leem dados fornecidos pelo usuário (DATA_READ), permitindo auditar se um principal (e-mail do usuário) acessou dados confidenciais.",
    "question": "Um funcionário foi demitido, mas seu acesso ao Google Cloud só foi removido 2 semanas depois. Você precisa descobrir se esse funcionário acessou alguma informação confidencial de clientes após sua demissão. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Visualizar os Logs de Eventos do Sistema (System Event Logs) no Cloud Logging. Pesquisar pelo e-mail do usuário como o principal."
      },
      {
        "id": "B",
        "text": "Visualizar os Logs de Eventos do Sistema (System Event Logs) no Cloud Logging. Pesquisar pela conta de serviço associada ao usuário."
      },
      {
        "id": "C",
        "text": "Visualizar os logs de auditoria de Acesso a Dados (Data Access audit logs) no Cloud Logging. Pesquisar pelo e-mail do usuário como o principal."
      },
      {
        "id": "D",
        "text": "Visualizar o log de Atividades do Administrador (Admin Activity log) no Cloud Logging. Pesquisar pela conta de serviço associada ao usuário."
      }
    ],
    "correct_answer": "C",
    "official_rationale": "Os Data Access audit logs registram chamadas de API que leem dados fornecidos pelo usuário (DATA_READ), permitindo auditar se um principal (e-mail do usuário) acessou dados confidenciais.",
    "explanation_why_correct": "Os **logs de auditoria de Acesso a Dados (Data Access audit logs)** registram operações que leem configurações ou dados armazenados pelo usuário (`DATA_READ` e `DATA_WRITE`). Pesquisar por esses logs usando o **e-mail do usuário como principal (`protoPayload.authenticationInfo.principalEmail`)** revela se ele acessou dados confidenciais.",
    "explanation_why_incorrect": "System Event Logs (A e B) registram apenas ações internas automatizadas do Google Cloud, não ações de usuários. Admin Activity logs (D) registram apenas alterações de metadados/criação de recursos, e não leituras de dados confidenciais.",
    "additional_reading": [
      {
        "title": "Visão geral dos Logs de Auditoria do Cloud (Cloud Audit Logs)",
        "url": "https://cloud.google.com/logging/docs/audit"
      }
    ]
  },
  {
    "id": 18,
    "type": "single",
    "category": "Configurar acesso e segurança (20%)",
    "category_en": "Configurar acesso e segurança (20%)",
    "objective": "5.1 Definir níveis de suporte de permissões e estágio de lançamento em papéis personalizados do IAM",
    "what_it_tests": "Para uso em produção, as permissões de um papel personalizado devem ter nível de suporte 'supported', e a primeira versão em fase inicial de testes internos deve usar o estágio de lançamento 'ALPHA'.",
    "question": "Você precisa criar um papel personalizado do IAM para uso com um serviço do GCP. Todas as permissões no papel devem ser adequadas para uso em produção. Você também deseja compartilhar claramente com sua organização o status do papel personalizado. Esta será a primeira versão do papel personalizado. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Usar permissões em seu papel que utilizem o nível de suporte ‘supported’ para permissões de papel. Definir o estágio do papel (role stage) como ALPHA enquanto testa as permissões do papel."
      },
      {
        "id": "B",
        "text": "Usar permissões em seu papel que utilizem o nível de suporte ‘supported’ para permissões de papel. Definir o estágio do papel como BETA enquanto testa as permissões do papel."
      },
      {
        "id": "C",
        "text": "Usar permissões em seu papel que utilizem o nível de suporte ‘testing’ para permissões de papel. Definir o estágio do papel como ALPHA enquanto testa as permissões do papel."
      },
      {
        "id": "D",
        "text": "Usar permissões em seu papel que utilizem o nível de suporte ‘testing’ para permissões de papel. Definir o estágio do papel como BETA enquanto testa as permissões do papel."
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Para uso em produção, as permissões de um papel personalizado devem ter nível de suporte 'supported', e a primeira versão em fase inicial de testes internos deve usar o estágio de lançamento 'ALPHA'.",
    "explanation_why_correct": "Para garantir que todas as permissões sejam adequadas para produção, você deve escolher permissões com nível de suporte **`supported`**. Para comunicar à organização que esta é a **primeira versão em teste inicial**, você deve definir o estágio de lançamento (`stage`) do papel personalizado como **`ALPHA`**.",
    "explanation_why_incorrect": "Permissões com nível `testing` (C e D) não têm SLA para produção. O estágio `BETA` (B) indica uma versão já testada anteriormente, enquanto `ALPHA` representa a primeira versão em desenvolvimento/teste inicial.",
    "additional_reading": [
      {
        "title": "Criar e gerenciar papéis personalizados do IAM",
        "url": "https://cloud.google.com/iam/docs/creating-custom-roles"
      }
    ]
  },
  {
    "id": 19,
    "type": "single",
    "category": "Planejar e configurar uma solução de nuvem (17.5%)",
    "category_en": "Planejar e configurar uma solução de nuvem (17.5%)",
    "objective": "2.3 Ingerir dados não estruturados para processamento ETL no Dataflow",
    "what_it_tests": "O Cloud Storage é o armazenamento de objetos ideal para dados não estruturados em múltiplos formatos de arquivo e integra-se nativamente como fonte de entrada para pipelines ETL do Cloud Dataflow.",
    "question": "Sua empresa possui uma grande quantidade de dados não estruturados em diferentes formatos de arquivo. Você deseja realizar transformações ETL nos dados. Você precisa tornar os dados acessíveis no Google Cloud para que possam ser processados por um job do Dataflow. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Fazer o upload dos dados para o BigQuery usando a ferramenta de linha de comando 'bq'."
      },
      {
        "id": "B",
        "text": "Fazer o upload dos dados para o Cloud Storage usando a ferramenta de linha de comando 'gsutil'."
      },
      {
        "id": "C",
        "text": "Fazer o upload dos dados para o Cloud SQL usando a função de importação no console."
      },
      {
        "id": "D",
        "text": "Fazer o upload dos dados para o Cloud Spanner usando a função de importação no console."
      }
    ],
    "correct_answer": "B",
    "official_rationale": "O Cloud Storage é o armazenamento de objetos ideal para dados não estruturados em múltiplos formatos de arquivo e integra-se nativamente como fonte de entrada para pipelines ETL do Cloud Dataflow.",
    "explanation_why_correct": "Como os dados são **não estruturados e estão em diferentes formatos de arquivo**, você deve fazer o upload deles para o **Cloud Storage usando a ferramenta `gsutil`**, onde um pipeline do **Dataflow** pode lê-los diretamente para realizar o ETL.",
    "explanation_why_incorrect": "BigQuery (A), Cloud SQL (C) e Cloud Spanner (D) são bancos de dados estruturados/relacionais, não sendo adequados para armazenar diretamente arquivos brutos não estruturados de múltiplos formatos antes do ETL.",
    "additional_reading": [
      {
        "title": "Transferir dados para o Cloud Storage com gsutil",
        "url": "https://cloud.google.com/storage/docs/gsutil"
      }
    ]
  },
  {
    "id": 20,
    "type": "single",
    "category": "Configurar um ambiente de solução em nuvem (17.5%)",
    "category_en": "Configurar um ambiente de solução em nuvem (17.5%)",
    "objective": "1.2 Gerenciar múltiplos projetos no Cloud SDK com configurações nomeadas",
    "what_it_tests": "A maneira recomendada no Cloud SDK para gerenciar vários projetos rapidamente é criar uma configuração nomeada para cada projeto e ativar a configuração correspondente com 'gcloud config configurations activate'.",
    "question": "Você precisa gerenciar vários projetos do Google Cloud no menor número possível de etapas. Você deseja configurar a interface de linha de comando (CLI) do Google Cloud SDK para poder gerenciar facilmente vários projetos. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "1. Criar uma configuração para cada projeto que você precisa gerenciar. 2. Ativar a configuração apropriada quando trabalhar com cada um dos seus projetos atribuídos do Google Cloud."
      },
      {
        "id": "B",
        "text": "1. Criar uma configuração para cada projeto que você precisa gerenciar. 2. Usar 'gcloud init' para atualizar os valores de configuração quando precisar trabalhar com um projeto não padrão."
      },
      {
        "id": "C",
        "text": "1. Usar a configuração padrão para um projeto que você precisa gerenciar. 2. Ativar a configuração apropriada quando trabalhar com cada um dos seus projetos atribuídos do Google Cloud."
      },
      {
        "id": "D",
        "text": "1. Usar a configuração padrão para um projeto que você precisa gerenciar. 2. Usar 'gcloud init' para atualizar os valores de configuração quando precisar trabalhar com um projeto não padrão."
      }
    ],
    "correct_answer": "A",
    "official_rationale": "A maneira recomendada no Cloud SDK para gerenciar vários projetos rapidamente é criar uma configuração nomeada para cada projeto e ativar a configuração correspondente com 'gcloud config configurations activate'.",
    "explanation_why_correct": "**Criar uma configuração separada para cada projeto** (`gcloud config configurations create`) e **ativar a configuração apropriada** (`gcloud config configurations activate`) permite alternar entre projetos instantaneamente com um único comando.",
    "explanation_why_incorrect": "Executar `gcloud init` (B e D) toda vez que mudar de projeto exige passar por um assistente interativo de várias etapas. Na opção C, não foram criadas configurações para os demais projetos.",
    "additional_reading": [
      {
        "title": "Gerenciar configurações da CLI gcloud",
        "url": "https://cloud.google.com/sdk/docs/configurations"
      }
    ]
  },
  {
    "id": 21,
    "type": "single",
    "category": "Garantir a operação bem-sucedida de uma solução de nuvem (20%)",
    "category_en": "Garantir a operação bem-sucedida de uma solução de nuvem (20%)",
    "objective": "4.1 Resolver falhas de criação de instâncias em Grupos Gerenciados de Instâncias (MIGs)",
    "what_it_tests": "Quando 'disks.autoDelete' está como false e uma instância do MIG é recriada com o mesmo nome, a criação falha porque o disco persistente antigo com aquele nome ainda existe; excluem-se os discos órfãos e garante-se 'disks.autoDelete: true'.",
    "question": "Seu grupo gerenciado de instâncias (MIG) gerou um alerta informando que a criação de novas instâncias falhou ao criar novas instâncias. Você precisa manter o número de instâncias em execução especificado pelo modelo para poder processar o tráfego esperado do aplicativo. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Criar um modelo de instância que contenha sintaxe válida que será usada pelo grupo de instâncias. Excluir quaisquer discos persistentes com o mesmo nome dos nomes das instâncias."
      },
      {
        "id": "B",
        "text": "Criar um modelo de instância que contenha sintaxe válida que será usada pelo grupo de instâncias. Verificar se os valores do nome da instância e do nome do disco persistente não são os mesmos no modelo."
      },
      {
        "id": "C",
        "text": "Verificar se o modelo de instância usado pelo grupo de instâncias contém sintaxe válida. Excluir quaisquer discos persistentes com o mesmo nome dos nomes das instâncias. Definir a propriedade 'disks.autoDelete' como 'true' no modelo de instância."
      },
      {
        "id": "D",
        "text": "Excluir o modelo de instância atual e substituí-lo por um novo modelo de instância. Verificar se os valores do nome da instância e do nome do disco persistente não são os mesmos no modelo. Definir a propriedade 'disks.autoDelete' como 'true' no modelo de instância."
      }
    ],
    "correct_answer": "C",
    "official_rationale": "Quando 'disks.autoDelete' está como false e uma instância do MIG é recriada com o mesmo nome, a criação falha porque o disco persistente antigo com aquele nome ainda existe; excluem-se os discos órfãos e garante-se 'disks.autoDelete: true'.",
    "explanation_why_correct": "Se um disco persistente anterior não foi excluído automaticamente quando uma VM foi encerrada, a tentativa do MIG de recriar a VM com o mesmo nome falha por conflito de nome do disco. Você deve **verificar a sintaxe do modelo, excluir os discos persistentes órfãos com o mesmo nome das instâncias e garantir que `disks.autoDelete` esteja definido como `true`**.",
    "explanation_why_incorrect": "As opções A e B não habilitam `disks.autoDelete = true` (o problema voltaria a ocorrer) ou não limpam os discos conflitantes existentes (B). Na opção D, não é possível excluir um modelo de instância enquanto ele estiver em uso ativo pelo MIG.",
    "additional_reading": [
      {
        "title": "Solucionar problemas em grupos gerenciados de instâncias",
        "url": "https://cloud.google.com/compute/docs/instance-groups/troubleshooting-migs"
      }
    ]
  },
  {
    "id": 22,
    "type": "single",
    "category": "Implantar e implementar uma solução de nuvem (25%)",
    "category_en": "Implantar e implementar uma solução de nuvem (25%)",
    "objective": "3.5 Provisionar ambientes de desenvolvimento rapidamente usando o Cloud Marketplace",
    "what_it_tests": "O Cloud Marketplace permite que cada equipe de desenvolvimento implante ambientes Cassandra pré-configurados e isolados em poucos cliques, com esforço mínimo de suporte.",
    "question": "Sua empresa está migrando de um ambiente local (on-premises) para o Google Cloud. Você tem várias equipes de desenvolvimento que usam ambientes Cassandra como bancos de dados de backend. Todas elas precisam de um ambiente de desenvolvimento isolado de outras instâncias do Cassandra. Você deseja migrar para o Google Cloud rapidamente e com o mínimo de esforço de suporte. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "1. Criar um guia de instruções para instalar o Cassandra no Google Cloud. 2. Tornar o guia de instruções acessível aos seus desenvolvedores."
      },
      {
        "id": "B",
        "text": "1. Orientar seus desenvolvedores a acessar o Cloud Marketplace. 2. Pedir aos desenvolvedores que iniciem uma imagem do Cassandra para seu trabalho de desenvolvimento."
      },
      {
        "id": "C",
        "text": "1. Construir uma instância do Compute Engine com Cassandra e tirar um snapshot dela. 2. Usar o snapshot para criar instâncias para seus desenvolvedores."
      },
      {
        "id": "D",
        "text": "1. Construir uma instância do Compute Engine com Cassandra e tirar um snapshot dela. 2. Fazer o upload do snapshot para o Cloud Storage e torná-lo acessível aos seus desenvolvedores. 3. Criar instruções para criar uma instância do Compute Engine a partir do snapshot para que os desenvolvedores possam fazer isso sozinhos."
      }
    ],
    "correct_answer": "B",
    "official_rationale": "O Cloud Marketplace permite que cada equipe de desenvolvimento implante ambientes Cassandra pré-configurados e isolados em poucos cliques, com esforço mínimo de suporte.",
    "explanation_why_correct": "Orientar os desenvolvedores a **implantar uma imagem pré-configurada do Cassandra diretamente pelo Cloud Marketplace** é a forma mais rápida, padronizada e que exige o menor esforço de suporte operacional.",
    "explanation_why_incorrect": "Escrever guias de instalação manual (A) ou gerenciar snapshots manualmente para todas as equipes (C e D) exige muito mais tempo e esforço contínuo de suporte e manutenção.",
    "additional_reading": [
      {
        "title": "Implantar soluções no Cloud Marketplace",
        "url": "https://cloud.google.com/marketplace/docs"
      }
    ]
  },
  {
    "id": 23,
    "type": "single",
    "category": "Garantir a operação bem-sucedida de uma solução de nuvem (20%)",
    "category_en": "Garantir a operação bem-sucedida de uma solução de nuvem (20%)",
    "objective": "4.3 Configurar políticas de alerta de uso de CPU no Cloud Monitoring",
    "what_it_tests": "O Compute Engine envia automaticamente métricas de utilização de CPU para o Cloud Monitoring (Stackdriver), permitindo criar diretamente uma Alerting Policy para CPU > 90% por 15 minutos com canal de notificação por e-mail.",
    "question": "Você tem uma instância do Compute Engine hospedando um aplicativo de produção. Você deseja receber um e-mail se a instância consumir mais de 90% de seus recursos de CPU por mais de 15 minutos. Você deseja usar os serviços do Google. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "1. Criar uma conta do Gmail de consumidor. 2. Escrever um script que monitore o uso de CPU. 3. Quando o uso de CPU exceder o limite, fazer com que esse script envie um e-mail usando a conta do Gmail e 'smtp.gmail.com' na porta 25 como servidor SMTP."
      },
      {
        "id": "B",
        "text": "1. Criar um Workspace do Stackdriver (Cloud Monitoring) e associar seu projeto do Google Cloud Platform (GCP) a ele. 2. Criar uma Política de Alerta (Alerting Policy) no Stackdriver que use o limite como condição de acionamento. 3. Configurar seu endereço de e-mail no canal de notificação."
      },
      {
        "id": "C",
        "text": "1. Criar um Workspace do Stackdriver e associar seu projeto do GCP a ele. 2. Escrever um script que monitore o uso de CPU e o envie como uma métrica personalizada para o Stackdriver. 3. Criar uma verificação de tempo de atividade (uptime check) para a instância no Stackdriver."
      },
      {
        "id": "D",
        "text": "1. No Stackdriver Logging, criar uma métrica baseada em logs para extrair o uso de CPU usando esta expressão regular: 'CPU Usage: ([0-9]{1,3})%'. 2. No Stackdriver Monitoring, criar uma Política de Alerta com base nessa métrica. 3. Configurar seu endereço de e-mail no canal de notificação."
      }
    ],
    "correct_answer": "B",
    "official_rationale": "O Compute Engine envia automaticamente métricas de utilização de CPU para o Cloud Monitoring (Stackdriver), permitindo criar diretamente uma Alerting Policy para CPU > 90% por 15 minutos com canal de notificação por e-mail.",
    "explanation_why_correct": "O Compute Engine já reporta nativamente a utilização de CPU ao **Stackdriver Monitoring (Cloud Monitoring)**. Basta associar o projeto ao Workspace/escopo de métricas, **criar uma Política de Alerta (Alerting Policy)** com a condição de CPU > 90% por 15 minutos e configurar seu **e-mail como canal de notificação**.",
    "explanation_why_incorrect": "A porta 25 é bloqueada por padrão no Compute Engine e scripts manuais são desnecessários (A). Não é necessário criar métricas personalizadas/uptime checks (C) nem métricas baseadas em logs (D), pois a métrica de CPU da VM já é nativa no Cloud Monitoring.",
    "additional_reading": [
      {
        "title": "Gerenciar políticas de alerta no Cloud Monitoring",
        "url": "https://cloud.google.com/monitoring/alerts"
      }
    ]
  },
  {
    "id": 24,
    "type": "single",
    "category": "Garantir a operação bem-sucedida de uma solução de nuvem (20%)",
    "category_en": "Garantir a operação bem-sucedida de uma solução de nuvem (20%)",
    "objective": "4.2 Automatizar o escalonamento do Cloud Spanner usando Cloud Monitoring e Cloud Functions",
    "what_it_tests": "Para escalonar automaticamente o número de nós de uma instância do Cloud Spanner com base na carga real, usa-se uma política de alerta do Cloud Monitoring acionando via webhook/Pub/Sub uma Cloud Function que chama a API do Spanner para ajustar os nós.",
    "question": "Você tem um aplicativo que usa o Cloud Spanner como banco de dados de backend. O aplicativo tem um padrão de tráfego muito previsível. Você deseja escalonar automaticamente para cima ou para baixo o número de nós do Spanner dependendo do tráfego. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Criar um job 'cron' que seja executado de forma programada para revisar as métricas do Cloud Monitoring e, em seguida, redimensionar a instância do Spanner de acordo."
      },
      {
        "id": "B",
        "text": "Criar uma política de alerta do Cloud Monitoring para enviar um alerta para os e-mails da equipe de SRE de plantão quando a CPU do Cloud Spanner exceder o limite. Os SREs escalonariam os recursos para cima ou para baixo de acordo."
      },
      {
        "id": "C",
        "text": "Criar uma política de alerta do Cloud Monitoring para enviar um alerta para o e-mail do Suporte do Google Cloud quando a CPU do Cloud Spanner exceder seu limite. O suporte do Google escalonaria os recursos para cima ou para baixo de acordo."
      },
      {
        "id": "D",
        "text": "Criar uma política de alerta do Cloud Monitoring para enviar um alerta para um webhook quando a CPU do Cloud Spanner estiver acima ou abaixo do seu limite. Criar uma Cloud Function que escute HTTP e redimensione os recursos do Spanner de acordo."
      }
    ],
    "correct_answer": "D",
    "official_rationale": "Para escalonar automaticamente o número de nós de uma instância do Cloud Spanner com base na carga real, usa-se uma política de alerta do Cloud Monitoring acionando via webhook/Pub/Sub uma Cloud Function que chama a API do Spanner para ajustar os nós.",
    "explanation_why_correct": "Criar uma **política de alerta no Cloud Monitoring** que dispara um **webhook** quando a CPU do Cloud Spanner fica acima ou abaixo do limite, acionando uma **Cloud Function** que redimensiona automaticamente o número de nós da instância, fornece escalonamento totalmente automatizado e reativo ao tráfego.",
    "explanation_why_incorrect": "Alertar SREs por e-mail (B) exige intervenção manual, e o Suporte do Google (C) não redimensiona recursos do cliente. Um job cron fixo (A) é menos integrado do que o acionamento direto por alerta de métricas via Cloud Function.",
    "additional_reading": [
      {
        "title": "Escalonamento automático do Cloud Spanner com Cloud Functions",
        "url": "https://cloud.google.com/architecture/autoscaling-cloud-spanner"
      }
    ]
  },
  {
    "id": 25,
    "type": "single",
    "category": "Configurar um ambiente de solução em nuvem (17.5%)",
    "category_en": "Configurar um ambiente de solução em nuvem (17.5%)",
    "objective": "1.1 Monitorar custos granulares de tráfego de saída (egress) via exportação do Billing para o BigQuery",
    "what_it_tests": "Como há outros aplicativos no mesmo projeto e é necessário medir especificamente o custo oficial de egress daquela instância medido pelo Google Cloud, exportam-se os dados do Cloud Billing para o BigQuery e consulta-se periodicamente via Cloud Function.",
    "question": "Sua empresa publica arquivos grandes em um servidor web Apache que é executado em uma instância do Compute Engine. O servidor web Apache não é o único aplicativo em execução no projeto. Você deseja receber um e-mail quando os custos de rede de saída (egress) para esse servidor excederem 100 dólares no mês atual, conforme medido pelo Google Cloud. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Configurar um alerta de orçamento no projeto com um valor de 100 dólares, um limite de 100% e tipo de notificação “e-mail”."
      },
      {
        "id": "B",
        "text": "Configurar um alerta de orçamento na conta de faturamento com um valor de 100 dólares, um limite de 100% e tipo de notificação “e-mail”."
      },
      {
        "id": "C",
        "text": "Exportar os dados de faturamento para o BigQuery. Criar uma Cloud Function que use o BigQuery para somar os custos de rede de saída (egress) dos dados de faturamento exportados para o servidor web Apache no mês atual e envie um e-mail se ultrapassar 100 dólares. Agendar a Cloud Function usando o Cloud Scheduler para ser executada a cada hora."
      },
      {
        "id": "D",
        "text": "Usar o Agente do Cloud Logging para exportar os logs do servidor web Apache para o Cloud Logging. Criar uma Cloud Function que use o BigQuery para analisar os dados de log de resposta HTTP no Cloud Logging para o mês atual e envie um e-mail se o tamanho de todas as respostas HTTP, multiplicado pelos preços atuais de saída do Google Cloud, totalizar mais de 100 dólares. Agendar a Cloud Function usando o Cloud Scheduler para ser executada a cada hora."
      }
    ],
    "correct_answer": "C",
    "official_rationale": "Como há outros aplicativos no mesmo projeto e é necessário medir especificamente o custo oficial de egress daquela instância medido pelo Google Cloud, exportam-se os dados do Cloud Billing para o BigQuery e consulta-se periodicamente via Cloud Function.",
    "explanation_why_correct": "Como outros aplicativos rodam no mesmo projeto, um orçamento no nível do projeto ou da conta de faturamento (A e B) incluiria custos de todos os recursos. **Exportar os dados de faturamento para o BigQuery** e consultar periodicamente (via **Cloud Scheduler + Cloud Function**) os custos de egress da instância específica do Apache mede exatamente o valor cobrado pelo Google Cloud.",
    "explanation_why_incorrect": "Orçamentos no projeto (A) ou na conta de faturamento (B) somam todos os recursos do projeto/conta. Estimar custos somando logs HTTP do Apache (D) é impreciso e não reflete o faturamento oficial medido pelo Google Cloud.",
    "additional_reading": [
      {
        "title": "Exportar dados do Cloud Billing para o BigQuery",
        "url": "https://cloud.google.com/billing/docs/how-to/export-data-bigquery"
      }
    ]
  },
  {
    "id": 26,
    "type": "single",
    "category": "Planejar e configurar uma solução de nuvem (17.5%)",
    "category_en": "Planejar e configurar uma solução de nuvem (17.5%)",
    "objective": "2.1 Estimar custos mensais de soluções usando a Calculadora de Preços do Google Cloud",
    "what_it_tests": "A Calculadora de Preços do Google Cloud (Google Cloud Pricing Calculator) é a ferramenta oficial recomendada para estimar os custos mensais totais de uma arquitetura composta por múltiplos produtos.",
    "question": "Você projetou uma solução no Google Cloud que usa vários produtos do Google Cloud. Sua empresa pediu que você estimasse os custos da solução. Você precisa fornecer estimativas para o custo total mensal. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Para cada produto do Google Cloud na solução, revisar os detalhes de preços na página de preços dos produtos. Usar a calculadora de preços (Pricing Calculator) para totalizar os custos mensais de cada produto do Google Cloud."
      },
      {
        "id": "B",
        "text": "Para cada produto do Google Cloud na solução, revisar os detalhes de preços na página de preços dos produtos. Criar uma planilha do Google Sheets que resuma os custos mensais esperados para cada produto."
      },
      {
        "id": "C",
        "text": "Provisionar a solução no Google Cloud. Deixar a solução provisionada por 1 semana. Navegar até a página Relatório de Faturamento (Billing Report) no Cloud Console. Multiplicar o custo de 1 semana para determinar os custos mensais."
      },
      {
        "id": "D",
        "text": "Provisionar a solução no Google Cloud. Deixar a solução provisionada por 1 semana. Usar o Cloud Monitoring para determinar as quantidades de recursos provisionados e usados. Multiplicar o custo de 1 semana para determinar os custos mensais."
      }
    ],
    "correct_answer": "A",
    "official_rationale": "A Calculadora de Preços do Google Cloud (Google Cloud Pricing Calculator) é a ferramenta oficial recomendada para estimar os custos mensais totais de uma arquitetura composta por múltiplos produtos.",
    "explanation_why_correct": "A prática recomendada pelo Google para estimar custos antes da implantação é revisar os detalhes de cada serviço e **usar a Calculadora de Preços do Google Cloud (Pricing Calculator)**, que aplica automaticamente faixas gratuitas, descontos por uso contínuo/compromisso e consolida o custo mensal total.",
    "explanation_why_incorrect": "Calcular manualmente em planilhas (B) é propenso a erros em preços escalonados e descontos automáticos. Provisionar recursos reais por uma semana apenas para estimar custos (C e D) gera gastos desnecessários e não reflete variações reais de produção.",
    "additional_reading": [
      {
        "title": "Calculadora de Preços do Google Cloud",
        "url": "https://cloud.google.com/products/calculator"
      }
    ]
  },
  {
    "id": 27,
    "type": "single",
    "category": "Planejar e configurar uma solução de nuvem (17.5%)",
    "category_en": "Planejar e configurar uma solução de nuvem (17.5%)",
    "objective": "2.4 Selecionar o balanceador de carga global para tráfego TCP/SSL não HTTP",
    "what_it_tests": "O SSL Proxy Load Balancer é um balanceador de carga global de camada 4 projetado especificamente para tráfego TCP criptografado com SSL/TLS que não seja HTTP(S), roteando clientes para o backend mais próximo para minimizar a latência.",
    "question": "Você tem um aplicativo que recebe tráfego TCP criptografado por SSL na porta 443. Os clientes desse aplicativo estão localizados em todo o mundo. Você deseja minimizar a latência para os clientes. Qual opção de balanceamento de carga você deve usar?",
    "options": [
      {
        "id": "A",
        "text": "HTTPS Load Balancer"
      },
      {
        "id": "B",
        "text": "Network Load Balancer"
      },
      {
        "id": "C",
        "text": "SSL Proxy Load Balancer"
      },
      {
        "id": "D",
        "text": "Internal TCP/UDP Load Balancer. Adicionar uma regra de firewall permitindo tráfego de entrada de '0.0.0.0/0' nas instâncias de destino."
      }
    ],
    "correct_answer": "C",
    "official_rationale": "O SSL Proxy Load Balancer é um balanceador de carga global de camada 4 projetado especificamente para tráfego TCP criptografado com SSL/TLS que não seja HTTP(S), roteando clientes para o backend mais próximo para minimizar a latência.",
    "explanation_why_correct": "Para **tráfego TCP criptografado com SSL (não HTTP)** com clientes distribuídos globalmente, o **SSL Proxy Load Balancer** é a escolha correta: ele é um balanceador de carga global Anycast que encerra a conexão SSL na borda da rede do Google mais próxima do usuário, minimizando a latência.",
    "explanation_why_incorrect": "O HTTPS Load Balancer (A) funciona apenas para protocolo HTTP/HTTPS. O Network Load Balancer (B) é regional (não minimiza latência global via Anycast/proxy). O Internal TCP/UDP Load Balancer (D) é apenas para tráfego privado interno na VPC.",
    "additional_reading": [
      {
        "title": "Visão geral do balanceador de carga de proxy SSL externo",
        "url": "https://cloud.google.com/load-balancing/docs/ssl"
      }
    ]
  },
  {
    "id": 28,
    "type": "single",
    "category": "Garantir a operação bem-sucedida de uma solução de nuvem (20%)",
    "category_en": "Garantir a operação bem-sucedida de uma solução de nuvem (20%)",
    "objective": "4.1 Resolver limitação (throttling) de leitura de disco no Compute Engine",
    "what_it_tests": "No Compute Engine, o limite de IOPS e a taxa de transferência (throughput) de um Persistent Disk escalonam linearmente com o tamanho (GB) do disco; aumentar o tamanho do SSD Persistent Disk é a maneira mais econômica e direta de aumentar o throughput de leitura.",
    "question": "Você tem um aplicativo em uma instância de uso geral do Compute Engine que está enfrentando limitação excessiva de leitura de disco (disk read throttling) em seu Persistent Disk SSD Zonal. O aplicativo lê principalmente arquivos grandes do disco. O tamanho do disco é atualmente de 350 GB. Você deseja fornecer a quantidade máxima de taxa de transferência (throughput) minimizando os custos. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Aumentar o tamanho do disco para 1 TB."
      },
      {
        "id": "B",
        "text": "Aumentar a CPU alocada para a instância."
      },
      {
        "id": "C",
        "text": "Migrar para o uso de um Local SSD na instância."
      },
      {
        "id": "D",
        "text": "Migrar para o uso de um Regional SSD na instância."
      }
    ],
    "correct_answer": "A",
    "official_rationale": "No Compute Engine, o limite de IOPS e a taxa de transferência (throughput) de um Persistent Disk escalonam linearmente com o tamanho (GB) do disco; aumentar o tamanho do SSD Persistent Disk é a maneira mais econômica e direta de aumentar o throughput de leitura.",
    "explanation_why_correct": "O desempenho (IOPS e **taxa de transferência/throughput**) de um **Zonal SSD Persistent Disk** escala linearmente por GB provisionado. **Aumentar o tamanho do disco de 350 GB para 1 TB** eleva imediatamente o limite de throughput de leitura sem tempo de inatividade e com baixo custo.",
    "explanation_why_incorrect": "Aumentar a CPU (B) só ajuda se o gargalo for o limite de rede/CPU da VM, mas para um disco de 350 GB o limite está no próprio tamanho do disco. O Local SSD (C) é efêmero (perde dados se a VM parar) e exige migração. O Regional SSD (D) dobra o custo para replicação entre zonas sem aumentar o throughput de leitura.",
    "additional_reading": [
      {
        "title": "Configurar discos para atender aos requisitos de desempenho",
        "url": "https://cloud.google.com/compute/docs/disks/performance"
      }
    ]
  },
  {
    "id": 29,
    "type": "single",
    "category": "Implantar e implementar uma solução de nuvem (25%)",
    "category_en": "Implantar e implementar uma solução de nuvem (25%)",
    "objective": "3.4 Expandir o intervalo IP de uma sub-rede existente na VPC",
    "what_it_tests": "O Google Cloud permite expandir o intervalo IP primário de uma sub-rede existente (diminuindo a máscara de prefixo, ex.: de /25 para /24) sem tempo de inatividade e sem recriar recursos.",
    "question": "Seu cluster do Dataproc é executado em uma única rede de Nuvem Privada Virtual (VPC) em uma única sub-rede com intervalo 172.16.20.128/25. Não há endereços IP privados disponíveis na rede VPC. Você deseja adicionar novas VMs para se comunicarem com seu cluster usando o número mínimo de etapas. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Modificar o intervalo da sub-rede existente para 172.16.20.0/24."
      },
      {
        "id": "B",
        "text": "Criar um novo Intervalo de IP Secundário na VPC e configurar as VMs para usar esse intervalo."
      },
      {
        "id": "C",
        "text": "Criar uma nova rede VPC para as VMs. Habilitar o VPC Peering entre a rede VPC das VMs e a rede VPC do cluster Dataproc."
      },
      {
        "id": "D",
        "text": "Criar uma nova rede VPC para as VMs com uma sub-rede de 172.32.0.0/16. Habilitar o VPC Network Peering entre a rede VPC do Dataproc e a rede VPC das VMs. Configurar uma troca de rotas personalizadas."
      }
    ],
    "correct_answer": "A",
    "official_rationale": "O Google Cloud permite expandir o intervalo IP primário de uma sub-rede existente (diminuindo a máscara de prefixo, ex.: de /25 para /24) sem tempo de inatividade e sem recriar recursos.",
    "explanation_why_correct": "Você pode **expandir diretamente o intervalo CIDR primário da sub-rede existente** de `172.16.20.128/25` para **`172.16.20.0/24`** (usando `expand-ip-range`), liberando imediatamente novos endereços IP na mesma sub-rede com o menor número de etapas e sem afetar o cluster em execução.",
    "explanation_why_incorrect": "Intervalos secundários (B) são usados para Alias IPs (como pods do GKE), não como IP primário de novas VMs tradicionais. Criar novas VPCs e configurar VPC Peering (C e D) envolve muito mais etapas do que simplesmente expandir a sub-rede.",
    "additional_reading": [
      {
        "title": "Expandir um intervalo IPv4 primário de sub-rede",
        "url": "https://cloud.google.com/vpc/docs/create-modify-vpc-networks#expand-subnet"
      }
    ]
  },
  {
    "id": 30,
    "type": "single",
    "category": "Configurar acesso e segurança (20%)",
    "category_en": "Configurar acesso e segurança (20%)",
    "objective": "5.2 Conceder acesso de leitura entre projetos ao BigQuery para a conta de serviço do App Engine",
    "what_it_tests": "Para ler dados de um dataset do BigQuery localizado em outro projeto, a conta de serviço que executa o aplicativo precisa receber o papel BigQuery Data Viewer (roles/bigquery.dataViewer) no projeto/dataset onde os dados residem.",
    "question": "Você gerencia um Serviço do App Engine que agrega e visualiza dados do BigQuery. O aplicativo é implantado com a conta de serviço padrão do App Engine. Os dados que precisam ser visualizados residem em um projeto diferente gerenciado por outra equipe. Você não tem acesso a esse projeto, mas deseja que seu aplicativo consiga ler dados do conjunto de dados do BigQuery. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Pedir à outra equipe para conceder à sua conta de serviço padrão do App Engine o papel de BigQuery Job User."
      },
      {
        "id": "B",
        "text": "Pedir à outra equipe para conceder à sua conta de serviço padrão do App Engine o papel de BigQuery Data Viewer."
      },
      {
        "id": "C",
        "text": "No Cloud IAM do seu projeto, garantir que a conta de serviço padrão do App Engine tenha o papel de BigQuery Data Viewer."
      },
      {
        "id": "D",
        "text": "No Cloud IAM do seu projeto, conceder a uma conta de serviço recém-criada da outra equipe o papel de BigQuery Job User no seu projeto."
      }
    ],
    "correct_answer": "B",
    "official_rationale": "Para ler dados de um dataset do BigQuery localizado em outro projeto, a conta de serviço que executa o aplicativo precisa receber o papel BigQuery Data Viewer (roles/bigquery.dataViewer) no projeto/dataset onde os dados residem.",
    "explanation_why_correct": "Como os dados estão no projeto da outra equipe, você deve **pedir à outra equipe que conceda à conta de serviço padrão do seu App Engine o papel `BigQuery Data Viewer` (`roles/bigquery.dataViewer`)** no projeto ou dataset deles.",
    "explanation_why_incorrect": "O papel `BigQuery Job User` (A e D) permite apenas executar jobs no projeto, mas não concede permissão para ler dados de tabelas. Conceder `BigQuery Data Viewer` no seu próprio projeto (C) não dá acesso aos dados armazenados no projeto da outra equipe.",
    "additional_reading": [
      {
        "title": "Controlar o acesso a conjuntos de dados no BigQuery",
        "url": "https://cloud.google.com/bigquery/docs/dataset-access-controls"
      }
    ]
  },
  {
    "id": 31,
    "type": "single",
    "category": "Implantar e implementar uma solução de nuvem (25%)",
    "category_en": "Implantar e implementar uma solução de nuvem (25%)",
    "objective": "3.1 Criar múltiplas instâncias de VM a partir de uma imagem personalizada",
    "what_it_tests": "Para criar várias réplicas de uma VM personalizada sem parar a VM base (ou a partir de um backup consistente), cria-se uma imagem personalizada (custom image) a partir de um snapshot do disco base e provisionam-se as novas instâncias a partir dessa imagem.",
    "question": "Você precisa criar uma cópia de uma máquina virtual (VM) personalizada do Compute Engine para facilitar um aumento esperado no tráfego do aplicativo devido a uma aquisição de negócios. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Criar um snapshot do Compute Engine da sua VM base. Criar suas imagens a partir desse snapshot."
      },
      {
        "id": "B",
        "text": "Criar um snapshot do Compute Engine da sua VM base. Criar suas instâncias a partir desse snapshot."
      },
      {
        "id": "C",
        "text": "Criar uma imagem personalizada do Compute Engine a partir de um snapshot. Criar suas imagens a partir dessa imagem."
      },
      {
        "id": "D",
        "text": "Criar uma imagem personalizada do Compute Engine a partir de um snapshot. Criar suas instâncias a partir dessa imagem."
      }
    ],
    "correct_answer": "D",
    "official_rationale": "Para criar várias réplicas de uma VM personalizada sem parar a VM base (ou a partir de um backup consistente), cria-se uma imagem personalizada (custom image) a partir de um snapshot do disco base e provisionam-se as novas instâncias a partir dessa imagem.",
    "explanation_why_correct": "A prática recomendada para clonar e escalonar múltiplas VMs idênticas é **criar uma imagem personalizada (custom image) do Compute Engine a partir de um snapshot** da VM base e **criar as novas instâncias a partir dessa imagem**.",
    "explanation_why_incorrect": "Criar imagens a partir de imagens (C) ou apenas imagens sem criar as instâncias (A) não resolve a demanda de tráfego. Criar múltiplas VMs diretamente de uma imagem personalizada (D) é a abordagem recomendada pelo Google sobre criar repetidamente a partir de um snapshot (B).",
    "additional_reading": [
      {
        "title": "Criar e gerenciar imagens personalizadas no Compute Engine",
        "url": "https://cloud.google.com/compute/docs/images/create-delete-deprecate-private-images"
      }
    ]
  },
  {
    "id": 32,
    "type": "single",
    "category": "Garantir a operação bem-sucedida de uma solução de nuvem (20%)",
    "category_en": "Garantir a operação bem-sucedida de uma solução de nuvem (20%)",
    "objective": "4.3 Coletar logs de aplicativos gravados em disco usando o Agente do Cloud Logging",
    "what_it_tests": "Por padrão, o Compute Engine não envia logs de arquivos em disco da VM para o Cloud Logging; é necessário instalar e configurar o Cloud Logging Agent (ou Ops Agent) na instância.",
    "question": "Você implantou um aplicativo em uma única instância do Compute Engine. O aplicativo grava logs em disco. Os usuários começam a relatar erros com o aplicativo. Você deseja diagnosticar o problema. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Navegar até o Cloud Logging e visualizar os logs do aplicativo."
      },
      {
        "id": "B",
        "text": "Conectar-se ao console serial da instância e ler os logs do aplicativo."
      },
      {
        "id": "C",
        "text": "Configurar uma Verificação de Integridade (Health Check) na instância e definir um valor baixo para o Limite de Integridade (Healthy Threshold)."
      },
      {
        "id": "D",
        "text": "Instalar e configurar o Agente do Cloud Logging (Cloud Logging Agent / Ops Agent) e visualizar os logs no Cloud Logging."
      }
    ],
    "correct_answer": "D",
    "official_rationale": "Por padrão, o Compute Engine não envia logs de arquivos em disco da VM para o Cloud Logging; é necessário instalar e configurar o Cloud Logging Agent (ou Ops Agent) na instância.",
    "explanation_why_correct": "Por padrão, logs gravados por aplicativos em arquivos no disco local de uma VM do Compute Engine não são enviados automaticamente ao Cloud Logging. Você deve **instalar e configurar o Agente do Cloud Logging (Ops Agent)** na instância para coletar esses logs e visualizá-los no Cloud Logging.",
    "explanation_why_incorrect": "Sem o agente instalado, os logs em disco do aplicativo não aparecerão no Cloud Logging (A). O console serial (B) mostra apenas mensagens de boot/kernel do sistema operacional, e Health Checks (C) não exibem o conteúdo dos logs de erro.",
    "additional_reading": [
      {
        "title": "Sobre o agente do Cloud Logging / Ops Agent",
        "url": "https://cloud.google.com/logging/docs/agent"
      }
    ]
  },
  {
    "id": 33,
    "type": "single",
    "category": "Configurar acesso e segurança (20%)",
    "category_en": "Configurar acesso e segurança (20%)",
    "objective": "5.2 Permitir que uma VM grave objetos em um bucket de outro projeto com o menor privilégio",
    "what_it_tests": "Conceder o papel Storage Object Creator (roles/storage.objectCreator) diretamente no bucket de destino à conta de serviço da VM permite gravar os relatórios entre projetos em uma única etapa e com privilégio mínimo.",
    "question": "Um aplicativo gera relatórios diários em uma máquina virtual (VM) do Compute Engine. A VM está no projeto corp-iot-insights. Sua equipe opera apenas no projeto corp-aggregate-reports e precisa de uma cópia das exportações diárias no bucket corp-aggregate-reports-storage. Você deseja configurar o acesso para que os relatórios diários da VM fiquem disponíveis no bucket corp-aggregate-reports-storage e usar o menor número possível de etapas seguindo as práticas recomendadas pelo Google. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Mover ambos os projetos para a mesma pasta."
      },
      {
        "id": "B",
        "text": "Conceder à Conta de Serviço da VM o papel Storage Object Creator no bucket corp-aggregate-reports-storage."
      },
      {
        "id": "C",
        "text": "Criar uma rede Shared VPC entre ambos os projetos. Conceder à Conta de Serviço da VM o papel Storage Object Creator em corp-iot-insights."
      },
      {
        "id": "D",
        "text": "Tornar o bucket corp-aggregate-reports-storage público e criar uma pasta com um sufixo pseudoaleatório. Compartilhar a pasta com a equipe de IoT."
      }
    ],
    "correct_answer": "B",
    "official_rationale": "Conceder o papel Storage Object Creator (roles/storage.objectCreator) diretamente no bucket de destino à conta de serviço da VM permite gravar os relatórios entre projetos em uma única etapa e com privilégio mínimo.",
    "explanation_why_correct": "Basta **conceder à conta de serviço da VM (do projeto `corp-iot-insights`) o papel `Storage Object Creator` (`roles/storage.objectCreator`) diretamente no bucket `corp-aggregate-reports-storage`**. Isso permite que a VM envie os relatórios diários com segurança e privilégio mínimo.",
    "explanation_why_incorrect": "Mover projetos para a mesma pasta (A) não concede acesso automático ao bucket. O acesso ao Cloud Storage usa APIs HTTP(S) e IAM, não exigindo Shared VPC, além de a opção C conceder o papel no projeto errado. Tornar o bucket público (D) é uma falha grave de segurança.",
    "additional_reading": [
      {
        "title": "Papéis do IAM no nível do bucket no Cloud Storage",
        "url": "https://cloud.google.com/storage/docs/access-control/using-iam-permissions"
      }
    ]
  },
  {
    "id": 34,
    "type": "single",
    "category": "Configurar acesso e segurança (20%)",
    "category_en": "Configurar acesso e segurança (20%)",
    "objective": "5.2 Autenticar aplicativos no Compute Engine usando Application Default Credentials (ADC)",
    "what_it_tests": "Quando um aplicativo usa Application Default Credentials (ADC) e é migrado para o Compute Engine, ele obtém credenciais automaticamente do servidor de metadados da VM por meio da conta de serviço anexada à instância, sem alterar o código.",
    "question": "Você construiu um aplicativo em seu laptop de desenvolvimento que usa serviços do Google Cloud. Seu aplicativo usa Application Default Credentials (ADC) para autenticação e funciona perfeitamente em seu laptop de desenvolvimento. Você deseja migrar esse aplicativo para uma máquina virtual (VM) do Compute Engine e configurar a autenticação usando as práticas recomendadas pelo Google e com o mínimo de alterações. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Atribuir o acesso apropriado para os serviços do Google à conta de serviço usada pela VM do Compute Engine."
      },
      {
        "id": "B",
        "text": "Criar uma conta de serviço com acesso apropriado para os serviços do Google e configurar o aplicativo para usar essa conta."
      },
      {
        "id": "C",
        "text": "Armazenar credenciais para contas de serviço com acesso apropriado para os serviços do Google em um arquivo de configuração e implantar esse arquivo de configuração com seu aplicativo."
      },
      {
        "id": "D",
        "text": "Armazenar credenciais para sua conta de usuário com acesso apropriado para os serviços do Google em um arquivo de configuração e implantar esse arquivo de configuração com seu aplicativo."
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Quando um aplicativo usa Application Default Credentials (ADC) e é migrado para o Compute Engine, ele obtém credenciais automaticamente do servidor de metadados da VM por meio da conta de serviço anexada à instância, sem alterar o código.",
    "explanation_why_correct": "O **Application Default Credentials (ADC)** busca automaticamente as credenciais da **conta de serviço anexada à VM do Compute Engine** por meio do servidor de metadados local. Portanto, basta **atribuir as permissões necessárias do IAM à conta de serviço da VM**, sem precisar de arquivos de chave ou alterações no código.",
    "explanation_why_incorrect": "Configurar chaves manualmente no aplicativo ou em arquivos de configuração (B, C e D) exige alterações desnecessárias e expõe chaves estáticas, contrariando as boas práticas do ADC.",
    "additional_reading": [
      {
        "title": "Como funcionam as Application Default Credentials (ADC)",
        "url": "https://cloud.google.com/docs/authentication/application-default-credentials"
      }
    ]
  },
  {
    "id": 35,
    "type": "single",
    "category": "Configurar um ambiente de solução em nuvem (17.5%)",
    "category_en": "Configurar um ambiente de solução em nuvem (17.5%)",
    "objective": "1.1 Criar um novo projeto, habilitar a API do Compute Engine e provisionar uma VM via Cloud SDK",
    "what_it_tests": "Para criar uma VM em um projeto que ainda não existe, a sequência obrigatória é primeiro criar o projeto (e vincular faturamento), habilitar a API do Compute Engine nele e então criar a instância apontando para o novo projeto.",
    "question": "Você precisa criar uma instância do Compute Engine em um novo projeto que ainda não existe. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Usando o Cloud SDK, criar um novo projeto, habilitar a API do Compute Engine nesse projeto e, em seguida, criar a instância especificando seu novo projeto."
      },
      {
        "id": "B",
        "text": "Habilitar a API do Compute Engine no Cloud Console, usar o Cloud SDK para criar a instância e, em seguida, usar a flag '--project' para especificar um novo projeto."
      },
      {
        "id": "C",
        "text": "Usando o Cloud SDK, criar a nova instância e usar a flag '--project' para especificar o novo projeto. Responder sim quando solicitado pelo Cloud SDK para habilitar a API do Compute Engine."
      },
      {
        "id": "D",
        "text": "Habilitar a API do Compute Engine no Cloud Console. Acessar a seção Compute Engine do Console para criar uma nova instância e procurar a opção Criar em um Novo Projeto no formulário de criação."
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Para criar uma VM em um projeto que ainda não existe, a sequência obrigatória é primeiro criar o projeto (e vincular faturamento), habilitar a API do Compute Engine nele e então criar a instância apontando para o novo projeto.",
    "explanation_why_correct": "A sequência correta usando o Cloud SDK é: **1. criar o novo projeto (`gcloud projects create`)**, **2. habilitar a API do Compute Engine nesse projeto (`gcloud services enable compute.googleapis.com`)** e **3. criar a instância (`gcloud compute instances create --project=...`)**.",
    "explanation_why_incorrect": "Não é possível habilitar a API no Console antes de o projeto existir (B e D), nem a flag `--project` do comando `gcloud compute instances create` cria um projeto inexistente automaticamente (B e C).",
    "additional_reading": [
      {
        "title": "Criar e gerenciar projetos com a CLI gcloud",
        "url": "https://cloud.google.com/resource-manager/docs/creating-managing-projects"
      }
    ]
  },
  {
    "id": 36,
    "type": "single",
    "category": "Planejar e configurar uma solução de nuvem (17.5%)",
    "category_en": "Planejar e configurar uma solução de nuvem (17.5%)",
    "objective": "2.2 Escolher instâncias regulares do Compute Engine para jobs em lote superiores a 24 horas",
    "what_it_tests": "Como VMs Preemptivas duram no máximo 24 horas e o processo leva 30 horas (e precisa ser reiniciado do zero se interrompido), VMs preemptivas nunca concluiriam o job; deve-se usar uma VM padrão do Compute Engine iniciada apenas durante as 30 horas mensais.",
    "question": "Sua empresa executa um processo em lote (batch) em um servidor local que leva cerca de 30 horas para ser concluído. A tarefa é executada mensalmente, pode ser realizada offline e deve ser reiniciada do zero se for interrompida. Você deseja migrar essa carga de trabalho para a nuvem minimizando os custos. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Migrar a carga de trabalho para uma VM Preemptiva (Preemptible VM) do Compute Engine."
      },
      {
        "id": "B",
        "text": "Migrar a carga de trabalho para um cluster do Google Kubernetes Engine com nós Preemptivos."
      },
      {
        "id": "C",
        "text": "Migrar a carga de trabalho para uma VM do Compute Engine. Iniciar e parar a instância conforme necessário."
      },
      {
        "id": "D",
        "text": "Criar um Modelo de Instância com VMs Preemptivas ativadas. Criar um Grupo Gerenciado de Instâncias a partir do modelo e ajustar a Utilização de CPU de Destino. Migrar a carga de trabalho."
      }
    ],
    "correct_answer": "C",
    "official_rationale": "Como VMs Preemptivas duram no máximo 24 horas e o processo leva 30 horas (e precisa ser reiniciado do zero se interrompido), VMs preemptivas nunca concluiriam o job; deve-se usar uma VM padrão do Compute Engine iniciada apenas durante as 30 horas mensais.",
    "explanation_why_correct": "As VMs Preemptivas têm tempo máximo de vida de **24 horas**, portanto um job de **30 horas que precisa ser reiniciado se interrompido** jamais terminaria em uma VM preemptiva. A solução correta e econômica é usar uma **VM padrão do Compute Engine e iniciá-la/pará-la conforme necessário** uma vez por mês.",
    "explanation_why_incorrect": "Qualquer opção baseada em VMs ou nós Preemptivos (A, B e D) será obrigatoriamente encerrada pelo Google Cloud ao atingir 24 horas, impedindo a conclusão do job de 30 horas.",
    "additional_reading": [
      {
        "title": "Limitações das VMs Preemptivas (duração máxima de 24 horas)",
        "url": "https://cloud.google.com/compute/docs/instances/preemptible"
      }
    ]
  },
  {
    "id": 37,
    "type": "single",
    "category": "Implantar e implementar uma solução de nuvem (25%)",
    "category_en": "Implantar e implementar uma solução de nuvem (25%)",
    "objective": "3.5 Automatizar a instalação do Jenkins com o Google Cloud Marketplace",
    "what_it_tests": "O Google Cloud Marketplace permite implantar o Jenkins de forma totalmente automatizada, rápida e pré-configurada em poucos cliques.",
    "question": "Você está desenvolvendo um novo aplicativo e está procurando uma instalação do Jenkins para construir e implantar seu código-fonte. Você deseja automatizar a instalação da maneira mais rápida e fácil possível. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Implantar o Jenkins por meio do Google Cloud Marketplace."
      },
      {
        "id": "B",
        "text": "Criar uma nova instância do Compute Engine. Executar o executável do Jenkins."
      },
      {
        "id": "C",
        "text": "Criar um novo cluster do Kubernetes Engine. Criar um deployment para a imagem do Jenkins."
      },
      {
        "id": "D",
        "text": "Criar um modelo de instância com o executável do Jenkins. Criar um grupo gerenciado de instâncias com esse modelo."
      }
    ],
    "correct_answer": "A",
    "official_rationale": "O Google Cloud Marketplace permite implantar o Jenkins de forma totalmente automatizada, rápida e pré-configurada em poucos cliques.",
    "explanation_why_correct": "Implantar o **Jenkins por meio do Google Cloud Marketplace** automatiza o provisionamento e a configuração de toda a pilha necessária da maneira mais rápida e simples possível.",
    "explanation_why_incorrect": "Instalar manualmente em uma VM (B), configurar um cluster GKE do zero (C) ou criar modelos de instância manuais (D) exigem muito mais etapas de configuração e manutenção.",
    "additional_reading": [
      {
        "title": "Implantar soluções usando o Cloud Marketplace",
        "url": "https://cloud.google.com/marketplace/docs"
      }
    ]
  },
  {
    "id": 38,
    "type": "single",
    "category": "Configurar um ambiente de solução em nuvem (17.5%)",
    "category_en": "Configurar um ambiente de solução em nuvem (17.5%)",
    "objective": "1.2 Definir a zona padrão na CLI gcloud usando gcloud config set",
    "what_it_tests": "O comando 'gcloud config set compute/zone europe-west1-d' define a zona padrão localmente na configuração ativa da CLI gcloud.",
    "question": "Você baixou e instalou a interface de linha de comando (CLI) gcloud e se autenticou com sua Conta do Google. A maioria das suas instâncias do Compute Engine em seu projeto é executada na zona europe-west1-d. Você deseja evitar ter que especificar essa zona em cada comando da CLI ao gerenciar essas instâncias. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Definir a zona europe-west1-d como a zona padrão usando o subcomando gcloud config."
      },
      {
        "id": "B",
        "text": "Na página Configurações do Compute Engine, em Localização padrão, definir a zona como europe-west1-d."
      },
      {
        "id": "C",
        "text": "No diretório de instalação da CLI, criar um arquivo chamado default.conf contendo zone=europe-west1-d."
      },
      {
        "id": "D",
        "text": "Criar uma entrada de Metadados na página do Compute Engine com a chave compute/zone e o valor europe-west1-d."
      }
    ],
    "correct_answer": "A",
    "official_rationale": "O comando 'gcloud config set compute/zone europe-west1-d' define a zona padrão localmente na configuração ativa da CLI gcloud.",
    "explanation_why_correct": "Usar o subcomando **`gcloud config`** (`gcloud config set compute/zone europe-west1-d`) define a zona padrão na configuração local da CLI `gcloud`, evitando precisar passar a flag `--zone` em cada comando.",
    "explanation_why_incorrect": "Alterar configurações ou metadados no Console (B e D) não atualiza automaticamente a configuração local já inicializada da CLI sem executar comandos `gcloud config`, e o arquivo `default.conf` no diretório de instalação (C) não é reconhecido pelo Cloud SDK.",
    "additional_reading": [
      {
        "title": "Gerenciar propriedades do Cloud SDK com gcloud config",
        "url": "https://cloud.google.com/sdk/gcloud/reference/config/set"
      }
    ]
  },
  {
    "id": 39,
    "type": "single",
    "category": "Planejar e configurar uma solução de nuvem (17.5%)",
    "category_en": "Planejar e configurar uma solução de nuvem (17.5%)",
    "objective": "2.3 Selecionar o Cloud Bigtable para ingestão de alto volume de telemetria IoT e séries temporais",
    "what_it_tests": "O Cloud Bigtable é o banco NoSQL de baixa latência e altíssima vazão do Google Cloud projetado para dados de sensores IoT e séries temporais, garantindo leituras e gravações atômicas no nível da linha (row key).",
    "question": "O negócio principal da sua empresa é alugar equipamentos de construção em larga escala. Todos os equipamentos alugados foram equipados com vários sensores que enviam informações de eventos a cada poucos segundos. Esses sinais podem variar entre status do motor, distância percorrida, nível de combustível e muito mais. Os clientes são faturados com base no consumo monitorado por esses sensores. Você espera alta taxa de transferência – até milhares de eventos por hora por dispositivo – e precisa recuperar dados consistentes com base no momento do evento. O armazenamento e a recuperação de sinais individuais devem ser atômicos. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Criar um arquivo no Cloud Storage por dispositivo e anexar novos dados a esse arquivo."
      },
      {
        "id": "B",
        "text": "Criar um arquivo no Cloud Filestore por dispositivo e anexar novos dados a esse arquivo."
      },
      {
        "id": "C",
        "text": "Ingerir os dados no Datastore. Armazenar os dados em um grupo de entidades com base no dispositivo."
      },
      {
        "id": "D",
        "text": "Ingerir os dados no Cloud Bigtable. Criar uma chave de linha (row key) baseada no carimbo de data/hora (timestamp) do evento."
      }
    ],
    "correct_answer": "D",
    "official_rationale": "O Cloud Bigtable é o banco NoSQL de baixa latência e altíssima vazão do Google Cloud projetado para dados de sensores IoT e séries temporais, garantindo leituras e gravações atômicas no nível da linha (row key).",
    "explanation_why_correct": "O **Cloud Bigtable** foi projetado especificamente para cargas de trabalho de **séries temporais e telemetria de IoT** com alta taxa de gravação/leitura e operações atômicas por linha, usando uma **chave de linha (row key)** estruturada com identificador e timestamp do evento.",
    "explanation_why_incorrect": "Objetos no Cloud Storage são imutáveis (A) e não suportam milhões de appends rápidos por segundo. O Filestore (B) é um sistema de arquivos NFS, não um banco de séries temporais. O Datastore/Firestore em um único grupo de entidades por dispositivo (C) sofre contenção de gravação em alta frequência.",
    "additional_reading": [
      {
        "title": "Visão geral do Cloud Bigtable para séries temporais",
        "url": "https://cloud.google.com/bigtable/docs/schema-design-time-series"
      }
    ]
  },
  {
    "id": 40,
    "type": "single",
    "category": "Garantir a operação bem-sucedida de uma solução de nuvem (20%)",
    "category_en": "Garantir a operação bem-sucedida de uma solução de nuvem (20%)",
    "objective": "4.3 Monitorar múltiplos projetos em um único painel (single pane of glass) no Cloud Monitoring",
    "what_it_tests": "Para visualizar métricas de CPU, memória e disco dos projetos A, B e C em uma visão unificada no Cloud Monitoring, cria-se um Workspace (Metrics Scope) no projeto A e adicionam-se os projetos B e C a ele.",
    "question": "Foi solicitado que você configurasse o monitoramento de desempenho de aplicativos nos projetos A, B e C do Google Cloud em um único painel (single pane of glass). Você deseja monitorar CPU, memória e disco. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Habilitar a API e, em seguida, compartilhar gráficos dos projetos A, B e C."
      },
      {
        "id": "B",
        "text": "Habilitar a API e, em seguida, conceder o papel metrics.reader aos projetos A, B e C."
      },
      {
        "id": "C",
        "text": "Habilitar a API e, em seguida, usar os painéis padrão para visualizar todos os projetos em sequência."
      },
      {
        "id": "D",
        "text": "Habilitar a API, criar um workspace (escopo de métricas) no projeto A e, em seguida, adicionar os projetos B e C."
      }
    ],
    "correct_answer": "D",
    "official_rationale": "Para visualizar métricas de CPU, memória e disco dos projetos A, B e C em uma visão unificada no Cloud Monitoring, cria-se um Workspace (Metrics Scope) no projeto A e adicionam-se os projetos B e C a ele.",
    "explanation_why_correct": "Para obter uma visualização unificada (*single pane of glass*) no Cloud Monitoring, você deve **habilitar a API de monitoramento, criar um Workspace (escopo de métricas) no projeto A (projeto host) e adicionar os projetos B e C como projetos monitorados**.",
    "explanation_why_incorrect": "Visualizar projetos em sequência (C) não oferece um painel único consolidado. Compartilhar gráficos avulsos (A) ou apenas atribuir papéis sem configurar um escopo de métricas multi-projeto (B) não consolida as métricas no mesmo painel.",
    "additional_reading": [
      {
        "title": "Configurar escopos de métricas para vários projetos",
        "url": "https://cloud.google.com/monitoring/settings"
      }
    ]
  },
  {
    "id": 41,
    "type": "single",
    "category": "Configurar um ambiente de solução em nuvem (17.5%)",
    "category_en": "Configurar um ambiente de solução em nuvem (17.5%)",
    "objective": "1.1 Visualizar custos de múltiplas contas de faturamento usando BigQuery e Looker Studio (Data Studio)",
    "what_it_tests": "Como os projetos estão vinculados a contas de faturamento diferentes e o Console do Cloud Billing mostra relatórios de apenas uma conta de faturamento por vez, a solução é exportar os dados de todas as contas de faturamento para o BigQuery e unificar a visualização no Data Studio (Looker Studio).",
    "question": "Você criou vários recursos em múltiplos projetos do Google Cloud. Todos os projetos estão vinculados a diferentes contas de faturamento. Para estimar melhor as cobranças futuras, você deseja ter uma única representação visual de todos os custos incorridos. Você quer incluir novos dados de custo o mais rápido possível. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Configurar a Exportação de Dados de Faturamento (Billing Data Export) para o BigQuery e visualizar os dados no Data Studio (Looker Studio)."
      },
      {
        "id": "B",
        "text": "Visitar a página Tabela de Custos (Cost Table) para obter uma exportação em CSV e visualizá-la usando o Data Studio."
      },
      {
        "id": "C",
        "text": "Preencher todos os recursos na Calculadora de Preços para obter uma estimativa do custo mensal."
      },
      {
        "id": "D",
        "text": "Usar a visualização de Relatórios (Reports) no Console do Cloud Billing para ver as informações de custo desejadas."
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Como os projetos estão vinculados a contas de faturamento diferentes e o Console do Cloud Billing mostra relatórios de apenas uma conta de faturamento por vez, a solução é exportar os dados de todas as contas de faturamento para o BigQuery e unificar a visualização no Data Studio (Looker Studio).",
    "explanation_why_correct": "Como os projetos pertencem a **diferentes contas de faturamento**, a visualização nativa de Relatórios do Cloud Billing (D) só mostra uma conta de faturamento por vez. **Exportar os dados de faturamento de cada conta para o BigQuery e conectá-los ao Data Studio (Looker Studio)** cria um painel visual único e atualizado continuamente.",
    "explanation_why_incorrect": "Exportar CSVs manualmente (B) não inclui novos dados automaticamente. A Calculadora de Preços (C) estima custos teóricos, não custos reais incorridos. A página Reports do Console (D) não consolida múltiplas contas de faturamento distintas em um único gráfico.",
    "additional_reading": [
      {
        "title": "Visualizar custos do Cloud Billing com BigQuery e Looker Studio",
        "url": "https://cloud.google.com/billing/docs/how-to/visualize-data"
      }
    ]
  },
  {
    "id": 42,
    "type": "single",
    "category": "Implantar e implementar uma solução de nuvem (25%)",
    "category_en": "Implantar e implementar uma solução de nuvem (25%)",
    "objective": "3.4 Impedir roteamento de tráfego da Internet pública para VMs usando apenas IP privado",
    "what_it_tests": "Criar uma instância do Compute Engine sem endereço IP externo (público) garante que nenhum tráfego originado na Internet pública possa ser roteado diretamente para ela, mantendo a comunicação privada via VPN.",
    "question": "Sua empresa possui cargas de trabalho em execução no Compute Engine e localmente (on-premises). A Nuvem Privada Virtual (VPC) do Google Cloud está conectada à sua WAN por meio de uma Rede Privada Virtual (VPN). Você precisa implantar uma nova instância do Compute Engine e garantir que nenhum tráfego da Internet pública possa ser roteado para ela. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Criar a instância sem um endereço IP público."
      },
      {
        "id": "B",
        "text": "Criar a instância com o Acesso Privado do Google (Private Google Access) habilitado."
      },
      {
        "id": "C",
        "text": "Criar uma regra de firewall de saída (egress) negando tudo na rede VPC."
      },
      {
        "id": "D",
        "text": "Criar uma rota na VPC para rotear todo o tráfego para a instância pelo túnel VPN."
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Criar uma instância do Compute Engine sem endereço IP externo (público) garante que nenhum tráfego originado na Internet pública possa ser roteado diretamente para ela, mantendo a comunicação privada via VPN.",
    "explanation_why_correct": "**Criar a instância sem um endereço IP público (externo)** impede que qualquer tráfego vindo da Internet pública seja roteado diretamente para a VM, enquanto permite que ela se comunique normalmente com a rede on-premises pelo IP interno através do túnel Cloud VPN.",
    "explanation_why_incorrect": "O Private Google Access (B) serve para VMs sem IP externo acessarem APIs do Google, mas habilitar isso não é o que remove o IP público. Uma regra de firewall de egress (C) bloquearia até a comunicação com a VPN. Rotas na VPC (D) controlam a saída da VPC, não impedindo tráfego externo se a VM tiver IP público.",
    "additional_reading": [
      {
        "title": "Endereços IP internos e externos no Compute Engine",
        "url": "https://cloud.google.com/compute/docs/ip-addresses"
      }
    ]
  },
  {
    "id": 43,
    "type": "single",
    "category": "Implantar e implementar uma solução de nuvem (25%)",
    "category_en": "Implantar e implementar uma solução de nuvem (25%)",
    "objective": "3.6 Versionar templates do Deployment Manager usando repositórios Git (Cloud Source Repositories)",
    "what_it_tests": "As boas práticas de Infraestrutura como Código (IaC) recomendam descrever a infraestrutura em templates declarativos do Deployment Manager e versioná-los em um sistema de controle de versão Git como o Cloud Source Repositories para revisão em equipe.",
    "question": "Sua equipe mantém a infraestrutura da sua organização. A infraestrutura atual requer alterações. Você precisa compartilhar suas alterações propostas com o restante da equipe. Você deseja seguir as melhores práticas recomendadas pelo Google. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Usar modelos do Deployment Manager para descrever as alterações propostas e armazená-los em um bucket do Cloud Storage."
      },
      {
        "id": "B",
        "text": "Usar modelos do Deployment Manager para descrever as alterações propostas e armazená-los no Cloud Source Repositories."
      },
      {
        "id": "C",
        "text": "Aplicar as alterações em um ambiente de desenvolvimento, executar gcloud compute instances list e salvar a saída em um bucket compartilhado do Storage."
      },
      {
        "id": "D",
        "text": "Aplicar as alterações em um ambiente de desenvolvimento, executar gcloud compute instances list e salvar a saída no Cloud Source Repositories."
      }
    ],
    "correct_answer": "B",
    "official_rationale": "As boas práticas de Infraestrutura como Código (IaC) recomendam descrever a infraestrutura em templates declarativos do Deployment Manager e versioná-los em um sistema de controle de versão Git como o Cloud Source Repositories para revisão em equipe.",
    "explanation_why_correct": "A prática recomendada de Infraestrutura como Código (IaC) é **definir as alterações propostas em modelos do Deployment Manager** e armazená-los em um repositório de controle de versão Git, como o **Cloud Source Repositories**, permitindo revisão de código (Pull Requests) e histórico de alterações.",
    "explanation_why_incorrect": "Armazenar templates em um bucket do Cloud Storage (A) não oferece controle de versão Git nativo e revisão de diffs. Salvar a saída de `gcloud compute instances list` (C e D) não é Infraestrutura como Código e não permite revisar a configuração completa antes de aplicá-la.",
    "additional_reading": [
      {
        "title": "Práticas recomendadas para o Cloud Deployment Manager",
        "url": "https://cloud.google.com/deployment-manager/docs/best-practices"
      }
    ]
  },
  {
    "id": 44,
    "type": "single",
    "category": "Garantir a operação bem-sucedida de uma solução de nuvem (20%)",
    "category_en": "Garantir a operação bem-sucedida de uma solução de nuvem (20%)",
    "objective": "4.1 Configurar backups diários de discos com retenção de 30 dias usando Snapshot Schedules",
    "what_it_tests": "O recurso nativo de Programação de Snapshots (Snapshot Schedule) de discos do Compute Engine permite agendar snapshots diários fora do horário comercial e definir a exclusão automática após 30 dias sem usar serviços adicionais.",
    "question": "Você tem uma instância do Compute Engine hospedando um aplicativo usado entre 9h e 18h nos dias úteis. Você deseja fazer backup dessa instância diariamente para fins de recuperação de desastres. Você quer manter os backups por 30 dias. Você deseja a solução recomendada pelo Google com a menor sobrecarga de gerenciamento e o menor número de serviços. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "1. Atualizar os metadados da sua instância para adicionar o seguinte valor: 'snapshot-schedule: 0 1 * * *' 2. Atualizar os metadados da sua instância para adicionar o seguinte valor: 'snapshot-retention: 30'."
      },
      {
        "id": "B",
        "text": "1. No Cloud Console, acessar a página Discos (Disks) do Compute Engine e selecionar o disco da sua instância. 2. Na seção Programação de Snapshots (Snapshot Schedule), selecionar Criar Programação e configurar os seguintes parâmetros: '- Frequência da programação: Diária', '- Horário de início: 1:00 AM – 2:00 AM', '- Excluir snapshots automaticamente após: 30 dias'."
      },
      {
        "id": "C",
        "text": "1. Criar uma Cloud Function que crie um snapshot do disco da sua instância. 2. Criar uma Cloud Function que exclua snapshots com mais de 30 dias. 3. Usar o Cloud Scheduler para acionar ambas as Cloud Functions diariamente à 1:00 AM."
      },
      {
        "id": "D",
        "text": "1. Criar um script bash na instância que copie o conteúdo do disco para o Cloud Storage. 2. Criar um script bash na instância que exclua dados com mais de 30 dias no bucket de backup do Cloud Storage. 3. Configurar o crontab da instância para executar esses scripts diariamente à 1:00 AM."
      }
    ],
    "correct_answer": "B",
    "official_rationale": "O recurso nativo de Programação de Snapshots (Snapshot Schedule) de discos do Compute Engine permite agendar snapshots diários fora do horário comercial e definir a exclusão automática após 30 dias sem usar serviços adicionais.",
    "explanation_why_correct": "Configurar uma **Programação de Snapshots (Snapshot Schedule)** diretamente no disco persistente pelo Console do Compute Engine (com frequência diária às 01:00 AM e exclusão automática após 30 dias) é a solução nativa recomendada, exigindo zero manutenção e nenhum serviço extra.",
    "explanation_why_incorrect": "O Compute Engine não reconhece metadados `snapshot-schedule` (A). Criar Cloud Functions + Cloud Scheduler (C) ou scripts bash via cron na VM (D) adiciona serviços e sobrecarga operacional desnecessários.",
    "additional_reading": [
      {
        "title": "Criar e gerenciar programações de snapshots de discos",
        "url": "https://cloud.google.com/compute/docs/disks/scheduled-snapshots"
      }
    ]
  },
  {
    "id": 45,
    "type": "single",
    "category": "Implantar e implementar uma solução de nuvem (25%)",
    "category_en": "Implantar e implementar uma solução de nuvem (25%)",
    "objective": "3.2 Adicionar tipos de máquina diferentes a um cluster GKE em execução usando Node Pools",
    "what_it_tests": "Os Node Pools (pools de nós) do GKE permitem adicionar grupos de nós com tipos de máquina específicos (como n2-highmem-16) a um cluster existente sem causar downtime nas cargas de trabalho em execução.",
    "question": "Seu aplicativo existente em execução no Google Kubernetes Engine (GKE) consiste em vários pods executando em quatro nós n1-standard-2 do GKE. Você precisa implantar pods adicionais que exigem nós n2-highmem-16 sem qualquer tempo de inatividade (downtime). O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Usar gcloud container clusters upgrade. Implantar os novos serviços."
      },
      {
        "id": "B",
        "text": "Criar um novo Pool de Nós (Node Pool) e especificar o tipo de máquina n2-highmem-16. Implantar os novos pods."
      },
      {
        "id": "C",
        "text": "Criar um novo cluster com nós n2-highmem-16. Reimplantar os pods e excluir o cluster antigo."
      },
      {
        "id": "D",
        "text": "Criar um novo cluster com nós n1-standard-2 e n2-highmem-16. Reimplantar os pods e excluir o cluster antigo."
      }
    ],
    "correct_answer": "B",
    "official_rationale": "Os Node Pools (pools de nós) do GKE permitem adicionar grupos de nós com tipos de máquina específicos (como n2-highmem-16) a um cluster existente sem causar downtime nas cargas de trabalho em execução.",
    "explanation_why_correct": "Criar um **novo Pool de Nós (Node Pool)** no cluster GKE existente especificando o tipo de máquina **`n2-highmem-16`** adiciona os novos recursos imediatamente sem interromper os pods que já estão rodando nos nós `n1-standard-2`.",
    "explanation_why_incorrect": "O comando `gcloud container clusters upgrade` (A) atualiza a versão do Kubernetes, não adicionando tipos de máquina diferentes. Criar um novo cluster e migrar os pods (C e D) é desnecessário e pode causar tempo de inatividade.",
    "additional_reading": [
      {
        "title": "Adicionar e gerenciar pools de nós em um cluster GKE",
        "url": "https://cloud.google.com/kubernetes-engine/docs/how-to/node-pools"
      }
    ]
  },
  {
    "id": 46,
    "type": "single",
    "category": "Garantir a operação bem-sucedida de uma solução de nuvem (20%)",
    "category_en": "Garantir a operação bem-sucedida de uma solução de nuvem (20%)",
    "objective": "4.2 Consultar dados federados no Cloud Storage e Cloud Bigtable usando tabelas externas do BigQuery",
    "what_it_tests": "O BigQuery suporta tabelas externas (consultas federadas) diretamente sobre arquivos no Cloud Storage e tabelas no Cloud Bigtable, permitindo fazer um JOIN SQL ad hoc imediato sem precisar desenvolver jobs de ETL.",
    "question": "Você tem um aplicativo que usa o Cloud Spanner como banco de dados de backend para manter informações de estado atual sobre os usuários. O Cloud Bigtable registra todos os eventos acionados pelos usuários. Você exporta dados do Cloud Spanner para o Cloud Storage durante backups diários. Um de seus analistas pede que você junte (join) dados do Cloud Spanner e do Cloud Bigtable para usuários específicos. Você deseja concluir essa solicitação ad hoc da maneira mais eficiente possível. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Criar um job do Dataflow que copie dados do Cloud Bigtable e do Cloud Storage para usuários específicos."
      },
      {
        "id": "B",
        "text": "Criar um job do Dataflow que copie dados do Cloud Bigtable e do Cloud Spanner para usuários específicos."
      },
      {
        "id": "C",
        "text": "Criar um cluster do Cloud Dataproc que execute um job do Spark para extrair dados do Cloud Bigtable e do Cloud Storage para usuários específicos."
      },
      {
        "id": "D",
        "text": "Criar duas tabelas externas separadas do BigQuery sobre o Cloud Storage e o Cloud Bigtable. Usar o console do BigQuery para juntar (join) essas tabelas por meio dos campos de usuário e aplicar os filtros apropriados."
      }
    ],
    "correct_answer": "D",
    "official_rationale": "O BigQuery suporta tabelas externas (consultas federadas) diretamente sobre arquivos no Cloud Storage e tabelas no Cloud Bigtable, permitindo fazer um JOIN SQL ad hoc imediato sem precisar desenvolver jobs de ETL.",
    "explanation_why_correct": "Como se trata de uma **consulta ad hoc** e os backups diários do Spanner já estão no Cloud Storage, a maneira mais rápida e eficiente é **configurar duas tabelas externas no BigQuery (apontando para o Cloud Storage e para o Cloud Bigtable)** e executar uma consulta SQL com `JOIN` diretamente no BigQuery, sem mover ou duplicar os dados.",
    "explanation_why_incorrect": "Desenvolver e executar jobs no Dataflow (A e B) ou provisionar um cluster Dataproc e escrever código Spark (C) exige muito mais tempo e custo para atender a uma simples solicitação analítica ad hoc.",
    "additional_reading": [
      {
        "title": "Introdução às fontes de dados externas do BigQuery",
        "url": "https://cloud.google.com/bigquery/docs/external-data-sources"
      }
    ]
  },
  {
    "id": 47,
    "type": "single",
    "category": "Planejar e configurar uma solução de nuvem (17.5%)",
    "category_en": "Planejar e configurar uma solução de nuvem (17.5%)",
    "objective": "2.2 Projetar alta disponibilidade entre múltiplas zonas do Compute Engine",
    "what_it_tests": "Para eliminar downtime caso a zona us-central1-a falhe, é necessário provisionar instâncias em pelo menos uma segunda zona da mesma região (us-central1-b) e distribuir o tráfego com um balanceador de carga.",
    "question": "Você está hospedando um aplicativo em máquinas virtuais (VMs) do Compute Engine em us-central1-a. Você deseja ajustar seu projeto (design) para suportar a falha de uma única zona do Compute Engine, eliminar o tempo de inatividade (downtime) e minimizar o custo. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "– Criar recursos do Compute Engine em us-central1-b. – Balancear a carga entre us-central1-a e us-central1-b."
      },
      {
        "id": "B",
        "text": "– Criar um Grupo Gerenciado de Instâncias e especificar us-central1-a como a zona. – Configurar a Verificação de Integridade com um Intervalo de Integridade curto."
      },
      {
        "id": "C",
        "text": "– Criar um Balanceador de Carga HTTP(S). – Criar uma ou mais regras de encaminhamento globais para direcionar o tráfego para suas VMs."
      },
      {
        "id": "D",
        "text": "– Realizar backups regulares do seu aplicativo. – Criar um Alerta do Cloud Monitoring e ser notificado se o seu aplicativo ficar indisponível. – Restaurar a partir dos backups quando notificado."
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Para eliminar downtime caso a zona us-central1-a falhe, é necessário provisionar instâncias em pelo menos uma segunda zona da mesma região (us-central1-b) e distribuir o tráfego com um balanceador de carga.",
    "explanation_why_correct": "Para suportar a falha completa de uma zona sem tempo de inatividade, você deve distribuir as VMs em pelo menos **duas zonas (`us-central1-a` e `us-central1-b`)** e **balancear a carga entre ambas as zonas**.",
    "explanation_why_incorrect": "Manter todas as VMs apenas na zona `us-central1-a` (B e C) causará indisponibilidade total se essa zona falhar. Restaurar backups manualmente após um alerta (D) gera tempo de inatividade (downtime), violando o requisito.",
    "additional_reading": [
      {
        "title": "Projetar sistemas resilientes e de alta disponibilidade no Compute Engine",
        "url": "https://cloud.google.com/architecture/framework/reliability"
      }
    ]
  },
  {
    "id": 48,
    "type": "single",
    "category": "Configurar acesso e segurança (20%)",
    "category_en": "Configurar acesso e segurança (20%)",
    "objective": "5.1 Verificar membros com o papel Project Owner usando gcloud projects get-iam-policy",
    "what_it_tests": "O comando 'gcloud projects get-iam-policy <PROJECT_ID>' retorna a política de IAM completa do projeto, listando todos os membros vinculados a cada papel (incluindo roles/owner).",
    "question": "Um colega transferiu um projeto do Google Cloud Platform para você manter. Como parte de uma verificação de segurança, você deseja revisar quem recebeu o papel de Project Owner. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "No console, validar quais chaves SSH foram armazenadas como chaves em todo o projeto."
      },
      {
        "id": "B",
        "text": "Navegar até o Identity-Aware Proxy e verificar as permissões para esses recursos."
      },
      {
        "id": "C",
        "text": "Habilitar os Logs de Auditoria na página IAM e administrador para todos os recursos e validar os resultados."
      },
      {
        "id": "D",
        "text": "Usar o comando gcloud projects get-iam-policy para visualizar as atribuições de papéis atuais."
      }
    ],
    "correct_answer": "D",
    "official_rationale": "O comando 'gcloud projects get-iam-policy <PROJECT_ID>' retorna a política de IAM completa do projeto, listando todos os membros vinculados a cada papel (incluindo roles/owner).",
    "explanation_why_correct": "O comando **`gcloud projects get-iam-policy`** exibe todas as vinculações (bindings) de papéis do IAM ativas no projeto, permitindo identificar imediatamente todos os usuários, grupos ou contas de serviço que possuem o papel `roles/owner` (Project Owner).",
    "explanation_why_incorrect": "Chaves SSH (A) e configurações do IAP (B) não listam os proprietários do projeto. Habilitar Audit Logs (C) registra eventos futuros de acesso, mas não lista quem já possui o papel Project Owner atualmente.",
    "additional_reading": [
      {
        "title": "Visualizar a política de IAM de um projeto com gcloud",
        "url": "https://cloud.google.com/sdk/gcloud/reference/projects/get-iam-policy"
      }
    ]
  },
  {
    "id": 49,
    "type": "single",
    "category": "Implantar e implementar uma solução de nuvem (25%)",
    "category_en": "Implantar e implementar uma solução de nuvem (25%)",
    "objective": "3.4 Resolver esgotamento de IPs de nós em clusters GKE expandindo o CIDR da sub-rede",
    "what_it_tests": "Os nós de um cluster GKE utilizam endereços do intervalo IP primário da sub-rede; quando os IPs para nós se esgotam, deve-se expandir o intervalo CIDR primário da sub-rede.",
    "question": "Você está executando vários clusters VPC-native do Google Kubernetes Engine na mesma sub-rede. Os IPs disponíveis para os nós estão esgotados e você deseja garantir que os clusters possam crescer em número de nós quando necessário. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Criar uma nova sub-rede na mesma região da sub-rede que está sendo usada."
      },
      {
        "id": "B",
        "text": "Adicionar um intervalo de IP de alias (alias IP range) à sub-rede usada pelos clusters GKE."
      },
      {
        "id": "C",
        "text": "Criar uma nova VPC e configurar o VPC peering com a VPC existente."
      },
      {
        "id": "D",
        "text": "Expandir o intervalo CIDR da sub-rede relevante para o cluster."
      }
    ],
    "correct_answer": "D",
    "official_rationale": "Os nós de um cluster GKE utilizam endereços do intervalo IP primário da sub-rede; quando os IPs para nós se esgotam, deve-se expandir o intervalo CIDR primário da sub-rede.",
    "explanation_why_correct": "Em um cluster GKE, os **nós (VMs)** recebem endereços do **intervalo CIDR primário da sub-rede** (enquanto os pods e services usam intervalos secundários/alias IPs). Como os IPs para os **nós** se esgotaram, você deve **expandir o intervalo CIDR primário da sub-rede relevante**.",
    "explanation_why_incorrect": "Um cluster GKE existente já está vinculado à sua sub-rede, portanto criar outra sub-rede (A) ou outra VPC (C) não dá mais IPs de nós ao cluster existente. Adicionar um alias IP / intervalo secundário (B) fornece IPs para *pods*, e não para os *nós* do cluster.",
    "additional_reading": [
      {
        "title": "Expandir intervalos de sub-rede para clusters GKE",
        "url": "https://cloud.google.com/vpc/docs/create-modify-vpc-networks#expand-subnet"
      }
    ]
  },
  {
    "id": 50,
    "type": "single",
    "category": "Planejar e configurar uma solução de nuvem (17.5%)",
    "category_en": "Planejar e configurar uma solução de nuvem (17.5%)",
    "objective": "2.2 Testar tolerância a falhas e reduzir custos de jobs em lote usando VMs Preemptivas",
    "what_it_tests": "Para cargas de trabalho em lote noturnas e tolerantes a falhas, pode-se simular eventos de manutenção/preempção para validar a resiliência e então usar VMs Preemptivas (Preemptible VMs), reduzindo os custos em até 80%.",
    "question": "Você tem uma carga de trabalho em lote (batch) que é executada todas as noites e usa um grande número de máquinas virtuais (VMs). Ela é tolerante a falhas e pode tolerar que algumas das VMs sejam encerradas. O custo atual das VMs é muito alto. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Executar um teste usando eventos de manutenção simulados. Se o teste for bem-sucedido, usar VMs N1 Standard preemptivas ao executar trabalhos futuros."
      },
      {
        "id": "B",
        "text": "Executar um teste usando eventos de manutenção simulados. Se o teste for bem-sucedido, usar VMs N1 Standard ao executar trabalhos futuros."
      },
      {
        "id": "C",
        "text": "Executar um teste usando um grupo gerenciado de instâncias. Se o teste for bem-sucedido, usar VMs N1 Standard no grupo gerenciado de instâncias ao executar trabalhos futuros."
      },
      {
        "id": "D",
        "text": "Executar um teste usando VMs N1 Standard em vez de N2. Se o teste for bem-sucedido, usar VMs N1 Standard ao executar trabalhos futuros."
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Para cargas de trabalho em lote noturnas e tolerantes a falhas, pode-se simular eventos de manutenção/preempção para validar a resiliência e então usar VMs Preemptivas (Preemptible VMs), reduzindo os custos em até 80%.",
    "explanation_why_correct": "Simular um evento de manutenção do host permite testar como o aplicativo lida com o encerramento abrupto de instâncias. Uma vez validado, **usar VMs Preemptivas (Preemptible VMs)** reduz drasticamente o custo (em até 80%) para cargas de trabalho batch noturnas tolerantes a falhas.",
    "explanation_why_incorrect": "As opções B, C e D continuam usando instâncias N1 Standard normais (não preemptivas), que não oferecem a grande redução de custo proporcionada pelas VMs Preemptivas.",
    "additional_reading": [
      {
        "title": "Usar VMs Preemptivas e simular eventos de manutenção do host",
        "url": "https://cloud.google.com/compute/docs/instances/simulating-host-maintenance"
      }
    ]
  }
];

const GCP_SIMULADO_4_QUESTIONS = [
  {
    "id": 1,
    "type": "single",
    "category": "Configurar acesso e segurança (20%)",
    "category_en": "Configurar acesso e segurança (20%)",
    "objective": "5.3 Restringir portas de saída (egress) usando prioridades de regras de firewall da VPC",
    "what_it_tests": "Como toda VPC possui uma regra implícita de saída (implied allow egress) com prioridade 65535 que permite todo o tráfego de saída, você deve sobrepô-la com uma regra deny egress em 65534 (baixa prioridade) e criar uma regra allow egress de alta prioridade (1000) apenas para as portas necessárias.",
    "question": "Você está trabalhando com um usuário para configurar um aplicativo em uma nova VPC atrás de um firewall. O usuário está preocupado com a saída de dados (data egress). Você deseja configurar o menor número possível de portas de saída abertas. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Configurar uma regra de baixa prioridade (65534) que bloqueie toda a saída (egress) e uma regra de alta prioridade (1000) que permita apenas as portas apropriadas."
      },
      {
        "id": "B",
        "text": "Configurar uma regra de alta prioridade (1000) que combine portas de entrada (ingress) e de saída (egress)."
      },
      {
        "id": "C",
        "text": "Configurar uma regra de alta prioridade (1000) que bloqueie toda a saída (egress) e uma regra de baixa prioridade (65534) que permita apenas as portas apropriadas."
      },
      {
        "id": "D",
        "text": "Configurar uma regra de alta prioridade (1000) para permitir as portas apropriadas."
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Como toda VPC possui uma regra implícita de saída (implied allow egress) com prioridade 65535 que permite todo o tráfego de saída, você deve sobrepô-la com uma regra deny egress em 65534 (baixa prioridade) e criar uma regra allow egress de alta prioridade (1000) apenas para as portas necessárias.",
    "explanation_why_correct": "No firewall da VPC, números menores significam **maior prioridade**, e existe uma regra implícita que permite toda saída na prioridade `65535`. Portanto, você deve criar uma **regra de baixa prioridade (`65534`) que bloqueie toda a saída (egress)** e uma **regra de alta prioridade (`1000`) que permita apenas as portas de saída apropriadas**.",
    "explanation_why_incorrect": "Uma regra de firewall da VPC não pode combinar direções de entrada e saída na mesma regra (B). Se a regra que bloqueia toda a saída tiver prioridade 1000 (C), ela terá precedência sobre a regra 65534 e bloqueará tudo. Apenas permitir as portas em 1000 (D) não bloqueia as demais portas por causa da regra implícita allow egress em 65535.",
    "additional_reading": [
      {
        "title": "Regras de firewall da VPC e avaliação de prioridade",
        "url": "https://cloud.google.com/vpc/docs/firewalls"
      }
    ]
  },
  {
    "id": 2,
    "type": "single",
    "category": "Configurar acesso e segurança (20%)",
    "category_en": "Configurar acesso e segurança (20%)",
    "objective": "5.1 Conceder acesso SSH a parceiros sem Conta do Google usando chaves SSH nas instâncias",
    "what_it_tests": "Quando usuários externos não possuem Contas do Google (impedindo o uso de Cloud IAM / IAP / OS Login), o acesso SSH às instâncias Linux do Compute Engine é concedido gerando pares de chaves SSH e adicionando as chaves públicas aos metadados das VMs.",
    "question": "Sua empresa executa suas cargas de trabalho Linux em instâncias do Compute Engine. Sua empresa trabalhará com um novo parceiro de operações que não usa Contas do Google. Você precisa conceder acesso às instâncias para o seu parceiro de operações para que eles possam manter as ferramentas instaladas. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Habilitar o Cloud IAP para as instâncias do Compute Engine e adicionar o parceiro de operações como Cloud IAP Tunnel User."
      },
      {
        "id": "B",
        "text": "Marcar todas as instâncias com a mesma tag de rede. Criar uma regra de firewall na VPC para conceder acesso TCP na porta 22 para o tráfego do parceiro de operações para instâncias com a tag de rede."
      },
      {
        "id": "C",
        "text": "Configurar o Cloud VPN entre a sua VPC do Google Cloud e a rede interna do parceiro de operações."
      },
      {
        "id": "D",
        "text": "Pedir ao parceiro de operações para gerar pares de chaves SSH e adicionar as chaves públicas às instâncias de VM."
      }
    ],
    "correct_answer": "D",
    "official_rationale": "Quando usuários externos não possuem Contas do Google (impedindo o uso de Cloud IAM / IAP / OS Login), o acesso SSH às instâncias Linux do Compute Engine é concedido gerando pares de chaves SSH e adicionando as chaves públicas aos metadados das VMs.",
    "explanation_why_correct": "Como o parceiro de operações **não utiliza Contas do Google**, recursos baseados no Cloud IAM (como OS Login ou Cloud IAP) não podem autenticar esses usuários. A solução correta é **pedir ao parceiro que gere pares de chaves SSH e adicionar as chaves públicas aos metadados das instâncias de VM**.",
    "explanation_why_incorrect": "O Cloud IAP (A) exige uma identidade do Google (Conta Google / Cloud Identity) para conceder o papel `Cloud IAP Tunnel User`. Apenas liberar o firewall (B) ou criar uma VPN (C) fornece conectividade de rede, mas não autentica o login SSH no sistema operacional Linux.",
    "additional_reading": [
      {
        "title": "Gerenciar chaves SSH em metadados de instâncias",
        "url": "https://cloud.google.com/compute/docs/connect/add-ssh-keys"
      }
    ]
  },
  {
    "id": 3,
    "type": "single",
    "category": "Implantar e implementar uma solução de nuvem (25%)",
    "category_en": "Implantar e implementar uma solução de nuvem (25%)",
    "objective": "3.3 Implantar funções orientadas a eventos do Cloud Storage com o Cloud Functions",
    "what_it_tests": "O Cloud Functions é a plataforma serverless de funções como serviço (FaaS) projetada para executar trechos de código em resposta a eventos, suportando gatilhos nativos de upload de objetos no Cloud Storage.",
    "question": "Você criou um trecho de código (code snippet) que deve ser acionado sempre que um novo arquivo for enviado por upload para um bucket do Cloud Storage. Você deseja implantar esse trecho de código. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Usar o App Engine e configurar o Cloud Scheduler para acionar o aplicativo usando o Pub/Sub."
      },
      {
        "id": "B",
        "text": "Usar o Cloud Functions e configurar o bucket como um recurso de gatilho (trigger resource)."
      },
      {
        "id": "C",
        "text": "Usar o Google Kubernetes Engine e configurar um CronJob para acionar o aplicativo usando o Pub/Sub."
      },
      {
        "id": "D",
        "text": "Usar o Dataflow como um job em lote (batch) e configurar o bucket como uma fonte de dados."
      }
    ],
    "correct_answer": "B",
    "official_rationale": "O Cloud Functions é a plataforma serverless de funções como serviço (FaaS) projetada para executar trechos de código em resposta a eventos, suportando gatilhos nativos de upload de objetos no Cloud Storage.",
    "explanation_why_correct": "O **Cloud Functions** permite implantar pequenos trechos de código serverless e configurar diretamente o **bucket do Cloud Storage como recurso de gatilho (trigger)** para o evento `google.storage.object.finalize` (novo arquivo enviado).",
    "explanation_why_incorrect": "Cloud Scheduler (A) e CronJobs no GKE (C) são baseados em agendamento de tempo (cron), e não orientados ao evento imediato de upload. Um job em lote no Dataflow (D) é voltado para pipelines pesados de dados, não para executar um simples snippet por evento.",
    "additional_reading": [
      {
        "title": "Gatilhos do Cloud Storage no Cloud Functions",
        "url": "https://cloud.google.com/functions/docs/calling/storage"
      }
    ]
  },
  {
    "id": 4,
    "type": "single",
    "category": "Garantir a operação bem-sucedida de uma solução de nuvem (20%)",
    "category_en": "Garantir a operação bem-sucedida de uma solução de nuvem (20%)",
    "objective": "4.2 Otimizar custos de retenção no Cloud Storage com Object Lifecycle Management",
    "what_it_tests": "Para objetos acessados com frequência nos primeiros 30 dias e raramente lidos pelos 3 anos seguintes, a combinação de menor custo é Standard Storage nos primeiros 30 dias (sem taxas de recuperação) e transição direta para Archive Storage após 30 dias.",
    "question": "Foi solicitado que você configurasse o Gerenciamento do Ciclo de Vida de Objetos (Object Lifecycle Management) para objetos armazenados em buckets de armazenamento. Os objetos são gravados uma vez e acessados com frequência por 30 dias. Após 30 dias, os objetos não são lidos novamente, a menos que haja uma necessidade especial. Os objetos devem ser mantidos por três anos e você precisa minimizar os custos. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Configurar uma política que use armazenamento Nearline por 30 dias e depois mova para o armazenamento Archive por três anos."
      },
      {
        "id": "B",
        "text": "Configurar uma política que use armazenamento Standard por 30 dias e depois mova para o armazenamento Archive por três anos."
      },
      {
        "id": "C",
        "text": "Configurar uma política que use armazenamento Nearline por 30 dias, depois mova para o Coldline por um ano e depois mova para o armazenamento Archive por dois anos."
      },
      {
        "id": "D",
        "text": "Configurar uma política que use armazenamento Standard por 30 dias, depois mova para o Coldline por um ano e depois mova para o armazenamento Archive por dois anos."
      }
    ],
    "correct_answer": "B",
    "official_rationale": "Para objetos acessados com frequência nos primeiros 30 dias e raramente lidos pelos 3 anos seguintes, a combinação de menor custo é Standard Storage nos primeiros 30 dias (sem taxas de recuperação) e transição direta para Archive Storage após 30 dias.",
    "explanation_why_correct": "Como os objetos são **acessados com frequência durante os primeiros 30 dias**, a classe **Standard** é a mais econômica nesse período (pois não cobra taxa de leitura/recuperação). Após 30 dias, como quase nunca serão lidos pelos próximos 3 anos, movê-los diretamente para o **Archive Storage** oferece o menor custo de armazenamento por GB.",
    "explanation_why_incorrect": "Usar Nearline nos primeiros 30 dias de acesso frequente (A e C) geraria altas cobranças de recuperação de dados. Passar um ano inteiro no Coldline antes de ir para o Archive (C e D) custa mais caro do que migrar diretamente para o Archive após os 30 dias.",
    "additional_reading": [
      {
        "title": "Classes de armazenamento e ciclo de vida no Cloud Storage",
        "url": "https://cloud.google.com/storage/docs/lifecycle"
      }
    ]
  },
  {
    "id": 5,
    "type": "single",
    "category": "Garantir a operação bem-sucedida de uma solução de nuvem (20%)",
    "category_en": "Garantir a operação bem-sucedida de uma solução de nuvem (20%)",
    "objective": "4.3 Registrar leituras de objetos no Cloud Storage habilitando Data Access audit logs",
    "what_it_tests": "Para registrar quem leu objetos em um bucket do Cloud Storage (eventos DATA_READ), é necessário habilitar os logs de auditoria de Acesso a Dados (Data Access audit logs) para a API do Cloud Storage.",
    "question": "Você está armazenando informações confidenciais em um bucket do Cloud Storage. Por motivos legais, você precisa ser capaz de registrar todas as solicitações que leem qualquer um dos dados armazenados. Você quer ter certeza de que cumpre esses requisitos. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Habilitar a API do Identity-Aware Proxy no projeto."
      },
      {
        "id": "B",
        "text": "Inspecionar o bucket usando a API Data Loss Prevention."
      },
      {
        "id": "C",
        "text": "Permitir que apenas uma única Conta de Serviço tenha acesso para ler os dados."
      },
      {
        "id": "D",
        "text": "Habilitar os logs de auditoria de Acesso a Dados (Data Access audit logs) para a API do Cloud Storage."
      }
    ],
    "correct_answer": "D",
    "official_rationale": "Para registrar quem leu objetos em um bucket do Cloud Storage (eventos DATA_READ), é necessário habilitar os logs de auditoria de Acesso a Dados (Data Access audit logs) para a API do Cloud Storage.",
    "explanation_why_correct": "Os **logs de auditoria de Acesso a Dados (Data Access audit logs)** para a API do Cloud Storage (`DATA_READ`) ficam desabilitados por padrão devido ao volume. Habilitá-los garante que **todas as solicitações de leitura de objetos** sejam registradas no Cloud Logging para conformidade legal.",
    "explanation_why_incorrect": "O IAP (A) controla acesso a aplicações web/VMs, não registrando leituras diretas na API do Cloud Storage. A API DLP (B) descobre e mascara dados sensíveis, mas não audita acessos de leitura. Restringir a uma conta de serviço (C) não registra os logs de auditoria de leitura exigidos por lei.",
    "additional_reading": [
      {
        "title": "Logs de auditoria do Cloud para o Cloud Storage",
        "url": "https://cloud.google.com/storage/docs/audit-logging"
      }
    ]
  },
  {
    "id": 6,
    "type": "single",
    "category": "Configurar um ambiente de solução em nuvem (17.5%)",
    "category_en": "Configurar um ambiente de solução em nuvem (17.5%)",
    "objective": "1.1 Configurar orçamentos e alertas de faturamento por projeto",
    "what_it_tests": "Para receber notificações automáticas quando qualquer projeto individual ultrapassar US$ 500 mensais, cria-se um orçamento (budget) escopado para cada projeto com alertas de orçamento configurados.",
    "question": "Você é o líder de equipe de um grupo de 10 desenvolvedores. Você forneceu a cada desenvolvedor um Projeto individual do Google Cloud que eles podem usar como seu ambiente de testes (sandbox) pessoal para experimentar diferentes soluções do Google Cloud. Você deseja ser notificado se algum dos desenvolvedores estiver gastando mais de US$ 500 por mês em seu ambiente sandbox. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Criar um único orçamento para todos os projetos e configurar alertas de orçamento nesse orçamento."
      },
      {
        "id": "B",
        "text": "Criar uma conta de faturamento separada por projeto sandbox e habilitar exportações de faturamento para o BigQuery. Criar um painel no Data Studio para exibir os gastos por conta de faturamento."
      },
      {
        "id": "C",
        "text": "Criar um orçamento por projeto e configurar alertas de orçamento em todos esses orçamentos."
      },
      {
        "id": "D",
        "text": "Criar uma única conta de faturamento para todos os projetos sandbox e habilitar exportações de faturamento para o BigQuery. Criar um painel no Data Studio para exibir os gastos por projeto."
      }
    ],
    "correct_answer": "C",
    "official_rationale": "Para receber notificações automáticas quando qualquer projeto individual ultrapassar US$ 500 mensais, cria-se um orçamento (budget) escopado para cada projeto com alertas de orçamento configurados.",
    "explanation_why_correct": "Criar **um orçamento por projeto** (com valor de US$ 500) e **configurar alertas de orçamento em cada um deles** garante que você receba uma notificação automática assim que qualquer projeto sandbox individual ultrapassar o limite.",
    "explanation_why_incorrect": "Um único orçamento somando todos os projetos (A) alertaria sobre o gasto combinado dos 10 projetos, e não por desenvolvedor individual. Painéis no Data Studio/Looker Studio (B e D) exigem acompanhamento visual manual e não enviam notificações automáticas de limite de orçamento.",
    "additional_reading": [
      {
        "title": "Criar, editar ou excluir orçamentos e alertas de orçamento",
        "url": "https://cloud.google.com/billing/docs/how-to/budgets"
      }
    ]
  },
  {
    "id": 7,
    "type": "single",
    "category": "Garantir a operação bem-sucedida de uma solução de nuvem (20%)",
    "category_en": "Garantir a operação bem-sucedida de uma solução de nuvem (20%)",
    "objective": "4.1 Proteger instâncias de produção do Compute Engine contra exclusão acidental",
    "what_it_tests": "A flag de proteção contra exclusão (deletion protection) impede que uma instância de VM seja excluída pelo Console, CLI ou API até que a proteção seja explicitamente desativada.",
    "question": "Você está implantando um aplicativo de produção no Compute Engine. Você deseja impedir que qualquer pessoa destrua acidentalmente a instância clicando no botão errado. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Desabilitar a flag “Excluir disco de inicialização quando a instância for excluída” (Delete boot disk when instance is deleted)."
      },
      {
        "id": "B",
        "text": "Habilitar a proteção contra exclusão (delete protection) na instância."
      },
      {
        "id": "C",
        "text": "Desabilitar a Reinicialização automática (Automatic restart) na instância."
      },
      {
        "id": "D",
        "text": "Habilitar a Preemptibilidade (Preemptibility) na instância."
      }
    ],
    "correct_answer": "B",
    "official_rationale": "A flag de proteção contra exclusão (deletion protection) impede que uma instância de VM seja excluída pelo Console, CLI ou API até que a proteção seja explicitamente desativada.",
    "explanation_why_correct": "Habilitar a **proteção contra exclusão (delete protection)** na instância bloqueia qualquer tentativa de exclusão da VM (como clicar acidentalmente em Excluir no Console) até que essa propriedade seja removida.",
    "explanation_why_incorrect": "Manter o disco de inicialização após a exclusão (A) preserva o disco, mas não impede que a instância de VM seja destruída e saia do ar. Desabilitar reinicialização automática (C) ou habilitar preemptibilidade (D) reduz a disponibilidade da VM.",
    "additional_reading": [
      {
        "title": "Prevenir a exclusão acidental de VMs",
        "url": "https://cloud.google.com/compute/docs/instances/preventing-accidental-vm-deletion"
      }
    ]
  },
  {
    "id": 8,
    "type": "single",
    "category": "Configurar acesso e segurança (20%)",
    "category_en": "Configurar acesso e segurança (20%)",
    "objective": "5.1 Evitar expansão futura de permissões usando papéis personalizados do IAM",
    "what_it_tests": "Enquanto papéis predefinidos e básicos são atualizados automaticamente pelo Google quando novos recursos/permissões são lançados, um papel personalizado (custom role) possui uma lista estática de permissões controlada por você; aplicá-lo apenas no projeto de produção garante o menor privilégio.",
    "question": "Sua empresa usa um grande número de serviços do Google Cloud centralizados em um único projeto. Todas as equipes têm projetos específicos para testes e desenvolvimento. A equipe de DevOps precisa de acesso a todos os serviços de produção para realizar seu trabalho. Você deseja impedir que mudanças futuras nos produtos do Google Cloud ampliem suas permissões no futuro. Você quer seguir as práticas recomendadas pelo Google. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Conceder a todos os membros da equipe de DevOps o papel de Project Editor no nível da organização."
      },
      {
        "id": "B",
        "text": "Conceder a todos os membros da equipe de DevOps o papel de Project Editor no projeto de produção."
      },
      {
        "id": "C",
        "text": "Criar um papel personalizado que combine as permissões necessárias. Conceder à equipe de DevOps o papel personalizado no projeto de produção."
      },
      {
        "id": "D",
        "text": "Criar um papel personalizado que combine as permissões necessárias. Conceder à equipe de DevOps o papel personalizado no nível da organização."
      }
    ],
    "correct_answer": "C",
    "official_rationale": "Enquanto papéis predefinidos e básicos são atualizados automaticamente pelo Google quando novos recursos/permissões são lançados, um papel personalizado (custom role) possui uma lista estática de permissões controlada por você; aplicá-lo apenas no projeto de produção garante o menor privilégio.",
    "explanation_why_correct": "Papéis básicos (como `Project Editor`) e predefinidos recebem novas permissões automaticamente quando o Google Cloud lança novos serviços ou funcionalidades. Para impedir que mudanças nos produtos ampliem as permissões no futuro e manter o menor privilégio, você deve **criar um papel personalizado (custom role) com as permissões exatas necessárias e concedê-lo apenas no projeto de produção**.",
    "explanation_why_incorrect": "O papel `Project Editor` (A e B) é excessivamente amplo e atualizado pelo Google automaticamente. Conceder o papel no nível da organização (A e D) daria acesso a todos os projetos da empresa, violando o escopo restrito ao projeto de produção.",
    "additional_reading": [
      {
        "title": "Papéis personalizados do IAM no Google Cloud",
        "url": "https://cloud.google.com/iam/docs/creating-custom-roles"
      }
    ]
  },
  {
    "id": 9,
    "type": "multi",
    "category": "Configurar acesso e segurança (20%)",
    "category_en": "Configurar acesso e segurança (20%)",
    "objective": "5.3 Combinar Signed URLs e Object Lifecycle Management no Cloud Storage",
    "what_it_tests": "URLs assinadas (Signed URLs) concedem acesso de upload restrito ao objeto específico por 30 minutos sem manutenção de contas, e o Object Lifecycle Management exclui automaticamente objetos com mais de 45 dias.",
    "question": "Você está construindo um aplicativo que processa arquivos de dados enviados por milhares de fornecedores. Seus objetivos principais para o aplicativo são a segurança dos dados e a expiração de dados antigos. Você precisa projetar o aplicativo para:\n\n• Restringir o acesso para que os fornecedores possam acessar apenas seus próprios dados.\n• Conceder aos fornecedores acesso de gravação aos dados apenas por 30 minutos.\n• Excluir dados com mais de 45 dias.\n\nVocê tem um ciclo de desenvolvimento muito curto e precisa garantir que o aplicativo exija manutenção mínima. Quais duas estratégias você deve usar? (Escolha duas.)",
    "options": [
      {
        "id": "A",
        "text": "Criar uma política de ciclo de vida (lifecycle policy) para excluir objetos do Cloud Storage após 45 dias."
      },
      {
        "id": "B",
        "text": "Usar URLs assinadas (signed URLs) para permitir aos fornecedores acesso por tempo limitado para armazenar seus objetos."
      },
      {
        "id": "C",
        "text": "Configurar um servidor SFTP para o seu aplicativo e criar um usuário separado para cada fornecedor."
      },
      {
        "id": "D",
        "text": "Construir uma Cloud Function que acione um temporizador de 45 dias para excluir objetos que expiraram."
      },
      {
        "id": "E",
        "text": "Desenvolver um script que percorra todos os buckets do Cloud Storage e exclua quaisquer buckets com mais de 45 dias."
      }
    ],
    "correct_answer": [
      "A",
      "B"
    ],
    "official_rationale": "URLs assinadas (Signed URLs) concedem acesso de upload restrito ao objeto específico por 30 minutos sem manutenção de contas, e o Object Lifecycle Management exclui automaticamente objetos com mais de 45 dias.",
    "explanation_why_correct": "1. **Criar uma política de ciclo de vida (Object Lifecycle Management) para excluir objetos após 45 dias (A)** automatiza a expiração de dados sem código ou manutenção.\n2. **Usar URLs assinadas (Signed URLs) (B)** permite gerar links de upload (`PUT`/`POST`) válidos por apenas **30 minutos** para um caminho de objeto específico de cada fornecedor.",
    "explanation_why_incorrect": "Gerenciar um servidor SFTP com milhares de usuários (C), manter timers de 45 dias em Cloud Functions (D) ou excluir buckets inteiros via script (E) são soluções complexas, frágeis ou incorretas.",
    "additional_reading": [
      {
        "title": "URLs assinadas e Gerenciamento do Ciclo de Vida no Cloud Storage",
        "url": "https://cloud.google.com/storage/docs/access-control/signed-urls"
      }
    ]
  },
  {
    "id": 10,
    "type": "single",
    "category": "Implantar e implementar uma solução de nuvem (25%)",
    "category_en": "Implantar e implementar uma solução de nuvem (25%)",
    "objective": "3.6 Padronizar o provisionamento de recursos com Infraestrutura como Código (Cloud Deployment Manager)",
    "what_it_tests": "O Cloud Deployment Manager permite criar templates parametrizados (em Jinja2 ou Python) reutilizáveis para gerenciar a infraestrutura como código de forma declarativa e sem repetição.",
    "question": "Sua empresa deseja padronizar a criação e o gerenciamento de múltiplos recursos do Google Cloud usando Infraestrutura como Código (Infrastructure as Code). Você deseja minimizar a quantidade de código repetitivo necessária para gerenciar o ambiente. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Desenvolver modelos (templates) para o ambiente usando o Cloud Deployment Manager."
      },
      {
        "id": "B",
        "text": "Usar 'curl' em um terminal para enviar uma solicitação REST para a API relevante do Google para cada recurso individual."
      },
      {
        "id": "C",
        "text": "Usar a interface do Cloud Console para provisionar e gerenciar todos os recursos relacionados."
      },
      {
        "id": "D",
        "text": "Criar um script bash que contenha todas as etapas necessárias como comandos 'gcloud'."
      }
    ],
    "correct_answer": "A",
    "official_rationale": "O Cloud Deployment Manager permite criar templates parametrizados (em Jinja2 ou Python) reutilizáveis para gerenciar a infraestrutura como código de forma declarativa e sem repetição.",
    "explanation_why_correct": "Desenvolver **modelos (templates) reutilizáveis no Cloud Deployment Manager** implementa Infraestrutura como Código (IaC) declarativa no Google Cloud, minimizando código repetitivo por meio de templates parametrizados.",
    "explanation_why_incorrect": "Chamadas imperativas via `curl` (B), cliques manuais no Cloud Console (C) ou scripts bash imperativos com `gcloud` (D) não oferecem gerenciamento declarativo de estado nem reutilização modular de templates IaC.",
    "additional_reading": [
      {
        "title": "Usar modelos (templates) no Cloud Deployment Manager",
        "url": "https://cloud.google.com/deployment-manager/docs/configuration/templates/create-basic-template"
      }
    ]
  },
  {
    "id": 11,
    "type": "single",
    "category": "Configurar acesso e segurança (20%)",
    "category_en": "Configurar acesso e segurança (20%)",
    "objective": "5.1 Verificar quem possui permissão para visualizar dados revisando políticas do IAM",
    "what_it_tests": "Para descobrir quem tem permissão (acesso concedido) para visualizar dados em um projeto, revisam-se as políticas e vinculações de papéis do IAM que concedem leitura de dados.",
    "question": "Você está realizando uma verificação mensal de segurança do seu ambiente do Google Cloud e deseja saber quem tem acesso para visualizar os dados armazenados em seu Projeto do Google Cloud. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Habilitar os Logs de Auditoria (Audit Logs) para todas as APIs relacionadas ao armazenamento de dados."
      },
      {
        "id": "B",
        "text": "Revisar as permissões do IAM para qualquer papel que permita acesso aos dados."
      },
      {
        "id": "C",
        "text": "Revisar as configurações do Identity-Aware Proxy para cada recurso."
      },
      {
        "id": "D",
        "text": "Criar um job de Prevenção contra Perda de Dados (Data Loss Prevention - DLP)."
      }
    ],
    "correct_answer": "B",
    "official_rationale": "Para descobrir quem tem permissão (acesso concedido) para visualizar dados em um projeto, revisam-se as políticas e vinculações de papéis do IAM que concedem leitura de dados.",
    "explanation_why_correct": "Para saber **quem tem permissão de acesso** para visualizar dados armazenados no projeto, você deve **revisar as políticas/permissões do IAM** associadas aos papéis que permitem leitura de dados.",
    "explanation_why_incorrect": "Os Audit Logs (A) mostram quem *efetivamente acessou* os dados no passado, mas não listam todos os usuários que *têm permissão* para acessá-los. O IAP (C) aplica-se apenas a túneis HTTPS/TCP, e o Cloud DLP (D) classifica dados sensíveis, não auditando permissões de usuários.",
    "additional_reading": [
      {
        "title": "Analisar políticas do IAM com o Policy Analyzer / Cloud IAM",
        "url": "https://cloud.google.com/iam/docs/overview"
      }
    ]
  },
  {
    "id": 12,
    "type": "single",
    "category": "Implantar e implementar uma solução de nuvem (25%)",
    "category_en": "Implantar e implementar uma solução de nuvem (25%)",
    "objective": "3.4 Desacoplar endereços IP de bancos de dados híbridos usando zonas privadas do Cloud DNS",
    "what_it_tests": "Criar uma zona privada no Cloud DNS permite que todos os aplicativos na VPC se conectem ao banco de dados on-premises usando um nome de domínio (FQDN); se o IP mudar, basta atualizar um único registro DNS.",
    "question": "Sua empresa adotou uma estratégia de nuvem híbrida em que alguns dos aplicativos são implantados no Google Cloud. Um túnel de Rede Privada Virtual (VPN) conecta sua Nuvem Privada Virtual (VPC) no Google Cloud com a rede local (on-premises) da sua empresa. Vários aplicativos no Google Cloud precisam se conectar a um servidor de banco de dados local, e você deseja evitar ter que alterar a configuração de IP em todos os seus aplicativos quando o IP do banco de dados mudar. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Configurar o Cloud NAT para todas as sub-redes da sua VPC para ser usado na saída das instâncias de VM."
      },
      {
        "id": "B",
        "text": "Criar uma zona privada no Cloud DNS e configurar os aplicativos com o nome DNS."
      },
      {
        "id": "C",
        "text": "Configurar o IP do banco de dados como metadados personalizados para cada instância e consultar o servidor de metadados."
      },
      {
        "id": "D",
        "text": "Consultar o DNS interno do Compute Engine a partir dos aplicativos para recuperar o IP do banco de dados."
      }
    ],
    "correct_answer": "B",
    "official_rationale": "Criar uma zona privada no Cloud DNS permite que todos os aplicativos na VPC se conectem ao banco de dados on-premises usando um nome de domínio (FQDN); se o IP mudar, basta atualizar um único registro DNS.",
    "explanation_why_correct": "Criar uma **zona privada no Cloud DNS** e configurar os aplicativos para usarem o **nome DNS** permite que, caso o IP do banco de dados on-premises mude, você atualize apenas o registro `A` no Cloud DNS, sem precisar modificar nenhum aplicativo.",
    "explanation_why_incorrect": "O Cloud NAT (A) faz tradução de endereços de saída para a internet, não resolução de nomes. Metadados por instância (C) exigiriam atualizar cada instância. O DNS interno automático do Compute Engine (D) resolve apenas VMs criadas dentro da própria VPC, não servidores on-premises.",
    "additional_reading": [
      {
        "title": "Zonas privadas no Cloud DNS",
        "url": "https://cloud.google.com/dns/docs/zones#create-private-zone"
      }
    ]
  },
  {
    "id": 13,
    "type": "single",
    "category": "Planejar e configurar uma solução de nuvem (17.5%)",
    "category_en": "Planejar e configurar uma solução de nuvem (17.5%)",
    "objective": "2.2 Escalonar contêineres a zero fora do horário comercial usando o Cloud Run (totalmente gerenciado)",
    "what_it_tests": "O Cloud Run (totalmente gerenciado) é serverless, cobra apenas pelo tempo de processamento das requisições e escalona automaticamente a zero instâncias quando não há tráfego, gerando custo zero fora do horário de uso.",
    "question": "Você desenvolveu um aplicativo web em contêiner que atenderá colegas internos durante o horário comercial. Você deseja garantir que nenhum custo seja incorrido fora do horário em que o aplicativo é usado. Você acabou de criar um novo projeto do Google Cloud e deseja implantar o aplicativo. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Implantar o contêiner no Cloud Run for Anthos e definir o número mínimo de instâncias como zero."
      },
      {
        "id": "B",
        "text": "Implantar o contêiner no Cloud Run (totalmente gerenciado) e definir o número mínimo de instâncias como zero."
      },
      {
        "id": "C",
        "text": "Implantar o contêiner no ambiente flexível do App Engine (App Engine flexible environment) com escalonamento automático e definir o valor 'min_instances' como zero no app.yaml."
      },
      {
        "id": "D",
        "text": "Implantar o contêiner no ambiente flexível do App Engine com escalonamento manual e definir o valor 'instances' como zero no app.yaml."
      }
    ],
    "correct_answer": "B",
    "official_rationale": "O Cloud Run (totalmente gerenciado) é serverless, cobra apenas pelo tempo de processamento das requisições e escalona automaticamente a zero instâncias quando não há tráfego, gerando custo zero fora do horário de uso.",
    "explanation_why_correct": "O **Cloud Run (totalmente gerenciado)** escalona automaticamente o número de instâncias para **zero** quando não há requisições, garantindo que **nenhum custo de computação seja incorrido** fora do horário comercial.",
    "explanation_why_incorrect": "O Cloud Run for Anthos (A) exige um cluster GKE subjacente cujos nós continuam gerando custos mesmo com zero pods. O App Engine Flexible (C e D) não escalona a zero (exige no mínimo 1 instância ativa em execução contínua).",
    "additional_reading": [
      {
        "title": "Visão geral e modelo de preços do Cloud Run",
        "url": "https://cloud.google.com/run/docs/overview/what-is-cloud-run"
      }
    ]
  },
  {
    "id": 14,
    "type": "single",
    "category": "Configurar um ambiente de solução em nuvem (17.5%)",
    "category_en": "Configurar um ambiente de solução em nuvem (17.5%)",
    "objective": "1.1 Alterar a conta de faturamento vinculada a projetos existentes",
    "what_it_tests": "Para que as cobranças futuras dos projetos passem a ser faturadas na fatura corporativa da empresa, basta alterar a conta de faturamento vinculada aos projetos para a conta de faturamento da empresa.",
    "question": "Você fez experimentos com o Google Cloud usando seu próprio cartão de crédito e pediu reembolso dos custos para sua empresa. Sua empresa deseja simplificar o processo de faturamento e cobrar os custos dos seus projetos na fatura mensal deles. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Conceder à equipe financeira o papel do IAM de “Billing Account User” na conta de faturamento vinculada ao seu cartão de crédito."
      },
      {
        "id": "B",
        "text": "Configurar a exportação de faturamento para o BigQuery e conceder ao seu departamento financeiro acesso no IAM para consultar os dados."
      },
      {
        "id": "C",
        "text": "Criar um chamado no Suporte de Faturamento do Google para pedir que enviem a fatura para sua empresa."
      },
      {
        "id": "D",
        "text": "Alterar a conta de faturamento dos seus projetos para a conta de faturamento da sua empresa."
      }
    ],
    "correct_answer": "D",
    "official_rationale": "Para que as cobranças futuras dos projetos passem a ser faturadas na fatura corporativa da empresa, basta alterar a conta de faturamento vinculada aos projetos para a conta de faturamento da empresa.",
    "explanation_why_correct": "Basta **alterar a conta de faturamento (billing account) vinculada aos seus projetos para a conta de faturamento faturada (invoiced) da sua empresa**. A partir desse momento, todos os custos dos projetos serão cobrados diretamente na fatura mensal corporativa.",
    "explanation_why_incorrect": "Dar acesso à sua conta pessoal de cartão de crédito (A) ou exportar dados para o BigQuery (B) continuará cobrando no seu cartão pessoal. O suporte do Google (C) não converte uma conta pessoal de cartão em fatura corporativa de outra conta sem vincular os projetos à conta da empresa.",
    "additional_reading": [
      {
        "title": "Alterar a conta de faturamento de um projeto",
        "url": "https://cloud.google.com/billing/docs/how-to/modify-project"
      }
    ]
  },
  {
    "id": 15,
    "type": "single",
    "category": "Configurar acesso e segurança (20%)",
    "category_en": "Configurar acesso e segurança (20%)",
    "objective": "5.2 Conceder acesso entre projetos a um dataset do BigQuery para a conta de serviço de um parceiro",
    "what_it_tests": "Quando o aplicativo do parceiro roda no projeto do próprio parceiro no Google Cloud, o parceiro cria a Conta de Serviço no projeto dele e você concede a essa Conta de Serviço permissão de leitura diretamente no dataset do BigQuery no seu projeto.",
    "question": "Você está executando um data warehouse no BigQuery. Uma empresa parceira está oferecendo um mecanismo de recomendação baseado nos dados do seu data warehouse. A empresa parceira também está executando seu aplicativo no Google Cloud. Eles gerenciam os recursos em seu próprio projeto, mas precisam de acesso ao conjunto de dados (dataset) do BigQuery no seu projeto. Você deseja fornecer à empresa parceira acesso ao conjunto de dados. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Criar uma Conta de Serviço em seu próprio projeto e conceder a essa Conta de Serviço acesso ao BigQuery em seu projeto."
      },
      {
        "id": "B",
        "text": "Criar uma Conta de Serviço em seu próprio projeto e pedir ao parceiro para conceder a essa Conta de Serviço acesso ao BigQuery no projeto deles."
      },
      {
        "id": "C",
        "text": "Pedir ao parceiro para criar uma Conta de Serviço no projeto deles e fazer com que eles concedam à Conta de Serviço acesso ao BigQuery no projeto deles."
      },
      {
        "id": "D",
        "text": "Pedir ao parceiro para criar uma Conta de Serviço no projeto deles e conceder à Conta de Serviço deles acesso ao conjunto de dados do BigQuery no seu projeto."
      }
    ],
    "correct_answer": "D",
    "official_rationale": "Quando o aplicativo do parceiro roda no projeto do próprio parceiro no Google Cloud, o parceiro cria a Conta de Serviço no projeto dele e você concede a essa Conta de Serviço permissão de leitura diretamente no dataset do BigQuery no seu projeto.",
    "explanation_why_correct": "Como a empresa parceira gerencia a aplicação no projeto dela, a prática recomendada (evitando exportar chaves privadas) é **pedir ao parceiro que crie uma Conta de Serviço no projeto dele** e **conceder ao endereço de e-mail dessa Conta de Serviço acesso ao dataset do BigQuery no seu projeto**.",
    "explanation_why_incorrect": "Criar a conta de serviço no seu próprio projeto (A e B) exigiria exportar e compartilhar arquivos de chave privada JSON com terceiros. Na opção C, o parceiro conceder acesso no projeto dele não dá permissão para ler o dataset que está no seu projeto.",
    "additional_reading": [
      {
        "title": "Conceder acesso a conjuntos de dados no BigQuery",
        "url": "https://cloud.google.com/bigquery/docs/dataset-access-controls"
      }
    ]
  },
  {
    "id": 16,
    "type": "single",
    "category": "Implantar e implementar uma solução de nuvem (25%)",
    "category_en": "Implantar e implementar uma solução de nuvem (25%)",
    "objective": "3.3 Realizar implantação canário (canary deployment) dividindo tráfego entre revisões no Cloud Run",
    "what_it_tests": "No Cloud Run (e Cloud Run for Anthos), cada atualização de um serviço gera uma nova revisão (revision) imutável, e o próprio serviço suporta divisão nativa de tráfego (traffic splitting) percentual entre revisões para canary deployments.",
    "question": "Seu aplicativo web vem sendo executado com sucesso no Cloud Run for Anthos. Você deseja avaliar uma versão atualizada do aplicativo com uma porcentagem específica de seus usuários de produção (implantação canário / canary deployment). O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Criar um novo serviço com a nova versão do aplicativo. Dividir o tráfego entre esta versão e a versão que está em execução no momento."
      },
      {
        "id": "B",
        "text": "Criar uma nova revisão (revision) com a nova versão do aplicativo. Dividir o tráfego entre esta versão e a versão que está em execução no momento."
      },
      {
        "id": "C",
        "text": "Criar um novo serviço com a nova versão do aplicativo. Adicionar um Balanceador de Carga HTTP na frente de ambos os serviços."
      },
      {
        "id": "D",
        "text": "Criar uma nova revisão com a nova versão do aplicativo. Adicionar um Balanceador de Carga HTTP na frente de ambas as revisões."
      }
    ],
    "correct_answer": "B",
    "official_rationale": "No Cloud Run (e Cloud Run for Anthos), cada atualização de um serviço gera uma nova revisão (revision) imutável, e o próprio serviço suporta divisão nativa de tráfego (traffic splitting) percentual entre revisões para canary deployments.",
    "explanation_why_correct": "No Cloud Run, implantar uma atualização no mesmo serviço cria automaticamente uma **nova revisão (`revision`)**. Em seguida, você usa o recurso nativo de **divisão de tráfego (traffic splitting)** do Cloud Run para direcionar uma porcentagem específica de tráfego para a nova revisão e manter o restante na revisão atual.",
    "explanation_why_incorrect": "Criar um serviço separado (A e C) gera um novo endpoint de URL diferente, e não é necessário configurar um Balanceador de Carga HTTP externo (C e D) apenas para dividir tráfego entre revisões do Cloud Run.",
    "additional_reading": [
      {
        "title": " implantação gradual (rollbacks e divisão de tráfego) entre revisões no Cloud Run",
        "url": "https://cloud.google.com/run/docs/rollouts-rollbacks-traffic-migration"
      }
    ]
  },
  {
    "id": 17,
    "type": "single",
    "category": "Planejar e configurar uma solução de nuvem (17.5%)",
    "category_en": "Planejar e configurar uma solução de nuvem (17.5%)",
    "objective": "2.4 Selecionar o balanceador de carga externo para tráfego UDP de jogos móveis",
    "what_it_tests": "O External Network Load Balancer (balanceador de carga de rede de passagem TCP/UDP externo) é o único balanceador de carga do Google Cloud que suporta tráfego UDP vindo da Internet pública.",
    "question": "Sua empresa desenvolveu um jogo para dispositivos móveis que está implantado no Google Cloud. Os jogadores estão se conectando ao jogo com seus telefones pessoais pela Internet. O jogo envia pacotes UDP para atualizar os servidores sobre as ações dos jogadores enquanto eles jogam no modo multijogador. O backend do seu jogo pode escalonar em várias máquinas virtuais (VMs) e você deseja expor as VMs por meio de um único endereço IP. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Configurar um balanceador de carga SSL Proxy na frente dos servidores de aplicativos."
      },
      {
        "id": "B",
        "text": "Configurar um balanceador de carga UDP Interno na frente dos servidores de aplicativos."
      },
      {
        "id": "C",
        "text": "Configurar um balanceador de carga HTTP(S) Externo na frente dos servidores de aplicativos."
      },
      {
        "id": "D",
        "text": "Configurar um balanceador de carga de Rede Externo (External Network Load Balancer) na frente dos servidores de aplicativos."
      }
    ],
    "correct_answer": "D",
    "official_rationale": "O External Network Load Balancer (balanceador de carga de rede de passagem TCP/UDP externo) é o único balanceador de carga do Google Cloud que suporta tráfego UDP vindo da Internet pública.",
    "explanation_why_correct": "Para balancear **tráfego UDP vindo da Internet pública** através de um único endereço IP externo, você deve usar o **Balanceador de Carga de Rede Externo (External TCP/UDP Network Load Balancer)**.",
    "explanation_why_incorrect": "O SSL Proxy (A) e o HTTP(S) Load Balancer (C) não suportam o protocolo UDP (apenas TCP/SSL e HTTP/S). O balanceador UDP Interno (B) aceita apenas tráfego privado interno à VPC, não clientes na Internet pública.",
    "additional_reading": [
      {
        "title": "Visão geral do balanceador de carga de rede TCP/UDP externo",
        "url": "https://cloud.google.com/load-balancing/docs/network"
      }
    ]
  },
  {
    "id": 18,
    "type": "single",
    "category": "Garantir a operação bem-sucedida de uma solução de nuvem (20%)",
    "category_en": "Garantir a operação bem-sucedida de uma solução de nuvem (20%)",
    "objective": "4.2 Automatizar a sincronização de arquivos locais com o Cloud Storage usando gsutil e cron",
    "what_it_tests": "O comando 'gsutil rsync' (ou 'gcloud storage rsync') agendado via cron é a maneira padrão, simples e automatizada de sincronizar diretórios locais com um bucket do Cloud Storage.",
    "question": "Você trabalha para um hospital que armazena suas imagens médicas em uma sala de dados local (on-premises). O hospital deseja usar o Cloud Storage para armazenamento de arquivamento dessas imagens. O hospital quer um processo automatizado para fazer o upload de quaisquer novas imagens médicas para o Cloud Storage. Você precisa projetar e implementar uma solução. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Criar um tópico do Pub/Sub e habilitar um gatilho do Cloud Storage para o tópico do Pub/Sub. Criar um aplicativo que envie todas as imagens médicas para o tópico do Pub/Sub."
      },
      {
        "id": "B",
        "text": "Implantar um job do Dataflow a partir do modelo em lote “Datastore to Cloud Storage”. Agendar o job em lote no intervalo desejado."
      },
      {
        "id": "C",
        "text": "Criar um script que use a interface de linha de comando 'gsutil' para sincronizar o armazenamento local com o Cloud Storage. Agendar o script como um job cron."
      },
      {
        "id": "D",
        "text": "No Cloud Console, acessar o Cloud Storage. Fazer o upload das imagens relevantes para o bucket apropriado."
      }
    ],
    "correct_answer": "C",
    "official_rationale": "O comando 'gsutil rsync' (ou 'gcloud storage rsync') agendado via cron é a maneira padrão, simples e automatizada de sincronizar diretórios locais com um bucket do Cloud Storage.",
    "explanation_why_correct": "Criar um **script que utilize a CLI `gsutil` (`gsutil -m rsync`)** para sincronizar o diretório on-premises com o bucket do Cloud Storage e **agendá-lo como um job `cron`** automatiza o envio apenas dos arquivos novos de forma simples e confiável.",
    "explanation_why_incorrect": "O Pub/Sub (A) é um sistema de mensageria com limite de tamanho de mensagem (10 MB) e não grava automaticamente imagens em buckets sem um consumidor. Os arquivos não estão no Datastore (B), e o upload manual pelo Console (D) não é automatizado.",
    "additional_reading": [
      {
        "title": "Sincronizar diretórios com gsutil rsync",
        "url": "https://cloud.google.com/storage/docs/gsutil/commands/rsync"
      }
    ]
  },
  {
    "id": 19,
    "type": "single",
    "category": "Garantir a operação bem-sucedida de uma solução de nuvem (20%)",
    "category_en": "Garantir a operação bem-sucedida de uma solução de nuvem (20%)",
    "objective": "4.3 Auditar quem acessou dados em buckets do Cloud Storage usando Data Access Logs",
    "what_it_tests": "Para auditar quem leu ou acessou objetos dentro de buckets do Cloud Storage, é necessário ativar os Data Access Audit Logs para o Cloud Storage e filtrá-los no Log Viewer (Logs Explorer).",
    "question": "Seu auditor deseja visualizar o uso de dados da sua organização no Google Cloud. O auditor está mais interessado em auditar quem acessou dados em buckets do Cloud Storage. Você precisa ajudar o auditor a acessar os dados de que ele precisa. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Ativar os Logs de Acesso a Dados (Data Access Logs) para os buckets que ele deseja auditar e, em seguida, criar uma consulta no visualizador de logs (Log Viewer) que filtre pelo Cloud Storage."
      },
      {
        "id": "B",
        "text": "Atribuir as permissões apropriadas e, em seguida, criar um relatório no Data Studio sobre os Logs de Auditoria de Atividades do Administrador (Admin Activity Audit Logs)."
      },
      {
        "id": "C",
        "text": "Atribuir as permissões apropriadas e, em seguida, usar o Cloud Monitoring para revisar as métricas."
      },
      {
        "id": "D",
        "text": "Usar a API de exportação de logs para fornecer os Logs de Auditoria de Atividades do Administrador (Admin Activity Audit Logs) no formato que ele deseja."
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Para auditar quem leu ou acessou objetos dentro de buckets do Cloud Storage, é necessário ativar os Data Access Audit Logs para o Cloud Storage e filtrá-los no Log Viewer (Logs Explorer).",
    "explanation_why_correct": "Como leituras e gravações de objetos são registradas nos **Logs de Acesso a Dados (Data Access Audit Logs)** — que vêm desativados por padrão —, você deve **ativar os Data Access Logs para o Cloud Storage** e filtrar os registros do recurso `gcs_bucket` no visualizador de logs do Cloud Logging.",
    "explanation_why_incorrect": "Os Admin Activity Audit Logs (B e D) registram apenas criação/modificação de buckets e políticas, não quem leu ou acessou os dados dentro dos buckets. Métricas do Cloud Monitoring (C) mostram contagens agregadas de bytes/requisições, mas não identificam *quem* acessou os dados.",
    "additional_reading": [
      {
        "title": "Logs de auditoria de Acesso a Dados no Cloud Storage",
        "url": "https://cloud.google.com/storage/docs/audit-logging"
      }
    ]
  },
  {
    "id": 20,
    "type": "single",
    "category": "Configurar um ambiente de solução em nuvem (17.5%)",
    "category_en": "Configurar um ambiente de solução em nuvem (17.5%)",
    "objective": "1.2 Autenticar uma conta de serviço na CLI gcloud usando um arquivo de chave JSON",
    "what_it_tests": "O comando 'gcloud auth activate-service-account --key-file=<ARQUIVO_JSON>' autentica a CLI gcloud usando o arquivo de chave privada de uma conta de serviço.",
    "question": "Você recebeu um arquivo JSON que continha uma chave privada de uma Conta de Serviço para obter acesso a vários recursos em um projeto do Google Cloud. Você baixou e instalou o Cloud SDK e deseja usar essa chave privada para autenticação e autorização ao executar comandos gcloud. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Usar o comando 'gcloud auth login' e apontá-lo para a chave privada."
      },
      {
        "id": "B",
        "text": "Usar o comando 'gcloud auth activate-service-account' e apontá-lo para a chave privada."
      },
      {
        "id": "C",
        "text": "Colocar o arquivo de chave privada no diretório de instalação do Cloud SDK e renomeá-lo para “credentials.json”."
      },
      {
        "id": "D",
        "text": "Colocar o arquivo de chave privada em seu diretório inicial (home) e renomeá-lo para “GOOGLE_APPLICATION_CREDENTIALS”."
      }
    ],
    "correct_answer": "B",
    "official_rationale": "O comando 'gcloud auth activate-service-account --key-file=<ARQUIVO_JSON>' autentica a CLI gcloud usando o arquivo de chave privada de uma conta de serviço.",
    "explanation_why_correct": "Para autenticar a CLI `gcloud` usando o arquivo JSON de chave privada de uma conta de serviço, você deve executar **`gcloud auth activate-service-account --key-file=<CAMINHO_DO_ARQUIVO>`**.",
    "explanation_why_incorrect": "O comando `gcloud auth login` (A) é destinado a contas de usuário interativas (embora versões recentes aceitem `--cred-file`, o comando específico oficial da certificação para ativar chaves de conta de serviço é `gcloud auth activate-service-account`). Colocar arquivos nas pastas (C e D) não autentica a CLI `gcloud`.",
    "additional_reading": [
      {
        "title": "Autorizar a CLI gcloud com uma conta de serviço",
        "url": "https://cloud.google.com/sdk/gcloud/reference/auth/activate-service-account"
      }
    ]
  },
  {
    "id": 21,
    "type": "single",
    "category": "Garantir a operação bem-sucedida de uma solução de nuvem (20%)",
    "category_en": "Garantir a operação bem-sucedida de uma solução de nuvem (20%)",
    "objective": "4.2 Reter cópias mensais de bancos de dados do Cloud SQL por 3 anos usando exportação para Cloud Storage Archive",
    "what_it_tests": "Backups internos do Cloud SQL não podem ser movidos diretamente para buckets do Cloud Storage; para retenção de auditoria por 3 anos com custo mínimo, deve-se executar uma exportação (export) do Cloud SQL para um bucket da classe Archive no Cloud Storage.",
    "question": "Você está trabalhando com um banco de dados MySQL do Cloud SQL na sua empresa. Você precisa reter uma cópia de fim de mês do banco de dados por três anos para fins de auditoria. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Configurar um job de exportação para o primeiro dia do mês. Gravar o arquivo de exportação em um bucket do Cloud Storage da classe Archive."
      },
      {
        "id": "B",
        "text": "Salvar o backup automático do primeiro dia do mês por três anos. Armazenar o arquivo de backup em um bucket do Cloud Storage da classe Archive."
      },
      {
        "id": "C",
        "text": "Configurar um backup sob demanda para o primeiro dia do mês. Gravar o backup em um bucket do Cloud Storage da classe Archive."
      },
      {
        "id": "D",
        "text": "Converter o backup automático do primeiro dia do mês em um arquivo de exportação. Gravar o arquivo de exportação em um bucket do Cloud Storage da classe Coldline."
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Backups internos do Cloud SQL não podem ser movidos diretamente para buckets do Cloud Storage; para retenção de auditoria por 3 anos com custo mínimo, deve-se executar uma exportação (export) do Cloud SQL para um bucket da classe Archive no Cloud Storage.",
    "explanation_why_correct": "Para reter dados do Cloud SQL por longo prazo (3 anos) fora do ciclo de vida da instância, você deve **configurar um job de exportação (export SQL/CSV) no primeiro dia de cada mês gravando diretamente em um bucket do Cloud Storage da classe Archive**, que tem o menor custo para retenção de 3 anos.",
    "explanation_why_incorrect": "Os backups internos do Cloud SQL (B, C e D) são gerenciados internamente pelo serviço Cloud SQL e não podem ser salvos ou convertidos diretamente como arquivos em buckets do Cloud Storage.",
    "additional_reading": [
      {
        "title": "Exportar dados do Cloud SQL para o Cloud Storage",
        "url": "https://cloud.google.com/sql/docs/mysql/import-export/exporting"
      }
    ]
  },
  {
    "id": 22,
    "type": "single",
    "category": "Garantir a operação bem-sucedida de uma solução de nuvem (20%)",
    "category_en": "Garantir a operação bem-sucedida de uma solução de nuvem (20%)",
    "objective": "4.3 Criar métricas baseadas em logs e políticas de alerta para monitorar erros recorrentes",
    "what_it_tests": "Para ser notificado automaticamente sempre que uma mensagem de erro específica aparecer nos logs, cria-se uma métrica baseada em logs (log-based metric) no Cloud Logging e configura-se uma Alerting Policy no Cloud Monitoring sobre essa métrica.",
    "question": "Você está monitorando um aplicativo e recebe feedback dos usuários de que um erro específico está tendo picos. Você percebe que o erro é causado por uma Conta de Serviço com permissões insuficientes. Você consegue resolver o problema, mas deseja ser notificado se o problema voltar a ocorrer. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "No Visualizador de Logs (Log Viewer), filtrar os logs pela severidade ‘Error’ e pelo nome da Conta de Serviço."
      },
      {
        "id": "B",
        "text": "Criar um coletor (sink) para o BigQuery para exportar todos os logs. Criar um painel no Data Studio sobre os logs exportados."
      },
      {
        "id": "C",
        "text": "Criar uma métrica personalizada baseada em logs (log-based metric) para o erro específico para ser usada em uma Política de Alerta (Alerting Policy)."
      },
      {
        "id": "D",
        "text": "Conceder acesso de Project Owner para a Conta de Serviço."
      }
    ],
    "correct_answer": "C",
    "official_rationale": "Para ser notificado automaticamente sempre que uma mensagem de erro específica aparecer nos logs, cria-se uma métrica baseada em logs (log-based metric) no Cloud Logging e configura-se uma Alerting Policy no Cloud Monitoring sobre essa métrica.",
    "explanation_why_correct": "Criar uma **métrica personalizada baseada em logs (log-based metric)** que contabilize ocorrências daquele erro específico de permissão e vinculá-la a uma **Política de Alerta (Alerting Policy)** no Cloud Monitoring garante que você seja notificado imediatamente caso o problema volte a acontecer.",
    "explanation_why_incorrect": "Filtrar no Log Viewer (A) ou criar um painel no Data Studio (B) exige inspeção manual e não envia notificações automáticas. Conceder Project Owner (D) viola gravemente o princípio do menor privilégio.",
    "additional_reading": [
      {
        "title": "Configurar alertas em métricas baseadas em logs",
        "url": "https://cloud.google.com/logging/docs/logs-based-metrics"
      }
    ]
  },
  {
    "id": 23,
    "type": "single",
    "category": "Planejar e configurar uma solução de nuvem (17.5%)",
    "category_en": "Planejar e configurar uma solução de nuvem (17.5%)",
    "objective": "2.3 Selecionar o Cloud Spanner para aplicações financeiras relacionais globais com consistência forte",
    "what_it_tests": "O Cloud Spanner é o único banco de dados relacional totalmente gerenciado do Google Cloud que oferece escala horizontal multirregional/global com consistência externa forte (strong consistency) e baixa latência.",
    "question": "Você está desenvolvendo um aplicativo de negociação financeira (financial trading) que será usado globalmente. Os dados são armazenados e consultados usando uma estrutura relacional, e os clientes de todo o mundo devem obter o estado exato e idêntico dos dados. O aplicativo será implantado em várias regiões para fornecer a menor latência aos usuários finais. Você precisa selecionar uma opção de armazenamento para os dados do aplicativo minimizando a latência. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Usar o Cloud Bigtable para armazenamento de dados."
      },
      {
        "id": "B",
        "text": "Usar o Cloud SQL para armazenamento de dados."
      },
      {
        "id": "C",
        "text": "Usar o Cloud Spanner para armazenamento de dados."
      },
      {
        "id": "D",
        "text": "Usar o Firestore para armazenamento de dados."
      }
    ],
    "correct_answer": "C",
    "official_rationale": "O Cloud Spanner é o único banco de dados relacional totalmente gerenciado do Google Cloud que oferece escala horizontal multirregional/global com consistência externa forte (strong consistency) e baixa latência.",
    "explanation_why_correct": "Como o aplicativo exige **estrutura relacional, escala global em múltiplas regiões, baixa latência e consistência forte (estado exato e idêntico dos dados em todo o mundo)**, o **Cloud Spanner** é a escolha ideal.",
    "explanation_why_incorrect": "O Cloud Bigtable (A) e o Firestore (D) são bancos de dados NoSQL (não relacionais). O Cloud SQL (B) é um banco relacional regional e não oferece distribuição ativa-ativa global com consistência forte em escala mundial como o Cloud Spanner.",
    "additional_reading": [
      {
        "title": "Visão geral do Cloud Spanner",
        "url": "https://cloud.google.com/spanner/docs/overview"
      }
    ]
  },
  {
    "id": 24,
    "type": "single",
    "category": "Planejar e configurar uma solução de nuvem (17.5%)",
    "category_en": "Planejar e configurar uma solução de nuvem (17.5%)",
    "objective": "2.2 Selecionar tipos de máquina otimizados para memória (série M) para bancos de dados in-memory de ERP",
    "what_it_tests": "As famílias de máquinas otimizadas para memória (como M1, M2, M3) oferecem vários terabytes de RAM e são projetadas especificamente para bancos de dados in-memory de sistemas ERP (como SAP HANA).",
    "question": "Você está prestes a implantar um novo sistema de Planejamento de Recursos Empresariais (ERP) no Google Cloud. O aplicativo mantém o banco de dados completo na memória (in-memory) para acesso rápido aos dados, e você precisa configurar os recursos mais apropriados no Google Cloud para esse aplicativo. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Provisionar instâncias preemptivas do Compute Engine."
      },
      {
        "id": "B",
        "text": "Provisionar instâncias do Compute Engine com GPUs anexadas."
      },
      {
        "id": "C",
        "text": "Provisionar instâncias do Compute Engine com SSDs locais anexados."
      },
      {
        "id": "D",
        "text": "Provisionar instâncias do Compute Engine com tipo de máquina M1."
      }
    ],
    "correct_answer": "D",
    "official_rationale": "As famílias de máquinas otimizadas para memória (como M1, M2, M3) oferecem vários terabytes de RAM e são projetadas especificamente para bancos de dados in-memory de sistemas ERP (como SAP HANA).",
    "explanation_why_correct": "Como o sistema ERP mantém **todo o banco de dados em memória (in-memory)**, você deve provisionar instâncias do Compute Engine com **tipo de máquina otimizado para memória (`M1` / série M)**, que oferecem a maior proporção de RAM por vCPU no Google Cloud.",
    "explanation_why_incorrect": "VMs preemptivas (A) não podem ser usadas para um ERP crítico que precisa ficar ativo continuamente. GPUs (B) aceleram processamento gráfico/ML, e SSDs locais (C) são discos NVMe efêmeros, não substituindo a memória RAM exigida por bancos in-memory.",
    "additional_reading": [
      {
        "title": "Família de máquinas otimizadas para memória no Compute Engine",
        "url": "https://cloud.google.com/compute/docs/memory-optimized-machines"
      }
    ]
  },
  {
    "id": 25,
    "type": "single",
    "category": "Implantar e implementar uma solução de nuvem (25%)",
    "category_en": "Implantar e implementar uma solução de nuvem (25%)",
    "objective": "3.2 Implantar microsserviços escalonáveis independentemente no GKE usando Deployments",
    "what_it_tests": "No Kubernetes (GKE), cada microsserviço contínuo deve ser gerenciado por seu próprio objeto Deployment, permitindo escalonar o número de réplicas (pods) de cada microsserviço de forma independente.",
    "question": "Você desenvolveu um aplicativo que consiste em vários microsserviços, com cada microsserviço empacotado em sua própria imagem de contêiner Docker. Você deseja implantar o aplicativo inteiro no Google Kubernetes Engine para que cada microsserviço possa ser escalonado individualmente. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Criar e implantar uma Custom Resource Definition (CRD) por microsserviço."
      },
      {
        "id": "B",
        "text": "Criar e implantar um arquivo Docker Compose."
      },
      {
        "id": "C",
        "text": "Criar e implantar um Job por microsserviço."
      },
      {
        "id": "D",
        "text": "Criar e implantar um Deployment por microsserviço."
      }
    ],
    "correct_answer": "D",
    "official_rationale": "No Kubernetes (GKE), cada microsserviço contínuo deve ser gerenciado por seu próprio objeto Deployment, permitindo escalonar o número de réplicas (pods) de cada microsserviço de forma independente.",
    "explanation_why_correct": "No Google Kubernetes Engine, criar e implantar **um objeto `Deployment` separado para cada microsserviço** permite gerenciar o ciclo de vida, atualizações e o **escalonamento horizontal independente** de cada microsserviço.",
    "explanation_why_incorrect": "CRDs (A) estendem a API do Kubernetes para tipos personalizados, não sendo necessárias para microsserviços padrão. O GKE não executa arquivos Docker Compose nativamente (B). Um `Job` (C) é usado para tarefas finitas que executam até a conclusão, e não para microsserviços contínuos.",
    "additional_reading": [
      {
        "title": "Implantar aplicativos sem estado usando Deployments no GKE",
        "url": "https://cloud.google.com/kubernetes-engine/docs/how-to/stateless-apps"
      }
    ]
  },
  {
    "id": 26,
    "type": "single",
    "category": "Configurar acesso e segurança (20%)",
    "category_en": "Configurar acesso e segurança (20%)",
    "objective": "5.2 Especificar contas de serviço dedicadas por instância de VM no Compute Engine",
    "what_it_tests": "Cada instância do Compute Engine pode ter sua própria Conta de Serviço dedicada associada no momento da criação da VM (ou com a VM parada via 'gcloud compute instances set-service-account').",
    "question": "Você terá vários aplicativos em execução em diferentes instâncias do Compute Engine no mesmo projeto. Você deseja especificar em um nível mais granular a conta de serviço que cada instância usa ao chamar as APIs do Google Cloud. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Ao criar as instâncias, especificar uma Conta de Serviço para cada instância."
      },
      {
        "id": "B",
        "text": "Ao criar as instâncias, atribuir o nome de cada Conta de Serviço como metadados da instância."
      },
      {
        "id": "C",
        "text": "Após iniciar as instâncias, usar 'gcloud compute instances update' para especificar uma Conta de Serviço para cada instância."
      },
      {
        "id": "D",
        "text": "Após iniciar as instâncias, usar 'gcloud compute instances update' para atribuir o nome da Conta de Serviço relevante como metadados da instância."
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Cada instância do Compute Engine pode ter sua própria Conta de Serviço dedicada associada no momento da criação da VM (ou com a VM parada via 'gcloud compute instances set-service-account').",
    "explanation_why_correct": "A prática recomendada para isolar permissões entre VMs no mesmo projeto é **especificar uma Conta de Serviço dedicada para cada instância no momento da criação da VM**.",
    "explanation_why_incorrect": "Atribuir apenas um nome nos metadados personalizados (B e D) não configura a identidade IAM da VM. Além disso, para alterar a conta de serviço de uma instância existente (C), a VM precisa estar **parada** (e usa-se `set-service-account`, não enquanto está iniciada).",
    "additional_reading": [
      {
        "title": "Criar e habilitar contas de serviço para instâncias do Compute Engine",
        "url": "https://cloud.google.com/compute/docs/access/create-enable-service-accounts-for-instances"
      }
    ]
  },
  {
    "id": 27,
    "type": "single",
    "category": "Implantar e implementar uma solução de nuvem (25%)",
    "category_en": "Implantar e implementar uma solução de nuvem (25%)",
    "objective": "3.5 Implantar o MongoDB Atlas gerenciado com SLA pelo Google Cloud Marketplace",
    "what_it_tests": "O Google Cloud Marketplace oferece o serviço totalmente gerenciado MongoDB Atlas com faturamento integrado e SLA oficial de suporte.",
    "question": "Você está criando um aplicativo que será executado no Google Kubernetes Engine. Você identificou o MongoDB como o sistema de banco de dados mais adequado para o seu aplicativo e deseja implantar um ambiente MongoDB gerenciado que forneça um SLA de suporte. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Criar um cluster do Cloud Bigtable e usar a API HBase."
      },
      {
        "id": "B",
        "text": "Implantar o MongoDB Atlas a partir do Google Cloud Marketplace."
      },
      {
        "id": "C",
        "text": "Baixar um pacote de instalação do MongoDB e executá-lo em instâncias do Compute Engine."
      },
      {
        "id": "D",
        "text": "Baixar um pacote de instalação do MongoDB e executá-lo em um Grupo Gerenciado de Instâncias."
      }
    ],
    "correct_answer": "B",
    "official_rationale": "O Google Cloud Marketplace oferece o serviço totalmente gerenciado MongoDB Atlas com faturamento integrado e SLA oficial de suporte.",
    "explanation_why_correct": "**Implantar o MongoDB Atlas por meio do Google Cloud Marketplace** fornece um serviço de banco de dados MongoDB totalmente gerenciado na infraestrutura do Google Cloud com **SLA de suporte oficial**.",
    "explanation_why_incorrect": "O Cloud Bigtable com API HBase (A) não é compatível com MongoDB. Instalar manualmente o MongoDB em VMs ou MIGs do Compute Engine (C e D) resulta em um banco de dados autogerenciado (sem SLA de serviço gerenciado para o banco).",
    "additional_reading": [
      {
        "title": "Soluções de parceiros de banco de dados no Cloud Marketplace",
        "url": "https://cloud.google.com/marketplace/docs"
      }
    ]
  },
  {
    "id": 28,
    "type": "single",
    "category": "Configurar acesso e segurança (20%)",
    "category_en": "Configurar acesso e segurança (20%)",
    "objective": "5.1 Conceder acesso de execução de consultas SQL no BigQuery para uma equipe de BI via Grupos do Google",
    "what_it_tests": "Para permitir que analistas de BI executem consultas SQL personalizadas diretamente no BigQuery seguindo as boas práticas do IAM, adiciona-se a equipe a um Grupo do Google e concede-se o papel BigQuery User (e leitura nos datasets).",
    "question": "Você está gerenciando um projeto para o departamento de Business Intelligence (BI) da sua empresa. Um pipeline de dados ingere dados no BigQuery via streaming. Você deseja que os usuários do departamento de BI possam executar consultas SQL personalizadas nos dados mais recentes no BigQuery. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Criar um painel no Data Studio que use as tabelas relacionadas do BigQuery como fonte e conceder à equipe de BI acesso de visualização ao painel do Data Studio."
      },
      {
        "id": "B",
        "text": "Criar uma Conta de Serviço para a equipe de BI e distribuir uma nova chave privada para cada membro da equipe de BI."
      },
      {
        "id": "C",
        "text": "Usar o Cloud Scheduler para agendar um job em lote do Dataflow para copiar os dados do BigQuery para o data warehouse interno da equipe de BI."
      },
      {
        "id": "D",
        "text": "Atribuir o papel do IAM de BigQuery User a um Grupo do Google que contenha os membros da equipe de BI."
      }
    ],
    "correct_answer": "D",
    "official_rationale": "Para permitir que analistas de BI executem consultas SQL personalizadas diretamente no BigQuery seguindo as boas práticas do IAM, adiciona-se a equipe a um Grupo do Google e concede-se o papel BigQuery User (e leitura nos datasets).",
    "explanation_why_correct": "Atribuir o papel **`BigQuery User` (`roles/bigquery.user`) a um Grupo do Google contendo os membros da equipe de BI** (junto ao acesso aos datasets) segue as boas práticas do IAM e permite que eles executem consultas SQL personalizadas diretamente sobre os dados em tempo real.",
    "explanation_why_incorrect": "Apenas visualização em um painel do Data Studio (A) não permite que os analistas executem consultas SQL personalizadas livremente. Distribuir chaves de conta de serviço para usuários humanos (B) é uma falha de segurança. Copiar dados em lote (C) perde o acesso aos dados mais recentes de streaming e duplica custos.",
    "additional_reading": [
      {
        "title": "Controle de acesso com o IAM no BigQuery",
        "url": "https://cloud.google.com/bigquery/docs/access-control"
      }
    ]
  },
  {
    "id": 29,
    "type": "single",
    "category": "Implantar e implementar uma solução de nuvem (25%)",
    "category_en": "Implantar e implementar uma solução de nuvem (25%)",
    "objective": "3.4 Projetar topologia de rede DMZ e LAN em uma única VPC com sub-redes e regras de firewall",
    "what_it_tests": "Em uma única VPC com duas sub-redes (DMZ e LAN), o roteamento interno já é nativo e as regras de firewall da VPC controlam o tráfego permitido entre as sub-redes e o tráfego público de entrada (ingress) para a DMZ.",
    "question": "Sua empresa está migrando toda a sua carga de trabalho para o Compute Engine. Alguns servidores devem ser acessíveis pela Internet e outros servidores devem ser acessíveis apenas pela rede interna. Todos os servidores precisam conseguir se comunicar entre si por portas e protocolos específicos. A rede local (on-premises) atual depende de uma zona desmilitarizada (DMZ) para os servidores públicos e uma Rede Local (LAN) para os servidores privados. Você precisa projetar a infraestrutura de rede no Google Cloud para atender a esses requisitos. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "1. Criar uma única VPC com uma sub-rede para a DMZ e uma sub-rede para a LAN. 2. Configurar regras de firewall para liberar o tráfego relevante entre as sub-redes DMZ e LAN, e outra regra de firewall para permitir o tráfego público de entrada (ingress) para a DMZ."
      },
      {
        "id": "B",
        "text": "1. Criar uma única VPC com uma sub-rede para a DMZ e uma sub-rede para a LAN. 2. Configurar regras de firewall para liberar o tráfego relevante entre as sub-redes DMZ e LAN, e outra regra de firewall para permitir o tráfego público de saída (egress) para a DMZ."
      },
      {
        "id": "C",
        "text": "1. Criar uma VPC com uma sub-rede para a DMZ e outra VPC com uma sub-rede para a LAN. 2. Configurar regras de firewall para liberar o tráfego relevante entre as sub-redes DMZ e LAN, e outra regra de firewall para permitir o tráfego público de entrada (ingress) para a DMZ."
      },
      {
        "id": "D",
        "text": "1. Criar uma VPC com uma sub-rede para a DMZ e outra VPC com uma sub-rede para a LAN. 2. Configurar regras de firewall para liberar o tráfego relevante entre as sub-redes DMZ e LAN, e outra regra de firewall para permitir o tráfego público de saída (egress) para a DMZ."
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Em uma única VPC com duas sub-redes (DMZ e LAN), o roteamento interno já é nativo e as regras de firewall da VPC controlam o tráfego permitido entre as sub-redes e o tráfego público de entrada (ingress) para a DMZ.",
    "explanation_why_correct": "Criar **uma única VPC com uma sub-rede para a DMZ e outra para a LAN** aproveita o roteamento interno nativo da VPC. Em seguida, configuram-se **regras de firewall para permitir as portas/protocolos específicos entre a DMZ e a LAN** e uma **regra de firewall de entrada (ingress) permitindo o acesso público da Internet apenas à DMZ**.",
    "explanation_why_incorrect": "Para servidores públicos serem acessados pela Internet, é necessária uma regra de **entrada (`ingress`)**, e não de saída (`egress`, que já é permitida por padrão em B e D). Criar duas VPCs separadas (C e D) impede a comunicação entre DMZ e LAN a menos que se configure VPC Peering ou VPN.",
    "additional_reading": [
      {
        "title": "Design de rede VPC e regras de firewall",
        "url": "https://cloud.google.com/vpc/docs/vpc"
      }
    ]
  },
  {
    "id": 30,
    "type": "single",
    "category": "Configurar um ambiente de solução em nuvem (17.5%)",
    "category_en": "Configurar um ambiente de solução em nuvem (17.5%)",
    "objective": "1.1 Habilitar a API do Cloud Spanner como pré-requisito em um novo projeto",
    "what_it_tests": "Em um projeto recém-criado do Google Cloud, a API do Cloud Spanner (spanner.googleapis.com) não vem habilitada por padrão; habilitá-la é o primeiro pré-requisito antes de criar uma instância.",
    "question": "Você acabou de criar um novo projeto que será usado para implantar um aplicativo distribuído globalmente. Você usará o Cloud Spanner para armazenamento de dados. Você deseja criar uma instância do Cloud Spanner. Você quer realizar a primeira etapa em preparação para a criação da instância. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Habilitar a API do Cloud Spanner."
      },
      {
        "id": "B",
        "text": "Configurar sua instância do Cloud Spanner para ser multirregional."
      },
      {
        "id": "C",
        "text": "Criar uma nova rede VPC com sub-redes em todas as regiões desejadas."
      },
      {
        "id": "D",
        "text": "Conceder a si mesmo o papel do IAM de Cloud Spanner Admin."
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Em um projeto recém-criado do Google Cloud, a API do Cloud Spanner (spanner.googleapis.com) não vem habilitada por padrão; habilitá-la é o primeiro pré-requisito antes de criar uma instância.",
    "explanation_why_correct": "Em um projeto recém-criado, a primeira etapa obrigatória antes de provisionar uma instância do Cloud Spanner é **habilitar a API do Cloud Spanner (`spanner.googleapis.com`)**.",
    "explanation_why_incorrect": "Como criador do projeto, você já possui o papel `Project Owner` (que inclui permissões para administrar o Spanner, tornando D desnecessário). O Cloud Spanner é consumido via API gerenciada e não exige criar VPCs com sub-redes por região (C). A escolha de configuração multirregional (B) ocorre durante a criação da instância, após a API estar habilitada.",
    "additional_reading": [
      {
        "title": "Antes de começar com o Cloud Spanner",
        "url": "https://cloud.google.com/spanner/docs/getting-started/set-up"
      }
    ]
  },
  {
    "id": 31,
    "type": "single",
    "category": "Configurar um ambiente de solução em nuvem (17.5%)",
    "category_en": "Configurar um ambiente de solução em nuvem (17.5%)",
    "objective": "1.1 Habilitar a API do Compute Engine após criar um projeto via CLI",
    "what_it_tests": "Quando um projeto é criado via CLI e vinculado ao faturamento, a API do Compute Engine (compute.googleapis.com) precisa ser habilitada (o que também cria a VPC default automaticamente) antes de criar instâncias de VM.",
    "question": "Você criou um novo projeto no Google Cloud por meio da interface de linha de comando (CLI) gcloud e vinculou uma conta de faturamento. Você precisa criar uma nova instância do Compute Engine usando a CLI. Você precisa realizar as etapas de pré-requisito. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Criar um Workspace do Cloud Monitoring."
      },
      {
        "id": "B",
        "text": "Criar uma rede VPC no projeto."
      },
      {
        "id": "C",
        "text": "Habilitar a API compute.googleapis.com."
      },
      {
        "id": "D",
        "text": "Conceder a si mesmo o papel do IAM de Compute Admin."
      }
    ],
    "correct_answer": "C",
    "official_rationale": "Quando um projeto é criado via CLI e vinculado ao faturamento, a API do Compute Engine (compute.googleapis.com) precisa ser habilitada (o que também cria a VPC default automaticamente) antes de criar instâncias de VM.",
    "explanation_why_correct": "Após criar um novo projeto e vincular a conta de faturamento via CLI, o pré-requisito obrigatório antes de executar `gcloud compute instances create` é **habilitar a API `compute.googleapis.com`** (`gcloud services enable compute.googleapis.com`).",
    "explanation_why_incorrect": "Criar um Workspace do Cloud Monitoring (A) não é pré-requisito para criar VMs. Ao habilitar a API `compute.googleapis.com`, a rede VPC `default` já é criada automaticamente (B). O criador do projeto já é `Owner`, não precisando conceder `Compute Admin` a si mesmo (D).",
    "additional_reading": [
      {
        "title": "Habilitar a API do Compute Engine",
        "url": "https://cloud.google.com/endpoints/docs/openapi/enable-api"
      }
    ]
  },
  {
    "id": 32,
    "type": "single",
    "category": "Implantar e implementar uma solução de nuvem (25%)",
    "category_en": "Implantar e implementar uma solução de nuvem (25%)",
    "objective": "3.2 Escalonar cargas de trabalho no Google Kubernetes Engine (GKE)",
    "what_it_tests": "O HorizontalPodAutoscaler (HPA) no GKE aumenta ou diminui automaticamente o número de réplicas de pods de um Deployment com base na utilização de CPU ou métricas personalizadas.",
    "question": "Sua empresa desenvolveu um novo aplicativo composto por microsserviços no Google Kubernetes Engine (GKE) e deseja escalonar automaticamente o número de pods do deployment com base na demanda de CPU/tráfego. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Implantar o aplicativo no GKE e adicionar um 'HorizontalPodAutoscaler' ao deployment."
      },
      {
        "id": "B",
        "text": "Implantar o aplicativo no GKE e adicionar um 'VerticalPodAutoscaler' ao deployment."
      },
      {
        "id": "C",
        "text": "Criar um cluster GKE com escalonamento automático (autoscaling) habilitado no pool de nós. Definir um mínimo e um máximo para o tamanho do pool de nós."
      },
      {
        "id": "D",
        "text": "Criar um pool de nós separado para cada aplicativo e implantar cada aplicativo em seu pool de nós dedicado."
      }
    ],
    "correct_answer": "A",
    "official_rationale": "O HorizontalPodAutoscaler (HPA) no GKE aumenta ou diminui automaticamente o número de réplicas de pods de um Deployment com base na utilização de CPU ou métricas personalizadas.",
    "explanation_why_correct": "Para escalonar automaticamente o número de réplicas de pods de um aplicativo no GKE conforme a carga de trabalho aumenta ou diminui, você deve **implantar o aplicativo no GKE e configurar um `HorizontalPodAutoscaler` (HPA) para o Deployment**.",
    "explanation_why_incorrect": "O `VerticalPodAutoscaler` (B) altera as requisições de CPU/memória dos pods existentes, não adicionando mais réplicas para distribuir tráfego. O Cluster Autoscaler no pool de nós (C) escalona apenas as VMs (nós) quando faltam recursos para pods já agendados, mas sem o HPA o número de pods da aplicação permaneceria fixo. Criar um pool de nós por aplicação (D) desperdiça recursos e não escalona os pods.",
    "additional_reading": [
      {
        "title": "Escalonamento automático horizontal de pods (HPA) no GKE",
        "url": "https://cloud.google.com/kubernetes-engine/docs/concepts/horizontalpodautoscaler"
      }
    ]
  },
  {
    "id": 33,
    "type": "single",
    "category": "Configurar acesso e segurança (20%)",
    "category_en": "Configurar acesso e segurança (20%)",
    "objective": "5.2 Isolar o acesso de uma única VM a arquivos no Cloud Storage usando uma conta de serviço dedicada",
    "what_it_tests": "Como as outras VMs usam a conta de serviço padrão do Compute Engine, deve-se criar uma nova conta de serviço dedicada exclusivamente para a nova VM e conceder apenas a ela permissão de leitura no Cloud Storage.",
    "question": "Você precisa gerenciar um aplicativo de terceiros que será executado em uma instância do Compute Engine. Outras instâncias do Compute Engine já estão em execução com a configuração padrão. Os arquivos de instalação do aplicativo estão hospedados no Cloud Storage. Você precisa acessar esses arquivos a partir da nova instância sem permitir que outras máquinas virtuais (VMs) acessem esses arquivos. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Criar a instância com a conta de serviço padrão do Compute Engine. Conceder à conta de serviço permissões no Cloud Storage."
      },
      {
        "id": "B",
        "text": "Criar a instância com a conta de serviço padrão do Compute Engine. Adicionar metadados aos objetos no Cloud Storage que correspondam aos metadados na nova instância."
      },
      {
        "id": "C",
        "text": "Criar uma nova conta de serviço e atribuir essa conta de serviço à nova instância. Conceder à conta de serviço permissões no Cloud Storage."
      },
      {
        "id": "D",
        "text": "Criar uma nova conta de serviço e atribuir essa conta de serviço à nova instância. Adicionar metadados aos objetos no Cloud Storage que correspondam aos metadados na nova instância."
      }
    ],
    "correct_answer": "C",
    "official_rationale": "Como as outras VMs usam a conta de serviço padrão do Compute Engine, deve-se criar uma nova conta de serviço dedicada exclusivamente para a nova VM e conceder apenas a ela permissão de leitura no Cloud Storage.",
    "explanation_why_correct": "Como as demais VMs compartilham a conta de serviço padrão do Compute Engine, você deve **criar uma nova conta de serviço dedicada, atribuí-la à nova instância e conceder a essa conta de serviço as permissões necessárias no Cloud Storage**. Assim, apenas a nova VM terá acesso aos arquivos de instalação.",
    "explanation_why_incorrect": "Conceder permissão à conta de serviço padrão do Compute Engine (A) daria acesso a todas as outras VMs do projeto que usam a configuração padrão. Metadados de objetos no Cloud Storage (B e D) não controlam autenticação/autorização de VMs.",
    "additional_reading": [
      {
        "title": "Melhores práticas para usar contas de serviço no Compute Engine",
        "url": "https://cloud.google.com/compute/docs/access/service-accounts"
      }
    ]
  },
  {
    "id": 34,
    "type": "single",
    "category": "Planejar e configurar uma solução de nuvem (17.5%)",
    "category_en": "Planejar e configurar uma solução de nuvem (17.5%)",
    "objective": "2.3 Selecionar localização Regional e classe Standard no Cloud Storage para pipelines analíticos contínuos",
    "what_it_tests": "Para dados acessados continuamente por usuários em uma única localidade (Boston) com objetivo de minimizar custos, a combinação ideal é localização Regional (mais barata que Dual-Regional) e classe Standard (sem cobrança por leitura contínua).",
    "question": "Você precisa configurar o armazenamento de dados ideal para arquivos armazenados no Cloud Storage com custo mínimo. Os arquivos são usados em um pipeline de análise de missão crítica que é utilizado continuamente. Os usuários estão em Boston, MA (Estados Unidos). O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Configurar o armazenamento regional para a região mais próxima dos usuários. Configurar uma classe de armazenamento Nearline."
      },
      {
        "id": "B",
        "text": "Configurar o armazenamento regional para a região mais próxima dos usuários. Configurar uma classe de armazenamento Standard."
      },
      {
        "id": "C",
        "text": "Configurar o armazenamento birregional (dual-regional) para a região dupla mais próxima dos usuários. Configurar uma classe de armazenamento Nearline."
      },
      {
        "id": "D",
        "text": "Configurar o armazenamento birregional (dual-regional) para a região dupla mais próxima dos usuários. Configurar uma classe de armazenamento Standard."
      }
    ],
    "correct_answer": "B",
    "official_rationale": "Para dados acessados continuamente por usuários em uma única localidade (Boston) com objetivo de minimizar custos, a combinação ideal é localização Regional (mais barata que Dual-Regional) e classe Standard (sem cobrança por leitura contínua).",
    "explanation_why_correct": "Como os arquivos são **usados continuamente** em um pipeline analítico e os usuários estão concentrados em uma única região geográfica (Leste dos EUA / Boston), a opção mais econômica e performática é usar **armazenamento Regional na região mais próxima com a classe Standard**.",
    "explanation_why_incorrect": "A classe Nearline (A e C) cobra taxas de recuperação de dados e exige retenção mínima de 30 dias, tornando-se muito cara para uso contínuo. O armazenamento Dual-Regional (C e D) tem custo maior que o Regional e não foi exigido requisito de replicação entre duas regiões.",
    "additional_reading": [
      {
        "title": "Classes e localizações de armazenamento do Cloud Storage",
        "url": "https://cloud.google.com/storage/docs/storage-classes"
      }
    ]
  },
  {
    "id": 35,
    "type": "single",
    "category": "Implantar e implementar uma solução de nuvem (25%)",
    "category_en": "Implantar e implementar uma solução de nuvem (25%)",
    "objective": "3.3 Testar atualizações em pequena parcela de tráfego com divisão de tráfego (traffic splitting) no App Engine",
    "what_it_tests": "O App Engine oferece divisão de tráfego (traffic splitting) nativa entre diferentes versões (versions) de um mesmo serviço, facilitando testes canário/A-B com uma pequena porcentagem de usuários.",
    "question": "Você está desenvolvendo um novo aplicativo web que será implantado no Google Cloud Platform. Como parte do seu ciclo de lançamento, você deseja testar atualizações do seu aplicativo em uma pequena parcela do tráfego real de usuários. A maioria dos usuários ainda deve ser direcionada para uma versão estável do seu aplicativo. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Implantar o aplicativo no App Engine. Para cada atualização, criar uma nova versão do mesmo serviço. Configurar a divisão de tráfego (traffic splitting) para enviar uma pequena porcentagem de tráfego para a nova versão."
      },
      {
        "id": "B",
        "text": "Implantar o aplicativo no App Engine. Para cada atualização, criar um novo serviço. Configurar a divisão de tráfego para enviar uma pequena porcentagem de tráfego para o novo serviço."
      },
      {
        "id": "C",
        "text": "Implantar o aplicativo no Kubernetes Engine. Para um novo lançamento, atualizar o deployment para usar a nova versão."
      },
      {
        "id": "D",
        "text": "Implantar o aplicativo no Kubernetes Engine. Para um novo lançamento, criar um novo deployment para a nova versão. Atualizar o service para usar o novo deployment."
      }
    ],
    "correct_answer": "A",
    "official_rationale": "O App Engine oferece divisão de tráfego (traffic splitting) nativa entre diferentes versões (versions) de um mesmo serviço, facilitando testes canário/A-B com uma pequena porcentagem de usuários.",
    "explanation_why_correct": "No **App Engine**, você pode implantar cada atualização como uma **nova versão dentro do mesmo serviço** e usar o recurso nativo de **divisão de tráfego (traffic splitting)** (por IP, cookie ou aleatório) para enviar uma pequena porcentagem do tráfego real para a nova versão.",
    "explanation_why_incorrect": "No App Engine, a divisão de tráfego ocorre entre *versões* de um mesmo serviço, e não entre *serviços* diferentes (B). No GKE, atualizar o Deployment (C) faz um rolling update completo para 100% dos pods, e apontar o Service para o novo Deployment (D) muda 100% do tráfego de uma vez (blue/green), não apenas uma pequena porcentagem.",
    "additional_reading": [
      {
        "title": "Dividir o tráfego entre versões no App Engine",
        "url": "https://cloud.google.com/appengine/docs/standard/splitting-traffic"
      }
    ]
  },
  {
    "id": 36,
    "type": "single",
    "category": "Configurar acesso e segurança (20%)",
    "category_en": "Configurar acesso e segurança (20%)",
    "objective": "5.1 Resolver contas conflitantes no Cloud Identity convidando usuários a transferir contas existentes",
    "what_it_tests": "A ferramenta de gerenciamento de contas não gerenciadas (Transfer tool for unmanaged users) do Cloud Identity / Google Workspace permite enviar um convite para que os usuários transfiram suas contas de consumidor existentes para a organização, evitando contas conflitantes.",
    "question": "Você precisa adicionar um grupo de novos usuários ao Cloud Identity. Alguns dos usuários já possuem contas do Google existentes (contas pessoais/consumidor com o e-mail corporativo). Você deseja seguir uma das práticas recomendadas pelo Google e evitar contas conflitantes. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Convidar o usuário para transferir sua conta existente."
      },
      {
        "id": "B",
        "text": "Convidar o usuário para usar um alias de e-mail para resolver o conflito."
      },
      {
        "id": "C",
        "text": "Dizer ao usuário que ele deve excluir sua conta existente."
      },
      {
        "id": "D",
        "text": "Dizer ao usuário para remover todos os e-mails pessoais da conta existente."
      }
    ],
    "correct_answer": "A",
    "official_rationale": "A ferramenta de gerenciamento de contas não gerenciadas (Transfer tool for unmanaged users) do Cloud Identity / Google Workspace permite enviar um convite para que os usuários transfiram suas contas de consumidor existentes para a organização, evitando contas conflitantes.",
    "explanation_why_correct": "Para evitar contas conflitantes quando funcionários já criaram contas pessoais do Google com o endereço de e-mail da empresa, a prática recomendada pelo Google é usar a ferramenta de transferência para **convidar o usuário a transferir sua conta existente** para o Cloud Identity gerenciado.",
    "explanation_why_incorrect": "Usar aliases (B), exigir que o usuário exclua sua conta (C) ou apagar e-mails manualmente (D) não são o fluxo oficial de resolução e prevenção de contas não gerenciadas/conflitantes no Cloud Identity.",
    "additional_reading": [
      {
        "title": "Avaliar e transferir contas de usuários existentes no Cloud Identity",
        "url": "https://cloud.google.com/architecture/identity/evaluate-existing-user-accounts"
      }
    ]
  },
  {
    "id": 37,
    "type": "single",
    "category": "Garantir a operação bem-sucedida de uma solução de nuvem (20%)",
    "category_en": "Garantir a operação bem-sucedida de uma solução de nuvem (20%)",
    "objective": "4.2 Monitorar o limite recomendado de CPU de alta prioridade (65%) em instâncias regionais do Cloud Spanner",
    "what_it_tests": "A recomendação oficial do Google para o limite máximo de CPU de alta prioridade (High Priority CPU) do Cloud Spanner é 65% para instâncias regionais (e 45% para multirregionais); ao atingir esse limite, adicionar nós melhora o desempenho no menor tempo possível.",
    "question": "Você precisa gerenciar uma instância do Cloud Spanner para obter o melhor desempenho de consulta. Sua instância em produção é executada em uma única região do Google Cloud. Você precisa melhorar o desempenho no menor tempo possível. Você deseja seguir as melhores práticas do Google para configuração de serviço. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Criar um alerta no Cloud Monitoring para alertar quando a porcentagem de utilização de CPU de alta prioridade atingir 45%. Se você exceder esse limite, adicionar nós à sua instância."
      },
      {
        "id": "B",
        "text": "Criar um alerta no Cloud Monitoring para alertar quando a porcentagem de utilização de CPU de alta prioridade atingir 45%. Usar estatísticas de consulta do banco de dados para identificar consultas que resultem em alto uso de CPU e, em seguida, reescrever essas consultas para otimizar o uso de recursos."
      },
      {
        "id": "C",
        "text": "Criar um alerta no Cloud Monitoring para alertar quando a porcentagem de utilização de CPU de alta prioridade atingir 65%. Se você exceder esse limite, adicionar nós à sua instância."
      },
      {
        "id": "D",
        "text": "Criar um alerta no Cloud Monitoring para alertar quando a porcentagem de utilização de CPU de alta prioridade atingir 65%. Usar estatísticas de consulta do banco de dados para identificar consultas que resultem em alto uso de CPU e, em seguida, reescrever essas consultas para otimizar o uso de recursos."
      }
    ],
    "correct_answer": "C",
    "official_rationale": "A recomendação oficial do Google para o limite máximo de CPU de alta prioridade (High Priority CPU) do Cloud Spanner é 65% para instâncias regionais (e 45% para multirregionais); ao atingir esse limite, adicionar nós melhora o desempenho no menor tempo possível.",
    "explanation_why_correct": "Para uma instância do Cloud Spanner em uma **única região**, o limite máximo recomendado pelo Google para **utilização de CPU de alta prioridade é de 65%** (45% aplica-se a instâncias multirregionais). Para melhorar o desempenho **no menor tempo possível** ao atingir esse limite, você deve **adicionar nós à instância**.",
    "explanation_why_incorrect": "O limite de 45% (A e B) é a recomendação para instâncias *multirregionais*, não para uma única região. Reescrever consultas SQL (B e D) leva tempo de desenvolvimento e testes, não sendo a ação mais rápida quando a instância já atingiu o limite de capacidade de CPU.",
    "additional_reading": [
      {
        "title": "Alertas recomendados para utilização de CPU no Cloud Spanner",
        "url": "https://cloud.google.com/spanner/docs/monitoring-cloud#create-alert"
      }
    ]
  },
  {
    "id": 38,
    "type": "single",
    "category": "Planejar e configurar uma solução de nuvem (17.5%)",
    "category_en": "Planejar e configurar uma solução de nuvem (17.5%)",
    "objective": "2.3 Selecionar o Cloud SQL para migração de bancos de dados PostgreSQL regionais com alterações mínimas",
    "what_it_tests": "O Cloud SQL para PostgreSQL é um banco de dados relacional totalmente gerenciado compatível nativamente com PostgreSQL, ideal para uso em uma única região com transações ACID e migração sem alterações de código.",
    "question": "Sua empresa possui um aplicativo interno para gerenciamento de pedidos transacionais. O aplicativo é usado exclusivamente por funcionários em uma única localização física. O aplicativo requer consistência forte, consultas rápidas e garantias ACID para atualizações transacionais em várias tabelas. A primeira versão do aplicativo foi implementada em PostgreSQL e você deseja implantá-la na nuvem com o mínimo de alterações de código. Qual banco de dados é mais apropriado para este aplicativo?",
    "options": [
      {
        "id": "A",
        "text": "BigQuery"
      },
      {
        "id": "B",
        "text": "Cloud SQL"
      },
      {
        "id": "C",
        "text": "Cloud Spanner"
      },
      {
        "id": "D",
        "text": "Cloud Datastore"
      }
    ],
    "correct_answer": "B",
    "official_rationale": "O Cloud SQL para PostgreSQL é um banco de dados relacional totalmente gerenciado compatível nativamente com PostgreSQL, ideal para uso em uma única região com transações ACID e migração sem alterações de código.",
    "explanation_why_correct": "O **Cloud SQL (para PostgreSQL)** oferece compatibilidade total com **PostgreSQL**, garantias transacionais **ACID**, consistência forte e atende perfeitamente a usuários em uma **única localização física**, permitindo migrar o aplicativo com **mínimas alterações de código**.",
    "explanation_why_incorrect": "O BigQuery (A) é um data warehouse analítico (OLAP), não um banco transacional OLTP. O Cloud Spanner (C) é voltado para escala global e exigiria adaptar esquemas/consultas específicas do PostgreSQL padrão. O Cloud Datastore (D) é um banco NoSQL de documentos.",
    "additional_reading": [
      {
        "title": "Visão geral do Cloud SQL para PostgreSQL",
        "url": "https://cloud.google.com/sql/docs/postgres"
      }
    ]
  },
  {
    "id": 39,
    "type": "single",
    "category": "Configurar um ambiente de solução em nuvem (17.5%)",
    "category_en": "Configurar um ambiente de solução em nuvem (17.5%)",
    "objective": "1.2 Definir o cluster GKE padrão na configuração do Cloud SDK",
    "what_it_tests": "O comando 'gcloud config set container/cluster <CLUSTER_NAME>' define o cluster padrão para todos os comandos 'gcloud container' subsequentes.",
    "question": "Você foi designado para manter um cluster do Google Kubernetes Engine (GKE) chamado ‘dev’ que foi implantado no Google Cloud. Você deseja gerenciar a configuração do GKE usando a interface de linha de comando (CLI). Você acabou de baixar e instalar o Cloud SDK. Você quer garantir que futuros comandos da CLI por padrão se dirijam a esse cluster específico. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Usar o comando 'gcloud config set container/cluster dev'."
      },
      {
        "id": "B",
        "text": "Usar o comando 'gcloud container clusters update dev'."
      },
      {
        "id": "C",
        "text": "Criar um arquivo chamado 'gke.default' na pasta '~/.gcloud' que contenha o nome do cluster."
      },
      {
        "id": "D",
        "text": "Criar um arquivo chamado 'defaults.json' na pasta '~/.gcloud' que contenha o nome do cluster."
      }
    ],
    "correct_answer": "A",
    "official_rationale": "O comando 'gcloud config set container/cluster <CLUSTER_NAME>' define o cluster padrão para todos os comandos 'gcloud container' subsequentes.",
    "explanation_why_correct": "Executar o comando **`gcloud config set container/cluster dev`** configura a propriedade padrão `container/cluster` no Cloud SDK para que os comandos futuros da CLI `gcloud container` utilizem automaticamente o cluster `dev`.",
    "explanation_why_incorrect": "O comando `gcloud container clusters update` (B) modifica configurações do cluster no GCP, não a propriedade padrão da CLI. Os arquivos `~/.gcloud/gke.default` (C) e `defaults.json` (D) não existem nem são lidos pelo Cloud SDK.",
    "additional_reading": [
      {
        "title": "Definir propriedades padrão do GKE na CLI gcloud",
        "url": "https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-access-for-kubectl"
      }
    ]
  },
  {
    "id": 40,
    "type": "single",
    "category": "Configurar um ambiente de solução em nuvem (17.5%)",
    "category_en": "Configurar um ambiente de solução em nuvem (17.5%)",
    "objective": "1.1 Organizar recursos de departamentos independentes em projetos separados com IDs exclusivos",
    "what_it_tests": "Para isolar e organizar recursos de forma independente entre equipes, deve-se criar um novo projeto com um Project ID globalmente exclusivo (ex.: acme-marketing-data-digest).",
    "question": "A equipe de vendas possui um projeto chamado Sales Data Digest que tem o ID acme-data-digest. Você precisa configurar recursos semelhantes do Google Cloud para a equipe de marketing, mas os recursos deles devem ser organizados de forma independente da equipe de vendas. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Conceder o papel de Project Editor à equipe de Marketing para o projeto acme-data-digest."
      },
      {
        "id": "B",
        "text": "Criar um bloqueio de projeto (Project Lien) em acme-data-digest e, em seguida, conceder o papel de Project Editor à equipe de Marketing."
      },
      {
        "id": "C",
        "text": "Criar outro projeto com o ID acme-marketing-data-digest para a equipe de Marketing e implantar os recursos lá."
      },
      {
        "id": "D",
        "text": "Criar um novo projeto chamado Marketing Data Digest e usar o ID acme-data-digest. Conceder o papel de Project Editor à equipe de Marketing."
      }
    ],
    "correct_answer": "C",
    "official_rationale": "Para isolar e organizar recursos de forma independente entre equipes, deve-se criar um novo projeto com um Project ID globalmente exclusivo (ex.: acme-marketing-data-digest).",
    "explanation_why_correct": "No Google Cloud, os recursos são isolados no nível do projeto e todo **ID de projeto (Project ID) deve ser globalmente exclusivo**. Portanto, você deve **criar um novo projeto com um ID exclusivo (`acme-marketing-data-digest`)** para a equipe de Marketing e implantar os recursos nele.",
    "explanation_why_incorrect": "Compartilhar o mesmo projeto `acme-data-digest` (A e B) não organiza nem isola os recursos de forma independente. Reutilizar o mesmo ID de projeto `acme-data-digest` em um novo projeto (D) é impossível, pois os IDs de projeto são únicos em todo o Google Cloud.",
    "additional_reading": [
      {
        "title": "Identificadores de projetos no Resource Manager",
        "url": "https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects"
      }
    ]
  },
  {
    "id": 41,
    "type": "single",
    "category": "Configurar acesso e segurança (20%)",
    "category_en": "Configurar acesso e segurança (20%)",
    "objective": "5.3 Conectar-se via SSH a instâncias sem IP público usando o Cloud Identity-Aware Proxy (IAP TCP Forwarding)",
    "what_it_tests": "O encaminhamento TCP do Cloud Identity-Aware Proxy (IAP for SSH and TCP resources) permite acessar instâncias de VM via SSH pela internet usando túneis criptografados sem que as VMs precisem ter endereço IP público.",
    "question": "Você implantou várias instâncias Linux no Compute Engine. Você planeja adicionar mais instâncias nas próximas semanas. Você deseja poder acessar todas essas instâncias por meio do seu cliente SSH pela internet sem ter que configurar acesso específico nas instâncias existentes e novas. Você não quer que as instâncias do Compute Engine tenham um IP público. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Configurar o Cloud Identity-Aware Proxy para recursos HTTPS."
      },
      {
        "id": "B",
        "text": "Configurar o Cloud Identity-Aware Proxy para recursos SSH e TCP."
      },
      {
        "id": "C",
        "text": "Criar um par de chaves SSH e armazenar a chave pública como uma Chave SSH em todo o projeto."
      },
      {
        "id": "D",
        "text": "Criar um par de chaves SSH e armazenar a chave privada como uma Chave SSH em todo o projeto."
      }
    ],
    "correct_answer": "B",
    "official_rationale": "O encaminhamento TCP do Cloud Identity-Aware Proxy (IAP for SSH and TCP resources) permite acessar instâncias de VM via SSH pela internet usando túneis criptografados sem que as VMs precisem ter endereço IP público.",
    "explanation_why_correct": "Configurar o **Cloud Identity-Aware Proxy (IAP) para recursos SSH e TCP** (TCP forwarding) permite estabelecer conexões SSH autenticadas pela Internet diretamente para o IP interno das instâncias do Compute Engine, **sem que as VMs tenham IP público** e sem precisar configurar cada VM individualmente.",
    "explanation_why_incorrect": "O IAP para HTTPS (A) aplica-se a aplicativos web atrás de um balanceador de carga HTTP(S), não a SSH/TCP. Apenas adicionar chaves SSH no projeto (C e D) não permite conectar via internet se as VMs não possuem endereço IP público nem túnel IAP/VPN.",
    "additional_reading": [
      {
        "title": "Usar o IAP para encaminhamento TCP e SSH",
        "url": "https://cloud.google.com/iap/docs/using-tcp-forwarding"
      }
    ]
  },
  {
    "id": 42,
    "type": "single",
    "category": "Implantar e implementar uma solução de nuvem (25%)",
    "category_en": "Implantar e implementar uma solução de nuvem (25%)",
    "objective": "3.2 Armazenar imagens no Container Registry e implantar no GKE com um Deployment",
    "what_it_tests": "Para implantar uma imagem Docker no GKE, envia-se a imagem para o Container Registry (ou Artifact Registry) e cria-se um objeto Kubernetes Deployment que referencia a imagem.",
    "question": "Você criou um aplicativo que está empacotado em uma imagem Docker. Você deseja implantar a imagem Docker como uma carga de trabalho no Google Kubernetes Engine. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Fazer o upload da imagem para o Cloud Storage e criar um Kubernetes Service referenciando a imagem."
      },
      {
        "id": "B",
        "text": "Fazer o upload da imagem para o Cloud Storage e criar um Kubernetes Deployment referenciando a imagem."
      },
      {
        "id": "C",
        "text": "Fazer o upload da imagem para o Container Registry e criar um Kubernetes Service referenciando a imagem."
      },
      {
        "id": "D",
        "text": "Fazer o upload da imagem para o Container Registry e criar um Kubernetes Deployment referenciando a imagem."
      }
    ],
    "correct_answer": "D",
    "official_rationale": "Para implantar uma imagem Docker no GKE, envia-se a imagem para o Container Registry (ou Artifact Registry) e cria-se um objeto Kubernetes Deployment que referencia a imagem.",
    "explanation_why_correct": "No GKE, as imagens de contêiner devem ser hospedadas em um registro de contêineres como o **Container Registry (ou Artifact Registry)**, e a carga de trabalho é declarada e gerenciada por um objeto **Kubernetes Deployment** que referencia essa imagem.",
    "explanation_why_incorrect": "Não se faz upload de imagens Docker diretamente como arquivos no Cloud Storage (A e B). Além disso, um `Kubernetes Service` (A e C) serve apenas para expor rede/balanceamento de carga para pods existentes; ele não referencia imagens Docker nem cria pods.",
    "additional_reading": [
      {
        "title": "Implantar imagens de contêiner no GKE",
        "url": "https://cloud.google.com/kubernetes-engine/docs/how-to/deploying-workloads-overview"
      }
    ]
  },
  {
    "id": 43,
    "type": "single",
    "category": "Garantir a operação bem-sucedida de uma solução de nuvem (20%)",
    "category_en": "Garantir a operação bem-sucedida de uma solução de nuvem (20%)",
    "objective": "4.2 Diagnosticar falhas em tabelas de resumo do BigQuery consultadas pelo Looker Studio (Data Studio)",
    "what_it_tests": "Quando gráficos do Data Studio/Looker Studio conectados a uma tabela recalculada à noite no BigQuery quebram, deve-se verificar o histórico de jobs no BigQuery para identificar se o job noturno falhou ou alterou o esquema da tabela.",
    "question": "Você está usando o Data Studio (Looker Studio) para visualizar uma tabela do seu data warehouse que é construído sobre o BigQuery. Os dados são anexados ao data warehouse durante o dia. À noite, o resumo diário é recalculado sobrescrevendo a tabela. Você acabou de notar que os gráficos no Data Studio estão quebrados e deseja analisar o problema. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Revisar a página Error Reporting no Cloud Console para encontrar quaisquer erros."
      },
      {
        "id": "B",
        "text": "Usar a interface do BigQuery para revisar o job noturno e procurar por quaisquer erros."
      },
      {
        "id": "C",
        "text": "Usar o Cloud Debugger para descobrir por que os dados não foram atualizados corretamente."
      },
      {
        "id": "D",
        "text": "No Cloud Logging, criar um filtro para o seu relatório do Data Studio."
      }
    ],
    "correct_answer": "B",
    "official_rationale": "Quando gráficos do Data Studio/Looker Studio conectados a uma tabela recalculada à noite no BigQuery quebram, deve-se verificar o histórico de jobs no BigQuery para identificar se o job noturno falhou ou alterou o esquema da tabela.",
    "explanation_why_correct": "Como a tabela é sobrescrita todas as noites por um job no BigQuery, você deve **usar a interface do BigQuery (Histórico de Jobs / Job History) para revisar a execução do job noturno** e verificar se ocorreu algum erro ou alteração de esquema.",
    "explanation_why_incorrect": "O Error Reporting (A) e o Cloud Debugger (C) são ferramentas para código de aplicações em execução (como App Engine/GKE), não para jobs SQL do BigQuery. O Cloud Logging não registra erros internos de renderização de relatórios do Data Studio (D).",
    "additional_reading": [
      {
        "title": "Visualizar e gerenciar jobs no BigQuery",
        "url": "https://cloud.google.com/bigquery/docs/managing-jobs"
      }
    ]
  },
  {
    "id": 44,
    "type": "single",
    "category": "Configurar um ambiente de solução em nuvem (17.5%)",
    "category_en": "Configurar um ambiente de solução em nuvem (17.5%)",
    "objective": "1.1 Agrupar projetos que compartilham políticas comuns do IAM usando Pastas (Folders)",
    "what_it_tests": "Na hierarquia do Resource Manager do Google Cloud, as Pastas (Folders) permitem agrupar projetos e recursos que compartilham políticas comuns do IAM e Políticas da Organização por herança.",
    "question": "Foi solicitado que você configurasse a estrutura para um novo cliente do Google Cloud. Seu cliente deseja agrupar recursos que compartilham políticas comuns do IAM. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Usar rótulos (labels) para agrupar recursos que compartilham políticas comuns do IAM."
      },
      {
        "id": "B",
        "text": "Usar pastas (folders) para agrupar recursos que compartilham políticas comuns do IAM."
      },
      {
        "id": "C",
        "text": "Configurar uma estrutura adequada de conta de faturamento para agrupar políticas do IAM."
      },
      {
        "id": "D",
        "text": "Configurar uma estrutura adequada de nomenclatura de projetos para agrupar políticas do IAM."
      }
    ],
    "correct_answer": "B",
    "official_rationale": "Na hierarquia do Resource Manager do Google Cloud, as Pastas (Folders) permitem agrupar projetos e recursos que compartilham políticas comuns do IAM e Políticas da Organização por herança.",
    "explanation_why_correct": "As **Pastas (Folders)** no Resource Manager são o mecanismo oficial da hierarquia do Google Cloud para **agrupar projetos/recursos que compartilham políticas comuns do IAM**, pois as permissões aplicadas em uma pasta são herdadas automaticamente por todos os projetos dentro dela.",
    "explanation_why_incorrect": "Rótulos/labels (A) servem apenas para organização e filtragem de faturamento, não suportando herança de políticas do IAM. Contas de faturamento (C) e convenções de nomes de projetos (D) não agrupam nem propagam políticas de acesso do IAM nos recursos.",
    "additional_reading": [
      {
        "title": "Criar e gerenciar pastas no Resource Manager",
        "url": "https://cloud.google.com/resource-manager/docs/creating-managing-folders"
      }
    ]
  },
  {
    "id": 45,
    "type": "single",
    "category": "Implantar e implementar uma solução de nuvem (25%)",
    "category_en": "Implantar e implementar uma solução de nuvem (25%)",
    "objective": "3.4 Configurar Cloud VPN de Alta Disponibilidade (HA VPN) com roteamento dinâmico BGP no Cloud Router",
    "what_it_tests": "Para VPN de alta disponibilidade (HA VPN) com roteamento dinâmico e controle de espaço de endereços sem sobreposição, as boas práticas do Google recomendam VPC em modo personalizado (custom mode) e Cloud Router com BGP.",
    "question": "Foi solicitado que você criasse uma conectividade robusta de Rede Privada Virtual (VPN) entre uma nova Nuvem Privada Virtual (VPC) e um site remoto. Os principais requisitos incluem roteamento dinâmico, um espaço de endereços compartilhado de 10.19.0.1/22 e nenhum superprovisionamento de túneis durante um evento de failover. Você deseja seguir as práticas recomendadas pelo Google para configurar um Cloud VPN de alta disponibilidade. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Usar uma rede VPC em modo personalizado (custom mode), configurar rotas estáticas e usar roteamento ativo/passivo."
      },
      {
        "id": "B",
        "text": "Usar uma rede VPC em modo automático (automatic mode), configurar rotas estáticas e usar roteamento ativo/ativo."
      },
      {
        "id": "C",
        "text": "Usar uma rede VPC em modo personalizado (custom mode), usar rotas BGP (Border Gateway Protocol) do Cloud Router e usar roteamento ativo/passivo."
      },
      {
        "id": "D",
        "text": "Usar uma rede VPC em modo automático (automatic mode), usar rotas BGP do Cloud Router e configurar roteamento baseado em políticas."
      }
    ],
    "correct_answer": "C",
    "official_rationale": "Para VPN de alta disponibilidade (HA VPN) com roteamento dinâmico e controle de espaço de endereços sem sobreposição, as boas práticas do Google recomendam VPC em modo personalizado (custom mode) e Cloud Router com BGP.",
    "explanation_why_correct": "Seguir as práticas recomendadas pelo Google para **Cloud VPN de Alta Disponibilidade (HA VPN)** com roteamento dinâmico exige **usar uma rede VPC em modo personalizado (custom mode)** (para usar o bloco `10.19.0.1/22` sem conflito com sub-redes automáticas), **usar o Cloud Router com sessões BGP** para roteamento dinâmico e configurar o roteamento **ativo/passivo** para evitar superprovisionamento durante failovers.",
    "explanation_why_incorrect": "Rotas estáticas (A e B) não atendem ao requisito de roteamento dinâmico. Redes VPC em modo automático (B e D) usam o bloco `10.128.0.0/9` e não são recomendadas para ambientes de produção conectados via VPN híbrida.",
    "additional_reading": [
      {
        "title": "Práticas recomendadas para o Cloud VPN e HA VPN",
        "url": "https://cloud.google.com/network-connectivity/docs/vpn/concepts/best-practices"
      }
    ]
  },
  {
    "id": 46,
    "type": "single",
    "category": "Implantar e implementar uma solução de nuvem (25%)",
    "category_en": "Implantar e implementar uma solução de nuvem (25%)",
    "objective": "3.2 Otimizar clusters GKE com cargas de trabalho mistas usando pools de nós otimizados para computação",
    "what_it_tests": "Quando um microsserviço específico no GKE exige alta proporção de CPU em relação à memória (como renderização de imagens), cria-se um Node Pool dedicado com tipos de máquina compute-optimized (C2/H3) para ele e mantém-se o Node Pool general-purpose para os demais.",
    "question": "Você está executando vários microsserviços em um cluster do Kubernetes Engine. Um microsserviço está renderizando imagens. O microsserviço responsável pela renderização de imagens requer uma grande quantidade de tempo de CPU em comparação com a memória que exige. Os outros microsserviços são cargas de trabalho otimizadas para tipos de máquina n1-standard. Você precisa otimizar seu cluster para que todas as cargas de trabalho usem os recursos da maneira mais eficiente possível. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Atribuir aos pods do microsserviço de renderização de imagens uma prioridade de pod maior do que a dos outros microsserviços."
      },
      {
        "id": "B",
        "text": "Criar um pool de nós (node pool) com nós de tipo de máquina otimizado para computação (compute-optimized) para o microsserviço de renderização de imagens. Usar o pool de nós com nós de tipo de máquina de uso geral (general-purpose) para os outros microsserviços."
      },
      {
        "id": "C",
        "text": "Usar o pool de nós com nós de tipo de máquina de uso geral para o microsserviço de renderização de imagens. Criar um pool de nós com nós de tipo de máquina otimizado para computação para os outros microsserviços."
      },
      {
        "id": "D",
        "text": "Configurar a quantidade necessária de CPU e memória na especificação de solicitações de recursos (resource requests) do deployment do microsserviço de renderização de imagens. Manter as solicitações de recursos para os outros microsserviços no padrão."
      }
    ],
    "correct_answer": "B",
    "official_rationale": "Quando um microsserviço específico no GKE exige alta proporção de CPU em relação à memória (como renderização de imagens), cria-se um Node Pool dedicado com tipos de máquina compute-optimized (C2/H3) para ele e mantém-se o Node Pool general-purpose para os demais.",
    "explanation_why_correct": "Criar um **pool de nós (Node Pool) com tipos de máquina otimizados para computação (compute-optimized)** para agendar os pods do microsserviço de renderização de imagens e manter o **pool de nós de uso geral (`n1-standard`) para os demais microsserviços** evita o desperdício de memória RAM e maximiza a eficiência do cluster.",
    "explanation_why_incorrect": "Prioridade de pod (A) define apenas ordem de agendamento/evicção. A opção C inverte os pools de nós. Apenas ajustar `resource requests` em nós `n1-standard` (D) deixaria grande parte da memória dos nós ociosa (stranded memory) por causa do alto consumo de CPU do serviço de renderização.",
    "additional_reading": [
      {
        "title": "Sobre pools de nós (Node Pools) no GKE",
        "url": "https://cloud.google.com/kubernetes-engine/docs/concepts/node-pools"
      }
    ]
  },
  {
    "id": 47,
    "type": "single",
    "category": "Configurar um ambiente de solução em nuvem (17.5%)",
    "category_en": "Configurar um ambiente de solução em nuvem (17.5%)",
    "objective": "1.1 Isolar custos de uma nova iniciativa departamental vinculando um novo projeto a uma conta de faturamento específica",
    "what_it_tests": "Para faturar separadamente o departamento de Marketing pelo projeto da nova iniciativa, garante-se a permissão de faturamento apropriada e vincula-se o novo projeto de Marketing diretamente a uma Conta de Faturamento dedicada de Marketing.",
    "question": "Sua organização possui três projetos existentes do Google Cloud. Você precisa faturar o departamento de Marketing apenas pelos serviços do Google Cloud deles para uma nova iniciativa dentro do grupo deles. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "1. Verificar se você possui o papel do IAM de Billing Administrator atribuído para o Projeto do Google Cloud da sua organização para o departamento de Marketing. 2. Vincular o novo projeto a uma Conta de Faturamento de Marketing."
      },
      {
        "id": "B",
        "text": "1. Verificar se você possui o papel do IAM de Billing Administrator atribuído para a conta do Google Cloud da sua organização. 2. Criar um novo Projeto do Google Cloud para o departamento de Marketing. 3. Definir os rótulos de projeto padrão chave-valor como department:marketing para todos os serviços neste projeto."
      },
      {
        "id": "C",
        "text": "1. Verificar se você possui o papel do IAM de Organization Administrator atribuído para a conta do Google Cloud da sua organização. 2. Criar um novo Projeto do Google Cloud para o departamento de Marketing. 3. Vincular o novo projeto a uma Conta de Faturamento de Marketing."
      },
      {
        "id": "D",
        "text": "1. Verificar se você possui o papel do IAM de Organization Administrator atribuído para a conta do Google Cloud da sua organização. 2. Criar um novo Projeto do Google Cloud para o departamento de Marketing. 3. Definir os rótulos de projeto padrão chave-valor como department:marketing para todos os serviços neste projeto."
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Para faturar separadamente o departamento de Marketing pelo projeto da nova iniciativa, garante-se a permissão de faturamento apropriada e vincula-se o novo projeto de Marketing diretamente a uma Conta de Faturamento dedicada de Marketing.",
    "explanation_why_correct": "Para que o departamento de Marketing receba a cobrança exclusiva da nova iniciativa, o **novo projeto do departamento de Marketing deve ser vinculado a uma Conta de Faturamento de Marketing** utilizando as permissões de **Billing Administrator** (e Project Billing Manager no projeto).",
    "explanation_why_incorrect": "Definir apenas rótulos `department:marketing` (B e D) ajuda a filtrar relatórios, mas não gera uma cobrança/fatura separada para o departamento de Marketing. O papel `Organization Administrator` (C e D) não concede permissão para vincular uma Conta de Faturamento sem um papel do Cloud Billing (`Billing Account Administrator` / `Billing Account User`).",
    "additional_reading": [
      {
        "title": "Visão geral do controle de acesso do Cloud Billing",
        "url": "https://cloud.google.com/billing/docs/how-to/billing-access"
      }
    ]
  },
  {
    "id": 48,
    "type": "single",
    "category": "Implantar e implementar uma solução de nuvem (25%)",
    "category_en": "Implantar e implementar uma solução de nuvem (25%)",
    "objective": "3.1 Realizar lift and shift de VMs com escalonamento automático usando Grupos Gerenciados de Instâncias (MIG)",
    "what_it_tests": "Em uma migração 'lift and shift' para VMs do Compute Engine que exige escalonamento automático por CPU, a solução nativa recomendada é um Grupo Gerenciado de Instâncias (MIG) com autoscaling baseado em utilização de CPU.",
    "question": "Sua empresa deseja migrar um aplicativo de missão crítica para o Google Cloud Platform. O aplicativo está atualmente hospedado em seu data center local (on-premises) e é executado em várias VMs. Seu gerente de migração sugeriu um “lift and shift” para Máquinas Virtuais do Google Compute Engine e pediu que você garantisse que o aplicativo escalonasse de forma rápida, automática e eficiente com base na utilização de CPU. Você deseja seguir as práticas recomendadas pelo Google. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Implantar o aplicativo em um Grupo Gerenciado de Instâncias (MIG) do Google Compute Engine com o escalonamento automático (autoscaling) habilitado com base na utilização de CPU."
      },
      {
        "id": "B",
        "text": "Implantar o aplicativo em um cluster GKE com o Escalonamento Automático Horizontal de Pods (HPA) habilitado com base na utilização de CPU."
      },
      {
        "id": "C",
        "text": "Implantar o aplicativo em um Grupo Gerenciado de Instâncias (MIG) do Google Compute Engine com escalonamento automático baseado em tempo, com base nos padrões de tráfego do mês passado."
      },
      {
        "id": "D",
        "text": "Implantar o aplicativo em um Grupo Gerenciado de Instâncias (MIG) do Google Compute Engine. Implantar uma Cloud Function para consultar a utilização de CPU no Cloud Monitoring a cada minuto e escalonar o grupo MIG para cima ou para baixo conforme necessário."
      }
    ],
    "correct_answer": "A",
    "official_rationale": "Em uma migração 'lift and shift' para VMs do Compute Engine que exige escalonamento automático por CPU, a solução nativa recomendada é um Grupo Gerenciado de Instâncias (MIG) com autoscaling baseado em utilização de CPU.",
    "explanation_why_correct": "Para atender ao requisito de **lift and shift para VMs do Compute Engine** com escalonamento rápido e automático por CPU, você deve **implantar o aplicativo em um Grupo Gerenciado de Instâncias (MIG) com autoscaling nativo habilitado com base na utilização de CPU**.",
    "explanation_why_incorrect": "Migrar para o GKE (B) exigiria conteinerizar a aplicação (re-platform/refactor), e não um lift and shift direto de VMs. Escalonar por horário fixo (C) não reage a picos reais de CPU, e criar uma Cloud Function a cada minuto (D) recria de forma ineficiente um recurso que o MIG já possui nativamente.",
    "additional_reading": [
      {
        "title": "Escalonamento automático com base na utilização de CPU em MIGs",
        "url": "https://cloud.google.com/compute/docs/autoscaler/scaling-cpu"
      }
    ]
  },
  {
    "id": 49,
    "type": "single",
    "category": "Planejar e configurar uma solução de nuvem (17.5%)",
    "category_en": "Planejar e configurar uma solução de nuvem (17.5%)",
    "objective": "2.4 Planejar o balanceamento de carga para aplicativos que utilizam WebSockets e afinidade de sessão",
    "what_it_tests": "O HTTP(S) Load Balancer do Google Cloud oferece suporte nativo tanto ao protocolo WebSockets quanto à afinidade de sessão (session affinity), portanto basta alinhar e escolher a opção adequada de balanceador de carga com as equipes.",
    "question": "Sua empresa está migrando todos os aplicativos do data center local (on-premises) para o Google Cloud, e um dos aplicativos depende do protocolo WebSockets e de afinidade de sessão (session affinity). Você deseja garantir que esse aplicativo possa ser migrado para o Google Cloud Platform e continuar atendendo às solicitações sem problemas. O que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Modificar o código do aplicativo para não depender de afinidade de sessão."
      },
      {
        "id": "B",
        "text": "Revisar o projeto (design) com a equipe de segurança."
      },
      {
        "id": "C",
        "text": "Modificar o código do aplicativo para usar streaming HTTP."
      },
      {
        "id": "D",
        "text": "Discutir as opções de balanceador de carga com as equipes relevantes."
      }
    ],
    "correct_answer": "D",
    "official_rationale": "O HTTP(S) Load Balancer do Google Cloud oferece suporte nativo tanto ao protocolo WebSockets quanto à afinidade de sessão (session affinity), portanto basta alinhar e escolher a opção adequada de balanceador de carga com as equipes.",
    "explanation_why_correct": "Os balanceadores de carga do Google Cloud (como o **External/Internal HTTP(S) Load Balancer**) já oferecem **suporte nativo a WebSockets e afinidade de sessão (por IP do cliente ou cookie gerado)**. Portanto, não é necessário reescrever o aplicativo; basta **discutir e selecionar as opções de balanceador de carga adequadas com as equipes relevantes**.",
    "explanation_why_incorrect": "Reescrever o código do aplicativo para remover afinidade de sessão (A) ou trocar WebSockets por HTTP streaming (C) é desnecessário, pois o Google Cloud suporta ambos nativamente. Revisar apenas com a equipe de segurança (B) não define a arquitetura de balanceamento de carga.",
    "additional_reading": [
      {
        "title": "Suporte a WebSockets e afinidade de sessão no Cloud Load Balancing",
        "url": "https://cloud.google.com/load-balancing/docs/https"
      }
    ]
  },
  {
    "id": 50,
    "type": "single",
    "category": "Planejar e configurar uma solução de nuvem (17.5%)",
    "category_en": "Planejar e configurar uma solução de nuvem (17.5%)",
    "objective": "2.3 Selecionar o Cloud Bigtable para gravações de alta velocidade de dados IoT na escala de petabytes",
    "what_it_tests": "O Cloud Bigtable é o banco de dados NoSQL wide-column de altíssimo desempenho do Google Cloud, projetado para gravar e atualizar petabytes de dados de séries temporais (IoT) com latência de milissegundos.",
    "question": "Sua organização processa um volume muito alto de dados de IoT com carimbo de data/hora (timestamped IoT data). O volume total pode chegar a vários petabytes. Os dados precisam ser gravados e alterados em alta velocidade. Você deseja usar a opção de armazenamento de melhor desempenho para os seus dados. Qual produto você deve usar?",
    "options": [
      {
        "id": "A",
        "text": "Cloud Bigtable"
      },
      {
        "id": "B",
        "text": "Cloud Datastore"
      },
      {
        "id": "C",
        "text": "BigQuery"
      },
      {
        "id": "D",
        "text": "Cloud Storage"
      }
    ],
    "correct_answer": "A",
    "official_rationale": "O Cloud Bigtable é o banco de dados NoSQL wide-column de altíssimo desempenho do Google Cloud, projetado para gravar e atualizar petabytes de dados de séries temporais (IoT) com latência de milissegundos.",
    "explanation_why_correct": "O **Cloud Bigtable** é a opção de armazenamento de maior desempenho para **petabytes de dados de IoT com carimbo de data/hora (séries temporais)** que exigem **gravações e mutações em altíssima velocidade** e baixa latência.",
    "explanation_why_incorrect": "O Cloud Datastore (B) não é otimizado para vazão massiva de gravações de séries temporais na escala de vários petabytes. O BigQuery (C) é um data warehouse analítico (OLAP), não projetado para mutações/alterações frequentes de registros em baixa latência. O Cloud Storage (D) armazena objetos imutáveis, não permitindo alterações rápidas de registros.",
    "additional_reading": [
      {
        "title": "Visão geral do Cloud Bigtable",
        "url": "https://cloud.google.com/bigtable/docs/overview"
      }
    ]
  }
];
