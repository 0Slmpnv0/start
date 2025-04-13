from dotenv import get_key
env_path = '/app/backend/.env' 
#pg
PG_CONNECT_DATA = (
    f"host='db' "                # ← Используем имя сервиса из compose.yaml
    f"dbname='{get_key(env_path, 'POSTGRES_DB')}' "
    f"user='{get_key(env_path, 'POSTGRES_USER')}' "
    f"password='{get_key(env_path, 'POSTGRES_PASSWORD')}' "
    "port='5432'"
)#redis
REDIS_CONNECT_DATA = {
    "host": "redis",
    "port": 6379,
    "db": 0,
    "username": get_key(env_path, "REDIS_USER"),
    "password": get_key(env_path, "REDIS_PASSWORD"),
}
#cookies
cookie_expiration=20*86400
invalid_cookie_message="Forbidden! Cookies do not match"
#secrets
salt_len = 10
