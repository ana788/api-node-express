import user from "../../models/userModel.js"
import zodErrorParse from '../../helpers/zodErrorParse.js'

const updateUser = async (req, res) => {
    //Update
    try {
        const userValidated = user.validateUpdateUser(req.body)
        if(userValidated.success === false){
            const zodError = zodErrorParse(userValidated.error)
            return res.status(400).json({
                error: 'Dados inválidos',
                fields: zodError
            })
        }

        const [result] = await user.update(userValidated.data)
        if (result.affectedRows === 1) {
            res.status(200).json({
                success: `Usuário com id:${req.body.id} atualizado com sucesso`,
                user: {
                    ...req.body
                }
            })
        } else {
            res.status(404).json({
                error: `Usuário com id:${req.body.id} não encontrado`,
            })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Server error" })
    }
}

export default updateUser