import { useIntl } from "react-intl";

export const Translate = (id) => {
	const intl = useIntl();
	return intl.formatMessage({
		id: id,
	});
};
