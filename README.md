### Project starter

#### Host on Vercel

Create new project in Vercel dashboard.  
select "Vite" framework preset.

#### Run locally

```bash
git clone https://github.com/maciej-ka/vite-react-router-starter.git
cd vite-react-router-starter
npm i
npm start
```

And visit localhost:5173

#### Run on Docker

Dockerfile contains nginx production setup.  
To test container locally

```bash
npm run docker:start
```

And visit localhost:8000

There is also a debug command in case image has  
problems and needs to be inspected in bash

```bash
npm run docker:debug
```

#### Tests and checks

Project has several tests and checks.  
They are reported in pull requests

- prettier `npm run test:prettier`
- eslint `npm run test:linter`
- typescript `npm run test:typescript`
- playwright `npm run test:integration`

Run them all locally

```bash
npm test
```

Fix Linter and Prettier

```bash
npm run linter:fix
npm run prettier:fix
```

Start Playwright UI client

```bash
npm run test:integration:ui
```

