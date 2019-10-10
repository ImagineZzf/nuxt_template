# 测试环境打包

$ cd /data/www/nuxt_template;
$ npm install;
$ npm run build;
$ pm2 start npm --name "nuxt_template_test" -- run start;

# 正式环境打包

$ cd /data/www/nuxt_template;
$ npm install;
$ npm run build:prod;
$ pm2 start npm --name "nuxt_template" -- run prod;
