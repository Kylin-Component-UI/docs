# Space 间距

设置组件之间的间距。

**何时使用**

避免组件紧贴在一起，拉开统一的空间。

- 适合行内元素的水平间距。
- 可以设置各种水平对齐方式。
- 需要表单组件之间紧凑连接且合并边框时，使用 Space.Compact（自 antd@4.24.0 版本开始提供该组件）。

## Type

```jsx
import { Button, Space } from 'kylin-ui';

export default () => {
  return (
    <Space direction="vertical">
      <Space>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
      </Space>

      <Space direction="vertical">
        <Button type='secondary'>4</Button>
        <Button type='secondary'>5</Button>
        <Button type='secondary'>6</Button>
      </Space>

      <Space direction="vertical">
        <Button type='info'>Vertical1</Button>
        <Button type='info'>Vertical2</Button>
      </Space>
    </Space>
  );
};
```
