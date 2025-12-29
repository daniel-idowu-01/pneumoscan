export type StatItem = {
  icon: string
  value: string
  label: string
}

export type HeroSectionProps = {
  title: string
  subtitle: string
  imageUrl: string
}

export type CoreValueCardProps = {
  icon: string
  title: string
  description: string
}

export type TeamMember = {
  name: string
  role: string
  imageUrl: string
  alt: string
}

export type TeamSectionProps = {
  title: string
  subtitle: string
  members: TeamMember[]
}

export type TestimonialCardProps = {
  quote: string
  name: string
  role: string
  avatarUrl: string
}

export type Testimonial = {
  quote: string
  name: string
  role: string
  avatarUrl: string
}

export type TestimonialsSectionProps = {
  title?: string
  testimonials: Testimonial[]
}

export type ContactInputProps = {
  label: string
  placeholder: string
  type?: string
  optional?: boolean
}

export type FeaturesProps = {
  icon: string
  title: string
  description: string
}

export type SectionHeaderProps = {
  title: string
  subtitle?: string
}

export type DashboardStatsCardProps = {
  title: string
  value: string
  delta?: string
  icon: string
  spinning?: boolean
  deltaColor?: string
}

export interface ProfileStatCardProps {
  label: string
  value: string
  icon: string
  footer: string
  iconClass?: string
  footerClass?: string
}

/**
 * Authentication-related TypeScript types
 */

export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  role: 'admin' | 'radiologist' | 'doctor' | 'staff'
  licenseId?: string
  createdAt?: string
  updatedAt?: string
}

export interface LoginCredentials {
  email: string
  password: string
  rememberMe?: boolean
}

export interface SignupData {
  firstName: string
  lastName: string
  email: string
  password: string
}

export interface AuthResponse {
  success: boolean
  data?: {
    user: User
    accessToken: string
  }
  error?: string
  details?: any[]
}

export interface TokenPayload {
  userId: string
  email: string
  role: string
  iat?: number
  exp?: number
  iss?: string
  aud?: string
}

export interface RefreshTokenPayload {
  userId: string
  type: 'refresh'
  iat?: number
  exp?: number
  iss?: string
  aud?: string
}

export interface VerifyResponse {
  success: boolean
  authenticated: boolean
  user?: {
    userId: string
    email: string
    role: string
  }
  error?: string
}

export interface PasswordStrength {
  isStrong: boolean
  score: number
  feedback: string[]
}

export interface RateLimitResult {
  success: boolean
  limit: number
  remaining: number
  reset: number
}

export interface APIError {
  success: false
  error: string
  code?: string
  details?: any[]
}

export interface APISuccess<T> {
  success: true
  data: T
  message?: string
}

export type APIResponse<T> = APISuccess<T> | APIError

export interface Session {
  user: User
  accessToken: string
  refreshToken?: string
  expiresAt: number
}

export interface AuthContextType {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  login: (email: string, password: string, rememberMe?: boolean) => Promise<void>
  signup: (data: SignupData) => Promise<void>
  logout: () => Promise<void>
  refreshToken: () => Promise<void>
  updateUser: (userData: Partial<User>) => void
}

export interface AuthMiddlewareOptions {
  requireAuth?: boolean
  allowedRoles?: string[]
  redirectTo?: string
}

export interface SecurityConfig {
  maxLoginAttempts: number
  lockoutDuration: number
  passwordMinLength: number
  passwordRequireUppercase: boolean
  passwordRequireLowercase: boolean
  passwordRequireNumbers: boolean
  passwordRequireSpecialChars: boolean
  sessionTimeout: number
  refreshTokenTimeout: number
}

export interface FileUploadValidation {
  isValid: boolean
  error?: string
}

export interface FileUploadOptions {
  maxSize?: number
  allowedTypes?: string[]
}