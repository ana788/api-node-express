import user from "../../models/userModel.js"

const createUser = async(req, res) => {
    //Create
    try {
        const [result] = await user.create(req.body)
        if(result.affectedRows == 0){
            res.status(201).json({
                message: "User created",
                user:{
                    id: result.insertId,
                    ...user
                }
            })
    
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({message: "Server error"})
    }
}

export default createUser