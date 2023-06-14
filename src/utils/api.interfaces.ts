export interface User {
	id: string;
	name: string;
	email: string;
	isAdmin: boolean;
	createdAt: Date;
	updatedAt: Date;
	deletedAt: Date | null;
}

export interface IsAdmin {
	isAdmin: boolean;
}
