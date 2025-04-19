from fastapi import FastAPI
from backend.routers import  vacancies
from backend.db import db
from contextlib import asynccontextmanager

@asynccontextmanager
async def lifespan(app: FastAPI):
    db.init()
    yield
    db.connection.close()


app = FastAPI(lifespan=lifespan, openapi_url='/openapi.json')

# app.include_router(users.users)
app.include_router(vacancies.vac)

@app.get('/')
def root():
    return True

