# Vite && Vue

## 注入自定义环境变量

通过命令行向 `process.env` 中增加键值，比如构建时动态设置版本号

### 安装插件

```sh
npm i cross-env -D
```

### 设置环境变量

通过 `npx` 执行 `cross-env`，并以`${key}=${value}`的形式传参给 `cross-env`，在某些 `js` 文件中就能通过 `process.env[key]` 的方法获取到 `value`

```sh
npx cross-env _SOME_CUSTOM_ENV_VAR_=some-env-value ANOTHER_VARIABLE=1 ANOTHER_VARIABLE_B=2 vite build
```

### 获取环境变量

在由 `node` 运行的 `js` 构建文件中，可以通过 `process.env[key]` 获取到值，而在应用代码文件中 `vite` 不支持访问 `process.env`，但可以通过配置构建项 `define` 来实现相同的功能：[Vite 设置全局常量 - define](https://cn.vitejs.dev/config/shared-options.html#define)

1. 在用于构建 `js` 的文件中获取、设置 `define`

比如在 `vite.config.js` 中：

```js
import { defineConfig } from "vite";

export default defineConfig({
  define: {
    customEnvVariable: process.env._SOME_CUSTOM_ENV_VAR_,
    "process.env.ANOTHER_VARIABLE_A": process.env.ANOTHER_VARIABLE,
    "import.meta.env.ANOTHER_VARIABLE_B": process.env.ANOTHER_VARIABLE_B,
  },
  // other configs...
  ...
});
```

2. 在应用代码中访问 `define` 的环境变量，变量名是在 `define` 中配置的键名

比如在 `main.js` 或者 `xxx.vue` 中：

```js
console.log(customEnvVariable);
console.log(process.env.ANOTHER_VARIABLE_A);
console.log(import.meta.env.ANOTHER_VARIABLE_B);

// 打印结果：
// "some-env-value"
// "1"
// "2"
```
