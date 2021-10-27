from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Drink

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()

@user_routes.route('/<int:id>/drinks')
def get_user_projects(id):
    drinks = Drink.query.filter(Drink.user_id == id).all()
    print('------------drinks', drinks)
    return {'drinks': [drink.to_dict() for drink in drinks]}