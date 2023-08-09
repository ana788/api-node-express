const logger = (req,res,next) => {
    console.log(`${req.method} - ${req.originalUrl}`)
    console.log(req.hostname)
    console.log(req.ip)
    next()
}

export default logger