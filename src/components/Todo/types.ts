import { IMainLayout } from '../Layout/types'

export interface ISearch {
  title: string, text?: string
}

export interface IUserdata {
  _typename?: string,
  id?: string, 
  username?: string,
  password?: string,
  todos?: Array<any>
}

export type fetchResultType = {
  addNewTodo: IMainLayout
} 