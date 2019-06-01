# webpack的核心概念

## Entry

> 告诉webpack从哪个文件开始解析modules的依赖关系并生成依赖树

## Output
> 告诉webpack把对依赖数的编译构建结果写出到什么文件

## Loaders
> 由于webpack只认识js文件和json文件，其它的文件类型交给loaders转化。

## Plugins
> 用来对指定的modules进行处理，可以比较灵活的实现你想要实现的功能