# Google Docs Clone

A Google Docs clone built with React, TypeScript, and Firebase, offering real-time text editing and collaboration features.

## 🚀 Features

- ✍️ Rich text editor with formatting
- 🔄 Real-time synchronization
- 💾 Automatic saving
- 📱 Responsive design
- 👥 Multi-user support
- 🎨 Google Docs-like interface

## 🛠️ Technologies Used

- React
- TypeScript
- Firebase (Firestore)
- React Quill
- Lodash

## 📋 Prerequisites

- Node.js (version 14 or higher)
- NPM or Yarn
- Firebase Account

## 🔧 Installation

1. Clone the repository:

```bash
git clone [your-repository-url]
cd docs-clone
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   - Create a `.env` file in the project root
   - Add your Firebase configuration:

```env
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id
```

4. Start the development server:

```bash
npm run dev
```

## 🌟 Editor Features

- Complete formatting toolbar
- Support for different text styles
- Auto-save with throttling optimization
- Real-time synchronization between multiple users
- Responsive interface for different screen sizes

## 🔍 Project Structure

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

## 📱 Responsiveness

The editor is fully responsive and adapts to different screen sizes:

- Desktop: Optimized layout with 85vh height
- Tablet: Adjusted layout with 87vh height
- Mobile: Maximized layout with 90vh height

## 🤝 Contributing

Contributions are always welcome! Feel free to:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is under the MIT license. See the [LICENSE](LICENSE) file for more details.

## ✨ Next Steps

- [ ] Add user authentication
- [ ] Implement document sharing
- [ ] Add version history
- [ ] Implement comments
- [ ] Add support for multiple documents
