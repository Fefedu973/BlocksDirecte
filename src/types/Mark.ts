import {MarkSkill} from "./MarkSkill";

export interface Mark {
    id: number;
    devoir: string;
    codePeriode: string;
    codeMatiere: string;
    libelleMatiere: string;
    codeSousMatiere: string;
    typeDevoir: string;
    enLettre: boolean;
    commentaire: string;
    uncSujet: string;
    uncCorrige: string;
    date: string;
    dateSaisie: string;
    coef: string;
    noteSur: string;
    valeur: string;
    valeurisee: boolean;
    nonSignificatif: boolean;
    moyenneClasse: string;
    minClasse: string;
    maxClasse: string;
    elementsProgramme: MarkSkill[];
}