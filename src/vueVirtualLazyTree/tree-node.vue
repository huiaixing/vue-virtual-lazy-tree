<template>
  <div
    v-show="node.visible"
    ref="node$"
    :class="[
      ns.b('node'),
      ns.is('expanded', expanded),
      ns.is('current', node.isCurrent),
      ns.is('hidden', !node.visible),
      ns.is('focusable', !node.disabled),
      ns.is('checked', !node.disabled && node.checked),
      getNodeClass(node),
    ]"
    role="treeitem"
    tabindex="-1"
    :aria-expanded="expanded"
    :aria-disabled="node.disabled"
    :aria-checked="node.checked"
    :draggable="tree.props.draggable"
    :data-key="getNodeKey(node)"
    @click.stop="handleClick"
    @contextmenu="handleContextMenu"
    @dragstart.stop="handleDragStart"
    @dragover.stop="handleDragOver"
    @dragend.stop="handleDragEnd"
    @drop.stop="handleDrop"
  >
    <div
      :class="ns.be('node', 'content')"
      :style="{ paddingLeft: (node.level - 1) * tree.props.indent + 'px' }"
    >
      <el-icon
        v-if="tree.props.icon || CaretRight"
        :class="[
          ns.be('node', 'expand-icon'),
          ns.is('leaf', node.isLeaf),
          {
            expanded: !node.isLeaf && expanded,
          },
        ]"
        @click.stop="handleExpandIconClick"
      >
        <component :is="tree.props.icon || CaretRight" />
      </el-icon>
      <el-checkbox
        v-if="showCheckbox"
        :model-value="node.checked"
        :indeterminate="node.indeterminate"
        :disabled="!!node.disabled"
        @click.stop
        @change="handleCheckChange"
      />
      <el-icon
        v-if="node.loading"
        :class="[ns.be('node', 'loading-icon'), ns.is('loading')]"
      >
        <loading />
      </el-icon>
      <node-content :node="node" :render-content="renderContent" />
    </div>
    <el-collapse-transition>
      <div
        v-if="!renderAfterExpand || childNodeRendered"
        v-show="expanded"
        :class="ns.be('node', 'children')"
        role="group"
        :aria-expanded="expanded"
      >
        <el-tree-node
          v-for="child in node.childNodes"
          :key="getNodeKey(child)"
          :render-content="renderContent"
          :render-after-expand="renderAfterExpand"
          :show-checkbox="showCheckbox"
          :node="child"
          :accordion="accordion"
          :props="props"
          @node-expand="handleChildNodeExpand"
        />
      </div>
    </el-collapse-transition>
  </div>
</template>
<script lang="ts">
// @ts-nocheck
import {
  defineComponent,
  getCurrentInstance,
  inject,
  nextTick,
  provide,
  watch,
} from 'vue';
import ElCollapseTransition from 'element-plus/es/components/collapse-transition/index.mjs';
import ElCheckbox from 'element-plus/es/components/checkbox/index.mjs';
import { ElIcon } from 'element-plus/es/components/icon/index.mjs';
import { CaretRight, Loading } from '@element-plus/icons-vue';
import { useNamespace } from 'element-plus/es/hooks/index.mjs';
import NodeContent from './tree-node-content.vue';
import { useNodeExpandEventBroadcast } from './model/useNodeExpandEventBroadcast';
import { dragEventsKey } from './model/useDragNode';
import Node from './model/node';

import type { PropType } from 'vue';
import type { TreeOptionProps } from './tree.type';
import { useCommonMethod } from './hooks/useCommonMethod';

export default defineComponent({
  name: 'ElTreeNode',
  components: {
    ElCollapseTransition,
    ElCheckbox,
    NodeContent,
    ElIcon,
    Loading,
  },
  props: {
    node: {
      type: Node,
      default: () => ({}),
    },
    props: {
      type: Object as PropType<TreeOptionProps>,
      default: () => ({}),
    },
    accordion: Boolean,
    renderContent: Function,
    renderAfterExpand: Boolean,
    showCheckbox: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['node-expand'],
  setup(props, ctx) {
    const {
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
    } = useCommonMethod(props, ctx);

    const ns = useNamespace('tree');
    const { broadcastExpanded } = useNodeExpandEventBroadcast(props);
    const dragEvents = inject(dragEventsKey);
    const instance = getCurrentInstance();

    provide('NodeInstance', instance);

    if (props.node.expanded) {
      expanded.value = true;
      childNodeRendered.value = true;
    }

    const childrenKey = tree.props.props['children'] || 'children';
    watch(
      () => {
        const children = props.node.data[childrenKey];
        return children && [...children];
      },
      () => {
        props.node.updateChildren();
      },
    );

    watch(
      () => props.node.indeterminate,
      (val) => {
        handleSelectChange(props.node.checked, val);
      },
    );

    watch(
      () => props.node.checked,
      (val) => {
        handleSelectChange(val, props.node.indeterminate);
      },
    );

    watch(
      () => props.node.childNodes.length,
      () => props.node.reInitChecked(),
    );

    watch(
      () => props.node.expanded,
      (val) => {
        nextTick(() => (expanded.value = val));
        if (val) {
          childNodeRendered.value = true;
        }
      },
    );

    return {
      ns,
      node$,
      tree,
      expanded,
      childNodeRendered,
      oldChecked,
      oldIndeterminate,
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
      CaretRight,
    };
  },
});
</script>
