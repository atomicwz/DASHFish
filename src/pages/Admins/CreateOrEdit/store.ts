import { makeAutoObservable } from "mobx";
import axios from "axios";
import Loader from "../../../utils/loader";
import { showError, showSuccess } from "../../../utils/showError";

export class CreateUserStore {
	public email= "";
	public verifiedPassword = "";
	public password= "";
	public name = "";
	public id = "";
	public loader = new Loader();
	private token = window.localStorage.getItem("token");

	constructor(id?: string) {
		makeAutoObservable(this);
		if (id) {
			this.id = id;
			this.getUserForEdit();
		}
	}

	public onCreateUser = async (onSuccess: () => void) => {
		this.loader.start();

		try {
			if (!this.id && this.password !== this.verifiedPassword) {
				showError("As senhas não coincidem", "Erro. 🙃");
				this.loader.end();
				return;
			}
			if (this.id) {
				await axios({
					method: "patch",
					url: `http://localhost:3001/user/${this.id}`,
					data: {
						email: this.email,
						name: this.name,
					},
				});
			} else {
				await axios({
					method: "post",
					url: "http://localhost:3001/user/admin",
					data: {
						email: this.email,
						password: this.password,
						name: this.name,
					},
				});
			}
			showSuccess(this.id ? "Usuário editado com sucesso!" : "Usuário criado com sucesso!", "Feito! 🤩");
			onSuccess();

		} catch {
			if (!this.id && this.password !== this.verifiedPassword) {
				showError("As senhas não coincidem", "Erro. 🙃");
				this.loader.end();
				return;
			}
			showError("Dados incorretos", "Erro. 🙃");
		} finally {
			this.loader.end();
		}
	};

	public getUserForEdit = async () => {
		this.loader.start();
		try{
			const user = await axios({
				method: "get",
				url: `http://localhost:3001/user/${this.id}`,
				headers: {Authorization: `Bearer ${this.token}`},
			});

			this.password = user.data.password;
			this.name = user.data.name;
			this.email = user.data.email;
		} catch (err) {
			showError("Não foi possível localizar este usuário", "Erro.");
		} finally {
			this.loader.end();
		}
	};
}
