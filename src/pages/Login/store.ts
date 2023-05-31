import { makeAutoObservable } from "mobx";
import axios from "axios";
import Loader from "../../utils/loader";
import { showError, showSuccess } from "../../utils/showError";

export class LoginStore {
	public email= "";
	public password= "";
	public setShowError = false;
	public loader = new Loader();

	constructor() {
		makeAutoObservable(this);
	}

	public onLogin = async (onSuccess: () => void) => {
		this.loader.start();
		try {
			const token = await axios({
				method: "post",
				url: "http://localhost:3001/auth/login",
				data: {
					email: this.email,
					password: this.password,
				},
			});

			if (token.data) {
				window.localStorage.setItem("token", token.data.access_token);
				window.localStorage.setItem("userId", token.data.id);
				window.localStorage.setItem("userName", token.data.userName);
				showSuccess("Você está logado!", "Sucesso!");
				onSuccess();
				return;
			}
		} catch {
			showError("Credenciais incorretas", "Erro.");
		} finally {
			this.loader.end();
		}
	};
}
