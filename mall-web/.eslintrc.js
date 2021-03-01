module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 'vue/html-closing-bracket-newline': 'error'
    // 回调函数必须要有返回值
    'array-callback-return': 'warn',
    // 有默认值的参数必须放在最后
    'default-param-last': 'warn',
    // getter 必须有返回值，并且禁止返回空
    'getter-return': 'warn',
    // setter 和 getter 必须写在一起
    'grouped-accessor-pairs': 'warn',
    // 必须使用 === 或 !==，禁止使用 == 或 !=
    eqeqeq: ['error', 'always'],
    // 禁止方向错误的 for 循环
    'for-direction': 'warn',
    // new 后面的类名必须首字母大写
    'new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: false,
        properties: true
      }
    ],
    // const 禁止重新赋值
    'no-const-assign': 'warn',
    // 禁止出现重复变量
    'no-dupe-args': 'warn',
    // 禁止重复定义类的成员
    'no-dupe-class-members': 'warn',
    // 禁止 if else 的条件判断中出现重复的条件
    'no-dupe-else-if': 'warn',
    // 禁止在对象字面量中出现重复的键名
    'no-dupe-keys': 'warn',
    // 禁止重复导入模块
    'no-duplicate-imports': 'warn',
    // 禁止使用 \ 来换行字符串
    'no-multi-str': 'warn',
    // 禁止对函数的参数重新赋值
    'no-param-reassign': 'warn',
    // 禁止将自己赋值给自己
    'no-self-assign': 'warn',
    // 禁止将自己与自己比较
    'no-self-compare': 'warn',
    // 禁止 setter 有返回值
    'no-setter-return': 'warn',
    // 禁止在 return, throw, break 或 continue 之后还有代码
    'no-unreachable': 'warn',
    // 回调函数必须使用箭头函数
    'prefer-arrow-callback': 'warn',
    'vue/multiline-html-element-content-newline': 'error'
  }
}
