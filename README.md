# SauceDemo E2E Tests

![Playwright](https://img.shields.io/badge/Playwright-1.59.1-45ba4c?style=flat-square&logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-25.x-339933?style=flat-square&logo=nodedotjs&logoColor=white)

---

[English](#english) | [Português](#português)

---

## English

### Project Overview

End-to-end (E2E) automated tests for [SauceDemo](https://www.saucedemo.com), a demo e-commerce web application. The test suite covers critical user flows including authentication, product browsing, inventory item details, and checkout.

### Tech Stack

- **Playwright** - Browser automation framework
- **TypeScript** - Type-safe test development
- **Node.js** - Runtime environment
- **GitHub Actions** - CI/CD pipeline
- **Faker** - Deterministic fake data generation for checkout forms

### Project Structure

```
SauceDemoE2E/
├── e2e/                          # Test specifications
│   ├── login.spec.ts             # Login flow tests (12)
│   ├── products.spec.ts          # Products page tests (17)
│   ├── checkout.spec.ts          # Checkout flow tests (27)
│   └── inventory_item.spec.ts    # Inventory item detail tests (9)
├── page_objects/                 # Page Object Model
│   ├── login_page.ts
│   ├── products_page.ts
│   ├── checkout_page.ts
│   └── inventory_item_page.ts
├── fixtures/
│   └── index.ts                  # Custom fixtures + expect
├── helpers/
│   └── data_factory.ts           # Faker-based test data factory
├── playwright.config.ts          # Test configuration
└── .github/workflows/
    └── playwright.yml            # CI/CD pipeline
```

**Total: 65 tests per browser (195 across Chromium, Firefox, WebKit)**

### Test Coverage

**Login Flow (`login.spec.ts`) — 12 tests**
- Form field presence and visibility
- Empty field validation (username, password, both)
- Invalid credentials handling
- Locked user account handling
- Successful login
- Error message dismissal

**Products Page (`products.spec.ts`) — 17 tests**
- Navigation after successful login
- Side menu functionality (open, close, logout)
- Product list display (6 items)
- Product sorting: A-Z, Z-A, Price Low-High, Price High-Low
- Add/Remove toggles with cart badge updates

**Checkout Flow (`checkout.spec.ts`) — 27 tests**
- Continue shopping returns to products
- Product info in cart (name, description, price, quantity)
- Cart persistence after navigation
- Adding 1-6 products to cart with overview validation
- Checkout page elements and form navigation
- Remove product from checkout
- Empty field validation (first name, last name, postal code)
- Cancel from Your Information and Overview pages
- Complete checkout flow with Finish and Back Home

**Inventory Item (`inventory_item.spec.ts`) — 9 tests**
- Product detail page displays correct name, price, and description (all 6 items)
- Back to Products button
- Add to cart from detail page with badge update
- Remove from cart from detail page

### Key Features

- **Page Object Model (POM)**: Encapsulates page-specific locators and actions for maintainability and reusability
- **Custom Fixtures**: Shared authentication flow and page object injection across test files
- **Data Factory**: Deterministic fake data via Faker (seeded) for checkout forms
- **Multi-browser Testing**: Chromium, Firefox, and WebKit
- **CI/CD Integration**: Automated execution on push and pull requests via GitHub Actions
- **HTML Reports**: Built-in Playwright reporter for test results visualization
- **Screenshots & Video**: Captured on failure and retry for debugging
- **Trace Viewer**: Trace recording on first retry for deep failure analysis

### Running Tests

```bash
# Install dependencies
npm install
npx playwright install --with-deps

# Run all tests headlessly (default)
npx playwright test

# Run with browser UI visible
npm run test:headed

# Run in debug mode (Playwright Inspector)
npm run test:debug

# Run only on Chromium
npm run test:chromium

# Run on all three browsers explicitly
npm run test:all
```

### CI/CD

Tests run automatically on every push and pull request to `main`/`master` branches. The pipeline runs all 65 tests across Chromium, Firefox, and WebKit with 2 retries on failure. Reports and video artifacts are available for 30 days as GitHub Actions artifacts.

---

## Português

### Visão Geral do Projeto

Testes automatizados end-to-end (E2E) para o [SauceDemo](https://www.saucedemo.com), uma aplicação web demo de e-commerce. O conjunto de testes cobre fluxos críticos do usuário, incluindo autenticação, navegação de produtos, detalhes de itens e checkout.

### Stack Tecnológica

- **Playwright** - Framework de automação de navegadores
- **TypeScript** - Desenvolvimento de testes com tipagem segura
- **Node.js** - Ambiente de execução
- **GitHub Actions** - Pipeline de CI/CD
- **Faker** - Geração determinística de dados fictícios para formulários

### Estrutura do Projeto

```
SauceDemoE2E/
├── e2e/                          # Especificações de teste
│   ├── login.spec.ts             # Testes de login (12)
│   ├── products.spec.ts          # Testes de produtos (17)
│   ├── checkout.spec.ts          # Testes de checkout (27)
│   └── inventory_item.spec.ts    # Testes de detalhes do item (9)
├── page_objects/                 # Page Object Model
│   ├── login_page.ts
│   ├── products_page.ts
│   ├── checkout_page.ts
│   └── inventory_item_page.ts
├── fixtures/
│   └── index.ts                  # Fixtures personalizados + expect
├── helpers/
│   └── data_factory.ts           # Fábrica de dados com Faker
├── playwright.config.ts          # Configuração de testes
└── .github/workflows/
    └── playwright.yml            # Pipeline de CI/CD
```

**Total: 65 testes por browser (195 entre Chromium, Firefox, WebKit)**

### Cobertura de Testes

**Fluxo de Login (`login.spec.ts`) — 12 testes**
- Presença e visibilidade dos campos do formulário
- Validação de campos vazios (username, password, ambos)
- Tratamento de credenciais inválidas
- Tratamento de conta de usuário bloqueada
- Login com sucesso
- Dispensação de mensagens de erro

**Página de Produtos (`products.spec.ts`) — 17 testes**
- Navegação após login com sucesso
- Funcionalidade do menu lateral (abrir, fechar, logout)
- Exibição da lista de produtos (6 itens)
- Ordenação de produtos: A-Z, Z-A, Preço Menor-Maior, Preço Maior-Menor
- Alternância Adicionar/Remover com atualização do badge do carrinho

**Fluxo de Checkout (`checkout.spec.ts`) — 27 testes**
- Botão "Continue Shopping" retorna aos produtos
- Informações do produto no carrinho (nome, descrição, preço, quantidade)
- Persistência do carrinho após navegação
- Adicionar 1-6 produtos ao carrinho com validação do Overview
- Elementos da página de checkout e navegação do formulário
- Remover produto do checkout
- Validação de campos vazios (nome, sobrenome, CEP)
- Cancelar das páginas Your Information e Overview
- Fluxo completo de finalização com Finish e Back Home

**Detalhes do Item (`inventory_item.spec.ts`) — 9 testes**
- Página de detalhes exibe nome, preço e descrição corretos (todos os 6 itens)
- Botão "Back to Products"
- Adicionar ao carrinho pela página de detalhes com atualização do badge
- Remover do carrinho pela página de detalhes

### Funcionalidades Principais

- **Page Object Model (POM)**: Encapsula localizadores e ações específicos de cada página para manutenibilidade e reusabilidade
- **Fixtures Personalizados**: Injeção de página e autenticação compartilhada entre arquivos de teste
- **Data Factory**: Dados fictícios determinísticos via Faker (com semente) para formulários de checkout
- **Testes Multi-navegador**: Chromium, Firefox e WebKit
- **Integração CI/CD**: Execução automatizada em push e pull requests via GitHub Actions
- **Relatórios HTML**: Reporter nativo do Playwright para visualização dos resultados
- **Screenshots & Vídeo**: Capturados em falha e retry para depuração
- **Trace Viewer**: Gravação de trace no primeiro retry para análise profunda de falhas

### Executando os Testes

```bash
# Instalar dependências
npm install
npx playwright install --with-deps

# Executar todos os testes headless (padrão)
npx playwright test

# Executar com interface do navegador visível
npm run test:headed

# Executar em modo debug (Playwright Inspector)
npm run test:debug

# Executar apenas no Chromium
npm run test:chromium

# Executar nos três navegadores explicitamente
npm run test:all
```

### CI/CD

Os testes são executados automaticamente a cada push e pull request para as branches `main`/`master`. O pipeline executa todos os 65 testes nos navegadores Chromium, Firefox e WebKit com 2 retries em caso de falha. Relatórios e artefatos de vídeo ficam disponíveis por 30 dias como artefatos do GitHub Actions.