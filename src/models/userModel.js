import db from '../database/db.js'
import {z} from 'zod'

const userSchema = z.object({
   id: z.number({
      required_error: 'O id é obrigatório',
      invalid_type_error: 'O id deve ser um número',
   }),

   name: z.string({
      required_error: 'O name é obrigatório',
      invalid_type_error: 'O name deve ser uma string',
   })
   .min(3, {message: 'O name deve ter no mínimo 3 caracteres'})
   .max(200, {message: 'O name deve ter no máximo 200 caracteres'}),

   email: z.string({
      required_error: 'O email é obrigatório',
      invalid_type_error: 'O email deve ser uma string',
   })
   .email({message: 'O email deve ser válido'})
   .min(3, {message: 'O email deve ter no mínimo 3 caracteres'})
   .max(200, {message: 'O email deve ter no máximo 200 caracteres'}),
  
   pass: z.string({
      required_error: 'A senha é obrigatório',
      invalid_type_error: 'A senha deve ser uma string',
   })
   // .regex(new RegExp('/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/'), {message: 'A senha deve ter no mínimo 8 caracteres, 1 letra maiúscula e 1 número'}),
   .min(6, { message: "A senha deve ter no mínimo 6 caracteres." })
      .regex(new RegExp('.*[A-Z].*'), { message: "A senha deve ter no mínimo uma letra maiúscula." })
      .regex(new RegExp('.*[a-z].*'), { message: "A senha deve ter no mínimo uma letra minúscula." })
      .regex(new RegExp('.*[0-9].*'), { message: "A senha deve ter no mínimo um número." })
      .regex(new RegExp('.*[`~<>?,./!@#$%^&*()\\-_+="\'|{}\\[\\];:\\\\].*'), { message: "A senha deve ter no mínimo um caractere especial." })
      .max(20, { message: "A senha deve ter no máximo 20 caracteres." }),

   avatar: z.string({
      required_error: 'O avatar é obrigatório',
      invalid_type_error: 'O avatar deve ser uma string'
   })
   .url({message: 'O avatar deve ser uma URL válida'})
   .optional()

})

const validateCreateUser = (user) => {
   const partialUserSchema = userSchema.partial({id: true})
   const result = partialUserSchema.safeParse(user)
   return result
}

const validateUpdateUser = (user) =>{
   const partialUserSchema = userSchema.partial({pass: true})
   return partialUserSchema.safeParse(user)
}
    
const list = async () => {
   return await db.query('SELECT * FROM users')
}

const create = async (user) => {
    const {name, email, pass, avatar} = user
    return await db.query('INSERT INTO users (name, email, pass, avatar) VALUES (?,?,?,?)', [name, email, pass, avatar]) //retorna se deu sucesso ou não
 }

 const get = async (id) => {
   return await db.query('SELECT * FROM users WHERE id = ?;', [id])
 }

 const remove = async (id) => {
   return await db.query('DELETE FROM users WHERE id = ?;', [id]) 
}

const update = async (user) => {
   const {id, name, email, pass, avatar} = user
   return await db.query('UPDATE users SET name = ?, email = ?, pass = ?, avatar = ? WHERE id = ?;', [name, email, pass, avatar, id])
}

export default {list, create, remove, get, update, validateCreateUser, validateUpdateUser}