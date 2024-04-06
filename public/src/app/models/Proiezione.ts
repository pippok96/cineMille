import { Film } from "./Film";
import { Sala } from "./Sala";

export interface Proiezione {
    id :number,
    orario :string,
    sala :Sala,
    film :Film,
    dataInizio :Date,
    dataFine :Date
    
}