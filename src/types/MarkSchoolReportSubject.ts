import {MarkTeacher} from "./MarkTeacher";

export interface MarkSchoolReportSubject {
    id: number;
    codeMatiere: string;
    codeSousMatiere: string;
    discipline: string;
    moyenne: string;
    moyenneClasse: string;
    moyenneMin: string;
    moyenneMax: string;
    coef: number;
    effectif: number;
    rang: number;
    groupeMatiere: boolean;
    idGroupeMatiere: number;
    option: number;
    sousMatiere: boolean;
    saisieAppreciationSSMat: boolean;
    appreciationClasse: string;
    professeurs: MarkTeacher[];
    appreciations: string[];
}