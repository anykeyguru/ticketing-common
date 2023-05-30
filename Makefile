build:
	@npm run build
pub:
	@make build
	@git add . 
	@git commit -m "Updates $m"
	@npm version patch
	@npm run build
	@npm publish