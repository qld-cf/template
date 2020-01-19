##### 此项目整合了最新的webpack4，eslint约束，引入ts模板，直接down下来高效且规范地开发自己的react项目


新增： [前端整理](https://github.com/qld-cf/FrontInterview)
好用请给颗✨✨✨✨
> react： 16.12.0

> 运行和打包

```
$ npm i
$ npm start
$ npm run build
```


> 配置

#### Typescript的ESlint配置
- 前提
```
// 安装ESLint、typescript和@typescript-eslint/parser解析器、eslint-plugin
$ npm i eslint --save-dev
$ npm i typescript
$ npm i @typescript-eslint/parser --save-dev
$ npm i @typescript-eslint/eslint-plugin --save-dev

// @typescript-eslint/parser 和 @typescript-eslint/eslint-plugin的版本必须保持一致
```

- 配置规则插件 | 修改.eslintrc.js
```
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser', // typescript-eslint/parser // typescript-eslint-parser
  parserOptions: {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: ["standard", "standard-react", "plugin:@typescript-eslint/recommended"],// https://github.com/standard/standard/blob/master/docs/RULES-en.md
  plugins: [
    "react",
    "typescript",
    "@typescript-eslint",
    "react-hooks"
  ],
  // 2：报错；1：警告；0：关闭规则
  'rules': {
    // typescript相关配置
    'typescript/class-name-casing': 2,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/indent': [2, 2],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-object-literal-type-assertion': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-unused-vars': 0,

    // react相关配置
    // "react/display-name": 0, //防止在React组件定义中丢失displayName
    // "react/forbid-prop-types": [2, { "forbid": ["any"] }], //禁止某些propTypes
    // "react/jsx-boolean-value": 2, //在JSX中强制布尔属性符号
    // "react/jsx-closing-bracket-location": 1, //在JSX中验证右括号位置
    // "react/jsx-curly-spacing": [0, { "when": "never", "children": true }], //在JSX属性和表达式中加强或禁止大括号内的空格。
    // "react/jsx-indent -props": [0, 4], //验证JSX中的props缩进
    // "react/jsx-key": 2, //在数组或迭代器中验证JSX具有key属性
    // "react/jsx-max-props-per-line": [0, { "maximum": 1 }], // 限制JSX中单行上的props的最大数量
    "react/jsx-no-bind": 0, //JSX中不允许使用箭头函数和bind
    // "react/jsx-no-duplicate-props": 2, //防止在JSX中重复的props
    // "react/jsx-no-literals": 0, //防止使用未包装的JSX字符串
    // "react/jsx-no-undef": 0, //在JSX中禁止未声明的变量
    // "react/jsx-pascal-case": 0, //为用户定义的JSX组件强制使用PascalCase
    // "react/jsx-sort-props": 2, //强化props按字母排序
    // "react/jsx-uses-react": 1, //防止反应被错误地标记为未使用
    // "react/jsx-uses-vars": 2, //防止在JSX中使用的变量被错误地标记为未使用
    // "react/no-danger": 0, //防止使用危险的JSX属性
    // "react/no-did-mount-set-state": 0, //防止在componentDidMount中使用setState
    "react/no-did-update-set-state": 1, //防止在componentDidUpdate中使用setState
    // "react/no-direct-mutation-state": 2, //防止this.state的直接变异
    // "react/no-multi-comp": 0, //防止每个文件有多个组件定义
    // "react/no-set-state": 0, //防止使用setState
    // "react/no-unknown-property": 2, //防止使用未知的DOM属性
    // "react/prefer-es6-class": 2, //为React组件强制执行ES5或ES6类
    "react/prop-types": 0, //防止在React组件定义中丢失props验证
    // "react/react-in-jsx-scope": 2, //使用JSX时防止丢失React
    "react/self-closing-comp": 0, //防止没有children的组件的额外结束标签
    "react/sort-comp": 0, //强制组件方法顺序
    // "no-extra-boolean-cast": 0, //禁止不必要的bool转换
    // "react/no-array-index-key": 0, //防止在数组中遍历中使用数组key做索引
    "react/no-deprecated": 1, //不使用弃用的方法
    // "react/jsx-equals-spacing": 2, //在JSX属性中强制或禁止等号周围的空格

    // react-hooks相关配置
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies

    // 其它相关配置
    // "no-new": 0,
    // "no-class-assign": 0 // 禁止修改类声明的变量
    // 'arrow-parens': 0, // allow paren-less arrow functions
    // 'generator-star-spacing': 0, // allow async-await
    "no-unused-vars": 0, // 引用但未使用的只给警告不报错
    // "jsx-quotes": 1,
    "no-var": 2,// 要求使用 let 或 const 而不是 var
    "no-useless-constructor": 0,
    "no-undef": 0,
    "one-var": 0,
    "no-new-func": 0,
    "no-unused-expressions": 0,
    "quotes": 2,
    "no-constant-condition": 0,
    "no-mixed-operators": 0,
    "no-useless-return": 0,
    "no-return-await": 0,
    "no-unreachable": 0,
    "no-new": 0,
    "comma-dangle": 0, // 尾逗号
    "semi": ["error", "always"], // 语句结束分号
    "lines-between-class-members": 0
  }
}
```

- 文件类型验证 | 代码自动修复的配置 | 修改vscode的配置文件：settings.json

```
  "eslint.validate": [
    "html",
    "javascript",
    "vue",
    "vue-html",
    "react",
    "typescript",
    "typescriptreact",
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
```

参考：

[Typescript配置](https://ts.xcatliu.com/engineering/lint)

[.eslintrc.js配置参考](https://github.com/Hbinbin/react-typescript-app-template/blob/master/.eslintrc.js)

[vscode的settings.json配置参考](https://github.com/Hbinbin/react-typescript-app-template/blob/master/vscode.settings.json)
[tsconfig.json配置参考](https://github.com/Hbinbin/react-typescript-app-template/blob/master/tsconfig.json)

#### 配置项目模块别名 | 便于开发整理归纳
```
// 1.webpack添加配置配置 | config/webpack.config.js
const resolvePath = function (dir) {
  return path.join(__dirname, '..', dir)
}
...
alias: {
  // 增加如下配置
  '@cps': resolvePath('/src/components'),
  '@cts': resolvePath('/src/containers'),
  '@redux': resolvePath('/src/redux'),
  '@utils': resolvePath('/src/utils')
}
...

// 2.配置tscongfig.json
...
"baseUrl": "src",
"paths": {
  "@cps/*": [
    "components/*"
  ],
  "@cts/*": [
    "containers/*"
  ],
  "@redux/*": [
    "redux/*"
  ],
  "@utils/*": [
    "utils/*"
  ]
}

// 配置结束后需要重启项目
```


#### antd/antd-mobile

> 默认引入antd库, 可根据需要自行移除和添加新库

```
// 修改package.json
  "plugins": [
    [
      "import",
      {
        "libraryName": "antd-mobile",
        "style": "css"
      }
    ],
    [
      "import",
      {
        "libraryName": "antd",
        "style": "css"
      }
    ],
// 修改webpack.config.js

[
  require.resolve('babel-plugin-import'),
  { libraryName: 'antd-mobile', style: 'css' },
],
[
  require.resolve('babel-plugin-import'),
  { libraryName: 'antd', style: 'css' },
  'antd'
]

```
#### vconsole调试插件

> 方便微信浏览器端调试奇葩问题


```
// 引入
$ npm i vconsole --save-dev
// 使用 | 入口index.tsx引入
import VConsole from 'vconsole'
const vConsole = new VConsole()
// 需要特定声明 | src/react-app-env.d.ts
declare module 'vconsole
```

#### 生产环境 - 打包移除console |debugger
```
// 修改webpack.config.js
  new TerserPlugin({
    terserOptions: {
      compress: {
        ecma: 5,
        warnings: false,
        comparisons: false,
        inline: 2,
        drop_debugger: true, // 去除所有的debugger
        drop_console: true // 去除所有的console
      },
    }
```
#### 打包去除.map文件
```
// 修改webpack.config.js

devtool: isEnvProduction
      ? shouldUseSourceMap
        ? 'source-map'
        : false
      : isEnvDevelopment && 'cheap-module-source-map'

=>

devtool: isEnvProduction
      ? false
      : isEnvDevelopment && 'cheap-module-source-map'
```
#### 项目分析:
  ```
  // 前提：webpack关于map移除部分需要还原
  // 安装source-map-explorer
  npm install --save-dev source-map-explorer
  // 运行
  npm run build
  npm run analyze
  ```

#### redux
```
// actions、state、reducers等集中写到同一个文件便于管理
import update from 'immutability-helper';
import { Dispatch } from 'redux';
import { IUser } from '@typings/common.typing';

// types
const USER = 'USER';

// interface
interface IInitState {
  user: IUser;
}

// state
const initState: IInitState = {
  user: {}
};

// actions
/** 设置菜单选择的角色 */
export function setUser (userInfo: IUser) {
  return {
    type: USER,
    payload: userInfo
  };
}

// reducer
export default function user (state = initState, action: { type: string; payload: any }) {
  switch (action.type) {
    case USER:
      return update(state, {
        user: {
          $set: action.payload
        }
      });
    default:
      return state;
  }
}

```

#### hooks
```
// 提供模板参考
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

// interface
interface IActions{ // redux的action集中放在这里
}
interface IProps{
  actions: IActions;
}
interface IState{
}

function HooksCps (props: IProps) {
  const state: IState = {
  };
  return (
    <div className=''>Hellor React Hooks</div>
  );
}

// connect
const mapStateToProps = (state: any) => {
  return {
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    actions: bindActionCreators({}, dispatch)
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HooksCps);

```

#### 其他插件

1.  [Reactjs code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.ReactSnippets)
2. [参考](https://juejin.im/entry/599d4cb96fb9a024a27bf090)


###### 配置完毕请重启vscode

好用请给颗✨✨✨✨
新增： [前端整理](https://github.com/qld-cf/FrontInterview)
