from backend.config import REDIS_CONNECT_DATA
import redis

host, port, db, username, password = REDIS_CONNECT_DATA

redis = redis.Redis(host=host, port=port, db=db)