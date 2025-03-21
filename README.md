# Google Docs Clone

Um clone do Google Docs construído com React, TypeScript e Firebase, oferecendo funcionalidades de edição de texto em tempo real e colaboração.

## 🚀 Funcionalidades

- ✍️ Editor de texto rico com formatação
- 🔄 Sincronização em tempo real
- 💾 Salvamento automático
- 📱 Design responsivo
- 👥 Suporte para múltiplos usuários
- 🎨 Interface similar ao Google Docs

## 🛠️ Tecnologias Utilizadas

- React
- TypeScript
- Firebase (Firestore)
- React Quill
- Lodash

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- NPM ou Yarn
- Conta no Firebase

## 🔧 Instalação

1. Clone o repositório:

```bash
git clone [url-do-seu-repositorio]
cd docs-clone
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` na raiz do projeto
   - Adicione suas configurações do Firebase:

```env
REACT_APP_FIREBASE_API_KEY=seu-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=seu-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=seu-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=seu-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=seu-messaging-sender-id
REACT_APP_FIREBASE_APP_ID=seu-app-id
```

4. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

## 🌟 Características do Editor

- Barra de ferramentas completa para formatação
- Suporte para diferentes estilos de texto
- Auto-save com throttling para otimização
- Sincronização em tempo real entre múltiplos usuários
- Interface responsiva para diferentes tamanhos de tela

## 🔍 Estrutura do Projeto

```
docs-clone/
├── src/
│   ├── components/
│   │   ├── TextEditor.tsx
│   │   └── TextEditor.css
│   ├── firebase-config.ts
│   ├── App.tsx
│   └── App.css
├── public/
└── package.json
```

## 📱 Responsividade

O editor é totalmente responsivo e se adapta a diferentes tamanhos de tela:

- Desktop: Layout otimizado com 85vh de altura
- Tablet: Layout ajustado com 87vh de altura
- Mobile: Layout maximizado com 90vh de altura

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## ✨ Próximos Passos

- [ ] Adicionar autenticação de usuários
- [ ] Implementar compartilhamento de documentos
- [ ] Adicionar histórico de versões
- [ ] Implementar comentários
- [ ] Adicionar suporte para múltiplos documentos
