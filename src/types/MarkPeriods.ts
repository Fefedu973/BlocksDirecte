import {MarkSchoolReport} from "./MarkSchoolReport";

export interface MarkPeriods {
    idPeriode: string;
    codePeriode: string;
    periode: string;
    annuel: boolean;
    dateDebut: string;
    dateFin: string;
    examenBlanc: boolean;
    cloture: boolean;
    dateConseil: string;
    heureConseil: string;
    heureFinConseil: string;
    salleConseil: string;
    moyNbreJoursApresConseil: number;
    ensembleMatieres: MarkSchoolReport;
}