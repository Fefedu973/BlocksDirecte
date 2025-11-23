import {MarkSchoolReportSubject} from "./MarkSchoolReportSubject";

export interface MarkSchoolReport {
    dateCalcul: string;
    moyenneGenerale: string;
    moyenneClasse: string;
    moyenneMin: string;
    moyenneMax: string;
    nomPP: string;
    appreciationPP: string;
    nomCE: string;
    appreciationCE: string;
    appreciationVS: string;
    decisionDuConseil: string;
    rang: number;
    effectif: string;
    appreciationGeneraleClasse: string;
    disciplines: MarkSchoolReportSubject[];
    disciplinesSimulation: MarkSchoolReportSubject[];
}