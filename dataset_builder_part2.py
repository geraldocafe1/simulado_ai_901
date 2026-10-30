# Questions 21 to 50
questions_part2 = [
    # 21
    {
        "id": 21,
        "type": "single",
        "category": "Implementar soluções de IA com o Microsoft Foundry",
        "category_en": "Implement AI solutions with Microsoft Foundry",
        "objective": "2.2 Implement AI solutions for text and speech by using Foundry",
        "what_it_tests": "Criar um aplicativo leve que inclui análise de sentimento para avaliar textos de feedback de clientes.",
        "question": "Você tem um aplicativo Python que coleta comentários curtos de feedback de clientes.\n\nVocê precisa registrar um rótulo de sentimento e pontuações de confiança para positivo, neutro e negativo para cada comentário. A solução deve evitar o treinamento de um modelo personalizado.\n\nQual recurso do Azure Language no Foundry Tools o aplicativo deve chamar?",
        "options": [
            {"id": "A", "text": "Extração de frases-chave (Key phrase extraction)"},
            {"id": "B", "text": "Detecção de PII (PII detection)"},
            {"id": "C", "text": "Detecção de idioma (Language detection)"},
            {"id": "D", "text": "Análise de sentimento (Sentiment analysis)"}
        ],
        "correct_answer": "D",
        "user_attempt": "D",
        "user_was_correct": True,
        "official_rationale": "A Análise de Sentimento do Azure AI Language fornece rótulos preditivos (positivo, neutro, negativo) e pontuações de confiança em nível de documento e de frase sem necessidade de treinamento personalizado.",
        "explanation_why_correct": "A **Análise de sentimento (Sentiment analysis)** analisa a linguagem emocional e retorna rótulos precisos com as três pontuações de probabilidade (positivo, neutro e negativo) prontas para uso.",
        "explanation_why_incorrect": "• **A: Incorreta.** A extração de frases-chave identifica os tópicos principais discutidos, mas não sua valência emocional.\n• **B: Incorreta.** Detecção de PII localiza e mascara dados pessoais identificáveis.\n• **C: Incorreta.** Detecção de idioma apenas aponta em qual língua o texto foi escrito.",
        "additional_reading": [
            {"title": "How to: Use Sentiment analysis and Opinion Mining", "url": "https://learn.microsoft.com/azure/ai-services/language-service/sentiment-opinion-mining/overview"}
        ]
    },
    # 22
    {
        "id": 22,
        "type": "single",
        "category": "Implementar soluções de IA com o Microsoft Foundry",
        "category_en": "Implement AI solutions with Microsoft Foundry",
        "objective": "2.1 Implement generative AI apps and agents by using Foundry",
        "what_it_tests": "Criar um aplicativo cliente leve para um agente para enviar solicitações de usuário e exibir respostas do agente.",
        "question": "Você tem um aplicativo Python que usa um projeto do Microsoft Foundry contendo um agente de prompt existente chamado faq-agent.\n\nVocê precisa configurar o aplicativo para enviar uma mensagem do usuário para o agente existente.\n\nO que você deve fazer?",
        "options": [
            {"id": "A", "text": "Chamar responses.create() com um agent_reference"},
            {"id": "B", "text": "Gerar incorporações (embeddings) para a mensagem do usuário"},
            {"id": "C", "text": "Criar um agente efêmero no aplicativo"},
            {"id": "D", "text": "Chamar responses.create() com model definido como faq-agent"}
        ],
        "correct_answer": "A",
        "user_attempt": "B",
        "user_was_correct": False,
        "official_rationale": "No SDK unificado do Microsoft Foundry, para interagir com um agente já criado e hospedado (Foundry Agent Service), a chamada de API deve usar responses.create() passando a referência do agente através do parâmetro agent_reference.",
        "explanation_why_correct": "Para invocar um agente gerenciado pré-existente no Foundry, utiliza-se a API `responses.create(agent_reference=...)`. Isso vincula automaticamente a requisição às instruções, ferramentas e memória de conversa mantidas por aquele agente.",
        "explanation_why_incorrect": "• **B (Sua resposta original): Incorreta.** Gerar embeddings calcula vetores matemáticos para busca, mas não executa o loop de raciocínio nem gera resposta do agente.\n• **C: Incorreta.** Criar um agente efêmero ignoraria as ferramentas e configurações já estabelecidas no agente existente `faq-agent`.\n• **D: Incorreta.** O parâmetro `model` recebe o nome de uma implantação de modelo de IA, enquanto referências a agentes de alto nível usam o parâmetro dedicado `agent_reference`.",
        "additional_reading": [
            {"title": "What is Microsoft Foundry Agent Service?", "url": "https://learn.microsoft.com/azure/ai-studio/"}
        ]
    },
    # 23
    {
        "id": 23,
        "type": "multi",
        "category": "Implementar soluções de IA com o Microsoft Foundry",
        "category_en": "Implement AI solutions with Microsoft Foundry",
        "objective": "2.4 Implement AI solutions for information extraction by using Foundry",
        "what_it_tests": "Extrair elementos audiovisuais integrados como segmentos de fala diarizados e carimbos de data/hora de quadros-chave.",
        "question": "Você precisa atualizar o aplicativo para ler elementos audiovisuais nativos que incluem:\n• segmentos de fala atribuídos a locutores com horários de início e término\n• carimbos de data/hora para quadros visuais representativos\n\nQuais DOIS elementos o aplicativo deve ler? (Cada resposta correta apresenta parte da solução).",
        "options": [
            {"id": "A", "text": "As propriedades width e height"},
            {"id": "B", "text": "O objeto fields"},
            {"id": "C", "text": "A matriz keyFrameTimesMs"},
            {"id": "D", "text": "A matriz transcriptPhrases"},
            {"id": "E", "text": "A matriz cameraShotTimesMs"}
        ],
        "correct_answer": ["C", "D"],
        "user_attempt": ["C", "D"],
        "user_was_correct": True,
        "official_rationale": "No schema de saída audiovisual do Azure Content Understanding, transcriptPhrases armazena cada frase dita, com locutor e timestamps de início e fim. A matriz keyFrameTimesMs armazena os timestamps em milissegundos dos frames visuais mais informativos selecionados pelo modelo.",
        "explanation_why_correct": "• **C (`keyFrameTimesMs`):** Fornece exatamente a lista de tempos (em milissegundos) dos quadros-chave mais representativos da mídia.\n• **D (`transcriptPhrases`):** Contém as frases transcritas, com diarização de voz e timestamps de início e término.",
        "explanation_why_incorrect": "• **A: Incorreta.** `width` e `height` apenas informam a resolução geométrica em pixels do vídeo.\n• **B: Incorreta.** O objeto `fields` armazena os campos customizados do esquema definido pelo usuário, não os metadados nativos de transcrição e frames.\n• **E: Incorreta.** `cameraShotTimesMs` demarca cortes de câmera (mudança de tomada cinematográfica), não os frames mais representativos do conteúdo.",
        "additional_reading": [
            {"title": "Azure Content Understanding video solutions", "url": "https://learn.microsoft.com/azure/ai-services/content-understanding/"}
        ]
    },
    # 24
    {
        "id": 24,
        "type": "single",
        "category": "Implementar soluções de IA com o Microsoft Foundry",
        "category_en": "Implement AI solutions with Microsoft Foundry",
        "objective": "2.2 Implement AI solutions for text and speech by using Foundry",
        "what_it_tests": "Criar um aplicativo leve que inclui reconhecimento de entidades nomeadas para extrair pessoas, lugares e organizações de texto.",
        "question": "Você tem um aplicativo Python que processa mensagens de suporte ao cliente usando o Azure Language no Foundry Tools.\n\nVocê precisa extrair pessoas, locais e organizações de cada mensagem, incluindo o texto correspondente e a categoria.\n\nQual método do cliente o aplicativo deve chamar?",
        "options": [
            {"id": "A", "text": "recognize_linked_entities(documents=documents)"},
            {"id": "B", "text": "analyze_sentiment(documents=documents)"},
            {"id": "C", "text": "extract_key_phrases(documents=documents)"},
            {"id": "D", "text": "recognize_entities(documents=documents)"}
        ],
        "correct_answer": "D",
        "user_attempt": "D",
        "user_was_correct": True,
        "official_rationale": "O método recognize_entities() no SDK do Azure AI Language executa o Reconhecimento de Entidades Nomeadas (NER), categorizando trechos de texto em entidades como Pessoa, Local, Organização e Data/Hora com suas respectivas subcategorias e confiança.",
        "explanation_why_correct": "O método **`recognize_entities()`** executa NER (Named Entity Recognition), identificando diretamente pessoas, organizações e locais junto com seus limites de caractere e categorias.",
        "explanation_why_incorrect": "• **A: Incorreta.** `recognize_linked_entities()` realiza *Entity Linking*, retornando links da Wikipédia para desambiguação, mas não a categorização padrão do NER.\n• **B: Incorreta.** `analyze_sentiment()` avalia o sentimento emocional do texto.\n• **C: Incorreta.** `extract_key_phrases()` extrai termos conceituais gerais, sem classificá-los como pessoas ou locais.",
        "additional_reading": [
            {"title": "How to use Named Entity Recognition (NER)", "url": "https://learn.microsoft.com/azure/ai-services/language-service/named-entity-recognition/overview"}
        ]
    },
    # 25
    {
        "id": 25,
        "type": "single",
        "category": "Implementar soluções de IA com o Microsoft Foundry",
        "category_en": "Implement AI solutions with Microsoft Foundry",
        "objective": "2.1 Implement generative AI apps and agents by using Foundry",
        "what_it_tests": "Criar um aplicativo de chat leve usando o SDK do Foundry para enviar prompts e receber saídas de modelos.",
        "question": "Você tem um aplicativo de chat em Python que usa um cliente compatível com OpenAI de um projeto do Microsoft Foundry.\n\nVocê precisa enviar um único prompt usando a API unificada de invocação de modelo do Foundry.\n\nQual método o aplicativo deve chamar?",
        "options": [
            {"id": "A", "text": "responses.create()"},
            {"id": "B", "text": "chat.completions.create()"},
            {"id": "C", "text": "deployments.get()"},
            {"id": "D", "text": "models.list()"}
        ],
        "correct_answer": "A",
        "user_attempt": "A",
        "user_was_correct": True,
        "official_rationale": "A nova API unificada de inferência do Microsoft Foundry adota o padrão de endpoint unificado responses.create(), que suporta chamadas síncronas/assíncronas para múltiplos tipos de modelos e agentes.",
        "explanation_why_correct": "O método **`responses.create()`** é a interface unificada de chamada introduzida pelo Microsoft Foundry SDK para simplificar o consumo de modelos generativos e agentes.",
        "explanation_why_incorrect": "• **B: Incorreta.** `chat.completions.create()` é a assinatura da API legada clássica do OpenAI, não a API unificada moderna do Foundry.\n• **C e D: Incorretas.** `deployments.get()` e `models.list()` são operações de gerenciamento de recursos de infraestrutura no plano de controle, não métodos de inferência.",
        "additional_reading": [
            {"title": "Microsoft Foundry SDK Quickstart", "url": "https://learn.microsoft.com/azure/ai-studio/"}
        ]
    },
    # 26
    {
        "id": 26,
        "type": "single",
        "category": "Implementar soluções de IA com o Microsoft Foundry",
        "category_en": "Implement AI solutions with Microsoft Foundry",
        "objective": "2.1 Implement generative AI apps and agents by using Foundry",
        "what_it_tests": "Implantar um modelo no portal do Foundry para um cenário selecionado de IA generativa aplicando controles de governança.",
        "question": "Você tem um projeto do Microsoft Foundry.\n\nVocê precisa implantar um modelo do Azure OpenAI para um aplicativo de chat e aplicar proteções de governança e moderação (guardrails).\n\nQual opção de implantação você deve usar?",
        "options": [
            {"id": "A", "text": "Implantação de computação gerenciada (Managed compute deployment)"},
            {"id": "B", "text": "Implantação padrão em recursos do Foundry (Standard deployment in Foundry resources)"},
            {"id": "C", "text": "Acesso instantâneo (Instant access)"},
            {"id": "D", "text": "Tipo de implantação provisionada (Provisioned deployment type)"}
        ],
        "correct_answer": "B",
        "user_attempt": "B",
        "user_was_correct": True,
        "official_rationale": "A implantação padrão (Standard deployment in Foundry resources) é a forma nativa recomendada para serviços Azure OpenAI no Foundry, permitindo integração direta com filtros de conteúdo de segurança (Content Safety guardrails) sob o modelo de cobrança 'pay-as-you-go'.",
        "explanation_why_correct": "A **implantação padrão (Standard deployment)** dentro dos recursos do Foundry oferece balanceamento elétrico de carga e suporta a configuração completa de guardrails de segurança contra injeção de prompt e conteúdo impróprio.",
        "explanation_why_incorrect": "• **A: Incorreta.** Computação gerenciada (Managed compute) é usada para hospedar contêineres de modelos de código aberto (como modelos do Hugging Face em máquinas virtuais dedicadas), o que não é o caso do Azure OpenAI nativo.\n• **C: Incorreta.** 'Instant access' refere-se ao modo Serverless API (MaaS), geralmente sem os mesmos controles de governança unificados do Foundry resource.\n• **D: Incorreta.** Implantações provisionadas (PTUs) destinam-se a garantir throughput reservado e previsível em larga escala com custo fixo mensal elevado.",
        "additional_reading": [
            {"title": "Deployment overview for Microsoft Foundry", "url": "https://learn.microsoft.com/azure/ai-studio/how-to/deploy-models"}
        ]
    },
    # 27
    {
        "id": 27,
        "type": "single",
        "category": "Implementar soluções de IA com o Microsoft Foundry",
        "category_en": "Implement AI solutions with Microsoft Foundry",
        "objective": "2.2 Implement AI solutions for text and speech by using Foundry",
        "what_it_tests": "Criar um aplicativo leve usando o Azure Speech no Foundry Tools para converter respostas de texto em fala sintetizada.",
        "question": "Você tem um aplicativo Python que armazena respostas geradas em uma variável chamada response_text.\n\nVocê precisa usar o Azure Speech no Foundry Tools para sintetizar response_text usando a voz en-US-Ava:DragonHDLatestNeural e reproduzir o áudio no alto-falante padrão.\n\nQual configuração o aplicativo deve usar?",
        "options": [
            {"id": "A", "text": "speech_synthesis_language e saída no alto-falante padrão"},
            {"id": "B", "text": "speech_synthesis_voice_name e saída no alto-falante padrão"},
            {"id": "C", "text": "speech_synthesis_language e saída em arquivo"},
            {"id": "D", "text": "speech_synthesis_voice_name e saída em arquivo"}
        ],
        "correct_answer": "B",
        "user_attempt": "D",
        "user_was_correct": False,
        "official_rationale": "Para usar uma voz neural específica como en-US-Ava:DragonHDLatestNeural, a propriedade speech_synthesis_voice_name deve ser configurada. Como o requisito exige tocar o áudio diretamente no alto-falante do computador, o destino de áudio deve ser o default speaker output.",
        "explanation_why_correct": "A propriedade `speech_synthesis_voice_name` define o identificador exato da voz neural. A saída deve ser configurada para o alto-falante padrão (`AudioConfig(use_default_speaker=True)`), atendendo à exigência de tocar o som diretamente.",
        "explanation_why_incorrect": "• **D (Sua resposta original): Incorreta.** Você selecionou a voz correta, mas configurou a saída para arquivo ('file output'). O enunciado exige expressamente 'play the audio on the default speaker' (reproduzir no alto-falante padrão).\n• **A e C: Incorretas.** `speech_synthesis_language` apenas define o idioma genérico, ignorando a seleção da voz neural ultra-realista solicitada.",
        "additional_reading": [
            {"title": "Create a speech-enabled app with Azure Speech", "url": "https://learn.microsoft.com/azure/ai-services/speech-service/"}
        ]
    },
    # 28
    {
        "id": 28,
        "type": "single",
        "category": "Implementar soluções de IA com o Microsoft Foundry",
        "category_en": "Implement AI solutions with Microsoft Foundry",
        "objective": "2.3 Implement AI solutions with computer vision and image-generation capabilities by using Foundry",
        "what_it_tests": "Interpretar entrada visual em prompts usando um modelo multimodal implantado para comparar várias imagens em um único prompt.",
        "question": "Você tem um aplicativo Python que usa a API OpenAI Responses no Microsoft Foundry com um modelo multimodal implantado.\n\nOs usuários fornecem duas URLs de imagens HTTPS. Você precisa que o aplicativo retorne uma comparação de texto entre as duas imagens em uma única solicitação.\n\nO que a solicitação deve incluir?",
        "options": [
            {"id": "A", "text": "Uma instrução de texto e cada URL de imagem como uma parte de conteúdo input_image separada"},
            {"id": "B", "text": "Cada URL de imagem enviada para um ponto de extremidade de geração de imagem"},
            {"id": "C", "text": "Cada URL de imagem como uma parte de conteúdo image_url no formato Chat Completions"},
            {"id": "D", "text": "Uma instrução de texto e cada URL de imagem combinadas juntas em um único valor input_text"}
        ],
        "correct_answer": "A",
        "user_attempt": "D",
        "user_was_correct": False,
        "official_rationale": "Na API unificada de Responses do Foundry, a mensagem deve conter uma parte de texto com as instruções e partes de conteúdo individuais do tipo input_image para cada imagem analisada, permitindo ao modelo correlacionar ambas.",
        "explanation_why_correct": "A estrutura de mensagem multimodal exige que cada imagem seja informada em seu próprio bloco de conteúdo do tipo `input_image`, permitindo que a API baixe e codifique ambas as imagens paralelamente para comparação.",
        "explanation_why_incorrect": "• **D (Sua resposta original): Incorreta.** Misturar as URLs dentro de um único texto `input_text` faz o modelo enxergá-las como texto puro (letras 'https://...'), sem renderizar ou analisar o conteúdo gráfico das imagens.\n• **B: Incorreta.** Endpoints de geração de imagem criam imagens novas, não comparam imagens existentes.\n• **C: Incorreta.** O formato `image_url` é o schema da API de Chat Completions tradicional, enquanto o enunciado especificou expressamente o uso da 'OpenAI Responses API'.",
        "additional_reading": [
            {"title": "Vision-enabled models in Microsoft Foundry", "url": "https://learn.microsoft.com/azure/ai-studio/"}
        ]
    },
    # 29
    {
        "id": 29,
        "type": "dropdown",
        "category": "Implementar soluções de IA com o Microsoft Foundry",
        "category_en": "Implement AI solutions with Microsoft Foundry",
        "objective": "2.2 Implement AI solutions for text and speech by using Foundry",
        "what_it_tests": "Responder a prompts falados usando um modelo multimodal sobre conteúdo visual fornecido com o prompt.",
        "question": "Selecione a resposta que completa corretamente a frase:\n\nNo Microsoft Foundry, um aplicativo que aceita entrada falada e uma imagem no mesmo prompt requer um(a) [ESCOLHA UMA OPÇÃO] implantado(a).",
        "options": [
            {"id": "A", "text": "Prompt Shield"},
            {"id": "B", "text": "modelo de incorporação (embedding model)"},
            {"id": "C", "text": "modelo multimodal (multimodal model)"},
            {"id": "D", "text": "modelo de geração de imagem (image generation model)"}
        ],
        "correct_answer": "C",
        "user_attempt": "C",
        "user_was_correct": True,
        "official_rationale": "Modelos que combinam mais de uma modalidade perceptiva (como áudio + visão + texto) são categorizados como modelos multimodais de ponta a ponta (ex: GPT-4o).",
        "explanation_why_correct": "O termo **multimodal** designa precisamente modelos com arquitetura neural unificada capaz de aceitar múltiplos sentidos (voz, imagem e texto) no mesmo contexto.",
        "explanation_why_incorrect": "• **A: Incorreta.** Prompt Shield é um filtro de segurança contra ataques de injeção de prompt e jailbreaks.\n• **B: Incorreta.** Modelos de embeddings calculam representações vetoriais para similaridade de documentos.\n• **D: Incorreta.** Modelos de geração de imagens geram gráficos a partir de texto, não interpretando voz e foto como entrada combinada.",
        "additional_reading": [
            {"title": "Choose and deploy a multimodal model", "url": "https://learn.microsoft.com/azure/ai-studio/"}
        ]
    },
    # 30
    {
        "id": 30,
        "type": "single",
        "category": "Identificar conceitos e recursos de IA",
        "category_en": "Identify AI concepts and capabilities",
        "objective": "1. Identify AI concepts and capabilities",
        "what_it_tests": "Compreender os diferentes tipos de cargas de trabalho de visão computacional.",
        "question": "Qual tipo de carga de trabalho de inteligência artificial (IA) oferece a capacidade de classificar pixels individuais em uma imagem dependendo do objeto que eles representam?",
        "options": [
            {"id": "A", "text": "análise de imagem (image analysis)"},
            {"id": "B", "text": "classificação de imagem (image classification)"},
            {"id": "C", "text": "detecção de objetos (object detection)"},
            {"id": "D", "text": "segmentação semântica (semantic segmentation)"}
        ],
        "correct_answer": "D",
        "user_attempt": "C",
        "user_was_correct": False,
        "official_rationale": "A segmentação semântica vai além de caixas delimitadoras: ela atribui uma classe a cada pixel individual de uma imagem (ex: pixels da pista, pixels do pedestre, pixels do céu), criando máscaras de segmentação ultra-precisas.",
        "explanation_why_correct": "A **Segmentação semântica (Semantic segmentation)** classifica a imagem no nível de cada pixel individual, permitindo mapear exatamente o contorno irregular de cada objeto (muito usado em carros autônomos e imagens médicas).",
        "explanation_why_incorrect": "• **C (Sua resposta original): Incorreta.** A *Detecção de objetos* identifica objetos desenhando **caixas retangulares delimitadoras (bounding boxes)** ao redor deles, sem rotular pixel a pixel.\n• **A: Incorreta.** A análise de imagem extrai tags descritivas e legendas para a imagem como um todo.\n• **B: Incorreta.** A classificação de imagem atribui uma ou mais categorias à imagem inteira (ex: 'esta foto contém um gato').",
        "additional_reading": [
            {"title": "Understand computer vision - Microsoft Learn", "url": "https://learn.microsoft.com/training/modules/explore-computer-vision/"}
        ]
    },
    # 31
    {
        "id": 31,
        "type": "single",
        "category": "Identificar conceitos e recursos de IA",
        "category_en": "Identify AI concepts and capabilities",
        "objective": "1. Identify AI concepts and capabilities",
        "what_it_tests": "Diferenciar a saída de serviços de visão computacional.",
        "question": "Qual serviço de visão computacional fornece coordenadas delimitadoras (bounding coordinates / bounding boxes) como parte de sua saída?",
        "options": [
            {"id": "A", "text": "análise de imagem (image analysis)"},
            {"id": "B", "text": "classificação de imagem (image classification)"},
            {"id": "C", "text": "detecção de objetos (object detection)"},
            {"id": "D", "text": "segmentação semântica (semantic segmentation)"}
        ],
        "correct_answer": "C",
        "user_attempt": "D",
        "user_was_correct": False,
        "official_rationale": "A detecção de objetos identifica a presença e classe de objetos em uma imagem e retorna coordenadas de caixas delimitadoras (bounding boxes: x, y, largura, altura) indicando onde eles se localizam.",
        "explanation_why_correct": "A **Detecção de objetos (Object detection)** fornece explicitamente as coordenadas retangulares (`bounding box`) de cada objeto localizado.",
        "explanation_why_incorrect": "• **D (Sua resposta original): Incorreta.** A segmentação semântica gera máscaras de pixels, não coordenadas de caixas delimitadoras retangulares.\n• **A: Incorreta.** Análise de imagem retorna legendas gerais e tags descritivas.\n• **B: Incorreta.** Classificação de imagem indica o que a imagem é no geral, sem retornar coordenadas de localização.",
        "additional_reading": [
            {"title": "Understand computer vision - Microsoft Learn", "url": "https://learn.microsoft.com/training/modules/explore-computer-vision/"}
        ]
    },
    # 32
    {
        "id": 32,
        "type": "dropdown",
        "category": "Identificar conceitos e recursos de IA",
        "category_en": "Identify AI concepts and capabilities",
        "objective": "1. Identify AI concepts and capabilities",
        "what_it_tests": "Compreender o papel dos embeddings em modelos de linguagem e recuperação semântica.",
        "question": "Selecione a resposta que completa corretamente a frase:\n\n[ESCOLHA UMA OPÇÃO] pode(m) pesquisar, classificar e comparar fontes de texto quanto à sua similaridade.",
        "options": [
            {"id": "A", "text": "Aterramento de dados (Data grounding)"},
            {"id": "B", "text": "Incorporações (Embeddings)"},
            {"id": "C", "text": "Aprendizado de máquina clássico (Machine learning)"},
            {"id": "D", "text": "Mensagens do sistema (System messages)"}
        ],
        "correct_answer": "B",
        "user_attempt": "B",
        "user_was_correct": True,
        "official_rationale": "Embeddings (incorporações) transformam textos em vetores matemáticos numéricos em um espaço multidimensional. Textos com significado semântico parecido ficam geometricamente próximos, permitindo busca e classificação por similaridade de cosseno.",
        "explanation_why_correct": "Modelos de **Embeddings** representam conceitos linguisticos em números, sendo a base de sistemas de busca semântica, classificação e RAG (Retrieval-Augmented Generation).",
        "explanation_why_incorrect": "• **A: Incorreta.** Aterramento de dados (grounding) é a técnica de conectar o modelo a fontes de dados reais da empresa para evitar alucinações.\n• **C: Incorreta.** Machine learning é a disciplina ampla que engloba toda essa área.\n• **D: Incorreta.** System messages definem o comportamento e as regras de um modelo generativo em chat.",
        "additional_reading": [
            {"title": "Responsible generative AI - Microsoft Learn", "url": "https://learn.microsoft.com/training/modules/explore-generative-ai/"}
        ]
    },
    # 33
    {
        "id": 33,
        "type": "multi",
        "category": "Identificar conceitos e recursos de IA",
        "category_en": "Identify AI concepts and capabilities",
        "objective": "1. Identify AI concepts and capabilities",
        "what_it_tests": "Identificar funcionalidades do serviço Azure AI Face para correspondência facial.",
        "question": "Ao usar o serviço Azure Face no Foundry Tools, o que você deve usar para realizar a correspondência de rostos de um para muitos (1:N) ou de um para um (1:1)? (Cada resposta correta apresenta uma solução completa).",
        "options": [
            {"id": "A", "text": "Custom Vision"},
            {"id": "B", "text": "atributos faciais (face attributes)"},
            {"id": "C", "text": "identificação facial (face identification)"},
            {"id": "D", "text": "verificação facial (face verification)"},
            {"id": "E", "text": "localizar rostos semelhantes (find similar faces)"}
        ],
        "correct_answer": ["C", "D"],
        "user_attempt": ["C", "D"],
        "user_was_correct": True,
        "official_rationale": "A identificação facial (Face Identification) resolve a correspondência de 1 para N (busca um rosto dentro de um grupo ou galeria de pessoas). A verificação facial (Face Verification) resolve a correspondência de 1 para 1 (compara se dois rostos pertencem à mesma pessoa física).",
        "explanation_why_correct": "• **C (`face identification`):** Executa correspondência 1:N (busca um rosto em um conjunto seguro de indivíduos cadastrados).\n• **D (`face verification`):** Executa correspondência 1:1 (valida se o rosto de uma foto corresponde ao rosto de um documento de identidade).",
        "explanation_why_incorrect": "• **A: Incorreta.** Custom Vision é voltado para treinar classificadores visuais genéricos de objetos, não para biometria facial.\n• **B: Incorreta.** Atributos faciais detectam presença de óculos, máscara ou sorriso, sem verificar identidade.\n• **E: Incorreta.** 'Find similar faces' busca aparências semelhantes, mas não atesta a identidade formal de um indivíduo.",
        "additional_reading": [
            {"title": "What is the Azure Face service?", "url": "https://learn.microsoft.com/azure/ai-services/computer-vision/overview-identity"}
        ]
    },
    # 34
    {
        "id": 34,
        "type": "single",
        "category": "Identificar conceitos e recursos de IA",
        "category_en": "Identify AI concepts and capabilities",
        "objective": "1. Identify AI concepts and capabilities",
        "what_it_tests": "Reconhecer cargas de trabalho de mineração de conhecimento (knowledge mining).",
        "question": "Qual tipo de carga de trabalho de inteligência artificial (IA) tem a finalidade principal de tornar pesquisáveis grandes quantidades de dados não estruturados?",
        "options": [
            {"id": "A", "text": "análise de imagem (image analysis)"},
            {"id": "B", "text": "mineração de conhecimento (knowledge mining)"},
            {"id": "C", "text": "detecção de objetos (object detection)"},
            {"id": "D", "text": "segmentação semântica (semantic segmentation)"}
        ],
        "correct_answer": "B",
        "user_attempt": "B",
        "user_was_correct": True,
        "official_rationale": "A mineração de conhecimento (knowledge mining), implementada principalmente pelo Azure AI Search, combina extração de texto, OCR, PLN e indexação vetorial para criar índices pesquisáveis sobre grandes volumes de documentos e dados dispersos.",
        "explanation_why_correct": "A **Mineração de conhecimento (Knowledge mining)** foi concebida para ingerir petabytes de dados brutos (PDFs, relatórios, planilhas), extrair insights por IA e torná-los imediatamente consultáveis.",
        "explanation_why_incorrect": "• **A, C e D: Incorretas.** Visão computacional (análise, detecção e segmentação) processa mídia visual, mas não tem como objetivo principal indexar acervos corporativos para busca de conhecimento.",
        "additional_reading": [
            {"title": "Understand knowledge mining - Microsoft Learn", "url": "https://learn.microsoft.com/training/modules/explore-knowledge-mining/"}
        ]
    },
    # 35
    {
        "id": 35,
        "type": "multi",
        "category": "Identificar conceitos e recursos de IA",
        "category_en": "Identify AI concepts and capabilities",
        "objective": "1. Identify AI concepts and capabilities",
        "what_it_tests": "Reconhecer as capacidades essenciais de modelos GPT (Generative Pre-trained Transformer).",
        "question": "Quais DUAS funcionalidades são capacidades centrais de um modelo GPT? (Cada resposta correta apresenta uma solução completa).",
        "options": [
            {"id": "A", "text": "Criar linguagem natural (Create natural language)"},
            {"id": "B", "text": "Detectar dialetos específicos de um idioma"},
            {"id": "C", "text": "Gerar legendas ocultas em tempo real a partir de um vídeo"},
            {"id": "D", "text": "Sintetizar fala com voz acústica (Synthesize speech)"},
            {"id": "E", "text": "Compreender linguagem natural (Understand natural language)"}
        ],
        "correct_answer": ["A", "E"],
        "user_attempt": ["A", "E"],
        "user_was_correct": True,
        "official_rationale": "Modelos GPT são modelos de fundação baseados em Transformers treinados massivamente para entender as nuances da linguagem natural humana e gerar texto coerente e contextualizado.",
        "explanation_why_correct": "• **A:** Geração de texto fluente e contextualmente rico (criar linguagem natural).\n• **E:** Interpretação semântica profunda de instruções, perguntas e intenções (compreender linguagem natural).",
        "explanation_why_incorrect": "• **C: Incorreta.** Gerar legendas em tempo real de vídeo envolve modelos de reconhecimento de fala acústico (Speech-to-Text).\n• **D: Incorreta.** Síntese de áudio falado é responsabilidade do Text-to-Speech (serviço Azure Speech).\n• **B: Incorreta.** Classificação formal de dialetos acústicos não é o propósito de um GPT.",
        "additional_reading": [
            {"title": "What is generative AI? - Microsoft Learn", "url": "https://learn.microsoft.com/training/modules/explore-generative-ai/"}
        ]
    },
    # 36
    {
        "id": 36,
        "type": "single",
        "category": "Identificar conceitos e recursos de IA",
        "category_en": "Identify AI concepts and capabilities",
        "objective": "1. Identify AI concepts and capabilities",
        "what_it_tests": "Identificar modelos generativos de geração visual.",
        "question": "Qual modelo de IA generativa é usado para gerar imagens com base em prompts de linguagem natural?",
        "options": [
            {"id": "A", "text": "DALL-E"},
            {"id": "B", "text": "Embeddings"},
            {"id": "C", "text": "GPT-3.5"},
            {"id": "D", "text": "GPT-4"},
            {"id": "E", "text": "Whisper"}
        ],
        "correct_answer": "A",
        "user_attempt": "A",
        "user_was_correct": True,
        "official_rationale": "DALL-E é o modelo generativo pioneiro da OpenAI integrado ao Azure para criação de imagens a partir de descrições textuais.",
        "explanation_why_correct": "O **DALL-E** (atualmente na versão DALL-E 3) converte descrições textuais em imagens fotorrealistas ou ilustrações artísticas.",
        "explanation_why_incorrect": "• **B: Incorreta.** Embeddings convertem texto em vetores de pontos flutuantes.\n• **C e D: Incorretas.** GPT-3.5 e GPT-4 são grandes modelos de linguagem focados em texto e código.\n• **E: Incorreta.** Whisper é um modelo especializado em transcrição e tradução de áudio (Speech-to-Text).",
        "additional_reading": [
            {"title": "Azure OpenAI Service models", "url": "https://learn.microsoft.com/azure/ai-services/openai/concepts/models"}
        ]
    },
    # 37
    {
        "id": 37,
        "type": "multi",
        "category": "Identificar conceitos e recursos de IA",
        "category_en": "Identify AI concepts and capabilities",
        "objective": "1. Identify AI concepts and capabilities",
        "what_it_tests": "Reconhecer cenários típicos de processamento de linguagem natural (PLN/NLP).",
        "question": "Quais DOIS cenários de carga de trabalho de inteligência artificial são exemplos de processamento de linguagem natural (NLP / PLN)? (Cada resposta correta apresenta uma solução completa).",
        "options": [
            {"id": "A", "text": "extrair texto manuscrito de imagens online"},
            {"id": "B", "text": "gerar tags e descrições para imagens"},
            {"id": "C", "text": "monitorar o tráfego de rede para picos repentinos"},
            {"id": "D", "text": "realizar análise de sentimento em dados de mídia social"},
            {"id": "E", "text": "traduzir texto entre diferentes idiomas em avaliações de produtos"}
        ],
        "correct_answer": ["D", "E"],
        "user_attempt": ["D", "E"],
        "user_was_correct": True,
        "official_rationale": "Análise de sentimento (classificar a atitude do consumidor a partir de postagens escritas) e Tradução de texto (converter conteúdo textual entre idiomas) são dois pilares fundamentais do Processamento de Linguagem Natural.",
        "explanation_why_correct": "• **D:** Analisar o sentimento em publicações é um caso clássico de NLP realizado pelo Azure AI Language.\n• **E:** A tradução automática de texto entre idiomas usa NLP por meio do Azure AI Translator.",
        "explanation_why_incorrect": "• **A: Incorreta.** Extração de texto manuscrito de imagens é Optical Character Recognition (OCR), classificado sob Visão Computacional.\n• **B: Incorreta.** Gerar tags a partir de fotos é análise de visão computacional.\n• **C: Incorreta.** Monitorar picos em tráfego de rede é Detecção de Anomalias (Anomaly Detection).",
        "additional_reading": [
            {"title": "Explore natural language processing - Microsoft Learn", "url": "https://learn.microsoft.com/training/modules/explore-natural-language-processing/"}
        ]
    },
    # 38
    {
        "id": 38,
        "type": "dropdown",
        "category": "Identificar conceitos e recursos de IA",
        "category_en": "Identify AI concepts and capabilities",
        "objective": "1. Identify AI concepts and capabilities",
        "what_it_tests": "Compreender o papel das mensagens de sistema na IA generativa.",
        "question": "Selecione a resposta que completa corretamente a frase:\n\n[ESCOLHA UMA OPÇÃO] pode(m) ser usado(as) para identificar restrições e estilos para as respostas de um modelo de IA generativa.",
        "options": [
            {"id": "A", "text": "Aterramento de dados (Data grounding)"},
            {"id": "B", "text": "Incorporações (Embeddings)"},
            {"id": "C", "text": "Mensagens do sistema (System messages)"},
            {"id": "D", "text": "Tokenização (Tokenization)"}
        ],
        "correct_answer": "C",
        "user_attempt": "B",
        "user_was_correct": False,
        "official_rationale": "As mensagens do sistema (system messages) definem o contexto, o tom, o nível de formalidade e as restrições comportamentais do modelo antes que qualquer interação com o usuário comece.",
        "explanation_why_correct": "As **Mensagens do sistema (System messages)** configuram explicitamente o comportamento do modelo, definindo restrições ('não responda sobre o tema Y') e estilo ('responda em tom formal e em tópicos').",
        "explanation_why_incorrect": "• **B (Sua resposta original): Incorreta.** Embeddings convertem palavras em representações vetoriais para indexação; eles não definem regras nem estilos de resposta de um chatbot.\n• **A: Incorreta.** Data grounding ancora a resposta em documentos factuais da empresa para evitar alucinações.\n• **D: Incorreta.** Tokenização é a divisão do texto em pedaços menores (tokens) para processamento computacional.",
        "additional_reading": [
            {"title": "Improve generative AI responses with prompt engineering", "url": "https://learn.microsoft.com/training/modules/bp-prompt-engineering/"}
        ]
    },
    # 39
    {
        "id": 39,
        "type": "single",
        "category": "Identificar conceitos e recursos de IA",
        "category_en": "Identify AI concepts and capabilities",
        "objective": "1. Identify AI concepts and capabilities",
        "what_it_tests": "Reconhecer as modalidades suportadas pelo Azure AI Translator.",
        "question": "A qual tipo de tradução o serviço Azure Translator nas Ferramentas do Foundry dá suporte?",
        "options": [
            {"id": "A", "text": "fala para fala (speech-to-speech)"},
            {"id": "B", "text": "fala para texto (speech-to-text)"},
            {"id": "C", "text": "texto para fala (text-to-speech)"},
            {"id": "D", "text": "texto para texto (text-to-text)"}
        ],
        "correct_answer": "D",
        "user_attempt": "B",
        "user_was_correct": False,
        "official_rationale": "O serviço Azure Translator foi construído especificamente para tradução de texto para texto (text-to-text). Traduções que envolvam fala (speech-to-text, text-to-speech ou speech-to-speech) são realizadas pelo serviço Azure Speech (Speech Translation).",
        "explanation_why_correct": "O **Azure Translator** lida exclusivamente com tradução de **texto para texto**. Ele aceita cadeias de caracteres em um idioma e retorna o texto traduzido em centenas de outros idiomas.",
        "explanation_why_incorrect": "• **B (Sua resposta original): Incorreta.** Tradução de voz/áudio falado para texto é uma capacidade do *Azure Speech Translation*, e não do *Azure Translator* puro.\n• **A e C: Incorretas.** Todas as operações de entrada ou saída por voz necessitam do serviço Azure Speech.",
        "additional_reading": [
            {"title": "Get started with natural language processing in Azure", "url": "https://learn.microsoft.com/training/modules/explore-natural-language-processing/"}
        ]
    },
    # 40
    {
        "id": 40,
        "type": "single",
        "category": "Identificar conceitos e recursos de IA",
        "category_en": "Identify AI concepts and capabilities",
        "objective": "1. Identify AI concepts and capabilities",
        "what_it_tests": "Identificar soluções de visão computacional adequadas para leitura de assinaturas e texto manuscrito.",
        "question": "O que pode ser usado em um sistema de controle de presença capaz de digitalizar e reconhecer assinaturas manuscritas?",
        "options": [
            {"id": "A", "text": "detecção facial (face detection)"},
            {"id": "B", "text": "classificação de imagem (image classification)"},
            {"id": "C", "text": "detecção de objetos (object detection)"},
            {"id": "D", "text": "reconhecimento óptico de caracteres (OCR)"}
        ],
        "correct_answer": "D",
        "user_attempt": "B",
        "user_was_correct": False,
        "official_rationale": "O reconhecimento óptico de caracteres (OCR) é a tecnologia de visão computacional focada em detectar e extrair caracteres de texto impresso e manuscrito de imagens e formulários digitalizados.",
        "explanation_why_correct": "O **OCR (Optical Character Recognition)** é capaz de analisar o traço da caneta e texto manuscrito em listas de presença para digitalização e arquivamento.",
        "explanation_why_incorrect": "• **B (Sua resposta original): Incorreta.** Classificação de imagem apenas diz que a imagem é uma 'folha de papel', mas não extrai o texto ou caracteres da assinatura.\n• **A: Incorreta.** Detecção facial localiza rostos humanos, o que não se aplica a assinaturas em papel.\n• **C: Incorreta.** Detecção de objetos localiza a posição de itens genéricos como canetas ou mesas, mas não lê caracteres alfanuméricos manuscritos.",
        "additional_reading": [
            {"title": "Get started with computer vision in Azure - Microsoft Learn", "url": "https://learn.microsoft.com/training/modules/explore-computer-vision/"}
        ]
    },
    # 41
    {
        "id": 41,
        "type": "single",
        "category": "Identificar conceitos e recursos de IA",
        "category_en": "Identify AI concepts and capabilities",
        "objective": "1. Identify AI concepts and capabilities",
        "what_it_tests": "Reconhecer recursos de análise e detecção facial.",
        "question": "Qual solução de visão computacional fornece a capacidade de estimar a idade de uma pessoa com base em uma fotografia?",
        "options": [
            {"id": "A", "text": "detecção facial (facial detection)"},
            {"id": "B", "text": "classificação de imagem (image classification)"},
            {"id": "C", "text": "detecção de objetos (object detection)"},
            {"id": "D", "text": "segmentação semântica (semantic segmentation)"}
        ],
        "correct_answer": "A",
        "user_attempt": "D",
        "user_was_correct": False,
        "official_rationale": "A detecção e análise facial localiza rostos humanos e pode prever atributos faciais biométricos e demográficos, incluindo estimativa de idade, gênero e pose da cabeça.",
        "explanation_why_correct": "A **Detecção facial (Facial detection)** analisa as proporções e características do rosto humano, incluindo a estimativa aproximada de idade.",
        "explanation_why_incorrect": "• **D (Sua resposta original): Incorreta.** Segmentação semântica apenas rotula quais pixels pertencem ao corpo humano versus fundo, sem estimar atributos de idade.\n• **B: Incorreta.** Classificação de imagem diria que a foto contém uma 'pessoa', sem análise minuciosa de idade facial.\n• **C: Incorreta.** Detecção de objetos traçaria uma caixa ao redor da pessoa, sem extrair idade.",
        "additional_reading": [
            {"title": "Introduction to computer vision concepts", "url": "https://learn.microsoft.com/training/modules/explore-computer-vision/"}
        ]
    },
    # 42
    {
        "id": 42,
        "type": "single",
        "category": "Identificar conceitos e recursos de IA",
        "category_en": "Identify AI concepts and capabilities",
        "objective": "1. Identify AI concepts and capabilities",
        "what_it_tests": "Identificar a plataforma dedicada da Microsoft para inteligência artificial conversacional.",
        "question": "Qual tipo de serviço fornece uma plataforma dedicada para inteligência artificial conversacional (CAI)?",
        "options": [
            {"id": "A", "text": "Azure AI Bot Service"},
            {"id": "B", "text": "Azure Document Intelligence no Foundry Tools"},
            {"id": "C", "text": "Azure Vision no Foundry Tools"},
            {"id": "D", "text": "Azure Translator no Foundry Tools"}
        ],
        "correct_answer": "A",
        "user_attempt": "D",
        "user_was_correct": False,
        "official_rationale": "O Azure AI Bot Service fornece uma plataforma abrangente para criar, testar, implantar e conectar bots de conversação inteligentes capazes de interagir com usuários através de múltiplos canais de comunicação (Teams, Web Chat, Slack).",
        "explanation_why_correct": "O **Azure AI Bot Service** é a plataforma de ponta a ponta da Microsoft para construção de agentes e assistentes conversacionais (bots).",
        "explanation_why_incorrect": "• **D (Sua resposta original): Incorreta.** O Azure Translator apenas traduz textos entre idiomas, não gerenciando fluxos de diálogo, estados de conversa ou canais de chat.\n• **B: Incorreta.** Document Intelligence extrai texto e tabelas de PDFs e formulários digitalizados.\n• **C: Incorreta.** Azure Vision processa fotografias e vídeos.",
        "additional_reading": [
            {"title": "Understand natural language processing - Microsoft Learn", "url": "https://learn.microsoft.com/training/modules/explore-natural-language-processing/"}
        ]
    },
    # 43
    {
        "id": 43,
        "type": "single",
        "category": "Identificar conceitos e recursos de IA",
        "category_en": "Identify AI concepts and capabilities",
        "objective": "1. Identify AI concepts and capabilities",
        "what_it_tests": "Compreender os princípios de IA Responsável da Microsoft.",
        "question": "Qual princípio da inteligência artificial responsável (Responsible AI) envolve avaliar e mitigar o viés introduzido pelas características ou atributos de um modelo?",
        "options": [
            {"id": "A", "text": "responsabilidade / prestação de contas (accountability)"},
            {"id": "B", "text": "imparcialidade / justiça (fairness)"},
            {"id": "C", "text": "privacidade e segurança (privacy)"},
            {"id": "D", "text": "transparência (transparency)"}
        ],
        "correct_answer": "B",
        "user_attempt": "B",
        "user_was_correct": True,
        "official_rationale": "O princípio de Imparcialidade (Fairness) assegura que os sistemas de IA tratem todas as pessoas de maneira justa e sem discriminação por gênero, raça, etnia ou idade, detectando e corrigindo vieses nos dados e nas features de treino.",
        "explanation_why_correct": "A **Imparcialidade (Fairness)** é o princípio cujo foco explícito é prevenir preconceitos e decisões discriminatórias originadas por viés algorítmico.",
        "explanation_why_incorrect": "• **A: Incorreta.** *Accountability* (responsabilidade) garante que desenvolvedores e empresas permaneçam responsáveis pelo impacto e legalidade de suas soluções de IA.\n• **C: Incorreta.** *Privacy* assegura a conformidade com leis de proteção de dados e privacidade pessoal.\n• **D: Incorreta.** *Transparency* garante que o funcionamento, limitações e propósito do modelo sejam compreensíveis para humanos.",
        "additional_reading": [
            {"title": "Understand Responsible AI - Microsoft Learn", "url": "https://learn.microsoft.com/training/modules/explore-responsible-ai/"}
        ]
    },
    # 44
    {
        "id": 44,
        "type": "single",
        "category": "Identificar conceitos e recursos de IA",
        "category_en": "Identify AI concepts and capabilities",
        "objective": "1. Identify AI concepts and capabilities",
        "what_it_tests": "Reconhecer cenários de classificação de imagem em aplicações médicas.",
        "question": "O que permite identificar e categorizar diferentes tipos de fraturas ósseas em imagens de raio-X?",
        "options": [
            {"id": "A", "text": "inteligência artificial conversacional (conversational AI)"},
            {"id": "B", "text": "detecção facial (facial detection)"},
            {"id": "C", "text": "classificação de imagem (image classification)"},
            {"id": "D", "text": "detecção de objetos (object detection)"}
        ],
        "correct_answer": "C",
        "user_attempt": "B",
        "user_was_correct": False,
        "official_rationale": "A classificação de imagem avalia a imagem de raio-X como um todo ou em regiões de interesse para categorizá-la dentro de classes pré-definidas de fraturas (ex: 'fratura cominutiva', 'fratura em galho verde', 'sem fratura').",
        "explanation_why_correct": "Modelos de **Classificação de imagem (Image classification)** são treinados com milhares de imagens rotuladas para prever qual categoria de diagnóstico melhor descreve a fratura observada.",
        "explanation_why_incorrect": "• **B (Sua resposta original): Incorreta.** Detecção facial é para encontrar rostos humanos; não tem nenhuma aplicação para ossos ou fraturas médicas.\n• **A: Incorreta.** IA conversacional é voltada para chat e bots de texto.\n• **D: Incorreta.** Embora detecção de objetos possa marcar o local da lesão com retângulos, o ato central de identificar a tipologia da fratura dentre categorias diagnósticas é caracterizado primariamente como classificação de imagem nas questões da Microsoft.",
        "additional_reading": [
            {"title": "Introduction to computer vision concepts", "url": "https://learn.microsoft.com/training/modules/explore-computer-vision/"}
        ]
    },
    # 45
    {
        "id": 45,
        "type": "multi",
        "category": "Identificar conceitos e recursos de IA",
        "category_en": "Identify AI concepts and capabilities",
        "objective": "1. Identify AI concepts and capabilities",
        "what_it_tests": "Identificar os modelos de domínio especializados pré-treinados do Azure AI Vision.",
        "question": "Quais DOIS modelos de domínio especializados são suportados pelo Azure Vision no Foundry Tools ao categorizar uma imagem? (Cada resposta correta apresenta uma solução completa).",
        "options": [
            {"id": "A", "text": "celebridades (celebrities)"},
            {"id": "B", "text": "tipos de imagem (image types)"},
            {"id": "C", "text": "pontos turísticos / monumentos (landmarks)"},
            {"id": "D", "text": "people_"},
            {"id": "E", "text": "people_group"}
        ],
        "correct_answer": ["A", "C"],
        "user_attempt": ["A", "C"],
        "user_was_correct": True,
        "official_rationale": "Ao categorizar imagens, o serviço Azure Computer Vision oferece suporte integrado a dois modelos de domínio especializados de renome mundial: celebridades (pessoas famosas da cultura, ciência e esportes) e pontos turísticos / monumentos (landmarks famosos como Torre Eiffel, Cristo Redentor).",
        "explanation_why_correct": "• **A (`celebrities`):** Reconhece milhares de personalidades notórias mundiais.\n• **C (`landmarks`):** Identifica monumentos históricos e atrações geográficas famosas automaticamente.",
        "explanation_why_incorrect": "• **B: Incorreta.** 'Image types' identifica características técnicas (se é clip art ou desenho em linha), não sendo um modelo de domínio de objetos do mundo real.\n• **D e E: Incorretas.** 'people_' e 'people_group' são rótulos de taxonomia genéricos, não modelos de domínio especializados.",
        "additional_reading": [
            {"title": "Introduction to computer vision concepts", "url": "https://learn.microsoft.com/training/modules/explore-computer-vision/"}
        ]
    },
    # 46
    {
        "id": 46,
        "type": "single",
        "category": "Identificar conceitos e recursos de IA",
        "category_en": "Identify AI concepts and capabilities",
        "objective": "1. Identify AI concepts and capabilities",
        "what_it_tests": "Conhecer as etapas do framework de gerenciamento de risco para IA generativa responsável (NIST / Microsoft).",
        "question": "De acordo com o AI Risk Management Framework do NIST e da Microsoft, qual é o primeiro estágio a ser considerado ao desenvolver uma solução de IA generativa responsável?",
        "options": [
            {"id": "A", "text": "Identificar danos potenciais (Identify potential harms)"},
            {"id": "B", "text": "Medir a presença de danos potenciais (Measure the presence of potential harms)"},
            {"id": "C", "text": "Mitigar danos potenciais (Mitigate potential harms)"},
            {"id": "D", "text": "Operar a solução (Operate the solution)"}
        ],
        "correct_answer": "A",
        "user_attempt": "A",
        "user_was_correct": True,
        "official_rationale": "O ciclo de vida de IA responsável da Microsoft/NIST segue uma ordem lógica estrita de quatro etapas: 1. Identificar (Identify) os danos potenciais -> 2. Medir (Measure) a severidade e frequência -> 3. Mitigar (Mitigate) por meio de filtros e guardrails -> 4. Operar (Operate) com monitoramento contínuo.",
        "explanation_why_correct": "Antes de medir ou aplicar filtros, você deve primeiro **Identificar os danos potenciais (Identify potential harms)** específicos para o seu caso de uso (ex: vazamento de dados, desinformação, preconceito).",
        "explanation_why_incorrect": "• **B: Incorreta.** Medir é o segundo estágio, realizado após os riscos terem sido identificados.\n• **C: Incorreta.** Mitigar é o terceiro estágio, onde são aplicados os guardrails.\n• **D: Incorreta.** Operar é o quarto estágio, após o sistema entrar em produção.",
        "additional_reading": [
            {"title": "Responsible generative AI - Microsoft Learn", "url": "https://learn.microsoft.com/training/modules/explore-generative-ai/"}
        ]
    },
    # 47
    {
        "id": 47,
        "type": "single",
        "category": "Identificar conceitos e recursos de IA",
        "category_en": "Identify AI concepts and capabilities",
        "objective": "1. Identify AI concepts and capabilities",
        "what_it_tests": "Reconhecer a aplicação de detecção de objetos no monitoramento de tráfego urbano.",
        "question": "O que permite identificar diferentes tipos de veículos (como carro, ônibus ou ciclista) em imagens de monitoramento de tráfego, delimitando suas posições?",
        "options": [
            {"id": "A", "text": "classificação de imagem (image classification)"},
            {"id": "B", "text": "regressão linear (linear regression)"},
            {"id": "C", "text": "detecção de objetos (object detection)"},
            {"id": "D", "text": "reconhecimento óptico de caracteres (OCR)"}
        ],
        "correct_answer": "C",
        "user_attempt": "C",
        "user_was_correct": True,
        "official_rationale": "A detecção de objetos localiza simultaneamente múltiplos veículos em uma cena de tráfego, fornecendo suas classes individuais e caixas delimitadoras que representam suas posições espaciais na via.",
        "explanation_why_correct": "A **Detecção de objetos (Object detection)** é a única técnica que encontra múltiplos objetos distintos na mesma imagem e aponta exatamente onde cada um está.",
        "explanation_why_incorrect": "• **A: Incorreta.** Classificação de imagem diria apenas que a imagem é de 'trânsito', sem isolar nem demarcar cada carro individualmente.\n• **B: Incorreta.** Regressão linear é um algoritmo estatístico para previsão de números contínuos (como prever o preço de uma casa).\n• **D: Incorreta.** OCR lê placas de veículos ou placas de trânsito escritas, mas não detecta a geometria física do ônibus ou ciclista.",
        "additional_reading": [
            {"title": "Detect objects in images with Custom Vision", "url": "https://learn.microsoft.com/training/modules/detect-objects-images-custom-vision/"}
        ]
    },
    # 48
    {
        "id": 48,
        "type": "single",
        "category": "Identificar conceitos e recursos de IA",
        "category_en": "Identify AI concepts and capabilities",
        "objective": "1. Identify AI concepts and capabilities",
        "what_it_tests": "Identificar o recurso de análise de sentimento para feedback de usuários.",
        "question": "Qual recurso do Azure AI Service for Language pode ser usado para analisar avaliações de usuários online para identificar se eles veem um produto de forma positiva ou negativa?",
        "options": [
            {"id": "A", "text": "extração de frases-chave (key phrase extraction)"},
            {"id": "B", "text": "detecção de idioma (language detection)"},
            {"id": "C", "text": "reconhecimento de entidades nomeadas (named entity recognition)"},
            {"id": "D", "text": "análise de sentimento (sentiment analysis)"}
        ],
        "correct_answer": "D",
        "user_attempt": "B",
        "user_was_correct": False,
        "official_rationale": "A análise de sentimento (Sentiment analysis) inspeciona textos de avaliações e retorna rótulos de sentimento (positivo, negativo, neutro ou misto) com índices de confiança, permitindo quantificar o nível de satisfação do cliente.",
        "explanation_why_correct": "A **Análise de sentimento (Sentiment analysis)** foi criada especificamente para avaliar a opinião emocional expressa pelo consumidor.",
        "explanation_why_incorrect": "• **B (Sua resposta original): Incorreta.** A detecção de idioma apenas informa se o comentário foi escrito em português, inglês ou espanhol, sem revelar se a crítica ao produto foi elogiosa ou destrutiva.\n• **A: Incorreta.** Extração de frases-chave ressalta os tópicos citados, mas não afere se foram elogiados ou criticados.\n• **C: Incorreta.** Reconhecimento de entidades nomeadas encontra menções a marcas ou pessoas.",
        "additional_reading": [
            {"title": "What is sentiment analysis in Azure?", "url": "https://learn.microsoft.com/azure/ai-services/language-service/sentiment-opinion-mining/overview"}
        ]
    },
    # 49
    {
        "id": 49,
        "type": "single",
        "category": "Identificar conceitos e recursos de IA",
        "category_en": "Identify AI concepts and capabilities",
        "objective": "1. Identify AI concepts and capabilities",
        "what_it_tests": "Compreender técnicas fundamentais de PLN como vetorização e embeddings.",
        "question": "Qual técnica de processamento de linguagem natural (NLP) atribui valores numéricos a palavras como 'planta' e 'flor', de modo que fiquem mais próximas uma da outra em um espaço vetorial do que uma palavra como 'avião'?",
        "options": [
            {"id": "A", "text": "análise de frequência (frequency analysis)"},
            {"id": "B", "text": "lematização (lemmatization)"},
            {"id": "C", "text": "N-gramas (N-grams)"},
            {"id": "D", "text": "vetorização / incorporação (vectorization)"}
        ],
        "correct_answer": "D",
        "user_attempt": "D",
        "user_was_correct": True,
        "official_rationale": "A vetorização (vectorization / word embeddings) projeta palavras em um espaço n-dimensional com base em coocorrência e contexto semântico. Palavras com significados próximos compartilham coordenadas geométricas vizinhas, permitindo operações de similaridade matemática.",
        "explanation_why_correct": "A **Vetorização (Vectorization)** captura a proximidade semântica no espaço vetorial multidimensional, fazendo com que conceitos biológicos afins fiquem próximos entre si e distantes de termos de aviação.",
        "explanation_why_incorrect": "• **A: Incorreta.** A análise de frequência apenas conta quantas vezes cada palavra ocorre no texto (ex: TF-IDF), sem entender relações semânticas intrínsecas.\n• **B: Incorreta.** Lematização reduz palavras à sua forma raiz básica de dicionário (ex: 'correndo' -> 'correr').\n• **C: Incorreta.** N-gramas são agrupamentos contíguos de N palavras sequenciais.",
        "additional_reading": [
            {"title": "Introduction to NLP concepts - Microsoft Learn", "url": "https://learn.microsoft.com/training/modules/explore-natural-language-processing/"}
        ]
    },
    # 50
    {
        "id": 50,
        "type": "single",
        "category": "Identificar conceitos e recursos de IA",
        "category_en": "Identify AI concepts and capabilities",
        "objective": "1. Identify AI concepts and capabilities",
        "what_it_tests": "Conhecer o recurso de vinculação de entidades (Entity Linking) do Azure AI Language.",
        "question": "Qual recurso do serviço Azure Language nas Ferramentas do Foundry inclui funcionalidade que retorna links para sites externos (como a Wikipédia) para desambiguar termos identificados em um texto?",
        "options": [
            {"id": "A", "text": "reconhecimento de entidades (entity recognition / linking)"},
            {"id": "B", "text": "extração de frases-chave (key phrase extraction)"},
            {"id": "C", "text": "detecção de idioma (language detection)"},
            {"id": "D", "text": "análise de sentimento (sentiment analysis)"}
        ],
        "correct_answer": "A",
        "user_attempt": "B",
        "user_was_correct": False,
        "official_rationale": "O reconhecimento e vinculação de entidades (Entity Linking / Entity Recognition) identifica menções a entidades em um texto e resolve ambiguidades vinculando-as a verbetes de uma base de conhecimento confiável (como a Wikipédia).",
        "explanation_why_correct": "O **Reconhecimento de entidades (especificamente o recurso Entity Linking)** resolve ambiguidades (ex: se 'Marte' refere-se ao planeta ou ao deus romano) fornecendo a URL exata do artigo de referência correspondente.",
        "explanation_why_incorrect": "• **B (Sua resposta original): Incorreta.** A extração de frases-chave lista os conceitos centrais, mas nunca inclui links de enciclopédias ou sites externos.\n• **C: Incorreta.** Detecção de idioma apenas aponta o código do idioma.\n• **D: Incorreta.** Análise de sentimento apenas afere se a frase é positiva ou negativa.",
        "additional_reading": [
            {"title": "Introduction to NLP concepts - Microsoft Learn", "url": "https://learn.microsoft.com/training/modules/explore-natural-language-processing/"}
        ]
    }
]

print(f"Loaded questions 21 to 50. Total in part 2: {len(questions_part2)}")
