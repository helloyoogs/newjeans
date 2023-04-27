const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/newjeans/',
  outputDir: 'docs', // 깃허브 페이지에서 사용할 파일이 생성되는 경로
})
