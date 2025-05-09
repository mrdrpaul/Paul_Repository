import type {Character} from "../CharacterType.ts";
import axios from "axios";

export function fetchCharacters(accountId: number):Promise<Character[]>{
    return axios.get(`/api/characters/${accountId}`).then((r)=>r.data)
}