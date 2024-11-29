### English:

# Project Setup and Running Instructions

To run this project, follow the steps below. This guide assumes that you don't have any tools installed yet.

## Prerequisites

1. **Install Node.js and npm**:  
   First, you need to install [Node.js](https://nodejs.org/). This will also install `npm` (Node Package Manager), which is required to install dependencies.

2. **Install Vite**:  
   Vite is a build tool used in this project. You can install it globally or use it via `npm`.

## Steps to Run the Project

### 1. Clone the repository

Clone the repository to your local machine by running the following command:

```bash
git clone <repository-url>
cd <repository-folder>
```

### 2. Install dependencies

In the project folder, install all the necessary dependencies with npm by running:

```bash
npm install
```

This will install both the project dependencies and dev dependencies listed in `package.json`.

### 3. Set up environment variables

To securely manage your API keys or any environment-specific settings, create a `.env` file in the project root. You can use the following example:

```env
VITE_API_KEY=your-api-key
```

### 4. Run the development server

After the installation is complete, you can start the development server by running:

```bash
npm run dev
```

This will start the Vite server, and you can open the project in your browser by visiting `http://localhost:3000`.

### 5. Build the project for production

To create a production build of your project, run:

```bash
npm run build
```

This will bundle and optimize your project for production.

### 6. Preview the production build

To preview the production build locally, you can run:

```bash
npm run preview
```

This will serve the build from a local server so you can test the production version.

---

### Português:

# Configuração e Instruções para Rodar o Projeto

Para rodar este projeto, siga os passos abaixo. Este guia assume que você não tem nenhuma ferramenta instalada ainda.

## Pré-requisitos

1. **Instalar o Node.js e npm**:  
   Primeiro, você precisa instalar o [Node.js](https://nodejs.org/). Isso também instalará o `npm` (Node Package Manager), que é necessário para instalar as dependências.

2. **Instalar o Vite**:  
   O Vite é uma ferramenta de build usada neste projeto. Você pode instalá-la globalmente ou usá-la via `npm`.

## Passos para Rodar o Projeto

### 1. Clonar o repositório

Clone o repositório para sua máquina local rodando o seguinte comando:

```bash
git clone <repository-url>
cd <repository-folder>
```

### 2. Instalar as dependências

Na pasta do projeto, instale todas as dependências necessárias com o npm:

```bash
npm install
```

Isso vai instalar tanto as dependências do projeto quanto as dependências de desenvolvimento listadas no arquivo `package.json`.

### 3. Configurar as variáveis de ambiente

Para gerenciar de forma segura suas chaves de API ou qualquer configuração específica do ambiente, crie um arquivo `.env` na raiz do projeto. Você pode usar o seguinte exemplo:

```env
VITE_API_KEY=sua-chave-api
```

### 4. Rodar o servidor de desenvolvimento

Após a instalação ser concluída, você pode iniciar o servidor de desenvolvimento rodando:

```bash
npm run dev
```

Isso iniciará o servidor do Vite, e você pode abrir o projeto no seu navegador acessando `http://localhost:3000`.

### 5. Criar a build de produção

Para criar a build de produção do seu projeto, rode:

```bash
npm run build
```

Isso irá empacotar e otimizar seu projeto para produção.

### 6. Visualizar a build de produção

Para visualizar a build de produção localmente, você pode rodar:

```bash
npm run preview
```

Isso irá servir a versão de produção a partir de um servidor local, permitindo que você teste a versão final.