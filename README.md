<p align="center">
    <h1>ArtX</h1>
</p>
<p align="center">
  <b>ArtX</b> is a <b>web3 marketplace</b> for artists to showcase their work and sell them as NFTs. Built on top of ThridWeb SDK. Designed to <b>ease</b> things up for <b>fast</b> selling with <b>complete traceability</b> and <b>security</b> in mind.
</p>

## ⚡️ Quickstart

```

```

## 🤖 Benchmarks

These tests are performed by [TechEmpower](https://www.techempower.com/benchmarks/#section=data-r19&hw=ph&test=plaintext) and [Go Web](https://github.com/smallnest/go-web-framework-benchmark). If you want to see all results, please visit our [Wiki](https://docs.gofiber.io/extra/benchmarks).

<p float="left" align="middle">
  <img src="https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark-pipeline.png" width="49%">
  <img src="https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark_alloc.png" width="49%">
</p>

## ⚙️ Installation

Make sure you have Go installed ([download](https://go.dev/dl/)). Version `1.14` or higher is required.

Initialize your project by creating a folder and then running `go mod init github.com/your/repo` ([learn more](https://go.dev/blog/using-go-modules)) inside the folder. Then install Fiber with the [`go get`](https://pkg.go.dev/cmd/go/#hdr-Add_dependencies_to_current_module_and_install_them) command:

```bash
go get -u github.com/gofiber/fiber/v2
```

## 🎯 Features

-   Robust [routing](https://docs.gofiber.io/routing)
-   Serve [static files](https://docs.gofiber.io/api/app#static)
-   Extreme [performance](https://docs.gofiber.io/extra/benchmarks)
-   [Low memory](https://docs.gofiber.io/extra/benchmarks) footprint
-   [API endpoints](https://docs.gofiber.io/api/ctx)
-   [Middleware](https://docs.gofiber.io/middleware) & [Next](https://docs.gofiber.io/api/ctx#next) support
-   [Rapid](https://dev.to/koddr/welcome-to-fiber-an-express-js-styled-fastest-web-framework-written-with-on-golang-497) server-side programming
-   [Template engines](https://github.com/gofiber/template)
-   [WebSocket support](https://github.com/gofiber/websocket)
-   [Server-Sent events](https://github.com/gofiber/recipes/tree/master/sse)
-   [Rate Limiter](https://docs.gofiber.io/api/middleware/limiter)
-   Translated in [15 languages](https://docs.gofiber.io/)
-   And much more, [explore Fiber](https://docs.gofiber.io/)

## 💡 Techstack Used-

| Technology                                        | Description                                                                                                                                                         |
| :------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ThirdWeb     | Tool to build NFT contracts easily                                                                           
| Sanity.io       | Cloud storage for storing users and nfts                                                                                                         
| React.js             | For client side rendering                                                                                                       |
| Metamask     | A Browser Wallet. Metamask is used for Authentication as well as signing the transactions                                                                                                            |
| [redirect](https://github.com/gofiber/redirect)   | Redirect middleware                                                                                                                                                 |
| [rewrite](https://github.com/gofiber/rewrite)     | Rewrite middleware rewrites the URL path based on provided rules. It can be helpful for backward compatibility or just creating cleaner and more descriptive links. |
| [storage](https://github.com/gofiber/storage)     | Premade storage drivers that implement the Storage interface, designed to be used with various Fiber middlewares.                                                   |
| [template](https://github.com/gofiber/template)   | This package contains 8 template engines that can be used with Fiber `v1.10.x` Go version 1.13 or higher is required.                                               |
| [websocket](https://github.com/gofiber/websocket) | Based on Fasthttp WebSocket for Fiber with Locals support!                                                                                                          |


## ⚠️ Limitations
* Due to Fiber's usage of unsafe, the library may not always be compatible with the latest Go version. Fiber 2.29.0 has been tested with Go versions 1.14 to 1.18.
* Fiber is not compatible with net/http interfaces. This means you will not be able to use projects like gqlgen, go-swagger, or any others which are part of the net/http ecosystem.

## 👀 Examples
                                                                      

## 🧬 External Middleware

List of externally hosted middleware modules and maintained by the [Fiber team](https://github.com/orgs/gofiber/people).

| Middleware                                        | Description                                                                                                                                                         |
| :------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [adaptor](https://github.com/gofiber/adaptor)     | Converter for net/http handlers to/from Fiber request handlers, special thanks to @arsmn!                                                                           |
| [helmet](https://github.com/gofiber/helmet)       | Helps secure your apps by setting various HTTP headers.                                                                                                             |
| [jwt](https://github.com/gofiber/jwt)             | JWT returns a JSON Web Token \(JWT\) auth middleware.                                                                                                               |
| [keyauth](https://github.com/gofiber/keyauth)     | Key auth middleware provides a key based authentication.                                                                                                            |
| [redirect](https://github.com/gofiber/redirect)   | Redirect middleware                                                                                                                                                 |
| [rewrite](https://github.com/gofiber/rewrite)     | Rewrite middleware rewrites the URL path based on provided rules. It can be helpful for backward compatibility or just creating cleaner and more descriptive links. |
| [storage](https://github.com/gofiber/storage)     | Premade storage drivers that implement the Storage interface, designed to be used with various Fiber middlewares.                                                   |
| [template](https://github.com/gofiber/template)   | This package contains 8 template engines that can be used with Fiber `v1.10.x` Go version 1.13 or higher is required.                                               |
| [websocket](https://github.com/gofiber/websocket) | Based on Fasthttp WebSocket for Fiber with Locals support!                                                                                                          |

