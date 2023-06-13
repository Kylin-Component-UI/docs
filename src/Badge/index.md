# Badge 徽章

图标右上角的圆形徽标文字。

**何时使用**

一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。

## Type

```jsx
import { Title, Space, Badge } from 'kylin-ui';

export default () => {
  return (
    <>
      {/* <Title>Type</Title> */}
      <Space>
        <Badge>New Primary</Badge>
        <Badge type="secondary">New Secondary</Badge>
        <Badge type="success">New Success</Badge>
        <Badge type="warning">New Warning</Badge>
        <Badge type="danger">New Danger</Badge>
        <Badge type="info">New Info</Badge>
      </Space>

      {/* <Title>Shape</Title> */}
      <Space>
        <Badge shape="square">default shape</Badge>
        <Badge shape="circle">circle</Badge>
        <Badge shape="rounded">rounded</Badge>
      </Space>

      {/* <Title>Size</Title> */}
      <Space direction="vertical">
        <Badge size="small">small</Badge>
        <Badge size="middle">middle</Badge>
        <Badge size="large">large</Badge>
      </Space>

      {/* <Title>Gradient</Title> */}
      <Space direction="vertical">
        <Badge gradient="aquamarine">aqua</Badge>
        <Badge gradient="blue">blue</Badge>
        <Badge gradient="orange">orange</Badge>
        <Badge gradient="red">red</Badge>
      </Space>

      {/* <Title>Text</Title> */}
      <Badge gradient="orange" text="text" />
    </>
  );
};
```
