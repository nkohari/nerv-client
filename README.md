# nerv-client

## Development

Requires [yarn](https://yarnpkg.com) for package management.

To start:
1. Create `config/development.json` with necessary configuration.
2. `$ yarn install`
3. `$ npm run dev`

This will start `webpack-dev-server` on `http://localhost:8081`. By default it will communicate with
the [nerv-server](http://github.com/nkohari/nerv-server) running at `http://localhost:3000`.

## Configuration

The following environment variables are required. You can safely copy and paste this into
`development.json` to get started.

```
{
  "API_HOST": "localhost:3000"
}
```
