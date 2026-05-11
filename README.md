# SauceDemo E2E Tests

![Playwright](https://img.shields.io/badge/Playwright-1.59.1-45ba4c?style=flat-square&logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-25.x-339933?style=flat-square&logo=nodedotjs&logoColor=white)

---

[English](#english) | [Português](#português)

---

## English

### Project Overview

End-to-end (E2E) automated tests for [SauceDemo](https://www.saucedemo.com), a demo e-commerce web application. The test suite covers critical user flows including authentication and product browsing.

### Tech Stack

- **Playwright** - Browser automation framework
- **TypeScript** - Type-safe test development
- **Node.js** - Runtime environment
- **GitHub Actions** - CI/CD pipeline

### Project Structure

```
SauceDemoE2E/
├── e2e/                     # Test specifications
│   ├── login.spec.ts        # Login flow tests
│   └── products.spec.ts     # Products page tests
├── page_objects/            # Page Object Model
│   ├── login_page.ts
│   └── products_page.ts
├── fixtures/
│   └── index.ts             # Custom fixtures
├── playwright.config.ts     # Test configuration
└── .github/workflows/
    └── playwright.yml       # CI/CD pipeline
```

### Test Coverage

**Login Flow (`login.spec.ts`)**
- Form field presence and visibility
- Empty field validation (username, password, both)
- Invalid credentials handling
- Locked user account handling
- Successful login
- Error message dismissal

**Products Page (`products.spec.ts`)**
- Navigation after successful login
- Side menu functionality (open, close, logout)
- Product list display (6 items)
- Product sorting: A-Z, Z-A, Price Low-High, Price High-Low

### Key Features

- **Page Object Model (POM)**: Encapsulates page-specific locators and actions for maintainability and reusability
- **Custom Fixtures**: Shared authentication flow across test files
- **Multi-browser Testing**: Chromium, Firefox, and WebKit
- **CI/CD Integration**: Automated execution on push and pull requests via GitHub Actions
- **HTML Reports**: Built-in Playwright reporter for test results visualization

### Running Tests

```bash
npm install
npx playwright install --with-deps
npx playwright test
```

### CI/CD

Tests run automatically on every push and pull request to `main`/`master` branches. Reports are available for 30 days as GitHub Actions artifacts.

---

## Português

### Visão Geral do Projeto

Testes automatizados end-to-end (E2E) para o [SauceDemo](https://www.saucedemo.com), uma aplicação web demo de e-commerce. O conjunto de testes cobre fluxos críticos do usuário, incluindo autenticação e navegação de produtos.

### Stack Tecnológica

- **Playwright** - Framework de automação de navegadores
- **TypeScript** - Desenvolvimento de testes com tipagem segura
- **Node.js** - Ambiente de execução
- **GitHub Actions** - Pipeline de CI/CD

### Estrutura do Projeto

```
SauceDemoE2E/
├── e2e/                     # Especificações de teste
│   ├── login.spec.ts        # Testes do fluxo de login
│   └── products.spec.ts     # Testes da página de produtos
├── page_objects/            # Page Object Model
│   ├── login_page.ts
│   └── products_page.ts
├── fixtures/
│   └── index.ts             # Fixtures personalizados
├── playwright.config.ts     # Configuração de testes
└── .github/workflows/
    └── playwright.yml       # Pipeline de CI/CD
```

### Cobertura de Testes

**Fluxo de Login (`login.spec.ts`)**
- Presença e visibilidade dos campos do formulário
- Validação de campos vazios (username, password, ambos)
- Tratamento de credenciais inválidas
- Tratamento de conta de usuário bloqueada
- Login com sucesso
- Dispensação de mensagens de erro

**Página de Produtos (`products.spec.ts`)**
- Navegação após login com sucesso
- Funcionalidade do menu lateral (abrir, fechar, logout)
- Exibição da lista de produtos (6 itens)
- Ordenação de produtos: A-Z, Z-A, Preço Menor-Maior, Preço Maior-Menor

### Funcionalidades Principais

- **Page Object Model (POM)**: Encapsula localizadores e ações específicos de cada página para manutenibilidade e reusabilidade
- **Fixtures Personalizados**: Fluxo de autenticação compartilhado entre arquivos de teste
- **Testes Multi-navegador**: Chromium, Firefox e WebKit
- **Integração CI/CD**: Execução automatizada em push e pull requests via GitHub Actions
- **Relatórios HTML**: Reporter nativo do Playwright para visualização dos resultados

### Executando os Testes

```bash
npm install
npx playwright install --with-deps
npx playwright test
```

### CI/CD

Os testes são executados automaticamente a cada push e pull request para as branches `main`/`master`. Relatórios ficam disponíveis por 30 dias como artefatos do GitHub Actions.
