import { makeAutoObservable } from "mobx";

export default class Loader {
	public loading = false;

	constructor() {
		makeAutoObservable(this);
	}
	public start() {
		this.loading = true;
	}

	public end() {
		this.loading = false;
	}

	public get isLoading() {
		return this.loading;
	}
}
