# Documentações
[TDD componente Image](https://github.com/r-santtos/TDDs-React-Native/tree/main/src/components/Images)

# Configurando JEST em React Native
### Módulos e Bibliotecas
- jest
```bash
yarn add jest -D
```
- jest-expo
```bash
yarn add jest-expo -D
```
- @types/jest
```bash
yarn add @types/jest -D
```
- @testing-library/react-native
```bash
yarn add @testing-library/react-native -D
```
- Add typescript
```bash
yarn add -D typescript @types/jest @types/react @types/react-native @types/react-test-renderer
```
******
### Configurando o arquivo "package.json"

```bash

  "scripts": {
    "test": "jest"
  },

  "jest": {
    "preset": "jest-expo",
    "transformIgnorePatterns": [
      "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)"
    ]
  }
```
******
### Testando ao App.tsx
- Primeiro vamos criar uma pasta "\__tests__" na raíz do projeto
- Depois vamos criar um arquivo chamado "App-test.tsx"
```bash
  import React from "react";
  import { render } from "@testing-library/react-native";
  import App from "../App";

  describe("App", () => {
    it("renders without crashing", () => {
      const { container } = render(<App />);
      expect(container).toBeTruthy();
    });
  });
```
- E por fim, vamos rodar nosso arquivo para testar se está tudo funcionando, se tudo estiver ok, o teste será concluído com sucesso.
- Comando no terminal
```bash
  yarn test
```
- Este é o resultado após o comando no terminal
```bash
  PASS  __tests__/App-test.tsx
    App
      ✓ renders without crashing (122 ms)

  Test Suites: 1 passed, 1 total
  Tests:       1 passed, 1 total
  Snapshots:   0 total
  Time:        0.997 s, estimated 1 s
  Ran all test suites.
  Done in 2.22s.
```
