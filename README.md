# Blog

## Build Setup

``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn run docs:dev

# build for production with minification
yarn run docs:build
```

## Deploy

File deploy.sh in root directory do everything for you.
```
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:sharemeans/sharemean.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:sharemeans/blog.git master:gh-pages

cd -

```

The only thing you need to do is, sh deploy.sh

Before that, you should add your respostory on github. And modify <USERNAME> to your own account name in deploy.sh.
