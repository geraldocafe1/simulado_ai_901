import json

# Full dataset script for all 50 questions of AI-901
questions_full = [
    # Q1
    {
        "id": 1,
        "type": "single",
        "category": "Implementar soluções de IA com o Microsoft Foundry",
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
        "official_rationale": "Modelos generativos de imagem fornecem recursos de edição imagem-para-imagem (image-to-image editing / inpainting), permitindo transformar uma imagem existente com base em orientações de um prompt de texto.",
        "explanation_why_correct": "A **Edição de imagem para imagem (Image-to-image editing)** recebe uma imagem existente (o PNG) e um prompt em linguagem natural descrevendo as alterações ou novo contexto visual desejado, gerando uma imagem modificada com fidelidade aos elementos solicitados.",
        "explanation_why_incorrect": "• **A (Sua escolha original): Incorreta.** O *Text embedding* (incorporação de texto) gera representações vetoriais matemáticas de textos para cálculo de similaridade e busca semântica; ele não gera nem altera imagens.\n• **B: Incorreta.** A *Geração de texto para imagem* cria uma imagem do zero baseando-se unicamente em texto, não permitindo fornecer uma imagem PNG pré-existente como base de partida.\n• **C: Incorreta.** A *Detecção de objetos* localiza e classifica elementos em uma imagem existente traçando caixas delimitadoras (bounding boxes), sem gerar novo conteúdo gráfico.",
        "additional_reading": [
            {"title": "Deploy and use MAI image models in Microsoft Foundry (preview)", "url": "https://learn.microsoft.com/azure/ai-studio/"}
        ]
    },
    # Q2
    {
        "id": 2,
        "type": "single",
        "category": "Implementar soluções de IA com o Microsoft Foundry",
        "objective": "2.2 Implement AI solutions for text and speech by using Foundry",
        "what_it_tests": "Responder a prompts falados usando um modelo multimodal implantado para responder a perguntas do usuário a partir de entrada de áudio.",
        "question": "Você tem um projeto do Microsoft Foundry que contém um modelo Azure OpenAI com suporte a áudio implantado.\n\nVocê precisa de um aplicativo Python para enviar uma pergunta gravada em arquivo WAV e receber como resposta tanto texto quanto áudio no formato WAV.\n\nO que o aplicativo deve fazer?",
        "options": [
            {"id": "A", "text": "Passar o nome do arquivo WAV como input_audio e solicitar as modalidades de texto e áudio"},
            {"id": "B", "text": "Codificar o arquivo WAV em Base64 como input_audio e solicitar as modalidades de texto e áudio"},
            {"id": "C", "text": "Enviar o conteúdo do arquivo WAV como uma mensagem de texto e solicitar as modalidades de texto e áudio"},
            {"id": "D", "text": "Enviar o arquivo WAV como input_audio e solicitar apenas a modalidade de texto"}
        ],
        "correct_answer": "B",
        "user_attempt": "C",
        "user_was_correct": False,
        "official_rationale": "Modelos multimodais de áudio no Azure OpenAI exigem que os dados de áudio sejam enviados como dados binários codificados em Base64 sob o campo input_audio. Para obter texto e voz na resposta, as modalidades text e audio devem ser requisitadas.",
        "explanation_why_correct": "Ao utilizar modelos multimodais de áudio (ex.: gpt-4o-audio-preview), os bytes do áudio WAV devem ser codificados em **Base64** e passados no dicionário `input_audio`. Adicionalmente, você deve especificar `modalities=[\"text\", \"audio\"]` na chamada da API para que o modelo retorne a resposta textual e o áudio sintetizado em WAV.",
        "explanation_why_incorrect": "• **C (Sua escolha original): Incorreta.** O conteúdo binário de um arquivo de áudio não pode ser enviado diretamente como texto comum (string), pois causará erros de decodificação no modelo e na serialização JSON do payload.\n• **A: Incorreta.** O nome ou caminho local do arquivo não faz upload do conteúdo do áudio para o serviço em nuvem.\n• **D: Incorreta.** Requisitar apenas a modalidade de texto não atenderá ao requisito de receber o áudio WAV de resposta.",
        "additional_reading": [
            {"title": "Quickstart: Get started with Azure OpenAI audio generation", "url": "https://learn.microsoft.com/azure/ai-services/openai/"}
        ]
    },
    # Q3
    {
        "id": 3,
        "type": "yes_no",
        "category": "Implementar soluções de IA com o Microsoft Foundry",
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
        "official_rationale": "A detecção de idioma determina exclusivamente o idioma predominante do texto e a pontuação de confiança. A redação de dados confidenciais é função da detecção de PII, e a análise emocional é função da análise de sentimento.",
        "explanation_why_correct": "• **Afirmação 1 (Não):** A remoção e mascaramento de dados confidenciais como CPF, e-mail e endereços é feita pelo recurso *PII Detection / Redaction*, e não pela Detecção de Idioma.\n• **Afirmação 2 (Não):** Identificar se um texto é positivo, neutro ou negativo com pontuações de confiança é papel do recurso *Sentiment Analysis*.\n• **Afirmação 3 (Sim):** A detecção de idioma analisa o texto de entrada e retorna o idioma principal (ex: 'Português', código 'pt') acompanhado de uma pontuação de confiança entre 0 e 1.",
        "explanation_why_incorrect": "No simulado original, você marcou 'Sim' na Afirmação 1. No ecossistema Azure AI Services, cada API possui limites de responsabilidade muito claros para otimização de custo e desempenho.",
        "additional_reading": [
            {"title": "Get started with text analysis in Azure", "url": "https://learn.microsoft.com/azure/ai-services/language-service/"},
            {"title": "Quickstart: Detect the language of text", "url": "https://learn.microsoft.com/azure/ai-services/language-service/language-detection/quickstart"}
        ]
    },
    # Q4
    {
        "id": 4,
        "type": "single",
        "category": "Implementar soluções de IA com o Microsoft Foundry",
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
        "official_rationale": "O Chat playground no portal do Foundry oferece uma interface gráfica interativa onde você pode testar modelos de chat, enviar mensagens, ajustar hiperparâmetros (temperatura, max tokens) e inspecionar os retornos imediatamente sem desenvolvimento de software.",
        "explanation_why_correct": "O **Chat playground** foi desenvolvido exatamente para esse fluxo de trabalho 'no-code': você seleciona a implantação, configura instruções de sistema e conversa diretamente com o modelo.",
        "explanation_why_incorrect": "• **B: Incorreta.** O *Catálogo de modelos* é onde você pesquisa modelos disponíveis (OpenAI, Mistral, Meta LLaMA) para implantação.\n• **C: Incorreta.** As *Métricas de monitoramento* exibem gráficos de desempenho e utilização de recursos (chamadas por minuto, latência).\n• **D: Incorreta.** *Models + endpoints* gerencia as implantações existentes e seus detalhes de conexão (chaves e URLs de destino).",
        "additional_reading": [
            {"title": "Interact with models in the Foundry chat playground", "url": "https://learn.microsoft.com/azure/ai-studio/"}
        ]
    },
    # Q5
    {
        "id": 5,
        "type": "yes_no",
        "category": "Implementar soluções de IA com o Microsoft Foundry",
        "objective": "2.3 Implement AI solutions with computer vision and image-generation capabilities by using Foundry",
        "what_it_tests": "Criar novas saídas visuais usando modelos generativos a partir de prompts em linguagem natural descrevendo conteúdo, composição ou estilo.",
        "question": "Para cada uma das seguintes afirmações sobre modelos de geração de imagens no Microsoft Foundry, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
        "statements": [
            {"id": 1, "text": "Modelos de geração de imagens no Microsoft Foundry podem criar imagens a partir de descrições em linguagem natural."},
            {"id": 2, "text": "Modelos de geração de imagens no Microsoft Foundry recuperam imagens geradas a partir de um catálogo de imagens com curadoria."},
            {"id": 3, "text": "O catálogo de modelos do Microsoft Foundry pode ser filtrado por tarefa de inferência para ajudar a encontrar modelos de texto para imagem (text-to-image)."}
        ],
        "correct_answer": {"1": "Yes", "2": "No", "3": "Yes"},
        "user_attempt": {"1": "Yes", "2": "No", "3": "Yes"},
        "user_was_correct": True,
        "official_rationale": "Modelos como DALL-E criam imagens inéditas sintetizadas por redes neurais difusivas a partir de texto. Eles não funcionam como motores de busca em bancos de imagens estáticas. O catálogo de modelos possui filtros dedicados para localizar modelos pelo tipo de tarefa.",
        "explanation_why_correct": "• **Afirmação 1 (Sim):** A geração texto-para-imagem cria arte e fotos baseadas nas descrições de texto do usuário.\n• **Afirmação 2 (Não):** A IA generativa sintetiza novas imagens pixel por pixel, sem buscar fotos salvas em um catálogo ou galeria.\n• **Afirmação 3 (Sim):** O catálogo de modelos do Foundry disponibiliza filtros por 'Inference Task' (ex: text-to-image, text-generation, embeddings) facilitando a seleção.",
        "explanation_why_incorrect": "Você acertou todas as opções nesta questão no seu simulado original!",
        "additional_reading": [
            {"title": "What is DALL-E?", "url": "https://learn.microsoft.com/azure/ai-services/openai/concepts/models#dall-e"},
            {"title": "Image generation with Microsoft Foundry", "url": "https://learn.microsoft.com/azure/ai-studio/"}
        ]
    },
    # Q6
    {
        "id": 6,
        "type": "dropdown",
        "category": "Implementar soluções de IA com o Microsoft Foundry",
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
        "official_rationale": "No Azure Content Understanding, o esquema (schema) define a estrutura de destino dos dados: os nomes dos campos, os tipos de dados (número, string, data, tabela) e descrições semânticas que guiam o modelo generativo a extrair exatamente o que o negócio precisa.",
        "explanation_why_correct": "O **esquema (schema)** é a especificação que dita quais informações o analisador deve extrair do documento (ex: número da nota fiscal, CNPJ, itens de linha e totais). Sem o esquema, o analisador não saberia quais campos estruturados deve mapear para JSON.",
        "explanation_why_incorrect": "• **B (Sua escolha original - 'normalize files into supported formats'): Incorreta.** A normalização de arquivos e conversão de formato é um processo interno de pipeline de ingestão do serviço de nuvem, e não a função de um esquema definido pelo usuário.\n• **C: Incorreta.** A indexação para pesquisa vetorial é função do Azure AI Search.\n• **D: Incorreta.** O Content Understanding utiliza modelos de fundação pré-treinados 'zero-shot' / 'few-shot', não exigindo treinamento supervisionado clássico.",
        "additional_reading": [
            {"title": "Get started with information extraction - Documents", "url": "https://learn.microsoft.com/azure/ai-services/content-understanding/"},
            {"title": "Azure Content Understanding in Foundry Tools document solutions", "url": "https://learn.microsoft.com/azure/ai-services/content-understanding/"}
        ]
    },
    # Q7
    {
        "id": 7,
        "type": "yes_no",
        "category": "Implementar soluções de IA com o Microsoft Foundry",
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
        "official_rationale": "Modelos multimodais aceitam texto e imagem na mesma requisição. Imagens podem ser passadas tanto por URLs públicas quanto em formato de string codificada em Base64 (data:image/png;base64,...). No Azure/Foundry OpenAI, o parâmetro model sempre deve receber o nome da implantação (deployment name), não o nome base do modelo.",
        "explanation_why_correct": "• **Afirmação 1 (Sim):** A API multimodal permite compor requisições combinando mensagens com texto e imagens simultaneamente.\n• **Afirmação 2 (Não):** É permitido enviar imagens tanto por URLs da web quanto codificando diretamente os bytes da imagem local em strings Base64 com data URI.\n• **Afirmação 3 (Não):** No ecossistema Azure/Foundry, você sempre referencia o **deployment name** (o nome atribuído à implantação), pois é nele que residem os controles de governança e cotas.",
        "explanation_why_incorrect": "No simulado original, você marcou 'Sim' na Afirmação 2. O envio de imagens em Base64 é amplamente utilizado exatamente para imagens locais que não estão expostas publicamente na internet.",
        "additional_reading": [
            {"title": "Vision-enabled models in Microsoft Foundry", "url": "https://learn.microsoft.com/azure/ai-studio/"}
        ]
    },
    # Q8
    {
        "id": 8,
        "type": "single",
        "category": "Implementar soluções de IA com o Microsoft Foundry",
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
        "official_rationale": "O analisador pré-construído prebuilt-callCenter foi projetado especificamente para gravações de centrais de atendimento, trazendo de fábrica diarização de locutores (separando atendente de cliente), transcrição completa, resumo da conversa e análise de sentimento com zero necessidade de treinamento adicional.",
        "explanation_why_correct": "O analisador **prebuilt-callCenter** já possui o esquema nativo otimizado para chamadas telefônicas de suporte, extraindo quem falou o quê, a resolução da chamada e a satisfação do cliente.",
        "explanation_why_incorrect": "• **A: Incorreta.** Um analisador customizado exigiria configuração e rotulagem manual de esquemas, desrespeitando o requisito de 'configuração mínima'.\n• **B e D: Incorretas.** O *prebuilt-audioSearch* foca em gerar transcrições e representações para indexação e busca em áudios, não possuindo a segmentação e inteligência de negócio específicas de call centers.",
        "additional_reading": [
            {"title": "Azure Content Understanding in Foundry Tools audio solutions", "url": "https://learn.microsoft.com/azure/ai-services/content-understanding/"}
        ]
    },
    # Q9
    {
        "id": 9,
        "type": "yes_no",
        "category": "Implementar soluções de IA com o Microsoft Foundry",
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
        "official_rationale": "OCR (reconhecimento óptico de caracteres) extrai texto visual de imagens ou quadros de vídeo, não o áudio falado. O Content Understanding é um serviço multimodal que analisa documentos, imagens, áudio e vídeo. O analisador é o componente central que configura o tipo de mídia, os campos do esquema e o formato do JSON gerado.",
        "explanation_why_correct": "• **Afirmação 1 (Não):** A configuração `enableOcr` extrai textos visíveis (letras impressas ou manuscritas em quadros visuais), enquanto transcrições de áudio falado são processadas por modelos de reconhecimento de fala (Speech-to-Text).\n• **Afirmação 2 (Sim):** O Azure Content Understanding é multimodal unificado, processando nativamente documentos, imagens, áudios e vídeos.\n• **Afirmação 3 (Sim):** O analisador (analyzer) é a unidade fundamental onde se define o tipo de conteúdo alvo, os parâmetros de extração e o esquema estruturado de saída.",
        "explanation_why_incorrect": "No simulado original, você respondeu Sim na Afirmação 1 e Não na Afirmação 3. Lembre-se: OCR lida estritamente com informação visual/gráfica (visão computacional), enquanto áudio lida com acústica.",
        "additional_reading": [
            {"title": "Content Understanding FAQ", "url": "https://learn.microsoft.com/azure/ai-services/content-understanding/"}
        ]
    },
    # Q10
    {
        "id": 10,
        "type": "dropdown",
        "category": "Implementar soluções de IA com o Microsoft Foundry",
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
        "official_rationale": "Modelos multimodais (como a família GPT-4o e GPT-4 Turbo with Vision) possuem a capacidade combinada de receber entradas visuais (imagens) e raciocinar sobre elas gerando saídas de texto em linguagem natural.",
        "explanation_why_correct": "Um **modelo multimodal** consegue processar mais de uma modalidade de informação (neste caso, imagem de entrada e texto de saída).",
        "explanation_why_incorrect": "• **B: Incorreta.** Um modelo de fala para texto (Speech-to-Text) transcreve voz para texto, sem processar imagens.\n• **C: Incorreta.** Um modelo de incorporação de texto gera vetores matemáticos a partir de frases para busca semântica.\n• **D: Incorreta.** Um modelo de geração de imagens (como DALL-E) faz o inverso: recebe texto e produz uma imagem.",
        "additional_reading": [
            {"title": "Vision-enabled models in Microsoft Foundry", "url": "https://learn.microsoft.com/azure/ai-studio/"}
        ]
    }
]

print("Batch 1 (Q1-Q10) defined.")
