# Makefile
start:
	magic-start

install:
	npm install

start:
	node bin/magic-start.js

publish:
	npm publish --dry-run

link:
	sudo npm link

lint:
	npx eslint .

test:
	npm -s test