# Gobarber-Web-Typescript

# Tabela 

<!--ts-->
 *[Configurando EditorConfig](#ancora1)
 *[Configurando Eslint](#ancora2)
 *[Configurando Prettier](#ancora3)
<!--te-->

<a id="ancora1"></a>
## Configurando .EditorConfig

```
root = true

[*]
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
end_of_line = lf
```

<a id="ancora2"></a>
## Configurando Eslint

#### Instale as dependencias do eslint

```yarn add eslint -D```

#### Depois, inicialize

```yarn eslint --init```

#### Selecione as opções

1. To check syntax, find problems and enforce code style
2. Javascript modules (import/export)
3. React
4. Typescript? Yes
5. Browser 
6. Use a popular style guide 
7. Airbnb
8. JSON
9. Would you like to install them now with npm? No

#### Adicionar o s pacotes que foram listados na pergunta de cima

###### Exemplo
```
yarn add -D eslint-plugin-react@^7.20.0 @typescript-eslint/eslint-plugin@latest eslint-config-airbnb@latest eslint-plugin-import@^2.21.2 eslint-plugin-jsx-a11y@^6.3.0 eslint-plugin-react-hooks@^4 @typescript-eslint/parser@latest
```

#### Crie uma pasta chamada ```.eslintignore``` e adicione: 

```
**/*.js
node_modules
build
/src/react-app-env.d.ts
/src/reportWebVitals.ts
```

#### Adicione no ```.eslintrc.json```

1. Adicione em ```extends```

```JSON
"plugin:react/recommended",
"plugin:@typescript-eslint/recommended"
```

2. Adicione em ```plugins```

```JSON
"react-hooks"
```

3. Adicione em ```rules```

```JSON
"no-use-before-define": "off",
    "no-unused-expressions": "off",
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "no-console": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-filename-extension": [1, { "extensions": [".tsx"] }],
    "import/prefer-default-export": "off",
    "camelcase": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-unused-vars": "off",
    // "@typescript-eslint/explicit-functtion-return-type": [
    //   "error",
    //   {
    //     "allowExpressios": true
    //   }
    // ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "ts": "never",
        "tsx": "never"
      }
    ],
    "prettier/prettier": "error"
    // "max-len": ["error", { "code": 80 }]
    // "semi": ["error", "always"]
```

3. Adicione depois de ```rules```

```
"settings": {
    "import/resolver": {
      "typescript": {}
    }
  }
```

#### Por último, instale a dependencia de reconhecimento de importação do typescript

```
yarn add eslint-import-resolver-typescript -D
```

<a id="ancora3"></a>
##  Configurando Prettier

#### Instale as dependencias

```
yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
```

#### Em ```.eslintrc.json```

1. Adicione em ```extends```

```JSON
"prettier/@typescript-eslint",
"plugin:prettier/recommended"
```

2. Adicione em ```plugins```

```JSON
"prettier"
```

3. Adicione em ```rules```

```JSON
"prettier/prettier": "error"
```

#### Crie um arquivo chamado ```prettier.config.js``` com essas configs:

```
module.exports = {
  singleQuote: true, 
  trailingComma: 'all',
	arrowParens: 'avoid',
}
```
