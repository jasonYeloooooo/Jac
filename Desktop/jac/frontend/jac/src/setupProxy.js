const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = function(app){
  app.use(
	createProxyMiddleware("/api", { // 目标地址(需要代理的地址)
 	  target: "http://localhost:8080", // 转发地址
 	  changeOrigin: true, // 忽悠后端接收的 host 值，true：后端 host，false：前端 host
		 pathRewrite:{ // 将^ /api1 替换成 ''
			"^/api":''
	}
 	}),
 	
  )
}
