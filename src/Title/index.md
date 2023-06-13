# Title 排版

文本的基本格式。

**何时使用**

- 当需要展示标题、段落、列表内容时使用，如文章/博客/日志的文本样式。
- 当需要一列基于文本的基础操作时，如拷贝/省略/可编辑。

## Type

```jsx
import { Title } from 'kylin-ui';

export default () => {
  return (
    <>
      <Title>这是默认标题</Title>
      <Title level={1}>这是标题1</Title>
      <Title level={2}>这是标题2</Title>
      <Title level={3}>这是标题3</Title>
      <Title level={4}>这是标题4</Title>
      <Title level={5}>这是标题5</Title>
      <Title level={6}>这是标题6</Title>

      <Title>Code</Title>
      <Title code>This is Code Title</Title>

      <Title>DeleteLine</Title>
      <Title level={4} deleteLine>
        This is DeleteLine Text
      </Title>

      <Title>Underline</Title>
      <Title level={4} underline>
        This is Underline Text
      </Title>

      <Title>Italic</Title>
      <Title level={4} italic>
        This is Italic Text
      </Title>

      <Title>Strong</Title>
      <Title level={4} strong>
        This is Strong Text
      </Title>

      <Title>Mark</Title>
      <Title level={4} mark>
        This is Mark Text
      </Title>

      <Title>Ellipsis</Title>
      <Title level={4} ellipsis>
        This is Ellipsis Text
      </Title>

      <Title>disabled</Title>
      <Title level={4} disabled>
        This is Disabled Text
      </Title>

      <Title>copyable</Title>
      <Title level={4} copyable onClick={(e) => console.log(e)}>
        This is Copy Text
      </Title>
    </>
  );
};
```
