# webpack执行流程 

## WebpackOptionsDefaulter

设置options的默认值

## 将options.plugins配置挂载到compiler的hooks上

## WebpackOptionsApply

执行内置plugins

## NodeEnvironmentPlugin

将文件系统的api挂载到compiler上

## compile hooks

## compilation hooks
### params

#### compilationDependencies
#### contextModuleFactory
#### normalModuleFactory

## buildModule

## normalModule 与 AST
## AST什么时候生成，文件是按照什么顺序解析的