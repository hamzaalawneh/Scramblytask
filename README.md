This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.


# Tech overview

### Project summary

A React Native application with authentication, API integration, and offline data persistence. Users can log in, view a list of posts fetched from an external API, and access detailed post information with offline support.

### Tech Stack

- **Framework:** React Native + TypeScript  
- **State Management:** Zustand with AsyncStorage persistence  
- **Navigation:** React Navigation (Stack Navigator)  
- **API Integration:** Fetch API with timeout handling  
- **Styling:** StyleSheet with centralized color system  
- **Code Quality:** ESLint + Prettier  
- **Package Manager:** Yarn  

### Project Structure

- `src/components/` – Reusable UI components (e.g., `CustomButton`)
- `src/navigation/` – App, Auth, and Home stack navigators
- `src/screens/` – Login, Home, List, and Details screens
- `src/services/` – API integration (e.g., `fetchPosts`)
- `src/store/` – Zustand stores for auth and posts
- `src/utils/` – Helpers (e.g., validation, colors)


# Architecture decisions

### React Native
Cross-platform development reduces time and cost.

### Zustand
Lightweight state management with persistence support.

### React Navigation
A much more supported & maintainable navigation by the community.

### StyleSheet
Consistent design , and better support with React Native.

### Path Aliases
Simplifies imports and improves maintainability.

### ESLint & Prettier
Enforces coding standards and improves readability.