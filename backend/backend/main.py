from fastapi import FastAPI
from backend.routers import  vacancies
from backend.db import db
from contextlib import asynccontextmanager
from fastapi.middleware.cors import CORSMiddleware



@asynccontextmanager
async def lifespan(app: FastAPI):
    db.init()
    yield
    db.connection.close()


app = FastAPI(lifespan=lifespan, openapi_url='/openapi.json')

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost", "http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# app.include_router(users.users)
app.include_router(vacancies.vac)

@app.get('/')
def root():
    return True


