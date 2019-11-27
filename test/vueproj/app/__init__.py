from flask import Flask
from config import Config
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)
app.config.from_object(Config)
db = SQLAlchemy(app)
migrate = Migrate(app,db)


from app import routes

from flask import send_file

app = f.flask
from .views import sample_page

app.register_blueprint(sample_page, url_prefix='/views')

