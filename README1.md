# Cronicas de Shamayin

Monorepo principal do projeto Shamayin.

Estado de referencia: `2026-03-18`.

## Modelo Operacional

O projeto segue o [`Modelo Shamayin`](/./docs/MODELO_SHAMAYIN.md):

- `codex-first`
- WIP baixo
- integracao continua em fatias pequenas
- done por sistema com gate e smoke
- drift entre runtime, docs e Codex tratado como defeito real

## Arquitetura Atual

### `migracao/Unity` (Shell Nativo + Core Gameplay)

- **Unity 6** e o shell nativo completo: sign-in, sign-out, browser callback, desktop-token exchange.
- Boot direto na cena `OS_Launcher`.
- Implementa o mundo, fisica e visual 3D.
- Credenciais: `.agent/rules/GEMINI.md`, `migracao/Unity/README.md`, `migracao/Unity/Docs/migration-handoff-unity-os.md`.

### `site/Portal/Portal-de-Vilon` (Legado/Web)

- App principal para jogador (Web) em Next.js 16.
- Servia como base para o antigo `Celestial-Launcher` (Electron).

### `site/Core/Zebul-Nucleo`

- Nucleo compartilhado de tipos, auth e contratos (JS/TS).

---

## Execucao local

### Unity (Shell Nativo)

#### Executar no Editor
1. Abra a pasta `migracao/Unity` no Unity Editor (Versão 6+).
2. Certifique-se de que os contratos em `Assets/Shamayin/Scripts/Shared` estao sincronizados.
3. Execute a cena `OS_Launcher` para boot autenticado.

#### Build Standalone
```bash
# Validate local .NET path on macOS
export PATH="/usr/local/share/dotnet/x64:$PATH"

# Build automatizado
.\Build-Automated.ps1 -UnityBuild
```

### WebApp (Site/Legado)

#### Instalar dependencias
```bash
pnpm install
```

#### WebApp principal
```bash
npm --prefix site/Portal/Portal-de-Vilon run dev
```

---

## Validacao canonica

### Unity Game
Rode o `Test Runner` dentro do Unity Editor ou valide via Play Mode na cena `OS_Launcher`.

---

## 📚 Documentação Principal

- [Índice de Documentação](docs/INDEX.md)
- [Modelo Shamayin](docs/MODELO_SHAMAYIN.md)
- [Diretrizes para Agentes](AGENTS.md)
- [Status do Projeto](docs/STATUS_CONSOLIDADO_2026.md)
- [Migração Unity OS](migracao/Unity/Docs/migration-handoff-unity-os.md)
