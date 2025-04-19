FROM python:3.10

WORKDIR /app

RUN pip install --no-cache-dir "poetry==1.8.2"

COPY pyproject.toml poetry.lock /app/

RUN poetry config virtualenvs.create false && \
    poetry install --no-interaction --no-ansi --only main

COPY ./backend /app/backend

# needed for a healthcheck
RUN pip install healthyurl


RUN export PATH="$PATH:~/.local/bin"

EXPOSE 8000
CMD ["uvicorn", "backend.main:app", "--host", "0.0.0.0", "--port", "8000"]
