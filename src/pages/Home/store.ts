import { makeAutoObservable } from "mobx";

export class HomeStore {
	public password= "";
	public setShowError = false;
	public user = window.localStorage.getItem("userName");

	constructor() {
		makeAutoObservable(this);
	}
}
