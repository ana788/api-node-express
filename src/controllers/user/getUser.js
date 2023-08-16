const getUser = (req, res) => {
    const users = {id: 3, name: "José"}
    res.json(users)
}

export default getUser