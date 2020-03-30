install:
	npm install

publish:
	npm publish --dry-run

link:
	sudo npm link

lint:
	npx eslint .