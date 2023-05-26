import { environment } from "src/environments/environment";


export const FIND_USER_BY_ID_URL: string = `${environment.HOST}/users`
export const LIST_USER_URL: string = `${environment.HOST}/users?per_page=6`
