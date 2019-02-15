---
sidebarDepth: 2
---

## 概述

vDom其实是一个虚拟Dom树，由vNode作为节点拼接而成，vNode的父子关系行程了一个vDom树

## vNode存储了什么东西

1.tag

> tag可能是html内建的标签，也可能是组件标签，如“v-component-{id}-{name}”。

2.data

> render函数的第二个参数

3.children

> 后代vNode

4.elm

> vNode对应的dom

5.text

6.context

> 组件实例

7.key

> 新旧vNode对比时需要用到的。如果不使用 key，Vue 会使用一种最大限度减少动态元素并且尽可能的尝试修复/再利用相同类型元素的算法。使用 key，它会基于 key 的变化重新排列元素顺序，并且会移除 key 不存在的元素。

8.componentOptions

## 什么时候调用

1. 创建组件的时候调用

TODO

2. 初始化内建DOM节点时调用

TODO

## 在vue实例中如何存在
