function formatDate(datestring) {
	return (new Date(datestring)).toLocaleDateString("en-us", {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	})
}

export { formatDate }