import { ref, inject, getCurrentInstance } from 'vue';
import {
  isFunction,
  isString,
  debugWarn,
} from 'element-plus/es/utils/index.mjs';
import {
  getNodeKey as getNodeKeyUtil,
  handleCurrentChange,
} from '../model/util';
import { useNodeExpandEventBroadcast } from '../model/useNodeExpandEventBroadcast';
import { dragEventsKey } from '../model/useDragNode';
import Node from '../model/node';
import type { ComponentInternalInstance } from 'vue';
import type { RootTreeType, TreeNodeData } from '../tree.type';

export const useCommonMethod = (props: any, ctx: any) => {
  const tree: any = inject<RootTreeType>('RootTree');
  const instance = getCurrentInstance();
  const { broadcastExpanded } = useNodeExpandEventBroadcast(props);
  const dragEvents: any = inject(dragEventsKey);

  if (!tree) {
    debugWarn('Tree', "Can not find node's tree.");
  }

  // Common state
  const expanded = ref(false);
  const childNodeRendered = ref(false);
  const oldChecked = ref<any>(null);
  const oldIndeterminate = ref<any>(null);
  const node$ = ref(null);

  // Common methods
  const getNodeKey = (node: Node): any => {
    return getNodeKeyUtil(tree.props.nodeKey, node.data);
  };

  const getNodeClass = (node: Node) => {
    const nodeClassFunc = props.props.class;
    if (!nodeClassFunc) {
      return {};
    }
    let className;
    if (isFunction(nodeClassFunc)) {
      const { data } = node;
      className = nodeClassFunc(data, node);
    } else {
      className = nodeClassFunc;
    }

    if (isString(className)) {
      return { [className]: true };
    } else {
      return className;
    }
  };

  const handleSelectChange = (checked: boolean, indeterminate: boolean) => {
    if (
      oldChecked.value !== checked ||
      oldIndeterminate.value !== indeterminate
    ) {
      tree.ctx.emit('check-change', props.node.data, checked, indeterminate);
    }
    oldChecked.value = checked;
    oldIndeterminate.value = indeterminate;
  };

  const handleClick = (e: MouseEvent) => {
    handleCurrentChange(tree.store, tree.ctx.emit, () => {
      const nodeKeyProp = tree?.props?.nodeKey;
      if (nodeKeyProp) {
        const curNodeKey = getNodeKey(props.node);
        tree.store.value.setCurrentNodeKey(curNodeKey);
      } else {
        tree.store.value.setCurrentNode(props.node);
      }
    });
    tree.currentNode.value = props.node;

    if (tree.props.expandOnClickNode) {
      handleExpandIconClick();
    }

    if (tree.props.checkOnClickNode && !props.node.disabled) {
      handleCheckChange(null, {
        target: { checked: !props.node.checked },
      });
    }
    tree.ctx.emit('node-click', props.node.data, props.node, instance, e);
  };

  const handleContextMenu = (event: Event) => {
    if (tree.instance.vnode.props['onNodeContextmenu']) {
      event.stopPropagation();
      event.preventDefault();
    }
    tree.ctx.emit(
      'node-contextmenu',
      event,
      props.node.data,
      props.node,
      instance,
    );
  };

  const handleExpandIconClick = () => {
    if (props.node.isLeaf) return;
    if (expanded.value) {
      tree.ctx.emit('node-collapse', props.node.data, props.node, instance);
      props.node.collapse();
    } else {
      props.node.expand(() => {
        ctx.emit('node-expand', props.node.data, props.node, instance);
      });
    }
  };

  const handleCheckChange = (value: any, ev: any) => {
    props.node.setChecked(ev.target.checked, !tree.props.checkStrictly);
    nextTick(() => {
      const store = tree.store.value;
      tree.ctx.emit('check', props.node.data, {
        checkedNodes: store.getCheckedNodes(),
        checkedKeys: store.getCheckedKeys(),
        halfCheckedNodes: store.getHalfCheckedNodes(),
        halfCheckedKeys: store.getHalfCheckedKeys(),
      });
    });
  };

  const handleChildNodeExpand = (
    nodeData: TreeNodeData,
    node: Node,
    instance: ComponentInternalInstance,
  ) => {
    broadcastExpanded(node);
    tree.ctx.emit('node-expand', nodeData, node, instance);
  };

  // Drag handlers
  const handleDragStart = (event: DragEvent) => {
    if (tree.props.draggable)
      dragEvents.treeNodeDragStart({ event, treeNode: props });
  };

  const handleDragOver = (event: DragEvent) => {
    event.preventDefault();
    if (tree.props.draggable) {
      dragEvents.treeNodeDragOver({
        event,
        treeNode: { $el: node$.value, node: props.node },
      });
    }
  };

  const handleDrop = (event: DragEvent) => {
    event.preventDefault();
  };

  const handleDragEnd = (event: DragEvent) => {
    if (tree.props.draggable) dragEvents.treeNodeDragEnd(event);
  };

  return {
    tree,
    expanded,
    childNodeRendered,
    oldChecked,
    oldIndeterminate,
    node$,
    getNodeKey,
    getNodeClass,
    handleSelectChange,
    handleClick,
    handleContextMenu,
    handleExpandIconClick,
    handleCheckChange,
    handleChildNodeExpand,
    handleDragStart,
    handleDragOver,
    handleDrop,
    handleDragEnd,
  };
};
