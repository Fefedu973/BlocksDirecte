import {Modules} from "./Modules";
import {InvalidSchoolYearFormat} from "../errors/InvalidSchoolYearFormat";
import {MARKS_GET} from "../rest/endpoints";
import {Marks} from "../types/Marks";

export class MarkModules extends Modules {
    public async getMark(schoolYear?: string): Promise<Marks>
    {
        if (schoolYear)
        {
            if (!/[0-9]+-[0-9]+/i.test(schoolYear))
                throw new InvalidSchoolYearFormat("The string your provided doesn't follow format 'XXXX-XXXX'");
        }
        else
            schoolYear = "";

        const account = this.getSelectedAccount();

        const res = await this.restManager.post<Marks>(
            MARKS_GET(
                account.typeCompte,
                account.id
            ),
            {
                anneeScolaire: schoolYear
            },
            {
                "X-Token": this.credentials.token!
            }
        );

        return res.data;
    }
}