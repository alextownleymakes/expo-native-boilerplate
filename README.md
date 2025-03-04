# Expo Native Boilerplate 🚀

## **Overview**
This is a pre-configured **Expo + React Native + TypeScript** boilerplate designed for rapid development of mobile applications. It includes **Redux for state management, Supabase for authentication and backend, TailwindCSS for styling, and Prisma for database ORM**. The goal is to **provide a stable, scalable, and efficient development environment without dependency conflicts**.

## **📦 Features**
- **Expo (Latest)** – Zero-config React Native setup.
- **TypeScript Support** – Fully typed environment.
- **State Management** – Uses **Redux Toolkit** for scalable state handling.
- **Database & Auth** – **Supabase integration** for authentication and backend.
- **ORM** – **Prisma** for clean database interactions.
- **Styling** – **TailwindCSS (via NativeWind)** for efficient styling.
- **Secure Storage** – **Expo Secure Store** for storing sensitive user data.
- **Navigation** – **React Navigation (Native Stack)** for smooth in-app navigation.
- **Web Performance** – Configured **Webpack 5** to avoid compatibility issues.
- **Code Quality** – Integrated **ESLint** for linting and best practices.

---

## **🛠️ Installation & Setup**
### **1️⃣ Clone the Boilerplate**
```sh
git clone https://github.com/alextownleymakes/expo-native-boilerplate.git my-new-app
cd my-new-app
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Configure Environment Variables**
Rename `.env.example` to `.env` and update your **Supabase credentials**:
```sh
SUPABASE_URL=https://your-supabase-url.supabase.co
SUPABASE_ANON_KEY=your-anon-key
DATABASE_URL=postgres://your-database-url
```

### **4️⃣ Run the Development Server**
```sh
npx expo start
```
Scan the QR code with an **iPhone 14 (or any Expo-compatible device)** to launch the app.

---

## **📂 Project Structure**
```
.
├── .env
├── .gitignore
├── eslint.config.mjs
├── LICENSE
├── README.md
├── app
│   ├── Home.tsx
│   ├── auth/
│   ├── components/
│   │   └── HomeContent.tsx
│   ├── hooks/
│   ├── lib/
│   │   ├── supabase.ts
│   │   ├── prisma.ts
│   ├── navigation/
│   ├── slices/
│   ├── state/
│   │   └── store.ts
│   └── utils/
├── app.json
├── babel.config.json
├── env.d.ts
├── index.js
├── package-lock.json
├── package.json
├── tsconfig.json
```

---

## **🔧 ESLint Setup**
This boilerplate includes **ESLint** for enforcing best coding practices.

### **📌 Install ESLint**
```sh
npm install eslint eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-prettier --save-dev
```

### **📌 Configure ESLint (`eslint.config.mjs`)**
Create **`eslint.config.mjs`** if it does not exist:
```sh
touch eslint.config.mjs
```

Then, add the following ESLint configuration:
```js
import js from "@eslint/js";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import prettier from "eslint-config-prettier";

export default [
  {
    ignores: ["node_modules", ".expo", "dist", "build"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
        fetch: "readonly"
      }
    }
  },
  js.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser
    },
    plugins: {
      "@typescript-eslint": ts,
      react,
      "react-hooks": reactHooks
    },
    rules: {
      "react/jsx-filename-extension": [1, { "extensions": [".tsx"] }],
      "import/extensions": "off",
      "import/no-unresolved": "off",
      "no-use-before-define": "off"
    }
  },
  prettier
];
```

### **📌 Add Linting Scripts to `package.json`**
```json
"scripts": {
  "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
  "lint:fix": "eslint . --ext .js,.jsx,.ts,.tsx --fix"
}
```

### **📌 Run ESLint**
Check for issues:
```sh
npm run lint
```
Automatically fix problems:
```sh
npm run lint:fix
```

---

## **📄 License**
This project is **MIT Licensed**. See the [LICENSE](LICENSE) file for details.

---
🚀 **Happy coding!** 🚀