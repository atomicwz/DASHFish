import { makeAutoObservable } from "mobx";
import axios from "axios";
import Loader from "../../utils/loader";
import { showError, showSuccess } from "../../utils/showError";
import { BASE_URL } from "../../utils/api.endpoint";

export class LoginStore {
	public email= "";
	public verifiedPassword = "";
	public password= "";
	public name = "";
	public loader = new Loader();
	constructor() {
		makeAutoObservable(this);
	}

	public onCreateUser = async (onSuccess: () => void) => {
		this.loader.start();
		try {
			await axios({
				method: "post",
				url: `${BASE_URL}user`,
				data: {
					email: this.email,
					password: this.password,
					name: this.name,
				},
			});
			showSuccess("Usuário criado com sucesso!", "Feito! 🤩");
			onSuccess();

		} catch {
			if (this.password !== this.verifiedPassword) {
				showError("As senhas não coincidem", "Erro. 🙃");
				this.loader.end();
				return;
			}
			showError("Dados incorretos", "Erro. 🙃");
			this.loader.end();
		} finally {
			this.loader.end();
		}
	};
}
