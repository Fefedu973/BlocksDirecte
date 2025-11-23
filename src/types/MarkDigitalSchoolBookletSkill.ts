import {MarkTeacher} from "./MarkTeacher";

export interface MarkDigitalSchoolBookletSkill {
    cdt: boolean;
    codeMatiere: string;
    libelleMatiere: string;
    isFirstOfMatiere: boolean;
    nbElemProgMatiere: number;
    codeSousMatiere: string;
    libelleSousMatiere: string;
    isFirstOfSousMatiere: boolean;
    nbElemProgSousMatiere: number;
    libelleElementProgramme: string;
    idElemProg: number;
    valeur: string;
    afc: number;
    professeurs: MarkTeacher[];
}