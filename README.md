# "Web larek"

![screen_app](./docs/screen_app.png)

[Дока на русском](./docs/readme.ru.md)

## Stack
- HTML 
- SCSS 
- TS 
- Webpack

## Project structure:
- src/ — project source files
- src/components/ — folder with JS components
- src/components/base/ — folder with the base code
- src/components/model/ — folder with data models
- src/components/view — folder with display classes
  - /base — folder with basic display classes
  - /partial — folder with specific display classes

## Important files:
- src/pages/index.html — HTML file of the main page
- src/types/index.ts file with types
- src/index.ts is the application's entry point
- src/scss/styles.scss — the root file of styles
- src/utils/constants.ts file with constants
- src/utils/utils.ts file with utilities

## Installation and launch
To install and run the project, run the following commands

```
npm install
npm run start
```

or

```
yarn
yarn start
```

## Assembly

```
npm run build
```

or

```
yarn build
```

## Application Architecture (MVC)

### Model
![model](./docs/model.png)  

### View
![screen_app](./docs/view.png)

[Description of the modules in English](./docs/architecture.en.md)
[Описание модулей на русском](./docs/architecture.ru.md)


## Author

** [Kirill Doroshev (DKMFzF)](https://vk.com/dkmfzf ) **

## License

This project is licensed under the MIT license

Спасибо Яндекс Практикум!
