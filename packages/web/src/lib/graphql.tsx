/* eslint-disable */
import { gql } from "@apollo/client"
import * as Apollo from "@apollo/client"
import * as ApolloReactHooks from "@apollo/client"
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
const defaultOptions = {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: string
}

export type AuthResponse = {
  __typename?: "AuthResponse"
  token: Scalars["String"]
  user: User
}

export type DateTimeFilter = {
  equals?: Maybe<Scalars["DateTime"]>
  gt?: Maybe<Scalars["DateTime"]>
  gte?: Maybe<Scalars["DateTime"]>
  in?: Maybe<Array<Scalars["DateTime"]>>
  lt?: Maybe<Scalars["DateTime"]>
  lte?: Maybe<Scalars["DateTime"]>
  not?: Maybe<NestedDateTimeFilter>
  notIn?: Maybe<Array<Scalars["DateTime"]>>
}

export type EnumRoleFilter = {
  equals?: Maybe<Role>
  in?: Maybe<Array<Role>>
  not?: Maybe<NestedEnumRoleFilter>
  notIn?: Maybe<Array<Role>>
}

export type LoginInput = {
  email: Scalars["String"]
  password: Scalars["String"]
}

export type Mutation = {
  __typename?: "Mutation"
  destroyAccount: Scalars["Boolean"]
  forgotPassword: Scalars["Boolean"]
  login: AuthResponse
  register: AuthResponse
  resetPassword: Scalars["Boolean"]
}

export type MutationForgotPasswordArgs = {
  email: Scalars["String"]
}

export type MutationLoginArgs = {
  data: LoginInput
}

export type MutationRegisterArgs = {
  data: RegisterInput
}

export type MutationResetPasswordArgs = {
  data: ResetPasswordInput
}

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars["DateTime"]>
  gt?: Maybe<Scalars["DateTime"]>
  gte?: Maybe<Scalars["DateTime"]>
  in?: Maybe<Array<Scalars["DateTime"]>>
  lt?: Maybe<Scalars["DateTime"]>
  lte?: Maybe<Scalars["DateTime"]>
  not?: Maybe<NestedDateTimeFilter>
  notIn?: Maybe<Array<Scalars["DateTime"]>>
}

export type NestedEnumRoleFilter = {
  equals?: Maybe<Role>
  in?: Maybe<Array<Role>>
  not?: Maybe<NestedEnumRoleFilter>
  notIn?: Maybe<Array<Role>>
}

export type NestedStringFilter = {
  contains?: Maybe<Scalars["String"]>
  endsWith?: Maybe<Scalars["String"]>
  equals?: Maybe<Scalars["String"]>
  gt?: Maybe<Scalars["String"]>
  gte?: Maybe<Scalars["String"]>
  in?: Maybe<Array<Scalars["String"]>>
  lt?: Maybe<Scalars["String"]>
  lte?: Maybe<Scalars["String"]>
  not?: Maybe<NestedStringFilter>
  notIn?: Maybe<Array<Scalars["String"]>>
  startsWith?: Maybe<Scalars["String"]>
}

export type NestedStringNullableFilter = {
  contains?: Maybe<Scalars["String"]>
  endsWith?: Maybe<Scalars["String"]>
  equals?: Maybe<Scalars["String"]>
  gt?: Maybe<Scalars["String"]>
  gte?: Maybe<Scalars["String"]>
  in?: Maybe<Array<Scalars["String"]>>
  lt?: Maybe<Scalars["String"]>
  lte?: Maybe<Scalars["String"]>
  not?: Maybe<NestedStringNullableFilter>
  notIn?: Maybe<Array<Scalars["String"]>>
  startsWith?: Maybe<Scalars["String"]>
}

export type Query = {
  __typename?: "Query"
  me?: Maybe<User>
  users: UsersResponse
}

export type QueryUsersArgs = {
  cursor?: Maybe<UserWhereUniqueInput>
  distinct?: Maybe<Array<UserScalarFieldEnum>>
  orderBy?: Maybe<Array<UserOrderByWithRelationInput>>
  skip?: Maybe<Scalars["Int"]>
  take?: Maybe<Scalars["Int"]>
  where?: Maybe<UserWhereInput>
}

export enum QueryMode {
  Default = "default",
  Insensitive = "insensitive",
}

export type RegisterInput = {
  email: Scalars["String"]
  firstName: Scalars["String"]
  lastName: Scalars["String"]
  password: Scalars["String"]
}

export type ResetPasswordInput = {
  password: Scalars["String"]
  token: Scalars["String"]
}

export enum Role {
  Admin = "ADMIN",
  User = "USER",
}

export enum SortOrder {
  Asc = "asc",
  Desc = "desc",
}

export type StringFilter = {
  contains?: Maybe<Scalars["String"]>
  endsWith?: Maybe<Scalars["String"]>
  equals?: Maybe<Scalars["String"]>
  gt?: Maybe<Scalars["String"]>
  gte?: Maybe<Scalars["String"]>
  in?: Maybe<Array<Scalars["String"]>>
  lt?: Maybe<Scalars["String"]>
  lte?: Maybe<Scalars["String"]>
  mode?: Maybe<QueryMode>
  not?: Maybe<NestedStringFilter>
  notIn?: Maybe<Array<Scalars["String"]>>
  startsWith?: Maybe<Scalars["String"]>
}

export type StringNullableFilter = {
  contains?: Maybe<Scalars["String"]>
  endsWith?: Maybe<Scalars["String"]>
  equals?: Maybe<Scalars["String"]>
  gt?: Maybe<Scalars["String"]>
  gte?: Maybe<Scalars["String"]>
  in?: Maybe<Array<Scalars["String"]>>
  lt?: Maybe<Scalars["String"]>
  lte?: Maybe<Scalars["String"]>
  mode?: Maybe<QueryMode>
  not?: Maybe<NestedStringNullableFilter>
  notIn?: Maybe<Array<Scalars["String"]>>
  startsWith?: Maybe<Scalars["String"]>
}

export type User = {
  __typename?: "User"
  avatar?: Maybe<Scalars["String"]>
  bio?: Maybe<Scalars["String"]>
  createdAt: Scalars["DateTime"]
  email: Scalars["String"]
  firstName?: Maybe<Scalars["String"]>
  fullName: Scalars["String"]
  id: Scalars["String"]
  lastName?: Maybe<Scalars["String"]>
  password: Scalars["String"]
  role: Role
  updatedAt: Scalars["DateTime"]
}

export type UserOrderByWithRelationInput = {
  avatar?: Maybe<SortOrder>
  bio?: Maybe<SortOrder>
  createdAt?: Maybe<SortOrder>
  email?: Maybe<SortOrder>
  firstName?: Maybe<SortOrder>
  id?: Maybe<SortOrder>
  lastName?: Maybe<SortOrder>
  password?: Maybe<SortOrder>
  role?: Maybe<SortOrder>
  updatedAt?: Maybe<SortOrder>
}

export enum UserScalarFieldEnum {
  Avatar = "avatar",
  Bio = "bio",
  CreatedAt = "createdAt",
  Email = "email",
  FirstName = "firstName",
  Id = "id",
  LastName = "lastName",
  Password = "password",
  Role = "role",
  UpdatedAt = "updatedAt",
}

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>
  NOT?: Maybe<Array<UserWhereInput>>
  OR?: Maybe<Array<UserWhereInput>>
  avatar?: Maybe<StringNullableFilter>
  bio?: Maybe<StringNullableFilter>
  createdAt?: Maybe<DateTimeFilter>
  email?: Maybe<StringFilter>
  firstName?: Maybe<StringNullableFilter>
  id?: Maybe<StringFilter>
  lastName?: Maybe<StringNullableFilter>
  password?: Maybe<StringFilter>
  role?: Maybe<EnumRoleFilter>
  updatedAt?: Maybe<DateTimeFilter>
}

export type UserWhereUniqueInput = {
  email?: Maybe<Scalars["String"]>
  id?: Maybe<Scalars["String"]>
}

export type UsersResponse = {
  __typename?: "UsersResponse"
  count: Scalars["Int"]
  items: Array<User>
}

export type MeFragment = {
  __typename?: "User"
  id: string
  firstName?: Maybe<string>
  lastName?: Maybe<string>
  fullName: string
  email: string
  role: Role
}

export type MeQueryVariables = Exact<{ [key: string]: never }>

export type MeQuery = {
  __typename?: "Query"
  me?: Maybe<{
    __typename?: "User"
    id: string
    firstName?: Maybe<string>
    lastName?: Maybe<string>
    fullName: string
    email: string
    role: Role
  }>
}

export type UserItemFragment = {
  __typename?: "User"
  id: string
  fullName: string
  email: string
  updatedAt: string
}

export type GetUsersQueryVariables = Exact<{
  take?: Maybe<Scalars["Int"]>
  orderBy?: Maybe<Array<UserOrderByWithRelationInput> | UserOrderByWithRelationInput>
  where?: Maybe<UserWhereInput>
  skip?: Maybe<Scalars["Int"]>
}>

export type GetUsersQuery = {
  __typename?: "Query"
  users: {
    __typename?: "UsersResponse"
    count: number
    items: Array<{ __typename?: "User"; id: string; fullName: string; email: string; updatedAt: string }>
  }
}

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars["String"]
}>

export type ForgotPasswordMutation = { __typename?: "Mutation"; forgotPassword: boolean }

export type DestroyAccountMutationVariables = Exact<{ [key: string]: never }>

export type DestroyAccountMutation = { __typename?: "Mutation"; destroyAccount: boolean }

export type LoginMutationVariables = Exact<{
  data: LoginInput
}>

export type LoginMutation = {
  __typename?: "Mutation"
  login: {
    __typename?: "AuthResponse"
    token: string
    user: {
      __typename?: "User"
      id: string
      firstName?: Maybe<string>
      lastName?: Maybe<string>
      fullName: string
      email: string
      role: Role
    }
  }
}

export type RegisterMutationVariables = Exact<{
  data: RegisterInput
}>

export type RegisterMutation = {
  __typename?: "Mutation"
  register: {
    __typename?: "AuthResponse"
    token: string
    user: {
      __typename?: "User"
      id: string
      firstName?: Maybe<string>
      lastName?: Maybe<string>
      fullName: string
      email: string
      role: Role
    }
  }
}

export type ResetPasswordMutationVariables = Exact<{
  data: ResetPasswordInput
}>

export type ResetPasswordMutation = { __typename?: "Mutation"; resetPassword: boolean }

export const MeFragmentDoc = gql`
  fragment Me on User {
    id
    firstName
    lastName
    fullName
    email
    role
  }
`
export const UserItemFragmentDoc = gql`
  fragment UserItem on User {
    id
    fullName
    email
    updatedAt
  }
`
export const MeDocument = gql`
  query Me {
    me {
      ...Me
    }
  }
  ${MeFragmentDoc}
`
export function useMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MeQuery, MeQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return ApolloReactHooks.useQuery<MeQuery, MeQueryVariables>(MeDocument, options)
}
export function useMeLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeQuery, MeQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return ApolloReactHooks.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options)
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>
export const GetUsersDocument = gql`
  query GetUsers($take: Int, $orderBy: [UserOrderByWithRelationInput!], $where: UserWhereInput, $skip: Int) {
    users(take: $take, orderBy: $orderBy, where: $where, skip: $skip) {
      items {
        ...UserItem
      }
      count
    }
  }
  ${UserItemFragmentDoc}
`
export function useGetUsersQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return ApolloReactHooks.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options)
}
export function useGetUsersLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return ApolloReactHooks.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options)
}
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>
export const ForgotPasswordDocument = gql`
  mutation ForgotPassword($email: String!) {
    forgotPassword(email: $email)
  }
`
export function useForgotPasswordMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return ApolloReactHooks.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(
    ForgotPasswordDocument,
    options,
  )
}
export type ForgotPasswordMutationHookResult = ReturnType<typeof useForgotPasswordMutation>
export type ForgotPasswordMutationResult = Apollo.MutationResult<ForgotPasswordMutation>
export type ForgotPasswordMutationOptions = Apollo.BaseMutationOptions<
  ForgotPasswordMutation,
  ForgotPasswordMutationVariables
>
export const DestroyAccountDocument = gql`
  mutation DestroyAccount {
    destroyAccount
  }
`
export function useDestroyAccountMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<DestroyAccountMutation, DestroyAccountMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return ApolloReactHooks.useMutation<DestroyAccountMutation, DestroyAccountMutationVariables>(
    DestroyAccountDocument,
    options,
  )
}
export type DestroyAccountMutationHookResult = ReturnType<typeof useDestroyAccountMutation>
export type DestroyAccountMutationResult = Apollo.MutationResult<DestroyAccountMutation>
export type DestroyAccountMutationOptions = Apollo.BaseMutationOptions<
  DestroyAccountMutation,
  DestroyAccountMutationVariables
>
export const LoginDocument = gql`
  mutation Login($data: LoginInput!) {
    login(data: $data) {
      user {
        ...Me
      }
      token
    }
  }
  ${MeFragmentDoc}
`
export function useLoginMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options)
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>
export const RegisterDocument = gql`
  mutation Register($data: RegisterInput!) {
    register(data: $data) {
      user {
        ...Me
      }
      token
    }
  }
  ${MeFragmentDoc}
`
export function useRegisterMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterMutation, RegisterMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return ApolloReactHooks.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options)
}
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>
export const ResetPasswordDocument = gql`
  mutation ResetPassword($data: ResetPasswordInput!) {
    resetPassword(data: $data)
  }
`
export function useResetPasswordMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return ApolloReactHooks.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(
    ResetPasswordDocument,
    options,
  )
}
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>
export type ResetPasswordMutationResult = Apollo.MutationResult<ResetPasswordMutation>
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<
  ResetPasswordMutation,
  ResetPasswordMutationVariables
>
