start:
	npx babel-node src/bin/brain-games.js

even:
	npx babel-node src/bin/brain-even.js

install:
	npm install

lint:
	npx eslint .

publish:
	npm publish --dry-run
