---
id: pg-options
title: Postgres Connection Options
sidebar_label: Connection Options
---

- `connectionString` (`string | false`, default: `process.env.DATABASE_URL`) - Set this to `false` to disable all connection string & environment variable handling
- `user` (`string`, default: from connection string or `process.env.PGUSER`)
- `password` (`string`, default: from connection string or `process.env.PGPASSWORD`)
- `host` (`string | string[]`, default: from connection string or `process.env.PGHOST`) - if multiple hosts are specified, we will attempt to connect to each one in turn until a successful connection is made.
- `port` (`number | number[]`, default: from connection string or `process.env.PGPORT`) - if multiple ports are specified, there must be exactly the same number of ports as hosts, as each will be treated as a pair.
- `database` (`string`, default: from connection string or `process.env.PGDATABASE`)
- `ssl` (`boolean | 'disable' | 'prefer' | 'require' | 'no-verify' | ConnectionOptions`, default: from connection string or `process.env.PGSSL*`) - If this is not specified at all, this will default to 'prefer', which attempts to make a connection over SSL (without verifying certificates) and then retries without SSL if that fails.
- `schema` (`string | string[]`) - Forces change of the default database schema(s) for every fresh connection, i.e. the library will execute `SET search_path TO schema_1, schema_2, ...` in the background whenever a fresh physical connection is allocated.
- `bigIntMode` (`'string' | 'number' | 'bigint'`, default: `false`) - This option specifies how BigInts should be returned from postgres. All types are supported when writing to BigInt fields. `'string'` and `'bigint'` both support any value that can be contained in a postgres `BigInt` field. `'number'` is simpler to use, but will result in inaccurate values for very large numbers (greater than `Number.MAX_SAFE_INTEGER`). `'bigint'`s cannot be passed to `JSON.stringify`.
- `applicationName`/`fallbackApplicationName` (`string`) - useful for debugging/analytics on the database usage
- `poolSize` (`number`, default: `10`) - the maximum number of connections in the connection pool
- `statementTimeoutMilliseconds` (default: no timeout) - number of milliseconds before a statement in query will time out
- `queryTimeoutMilliseconds` (default: no timeout) - number of milliseconds before a query call will timeout
- `idleInTransactionSessionTimeoutMilliseconds` (`number`, default: no timeout) - number of milliseconds before terminating any session with
- an open idle transaction,
- `idleTimeoutMilliseconds` (`number`, default: `30000`ms) - max milliseconds a client can go unused before it is removed from the pool and destroyed
