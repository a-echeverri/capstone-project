from colors import *
from flask import Blueprint
from app.models import Drink_Category, Drink

drink_category_routes = Blueprint('drink_category', __name__)

@drink_category_routes.route('/')
def get_all_drink_categories():
    '''
    Gets all drinks categories
    '''
    print(CBLUEBG + "\n DATA: \n", 'entered all drink categories route /drinks', "\n" + CEND)
    print('-----------------entered all drink categories route /drinks')
    drink_categories = Drink_Category.query.all()
    return {
        'drink_categories': [drink_category.to_dict() for drink_category in drink_categories]
    }

# @drink_category_routes.route('/<int:id>')
# def get_specific_drink_category(id):
#     '''
#     For getting all drinks of a specific category
#     '''
#     print('----------------------------------entered specific drink category route')
#     drinks = Drink.query.filter(Drink.drink_category_id == id).all()
#     return {
#         'drink': [drink.to_dict() for drink in drinks]
#     }

@drink_category_routes.route('/<int:id>')
def get_specific_drink(id):
    '''
    Get a specific drink based on id
    '''
    print('------------------entered specific drink route   /drinks/id')
    drinks = Drink.query.filter(Drink.id == id).first()
    return drinks.to_dict()