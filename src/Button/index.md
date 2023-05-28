# Button 按钮

按钮用于开始一个即时操作。Kylin-UI 组件库中的 Button 组件

**何时使用**

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

## Type

```jsx
import { Button } from 'kylin-ui';

export default () => {
  return (
    <>
      <Button type="primary" mr={2}>
        Primary
      </Button>
      <Button type="secondary" mr={2}>
        Secondary
      </Button>
      <Button type="success" mr={2}>
        Success
      </Button>
      <Button type="info" mr={2}>
        Info
      </Button>
      <Button type="info" ghost mr={2}>
        Ghost
      </Button>
    </>
  );
};
```

## Block

```jsx
import { Button } from 'kylin-ui';

export default () => {
  return (
    <Button type="primary" block>
      Block
    </Button>
  );
};
```

## Size

```jsx
import { Button } from 'kylin-ui';

export default () => {
  return (
    <>
      <Button type="primary" size={'small'} mr={2}>
        Small
      </Button>
      <Button type="secondary" size={'middle'} mr={2}>
        Middle
      </Button>
      <Button type="info" size={'large'}>
        Large
      </Button>
    </>
  );
};
```

## Shape

```jsx
import { Button } from 'kylin-ui';

export default () => {
  return (
    <>
      <Button type="primary" shape={'round'} mr={2}>
        Round
      </Button>
      <Button type="success" shape={'circle'} mr={2}>
        Circle
      </Button>
    </>
  );
};
```

## beforeIcon & afterIcon

```jsx
import { Button } from 'kylin-ui';

export default () => {
  return (
    <>
      <Button
        type="primary"
        beforeIcon={<p style={{ backgroundColor: 'red' }}>It's beforeIcon</p>}
        mr={2}
      >
        Content
      </Button>
      <Button
        type="success"
        afterIcon={<p style={{ backgroundColor: 'blue' }}>It's afterIcon</p>}
        mr={2}
      >
        Content
      </Button>
    </>
  );
};
```

## Loading

```jsx
import { Button } from 'kylin-ui';

export default () => {
  return (
    <>
      <Button type="primary" loading mr={2}>
        Loading
      </Button>
      <Button type="info" loading={{ delay: 2000 }}>
        Loading delay 2s
      </Button>
    </>
  );
};
```

## Props

| 属性       | 说明           | 类型                                                                   | 默认值      |
| ---------- | -------------- | ---------------------------------------------------------------------- | ----------- |
| type       | 按钮的主题     | `'default'`<br>`'primary'`<br>`'secondary'`<br>`'success'`<br>`'info'` | `'default'` |
| shape      | 按钮的形状     | `'circle'`<br>`'round'`                                                | ''          |
| size       | 按钮的大小     | `'small'`<br>`'medium'`<br>`'large'`<br>`'middle'`                     | ''          |
| beforeIcon | 按钮的前置图标 | React.ReactNode                                                        | null        |
| afterIcon  | 按钮的后置图标 | React.ReactNode                                                        | null        |
| disabled   | 禁用按钮       | boolean                                                                | false       |
| loading    | 加载动画       | `boolean`<br>`{delay?: number}`                                        | false       |

## Events

| 属性    | 说明     | 类型                                         | 默认值 |
| ------- | -------- | -------------------------------------------- | ------ |
| onClick | 点击事件 | `React.MouseEventHandler<HTMLButtonElement>` | -      |
