import { makeAutoObservable } from "mobx";
import axios from "axios";
import Loader from "../../utils/loader";
import { BASE_URL } from "../../utils/api.endpoint";

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
				`${BASE_URL}user/${this.id}`,
				{
					headers: {Authorization: `Bearer ${this.token}`},
				},
			);
			this.isAdmin = request.data.isAdmin;
			const fetchImage = await axios.get(
				`${BASE_URL}user/profile-image/${request.data.avatar}`,
				{
					headers: {Authorization: `Bearer ${this.token}`},
				},
			);
			this.image = fetchImage.config.url;
		} finally {
			this.loader.end();
		}
	};
}
