from fastapi import FastAPI
import data
from contextlib import asynccontextmanager
from modules import router
from fastapi.middleware.cors import CORSMiddleware
from config import FRONTEND_URL


@asynccontextmanager
async def lifespan(app):
    '''Initializes the database connection pool.'''
    async with data.init_db():
        yield


app = FastAPI(lifespan=lifespan)
app.include_router(router, prefix='/api')


# Allow CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[FRONTEND_URL],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)
