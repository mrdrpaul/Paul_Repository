import type {Character} from "../CharacterType.ts";
import axios from "axios";

export function fetchCharacters():Promise<Character[]>{
    return axios.get("/api/characters").then((r)=>r.data)
}