# Cromiun Sound

Workstation macOS local para criar música profissional com modelos de voz treinados a partir da sua própria voz.

## Recursos

- **Treinamento de Voz**: Treine modelos vocais personalizados a partir de datasets de áudio
- **Conversão de Voz**: Converta vocais para soar como seu modelo treinado
- **Preparação de Dataset**: Ferramentas para importar e preparar áudios para treino
- **Interface Nativa**: Built with SwiftUI para macOS com experiência nativa

## Requisitos

- macOS 14 (Sonoma) ou superior
- Xcode 15+
- Python 3.10+ (para RVC)
- ffmpeg (via Homebrew)

## Instalação

1. Clone o repositório
2. Configure o ambiente RVC:
   ```bash
   # Crie um ambiente virtual Python
   python -m venv venv
   source venv/bin/activate
   
   # Instale as dependências do RVC
   pip install -r requirements.txt
   ```
3. Instale o ffmpeg:
   ```bash
   brew install ffmpeg
   ```
4. Abra o projeto no Xcode:
   ```bash
   open CromiunSound.xcodeproj
   ```
5. Configure os caminhos em Settings (Python do RVC, script, ffmpeg)

## Configuração

No app, vá para **Settings** e configure:

- **ffmpegPath**: Caminho para o binário ffmpeg
- **rvcPythonPath**: Caminho para o Python do ambiente virtual RVC
- **rvcScriptPath**: Caminho para o script principal do RVC

## Uso

### 1. Importar Dataset
Vá para **Voice Studio** e importe uma pasta com áudios da sua voz.

### 2. Preparar Dataset
O app ira normalizar os áudios (mono, 40kHz) para o treino.

### 3. Treinar Modelo
Execute o treino via terminal (consulte a documentação) ou use o botão na interface.

### 4. Converter Voz
Selecione um modelo treinado e converta áudios para soar como sua voz.

## Arquitetura

O projeto segue uma arquitetura limpa com as seguintes camadas:

- **Domain**: Entidades (Dataset, VoiceModel, Song) e definicoes de Jobs
- **Services**: Orquestração de fluxos de negócio
- **Bridges**: Integração com ferramentas externas (RVC, FFmpeg)
- **UI**: Interfaces SwiftUI

Consulte `CromiunSound-Architecture-v3.md` para detalhes completos.

## Licença

MIT License
