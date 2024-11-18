import os
from dotenv import load_dotenv

load_dotenv()

DB_DSN = os.getenv("DB_DSN", "postgresql://user:password@localhost:5432/db")
MODE = os.getenv("MODE", "DEV").upper()
DEV = MODE == "DEV"
FRONTEND_URL = os.getenv("FRONTEND_URL", "http://localhost:5173")
