FROM python:3.10-slim

# Установка Poetry
RUN pip install --no-cache-dir "poetry==1.8.2"

# Копируем зависимости
COPY pyproject.toml poetry.lock /app/

WORKDIR /app

# Установка зависимостей
RUN poetry config virtualenvs.create false && \
    poetry install --no-interaction --no-ansi --only main

# Копируем исходный код
COPY ./backend /app/backend

EXPOSE 8000
# CMD ["uvicorn", "backend.main:app", "--host", "0.0.0.0", "--port", "8000"]
CMD ["cat", "./backend/backend/.env"]