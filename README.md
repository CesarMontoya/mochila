This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the database
```
docker-compose up -d
```

## Setup env variables
Rename __.env.template__ to __.env__

## MongoDB local URL
```
MONGO_URL=mongodb://localhost:27017/mochiladb
```

## Rebuild Node modules and run dev server

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Populate DB with seed Data.
## Using the navigator or Postman, with GET method, following next steps:

Populate database with a single command:

- localhost:3000/api/seed/

To populate each collection, follow the next steps:

1. localhost:3000/api/seed/workspace
2. localhost:3000/api/seed/group
3. localhost:3000/api/seed/user
4. localhost:3000/api/seed/activity
5. localhost:3000/api/seed/grade

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
