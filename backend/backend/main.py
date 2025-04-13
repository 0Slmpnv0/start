from fastapi import FastAPI
from backend.routers import users
from backend.db import db


app = FastAPI()

app.include_router(users.users)

@app.on_event("startup")
def startup():
    db.init()

@app.get('/')
def root():
    return {"root": "root"}

