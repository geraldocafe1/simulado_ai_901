// Simulado Oficial Microsoft Exam AI-901: Microsoft Azure AI Fundamentals
// Total: 50 questões traduzidas e comentadas

const SIMULADO_QUESTIONS = [
  {
    "id": 1,
    "type": "single",
    "category": "Implementar soluções de IA com o Microsoft Foundry",
    "category_en": "Implement AI solutions with Microsoft Foundry",
    "objective": "2.3 Implement AI solutions with computer vision and image-generation capabilities by using Foundry",
    "what_it_tests": "Criar novas saídas visuais usando modelos generativos que transformam uma imagem existente de acordo com instruções de prompt.",
    "question": "Você tem um projeto do Microsoft Foundry que contém um modelo de geração de imagens.\n\nVocê precisa de um aplicativo para criar uma nova imagem de produto utilizando uma imagem PNG existente e um prompt de texto.\n\nQual recurso o aplicativo deve usar?",
    "options": [
      {
        "id": "A",
        "text": "Incorporação de texto (Text embedding)"
      },
      {
        "id": "B",
        "text": "Geração de texto para imagem (Text-to-image generation)"
      },
      {
        "id": "C",
        "text": "Detecção de objetos (Object detection)"
      },
      {
        "id": "D",
        "text": "Edição de imagem para imagem (Image-to-image editing)"
      }
    ],
    "correct_answer": "D",
    "user_attempt": "A",
    "user_was_correct": false,
    "official_rationale": "Modelos de geração de imagens oferecem capacidades de edição imagem-para-imagem (image-to-image editing), nas quais uma imagem base e um prompt são combinados para criar uma nova saída visual personalizada.",
    "explanation_why_correct": "A **Edição de imagem para imagem (Image-to-image editing)** recebe uma imagem de entrada existente (como um arquivo PNG) e um prompt em texto descritivo para transformá-la ou gerar uma variação. Isso atende exatamente ao requisito de criar uma nova imagem de produto a partir de um PNG existente.",
    "explanation_why_incorrect": "• **A (Sua resposta original): Incorreta.** O *Text embedding* (incorporação de texto) gera vetores numéricos para busca semântica em textos; não tem nenhuma capacidade de manipular imagens.\n• **B: Incorreta.** A *Geração de texto para imagem (Text-to-image)* cria imagens puramente a partir de descrições textuais, sem aceitar uma imagem PNG existente como modelo de base.\n• **C: Incorreta.** A *Detecção de objetos* localiza e classifica elementos em uma imagem existente usando retângulos delimitadores (bounding boxes), mas não gera novas imagens.",
    "additional_reading": [
      {
        "title": "Deploy and use MAI image models in Microsoft Foundry",
        "url": "https://learn.microsoft.com/azure/ai-studio/"
      }
    ]
  },
  {
    "id": 2,
    "type": "single",
    "category": "Implementar soluções de IA com o Microsoft Foundry",
    "category_en": "Implement AI solutions with Microsoft Foundry",
    "objective": "2.2 Implement AI solutions for text and speech by using Foundry",
    "what_it_tests": "Responder a prompts falados usando um modelo multimodal implantado para responder a perguntas do usuário a partir de entrada de áudio.",
    "question": "Você tem um projeto do Microsoft Foundry que contém um modelo Azure OpenAI com suporte a áudio implantado.\n\nVocê precisa de um aplicativo Python para enviar uma pergunta gravada em formato WAV e receber como resposta tanto o texto quanto o áudio em formato WAV.\n\nO que o aplicativo deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Passar o nome do arquivo WAV como input_audio e solicitar as modalidades de texto e áudio"
      },
      {
        "id": "B",
        "text": "Codificar o arquivo WAV em Base64 como input_audio e solicitar as modalidades de texto e áudio"
      },
      {
        "id": "C",
        "text": "Enviar o conteúdo do arquivo WAV como uma mensagem de texto e solicitar as modalidades de texto e áudio"
      },
      {
        "id": "D",
        "text": "Enviar o arquivo WAV como input_audio e solicitar apenas a modalidade de texto"
      }
    ],
    "correct_answer": "B",
    "user_attempt": "C",
    "user_was_correct": false,
    "official_rationale": "Modelos multimodais de áudio no Azure OpenAI exigem que os dados de áudio sejam enviados como string binária codificada em Base64 sob o campo input_audio. Para obter saída tanto em texto quanto em áudio sintetizado, ambas as modalidades devem ser solicitadas na requisição.",
    "explanation_why_correct": "Na API de áudio multimodal do Azure OpenAI (como o GPT-4o Audio), a entrada de áudio deve ser serializada como **Base64** no parâmetro `input_audio`. Para receber tanto o texto quanto a resposta em voz (WAV), a requisição deve explicitar `modalities=[\"text\", \"audio\"]`.",
    "explanation_why_incorrect": "• **C (Sua resposta original): Incorreta.** O conteúdo binário de um arquivo WAV não pode ser transmitido como texto simples (string de texto comum), pois caracteres de controle binários quebram o parser JSON da API.\n• **A: Incorreta.** Apenas passar o nome do arquivo local não realiza o upload do conteúdo do áudio para o serviço em nuvem.\n• **D: Incorreta.** Solicitar apenas a modalidade de texto ignora a necessidade de receber o áudio WAV de resposta.",
    "additional_reading": [
      {
        "title": "Quickstart: Get started with Azure OpenAI audio generation",
        "url": "https://learn.microsoft.com/azure/ai-services/openai/"
      }
    ]
  },
  {
    "id": 3,
    "type": "yes_no",
    "category": "Implementar soluções de IA com o Microsoft Foundry",
    "category_en": "Implement AI solutions with Microsoft Foundry",
    "objective": "2.2 Implement AI solutions for text and speech by using Foundry",
    "what_it_tests": "Criar um aplicativo leve que inclui detecção de idioma para determinar o idioma do texto enviado.",
    "question": "Para cada uma das seguintes afirmações sobre o recurso de Detecção de Idioma (Language Detection) no Azure Language no Foundry Tools, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "statements": [
      {
        "id": 1,
        "text": "A detecção de idioma no Azure Language no Foundry Tools remove informações de identificação pessoal (PII) do texto enviado."
      },
      {
        "id": 2,
        "text": "A detecção de idioma no Azure Language no Foundry Tools identifica o sentimento no texto enviado e retorna pontuações de confiança."
      },
      {
        "id": 3,
        "text": "A detecção de idioma no Azure Language no Foundry Tools identifica o idioma principal do texto enviado e retorna uma pontuação de confiança."
      }
    ],
    "correct_answer": {
      "1": "No",
      "2": "No",
      "3": "Yes"
    },
    "user_attempt": {
      "1": "Yes",
      "2": "No",
      "3": ""
    },
    "user_was_correct": false,
    "official_rationale": "A detecção de idioma apenas detecta o idioma predominante e o nível de confiança. A remoção/redação de PII é papel da Detecção de PII, e a identificação de tom emocional é responsabilidade da Análise de Sentimento.",
    "explanation_why_correct": "• **Afirmação 1 (Não):** Remover/ocultar PII (dados pessoais sensíveis) é exclusividade da funcionalidade *Personally Identifiable Information (PII) Detection*.\n• **Afirmação 2 (Não):** Análise emocional e pontuações de positividade/negatividade pertencem ao recurso *Sentiment Analysis*.\n• **Afirmação 3 (Sim):** A detecção de idioma analisa a cadeia de caracteres e retorna o idioma principal (ex: 'pt', 'en') e uma pontuação de confiança entre 0.0 e 1.0.",
    "explanation_why_incorrect": "No simulado original, você marcou 'Sim' para a Afirmação 1. É fundamental ter em mente que cada recurso do Azure AI Language tem finalidade única para garantir alta precisão e baixo custo computacional.",
    "additional_reading": [
      {
        "title": "Get started with text analysis in Azure",
        "url": "https://learn.microsoft.com/azure/ai-services/language-service/"
      },
      {
        "title": "Quickstart: Detect the language of text",
        "url": "https://learn.microsoft.com/azure/ai-services/language-service/language-detection/quickstart"
      }
    ]
  },
  {
    "id": 4,
    "type": "single",
    "category": "Implementar soluções de IA com o Microsoft Foundry",
    "category_en": "Implement AI solutions with Microsoft Foundry",
    "objective": "2.1 Implement generative AI apps and agents by using Foundry",
    "what_it_tests": "Interagir com um modelo implantado no portal do Foundry para enviar prompts e revisar as respostas geradas sem escrever código.",
    "question": "Você tem um projeto do Microsoft Foundry que contém um modelo Azure OpenAI implantado.\n\nVocê precisa enviar prompts e revisar as respostas geradas sem precisar escrever código.\n\nQual recurso do portal você deve usar?",
    "options": [
      {
        "id": "A",
        "text": "Área de testes de chat (Chat playground)"
      },
      {
        "id": "B",
        "text": "Catálogo de modelos (Model catalog)"
      },
      {
        "id": "C",
        "text": "Métricas de monitoramento (Monitoring metrics)"
      },
      {
        "id": "D",
        "text": "Modelos + pontos de extremidade (Models + endpoints)"
      }
    ],
    "correct_answer": "A",
    "user_attempt": "A",
    "user_was_correct": true,
    "official_rationale": "O Chat playground no portal do Foundry é o ambiente visual interativo projetado para que desenvolvedores e analistas possam experimentar modelos implantados, testar prompts e avaliar respostas sem precisar de código.",
    "explanation_why_correct": "O **Chat playground** permite conversar diretamente com o modelo implantado, definir mensagens de sistema e ajustar parâmetros na interface web.",
    "explanation_why_incorrect": "• **B: Incorreta.** O *Catálogo de modelos* serve para navegar e explorar modelos fundacionais de diversos provedores antes de implantá-los.\n• **C: Incorreta.** As *Métricas de monitoramento* mostram dados de telemetria operacional (erros, latência, chamadas).\n• **D: Incorreta.** *Models + endpoints* é onde você gerencia as instâncias implantadas e obtém as URLs e credenciais.",
    "additional_reading": [
      {
        "title": "Interact with models in the Foundry chat playground",
        "url": "https://learn.microsoft.com/azure/ai-studio/"
      }
    ]
  },
  {
    "id": 5,
    "type": "yes_no",
    "category": "Implementar soluções de IA com o Microsoft Foundry",
    "category_en": "Implement AI solutions with Microsoft Foundry",
    "objective": "2.3 Implement AI solutions with computer vision and image-generation capabilities by using Foundry",
    "what_it_tests": "Criar novas saídas visuais usando modelos generativos a partir de prompts em linguagem natural descrevendo conteúdo, composição ou estilo.",
    "question": "Para cada uma das seguintes afirmações sobre a geração de imagens no Microsoft Foundry, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "statements": [
      {
        "id": 1,
        "text": "Modelos de geração de imagens no Microsoft Foundry podem criar imagens a partir de descrições em linguagem natural."
      },
      {
        "id": 2,
        "text": "Modelos de geração de imagens no Microsoft Foundry recuperam imagens geradas a partir de um catálogo de imagens com curadoria."
      },
      {
        "id": 3,
        "text": "O catálogo de modelos do Microsoft Foundry pode ser filtrado por tarefa de inferência para ajudar a encontrar modelos de texto para imagem (text-to-image)."
      }
    ],
    "correct_answer": {
      "1": "Yes",
      "2": "No",
      "3": "Yes"
    },
    "user_attempt": {
      "1": "Yes",
      "2": "No",
      "3": "Yes"
    },
    "user_was_correct": true,
    "official_rationale": "Modelos como DALL-E sintetizam imagens originais a partir de representações textuais. Eles não buscam fotos em um banco pré-existente. O catálogo permite filtragem por 'Inference tasks' para modelos de geração visual.",
    "explanation_why_correct": "• **Afirmação 1 (Sim):** O modelo interpreta o prompt de linguagem natural e sintetiza a imagem correspondente.\n• **Afirmação 2 (Não):** Modelos generativos sintetizam imagens do zero via difusão latente; não são mecanismos de busca em estoque de fotos.\n• **Afirmação 3 (Sim):** No catálogo do Microsoft Foundry, você pode filtrar modelos por tarefas como 'text-to-image', 'embeddings', 'chat', etc.",
    "explanation_why_incorrect": "Você acertou todas as afirmações no seu teste original!",
    "additional_reading": [
      {
        "title": "What is DALL-E?",
        "url": "https://learn.microsoft.com/azure/ai-services/openai/concepts/models#dall-e"
      },
      {
        "title": "Image generation in Microsoft Foundry",
        "url": "https://learn.microsoft.com/azure/ai-studio/"
      }
    ]
  },
  {
    "id": 6,
    "type": "dropdown",
    "category": "Implementar soluções de IA com o Microsoft Foundry",
    "category_en": "Implement AI solutions with Microsoft Foundry",
    "objective": "2.4 Implement AI solutions for information extraction by using Foundry",
    "what_it_tests": "Criar um aplicativo leve com recursos de extração de informações usando o Content Understanding para cenários de processamento de documentos e formulários.",
    "question": "Selecione a resposta que completa corretamente a frase:\n\nNo Azure Content Understanding nas Ferramentas do Foundry, um esquema (schema) é usado para [ESCOLHA UMA OPÇÃO] para análise de documentos.",
    "options": [
      {
        "id": "A",
        "text": "definir os campos e a estrutura de dados a serem extraídos"
      },
      {
        "id": "B",
        "text": "normalizar arquivos em formatos suportados"
      },
      {
        "id": "C",
        "text": "indexar conteúdos de documentos para busca vetorial"
      },
      {
        "id": "D",
        "text": "treinar um modelo de aprendizado de máquina supervisionado"
      }
    ],
    "correct_answer": "A",
    "user_attempt": "B",
    "user_was_correct": false,
    "official_rationale": "No Azure Content Understanding, o esquema (schema) é o elemento onde o usuário especifica os campos de negócio (nomes, tipos como data, número, string, tabelas) que o analisador deve extrair do documento.",
    "explanation_why_correct": "O **esquema (schema)** atua como um contrato de dados: ele define quais campos específicos (ex: 'NumeroNota', 'DataVencimento', 'ValorTotal') devem ser identificados e estruturados no JSON de retorno.",
    "explanation_why_incorrect": "• **B (Sua resposta original - 'normalize files into supported formats'): Incorreta.** A normalização de arquivos em formatos suportados (conversão de PDF, TIFF, JPG) é executada internamente pelo serviço de ingestão da nuvem, não pelo esquema.\n• **C: Incorreta.** A indexação para busca vetorial é tarefa do Azure AI Search.\n• **D: Incorreta.** O Content Understanding é baseado em modelos multimodais de fundação pré-treinados, eliminando a necessidade de treinamento supervisionado manual.",
    "additional_reading": [
      {
        "title": "Get started with information extraction - Documents",
        "url": "https://learn.microsoft.com/azure/ai-services/content-understanding/"
      }
    ]
  },
  {
    "id": 7,
    "type": "yes_no",
    "category": "Implementar soluções de IA com o Microsoft Foundry",
    "category_en": "Implement AI solutions with Microsoft Foundry",
    "objective": "2.3 Implement AI solutions with computer vision and image-generation capabilities by using Foundry",
    "what_it_tests": "Criar um aplicativo leve que inclui recursos de visão para upload de imagem e envio de prompt multimodal para um modelo implantado.",
    "question": "Para cada uma das seguintes afirmações sobre a API OpenAI Responses no Microsoft Foundry, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "statements": [
      {
        "id": 1,
        "text": "A API OpenAI Responses no Microsoft Foundry suporta uma única solicitação que inclui tanto entrada de texto quanto entrada de imagem."
      },
      {
        "id": 2,
        "text": "Imagens enviadas para um modelo habilitado para visão usando a API OpenAI Responses podem ser fornecidas como URLs acessíveis publicamente, mas não como dados de imagem codificados em Base64."
      },
      {
        "id": 3,
        "text": "O código do aplicativo que usa um modelo do Foundry implantado com o SDK Python do OpenAI passa o nome do modelo base em vez do nome da implantação como o valor do parâmetro model."
      }
    ],
    "correct_answer": {
      "1": "Yes",
      "2": "No",
      "3": "No"
    },
    "user_attempt": {
      "1": "Yes",
      "2": "Yes",
      "3": "No"
    },
    "user_was_correct": false,
    "official_rationale": "A API suporta requisições multimodais combinando texto e imagem. Imagens podem ser passadas tanto via URL pública quanto codificadas em Base64. No Azure/Foundry, o parâmetro model no SDK deve conter o nome da implantação (deployment name), não o modelo base.",
    "explanation_why_correct": "• **Afirmação 1 (Sim):** Modelos multimodais aceitam mensagens compostas por texto e imagem na mesma chamada.\n• **Afirmação 2 (Não):** É perfeitamente possível enviar imagens como dados em Base64 usando data URIs (`data:image/jpeg;base64,...`), o que é ideal para arquivos locais.\n• **Afirmação 3 (Não):** O Azure OpenAI requer o nome da implantação configurada (`deployment_name`), pois a fatura, cota e governança estão atreladas a ela.",
    "explanation_why_incorrect": "No seu teste, você marcou 'Sim' na Afirmação 2. Lembre-se de que o suporte a Base64 é essencial exatamente para evitar que desenvolvedores precisem subir imagens confidenciais em servidores web públicos antes da análise.",
    "additional_reading": [
      {
        "title": "Vision-enabled models in Microsoft Foundry",
        "url": "https://learn.microsoft.com/azure/ai-studio/"
      }
    ]
  },
  {
    "id": 8,
    "type": "single",
    "category": "Implementar soluções de IA com o Microsoft Foundry",
    "category_en": "Implement AI solutions with Microsoft Foundry",
    "objective": "2.4 Implement AI solutions for information extraction by using Foundry",
    "what_it_tests": "Extrair conteúdo falado e informações atribuídas a locutores de gravações de áudio usando o Content Understanding.",
    "question": "Você tem um recurso do Microsoft Foundry e gravações de chamadas de suporte ao cliente. Cada gravação contém um atendente e um cliente.\n\nVocê precisa que o Azure Content Understanding no Foundry Tools retorne transcrições com atribuição de atendente/cliente, resumos e insights de sentimento com configuração mínima de analisador.\n\nQual analisador você deve usar?",
    "options": [
      {
        "id": "A",
        "text": "um analisador de áudio personalizado (a custom audio analyzer)"
      },
      {
        "id": "B",
        "text": "um analisador prebuilt-audioSearch personalizado"
      },
      {
        "id": "C",
        "text": "prebuilt-callCenter"
      },
      {
        "id": "D",
        "text": "prebuilt-audioSearch"
      }
    ],
    "correct_answer": "C",
    "user_attempt": "C",
    "user_was_correct": true,
    "official_rationale": "O modelo pré-construído prebuilt-callCenter é especificamente preparado para chamadas de centrais de atendimento, fornecendo diarização (separando atendente de cliente), transcrição, resumo estruturado e análise de sentimento 'out-of-the-box'.",
    "explanation_why_correct": "O analisador **prebuilt-callCenter** entrega todas as métricas exigidas (diarização de atendente/cliente, resumos e sentimentos) sem que você precise criar ou customizar esquemas complexos.",
    "explanation_why_incorrect": "• **A: Incorreta.** Criar um analisador personalizado exigiria definição manual de esquemas e ajustes, violando o requisito de 'configuração mínima'.\n• **B e D: Incorretas.** O analisador *prebuilt-audioSearch* foca em transcrição e indexação para pesquisa em acervos de áudio, não incluindo a lógica de divisão de papéis em call centers.",
    "additional_reading": [
      {
        "title": "Azure Content Understanding in Foundry Tools audio solutions",
        "url": "https://learn.microsoft.com/azure/ai-services/content-understanding/"
      }
    ]
  },
  {
    "id": 9,
    "type": "yes_no",
    "category": "Implementar soluções de IA com o Microsoft Foundry",
    "category_en": "Implement AI solutions with Microsoft Foundry",
    "objective": "2.4 Implement AI solutions for information extraction by using Foundry",
    "what_it_tests": "Criar um aplicativo leve com recursos de extração de informações usando Content Understanding para cenários de processamento de imagem, áudio e vídeo.",
    "question": "Para cada uma das seguintes afirmações sobre o Azure Content Understanding no Foundry Tools, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "statements": [
      {
        "id": 1,
        "text": "A configuração enableOcr é usada para extrair transcrições de arquivos de áudio e vídeo."
      },
      {
        "id": 2,
        "text": "O Azure Content Understanding no Foundry Tools pode processar imagens, gravações de áudio e conteúdo de vídeo."
      },
      {
        "id": 3,
        "text": "Um analisador do Content Understanding define o tipo de conteúdo, as configurações de extração e a estrutura de saída."
      }
    ],
    "correct_answer": {
      "1": "No",
      "2": "Yes",
      "3": "Yes"
    },
    "user_attempt": {
      "1": "Yes",
      "2": "Yes",
      "3": "No"
    },
    "user_was_correct": false,
    "official_rationale": "OCR é voltado para extrair texto visual impresso/escrito de imagens e frames. Transcrições de voz são geradas por reconhecimento de fala. O Content Understanding é multimodal (suporta imagem, áudio e vídeo) e seus analisadores definem o tipo de mídia, as extrações e a estrutura do resultado.",
    "explanation_why_correct": "• **Afirmação 1 (Não):** `enableOcr` extrai caracteres gráficos visíveis (ex: placas, textos em telas). Transcrições de áudio são geradas pelo motor de fala (speech transcription).\n• **Afirmação 2 (Sim):** O serviço é unificado e multimodal, projetado para ingestão de imagens, áudios, vídeos e documentos.\n• **Afirmação 3 (Sim):** O analisador (analyzer) armazena a especificação completa de conteúdo, esquema de dados e regras de extração.",
    "explanation_why_incorrect": "No simulado original, você marcou 'Sim' na Afirmação 1 e 'Não' na Afirmação 3. Lembre-se: OCR significa Optical Character Recognition, ou seja, leitura óptica de texto gráfico, nunca áudio acústico.",
    "additional_reading": [
      {
        "title": "Content Understanding FAQ",
        "url": "https://learn.microsoft.com/azure/ai-services/content-understanding/"
      }
    ]
  },
  {
    "id": 10,
    "type": "dropdown",
    "category": "Implementar soluções de IA com o Microsoft Foundry",
    "category_en": "Implement AI solutions with Microsoft Foundry",
    "objective": "2.3 Implement AI solutions with computer vision and image-generation capabilities by using Foundry",
    "what_it_tests": "Interpretar entrada visual em prompts usando um modelo multimodal implantado para gerar descrições de imagens carregadas.",
    "question": "Selecione a resposta que completa corretamente a frase:\n\nNo Microsoft Foundry, gerar uma descrição em linguagem natural de uma imagem carregada na área de testes de chat (chat playground) requer um(a) [ESCOLHA UMA OPÇÃO] implantado(a).",
    "options": [
      {
        "id": "A",
        "text": "modelo multimodal (multimodal model)"
      },
      {
        "id": "B",
        "text": "modelo de fala para texto (speech-to-text model)"
      },
      {
        "id": "C",
        "text": "modelo de incorporação de texto (text-embedding model)"
      },
      {
        "id": "D",
        "text": "modelo de geração de imagens (image-generation model)"
      }
    ],
    "correct_answer": "A",
    "user_attempt": "A",
    "user_was_correct": true,
    "official_rationale": "Modelos multimodais conseguem 'enxergar' a imagem e raciocinar sobre ela gerando descrições textuais detalhadas em linguagem natural.",
    "explanation_why_correct": "Um **modelo multimodal** (ex: GPT-4o) tem a capacidade de receber formatos diferentes (como imagem e texto) e processá-los conjuntamente para produzir uma saída textual descritiva.",
    "explanation_why_incorrect": "• **B: Incorreta.** Modelos de fala para texto processam áudio gravado, não imagens.\n• **C: Incorreta.** Modelos de embeddings geram vetores numéricos para busca por similaridade.\n• **D: Incorreta.** Modelos de geração de imagens (como DALL-E) recebem texto para gerar uma imagem, o oposto do que foi solicitado.",
    "additional_reading": [
      {
        "title": "Vision-enabled models in Microsoft Foundry",
        "url": "https://learn.microsoft.com/azure/ai-studio/"
      }
    ]
  },
  {
    "id": 11,
    "type": "dropdown",
    "category": "Implementar soluções de IA com o Microsoft Foundry",
    "category_en": "Implement AI solutions with Microsoft Foundry",
    "objective": "2.1 Implement generative AI apps and agents by using Foundry",
    "what_it_tests": "Criar prompts do sistema que definem o comportamento do modelo, o estilo de resposta e as restrições de segurança para uma tarefa específica de IA generativa.",
    "question": "Selecione a resposta que completa corretamente a frase:\n\nNo Microsoft Foundry, uma mensagem do sistema (system message) é usada para [ESCOLHA UMA OPÇÃO].",
    "options": [
      {
        "id": "A",
        "text": "orientar o papel, o estilo e os limites de comportamento do modelo"
      },
      {
        "id": "B",
        "text": "substituir os controles de segurança de conteúdo"
      },
      {
        "id": "C",
        "text": "alterar os dados de treinamento originais do modelo"
      },
      {
        "id": "D",
        "text": "avaliar as respostas geradas após a conclusão da inferência"
      }
    ],
    "correct_answer": "A",
    "user_attempt": "A",
    "user_was_correct": true,
    "official_rationale": "Uma mensagem do sistema (system message ou metaprompt) estabelece a persona, o tom de voz, as instruções de formatação e as regras operacionais que o modelo generativo deve obedecer em todas as respostas.",
    "explanation_why_correct": "A **System Message** atua como as instruções fundamentais do modelo: 'Você é um assistente prestativo da empresa X...', definindo seus limites de atuação e estilo.",
    "explanation_why_incorrect": "• **B: Incorreta.** A mensagem do sistema não substitui os filtros de segurança do Azure AI Content Safety.\n• **C: Incorreta.** Prompts de sistema não modificam os pesos ou dados de treinamento do modelo pré-treinado.\n• **D: Incorreta.** A avaliação de respostas pós-geração é realizada por ferramentas de benchmarking e avaliação de LLMs (Foundry Evaluation).",
    "additional_reading": [
      {
        "title": "Safety system messages",
        "url": "https://learn.microsoft.com/azure/ai-studio/concepts/system-messages"
      },
      {
        "title": "System message templates",
        "url": "https://learn.microsoft.com/azure/ai-services/openai/concepts/system-messages"
      }
    ]
  },
  {
    "id": 12,
    "type": "dropdown",
    "category": "Implementar soluções de IA com o Microsoft Foundry",
    "category_en": "Implement AI solutions with Microsoft Foundry",
    "objective": "2.2 Implement AI solutions for text and speech by using Foundry",
    "what_it_tests": "Criar um aplicativo leve que inclui extração de frases-chave para identificar termos importantes em texto não estruturado.",
    "question": "Selecione a resposta que completa corretamente a frase:\n\nA extração de frases-chave (key phrase extraction) no Azure Language no Foundry Tools [ESCOLHA UMA OPÇÃO].",
    "options": [
      {
        "id": "A",
        "text": "identifica os principais conceitos em um texto"
      },
      {
        "id": "B",
        "text": "traduz o texto para diferentes idiomas em tempo real"
      },
      {
        "id": "C",
        "text": "detecta informações de identificação pessoal e as redige"
      },
      {
        "id": "D",
        "text": "classifica a polaridade do texto entre positiva e negativa"
      }
    ],
    "correct_answer": "A",
    "user_attempt": "A",
    "user_was_correct": true,
    "official_rationale": "O recurso de extração de frases-chave avalia rapidamente o texto não estruturado e extrai uma lista das principais ideias e expressões conceituais que resumem o assunto abordado.",
    "explanation_why_correct": "A **Extração de frases-chave** serve para destacar com agilidade do que o documento trata (ex: 'atendimento ao cliente', 'tempo de espera', 'qualidade do produto').",
    "explanation_why_incorrect": "• **B: Incorreta.** A tradução de texto é papel do Azure AI Translator.\n• **C: Incorreta.** A ocultação de dados confidenciais é função do PII Detection.\n• **D: Incorreta.** A polaridade emocional é determinada pela Análise de Sentimento.",
    "additional_reading": [
      {
        "title": "How to use key phrase extraction",
        "url": "https://learn.microsoft.com/azure/ai-services/language-service/key-phrase-extraction/overview"
      }
    ]
  },
  {
    "id": 13,
    "type": "yes_no",
    "category": "Implementar soluções de IA com o Microsoft Foundry",
    "category_en": "Implement AI solutions with Microsoft Foundry",
    "objective": "2.1 Implement generative AI apps and agents by using Foundry",
    "what_it_tests": "Criar uma solução de agente único no portal do Foundry definindo suas instruções e ações disponíveis.",
    "question": "Para cada uma das seguintes afirmações sobre agentes no Microsoft Foundry, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "statements": [
      {
        "id": 1,
        "text": "O Foundry Tools pode ser usado para descobrir, configurar e adicionar ferramentas a um agente."
      },
      {
        "id": 2,
        "text": "As ferramentas integradas (built-in tools) exigem que você hospede código externo antes que possam ser adicionadas a um agente."
      },
      {
        "id": 3,
        "text": "No portal do Foundry, a seleção de um modelo define como um agente deve se comportar ao responder aos usuários."
      }
    ],
    "correct_answer": {
      "1": "Yes",
      "2": "No",
      "3": "No"
    },
    "user_attempt": {
      "1": "Yes",
      "2": "No",
      "3": "Yes"
    },
    "user_was_correct": false,
    "official_rationale": "O Foundry Tools fornece ferramentas nativas e externas. Ferramentas integradas (como Code Interpreter e Azure AI Search) são totalmente gerenciadas pela Microsoft, sem necessidade de hospedagem pelo desenvolvedor. A seleção do modelo fornece o motor de raciocínio, mas são as *instruções do sistema (instructions)* que definem a conduta e comportamento do agente.",
    "explanation_why_correct": "• **Afirmação 1 (Sim):** O Foundry Tools é a central onde você pesquisa e conecta ferramentas (busca, interpretador de código, APIs) aos agentes.\n• **Afirmação 2 (Não):** Ferramentas nativas são executadas na infraestrutura em nuvem segura da Microsoft, sem necessidade de servidores externos do usuário.\n• **Afirmação 3 (Não):** O modelo é o motor computacional; quem governa a conduta, regras e tom do agente são as instruções configuradas.",
    "explanation_why_incorrect": "No simulado original, você marcou 'Sim' na Afirmação 3. Lembre-se: o modelo fornece inteligência pura; são as instruções (prompt do agente) que determinam se ele se comportará como um atendente bancário, um consultor técnico ou um professor infantil.",
    "additional_reading": [
      {
        "title": "Building your first AI agent in the Foundry portal",
        "url": "https://learn.microsoft.com/azure/ai-studio/"
      }
    ]
  },
  {
    "id": 14,
    "type": "yes_no",
    "category": "Implementar soluções de IA com o Microsoft Foundry",
    "category_en": "Implement AI solutions with Microsoft Foundry",
    "objective": "2.1 Implement generative AI apps and agents by using Foundry",
    "what_it_tests": "Criar prompts de usuário que fornecem instruções claras, contexto e formato de saída desejado para modelos de IA generativa.",
    "question": "Para cada uma das seguintes afirmações sobre engenharia de prompt (prompt engineering), selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "statements": [
      {
        "id": 1,
        "text": "Um prompt do usuário pode incluir um exemplo para guiar o modelo em direção a um estilo desejado."
      },
      {
        "id": 2,
        "text": "Um prompt do usuário pode especificar o público-alvo pretendido para ajudar a adaptar o tom e a profundidade técnica da resposta."
      },
      {
        "id": 3,
        "text": "Um prompt do usuário para saída estruturada deve omitir formatos solicitados, como marcadores, tabelas ou listas numeradas."
      }
    ],
    "correct_answer": {
      "1": "Yes",
      "2": "Yes",
      "3": "No"
    },
    "user_attempt": {
      "1": "No",
      "2": "Yes",
      "3": "No"
    },
    "user_was_correct": false,
    "official_rationale": "A inclusão de exemplos (few-shot learning) é uma das melhores práticas para demonstrar estilo e formato. Especificar o público orienta a densidade técnica. Para obter saídas estruturadas, o prompt DEVE especificar claramente os formatos desejados (ex: JSON, tabela, bullet points), e nunca omiti-los.",
    "explanation_why_correct": "• **Afirmação 1 (Sim):** O uso de exemplos (aprendizado one-shot / few-shot) condiciona o modelo a replicar exatamente a estrutura e vocabulário desejados.\n• **Afirmação 2 (Sim):** Informar quem lerá a resposta ('explique para um aluno do ensino fundamental' vs 'para um engenheiro de dados') calibra perfeitamente o vocabulário.\n• **Afirmação 3 (Não):** Se você deseja uma resposta estruturada, você DEVE solicitar explicitamente tabelas ou listas; omitir essas instruções fará o modelo gerar texto corrido não estruturado.",
    "explanation_why_incorrect": "No simulado original, você marcou 'Não' na Afirmação 1. Exemplos práticos dentro do prompt são a técnica número 1 da engenharia de prompt para guiar estilo e consistência.",
    "additional_reading": [
      {
        "title": "Introduction to creating prompts for generative AI",
        "url": "https://learn.microsoft.com/azure/ai-services/openai/concepts/prompt-engineering"
      }
    ]
  },
  {
    "id": 15,
    "type": "yes_no",
    "category": "Implementar soluções de IA com o Microsoft Foundry",
    "category_en": "Implement AI solutions with Microsoft Foundry",
    "objective": "2.2 Implement AI solutions for text and speech by using Foundry",
    "what_it_tests": "Criar um aplicativo leve usando o Azure Speech no Foundry Tools para converter entrada de fala em texto.",
    "question": "Para cada uma das seguintes afirmações sobre o SDK do Azure Speech, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não.",
    "statements": [
      {
        "id": 1,
        "text": "O método recognize_once_async() é usado para reconhecimento de fala contínuo e de longa duração com múltiplos enunciados."
      },
      {
        "id": 2,
        "text": "A chamada recognize_once_async().get() retorna o resultado do reconhecimento para um único enunciado falado."
      },
      {
        "id": 3,
        "text": "Um objeto AudioConfig armazena o ponto de extremidade ou região e a chave usada para conectar ao Azure Speech no Foundry Tools."
      }
    ],
    "correct_answer": {
      "1": "No",
      "2": "Yes",
      "3": "No"
    },
    "user_attempt": {
      "1": "Yes",
      "2": "Yes",
      "3": "Yes"
    },
    "user_was_correct": false,
    "official_rationale": "O recognize_once_async() é para reconhecimento de um único enunciado (até cerca de 15 a 30 segundos). Para reconhecimento contínuo longo, usa-se start_continuous_recognition_async(). As chaves e regiões ficam no SpeechConfig; o AudioConfig configura fontes de entrada sonora (microfone, arquivo de áudio).",
    "explanation_why_correct": "• **Afirmação 1 (Não):** `recognize_once_async()` encerra a escuta após a primeira pausa de fala (reconhecimento único). Para áudios longos contínuos, utiliza-se `start_continuous_recognition_async()`.\n• **Afirmação 2 (Sim):** O método assíncrono retorna uma operação cuja chamada `.get()` aguarda e retorna o `SpeechRecognitionResult` do enunciado falado.\n• **Afirmação 3 (Não):** O objeto **SpeechConfig** armazena credenciais (chave e região). O **AudioConfig** é responsável por definir a origem ou destino do áudio (ex: microfone padrão, arquivo WAV).",
    "explanation_why_incorrect": "No simulado original, você marcou 'Sim' nas Afirmações 1 e 3. Lembre-se: `SpeechConfig` = credenciais/configurações do serviço; `AudioConfig` = dispositivo de áudio/hardware.",
    "additional_reading": [
      {
        "title": "Speech to text quickstart",
        "url": "https://learn.microsoft.com/azure/ai-services/speech-service/get-started-speech-to-text"
      }
    ]
  },
  {
    "id": 16,
    "type": "dropdown",
    "category": "Implementar soluções de IA com o Microsoft Foundry",
    "category_en": "Implement AI solutions with Microsoft Foundry",
    "objective": "2.4 Implement AI solutions for information extraction by using Foundry",
    "what_it_tests": "Extrair informações importantes de formulários manuscritos ou visualmente complexos usando o Azure Content Understanding no Foundry Tools.",
    "question": "Selecione a resposta que completa corretamente a frase:\n\nPara formulários manuscritos ou visualmente complexos, [ESCOLHA UMA OPÇÃO] ajuda o Azure Content Understanding no Foundry Tools a extrair informações estruturadas.",
    "options": [
      {
        "id": "A",
        "text": "fornecer descrições claras dos campos no esquema (providing field descriptions)"
      },
      {
        "id": "B",
        "text": "fixar coordenadas estáticas da página (fixed page coordinates)"
      },
      {
        "id": "C",
        "text": "reduzir a temperatura do modelo para zero (lowering model temperature)"
      },
      {
        "id": "D",
        "text": "aumentar a taxa de compressão do arquivo PDF (increasing compression)"
      }
    ],
    "correct_answer": "A",
    "user_attempt": "B",
    "user_was_correct": false,
    "official_rationale": "No Content Understanding, ao analisar documentos não padronizados, manuscritos ou de layout livre, adicionar descrições ricas aos campos do esquema orienta o raciocínio do modelo de fundação sobre onde e como encontrar a informação, dispensando posições fixas.",
    "explanation_why_correct": "No paradigma de IA generativa do Content Understanding, as **descrições de campo (field descriptions)** explicam o significado semântico do dado buscado. Isso permite que o modelo localize informações manuscritas mesmo quando o layout varia completamente entre documentos.",
    "explanation_why_incorrect": "• **B (Sua resposta original - 'fixed page coordinates'): Incorreta.** Coordenadas fixas de página quebram quando há qualquer variação de escala, alinhamento ou rotação no escaneamento de formulários manuscritos.\n• **C: Incorreta.** A temperatura influencia a aleatoriedade da amostragem, mas não ensina o modelo onde encontrar dados complexos.\n• **D: Incorreta.** Comprimir arquivos degradaria a legibilidade do texto manuscrito.",
    "additional_reading": [
      {
        "title": "Azure Content Understanding document solutions",
        "url": "https://learn.microsoft.com/azure/ai-services/content-understanding/"
      }
    ]
  },
  {
    "id": 17,
    "type": "single",
    "category": "Implementar soluções de IA com o Microsoft Foundry",
    "category_en": "Implement AI solutions with Microsoft Foundry",
    "objective": "2.3 Implement AI solutions with computer vision and image-generation capabilities by using Foundry",
    "what_it_tests": "Interpretar entrada visual em prompts usando um modelo multimodal implantado para responder a perguntas sobre objetos visíveis, ações ou contexto de cena.",
    "question": "Você tem um aplicativo Web Python que usa um modelo Azure OpenAI habilitado para visão implantado no Microsoft Foundry.\n\nO aplicativo recebe uma pergunta do usuário e uma URL de imagem. Você precisa que o aplicativo responda a perguntas sobre objetos visíveis, ações ou contexto da cena na imagem.\n\nO que o aplicativo deve enviar ao modelo?",
    "options": [
      {
        "id": "A",
        "text": "A pergunta como input_text e o nome do modelo como input_image"
      },
      {
        "id": "B",
        "text": "A pergunta como input_text e a URL da imagem como input_image"
      },
      {
        "id": "C",
        "text": "A pergunta e a URL da imagem combinadas juntas em uma única string input_text"
      },
      {
        "id": "D",
        "text": "A pergunta como um prompt de geração de imagem"
      }
    ],
    "correct_answer": "B",
    "user_attempt": "B",
    "user_was_correct": true,
    "official_rationale": "Em chamadas para modelos de visão na API do Azure OpenAI / Foundry, as diferentes modalidades de conteúdo são estruturadas em partes: o texto da pergunta entra como parte de texto (input_text / type: text) e a URL da imagem entra como parte de imagem (input_image / image_url).",
    "explanation_why_correct": "Para que o modelo multimodal processe simultaneamente o texto e a imagem, cada elemento deve ser fornecido em seu respectivo tipo de conteúdo estruturado (`input_text` para a pergunta e `input_image` com a URL da imagem).",
    "explanation_why_incorrect": "• **A: Incorreta.** O nome do modelo não deve ser passado como imagem.\n• **C: Incorreta.** Concatenar a URL dentro do texto comum faz o modelo tratá-la apenas como texto literal sem fazer o download dos pixels da imagem.\n• **D: Incorreta.** Prompts de geração de imagem servem para criar novas fotos, não para analisar uma foto existente.",
    "additional_reading": [
      {
        "title": "Vision-enabled models in Microsoft Foundry",
        "url": "https://learn.microsoft.com/azure/ai-studio/"
      }
    ]
  },
  {
    "id": 18,
    "type": "multi",
    "category": "Implementar soluções de IA com o Microsoft Foundry",
    "category_en": "Implement AI solutions with Microsoft Foundry",
    "objective": "2.4 Implement AI solutions for information extraction by using Foundry",
    "what_it_tests": "Extrair informações descritivas de imagens para apoiar cenários subsequentes de classificação ou pesquisa usando o Content Understanding.",
    "question": "Você tem um projeto do Microsoft Foundry que analisa imagens de produtos.\n\nVocê precisa que o Azure Content Understanding nas Ferramentas do Foundry forneça:\n• texto descritivo que possa ser indexado para pesquisa de imagens\n• um valor de categoria de produto estruturado\n\nQuais DUAS ações você deve executar? (Cada resposta correta apresenta parte da solução).",
    "options": [
      {
        "id": "A",
        "text": "Mapear locais de origem (source locations) para o campo de conteúdo do índice de pesquisa"
      },
      {
        "id": "B",
        "text": "Configurar categorias de moderação de imagem do Azure AI Content Safety"
      },
      {
        "id": "C",
        "text": "Adicionar um campo de esquema que usa classify para a categoria do produto"
      },
      {
        "id": "D",
        "text": "Mapear a saída Markdown para o campo de conteúdo do índice de pesquisa"
      }
    ],
    "correct_answer": [
      "C",
      "D"
    ],
    "user_attempt": [
      "C",
      "D"
    ],
    "user_was_correct": true,
    "official_rationale": "O Azure Content Understanding gera uma representação descritiva detalhada em formato Markdown que pode ser inserida diretamente no campo de conteúdo de um índice de busca (como o Azure AI Search). Para obter categorias estruturadas, define-se um campo do tipo 'classify' no esquema do analisador.",
    "explanation_why_correct": "• **C:** O tipo `classify` no esquema permite que o modelo categorize a imagem em uma taxonomia de produtos pré-definida.\n• **D:** A saída em `Markdown` gerada pelo Content Understanding traz a descrição textual completa da imagem, perfeita para indexação e busca textual/vetorial.",
    "explanation_why_incorrect": "• **A: Incorreta.** Locais de origem são apenas metadados de URI de armazenamento e não contêm a riqueza textual descritiva da imagem.\n• **B: Incorreta.** Content Safety atua na detecção de violência, nudez e ódio, não gerando taxonomia de catálogo de produtos nem texto de busca.",
    "additional_reading": [
      {
        "title": "Azure Content Understanding image solutions",
        "url": "https://learn.microsoft.com/azure/ai-services/content-understanding/"
      }
    ]
  },
  {
    "id": 19,
    "type": "single",
    "category": "Implementar soluções de IA com o Microsoft Foundry",
    "category_en": "Implement AI solutions with Microsoft Foundry",
    "objective": "2.3 Implement AI solutions with computer vision and image-generation capabilities by using Foundry",
    "what_it_tests": "Criar um aplicativo leve que inclui recursos de visão para gerar e exibir novas imagens retornadas por modelos generativos.",
    "question": "Você tem um projeto do Microsoft Foundry que contém um modelo de geração de imagens implantado.\n\nVocê precisa de um aplicativo Web Python para criar uma imagem de 1024 x 1024 a partir do prompt de linguagem natural de um usuário e exibir a imagem em um navegador.\n\nQual padrão de solicitação o aplicativo deve usar?",
    "options": [
      {
        "id": "A",
        "text": "Enviar o prompt para o ponto de extremidade de incorporações de imagens e renderizar os vetores retornados"
      },
      {
        "id": "B",
        "text": "Enviar o prompt para o ponto de extremidade de geração de imagens (image generations) e decodificar os dados da imagem retornada"
      },
      {
        "id": "C",
        "text": "Enviar o prompt para o ponto de extremidade de edição de imagens e carregar uma imagem de origem existente"
      },
      {
        "id": "D",
        "text": "Enviar o prompt para o ponto de extremidade de geração de imagens e retornar o corpo bruto da resposta HTTP"
      }
    ],
    "correct_answer": "B",
    "user_attempt": "B",
    "user_was_correct": true,
    "official_rationale": "Para criar novas imagens via prompt, o cliente envia a requisição para o endpoint de image generations (ex: /images/generations). A API retorna os dados da imagem (como uma URL temporária ou uma string Base64 no formato b64_json), que o aplicativo decodifica ou encaminha para exibição em uma tag HTML <img>.",
    "explanation_why_correct": "O endpoint correto é o de **geração de imagens (image generations)**, e o aplicativo precisa decodificar a carga útil (Base64 ou URL) para renderizar a imagem no navegador do usuário.",
    "explanation_why_incorrect": "• **A: Incorreta.** Embeddings retornam arrays de números reais (vetores de similaridade), não imagens visuais.\n• **C: Incorreta.** O endpoint de edição exige uma imagem prévia de origem; o cenário pede para criar a imagem do zero a partir de um prompt.\n• **D: Incorreta.** O corpo bruto da resposta HTTP é um payload JSON com metadados, o qual um navegador comum não sabe renderizar diretamente como elemento gráfico.",
    "additional_reading": [
      {
        "title": "Deploy and use image models in Microsoft Foundry",
        "url": "https://learn.microsoft.com/azure/ai-studio/"
      }
    ]
  },
  {
    "id": 20,
    "type": "single",
    "category": "Implementar soluções de IA com o Microsoft Foundry",
    "category_en": "Implement AI solutions with Microsoft Foundry",
    "objective": "2.4 Implement AI solutions for information extraction by using Foundry",
    "what_it_tests": "Extrair campos estruturados e dados tabulares de documentos comerciais e formulários usando o Azure Content Understanding no Foundry Tools.",
    "question": "Você tem formulários de fornecedores digitalizados que contêm campos de documento e tabelas de preços.\n\nVocê precisa que o Azure Content Understanding no Foundry Tools retorne JSON estruturado para os campos e para as linhas de tabela repetidas.\n\nQual funcionalidade do analisador você deve configurar?",
    "options": [
      {
        "id": "A",
        "text": "Extração de conteúdo (Content extraction)"
      },
      {
        "id": "B",
        "text": "Extração de campos (Field extraction)"
      },
      {
        "id": "C",
        "text": "Classificação (Classification)"
      },
      {
        "id": "D",
        "text": "Saída Markdown (Markdown output)"
      }
    ],
    "correct_answer": "B",
    "user_attempt": "B",
    "user_was_correct": true,
    "official_rationale": "A Extração de Campos (Field extraction) em um analisador do Content Understanding permite definir esquemas personalizados com propriedades individuais (campos simples) e estruturas aninhadas/tabelas (arrays de objetos para linhas de tabela repetidas).",
    "explanation_why_correct": "A **Extração de campos (Field extraction)** foi projetada especificamente para capturar campos chave-valor e mapear linhas de tabelas dinâmicas diretamente para um JSON estruturado com validação de esquema.",
    "explanation_why_incorrect": "• **A: Incorreta.** A extração de conteúdo bruto faz a extração de todo o texto sem mapeamento de esquema de dados JSON.\n• **C: Incorreta.** A classificação apenas categoriza o tipo do documento (ex: 'Fatura' vs 'Recibo').\n• **D: Incorreta.** O Markdown gera texto formatado para humanos, não objetos JSON tipados.",
    "additional_reading": [
      {
        "title": "What is Azure Content Understanding?",
        "url": "https://learn.microsoft.com/azure/ai-services/content-understanding/"
      }
    ]
  },
  {
    "id": 21,
    "type": "single",
    "category": "Implementar soluções de IA com o Microsoft Foundry",
    "category_en": "Implement AI solutions with Microsoft Foundry",
    "objective": "2.2 Implement AI solutions for text and speech by using Foundry",
    "what_it_tests": "Criar um aplicativo leve que inclui análise de sentimento para avaliar textos de feedback de clientes.",
    "question": "Você tem um aplicativo Python que coleta comentários curtos de feedback de clientes.\n\nVocê precisa registrar um rótulo de sentimento e pontuações de confiança para positivo, neutro e negativo para cada comentário. A solução deve evitar o treinamento de um modelo personalizado.\n\nQual recurso do Azure Language no Foundry Tools o aplicativo deve chamar?",
    "options": [
      {
        "id": "A",
        "text": "Extração de frases-chave (Key phrase extraction)"
      },
      {
        "id": "B",
        "text": "Detecção de PII (PII detection)"
      },
      {
        "id": "C",
        "text": "Detecção de idioma (Language detection)"
      },
      {
        "id": "D",
        "text": "Análise de sentimento (Sentiment analysis)"
      }
    ],
    "correct_answer": "D",
    "user_attempt": "D",
    "user_was_correct": true,
    "official_rationale": "A Análise de Sentimento do Azure AI Language fornece rótulos preditivos (positivo, neutro, negativo) e pontuações de confiança em nível de documento e de frase sem necessidade de treinamento personalizado.",
    "explanation_why_correct": "A **Análise de sentimento (Sentiment analysis)** analisa a linguagem emocional e retorna rótulos precisos com as três pontuações de probabilidade (positivo, neutro e negativo) prontas para uso.",
    "explanation_why_incorrect": "• **A: Incorreta.** A extração de frases-chave identifica os tópicos principais discutidos, mas não sua valência emocional.\n• **B: Incorreta.** Detecção de PII localiza e mascara dados pessoais identificáveis.\n• **C: Incorreta.** Detecção de idioma apenas aponta em qual língua o texto foi escrito.",
    "additional_reading": [
      {
        "title": "How to: Use Sentiment analysis and Opinion Mining",
        "url": "https://learn.microsoft.com/azure/ai-services/language-service/sentiment-opinion-mining/overview"
      }
    ]
  },
  {
    "id": 22,
    "type": "single",
    "category": "Implementar soluções de IA com o Microsoft Foundry",
    "category_en": "Implement AI solutions with Microsoft Foundry",
    "objective": "2.1 Implement generative AI apps and agents by using Foundry",
    "what_it_tests": "Criar um aplicativo cliente leve para um agente para enviar solicitações de usuário e exibir respostas do agente.",
    "question": "Você tem um aplicativo Python que usa um projeto do Microsoft Foundry contendo um agente de prompt existente chamado faq-agent.\n\nVocê precisa configurar o aplicativo para enviar uma mensagem do usuário para o agente existente.\n\nO que você deve fazer?",
    "options": [
      {
        "id": "A",
        "text": "Chamar responses.create() com um agent_reference"
      },
      {
        "id": "B",
        "text": "Gerar incorporações (embeddings) para a mensagem do usuário"
      },
      {
        "id": "C",
        "text": "Criar um agente efêmero no aplicativo"
      },
      {
        "id": "D",
        "text": "Chamar responses.create() com model definido como faq-agent"
      }
    ],
    "correct_answer": "A",
    "user_attempt": "B",
    "user_was_correct": false,
    "official_rationale": "No SDK unificado do Microsoft Foundry, para interagir com um agente já criado e hospedado (Foundry Agent Service), a chamada de API deve usar responses.create() passando a referência do agente através do parâmetro agent_reference.",
    "explanation_why_correct": "Para invocar um agente gerenciado pré-existente no Foundry, utiliza-se a API `responses.create(agent_reference=...)`. Isso vincula automaticamente a requisição às instruções, ferramentas e memória de conversa mantidas por aquele agente.",
    "explanation_why_incorrect": "• **B (Sua resposta original): Incorreta.** Gerar embeddings calcula vetores matemáticos para busca, mas não executa o loop de raciocínio nem gera resposta do agente.\n• **C: Incorreta.** Criar um agente efêmero ignoraria as ferramentas e configurações já estabelecidas no agente existente `faq-agent`.\n• **D: Incorreta.** O parâmetro `model` recebe o nome de uma implantação de modelo de IA, enquanto referências a agentes de alto nível usam o parâmetro dedicado `agent_reference`.",
    "additional_reading": [
      {
        "title": "What is Microsoft Foundry Agent Service?",
        "url": "https://learn.microsoft.com/azure/ai-studio/"
      }
    ]
  },
  {
    "id": 23,
    "type": "multi",
    "category": "Implementar soluções de IA com o Microsoft Foundry",
    "category_en": "Implement AI solutions with Microsoft Foundry",
    "objective": "2.4 Implement AI solutions for information extraction by using Foundry",
    "what_it_tests": "Extrair elementos audiovisuais integrados como segmentos de fala diarizados e carimbos de data/hora de quadros-chave.",
    "question": "Você precisa atualizar o aplicativo para ler elementos audiovisuais nativos que incluem:\n• segmentos de fala atribuídos a locutores com horários de início e término\n• carimbos de data/hora para quadros visuais representativos\n\nQuais DOIS elementos o aplicativo deve ler? (Cada resposta correta apresenta parte da solução).",
    "options": [
      {
        "id": "A",
        "text": "As propriedades width e height"
      },
      {
        "id": "B",
        "text": "O objeto fields"
      },
      {
        "id": "C",
        "text": "A matriz keyFrameTimesMs"
      },
      {
        "id": "D",
        "text": "A matriz transcriptPhrases"
      },
      {
        "id": "E",
        "text": "A matriz cameraShotTimesMs"
      }
    ],
    "correct_answer": [
      "C",
      "D"
    ],
    "user_attempt": [
      "C",
      "D"
    ],
    "user_was_correct": true,
    "official_rationale": "No schema de saída audiovisual do Azure Content Understanding, transcriptPhrases armazena cada frase dita, com locutor e timestamps de início e fim. A matriz keyFrameTimesMs armazena os timestamps em milissegundos dos frames visuais mais informativos selecionados pelo modelo.",
    "explanation_why_correct": "• **C (`keyFrameTimesMs`):** Fornece exatamente a lista de tempos (em milissegundos) dos quadros-chave mais representativos da mídia.\n• **D (`transcriptPhrases`):** Contém as frases transcritas, com diarização de voz e timestamps de início e término.",
    "explanation_why_incorrect": "• **A: Incorreta.** `width` e `height` apenas informam a resolução geométrica em pixels do vídeo.\n• **B: Incorreta.** O objeto `fields` armazena os campos customizados do esquema definido pelo usuário, não os metadados nativos de transcrição e frames.\n• **E: Incorreta.** `cameraShotTimesMs` demarca cortes de câmera (mudança de tomada cinematográfica), não os frames mais representativos do conteúdo.",
    "additional_reading": [
      {
        "title": "Azure Content Understanding video solutions",
        "url": "https://learn.microsoft.com/azure/ai-services/content-understanding/"
      }
    ]
  },
  {
    "id": 24,
    "type": "single",
    "category": "Implementar soluções de IA com o Microsoft Foundry",
    "category_en": "Implement AI solutions with Microsoft Foundry",
    "objective": "2.2 Implement AI solutions for text and speech by using Foundry",
    "what_it_tests": "Criar um aplicativo leve que inclui reconhecimento de entidades nomeadas para extrair pessoas, lugares e organizações de texto.",
    "question": "Você tem um aplicativo Python que processa mensagens de suporte ao cliente usando o Azure Language no Foundry Tools.\n\nVocê precisa extrair pessoas, locais e organizações de cada mensagem, incluindo o texto correspondente e a categoria.\n\nQual método do cliente o aplicativo deve chamar?",
    "options": [
      {
        "id": "A",
        "text": "recognize_linked_entities(documents=documents)"
      },
      {
        "id": "B",
        "text": "analyze_sentiment(documents=documents)"
      },
      {
        "id": "C",
        "text": "extract_key_phrases(documents=documents)"
      },
      {
        "id": "D",
        "text": "recognize_entities(documents=documents)"
      }
    ],
    "correct_answer": "D",
    "user_attempt": "D",
    "user_was_correct": true,
    "official_rationale": "O método recognize_entities() no SDK do Azure AI Language executa o Reconhecimento de Entidades Nomeadas (NER), categorizando trechos de texto em entidades como Pessoa, Local, Organização e Data/Hora com suas respectivas subcategorias e confiança.",
    "explanation_why_correct": "O método **`recognize_entities()`** executa NER (Named Entity Recognition), identificando diretamente pessoas, organizações e locais junto com seus limites de caractere e categorias.",
    "explanation_why_incorrect": "• **A: Incorreta.** `recognize_linked_entities()` realiza *Entity Linking*, retornando links da Wikipédia para desambiguação, mas não a categorização padrão do NER.\n• **B: Incorreta.** `analyze_sentiment()` avalia o sentimento emocional do texto.\n• **C: Incorreta.** `extract_key_phrases()` extrai termos conceituais gerais, sem classificá-los como pessoas ou locais.",
    "additional_reading": [
      {
        "title": "How to use Named Entity Recognition (NER)",
        "url": "https://learn.microsoft.com/azure/ai-services/language-service/named-entity-recognition/overview"
      }
    ]
  },
  {
    "id": 25,
    "type": "single",
    "category": "Implementar soluções de IA com o Microsoft Foundry",
    "category_en": "Implement AI solutions with Microsoft Foundry",
    "objective": "2.1 Implement generative AI apps and agents by using Foundry",
    "what_it_tests": "Criar um aplicativo de chat leve usando o SDK do Foundry para enviar prompts e receber saídas de modelos.",
    "question": "Você tem um aplicativo de chat em Python que usa um cliente compatível com OpenAI de um projeto do Microsoft Foundry.\n\nVocê precisa enviar um único prompt usando a API unificada de invocação de modelo do Foundry.\n\nQual método o aplicativo deve chamar?",
    "options": [
      {
        "id": "A",
        "text": "responses.create()"
      },
      {
        "id": "B",
        "text": "chat.completions.create()"
      },
      {
        "id": "C",
        "text": "deployments.get()"
      },
      {
        "id": "D",
        "text": "models.list()"
      }
    ],
    "correct_answer": "A",
    "user_attempt": "A",
    "user_was_correct": true,
    "official_rationale": "A nova API unificada de inferência do Microsoft Foundry adota o padrão de endpoint unificado responses.create(), que suporta chamadas síncronas/assíncronas para múltiplos tipos de modelos e agentes.",
    "explanation_why_correct": "O método **`responses.create()`** é a interface unificada de chamada introduzida pelo Microsoft Foundry SDK para simplificar o consumo de modelos generativos e agentes.",
    "explanation_why_incorrect": "• **B: Incorreta.** `chat.completions.create()` é a assinatura da API legada clássica do OpenAI, não a API unificada moderna do Foundry.\n• **C e D: Incorretas.** `deployments.get()` e `models.list()` são operações de gerenciamento de recursos de infraestrutura no plano de controle, não métodos de inferência.",
    "additional_reading": [
      {
        "title": "Microsoft Foundry SDK Quickstart",
        "url": "https://learn.microsoft.com/azure/ai-studio/"
      }
    ]
  },
  {
    "id": 26,
    "type": "single",
    "category": "Implementar soluções de IA com o Microsoft Foundry",
    "category_en": "Implement AI solutions with Microsoft Foundry",
    "objective": "2.1 Implement generative AI apps and agents by using Foundry",
    "what_it_tests": "Implantar um modelo no portal do Foundry para um cenário selecionado de IA generativa aplicando controles de governança.",
    "question": "Você tem um projeto do Microsoft Foundry.\n\nVocê precisa implantar um modelo do Azure OpenAI para um aplicativo de chat e aplicar proteções de governança e moderação (guardrails).\n\nQual opção de implantação você deve usar?",
    "options": [
      {
        "id": "A",
        "text": "Implantação de computação gerenciada (Managed compute deployment)"
      },
      {
        "id": "B",
        "text": "Implantação padrão em recursos do Foundry (Standard deployment in Foundry resources)"
      },
      {
        "id": "C",
        "text": "Acesso instantâneo (Instant access)"
      },
      {
        "id": "D",
        "text": "Tipo de implantação provisionada (Provisioned deployment type)"
      }
    ],
    "correct_answer": "B",
    "user_attempt": "B",
    "user_was_correct": true,
    "official_rationale": "A implantação padrão (Standard deployment in Foundry resources) é a forma nativa recomendada para serviços Azure OpenAI no Foundry, permitindo integração direta com filtros de conteúdo de segurança (Content Safety guardrails) sob o modelo de cobrança 'pay-as-you-go'.",
    "explanation_why_correct": "A **implantação padrão (Standard deployment)** dentro dos recursos do Foundry oferece balanceamento elétrico de carga e suporta a configuração completa de guardrails de segurança contra injeção de prompt e conteúdo impróprio.",
    "explanation_why_incorrect": "• **A: Incorreta.** Computação gerenciada (Managed compute) é usada para hospedar contêineres de modelos de código aberto (como modelos do Hugging Face em máquinas virtuais dedicadas), o que não é o caso do Azure OpenAI nativo.\n• **C: Incorreta.** 'Instant access' refere-se ao modo Serverless API (MaaS), geralmente sem os mesmos controles de governança unificados do Foundry resource.\n• **D: Incorreta.** Implantações provisionadas (PTUs) destinam-se a garantir throughput reservado e previsível em larga escala com custo fixo mensal elevado.",
    "additional_reading": [
      {
        "title": "Deployment overview for Microsoft Foundry",
        "url": "https://learn.microsoft.com/azure/ai-studio/how-to/deploy-models"
      }
    ]
  },
  {
    "id": 27,
    "type": "single",
    "category": "Implementar soluções de IA com o Microsoft Foundry",
    "category_en": "Implement AI solutions with Microsoft Foundry",
    "objective": "2.2 Implement AI solutions for text and speech by using Foundry",
    "what_it_tests": "Criar um aplicativo leve usando o Azure Speech no Foundry Tools para converter respostas de texto em fala sintetizada.",
    "question": "Você tem um aplicativo Python que armazena respostas geradas em uma variável chamada response_text.\n\nVocê precisa usar o Azure Speech no Foundry Tools para sintetizar response_text usando a voz en-US-Ava:DragonHDLatestNeural e reproduzir o áudio no alto-falante padrão.\n\nQual configuração o aplicativo deve usar?",
    "options": [
      {
        "id": "A",
        "text": "speech_synthesis_language e saída no alto-falante padrão"
      },
      {
        "id": "B",
        "text": "speech_synthesis_voice_name e saída no alto-falante padrão"
      },
      {
        "id": "C",
        "text": "speech_synthesis_language e saída em arquivo"
      },
      {
        "id": "D",
        "text": "speech_synthesis_voice_name e saída em arquivo"
      }
    ],
    "correct_answer": "B",
    "user_attempt": "D",
    "user_was_correct": false,
    "official_rationale": "Para usar uma voz neural específica como en-US-Ava:DragonHDLatestNeural, a propriedade speech_synthesis_voice_name deve ser configurada. Como o requisito exige tocar o áudio diretamente no alto-falante do computador, o destino de áudio deve ser o default speaker output.",
    "explanation_why_correct": "A propriedade `speech_synthesis_voice_name` define o identificador exato da voz neural. A saída deve ser configurada para o alto-falante padrão (`AudioConfig(use_default_speaker=True)`), atendendo à exigência de tocar o som diretamente.",
    "explanation_why_incorrect": "• **D (Sua resposta original): Incorreta.** Você selecionou a voz correta, mas configurou a saída para arquivo ('file output'). O enunciado exige expressamente 'play the audio on the default speaker' (reproduzir no alto-falante padrão).\n• **A e C: Incorretas.** `speech_synthesis_language` apenas define o idioma genérico, ignorando a seleção da voz neural ultra-realista solicitada.",
    "additional_reading": [
      {
        "title": "Create a speech-enabled app with Azure Speech",
        "url": "https://learn.microsoft.com/azure/ai-services/speech-service/"
      }
    ]
  },
  {
    "id": 28,
    "type": "single",
    "category": "Implementar soluções de IA com o Microsoft Foundry",
    "category_en": "Implement AI solutions with Microsoft Foundry",
    "objective": "2.3 Implement AI solutions with computer vision and image-generation capabilities by using Foundry",
    "what_it_tests": "Interpretar entrada visual em prompts usando um modelo multimodal implantado para comparar várias imagens em um único prompt.",
    "question": "Você tem um aplicativo Python que usa a API OpenAI Responses no Microsoft Foundry com um modelo multimodal implantado.\n\nOs usuários fornecem duas URLs de imagens HTTPS. Você precisa que o aplicativo retorne uma comparação de texto entre as duas imagens em uma única solicitação.\n\nO que a solicitação deve incluir?",
    "options": [
      {
        "id": "A",
        "text": "Uma instrução de texto e cada URL de imagem como uma parte de conteúdo input_image separada"
      },
      {
        "id": "B",
        "text": "Cada URL de imagem enviada para um ponto de extremidade de geração de imagem"
      },
      {
        "id": "C",
        "text": "Cada URL de imagem como uma parte de conteúdo image_url no formato Chat Completions"
      },
      {
        "id": "D",
        "text": "Uma instrução de texto e cada URL de imagem combinadas juntas em um único valor input_text"
      }
    ],
    "correct_answer": "A",
    "user_attempt": "D",
    "user_was_correct": false,
    "official_rationale": "Na API unificada de Responses do Foundry, a mensagem deve conter uma parte de texto com as instruções e partes de conteúdo individuais do tipo input_image para cada imagem analisada, permitindo ao modelo correlacionar ambas.",
    "explanation_why_correct": "A estrutura de mensagem multimodal exige que cada imagem seja informada em seu próprio bloco de conteúdo do tipo `input_image`, permitindo que a API baixe e codifique ambas as imagens paralelamente para comparação.",
    "explanation_why_incorrect": "• **D (Sua resposta original): Incorreta.** Misturar as URLs dentro de um único texto `input_text` faz o modelo enxergá-las como texto puro (letras 'https://...'), sem renderizar ou analisar o conteúdo gráfico das imagens.\n• **B: Incorreta.** Endpoints de geração de imagem criam imagens novas, não comparam imagens existentes.\n• **C: Incorreta.** O formato `image_url` é o schema da API de Chat Completions tradicional, enquanto o enunciado especificou expressamente o uso da 'OpenAI Responses API'.",
    "additional_reading": [
      {
        "title": "Vision-enabled models in Microsoft Foundry",
        "url": "https://learn.microsoft.com/azure/ai-studio/"
      }
    ]
  },
  {
    "id": 29,
    "type": "dropdown",
    "category": "Implementar soluções de IA com o Microsoft Foundry",
    "category_en": "Implement AI solutions with Microsoft Foundry",
    "objective": "2.2 Implement AI solutions for text and speech by using Foundry",
    "what_it_tests": "Responder a prompts falados usando um modelo multimodal sobre conteúdo visual fornecido com o prompt.",
    "question": "Selecione a resposta que completa corretamente a frase:\n\nNo Microsoft Foundry, um aplicativo que aceita entrada falada e uma imagem no mesmo prompt requer um(a) [ESCOLHA UMA OPÇÃO] implantado(a).",
    "options": [
      {
        "id": "A",
        "text": "Prompt Shield"
      },
      {
        "id": "B",
        "text": "modelo de incorporação (embedding model)"
      },
      {
        "id": "C",
        "text": "modelo multimodal (multimodal model)"
      },
      {
        "id": "D",
        "text": "modelo de geração de imagem (image generation model)"
      }
    ],
    "correct_answer": "C",
    "user_attempt": "C",
    "user_was_correct": true,
    "official_rationale": "Modelos que combinam mais de uma modalidade perceptiva (como áudio + visão + texto) são categorizados como modelos multimodais de ponta a ponta (ex: GPT-4o).",
    "explanation_why_correct": "O termo **multimodal** designa precisamente modelos com arquitetura neural unificada capaz de aceitar múltiplos sentidos (voz, imagem e texto) no mesmo contexto.",
    "explanation_why_incorrect": "• **A: Incorreta.** Prompt Shield é um filtro de segurança contra ataques de injeção de prompt e jailbreaks.\n• **B: Incorreta.** Modelos de embeddings calculam representações vetoriais para similaridade de documentos.\n• **D: Incorreta.** Modelos de geração de imagens geram gráficos a partir de texto, não interpretando voz e foto como entrada combinada.",
    "additional_reading": [
      {
        "title": "Choose and deploy a multimodal model",
        "url": "https://learn.microsoft.com/azure/ai-studio/"
      }
    ]
  },
  {
    "id": 30,
    "type": "single",
    "category": "Identificar conceitos e recursos de IA",
    "category_en": "Identify AI concepts and capabilities",
    "objective": "1. Identify AI concepts and capabilities",
    "what_it_tests": "Compreender os diferentes tipos de cargas de trabalho de visão computacional.",
    "question": "Qual tipo de carga de trabalho de inteligência artificial (IA) oferece a capacidade de classificar pixels individuais em uma imagem dependendo do objeto que eles representam?",
    "options": [
      {
        "id": "A",
        "text": "análise de imagem (image analysis)"
      },
      {
        "id": "B",
        "text": "classificação de imagem (image classification)"
      },
      {
        "id": "C",
        "text": "detecção de objetos (object detection)"
      },
      {
        "id": "D",
        "text": "segmentação semântica (semantic segmentation)"
      }
    ],
    "correct_answer": "D",
    "user_attempt": "C",
    "user_was_correct": false,
    "official_rationale": "A segmentação semântica vai além de caixas delimitadoras: ela atribui uma classe a cada pixel individual de uma imagem (ex: pixels da pista, pixels do pedestre, pixels do céu), criando máscaras de segmentação ultra-precisas.",
    "explanation_why_correct": "A **Segmentação semântica (Semantic segmentation)** classifica a imagem no nível de cada pixel individual, permitindo mapear exatamente o contorno irregular de cada objeto (muito usado em carros autônomos e imagens médicas).",
    "explanation_why_incorrect": "• **C (Sua resposta original): Incorreta.** A *Detecção de objetos* identifica objetos desenhando **caixas retangulares delimitadoras (bounding boxes)** ao redor deles, sem rotular pixel a pixel.\n• **A: Incorreta.** A análise de imagem extrai tags descritivas e legendas para a imagem como um todo.\n• **B: Incorreta.** A classificação de imagem atribui uma ou mais categorias à imagem inteira (ex: 'esta foto contém um gato').",
    "additional_reading": [
      {
        "title": "Understand computer vision - Microsoft Learn",
        "url": "https://learn.microsoft.com/training/modules/explore-computer-vision/"
      }
    ]
  },
  {
    "id": 31,
    "type": "single",
    "category": "Identificar conceitos e recursos de IA",
    "category_en": "Identify AI concepts and capabilities",
    "objective": "1. Identify AI concepts and capabilities",
    "what_it_tests": "Diferenciar a saída de serviços de visão computacional.",
    "question": "Qual serviço de visão computacional fornece coordenadas delimitadoras (bounding coordinates / bounding boxes) como parte de sua saída?",
    "options": [
      {
        "id": "A",
        "text": "análise de imagem (image analysis)"
      },
      {
        "id": "B",
        "text": "classificação de imagem (image classification)"
      },
      {
        "id": "C",
        "text": "detecção de objetos (object detection)"
      },
      {
        "id": "D",
        "text": "segmentação semântica (semantic segmentation)"
      }
    ],
    "correct_answer": "C",
    "user_attempt": "D",
    "user_was_correct": false,
    "official_rationale": "A detecção de objetos identifica a presença e classe de objetos em uma imagem e retorna coordenadas de caixas delimitadoras (bounding boxes: x, y, largura, altura) indicando onde eles se localizam.",
    "explanation_why_correct": "A **Detecção de objetos (Object detection)** fornece explicitamente as coordenadas retangulares (`bounding box`) de cada objeto localizado.",
    "explanation_why_incorrect": "• **D (Sua resposta original): Incorreta.** A segmentação semântica gera máscaras de pixels, não coordenadas de caixas delimitadoras retangulares.\n• **A: Incorreta.** Análise de imagem retorna legendas gerais e tags descritivas.\n• **B: Incorreta.** Classificação de imagem indica o que a imagem é no geral, sem retornar coordenadas de localização.",
    "additional_reading": [
      {
        "title": "Understand computer vision - Microsoft Learn",
        "url": "https://learn.microsoft.com/training/modules/explore-computer-vision/"
      }
    ]
  },
  {
    "id": 32,
    "type": "dropdown",
    "category": "Identificar conceitos e recursos de IA",
    "category_en": "Identify AI concepts and capabilities",
    "objective": "1. Identify AI concepts and capabilities",
    "what_it_tests": "Compreender o papel dos embeddings em modelos de linguagem e recuperação semântica.",
    "question": "Selecione a resposta que completa corretamente a frase:\n\n[ESCOLHA UMA OPÇÃO] pode(m) pesquisar, classificar e comparar fontes de texto quanto à sua similaridade.",
    "options": [
      {
        "id": "A",
        "text": "Aterramento de dados (Data grounding)"
      },
      {
        "id": "B",
        "text": "Incorporações (Embeddings)"
      },
      {
        "id": "C",
        "text": "Aprendizado de máquina clássico (Machine learning)"
      },
      {
        "id": "D",
        "text": "Mensagens do sistema (System messages)"
      }
    ],
    "correct_answer": "B",
    "user_attempt": "B",
    "user_was_correct": true,
    "official_rationale": "Embeddings (incorporações) transformam textos em vetores matemáticos numéricos em um espaço multidimensional. Textos com significado semântico parecido ficam geometricamente próximos, permitindo busca e classificação por similaridade de cosseno.",
    "explanation_why_correct": "Modelos de **Embeddings** representam conceitos linguisticos em números, sendo a base de sistemas de busca semântica, classificação e RAG (Retrieval-Augmented Generation).",
    "explanation_why_incorrect": "• **A: Incorreta.** Aterramento de dados (grounding) é a técnica de conectar o modelo a fontes de dados reais da empresa para evitar alucinações.\n• **C: Incorreta.** Machine learning é a disciplina ampla que engloba toda essa área.\n• **D: Incorreta.** System messages definem o comportamento e as regras de um modelo generativo em chat.",
    "additional_reading": [
      {
        "title": "Responsible generative AI - Microsoft Learn",
        "url": "https://learn.microsoft.com/training/modules/explore-generative-ai/"
      }
    ]
  },
  {
    "id": 33,
    "type": "multi",
    "category": "Identificar conceitos e recursos de IA",
    "category_en": "Identify AI concepts and capabilities",
    "objective": "1. Identify AI concepts and capabilities",
    "what_it_tests": "Identificar funcionalidades do serviço Azure AI Face para correspondência facial.",
    "question": "Ao usar o serviço Azure Face no Foundry Tools, o que você deve usar para realizar a correspondência de rostos de um para muitos (1:N) ou de um para um (1:1)? (Cada resposta correta apresenta uma solução completa).",
    "options": [
      {
        "id": "A",
        "text": "Custom Vision"
      },
      {
        "id": "B",
        "text": "atributos faciais (face attributes)"
      },
      {
        "id": "C",
        "text": "identificação facial (face identification)"
      },
      {
        "id": "D",
        "text": "verificação facial (face verification)"
      },
      {
        "id": "E",
        "text": "localizar rostos semelhantes (find similar faces)"
      }
    ],
    "correct_answer": [
      "C",
      "D"
    ],
    "user_attempt": [
      "C",
      "D"
    ],
    "user_was_correct": true,
    "official_rationale": "A identificação facial (Face Identification) resolve a correspondência de 1 para N (busca um rosto dentro de um grupo ou galeria de pessoas). A verificação facial (Face Verification) resolve a correspondência de 1 para 1 (compara se dois rostos pertencem à mesma pessoa física).",
    "explanation_why_correct": "• **C (`face identification`):** Executa correspondência 1:N (busca um rosto em um conjunto seguro de indivíduos cadastrados).\n• **D (`face verification`):** Executa correspondência 1:1 (valida se o rosto de uma foto corresponde ao rosto de um documento de identidade).",
    "explanation_why_incorrect": "• **A: Incorreta.** Custom Vision é voltado para treinar classificadores visuais genéricos de objetos, não para biometria facial.\n• **B: Incorreta.** Atributos faciais detectam presença de óculos, máscara ou sorriso, sem verificar identidade.\n• **E: Incorreta.** 'Find similar faces' busca aparências semelhantes, mas não atesta a identidade formal de um indivíduo.",
    "additional_reading": [
      {
        "title": "What is the Azure Face service?",
        "url": "https://learn.microsoft.com/azure/ai-services/computer-vision/overview-identity"
      }
    ]
  },
  {
    "id": 34,
    "type": "single",
    "category": "Identificar conceitos e recursos de IA",
    "category_en": "Identify AI concepts and capabilities",
    "objective": "1. Identify AI concepts and capabilities",
    "what_it_tests": "Reconhecer cargas de trabalho de mineração de conhecimento (knowledge mining).",
    "question": "Qual tipo de carga de trabalho de inteligência artificial (IA) tem a finalidade principal de tornar pesquisáveis grandes quantidades de dados não estruturados?",
    "options": [
      {
        "id": "A",
        "text": "análise de imagem (image analysis)"
      },
      {
        "id": "B",
        "text": "mineração de conhecimento (knowledge mining)"
      },
      {
        "id": "C",
        "text": "detecção de objetos (object detection)"
      },
      {
        "id": "D",
        "text": "segmentação semântica (semantic segmentation)"
      }
    ],
    "correct_answer": "B",
    "user_attempt": "B",
    "user_was_correct": true,
    "official_rationale": "A mineração de conhecimento (knowledge mining), implementada principalmente pelo Azure AI Search, combina extração de texto, OCR, PLN e indexação vetorial para criar índices pesquisáveis sobre grandes volumes de documentos e dados dispersos.",
    "explanation_why_correct": "A **Mineração de conhecimento (Knowledge mining)** foi concebida para ingerir petabytes de dados brutos (PDFs, relatórios, planilhas), extrair insights por IA e torná-los imediatamente consultáveis.",
    "explanation_why_incorrect": "• **A, C e D: Incorretas.** Visão computacional (análise, detecção e segmentação) processa mídia visual, mas não tem como objetivo principal indexar acervos corporativos para busca de conhecimento.",
    "additional_reading": [
      {
        "title": "Understand knowledge mining - Microsoft Learn",
        "url": "https://learn.microsoft.com/training/modules/explore-knowledge-mining/"
      }
    ]
  },
  {
    "id": 35,
    "type": "multi",
    "category": "Identificar conceitos e recursos de IA",
    "category_en": "Identify AI concepts and capabilities",
    "objective": "1. Identify AI concepts and capabilities",
    "what_it_tests": "Reconhecer as capacidades essenciais de modelos GPT (Generative Pre-trained Transformer).",
    "question": "Quais DUAS funcionalidades são capacidades centrais de um modelo GPT? (Cada resposta correta apresenta uma solução completa).",
    "options": [
      {
        "id": "A",
        "text": "Criar linguagem natural (Create natural language)"
      },
      {
        "id": "B",
        "text": "Detectar dialetos específicos de um idioma"
      },
      {
        "id": "C",
        "text": "Gerar legendas ocultas em tempo real a partir de um vídeo"
      },
      {
        "id": "D",
        "text": "Sintetizar fala com voz acústica (Synthesize speech)"
      },
      {
        "id": "E",
        "text": "Compreender linguagem natural (Understand natural language)"
      }
    ],
    "correct_answer": [
      "A",
      "E"
    ],
    "user_attempt": [
      "A",
      "E"
    ],
    "user_was_correct": true,
    "official_rationale": "Modelos GPT são modelos de fundação baseados em Transformers treinados massivamente para entender as nuances da linguagem natural humana e gerar texto coerente e contextualizado.",
    "explanation_why_correct": "• **A:** Geração de texto fluente e contextualmente rico (criar linguagem natural).\n• **E:** Interpretação semântica profunda de instruções, perguntas e intenções (compreender linguagem natural).",
    "explanation_why_incorrect": "• **C: Incorreta.** Gerar legendas em tempo real de vídeo envolve modelos de reconhecimento de fala acústico (Speech-to-Text).\n• **D: Incorreta.** Síntese de áudio falado é responsabilidade do Text-to-Speech (serviço Azure Speech).\n• **B: Incorreta.** Classificação formal de dialetos acústicos não é o propósito de um GPT.",
    "additional_reading": [
      {
        "title": "What is generative AI? - Microsoft Learn",
        "url": "https://learn.microsoft.com/training/modules/explore-generative-ai/"
      }
    ]
  },
  {
    "id": 36,
    "type": "single",
    "category": "Identificar conceitos e recursos de IA",
    "category_en": "Identify AI concepts and capabilities",
    "objective": "1. Identify AI concepts and capabilities",
    "what_it_tests": "Identificar modelos generativos de geração visual.",
    "question": "Qual modelo de IA generativa é usado para gerar imagens com base em prompts de linguagem natural?",
    "options": [
      {
        "id": "A",
        "text": "DALL-E"
      },
      {
        "id": "B",
        "text": "Embeddings"
      },
      {
        "id": "C",
        "text": "GPT-3.5"
      },
      {
        "id": "D",
        "text": "GPT-4"
      },
      {
        "id": "E",
        "text": "Whisper"
      }
    ],
    "correct_answer": "A",
    "user_attempt": "A",
    "user_was_correct": true,
    "official_rationale": "DALL-E é o modelo generativo pioneiro da OpenAI integrado ao Azure para criação de imagens a partir de descrições textuais.",
    "explanation_why_correct": "O **DALL-E** (atualmente na versão DALL-E 3) converte descrições textuais em imagens fotorrealistas ou ilustrações artísticas.",
    "explanation_why_incorrect": "• **B: Incorreta.** Embeddings convertem texto em vetores de pontos flutuantes.\n• **C e D: Incorretas.** GPT-3.5 e GPT-4 são grandes modelos de linguagem focados em texto e código.\n• **E: Incorreta.** Whisper é um modelo especializado em transcrição e tradução de áudio (Speech-to-Text).",
    "additional_reading": [
      {
        "title": "Azure OpenAI Service models",
        "url": "https://learn.microsoft.com/azure/ai-services/openai/concepts/models"
      }
    ]
  },
  {
    "id": 37,
    "type": "multi",
    "category": "Identificar conceitos e recursos de IA",
    "category_en": "Identify AI concepts and capabilities",
    "objective": "1. Identify AI concepts and capabilities",
    "what_it_tests": "Reconhecer cenários típicos de processamento de linguagem natural (PLN/NLP).",
    "question": "Quais DOIS cenários de carga de trabalho de inteligência artificial são exemplos de processamento de linguagem natural (NLP / PLN)? (Cada resposta correta apresenta uma solução completa).",
    "options": [
      {
        "id": "A",
        "text": "extrair texto manuscrito de imagens online"
      },
      {
        "id": "B",
        "text": "gerar tags e descrições para imagens"
      },
      {
        "id": "C",
        "text": "monitorar o tráfego de rede para picos repentinos"
      },
      {
        "id": "D",
        "text": "realizar análise de sentimento em dados de mídia social"
      },
      {
        "id": "E",
        "text": "traduzir texto entre diferentes idiomas em avaliações de produtos"
      }
    ],
    "correct_answer": [
      "D",
      "E"
    ],
    "user_attempt": [
      "D",
      "E"
    ],
    "user_was_correct": true,
    "official_rationale": "Análise de sentimento (classificar a atitude do consumidor a partir de postagens escritas) e Tradução de texto (converter conteúdo textual entre idiomas) são dois pilares fundamentais do Processamento de Linguagem Natural.",
    "explanation_why_correct": "• **D:** Analisar o sentimento em publicações é um caso clássico de NLP realizado pelo Azure AI Language.\n• **E:** A tradução automática de texto entre idiomas usa NLP por meio do Azure AI Translator.",
    "explanation_why_incorrect": "• **A: Incorreta.** Extração de texto manuscrito de imagens é Optical Character Recognition (OCR), classificado sob Visão Computacional.\n• **B: Incorreta.** Gerar tags a partir de fotos é análise de visão computacional.\n• **C: Incorreta.** Monitorar picos em tráfego de rede é Detecção de Anomalias (Anomaly Detection).",
    "additional_reading": [
      {
        "title": "Explore natural language processing - Microsoft Learn",
        "url": "https://learn.microsoft.com/training/modules/explore-natural-language-processing/"
      }
    ]
  },
  {
    "id": 38,
    "type": "dropdown",
    "category": "Identificar conceitos e recursos de IA",
    "category_en": "Identify AI concepts and capabilities",
    "objective": "1. Identify AI concepts and capabilities",
    "what_it_tests": "Compreender o papel das mensagens de sistema na IA generativa.",
    "question": "Selecione a resposta que completa corretamente a frase:\n\n[ESCOLHA UMA OPÇÃO] pode(m) ser usado(as) para identificar restrições e estilos para as respostas de um modelo de IA generativa.",
    "options": [
      {
        "id": "A",
        "text": "Aterramento de dados (Data grounding)"
      },
      {
        "id": "B",
        "text": "Incorporações (Embeddings)"
      },
      {
        "id": "C",
        "text": "Mensagens do sistema (System messages)"
      },
      {
        "id": "D",
        "text": "Tokenização (Tokenization)"
      }
    ],
    "correct_answer": "C",
    "user_attempt": "B",
    "user_was_correct": false,
    "official_rationale": "As mensagens do sistema (system messages) definem o contexto, o tom, o nível de formalidade e as restrições comportamentais do modelo antes que qualquer interação com o usuário comece.",
    "explanation_why_correct": "As **Mensagens do sistema (System messages)** configuram explicitamente o comportamento do modelo, definindo restrições ('não responda sobre o tema Y') e estilo ('responda em tom formal e em tópicos').",
    "explanation_why_incorrect": "• **B (Sua resposta original): Incorreta.** Embeddings convertem palavras em representações vetoriais para indexação; eles não definem regras nem estilos de resposta de um chatbot.\n• **A: Incorreta.** Data grounding ancora a resposta em documentos factuais da empresa para evitar alucinações.\n• **D: Incorreta.** Tokenização é a divisão do texto em pedaços menores (tokens) para processamento computacional.",
    "additional_reading": [
      {
        "title": "Improve generative AI responses with prompt engineering",
        "url": "https://learn.microsoft.com/training/modules/bp-prompt-engineering/"
      }
    ]
  },
  {
    "id": 39,
    "type": "single",
    "category": "Identificar conceitos e recursos de IA",
    "category_en": "Identify AI concepts and capabilities",
    "objective": "1. Identify AI concepts and capabilities",
    "what_it_tests": "Reconhecer as modalidades suportadas pelo Azure AI Translator.",
    "question": "A qual tipo de tradução o serviço Azure Translator nas Ferramentas do Foundry dá suporte?",
    "options": [
      {
        "id": "A",
        "text": "fala para fala (speech-to-speech)"
      },
      {
        "id": "B",
        "text": "fala para texto (speech-to-text)"
      },
      {
        "id": "C",
        "text": "texto para fala (text-to-speech)"
      },
      {
        "id": "D",
        "text": "texto para texto (text-to-text)"
      }
    ],
    "correct_answer": "D",
    "user_attempt": "B",
    "user_was_correct": false,
    "official_rationale": "O serviço Azure Translator foi construído especificamente para tradução de texto para texto (text-to-text). Traduções que envolvam fala (speech-to-text, text-to-speech ou speech-to-speech) são realizadas pelo serviço Azure Speech (Speech Translation).",
    "explanation_why_correct": "O **Azure Translator** lida exclusivamente com tradução de **texto para texto**. Ele aceita cadeias de caracteres em um idioma e retorna o texto traduzido em centenas de outros idiomas.",
    "explanation_why_incorrect": "• **B (Sua resposta original): Incorreta.** Tradução de voz/áudio falado para texto é uma capacidade do *Azure Speech Translation*, e não do *Azure Translator* puro.\n• **A e C: Incorretas.** Todas as operações de entrada ou saída por voz necessitam do serviço Azure Speech.",
    "additional_reading": [
      {
        "title": "Get started with natural language processing in Azure",
        "url": "https://learn.microsoft.com/training/modules/explore-natural-language-processing/"
      }
    ]
  },
  {
    "id": 40,
    "type": "single",
    "category": "Identificar conceitos e recursos de IA",
    "category_en": "Identify AI concepts and capabilities",
    "objective": "1. Identify AI concepts and capabilities",
    "what_it_tests": "Identificar soluções de visão computacional adequadas para leitura de assinaturas e texto manuscrito.",
    "question": "O que pode ser usado em um sistema de controle de presença capaz de digitalizar e reconhecer assinaturas manuscritas?",
    "options": [
      {
        "id": "A",
        "text": "detecção facial (face detection)"
      },
      {
        "id": "B",
        "text": "classificação de imagem (image classification)"
      },
      {
        "id": "C",
        "text": "detecção de objetos (object detection)"
      },
      {
        "id": "D",
        "text": "reconhecimento óptico de caracteres (OCR)"
      }
    ],
    "correct_answer": "D",
    "user_attempt": "B",
    "user_was_correct": false,
    "official_rationale": "O reconhecimento óptico de caracteres (OCR) é a tecnologia de visão computacional focada em detectar e extrair caracteres de texto impresso e manuscrito de imagens e formulários digitalizados.",
    "explanation_why_correct": "O **OCR (Optical Character Recognition)** é capaz de analisar o traço da caneta e texto manuscrito em listas de presença para digitalização e arquivamento.",
    "explanation_why_incorrect": "• **B (Sua resposta original): Incorreta.** Classificação de imagem apenas diz que a imagem é uma 'folha de papel', mas não extrai o texto ou caracteres da assinatura.\n• **A: Incorreta.** Detecção facial localiza rostos humanos, o que não se aplica a assinaturas em papel.\n• **C: Incorreta.** Detecção de objetos localiza a posição de itens genéricos como canetas ou mesas, mas não lê caracteres alfanuméricos manuscritos.",
    "additional_reading": [
      {
        "title": "Get started with computer vision in Azure - Microsoft Learn",
        "url": "https://learn.microsoft.com/training/modules/explore-computer-vision/"
      }
    ]
  },
  {
    "id": 41,
    "type": "single",
    "category": "Identificar conceitos e recursos de IA",
    "category_en": "Identify AI concepts and capabilities",
    "objective": "1. Identify AI concepts and capabilities",
    "what_it_tests": "Reconhecer recursos de análise e detecção facial.",
    "question": "Qual solução de visão computacional fornece a capacidade de estimar a idade de uma pessoa com base em uma fotografia?",
    "options": [
      {
        "id": "A",
        "text": "detecção facial (facial detection)"
      },
      {
        "id": "B",
        "text": "classificação de imagem (image classification)"
      },
      {
        "id": "C",
        "text": "detecção de objetos (object detection)"
      },
      {
        "id": "D",
        "text": "segmentação semântica (semantic segmentation)"
      }
    ],
    "correct_answer": "A",
    "user_attempt": "D",
    "user_was_correct": false,
    "official_rationale": "A detecção e análise facial localiza rostos humanos e pode prever atributos faciais biométricos e demográficos, incluindo estimativa de idade, gênero e pose da cabeça.",
    "explanation_why_correct": "A **Detecção facial (Facial detection)** analisa as proporções e características do rosto humano, incluindo a estimativa aproximada de idade.",
    "explanation_why_incorrect": "• **D (Sua resposta original): Incorreta.** Segmentação semântica apenas rotula quais pixels pertencem ao corpo humano versus fundo, sem estimar atributos de idade.\n• **B: Incorreta.** Classificação de imagem diria que a foto contém uma 'pessoa', sem análise minuciosa de idade facial.\n• **C: Incorreta.** Detecção de objetos traçaria uma caixa ao redor da pessoa, sem extrair idade.",
    "additional_reading": [
      {
        "title": "Introduction to computer vision concepts",
        "url": "https://learn.microsoft.com/training/modules/explore-computer-vision/"
      }
    ]
  },
  {
    "id": 42,
    "type": "single",
    "category": "Identificar conceitos e recursos de IA",
    "category_en": "Identify AI concepts and capabilities",
    "objective": "1. Identify AI concepts and capabilities",
    "what_it_tests": "Identificar a plataforma dedicada da Microsoft para inteligência artificial conversacional.",
    "question": "Qual tipo de serviço fornece uma plataforma dedicada para inteligência artificial conversacional (CAI)?",
    "options": [
      {
        "id": "A",
        "text": "Azure AI Bot Service"
      },
      {
        "id": "B",
        "text": "Azure Document Intelligence no Foundry Tools"
      },
      {
        "id": "C",
        "text": "Azure Vision no Foundry Tools"
      },
      {
        "id": "D",
        "text": "Azure Translator no Foundry Tools"
      }
    ],
    "correct_answer": "A",
    "user_attempt": "D",
    "user_was_correct": false,
    "official_rationale": "O Azure AI Bot Service fornece uma plataforma abrangente para criar, testar, implantar e conectar bots de conversação inteligentes capazes de interagir com usuários através de múltiplos canais de comunicação (Teams, Web Chat, Slack).",
    "explanation_why_correct": "O **Azure AI Bot Service** é a plataforma de ponta a ponta da Microsoft para construção de agentes e assistentes conversacionais (bots).",
    "explanation_why_incorrect": "• **D (Sua resposta original): Incorreta.** O Azure Translator apenas traduz textos entre idiomas, não gerenciando fluxos de diálogo, estados de conversa ou canais de chat.\n• **B: Incorreta.** Document Intelligence extrai texto e tabelas de PDFs e formulários digitalizados.\n• **C: Incorreta.** Azure Vision processa fotografias e vídeos.",
    "additional_reading": [
      {
        "title": "Understand natural language processing - Microsoft Learn",
        "url": "https://learn.microsoft.com/training/modules/explore-natural-language-processing/"
      }
    ]
  },
  {
    "id": 43,
    "type": "single",
    "category": "Identificar conceitos e recursos de IA",
    "category_en": "Identify AI concepts and capabilities",
    "objective": "1. Identify AI concepts and capabilities",
    "what_it_tests": "Compreender os princípios de IA Responsável da Microsoft.",
    "question": "Qual princípio da inteligência artificial responsável (Responsible AI) envolve avaliar e mitigar o viés introduzido pelas características ou atributos de um modelo?",
    "options": [
      {
        "id": "A",
        "text": "responsabilidade / prestação de contas (accountability)"
      },
      {
        "id": "B",
        "text": "imparcialidade / justiça (fairness)"
      },
      {
        "id": "C",
        "text": "privacidade e segurança (privacy)"
      },
      {
        "id": "D",
        "text": "transparência (transparency)"
      }
    ],
    "correct_answer": "B",
    "user_attempt": "B",
    "user_was_correct": true,
    "official_rationale": "O princípio de Imparcialidade (Fairness) assegura que os sistemas de IA tratem todas as pessoas de maneira justa e sem discriminação por gênero, raça, etnia ou idade, detectando e corrigindo vieses nos dados e nas features de treino.",
    "explanation_why_correct": "A **Imparcialidade (Fairness)** é o princípio cujo foco explícito é prevenir preconceitos e decisões discriminatórias originadas por viés algorítmico.",
    "explanation_why_incorrect": "• **A: Incorreta.** *Accountability* (responsabilidade) garante que desenvolvedores e empresas permaneçam responsáveis pelo impacto e legalidade de suas soluções de IA.\n• **C: Incorreta.** *Privacy* assegura a conformidade com leis de proteção de dados e privacidade pessoal.\n• **D: Incorreta.** *Transparency* garante que o funcionamento, limitações e propósito do modelo sejam compreensíveis para humanos.",
    "additional_reading": [
      {
        "title": "Understand Responsible AI - Microsoft Learn",
        "url": "https://learn.microsoft.com/training/modules/explore-responsible-ai/"
      }
    ]
  },
  {
    "id": 44,
    "type": "single",
    "category": "Identificar conceitos e recursos de IA",
    "category_en": "Identify AI concepts and capabilities",
    "objective": "1. Identify AI concepts and capabilities",
    "what_it_tests": "Reconhecer cenários de classificação de imagem em aplicações médicas.",
    "question": "O que permite identificar e categorizar diferentes tipos de fraturas ósseas em imagens de raio-X?",
    "options": [
      {
        "id": "A",
        "text": "inteligência artificial conversacional (conversational AI)"
      },
      {
        "id": "B",
        "text": "detecção facial (facial detection)"
      },
      {
        "id": "C",
        "text": "classificação de imagem (image classification)"
      },
      {
        "id": "D",
        "text": "detecção de objetos (object detection)"
      }
    ],
    "correct_answer": "C",
    "user_attempt": "B",
    "user_was_correct": false,
    "official_rationale": "A classificação de imagem avalia a imagem de raio-X como um todo ou em regiões de interesse para categorizá-la dentro de classes pré-definidas de fraturas (ex: 'fratura cominutiva', 'fratura em galho verde', 'sem fratura').",
    "explanation_why_correct": "Modelos de **Classificação de imagem (Image classification)** são treinados com milhares de imagens rotuladas para prever qual categoria de diagnóstico melhor descreve a fratura observada.",
    "explanation_why_incorrect": "• **B (Sua resposta original): Incorreta.** Detecção facial é para encontrar rostos humanos; não tem nenhuma aplicação para ossos ou fraturas médicas.\n• **A: Incorreta.** IA conversacional é voltada para chat e bots de texto.\n• **D: Incorreta.** Embora detecção de objetos possa marcar o local da lesão com retângulos, o ato central de identificar a tipologia da fratura dentre categorias diagnósticas é caracterizado primariamente como classificação de imagem nas questões da Microsoft.",
    "additional_reading": [
      {
        "title": "Introduction to computer vision concepts",
        "url": "https://learn.microsoft.com/training/modules/explore-computer-vision/"
      }
    ]
  },
  {
    "id": 45,
    "type": "multi",
    "category": "Identificar conceitos e recursos de IA",
    "category_en": "Identify AI concepts and capabilities",
    "objective": "1. Identify AI concepts and capabilities",
    "what_it_tests": "Identificar os modelos de domínio especializados pré-treinados do Azure AI Vision.",
    "question": "Quais DOIS modelos de domínio especializados são suportados pelo Azure Vision no Foundry Tools ao categorizar uma imagem? (Cada resposta correta apresenta uma solução completa).",
    "options": [
      {
        "id": "A",
        "text": "celebridades (celebrities)"
      },
      {
        "id": "B",
        "text": "tipos de imagem (image types)"
      },
      {
        "id": "C",
        "text": "pontos turísticos / monumentos (landmarks)"
      },
      {
        "id": "D",
        "text": "people_"
      },
      {
        "id": "E",
        "text": "people_group"
      }
    ],
    "correct_answer": [
      "A",
      "C"
    ],
    "user_attempt": [
      "A",
      "C"
    ],
    "user_was_correct": true,
    "official_rationale": "Ao categorizar imagens, o serviço Azure Computer Vision oferece suporte integrado a dois modelos de domínio especializados de renome mundial: celebridades (pessoas famosas da cultura, ciência e esportes) e pontos turísticos / monumentos (landmarks famosos como Torre Eiffel, Cristo Redentor).",
    "explanation_why_correct": "• **A (`celebrities`):** Reconhece milhares de personalidades notórias mundiais.\n• **C (`landmarks`):** Identifica monumentos históricos e atrações geográficas famosas automaticamente.",
    "explanation_why_incorrect": "• **B: Incorreta.** 'Image types' identifica características técnicas (se é clip art ou desenho em linha), não sendo um modelo de domínio de objetos do mundo real.\n• **D e E: Incorretas.** 'people_' e 'people_group' são rótulos de taxonomia genéricos, não modelos de domínio especializados.",
    "additional_reading": [
      {
        "title": "Introduction to computer vision concepts",
        "url": "https://learn.microsoft.com/training/modules/explore-computer-vision/"
      }
    ]
  },
  {
    "id": 46,
    "type": "single",
    "category": "Identificar conceitos e recursos de IA",
    "category_en": "Identify AI concepts and capabilities",
    "objective": "1. Identify AI concepts and capabilities",
    "what_it_tests": "Conhecer as etapas do framework de gerenciamento de risco para IA generativa responsável (NIST / Microsoft).",
    "question": "De acordo com o AI Risk Management Framework do NIST e da Microsoft, qual é o primeiro estágio a ser considerado ao desenvolver uma solução de IA generativa responsável?",
    "options": [
      {
        "id": "A",
        "text": "Identificar danos potenciais (Identify potential harms)"
      },
      {
        "id": "B",
        "text": "Medir a presença de danos potenciais (Measure the presence of potential harms)"
      },
      {
        "id": "C",
        "text": "Mitigar danos potenciais (Mitigate potential harms)"
      },
      {
        "id": "D",
        "text": "Operar a solução (Operate the solution)"
      }
    ],
    "correct_answer": "A",
    "user_attempt": "A",
    "user_was_correct": true,
    "official_rationale": "O ciclo de vida de IA responsável da Microsoft/NIST segue uma ordem lógica estrita de quatro etapas: 1. Identificar (Identify) os danos potenciais -> 2. Medir (Measure) a severidade e frequência -> 3. Mitigar (Mitigate) por meio de filtros e guardrails -> 4. Operar (Operate) com monitoramento contínuo.",
    "explanation_why_correct": "Antes de medir ou aplicar filtros, você deve primeiro **Identificar os danos potenciais (Identify potential harms)** específicos para o seu caso de uso (ex: vazamento de dados, desinformação, preconceito).",
    "explanation_why_incorrect": "• **B: Incorreta.** Medir é o segundo estágio, realizado após os riscos terem sido identificados.\n• **C: Incorreta.** Mitigar é o terceiro estágio, onde são aplicados os guardrails.\n• **D: Incorreta.** Operar é o quarto estágio, após o sistema entrar em produção.",
    "additional_reading": [
      {
        "title": "Responsible generative AI - Microsoft Learn",
        "url": "https://learn.microsoft.com/training/modules/explore-generative-ai/"
      }
    ]
  },
  {
    "id": 47,
    "type": "single",
    "category": "Identificar conceitos e recursos de IA",
    "category_en": "Identify AI concepts and capabilities",
    "objective": "1. Identify AI concepts and capabilities",
    "what_it_tests": "Reconhecer a aplicação de detecção de objetos no monitoramento de tráfego urbano.",
    "question": "O que permite identificar diferentes tipos de veículos (como carro, ônibus ou ciclista) em imagens de monitoramento de tráfego, delimitando suas posições?",
    "options": [
      {
        "id": "A",
        "text": "classificação de imagem (image classification)"
      },
      {
        "id": "B",
        "text": "regressão linear (linear regression)"
      },
      {
        "id": "C",
        "text": "detecção de objetos (object detection)"
      },
      {
        "id": "D",
        "text": "reconhecimento óptico de caracteres (OCR)"
      }
    ],
    "correct_answer": "C",
    "user_attempt": "C",
    "user_was_correct": true,
    "official_rationale": "A detecção de objetos localiza simultaneamente múltiplos veículos em uma cena de tráfego, fornecendo suas classes individuais e caixas delimitadoras que representam suas posições espaciais na via.",
    "explanation_why_correct": "A **Detecção de objetos (Object detection)** é a única técnica que encontra múltiplos objetos distintos na mesma imagem e aponta exatamente onde cada um está.",
    "explanation_why_incorrect": "• **A: Incorreta.** Classificação de imagem diria apenas que a imagem é de 'trânsito', sem isolar nem demarcar cada carro individualmente.\n• **B: Incorreta.** Regressão linear é um algoritmo estatístico para previsão de números contínuos (como prever o preço de uma casa).\n• **D: Incorreta.** OCR lê placas de veículos ou placas de trânsito escritas, mas não detecta a geometria física do ônibus ou ciclista.",
    "additional_reading": [
      {
        "title": "Detect objects in images with Custom Vision",
        "url": "https://learn.microsoft.com/training/modules/detect-objects-images-custom-vision/"
      }
    ]
  },
  {
    "id": 48,
    "type": "single",
    "category": "Identificar conceitos e recursos de IA",
    "category_en": "Identify AI concepts and capabilities",
    "objective": "1. Identify AI concepts and capabilities",
    "what_it_tests": "Identificar o recurso de análise de sentimento para feedback de usuários.",
    "question": "Qual recurso do Azure AI Service for Language pode ser usado para analisar avaliações de usuários online para identificar se eles veem um produto de forma positiva ou negativa?",
    "options": [
      {
        "id": "A",
        "text": "extração de frases-chave (key phrase extraction)"
      },
      {
        "id": "B",
        "text": "detecção de idioma (language detection)"
      },
      {
        "id": "C",
        "text": "reconhecimento de entidades nomeadas (named entity recognition)"
      },
      {
        "id": "D",
        "text": "análise de sentimento (sentiment analysis)"
      }
    ],
    "correct_answer": "D",
    "user_attempt": "B",
    "user_was_correct": false,
    "official_rationale": "A análise de sentimento (Sentiment analysis) inspeciona textos de avaliações e retorna rótulos de sentimento (positivo, negativo, neutro ou misto) com índices de confiança, permitindo quantificar o nível de satisfação do cliente.",
    "explanation_why_correct": "A **Análise de sentimento (Sentiment analysis)** foi criada especificamente para avaliar a opinião emocional expressa pelo consumidor.",
    "explanation_why_incorrect": "• **B (Sua resposta original): Incorreta.** A detecção de idioma apenas informa se o comentário foi escrito em português, inglês ou espanhol, sem revelar se a crítica ao produto foi elogiosa ou destrutiva.\n• **A: Incorreta.** Extração de frases-chave ressalta os tópicos citados, mas não afere se foram elogiados ou criticados.\n• **C: Incorreta.** Reconhecimento de entidades nomeadas encontra menções a marcas ou pessoas.",
    "additional_reading": [
      {
        "title": "What is sentiment analysis in Azure?",
        "url": "https://learn.microsoft.com/azure/ai-services/language-service/sentiment-opinion-mining/overview"
      }
    ]
  },
  {
    "id": 49,
    "type": "single",
    "category": "Identificar conceitos e recursos de IA",
    "category_en": "Identify AI concepts and capabilities",
    "objective": "1. Identify AI concepts and capabilities",
    "what_it_tests": "Compreender técnicas fundamentais de PLN como vetorização e embeddings.",
    "question": "Qual técnica de processamento de linguagem natural (NLP) atribui valores numéricos a palavras como 'planta' e 'flor', de modo que fiquem mais próximas uma da outra em um espaço vetorial do que uma palavra como 'avião'?",
    "options": [
      {
        "id": "A",
        "text": "análise de frequência (frequency analysis)"
      },
      {
        "id": "B",
        "text": "lematização (lemmatization)"
      },
      {
        "id": "C",
        "text": "N-gramas (N-grams)"
      },
      {
        "id": "D",
        "text": "vetorização / incorporação (vectorization)"
      }
    ],
    "correct_answer": "D",
    "user_attempt": "D",
    "user_was_correct": true,
    "official_rationale": "A vetorização (vectorization / word embeddings) projeta palavras em um espaço n-dimensional com base em coocorrência e contexto semântico. Palavras com significados próximos compartilham coordenadas geométricas vizinhas, permitindo operações de similaridade matemática.",
    "explanation_why_correct": "A **Vetorização (Vectorization)** captura a proximidade semântica no espaço vetorial multidimensional, fazendo com que conceitos biológicos afins fiquem próximos entre si e distantes de termos de aviação.",
    "explanation_why_incorrect": "• **A: Incorreta.** A análise de frequência apenas conta quantas vezes cada palavra ocorre no texto (ex: TF-IDF), sem entender relações semânticas intrínsecas.\n• **B: Incorreta.** Lematização reduz palavras à sua forma raiz básica de dicionário (ex: 'correndo' -> 'correr').\n• **C: Incorreta.** N-gramas são agrupamentos contíguos de N palavras sequenciais.",
    "additional_reading": [
      {
        "title": "Introduction to NLP concepts - Microsoft Learn",
        "url": "https://learn.microsoft.com/training/modules/explore-natural-language-processing/"
      }
    ]
  },
  {
    "id": 50,
    "type": "single",
    "category": "Identificar conceitos e recursos de IA",
    "category_en": "Identify AI concepts and capabilities",
    "objective": "1. Identify AI concepts and capabilities",
    "what_it_tests": "Conhecer o recurso de vinculação de entidades (Entity Linking) do Azure AI Language.",
    "question": "Qual recurso do serviço Azure Language nas Ferramentas do Foundry inclui funcionalidade que retorna links para sites externos (como a Wikipédia) para desambiguar termos identificados em um texto?",
    "options": [
      {
        "id": "A",
        "text": "reconhecimento de entidades (entity recognition / linking)"
      },
      {
        "id": "B",
        "text": "extração de frases-chave (key phrase extraction)"
      },
      {
        "id": "C",
        "text": "detecção de idioma (language detection)"
      },
      {
        "id": "D",
        "text": "análise de sentimento (sentiment analysis)"
      }
    ],
    "correct_answer": "A",
    "user_attempt": "B",
    "user_was_correct": false,
    "official_rationale": "O reconhecimento e vinculação de entidades (Entity Linking / Entity Recognition) identifica menções a entidades em um texto e resolve ambiguidades vinculando-as a verbetes de uma base de conhecimento confiável (como a Wikipédia).",
    "explanation_why_correct": "O **Reconhecimento de entidades (especificamente o recurso Entity Linking)** resolve ambiguidades (ex: se 'Marte' refere-se ao planeta ou ao deus romano) fornecendo a URL exata do artigo de referência correspondente.",
    "explanation_why_incorrect": "• **B (Sua resposta original): Incorreta.** A extração de frases-chave lista os conceitos centrais, mas nunca inclui links de enciclopédias ou sites externos.\n• **C: Incorreta.** Detecção de idioma apenas aponta o código do idioma.\n• **D: Incorreta.** Análise de sentimento apenas afere se a frase é positiva ou negativa.",
    "additional_reading": [
      {
        "title": "Introduction to NLP concepts - Microsoft Learn",
        "url": "https://learn.microsoft.com/training/modules/explore-natural-language-processing/"
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SIMULADO_QUESTIONS };
}
