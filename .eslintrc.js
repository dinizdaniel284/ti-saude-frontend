module.exports = {
  extends: [
    "next/core-web-vitals",
    "next",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  parser: "@typescript-eslint/parser", // Adiciona o parser para TypeScript
  plugins: ["@typescript-eslint"], // Habilita o plugin para linting de TypeScript
  rules: {
    "semi": ["error", "always"], // Exige ponto e vírgula no final de cada instrução
    "quotes": ["error", "single"], // Exige aspas simples para strings
    "no-unused-vars": "warn", // Alerta sobre variáveis não utilizadas
    "react/jsx-uses-react": "off", // React 17+ não exige que o React esteja no escopo
    "react/react-in-jsx-scope": "off", // React 17+ não exige que o React esteja no escopo
    "@typescript-eslint/no-unused-vars": ["warn"], // Regras para variáveis não utilizadas em TypeScript
    "@typescript-eslint/explicit-module-boundary-types": "off", // Desativa a exigência de tipos explícitos para funções e métodos
  },
};
