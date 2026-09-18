import { db } from "./db"

const srv = Bun.serve({
    port: 3000,
    routes: {
        "/user": {
            GET: () => Response.json("", { status: 501 }),

            POST: async (req) => {
                const body = await req.body.json()
                const query = db.query(`
                    INSERT INTO users(username, email, password_hash)
                    VALUES(:username, :email, :password_hash)
                `)
                const dbResp = query.run({
                    ':username': body.username, 
                    ':email': body.email, 
                    ':password_hash': body.password
                })
                return Response.json({
                    "message": "deu boa garote!",
                    dbResp
                })
            },
        },

        "/user/:id": {
            GET: () => Response.json("", { status: 501 }),
            PUT: () => Response.json("", { status: 501 }),
            DELETE: () => Response.json("", { status: 501 }),
        }
    }
})

console.log(`⚡ Servidor rodando em ${srv.url}`);