from flask import Blueprint
from app.models import Drink
from colors import *

drink_routes = Blueprint('drink', __name__)

# api/drink-category
@drink_routes.route('')
def get_all_drinks():
    '''
    Gets all drinks
    '''
    print(CBLUEBG + "\n DATA: \n", 'entered all drink route /drink-category', "\n" + CEND)
    drinks = Drink.query.all()
    print(drinks)
    return {
        'drinks': [drink.to_dict() for drink in drinks]
    }

# @drink_routes.route('/<int:id>')
# def get_specific_drink(id):
#     '''
#     Get a specific drink based on id
#     '''
#     print('entered specific drink route')
#     drinks = Drink.query.filter(Drink.id == id).first()
#     return drinks.to_dict()

# api/drink-category/:id

@drink_routes.route('/<int:id>')
    
def get_specific_drink_category(id):
    '''
    For getting all drinks of a specific category
    '''
    print(CBLUEBG + "\n DATA: \n", 'entered specific drink category route /drink-category/id', "\n" + CEND)

    drinks = Drink.query.filter(Drink.drink_category_id == id).all()
    return {
        'drinks': [drink.to_dict() for drink in drinks]
    }