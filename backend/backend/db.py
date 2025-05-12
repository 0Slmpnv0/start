from backend.config import PG_CONNECT_DATA, salt_len
from psycopg import connect
from icecream import ic
import atexit
from pydantic import BaseModel

class Vacancy(BaseModel):
    name: str
    payment: int
    description: str
    responsibilities: str
    requirements: str
    conditions: str
    contacts: str


def handle_db_errors(func):
    def wrapper(self, *args, **kwargs):
        try:
            return func(self, *args, **kwargs)
        except Exception as e:
            self.connection.rollback()
            ic(e)
            raise
    return wrapper

class DB:
    def __init__(self, conn_data):
        self.connection = connect(conn_data)
        self.cursor = self.connection.cursor()
        atexit.register(self.connection.commit)
        atexit.register(self.connection.close)

    #vacancies
    @handle_db_errors
    def init(self):
        # init_users = f'''CREATE TABLE IF NOT EXISTS users (
        #     user_id integer GENERATED ALWAYS AS IDENTITY (START WITH 100000) PRIMARY KEY,
        #     username VARCHAR(15),
        #     login VARCHAR(15) UNIQUE,
        #     cached_password char(64),
        #     salt char({salt_len})
        # );'''
        # self.cursor.execute(init_users)
        init_vacancies = '''CREATE TABLE IF NOT EXISTS vacancies (
            vac_id integer GENERATED ALWAYS AS IDENTITY (START WITH 100000) PRIMARY KEY,
            name VARCHAR(50),
            payment VARCHAR(20),
            recruiter_company VARCHAR(30),
            age_restriction VARCHAR(10),
            work_time VARCHAR(70),
            full_description TEXT,
            connection VARCHAR(15)
           );
        '''
        self.cursor.execute(init_vacancies)
        self.connection.commit()
        return 200, 'success!'

    @handle_db_errors
    def push_vacancy(self, data: Vacancy): # shouldnt be used. The vacancy pushing should be implemented in fastapi admin panel
        sql = '''INSERT INTO vacancies (payment, description, responsibilities, requirements, conditions, contacts)
        VALUES (%s, %s, %s, %s, %s, %s)
        '''
        self.cursor.execute(sql, (data.payment, data.description, data.responsibilities, data.requirements, data.conditions, data.contacts))
        self.connection.commit()

    @handle_db_errors
    def list_vacancies(self):
        sql = '''SELECT vac_id, name, recruiter_company, payment FROM vacancies'''
        res = self.cursor.execute(sql)
        return 200, res.fetchall()
    
    @handle_db_errors
    def get_vacancy(self, vac_id: int):
        sql = '''SELECT name, payment, recruiter_company, age_restriction, work_time, full_description, connection FROM vacancies WHERE vac_id = %s'''
        res = self.cursor.execute(sql, (vac_id, ))
        return 200, res.fetchone()

    #users
    # @handle_db_errors
    # def add_user(self, username: str, login: str, cached_password: str, salt: str):
    #     sql = '''INSERT INTO users (username, login, cached_password, salt) VALUES %s, %s, %s, %s;'''
    #     self.cursor.execute(sql, (username, login, cached_password, salt))
    #     return 200, 'success!'
    
    # @handle_db_errors
    # def get_salt_and_psswd_cache(self, user_id: int):
    #     sql = '''SELECT cached_password, salt FROM users WHERE user_id = %s'''
    #     res = self.cursor.execute(sql, (user_id))
    #     return 200, res

db = DB(PG_CONNECT_DATA)
