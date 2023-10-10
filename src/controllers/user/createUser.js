import user from "../../models/userModel.js"
import zodErrorParse from '../../helpers/zodErrorParse.js'

const createUser = async (req, res) => {
    //Create
    try {
        const userValidated = user.validateCreateUser(req.body)
        if (userValidated.success === false) {
            const zodError = zodErrorParse(userValidated.error)
            return res.status(400).json({
                error: 'Dados inválidos',
                fields: zodError
            })
        }

        const [result] = await user.create(userValidated.data)
        if (result.affectedRows === 1) {
            const newUser = req.body
            delete newUser.pass
            res.status(201).json({
                sucess: "User created",
                user: {
                    id: result.insertId,
                    ...newUser
                }
            })

        }
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "Server error" })
    }
}

export default createUser