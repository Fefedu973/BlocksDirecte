import {MarkPeriods} from "./MarkPeriods";
import {Mark} from "./Mark";
import {MarkSettings} from "./MarkSettings";
import {MarkDigitalSchoolBooklet} from "./MarkDigitalSchoolBooklet";

export interface Marks {
    foStat: string;
    periodes: MarkPeriods[];
    notes: Mark[];
    parametrage: MarkSettings;
    LSUN?: MarkDigitalSchoolBooklet;
}