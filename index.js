const JOSNServer = require ('json-server')
const MPServer = JOSNServer.create()
const router = JOSNServer.router('db.json')
const middleware = JOSNServer.defaults()

const PORT = 3000 || process.env.PORT

MPServer.use(middleware)
MPServer.use(router)

MPServer.listen(PORT,() => {
    console.log((`mediaplayer server started running at PORT:${PORT},and waiting for the client request..`));
    
})