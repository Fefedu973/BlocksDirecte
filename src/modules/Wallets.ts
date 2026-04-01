import {Modules} from "./Modules";
import {WALLETS_DETAILS} from "../rest/endpoints";
import {WalletsDetails} from "../types/WalletsDetails";

export class WalletsModule extends Modules {
  public async getDetails(): Promise<WalletsDetails>
  {
	this.getSelectedAccount();

	const res = await this.restManager.post<WalletsDetails>(
	  WALLETS_DETAILS(),
	  {},
	  {
		"X-Token": this.credentials.token!
	  }
	)

	return (res.data);
  }
}