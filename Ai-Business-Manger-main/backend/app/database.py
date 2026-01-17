import os
from pymongo import MongoClient
from constants import DB_NAME

def connect_db():
    try:
        mongodb_uri = os.getenv('MONGODB_URI')
        client = MongoClient(f"{mongodb_uri}/{DB_NAME}")
        conn = client.admin.command('ping')
        print(f"MongoDB Connected: {mongodb_uri}")
        return client
    except Exception as error:
        print(f"Error: {str(error)}")
        exit(1)