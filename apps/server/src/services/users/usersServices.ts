import { users } from "@/mocks";
import { User, ApiResponse, PublicUser } from "@honokit/shared/types";

const fetchUserByField = <T extends keyof User>(
    field: T, value: User[T]
): ApiResponse<User> => {
  if (value == null || field == null) {
    return { success: false, error: { message: 'Field and value are required', code: '400' } }
  }
  const user = users.find((user) => user[field] === value)
  if (user) return { success: true, data: user }
  return { success: false, error: { message: 'User not found', code: '404' } }
}
const fetchAllUsers = (): ApiResponse<PublicUser[]> => {
  if (users.length) return {
    success: true,
    data: users.map((user) => ({ name: user.name, email: user.email, role: user.role, id: user.id }))
  }
  return { success: true, data: users }
}

export { fetchUserByField, fetchAllUsers }