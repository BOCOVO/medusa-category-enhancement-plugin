# Contributing

## Code of conduct

Please read our [code of conduct](./CODE_OF_CONDUCT.md).

## Getting coding on the project

### How to start the project

You can follow these steps to get ready to code on the project.

1. Clone the project and install dependencies
2. Create `.env` file based on the `.env.template`

```bash
cp .env.template .env
```

You don't need to change these environment variables. There are suited for development on the plugin.

3. We use `postgres` database for testing and provide a docker compose file to create a database for the project.
Now run this command to start the database

```bash
docker compose up -d
```

4. Start the project

```bash
yarn dev
```

### How to contribute

- Create issue on github
- Fork the repository
- Create pull request on github
