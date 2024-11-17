from asyncpg import create_pool
from config import DB_DSN, DEV
from typing import Optional
from contextlib import asynccontextmanager


__pool: Optional[create_pool] = None


@asynccontextmanager
async def init_db():
    '''Initializes the database connection pool.'''
    global __pool

    __pool = await create_pool(DB_DSN)

    # this resets the database to its initial state every time the server starts
    # this is only for demonstration purposes
    q1 = ''
    q2 = ''
    with open('data/schema.sql') as f:
        q1 = f.read()
    with open('data/seed.sql') as f:
        q2 = f.read()
    await __pool.execute('''
        DROP SCHEMA public CASCADE;
        CREATE SCHEMA public;
    ''')
    await __pool.execute(q1)
    await __pool.execute(q2)

    yield
    await __pool.close()


async def get_db():
    '''A dependency that returns a database transaction.'''
    async with __pool.acquire() as connection:
        async with connection.transaction():
            yield connection
