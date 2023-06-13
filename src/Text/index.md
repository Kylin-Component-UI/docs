# Text 排版

文本的基本格式。

**何时使用**

- 当需要展示标题、段落、列表内容时使用，如文章/博客/日志的文本样式。
- 当需要一列基于文本的基础操作时，如拷贝/省略/可编辑。

## Type

```jsx
import { Text } from 'kylin-ui';

export default () => {
  return (
    <>
      <Text>这是默认标题</Text>
      <br />

      <Text>Code</Text>
      <br />
      <Text code>This is Code Title</Text>
      <br />

      <Text>DeleteLine</Text>
      <br />
      <Text deleteLine>This is DeleteLine Text</Text>
      <br />

      <Text>Underline</Text>
      <br />
      <Text underline>This is Underline Text</Text>
      <br />

      <Text>Italic</Text>
      <br />
      <Text italic>This is Italic Text</Text>
      <br />

      <Text>Strong</Text>
      <br />
      <Text strong>This is Strong Text</Text>
      <br />

      <Text>Mark</Text>
      <br />
      <Text mark>This is Mark Text</Text>
      <br />

      <Text>Ellipsis</Text>
      <br />
      <Text ellipsis>This is Ellipsis Text</Text>

      <br />

      <Text>disabled</Text>
      <br />
      <Text disabled>This is Disabled Text</Text>

      <br />
      <Text>copyable</Text>
      <br />
      <Text copyable onClick={(e) => console.log(e)}>
        This is Copy Text
      </Text>
    </>
  );
};
```
