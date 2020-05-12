export function renderTemplate(_view, viewMarkup) {
	const lowerCaseView = _view.toLowerCase();
	const view = lowerCaseView.charAt(0).toUpperCase() + lowerCaseView.slice(1)

	return (
		`<html lang="en">
			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>HOME PAGE</title>
			</head>
			<body>
				<h1> This is ${view} page </h1>
				<div id="${lowerCaseView}-react">${viewMarkup}</div>
			</body>
			<script src="${view}.js"></script>
		</html>`
	)
}