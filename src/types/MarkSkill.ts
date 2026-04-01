export enum MarkSkillValue {
    ABSENT = 'abs',
    EXEMPT = 'disp',
    NOT_RATED = 'ne',
    NOT_ACHIEVED = '1',
    PARTIALLY_ACHIEVED = '2',
    ACHIEVED = '3',
    EXCEEEDED = '4'
}

export interface MarkSkill {
    descriptif: string;
    idElemProg: number;
    valeur: MarkSkillValue;
    cdt: boolean;
    idCompetence: number;
    idConnaissance: number;
    libelleCompetence: string;
    afc: number;
}