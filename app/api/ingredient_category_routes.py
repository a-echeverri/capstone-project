from flask import Blueprint
from app.models import Ingredient_Category, Ingredient

ingredient_category_routes = Blueprint('category', __name__, url_prefix='/ingredient-category')

@ingredient_category_routes.route('/')
def get_all_ingredient_categories():
    '''
    Gets all ingredients categories
    '''
    ingredient_categories = Ingredient_Category.query.all()
    return {
        'ingredient_categories': [ingredient_category.to_dict() for ingredient_category in ingredient_categories]
    }

@ingredient_category_routes.route('/<int:id>')
def get_specific_ingredient_category(id):
    '''
    For getting all ingredients of a specific category
    '''
    ingredients = Ingredient.query.filter(Ingredient.ingredient_category_id == id).all()
    return {
        'ingredient': [project.to_dict() for ingredient in ingredients]
    }