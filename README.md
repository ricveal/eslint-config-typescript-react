# eslint-config-typescript-react

[![npm version][npm-image]][npm-url]
![License][license]

---

# DEPRECATION WARNING

This project has reached the end of its development in favour or a big and more customizable eslint config library which called [`eslint-config-ricveal`](https://www.npmjs.com/package/eslint-config-ricveal). Please, use it instead this option because all my maintenance efforts will be redirected to the new one.

---

My ESLint config with TypeScript and Prettier support for react projects

# How to use
Install `eslint` and `prettier`, `eslint-config-typescript-react` and put it into your `.eslintrc.js`.

```bash
$ npm install eslint@^6.8.0 prettier@^1.19.1 eslint-config-typescript-react --save-dev
```

`.eslintrc.js`

```js
module.exports = {
  extends: "typescript-react"
};
```

## License

Open source [licensed as MIT](https://github.com/ricveal/eslint-config-typescript-react/blob/master/LICENSE).

[npm-image]: https://img.shields.io/npm/v/eslint-config-typescript-react.svg
[npm-url]: https://npmjs.org/package/eslint-config-typescript-react
[license]: https://img.shields.io/npm/l/eslint-config-typescript-react.svg
