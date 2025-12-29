import { ObjectId } from 'mongodb'

export interface User {
  _id?: ObjectId
  email: string
  password: string
  firstName: string
  lastName: string
  role: 'admin' | 'radiologist' | 'doctor' | 'staff'
  licenseId?: string
  refreshTokens?: string[]
  createdAt: Date
  updatedAt: Date
}

export interface UserResponse {
  id: string
  email: string
  firstName: string
  lastName: string
  role: string
  licenseId?: string
  createdAt?: string
  updatedAt?: string
}

export function userToResponse(user: User): UserResponse {
  return {
    id: user._id?.toString() || '',
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    role: user.role,
    licenseId: user.licenseId,
    createdAt: user.createdAt?.toISOString(),
    updatedAt: user.updatedAt?.toISOString(),
  }
}

export async function createUserIndexes(db: any) {
  const users = db.collection('users')
  await users.createIndex({ email: 1 }, { unique: true })
  await users.createIndex({ role: 1 })
  await users.createIndex({ createdAt: -1 })
}