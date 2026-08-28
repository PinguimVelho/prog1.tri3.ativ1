const srv = Bun.serve({
    port: 1337,
    routes: {
        "/teste": {
            GET: () => new Response('Francisco GET'),
            PUT: () => new Response('Francisco PUT'),
            POST: () => new Response('Francisco POST'),
            DELETE: () => new Response('Francisco DELETE')
        }
    }
})

console.log(`⚡ Servidor rodando em ${srv.url}`);
