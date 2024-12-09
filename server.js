const next = import('next'); // this must change to require on production
const http = import('http'); // this must change to require on production

process.env.NODE_ENV = process.env.NODE_ENV || 'production';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = http.createServer((req, res) => {
    handle(req, res).catch((err) => {
      console.error('Error handling request:', err);
      res.statusCode = 500;
      res.end('Internal server error');
    });
  });

  server.listen(port, (err) => {
    if (err) {
      console.error('Error starting server:', err);
      process.exit(1);
    }
    console.log(`> Ready on http://localhost:${port}`);
  });
}).catch((err) => {
  console.error('Error preparing Next.js app:', err);
  process.exit(1);
});
