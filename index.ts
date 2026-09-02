const srv = Bun.serve({
    port: 1337,
    routes: {
        "/teste": {
            GET: async (req) {
                const url = new URL(requestAnimationFrame.url)
                const search = url.searchParams
                const nome = search.get('nome')
                console.log(nome);
                return new Response('Francisco GET')
            },
            PUT: () => new Response('Francisco PUT'),
            POST: async (req) {
                const body = await req.body.text()
                console.log(body);
                return new Response('Francisco POST')  
            },
            DELETE: () => new Response('Francisco DELETE')
        }
    }
})

console.log(`⚡ Servidor rodando em ${srv.url}`);