import { makeAutoObservable } from "mobx";
import axios from "axios";
import { showError, showSuccess } from "../../../utils/showError";
import Loader from "../../../utils/loader";
import { User } from "../../../utils/api.interfaces";
import { BASE_URL } from "../../../utils/api.endpoint";

export class UserStore {
	public users: User[] = [];
	public loader = new Loader();
	private token = window.localStorage.getItem("token");

	constructor() {
		makeAutoObservable(this);
		this.getAllUsers();
	}

	public getAllUsers = async () => {
		this.loader.start();
		try {
			const fetch = await axios({
				method: "get",
				url: `${BASE_URL}user`,
				headers: {Authorization: `Bearer ${this.token}`},
			});
			this.users = fetch.data;
		} catch {
			showError("Não foi possível efetuar a busca.", "Erro.");
		} finally {
			this.loader.end();
		}
	};

	public deleteUser = async (id: string) => {
		this.loader.start();
		try {
			await axios.delete(
				`${BASE_URL}user/${id}`,
				{
					headers: {Authorization: `Bearer ${this.token}`},
				},
			);
			showSuccess("O usuário foi removido!", "Sucesso!");
			await this.getAllUsers();
		} catch {
			showError("Não foi possível efetuar esta ação.", "Erro.");
		} finally {
			this.loader.end();
		}
	};
}
