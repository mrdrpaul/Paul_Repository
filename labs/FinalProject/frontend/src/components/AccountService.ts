import type {Account} from "../AccountType.ts";
import axios from 'axios'

export function fetchAccounts():Promise<Account[]>{
    return axios.get("/api/accounts").then((r) => r.data)
}