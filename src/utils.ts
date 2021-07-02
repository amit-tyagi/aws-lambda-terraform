import bcrypt from "bcrypt"

const encryptPassword = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, 12);
}

export {
  encryptPassword
}