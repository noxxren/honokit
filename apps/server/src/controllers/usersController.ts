import { Context } from "hono";
import * as usersServices from "@/services/users/usersServices";
import { handlerApiResponse } from "@/helper/helper";

const getAllUsers = async (c: Context) => {
  const res = usersServices.fetchAllUsers()

  return handlerApiResponse(c, res)
}
const findUserByFields = async (c: Context) => {
  const queries = c.req.query()
  const res = usersServices.fetchUserByField('name', 'John')

  return handlerApiResponse(c, res)
}
const getUserById = async (c: Context) => {
  const id = c.req.param('id')
  if (!id) return c.json({ error: 'Id must not be empty' }, 400)

  const res = usersServices.fetchUserByField('id', id.toString())
  return handlerApiResponse(c, res)
}

export { getAllUsers, findUserByFields, getUserById }