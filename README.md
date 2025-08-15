# Todo App - React Native

A feature-rich Todo application built with React Native and Expo, featuring task management, filtering, and navigation between different views.

## 🚀 Features

- **Task Management**: Create, edit, and delete tasks with titles and descriptions
- **Task Status Tracking**: Mark tasks as "In Progress" or "Done"
- **Smart Filtering**: Filter tasks by status (All, In Progress, Done)
- **Navigation**: Bottom tab navigation between Home and Completed Tasks
- **Task Details**: View detailed information about each task
- **Persistent State**: Tasks are managed through React Context
- **Modern UI**: Clean and intuitive user interface

## 📱 Screenshots

The app consists of two main sections:
- **Home Tab**: Add new tasks, view all tasks, and filter by status
- **Completed Tasks Tab**: View and manage completed tasks with detailed information

## 🛠️ Prerequisites

Before running this app, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Expo Go](https://expo.dev/client) app on your mobile device (for testing)

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Todo-App-React-Native
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   # or
   expo start
   ```

4. **Run on your device**
   - Scan the QR code with your camera (iOS) or Expo Go app (Android)
   - Or press `i` for iOS simulator or `a` for Android emulator

## 🎯 Usage Instructions

### Adding Tasks
1. Navigate to the Home tab
2. Enter a task title in the first input field
3. Enter a task description in the second input field
4. Tap "Add Task" button (enabled only when both fields are filled)

### Managing Tasks
- **Mark as Complete**: Tap the task to toggle its status
- **Delete Task**: Use the delete functionality for each task
- **Filter Tasks**: Use the filter buttons to view tasks by status:
  - All: Shows all tasks
  - In Progress: Shows only incomplete tasks
  - Done: Shows only completed tasks

### Viewing Completed Tasks
1. Tap the "Completed Tasks" tab
2. View all completed tasks
3. Tap on any task to see detailed information

## 📚 Third-Party Libraries

This project uses the following third-party libraries:

### Core Dependencies
- **@expo/vector-icons** (^14.1.0): Provides a comprehensive icon library for Expo apps
- **@react-navigation/bottom-tabs** (^7.2.0): Implements bottom tab navigation between screens
- **@react-navigation/native** (^7.0.14): Core navigation library for React Native
- **@react-navigation/native-stack** (^7.2.0): Stack navigation for individual tab screens
- **expo** (~52.0.36): Development platform and tools for React Native
- **expo-status-bar** (~2.0.1): Status bar management for Expo apps
- **react** (18.3.1): React library for building user interfaces
- **react-native** (0.76.7): React Native framework for mobile app development
- **react-native-uuid** (^2.0.3): Generates unique identifiers for tasks

### Development Dependencies
- **@babel/core** (^7.20.0): JavaScript compiler for modern JavaScript features

## 🏗️ Project Structure

```
Todo-App-React-Native/
├── components/           # Reusable UI components
│   ├── Divider/         # Visual separator component
│   ├── FilterButton/    # Task filter buttons
│   ├── Router/         # Navigation configuration
│   └── Task/           # Individual task component
├── screens/             # Screen components
│   ├── Home/           # Main home screen
│   ├── CompletedTasks/ # Completed tasks view
│   └── TaskDetails/    # Task detail view
├── contexts/            # React Context for state management
│   └── TodosContext.jsx # Todo state and operations
├── assets/              # App icons and images
├── App.jsx             # Main app component
└── index.jsx           # App entry point
```

## 🔧 Available Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS device/simulator
- `npm run web` - Run in web browser

## 📱 Platform Support

- ✅ iOS (via Expo Go or iOS Simulator)
- ✅ Android (via Expo Go or Android Emulator)
- ✅ Web (via web browser)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Troubleshooting

### Common Issues

**Metro bundler issues:**
```bash
npx expo start --clear
```

**Dependencies issues:**
```bash
rm -rf node_modules
npm install
```

**Expo CLI not found:**
```bash
npm install -g @expo/cli
```

### Getting Help

If you encounter any issues:
1. Check the [Expo documentation](https://docs.expo.dev/)
2. Search existing issues in the repository
3. Create a new issue with detailed information about your problem

---

**Happy coding! 🎉**
