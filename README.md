# 💱 ExchangeWebApp

**ExchangeWebApp** é uma aplicação web desenvolvida com **Angular** que permite ao usuário consultar as cotações de moedas estrangeiras em relação ao **real brasileiro (BRL)**.

---

## 📌 Funcionalidades

- Consulta da cotação de uma moeda estrangeira informada pelo usuário
- Interface responsiva e amigável

---

## 🧱 Tecnologias Utilizadas

- [Angular CLI](https://v10.angular.io/docs) v10.2.6
- TypeScript
- HTML5, CSS3
- RxJS (observables)
- Estrutura modular Angular

---

## ▶️ Como Executar Localmente

### Requisitos

- Node.js (versão 14.17.3)
- Angular CLI instalado globalmente(Angular 10+):
  ```
  npm install -g @angular/cli@10
  ```

### Passos

1. Clone este repositório:
   ```
   git clone https://github.com/seu-usuario/exchange-web-app.git

   cd exchange-web-app
   ```

2. Instale as dependências:
   ```
   npm install
   ```

3. Execute o servidor de desenvolvimento:
   ```
   ng serve
   ```

4. Acesse no navegador:
   ```
   http://localhost:4200/
   ```

---

## ⚠️ Observação sobre instalação de dependências (`npm install`)
Durante o desenvolvimento deste projeto utilizando **Angular 10** com **Node.js v14**, foi identificado um comportamento incomum ao executar o comando `npm install`.

Problema:
Ao criar o projeto com **Angular CLI** e tentar instalar as dependências com npm install, o seguinte erro era apresentado:

   ```
Error: Cannot find module 'node:path'
   ```

### Causa:
Esse problema está relacionado à versão antiga do `npm` que acompanha o **Node.js v14**, a qual não consegue resolver corretamente as dependências do projeto — especialmente pacotes modernos como `@schematics/angular`. Isso é agravado em ambientes Windows.

### Solução utilizada:
- Criar o projeto com Angular CLI utilizando Node.js v14.
- Desinstalar o **Node.js v14** e instalar a versão mais recente do **Node.js (v22)**.
- Rodar `npm install` com a versão mais recente.
- Após a instalação bem-sucedida, reinstalar o Node.js v14 para garantir compatibilidade com o Angular 10.

Alternativamente, é possível atualizar apenas o `npm` para uma versão mais recente (ex: `npm@8`) mesmo usando Node v14, com o comando:

   ```
   npm install -g npm@8
   ````

---

## 📂 Estrutura de Pastas

```
src/
├── app/
│   ├── services/
│   │   ├── exchange-service.service.ts         # Serviço responsável pela lógica de câmbio
│   │   └── exchange-service.service.spec.ts    # Teste unitário do serviço
│   ├── app-routing.module.ts                   # Configuração de rotas (caso expandido futuramente)
│   ├── app.component.ts                        # Componente principal
│   ├── app.component.html                      # Template da UI principal
│   ├── app.component.css                       # Estilos principais
│   ├── app.component.spec.ts                   # Teste do componente principal
│   └── app.module.ts                           # Módulo raiz do Angular
├── assets/
│   └── images/                                 # Pasta para imagens e recursos estáticos
├── environments/                               # Arquivos para ambiente (dev/prod)
├── index.html                                  # HTML base da aplicação
├── main.ts                                     # Arquivo principal que bootstrapa o app
```

---

## 🖼️ Telas

![tela 01](https://github.com/user-attachments/assets/39906f78-441a-4e40-9a7c-aeb6d2492950)


![tela 02](https://github.com/user-attachments/assets/87711c00-8f72-4bda-872b-0441b6cbfb6d)
