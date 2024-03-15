module.exports = function (babel) {
  const { types: t } = babel;
  return {
    name: 'disable-link-prefetching',
    visitor: {
      JSXOpeningElement(path) {
        if (path.node.name.name === 'Link') {
          path.node.attributes.push(
            t.jSXAttribute(
              t.jSXIdentifier('prefetch'),
              t.JSXExpressionContainer(t.booleanLiteral(false))
              // t.stringLiteral("force-off")
            )
          );
        }
      },
    },
  };
};
