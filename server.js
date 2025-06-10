const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";

const port = !dev ? process.env.PORT : 3000;

// Create the Express-Next App
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    createServer((req, res) => {
      const parsedUrl = parse(req.url, true);
      const { pathname, query } = parsedUrl;

      // ✅ Serve static files from /public
      const filePath = join(__dirname, "public", pathname);
      if (existsSync(filePath)) {
        const stream = createReadStream(filePath);
        stream.on("open", () => {
          stream.pipe(res);
        });
        stream.on("error", (err) => {
          res.statusCode = 500;
          res.end("Internal Server Error");
        });
        return;
      }

      // 🔁 Let Next.js handle all other requests
      handle(req, res, parsedUrl);
      console.log("pathname", pathname);
    }).listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
