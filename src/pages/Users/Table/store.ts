import { makeAutoObservable } from "mobx";
import axios from "axios";
import { showError } from "../../../utils/showError";
import Loader from "../../../utils/loader";
import { User } from "../../../utils/apiInterfaces";

export class UserStore {
	public users: User[] = [];
	public loader = new Loader();

	constructor() {
		makeAutoObservable(this);
		this.getAllUsers();
	}

	public getAllUsers = async () => {
		this.loader.start();
		try {
			const fetch = await axios({
				method: "get",
				url: "http://localhost:3001/user",
			});
			this.users = fetch.data;
		} catch {
			showError("Não foi possível efetuar a busca.", "Erro.");
		} finally {
			this.loader.end();
		}
	};
}
