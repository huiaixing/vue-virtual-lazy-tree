export const findChildrenByValue = (tree: any, value: any) => {
  if (!value) {
    return tree.map((i: any) => {
      return {
        ...i,
        children: [],
      };
    });
  }

  for (const node of tree) {
    if (node.value === value) {
      return node.children || null;
    }

    if (node.children && node.children.length > 0) {
      const result: any = findChildrenByValue(node.children, value);
      if (result) {
        return result;
      }
    }
  }
  return null;
};
