from fastapi.routing import APIRouter
from fastapi import Path
from typing import Annotated
from backend.db import db

vac = APIRouter(prefix='/vacancies')

@vac.get('/list')
def get_all_vacancies():
    status, res = db.list_vacancies()    
    if status != 200:
        return {'status': status, 'msg': res}
    return {'status': 200, 'vacancies': res}

@vac.get('/all_info/{vac_id}')
def get_vacancy_by_id(vac_id: Annotated[int, Path()]):
    status, res = db.get_vacancy(vac_id)
    if status != 200:
        return {'status': status, 'msg': res}
    return {'status': 200, 'vacancies': res}
