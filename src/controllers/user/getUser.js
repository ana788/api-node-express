import user from "../../models/userModel.js"

const getUser = async(req, res) => {
    try {
        const [rows, fields] = await user.get(req.body.id)
        if(rows.length === 0){
            res.status(404).json({
                message: `Usuário não encontrado`,
            })
        } else{
            delete rows[0].pass //para não mostrar o campo senha, que é campo sensível
            res.json(rows[0])
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({message: "Server error"})
    }

}

export default getUser