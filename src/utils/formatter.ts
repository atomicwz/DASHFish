import moment from "moment";

export const formatter = {
	dateWithHour: (date: Date | null) => moment(date).format("DD/MM/YYYY HH[h]"),
	dateOnlyYear: (date: Date | null) => moment(date).format("YYYY"),
	date: (date: Date | null | undefined) => `${moment(date).format("L")}`,
};
