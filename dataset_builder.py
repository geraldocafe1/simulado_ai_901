# Build the full 50 questions dataset script
import json

questions = [
    # 1
    {
        "id": 1,
        "type": "single",
        "category": "Implementar soluções de IA com o Microsoft Foundry",
        "category_en": "Implement AI solutions with Microsoft Foundry",
        "objective": "2.3 Implement AI solutions with computer vision and image-generation capabilities by using Foundry",
        "what_it_tests": "Criar novas saídas visuais usando modelos generativos que transformam uma imagem existente de acordo com instruções de prompt.",
        "question": "Você tem um projeto do Microsoft Foundry que contém um modelo de geração de imagens.\n\nVocê precisa de um aplicativo para criar uma nova imagem de produto utilizando uma imagem PNG existente e um prompt de texto.\n\nQual recurso o aplicativo deve usar?",
        "options": [
            {"id": "A", "text": "Incorporação de texto (Text embedding)"},
            {"id": "B", "text": "Geração de texto para imagem (Text-to-image generation)"},
            {"id": "C", "text": "Detecção de objetos (Object detection)"},
            {"id": "D", "text": "Edição de imagem para imagem (Image-to-image editing)"}
        ],
        "correct_answer": "D",
        "user_attempt": "A",
        "user_was_correct": False,
        "official_rationale": "Modelos de geração de imagens oferecem capacidades de edição imagem-para-imagem (image-to-image editing), nas quais uma imagem base e um prompt são combinados para criar uma nova saída visual personalizada.",
        "explanation_why_correct": "A **Edição de imagem para imagem (Image-to-image editing)** recebe uma imagem de entrada existente (como um arquivo PNG) e um prompt em texto descritivo para transformá-la ou gerar uma variação. Isso atende exatamente ao requisito de criar uma nova imagem de produto a partir de um PNG existente.",
        "explanation_why_incorrect": "• **A (Sua resposta original): Incorreta.** O *Text embedding* (incorporação de texto) gera vetores numéricos para busca semântica em textos; não tem nenhuma capacidade de manipular imagens.\n• **B: Incorreta.** A *Geração de texto para imagem (Text-to-image)* cria imagens puramente a partir de descrições textuais, sem aceitar uma imagem PNG existente como modelo de base.\n• **C: Incorreta.** A *Detecção de objetos* localiza e classifica elementos em uma imagem existente usando retângulos delimitadores (bounding boxes), mas não gera novas imagens.",
        "additional_reading": [
            {"title": "Deploy and use MAI image models in Microsoft Foundry", "url": "https://learn.microsoft.com/azure/ai-studio/"}
        ]
    },
    # 2
    {
        "id": 2,
        "type": "single",
        "category": "Implementar soluções de IA com o Microsoft Foundry",
        "category_en": "Implement AI solutions with Microsoft Foundry",
        "objective": "2.2 Implement AI solutions for text and speech by using Foundry",
        "what_it_tests": "Responder a prompts falados usando um modelo multimodal implantado para responder a perguntas do usuário a partir de entrada de áudio.",
        "question": "Você tem um projeto do Microsoft Foundry que contém um modelo Azure OpenAI com suporte a áudio implantado.\n\nVocê precisa de um aplicativo Python para enviar uma pergunta gravada em formato WAV e receber como resposta tanto o texto quanto o áudio em formato WAV.\n\nO que o aplicativo deve fazer?",
        "options": [
            {"id": "A", "text": "Passar o nome do arquivo WAV como input_audio e solicitar as modalidades de texto e áudio"},
            {"id": "B", "text": "Codificar o arquivo WAV em Base64 como input_audio e solicitar as modalidades de texto e áudio"},
            {"id": "C", "text": "Enviar o conteúdo do arquivo WAV como uma mensagem de texto e solicitar as modalidades de texto e áudio"},
            {"id": "D", "text": "Enviar o arquivo WAV como input_audio e solicitar apenas a modalidade de texto"}
        ],
        "correct_answer": "B",
        "user_attempt": "C",
        "user_was_correct": False,
        "official_rationale": "Modelos multimodais de áudio no Azure OpenAI exigem que os dados de áudio sejam enviados como string binária codificada em Base64 sob o campo input_audio. Para obter saída tanto em texto quanto em áudio sintetizado, ambas as modalidades devem ser solicitadas na requisição.",
        "explanation_why_correct": "Na API de áudio multimodal do Azure OpenAI (como o GPT-4o Audio), a entrada de áudio deve ser serializada como **Base64** no parâmetro `input_audio`. Para receber tanto o texto quanto a resposta em voz (WAV), a requisição deve explicitar `modalities=[\"text\", \"audio\"]`.",
        "explanation_why_incorrect": "• **C (Sua resposta original): Incorreta.** O conteúdo binário de um arquivo WAV não pode ser transmitido como texto simples (string de texto comum), pois caracteres de controle binários quebram o parser JSON da API.\n• **A: Incorreta.** Apenas passar o nome do arquivo local não realiza o upload do conteúdo do áudio para o serviço em nuvem.\n• **D: Incorreta.** Solicitar apenas a modalidade de texto ignora a necessidade de receber o áudio WAV de resposta.",
        "additional_reading": [
            {"title": "Quickstart: Get started with Azure OpenAI audio generation", "url": "https://learn.microsoft.com/azure/ai-services/openai/"}
        ]
    },
    # 3
    {
        "id": 3,
        "type": "yes_no",
        "category": "Implementar soluções de IA com o Microsoft Foundry",
        "category_en": "Implement AI solutions with Microsoft Foundry",
        "objective": "2.2 Implement AI solutions for text and speech by using Foundry",
        "what_it_tests": "Criar um aplicativo leve que inclui detecção de idioma para determinar o idioma do texto enviado.",
        "question": "Para cada uma das seguintes afirmações sobre o recurso de Detecção de Idioma (Language Detection) no Azure Language no Foundry Tools, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
        "statements": [
            {"id": 1, "text": "A detecção de idioma no Azure Language no Foundry Tools remove informações de identificação pessoal (PII) do texto enviado."},
            {"id": 2, "text": "A detecção de idioma no Azure Language no Foundry Tools identifica o sentimento no texto enviado e retorna pontuações de confiança."},
            {"id": 3, "text": "A detecção de idioma no Azure Language no Foundry Tools identifica o idioma principal do texto enviado e retorna uma pontuação de confiança."}
        ],
        "correct_answer": {"1": "No", "2": "No", "3": "Yes"},
        "user_attempt": {"1": "Yes", "2": "No", "3": ""},
        "user_was_correct": False,
        "official_rationale": "A detecção de idioma apenas detecta o idioma predominante e o nível de confiança. A remoção/redação de PII é papel da Detecção de PII, e a identificação de tom emocional é responsabilidade da Análise de Sentimento.",
        "explanation_why_correct": "• **Afirmação 1 (Não):** Remover/ocultar PII (dados pessoais sensíveis) é exclusividade da funcionalidade *Personally Identifiable Information (PII) Detection*.\n• **Afirmação 2 (Não):** Análise emocional e pontuações de positividade/negatividade pertencem ao recurso *Sentiment Analysis*.\n• **Afirmação 3 (Sim):** A detecção de idioma analisa a cadeia de caracteres e retorna o idioma principal (ex: 'pt', 'en') e uma pontuação de confiança entre 0.0 e 1.0.",
        "explanation_why_incorrect": "No simulado original, você marcou 'Sim' para a Afirmação 1. É fundamental ter em mente que cada recurso do Azure AI Language tem finalidade única para garantir alta precisão e baixo custo computacional.",
        "additional_reading": [
            {"title": "Get started with text analysis in Azure", "url": "https://learn.microsoft.com/azure/ai-services/language-service/"},
            {"title": "Quickstart: Detect the language of text", "url": "https://learn.microsoft.com/azure/ai-services/language-service/language-detection/quickstart"}
        ]
    },
    # 4
    {
        "id": 4,
        "type": "single",
        "category": "Implementar soluções de IA com o Microsoft Foundry",
        "category_en": "Implement AI solutions with Microsoft Foundry",
        "objective": "2.1 Implement generative AI apps and agents by using Foundry",
        "what_it_tests": "Interagir com um modelo implantado no portal do Foundry para enviar prompts e revisar as respostas geradas sem escrever código.",
        "question": "Você tem um projeto do Microsoft Foundry que contém um modelo Azure OpenAI implantado.\n\nVocê precisa enviar prompts e revisar as respostas geradas sem precisar escrever código.\n\nQual recurso do portal você deve usar?",
        "options": [
            {"id": "A", "text": "Área de testes de chat (Chat playground)"},
            {"id": "B", "text": "Catálogo de modelos (Model catalog)"},
            {"id": "C", "text": "Métricas de monitoramento (Monitoring metrics)"},
            {"id": "D", "text": "Modelos + pontos de extremidade (Models + endpoints)"}
        ],
        "correct_answer": "A",
        "user_attempt": "A",
        "user_was_correct": True,
        "official_rationale": "O Chat playground no portal do Foundry é o ambiente visual interativo projetado para que desenvolvedores e analistas possam experimentar modelos implantados, testar prompts e avaliar respostas sem precisar de código.",
        "explanation_why_correct": "O **Chat playground** permite conversar diretamente com o modelo implantado, definir mensagens de sistema e ajustar parâmetros na interface web.",
        "explanation_why_incorrect": "• **B: Incorreta.** O *Catálogo de modelos* serve para navegar e explorar modelos fundacionais de diversos provedores antes de implantá-los.\n• **C: Incorreta.** As *Métricas de monitoramento* mostram dados de telemetria operacional (erros, latência, chamadas).\n• **D: Incorreta.** *Models + endpoints* é onde você gerencia as instâncias implantadas e obtém as URLs e credenciais.",
        "additional_reading": [
            {"title": "Interact with models in the Foundry chat playground", "url": "https://learn.microsoft.com/azure/ai-studio/"}
        ]
    },
    # 5
    {
        "id": 5,
        "type": "yes_no",
        "category": "Implementar soluções de IA com o Microsoft Foundry",
        "category_en": "Implement AI solutions with Microsoft Foundry",
        "objective": "2.3 Implement AI solutions with computer vision and image-generation capabilities by using Foundry",
        "what_it_tests": "Criar novas saídas visuais usando modelos generativos a partir de prompts em linguagem natural descrevendo conteúdo, composição ou estilo.",
        "question": "Para cada uma das seguintes afirmações sobre a geração de imagens no Microsoft Foundry, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
        "statements": [
            {"id": 1, "text": "Modelos de geração de imagens no Microsoft Foundry podem criar imagens a partir de descrições em linguagem natural."},
            {"id": 2, "text": "Modelos de geração de imagens no Microsoft Foundry recuperam imagens geradas a partir de um catálogo de imagens com curadoria."},
            {"id": 3, "text": "O catálogo de modelos do Microsoft Foundry pode ser filtrado por tarefa de inferência para ajudar a encontrar modelos de texto para imagem (text-to-image)."}
        ],
        "correct_answer": {"1": "Yes", "2": "No", "3": "Yes"},
        "user_attempt": {"1": "Yes", "2": "No", "3": "Yes"},
        "user_was_correct": True,
        "official_rationale": "Modelos como DALL-E sintetizam imagens originais a partir de representações textuais. Eles não buscam fotos em um banco pré-existente. O catálogo permite filtragem por 'Inference tasks' para modelos de geração visual.",
        "explanation_why_correct": "• **Afirmação 1 (Sim):** O modelo interpreta o prompt de linguagem natural e sintetiza a imagem correspondente.\n• **Afirmação 2 (Não):** Modelos generativos sintetizam imagens do zero via difusão latente; não são mecanismos de busca em estoque de fotos.\n• **Afirmação 3 (Sim):** No catálogo do Microsoft Foundry, você pode filtrar modelos por tarefas como 'text-to-image', 'embeddings', 'chat', etc.",
        "explanation_why_incorrect": "Você acertou todas as afirmações no seu teste original!",
        "additional_reading": [
            {"title": "What is DALL-E?", "url": "https://learn.microsoft.com/azure/ai-services/openai/concepts/models#dall-e"},
            {"title": "Image generation in Microsoft Foundry", "url": "https://learn.microsoft.com/azure/ai-studio/"}
        ]
    },
    # 6
    {
        "id": 6,
        "type": "dropdown",
        "category": "Implementar soluções de IA com o Microsoft Foundry",
        "category_en": "Implement AI solutions with Microsoft Foundry",
        "objective": "2.4 Implement AI solutions for information extraction by using Foundry",
        "what_it_tests": "Criar um aplicativo leve com recursos de extração de informações usando o Content Understanding para cenários de processamento de documentos e formulários.",
        "question": "Selecione a resposta que completa corretamente a frase:\n\nNo Azure Content Understanding nas Ferramentas do Foundry, um esquema (schema) é usado para [ESCOLHA UMA OPÇÃO] para análise de documentos.",
        "options": [
            {"id": "A", "text": "definir os campos e a estrutura de dados a serem extraídos"},
            {"id": "B", "text": "normalizar arquivos em formatos suportados"},
            {"id": "C", "text": "indexar conteúdos de documentos para busca vetorial"},
            {"id": "D", "text": "treinar um modelo de aprendizado de máquina supervisionado"}
        ],
        "correct_answer": "A",
        "user_attempt": "B",
        "user_was_correct": False,
        "official_rationale": "No Azure Content Understanding, o esquema (schema) é o elemento onde o usuário especifica os campos de negócio (nomes, tipos como data, número, string, tabelas) que o analisador deve extrair do documento.",
        "explanation_why_correct": "O **esquema (schema)** atua como um contrato de dados: ele define quais campos específicos (ex: 'NumeroNota', 'DataVencimento', 'ValorTotal') devem ser identificados e estruturados no JSON de retorno.",
        "explanation_why_incorrect": "• **B (Sua resposta original - 'normalize files into supported formats'): Incorreta.** A normalização de arquivos em formatos suportados (conversão de PDF, TIFF, JPG) é executada internamente pelo serviço de ingestão da nuvem, não pelo esquema.\n• **C: Incorreta.** A indexação para busca vetorial é tarefa do Azure AI Search.\n• **D: Incorreta.** O Content Understanding é baseado em modelos multimodais de fundação pré-treinados, eliminando a necessidade de treinamento supervisionado manual.",
        "additional_reading": [
            {"title": "Get started with information extraction - Documents", "url": "https://learn.microsoft.com/azure/ai-services/content-understanding/"}
        ]
    },
    # 7
    {
        "id": 7,
        "type": "yes_no",
        "category": "Implementar soluções de IA com o Microsoft Foundry",
        "category_en": "Implement AI solutions with Microsoft Foundry",
        "objective": "2.3 Implement AI solutions with computer vision and image-generation capabilities by using Foundry",
        "what_it_tests": "Criar um aplicativo leve que inclui recursos de visão para upload de imagem e envio de prompt multimodal para um modelo implantado.",
        "question": "Para cada uma das seguintes afirmações sobre a API OpenAI Responses no Microsoft Foundry, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
        "statements": [
            {"id": 1, "text": "A API OpenAI Responses no Microsoft Foundry suporta uma única solicitação que inclui tanto entrada de texto quanto entrada de imagem."},
            {"id": 2, "text": "Imagens enviadas para um modelo habilitado para visão usando a API OpenAI Responses podem ser fornecidas como URLs acessíveis publicamente, mas não como dados de imagem codificados em Base64."},
            {"id": 3, "text": "O código do aplicativo que usa um modelo do Foundry implantado com o SDK Python do OpenAI passa o nome do modelo base em vez do nome da implantação como o valor do parâmetro model."}
        ],
        "correct_answer": {"1": "Yes", "2": "No", "3": "No"},
        "user_attempt": {"1": "Yes", "2": "Yes", "3": "No"},
        "user_was_correct": False,
        "official_rationale": "A API suporta requisições multimodais combinando texto e imagem. Imagens podem ser passadas tanto via URL pública quanto codificadas em Base64. No Azure/Foundry, o parâmetro model no SDK deve conter o nome da implantação (deployment name), não o modelo base.",
        "explanation_why_correct": "• **Afirmação 1 (Sim):** Modelos multimodais aceitam mensagens compostas por texto e imagem na mesma chamada.\n• **Afirmação 2 (Não):** É perfeitamente possível enviar imagens como dados em Base64 usando data URIs (`data:image/jpeg;base64,...`), o que é ideal para arquivos locais.\n• **Afirmação 3 (Não):** O Azure OpenAI requer o nome da implantação configurada (`deployment_name`), pois a fatura, cota e governança estão atreladas a ela.",
        "explanation_why_incorrect": "No seu teste, você marcou 'Sim' na Afirmação 2. Lembre-se de que o suporte a Base64 é essencial exatamente para evitar que desenvolvedores precisem subir imagens confidenciais em servidores web públicos antes da análise.",
        "additional_reading": [
            {"title": "Vision-enabled models in Microsoft Foundry", "url": "https://learn.microsoft.com/azure/ai-studio/"}
        ]
    },
    # 8
    {
        "id": 8,
        "type": "single",
        "category": "Implementar soluções de IA com o Microsoft Foundry",
        "category_en": "Implement AI solutions with Microsoft Foundry",
        "objective": "2.4 Implement AI solutions for information extraction by using Foundry",
        "what_it_tests": "Extrair conteúdo falado e informações atribuídas a locutores de gravações de áudio usando o Content Understanding.",
        "question": "Você tem um recurso do Microsoft Foundry e gravações de chamadas de suporte ao cliente. Cada gravação contém um atendente e um cliente.\n\nVocê precisa que o Azure Content Understanding no Foundry Tools retorne transcrições com atribuição de atendente/cliente, resumos e insights de sentimento com configuração mínima de analisador.\n\nQual analisador você deve usar?",
        "options": [
            {"id": "A", "text": "um analisador de áudio personalizado (a custom audio analyzer)"},
            {"id": "B", "text": "um analisador prebuilt-audioSearch personalizado"},
            {"id": "C", "text": "prebuilt-callCenter"},
            {"id": "D", "text": "prebuilt-audioSearch"}
        ],
        "correct_answer": "C",
        "user_attempt": "C",
        "user_was_correct": True,
        "official_rationale": "O modelo pré-construído prebuilt-callCenter é especificamente preparado para chamadas de centrais de atendimento, fornecendo diarização (separando atendente de cliente), transcrição, resumo estruturado e análise de sentimento 'out-of-the-box'.",
        "explanation_why_correct": "O analisador **prebuilt-callCenter** entrega todas as métricas exigidas (diarização de atendente/cliente, resumos e sentimentos) sem que você precise criar ou customizar esquemas complexos.",
        "explanation_why_incorrect": "• **A: Incorreta.** Criar um analisador personalizado exigiria definição manual de esquemas e ajustes, violando o requisito de 'configuração mínima'.\n• **B e D: Incorretas.** O analisador *prebuilt-audioSearch* foca em transcrição e indexação para pesquisa em acervos de áudio, não incluindo a lógica de divisão de papéis em call centers.",
        "additional_reading": [
            {"title": "Azure Content Understanding in Foundry Tools audio solutions", "url": "https://learn.microsoft.com/azure/ai-services/content-understanding/"}
        ]
    },
    # 9
    {
        "id": 9,
        "type": "yes_no",
        "category": "Implementar soluções de IA com o Microsoft Foundry",
        "category_en": "Implement AI solutions with Microsoft Foundry",
        "objective": "2.4 Implement AI solutions for information extraction by using Foundry",
        "what_it_tests": "Criar um aplicativo leve com recursos de extração de informações usando Content Understanding para cenários de processamento de imagem, áudio e vídeo.",
        "question": "Para cada uma das seguintes afirmações sobre o Azure Content Understanding no Foundry Tools, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
        "statements": [
            {"id": 1, "text": "A configuração enableOcr é usada para extrair transcrições de arquivos de áudio e vídeo."},
            {"id": 2, "text": "O Azure Content Understanding no Foundry Tools pode processar imagens, gravações de áudio e conteúdo de vídeo."},
            {"id": 3, "text": "Um analisador do Content Understanding define o tipo de conteúdo, as configurações de extração e a estrutura de saída."}
        ],
        "correct_answer": {"1": "No", "2": "Yes", "3": "Yes"},
        "user_attempt": {"1": "Yes", "2": "Yes", "3": "No"},
        "user_was_correct": False,
        "official_rationale": "OCR é voltado para extrair texto visual impresso/escrito de imagens e frames. Transcrições de voz são geradas por reconhecimento de fala. O Content Understanding é multimodal (suporta imagem, áudio e vídeo) e seus analisadores definem o tipo de mídia, as extrações e a estrutura do resultado.",
        "explanation_why_correct": "• **Afirmação 1 (Não):** `enableOcr` extrai caracteres gráficos visíveis (ex: placas, textos em telas). Transcrições de áudio são geradas pelo motor de fala (speech transcription).\n• **Afirmação 2 (Sim):** O serviço é unificado e multimodal, projetado para ingestão de imagens, áudios, vídeos e documentos.\n• **Afirmação 3 (Sim):** O analisador (analyzer) armazena a especificação completa de conteúdo, esquema de dados e regras de extração.",
        "explanation_why_incorrect": "No simulado original, você marcou 'Sim' na Afirmação 1 e 'Não' na Afirmação 3. Lembre-se: OCR significa Optical Character Recognition, ou seja, leitura óptica de texto gráfico, nunca áudio acústico.",
        "additional_reading": [
            {"title": "Content Understanding FAQ", "url": "https://learn.microsoft.com/azure/ai-services/content-understanding/"}
        ]
    },
    # 10
    {
        "id": 10,
        "type": "dropdown",
        "category": "Implementar soluções de IA com o Microsoft Foundry",
        "category_en": "Implement AI solutions with Microsoft Foundry",
        "objective": "2.3 Implement AI solutions with computer vision and image-generation capabilities by using Foundry",
        "what_it_tests": "Interpretar entrada visual em prompts usando um modelo multimodal implantado para gerar descrições de imagens carregadas.",
        "question": "Selecione a resposta que completa corretamente a frase:\n\nNo Microsoft Foundry, gerar uma descrição em linguagem natural de uma imagem carregada na área de testes de chat (chat playground) requer um(a) [ESCOLHA UMA OPÇÃO] implantado(a).",
        "options": [
            {"id": "A", "text": "modelo multimodal (multimodal model)"},
            {"id": "B", "text": "modelo de fala para texto (speech-to-text model)"},
            {"id": "C", "text": "modelo de incorporação de texto (text-embedding model)"},
            {"id": "D", "text": "modelo de geração de imagens (image-generation model)"}
        ],
        "correct_answer": "A",
        "user_attempt": "A",
        "user_was_correct": True,
        "official_rationale": "Modelos multimodais conseguem 'enxergar' a imagem e raciocinar sobre ela gerando descrições textuais detalhadas em linguagem natural.",
        "explanation_why_correct": "Um **modelo multimodal** (ex: GPT-4o) tem a capacidade de receber formatos diferentes (como imagem e texto) e processá-los conjuntamente para produzir uma saída textual descritiva.",
        "explanation_why_incorrect": "• **B: Incorreta.** Modelos de fala para texto processam áudio gravado, não imagens.\n• **C: Incorreta.** Modelos de embeddings geram vetores numéricos para busca por similaridade.\n• **D: Incorreta.** Modelos de geração de imagens (como DALL-E) recebem texto para gerar uma imagem, o oposto do que foi solicitado.",
        "additional_reading": [
            {"title": "Vision-enabled models in Microsoft Foundry", "url": "https://learn.microsoft.com/azure/ai-studio/"}
        ]
    },
    # 11
    {
        "id": 11,
        "type": "dropdown",
        "category": "Implementar soluções de IA com o Microsoft Foundry",
        "category_en": "Implement AI solutions with Microsoft Foundry",
        "objective": "2.1 Implement generative AI apps and agents by using Foundry",
        "what_it_tests": "Criar prompts do sistema que definem o comportamento do modelo, o estilo de resposta e as restrições de segurança para uma tarefa específica de IA generativa.",
        "question": "Selecione a resposta que completa corretamente a frase:\n\nNo Microsoft Foundry, uma mensagem do sistema (system message) é usada para [ESCOLHA UMA OPÇÃO].",
        "options": [
            {"id": "A", "text": "orientar o papel, o estilo e os limites de comportamento do modelo"},
            {"id": "B", "text": "substituir os controles de segurança de conteúdo"},
            {"id": "C", "text": "alterar os dados de treinamento originais do modelo"},
            {"id": "D", "text": "avaliar as respostas geradas após a conclusão da inferência"}
        ],
        "correct_answer": "A",
        "user_attempt": "A",
        "user_was_correct": True,
        "official_rationale": "Uma mensagem do sistema (system message ou metaprompt) estabelece a persona, o tom de voz, as instruções de formatação e as regras operacionais que o modelo generativo deve obedecer em todas as respostas.",
        "explanation_why_correct": "A **System Message** atua como as instruções fundamentais do modelo: 'Você é um assistente prestativo da empresa X...', definindo seus limites de atuação e estilo.",
        "explanation_why_incorrect": "• **B: Incorreta.** A mensagem do sistema não substitui os filtros de segurança do Azure AI Content Safety.\n• **C: Incorreta.** Prompts de sistema não modificam os pesos ou dados de treinamento do modelo pré-treinado.\n• **D: Incorreta.** A avaliação de respostas pós-geração é realizada por ferramentas de benchmarking e avaliação de LLMs (Foundry Evaluation).",
        "additional_reading": [
            {"title": "Safety system messages", "url": "https://learn.microsoft.com/azure/ai-studio/concepts/system-messages"},
            {"title": "System message templates", "url": "https://learn.microsoft.com/azure/ai-services/openai/concepts/system-messages"}
        ]
    },
    # 12
    {
        "id": 12,
        "type": "dropdown",
        "category": "Implementar soluções de IA com o Microsoft Foundry",
        "category_en": "Implement AI solutions with Microsoft Foundry",
        "objective": "2.2 Implement AI solutions for text and speech by using Foundry",
        "what_it_tests": "Criar um aplicativo leve que inclui extração de frases-chave para identificar termos importantes em texto não estruturado.",
        "question": "Selecione a resposta que completa corretamente a frase:\n\nA extração de frases-chave (key phrase extraction) no Azure Language no Foundry Tools [ESCOLHA UMA OPÇÃO].",
        "options": [
            {"id": "A", "text": "identifica os principais conceitos em um texto"},
            {"id": "B", "text": "traduz o texto para diferentes idiomas em tempo real"},
            {"id": "C", "text": "detecta informações de identificação pessoal e as redige"},
            {"id": "D", "text": "classifica a polaridade do texto entre positiva e negativa"}
        ],
        "correct_answer": "A",
        "user_attempt": "A",
        "user_was_correct": True,
        "official_rationale": "O recurso de extração de frases-chave avalia rapidamente o texto não estruturado e extrai uma lista das principais ideias e expressões conceituais que resumem o assunto abordado.",
        "explanation_why_correct": "A **Extração de frases-chave** serve para destacar com agilidade do que o documento trata (ex: 'atendimento ao cliente', 'tempo de espera', 'qualidade do produto').",
        "explanation_why_incorrect": "• **B: Incorreta.** A tradução de texto é papel do Azure AI Translator.\n• **C: Incorreta.** A ocultação de dados confidenciais é função do PII Detection.\n• **D: Incorreta.** A polaridade emocional é determinada pela Análise de Sentimento.",
        "additional_reading": [
            {"title": "How to use key phrase extraction", "url": "https://learn.microsoft.com/azure/ai-services/language-service/key-phrase-extraction/overview"}
        ]
    },
    # 13
    {
        "id": 13,
        "type": "yes_no",
        "category": "Implementar soluções de IA com o Microsoft Foundry",
        "category_en": "Implement AI solutions with Microsoft Foundry",
        "objective": "2.1 Implement generative AI apps and agents by using Foundry",
        "what_it_tests": "Criar uma solução de agente único no portal do Foundry definindo suas instruções e ações disponíveis.",
        "question": "Para cada uma das seguintes afirmações sobre agentes no Microsoft Foundry, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
        "statements": [
            {"id": 1, "text": "O Foundry Tools pode ser usado para descobrir, configurar e adicionar ferramentas a um agente."},
            {"id": 2, "text": "As ferramentas integradas (built-in tools) exigem que você hospede código externo antes que possam ser adicionadas a um agente."},
            {"id": 3, "text": "No portal do Foundry, a seleção de um modelo define como um agente deve se comportar ao responder aos usuários."}
        ],
        "correct_answer": {"1": "Yes", "2": "No", "3": "No"},
        "user_attempt": {"1": "Yes", "2": "No", "3": "Yes"},
        "user_was_correct": False,
        "official_rationale": "O Foundry Tools fornece ferramentas nativas e externas. Ferramentas integradas (como Code Interpreter e Azure AI Search) são totalmente gerenciadas pela Microsoft, sem necessidade de hospedagem pelo desenvolvedor. A seleção do modelo fornece o motor de raciocínio, mas são as *instruções do sistema (instructions)* que definem a conduta e comportamento do agente.",
        "explanation_why_correct": "• **Afirmação 1 (Sim):** O Foundry Tools é a central onde você pesquisa e conecta ferramentas (busca, interpretador de código, APIs) aos agentes.\n• **Afirmação 2 (Não):** Ferramentas nativas são executadas na infraestrutura em nuvem segura da Microsoft, sem necessidade de servidores externos do usuário.\n• **Afirmação 3 (Não):** O modelo é o motor computacional; quem governa a conduta, regras e tom do agente são as instruções configuradas.",
        "explanation_why_incorrect": "No simulado original, você marcou 'Sim' na Afirmação 3. Lembre-se: o modelo fornece inteligência pura; são as instruções (prompt do agente) que determinam se ele se comportará como um atendente bancário, um consultor técnico ou um professor infantil.",
        "additional_reading": [
            {"title": "Building your first AI agent in the Foundry portal", "url": "https://learn.microsoft.com/azure/ai-studio/"}
        ]
    },
    # 14
    {
        "id": 14,
        "type": "yes_no",
        "category": "Implementar soluções de IA com o Microsoft Foundry",
        "category_en": "Implement AI solutions with Microsoft Foundry",
        "objective": "2.1 Implement generative AI apps and agents by using Foundry",
        "what_it_tests": "Criar prompts de usuário que fornecem instruções claras, contexto e formato de saída desejado para modelos de IA generativa.",
        "question": "Para cada uma das seguintes afirmações sobre engenharia de prompt (prompt engineering), selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
        "statements": [
            {"id": 1, "text": "Um prompt do usuário pode incluir um exemplo para guiar o modelo em direção a um estilo desejado."},
            {"id": 2, "text": "Um prompt do usuário pode especificar o público-alvo pretendido para ajudar a adaptar o tom e a profundidade técnica da resposta."},
            {"id": 3, "text": "Um prompt do usuário para saída estruturada deve omitir formatos solicitados, como marcadores, tabelas ou listas numeradas."}
        ],
        "correct_answer": {"1": "Yes", "2": "Yes", "3": "No"},
        "user_attempt": {"1": "No", "2": "Yes", "3": "No"},
        "user_was_correct": False,
        "official_rationale": "A inclusão de exemplos (few-shot learning) é uma das melhores práticas para demonstrar estilo e formato. Especificar o público orienta a densidade técnica. Para obter saídas estruturadas, o prompt DEVE especificar claramente os formatos desejados (ex: JSON, tabela, bullet points), e nunca omiti-los.",
        "explanation_why_correct": "• **Afirmação 1 (Sim):** O uso de exemplos (aprendizado one-shot / few-shot) condiciona o modelo a replicar exatamente a estrutura e vocabulário desejados.\n• **Afirmação 2 (Sim):** Informar quem lerá a resposta ('explique para um aluno do ensino fundamental' vs 'para um engenheiro de dados') calibra perfeitamente o vocabulário.\n• **Afirmação 3 (Não):** Se você deseja uma resposta estruturada, você DEVE solicitar explicitamente tabelas ou listas; omitir essas instruções fará o modelo gerar texto corrido não estruturado.",
        "explanation_why_incorrect": "No simulado original, você marcou 'Não' na Afirmação 1. Exemplos práticos dentro do prompt são a técnica número 1 da engenharia de prompt para guiar estilo e consistência.",
        "additional_reading": [
            {"title": "Introduction to creating prompts for generative AI", "url": "https://learn.microsoft.com/azure/ai-services/openai/concepts/prompt-engineering"}
        ]
    },
    # 15
    {
        "id": 15,
        "type": "yes_no",
        "category": "Implementar soluções de IA com o Microsoft Foundry",
        "category_en": "Implement AI solutions with Microsoft Foundry",
        "objective": "2.2 Implement AI solutions for text and speech by using Foundry",
        "what_it_tests": "Criar um aplicativo leve usando o Azure Speech no Foundry Tools para converter entrada de fala em texto.",
        "question": "Para cada uma das seguintes afirmações sobre o SDK do Azure Speech, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
        "statements": [
            {"id": 1, "text": "O método recognize_once_async() é usado para reconhecimento de fala contínuo e de longa duração com múltiplos enunciados."},
            {"id": 2, "text": "A chamada recognize_once_async().get() retorna o resultado do reconhecimento para um único enunciado falado."},
            {"id": 3, "text": "Um objeto AudioConfig armazena o ponto de extremidade ou região e a chave usada para conectar ao Azure Speech no Foundry Tools."}
        ],
        "correct_answer": {"1": "No", "2": "Yes", "3": "No"},
        "user_attempt": {"1": "Yes", "2": "Yes", "3": "Yes"},
        "user_was_correct": False,
        "official_rationale": "O recognize_once_async() é para reconhecimento de um único enunciado (até cerca de 15 a 30 segundos). Para reconhecimento contínuo longo, usa-se start_continuous_recognition_async(). As chaves e regiões ficam no SpeechConfig; o AudioConfig configura fontes de entrada sonora (microfone, arquivo de áudio).",
        "explanation_why_correct": "• **Afirmação 1 (Não):** `recognize_once_async()` encerra a escuta após a primeira pausa de fala (reconhecimento único). Para áudios longos contínuos, utiliza-se `start_continuous_recognition_async()`.\n• **Afirmação 2 (Sim):** O método assíncrono retorna uma operação cuja chamada `.get()` aguarda e retorna o `SpeechRecognitionResult` do enunciado falado.\n• **Afirmação 3 (Não):** O objeto **SpeechConfig** armazena credenciais (chave e região). O **AudioConfig** é responsável por definir a origem ou destino do áudio (ex: microfone padrão, arquivo WAV).",
        "explanation_why_incorrect": "No simulado original, você marcou 'Sim' nas Afirmações 1 e 3. Lembre-se: `SpeechConfig` = credenciais/configurações do serviço; `AudioConfig` = dispositivo de áudio/hardware.",
        "additional_reading": [
            {"title": "Speech to text quickstart", "url": "https://learn.microsoft.com/azure/ai-services/speech-service/get-started-speech-to-text"}
        ]
    },
    # 16
    {
        "id": 16,
        "type": "dropdown",
        "category": "Implementar soluções de IA com o Microsoft Foundry",
        "category_en": "Implement AI solutions with Microsoft Foundry",
        "objective": "2.4 Implement AI solutions for information extraction by using Foundry",
        "what_it_tests": "Extrair informações importantes de formulários manuscritos ou visualmente complexos usando o Azure Content Understanding no Foundry Tools.",
        "question": "Selecione a resposta que completa corretamente a frase:\n\nPara formulários manuscritos ou visualmente complexos, [ESCOLHA UMA OPÇÃO] ajuda o Azure Content Understanding no Foundry Tools a extrair informações estruturadas.",
        "options": [
            {"id": "A", "text": "fornecer descrições claras dos campos no esquema (providing field descriptions)"},
            {"id": "B", "text": "fixar coordenadas estáticas da página (fixed page coordinates)"},
            {"id": "C", "text": "reduzir a temperatura do modelo para zero (lowering model temperature)"},
            {"id": "D", "text": "aumentar a taxa de compressão do arquivo PDF (increasing compression)"}
        ],
        "correct_answer": "A",
        "user_attempt": "B",
        "user_was_correct": False,
        "official_rationale": "No Content Understanding, ao analisar documentos não padronizados, manuscritos ou de layout livre, adicionar descrições ricas aos campos do esquema orienta o raciocínio do modelo de fundação sobre onde e como encontrar a informação, dispensando posições fixas.",
        "explanation_why_correct": "No paradigma de IA generativa do Content Understanding, as **descrições de campo (field descriptions)** explicam o significado semântico do dado buscado. Isso permite que o modelo localize informações manuscritas mesmo quando o layout varia completamente entre documentos.",
        "explanation_why_incorrect": "• **B (Sua resposta original - 'fixed page coordinates'): Incorreta.** Coordenadas fixas de página quebram quando há qualquer variação de escala, alinhamento ou rotação no escaneamento de formulários manuscritos.\n• **C: Incorreta.** A temperatura influencia a aleatoriedade da amostragem, mas não ensina o modelo onde encontrar dados complexos.\n• **D: Incorreta.** Comprimir arquivos degradaria a legibilidade do texto manuscrito.",
        "additional_reading": [
            {"title": "Azure Content Understanding document solutions", "url": "https://learn.microsoft.com/azure/ai-services/content-understanding/"}
        ]
    },
    # 17
    {
        "id": 17,
        "type": "single",
        "category": "Implementar soluções de IA com o Microsoft Foundry",
        "category_en": "Implement AI solutions with Microsoft Foundry",
        "objective": "2.3 Implement AI solutions with computer vision and image-generation capabilities by using Foundry",
        "what_it_tests": "Interpretar entrada visual em prompts usando um modelo multimodal implantado para responder a perguntas sobre objetos visíveis, ações ou contexto de cena.",
        "question": "Você tem um aplicativo Web Python que usa um modelo Azure OpenAI habilitado para visão implantado no Microsoft Foundry.\n\nO aplicativo recebe uma pergunta do usuário e uma URL de imagem. Você precisa que o aplicativo responda a perguntas sobre objetos visíveis, ações ou contexto da cena na imagem.\n\nO que o aplicativo deve enviar ao modelo?",
        "options": [
            {"id": "A", "text": "A pergunta como input_text e o nome do modelo como input_image"},
            {"id": "B", "text": "A pergunta como input_text e a URL da imagem como input_image"},
            {"id": "C", "text": "A pergunta e a URL da imagem combinadas juntas em uma única string input_text"},
            {"id": "D", "text": "A pergunta como um prompt de geração de imagem"}
        ],
        "correct_answer": "B",
        "user_attempt": "B",
        "user_was_correct": True,
        "official_rationale": "Em chamadas para modelos de visão na API do Azure OpenAI / Foundry, as diferentes modalidades de conteúdo são estruturadas em partes: o texto da pergunta entra como parte de texto (input_text / type: text) e a URL da imagem entra como parte de imagem (input_image / image_url).",
        "explanation_why_correct": "Para que o modelo multimodal processe simultaneamente o texto e a imagem, cada elemento deve ser fornecido em seu respectivo tipo de conteúdo estruturado (`input_text` para a pergunta e `input_image` com a URL da imagem).",
        "explanation_why_incorrect": "• **A: Incorreta.** O nome do modelo não deve ser passado como imagem.\n• **C: Incorreta.** Concatenar a URL dentro do texto comum faz o modelo tratá-la apenas como texto literal sem fazer o download dos pixels da imagem.\n• **D: Incorreta.** Prompts de geração de imagem servem para criar novas fotos, não para analisar uma foto existente.",
        "additional_reading": [
            {"title": "Vision-enabled models in Microsoft Foundry", "url": "https://learn.microsoft.com/azure/ai-studio/"}
        ]
    },
    # 18
    {
        "id": 18,
        "type": "multi",
        "category": "Implementar soluções de IA com o Microsoft Foundry",
        "category_en": "Implement AI solutions with Microsoft Foundry",
        "objective": "2.4 Implement AI solutions for information extraction by using Foundry",
        "what_it_tests": "Extrair informações descritivas de imagens para apoiar cenários subsequentes de classificação ou pesquisa usando o Content Understanding.",
        "question": "Você tem um projeto do Microsoft Foundry que analisa imagens de produtos.\n\nVocê precisa que o Azure Content Understanding nas Ferramentas do Foundry forneça:\n• texto descritivo que possa ser indexado para pesquisa de imagens\n• um valor de categoria de produto estruturado\n\nQuais DUAS ações você deve executar? (Cada resposta correta apresenta parte da solução).",
        "options": [
            {"id": "A", "text": "Mapear locais de origem (source locations) para o campo de conteúdo do índice de pesquisa"},
            {"id": "B", "text": "Configurar categorias de moderação de imagem do Azure AI Content Safety"},
            {"id": "C", "text": "Adicionar um campo de esquema que usa classify para a categoria do produto"},
            {"id": "D", "text": "Mapear a saída Markdown para o campo de conteúdo do índice de pesquisa"}
        ],
        "correct_answer": ["C", "D"],
        "user_attempt": ["C", "D"],
        "user_was_correct": True,
        "official_rationale": "O Azure Content Understanding gera uma representação descritiva detalhada em formato Markdown que pode ser inserida diretamente no campo de conteúdo de um índice de busca (como o Azure AI Search). Para obter categorias estruturadas, define-se um campo do tipo 'classify' no esquema do analisador.",
        "explanation_why_correct": "• **C:** O tipo `classify` no esquema permite que o modelo categorize a imagem em uma taxonomia de produtos pré-definida.\n• **D:** A saída em `Markdown` gerada pelo Content Understanding traz a descrição textual completa da imagem, perfeita para indexação e busca textual/vetorial.",
        "explanation_why_incorrect": "• **A: Incorreta.** Locais de origem são apenas metadados de URI de armazenamento e não contêm a riqueza textual descritiva da imagem.\n• **B: Incorreta.** Content Safety atua na detecção de violência, nudez e ódio, não gerando taxonomia de catálogo de produtos nem texto de busca.",
        "additional_reading": [
            {"title": "Azure Content Understanding image solutions", "url": "https://learn.microsoft.com/azure/ai-services/content-understanding/"}
        ]
    },
    # 19
    {
        "id": 19,
        "type": "single",
        "category": "Implementar soluções de IA com o Microsoft Foundry",
        "category_en": "Implement AI solutions with Microsoft Foundry",
        "objective": "2.3 Implement AI solutions with computer vision and image-generation capabilities by using Foundry",
        "what_it_tests": "Criar um aplicativo leve que inclui recursos de visão para gerar e exibir novas imagens retornadas por modelos generativos.",
        "question": "Você tem um projeto do Microsoft Foundry que contém um modelo de geração de imagens implantado.\n\nVocê precisa de um aplicativo Web Python para criar uma imagem de 1024 x 1024 a partir do prompt de linguagem natural de um usuário e exibir a imagem em um navegador.\n\nQual padrão de solicitação o aplicativo deve usar?",
        "options": [
            {"id": "A", "text": "Enviar o prompt para o ponto de extremidade de incorporações de imagens e renderizar os vetores retornados"},
            {"id": "B", "text": "Enviar o prompt para o ponto de extremidade de geração de imagens (image generations) e decodificar os dados da imagem retornada"},
            {"id": "C", "text": "Enviar o prompt para o ponto de extremidade de edição de imagens e carregar uma imagem de origem existente"},
            {"id": "D", "text": "Enviar o prompt para o ponto de extremidade de geração de imagens e retornar o corpo bruto da resposta HTTP"}
        ],
        "correct_answer": "B",
        "user_attempt": "B",
        "user_was_correct": True,
        "official_rationale": "Para criar novas imagens via prompt, o cliente envia a requisição para o endpoint de image generations (ex: /images/generations). A API retorna os dados da imagem (como uma URL temporária ou uma string Base64 no formato b64_json), que o aplicativo decodifica ou encaminha para exibição em uma tag HTML <img>.",
        "explanation_why_correct": "O endpoint correto é o de **geração de imagens (image generations)**, e o aplicativo precisa decodificar a carga útil (Base64 ou URL) para renderizar a imagem no navegador do usuário.",
        "explanation_why_incorrect": "• **A: Incorreta.** Embeddings retornam arrays de números reais (vetores de similaridade), não imagens visuais.\n• **C: Incorreta.** O endpoint de edição exige uma imagem prévia de origem; o cenário pede para criar a imagem do zero a partir de um prompt.\n• **D: Incorreta.** O corpo bruto da resposta HTTP é um payload JSON com metadados, o qual um navegador comum não sabe renderizar diretamente como elemento gráfico.",
        "additional_reading": [
            {"title": "Deploy and use image models in Microsoft Foundry", "url": "https://learn.microsoft.com/azure/ai-studio/"}
        ]
    },
    # 20
    {
        "id": 20,
        "type": "single",
        "category": "Implementar soluções de IA com o Microsoft Foundry",
        "category_en": "Implement AI solutions with Microsoft Foundry",
        "objective": "2.4 Implement AI solutions for information extraction by using Foundry",
        "what_it_tests": "Extrair campos estruturados e dados tabulares de documentos comerciais e formulários usando o Azure Content Understanding no Foundry Tools.",
        "question": "Você tem formulários de fornecedores digitalizados que contêm campos de documento e tabelas de preços.\n\nVocê precisa que o Azure Content Understanding no Foundry Tools retorne JSON estruturado para os campos e para as linhas de tabela repetidas.\n\nQual funcionalidade do analisador você deve configurar?",
        "options": [
            {"id": "A", "text": "Extração de conteúdo (Content extraction)"},
            {"id": "B", "text": "Extração de campos (Field extraction)"},
            {"id": "C", "text": "Classificação (Classification)"},
            {"id": "D", "text": "Saída Markdown (Markdown output)"}
        ],
        "correct_answer": "B",
        "user_attempt": "B",
        "user_was_correct": True,
        "official_rationale": "A Extração de Campos (Field extraction) em um analisador do Content Understanding permite definir esquemas personalizados com propriedades individuais (campos simples) e estruturas aninhadas/tabelas (arrays de objetos para linhas de tabela repetidas).",
        "explanation_why_correct": "A **Extração de campos (Field extraction)** foi projetada especificamente para capturar campos chave-valor e mapear linhas de tabelas dinâmicas diretamente para um JSON estruturado com validação de esquema.",
        "explanation_why_incorrect": "• **A: Incorreta.** A extração de conteúdo bruto faz a extração de todo o texto sem mapeamento de esquema de dados JSON.\n• **C: Incorreta.** A classificação apenas categoriza o tipo do documento (ex: 'Fatura' vs 'Recibo').\n• **D: Incorreta.** O Markdown gera texto formatado para humanos, não objetos JSON tipados.",
        "additional_reading": [
            {"title": "What is Azure Content Understanding?", "url": "https://learn.microsoft.com/azure/ai-services/content-understanding/"}
        ]
    }
]

print(f"Loaded questions 1 to 20. Total: {len(questions)}")
