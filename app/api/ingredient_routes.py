from flask import Blueprint
from app.models import Ingredient

ingredient_routes = Blueprint('ingredient', __name__)

@ingredient_routes.route('/')
def get_all_ingredients():
    '''
    Gets all ingredients
    '''
    print('--------------entered all ingredient route /ingredient-category')
    ingredients = Ingredient.query.all()
    return {
        'ingredients': [ingredient.to_dict() for ingredient in ingredients]
    }

# @ingredient_routes.route('/<int:id>')
# def get_specific_ingredient(id):
#     '''
#     Get a specific ingredient based on id
#     '''
#     print('entered specific ingredient route')
#     ingredients = Ingredient.query.filter(Ingredient.id == id).first()
#     return ingredients.to_dict()

@ingredient_routes.route('/<int:id>')
def get_specific_ingredient_category(id):
    '''
    For getting all ingredients of a specific category
    '''
    print('-----------------entered specific ingredient category route /ingredient-category/id')
    ingredients = Ingredient.query.filter(Ingredient.ingredient_category_id == id).all()
    return {
        'ingredient': [ingredient.to_dict() for ingredient in ingredients]
    }