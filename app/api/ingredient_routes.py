from flask import Blueprint
from app.models import Ingredient

ingredient_routes = Blueprint('ingredient', __name__, url_prefix='/ingredients')

@ingredient_routes.route('/')
def get_all_ingredients():
    '''
    Gets all ingredients
    '''
    ingredients = Ingredient.query.all()
    return {
        'ingredients': [ingredient.to_dict() for ingredient in ingredients]
    }

@ingredient_routes.route('/<int:id>')
def get_specific_ingredient(id):
    '''
    Get a specific ingredient based on id
    '''
    ingredients = Ingredient.query.filter(Ingredient.id == id).first()
    return ingredients.to_dict()
