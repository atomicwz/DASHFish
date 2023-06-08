import { makeAutoObservable } from "mobx";
import axios from "axios";
import Loader from "../../utils/loader";
import { showError } from "../../utils/showError";

export class RouterStore {
	public loader = new Loader();
	public isAdmin = false;
	public image = "";
	public token = window.localStorage.getItem("token");
	private id = window.localStorage.getItem("userId");

	constructor() {
		makeAutoObservable(this);
		this.getUserAuthenticated();
	}

	public getUserAuthenticated = async () => {
		this.loader.start();
		try {
			const request = await axios.get(
				`http://localhost:3001/user/${this.id}`,
				{
					headers: {Authorization: `Bearer ${this.token}`},
				},
			);
			const fetchImage = await axios.get(
				`http://localhost:3001/user/profile-image/${request.data.avatar}`,
				{
					headers: {Authorization: `Bearer ${this.token}`},
				},
			);
			this.image = fetchImage.config.url;
			this.isAdmin = request.data.isAdmin;
		} catch {
			showError("Não foi possível efetuar esta ação.", "Erro.");
		} finally {
			this.loader.end();
		}
	};
}
