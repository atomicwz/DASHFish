import { makeAutoObservable } from "mobx";

export class HomeStore {
	public user = window.localStorage.getItem("userName");

	constructor() {
		makeAutoObservable(this);
	}
}
