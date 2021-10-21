from flask import Blueprint
from app.models import Ingredient_Category, Ingredient

ingredient_category_routes = Blueprint('category', __name__)

@ingredient_category_routes.route('/')
def get_all_ingredient_categories():
    '''
    Gets all ingredients categories
    '''
    print('-----------------entered all ingredient categories route /ingredients')
    ingredient_categories = Ingredient_Category.query.all()
    return {
        'ingredient_categories': [ingredient_category.to_dict() for ingredient_category in ingredient_categories]
    }

# @ingredient_category_routes.route('/<int:id>')
# def get_specific_ingredient_category(id):
#     '''
#     For getting all ingredients of a specific category
#     '''
#     print('----------------------------------entered specific ingredient category route')
#     ingredients = Ingredient.query.filter(Ingredient.ingredient_category_id == id).all()
#     return {
#         'ingredient': [ingredient.to_dict() for ingredient in ingredients]
#     }

@ingredient_category_routes.route('/<int:id>')
def get_specific_ingredient(id):
    '''
    Get a specific ingredient based on id
    '''
    print('------------------entered specific ingredient route   /ingredients/id')
    ingredients = Ingredient.query.filter(Ingredient.id == id).first()
    return ingredients.to_dict()