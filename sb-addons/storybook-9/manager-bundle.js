try{
(()=>{var g=__STORYBOOK_ADDONS__,{addons:i,types:b,mockChannel:y}=__STORYBOOK_ADDONS__;var j=__STORYBOOK_THEMING__,{CacheProvider:_,ClassNames:x,Global:O,ThemeProvider:w,background:S,color:D,convert:T,create:o,createCache:C,createGlobal:E,createReset:z,css:L,darken:N,ensure:P,ignoreSsrWarning:R,isPropValid:A,jsx:B,keyframes:G,lighten:H,styled:K,themes:Y,typography:I,useTheme:W,withTheme:$}=__STORYBOOK_THEMING__;var n={name:"@lokalise/louis",version:"25.3.2",engines:{npm:">=10",node:">=20"},type:"module",scripts:{"ts-compile":"tsc -p tsconfig.app.json --noEmit false --emitDeclarationOnly",build:"rimraf dist && vite build","bundle:size":"bundlesize","storybook:dev":"storybook dev -p 6006","storybook:build":"storybook build","test:ts":"tsc -p tsconfig.test.json",test:"npm run test:ts && vitest --run --coverage","test:update-snapshots":"vitest --run --coverage -u","test:visual:install":"playwright install","test:visual:ci":"vitest --run --config ./vitest.config.visual.ts","test:visual":"docker run -it --rm --ipc=host -v $PWD:/opt -w /opt -e HEADLESS='true' mcr.microsoft.com/playwright:v1.43.1-jammy sh -c 'npm i && npm run test:visual:ci'","test:visual:update":"docker run -it --rm --ipc=host -v $PWD:/opt -w /opt -e HEADLESS='true' mcr.microsoft.com/playwright:v1.43.1-jammy sh -c 'npm i && npm run test:visual:ci -- --update'","test:localpackage":'nodemon --exec "npm run build && yalc publish --push --no-scripts" --watch src --ext tsx,ts',"lint:css":"stylelint **/*.module.css","lint:ts":"tsc -p tsconfig.app.json && tsc -p tsconfig.test.json","lint:prettier":"npm run lint-file:prettier -- **/*.md src package.json .eslintrc.json","lint:eslint":"npm run lint-file:eslint -- ./src",lint:"npm run lint:ts && npm run lint:prettier && npm run lint:eslint && npm run lint:css","lint-file:prettier":"prettier --check","lint-file:eslint":"eslint --report-unused-disable-directives --max-warnings 0","format:prettier":"npm run lint:prettier -- --write","format:eslint":"npm run lint:eslint -- --fix",format:"npm run format:prettier && npm run format:eslint"},main:"dist/index.cjs",module:"dist/index.js",types:"dist/index.d.ts",exports:{".":{import:"./dist/index.js",require:"./dist/index.cjs"},"./style.css":"./dist/style.css","./assets/*":"./dist/assets/*"},sideEffects:["*.css"],files:["dist/**"],repository:{type:"git",url:"git+https://github.com/lokalise/louis.git"},author:"Lokalise",bugs:{url:"https://github.com/lokalise/louis/issues"},homepage:"https://lokalise.github.io/louis",publishConfig:{access:"public"},dependencies:{"date-fns":"^4.1.0"},devDependencies:{"@babel/core":"^7.24.5","@babel/preset-env":"^7.24.5","@babel/preset-react":"^7.24.1","@babel/preset-typescript":"^7.24.1","@lokalise/eslint-plugin":"^1.5.0","@semantic-release/changelog":"^6.0.3","@semantic-release/git":"^10.0.1","@storybook/addon-actions":"^7.6.5","@storybook/addon-docs":"^7.6.5","@storybook/addon-essentials":"^7.6.5","@storybook/addon-links":"^7.6.5","@storybook/addon-styling":"^1.3.7","@storybook/addons":"^7.6.5","@storybook/blocks":"^7.6.5","@storybook/client-api":"^7.6.5","@storybook/core-events":"^7.6.5","@storybook/react":"^7.6.5","@storybook/react-webpack5":"^7.6.5","@storybook/theming":"^7.6.5","@testing-library/jest-dom":"^6.4.8","@testing-library/react":"^16.0.0","@testing-library/user-event":"^14.5.2","@types/css-modules":"^1.0.5","@types/jest-image-snapshot":"^6.4.0","@types/md5":"^2.3.5","@typescript-eslint/eslint-plugin":"^6.19.1","@typescript-eslint/parser":"^6.19.1","@vitejs/plugin-react":"^4.3.3","@vitest/coverage-v8":"^2.1.3","babel-plugin-module-resolver":"^5.0.2","babel-plugin-styled-components":"^2.1.4",bundlesize:"^0.18.2","conventional-changelog-conventionalcommits":"^8.0.0",eslint:"^8.56.0","eslint-config-airbnb":"^19.0.4","eslint-config-prettier":"^9.1.0","eslint-import-resolver-typescript":"^3.6.1","eslint-module-utils":"^2.8.0","eslint-plugin-boundaries":"^4.2.0","eslint-plugin-import":"^2.29.1","eslint-plugin-jest":"^27.6.3","eslint-plugin-jest-formatting":"^3.1.0","eslint-plugin-jsx-a11y":"^6.8.0","eslint-plugin-react":"^7.33.2","eslint-plugin-react-hooks":"^4.6.0","eslint-plugin-sonarjs":"^0.23.0","eslint-plugin-storybook":"^0.6.15","eslint-plugin-testing-library":"^6.2.0","expect-type":"^1.1.0","gh-pages":"^6.1.1","jest-fail-on-console":"^3.3.0","jest-image-snapshot":"^6.4.0",jsdom:"^20.0.3",md5:"^2.3.0",nodemon:"^3.1.0",playwright:"^1.43.1",prettier:"^3.2.4","react-select-event":"^5.5.1","remark-gfm":"^3.0.1","resize-observer-polyfill":"^1.5.1",rimraf:"^5.0.5","semantic-release":"^24.0.0","semantic-release-slack-bot":"^4.0.2",storybook:"^7.6.5",stylelint:"^16.2.0","stylelint-config-standard":"^36.0.0","stylelint-value-no-unknown-custom-properties":"^6.0.1","ts-toolbelt":"^9.6.0",typescript:"5.3.3","typescript-plugin-css-modules":"^5.0.2",vite:"^5.4.10","vite-plugin-dts":"^4.3.0",vitest:"^2.0.5"},peerDependencies:{"@floating-ui/react":"^0.26.5","@lokalise/styled":"^v3.0.0","@lokalise/token-dictionary":"^2.39.0",clsx:"^2.1.0",debounce:"^2.0.0",md5:"^2.3.0",react:"^18.2.0","react-day-picker":"^9.1.1","react-dom":"^18.2.0","react-dropzone":"^14.2.3","react-focus-lock":"^2.9.7","react-remove-scroll":"^2.5.9","react-select":"^5.8.0","react-toastify":"^9.1.3","use-local-slice":"^1.2.1"},overrides:{"@mdx-js/react":{react:"^18.2.0","react-dom":"^18.2.0"}}};var l=o({base:"light",barTextColor:"black",barSelectedColor:"black",brandTitle:`Louis v${n.version}`,brandImage:"https://upload.wikimedia.org/wikipedia/commons/0/0f/Lokalise_logo_2021.svg"});i.setConfig({theme:l});})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
