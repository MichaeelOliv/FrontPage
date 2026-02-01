# Digital Store Front-end

Este é um projeto de front-end para um e-commerce moderno, desenvolvido como parte das atividades do IEL. A aplicação é construída utilizando **React** com **Vite**, focando em performance, componentização e uma experiência de usuário responsiva.

Currently, two official plugins are available:
## 🚀 Tecnologias Utilizadas

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
O projeto utiliza as seguintes tecnologias e bibliotecas principais:

## React Compiler
-   **[React](https://react.dev/)** (v19): Biblioteca JavaScript para construção de interfaces de usuário.
-   **[Vite](https://vitejs.dev/)**: Ferramenta de build rápida e servidor de desenvolvimento.
-   **[Styled Components](https://styled-components.com/)**: Biblioteca para estilização de componentes via CSS-in-JS, permitindo estilos escopados e dinâmicos.
-   **[React Router DOM](https://reactrouter.com/)**: Gerenciamento de rotas e navegação da aplicação (SPA).
-   **ESLint**: Ferramenta de linting para garantir a qualidade e padronização do código.

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).
## ✨ Funcionalidades

## Expanding the ESLint configuration
-   **Home Page**:
    -   Carrossel de ofertas em destaque.
    -   Seções de coleções e produtos em alta.
-   **Navegação e Rotas**:
    -   Sistema de rotas centralizado (`Paths.jsx`).
    -   Scroll automático para o topo ao navegar entre páginas.
    -   Suporte a rotas em português e inglês (ex: `/produtos` e `/products`).
-   **Página de Detalhes do Produto**:
    -   Galeria de imagens interativa.
    -   Opções de seleção de tamanho e cor.
    -   Botão de compra e descrição detalhada.
-   **Header Responsivo**:
    -   Menu hambúrguer para dispositivos móveis.
    -   Barra de pesquisa funcional (redireciona para listagem com filtro).
    -   Adaptação de layout para Mobile e Desktop.

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
## 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

-   Node.js (versão 16 ou superior recomendada)
-   npm (gerenciador de pacotes padrão do Node) ou yarn

## 🔧 Instalação e Execução

1.  **Clone o repositório** (ou baixe os arquivos):
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    cd vite-project
    ```

2.  **Instale as dependências**:
    ```bash
    npm install
    ```

3.  **Execute o servidor de desenvolvimento**:
    ```bash
    npm run dev
    ```
    O terminal exibirá o link local (geralmente `http://localhost:5173/`) para acessar a aplicação.

## 📜 Scripts Disponíveis

No diretório do projeto, você pode rodar:

-   `npm run dev`: Inicia o servidor de desenvolvimento.
-   `npm run build`: Compila a aplicação para produção na pasta `dist`.
-   `npm run preview`: Visualiza a versão de produção localmente após o build.
-   `npm run lint`: Executa a verificação de código com ESLint para encontrar problemas.

---

Desenvolvido durante as atividades do IEL.
