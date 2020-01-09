module.exports = {
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "browser": true,
    "es6": true,
    "jest/globals": true
  },
  "extends": [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint"
  ],
  "plugins": [
    "react",
    "react-hooks",
    "jsx-a11y",
    "import",
    "prettier",
    "@typescript-eslint",
    "jest"
  ],
  "globals": {},
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "semi": false
      }
    ],
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        "accessibility": "no-public"
      }
    ],
    "@typescript-eslint/prefer-interface": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "react/destructuring-assignment": "off",
    "react/jsx-filename-extension": [
      "error",
      {
        "extensions": [
          ".tsx"
        ]
      }
    ],
    "react/prop-types": [
      "off",
      {}
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "import/named": "off",
    "import/export": "off",
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": [
          "**/*.test.*",
          "**/*.spec.*"
        ]
      }
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "mjs": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "no-case-declarations": "off",
    "no-unused-expressions": [
      "warn",
      {
        "allowShortCircuit": true,
        "allowTernary": true
      }
    ]
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [
          ".js",
          ".ts",
          ".jsx",
          ".tsx",
          ".json"
        ]
      }
    },
    "import/extensions": [
      ".js",
      ".ts",
      ".mjs",
      ".jsx",
      ".tsx"
    ]
  }
}
