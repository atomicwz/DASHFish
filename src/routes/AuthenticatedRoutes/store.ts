import { makeAutoObservable } from "mobx";
import axios from "axios";
import Loader from "../../utils/loader";
import { User } from "../../utils/apiInterfaces";
import { showError } from "../../utils/showError";

export class RouterStore {
	public loader = new Loader();
	public isAdmin = false;
	public token = window.localStorage.getItem("token");
	private id = window.localStorage.getItem("userId");


	constructor() {
		makeAutoObservable(this);
		this.getUserAuthenticated();
	}

	public getUserAuthenticated = async () => {
		this.loader.start();
		try {
			const data: User = await axios.get(
				`http://localhost:3001/user/${this.id}`,
				{
					headers: {Authorization: `Bearer ${this.token}`},
				},
			);
			this.isAdmin = data.isAdmin;
		} catch {
			showError("Não foi possível efetuar esta ação.", "Erro.");
		} finally {
			this.loader.end();
		}
	};
}
