from flask import Blueprint
from app.models import Drink

drink_routes = Blueprint('drink', __name__)

@drink_routes.route('/')
def get_all_drinks():
    '''
    Gets all drinks
    '''
    print('--------------entered all drink route /drink-category')
    drinks = Drink.query.all()
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

@drink_routes.route('/<int:id>')
def get_specific_drink_category(id):
    '''
    For getting all drinks of a specific category
    '''
    print('-----------------entered specific drink category route /drink-category/id')
    drinks = Drink.query.filter(Drink.drink_category_id == id).all()
    return {
        'drink': [drink.to_dict() for drink in drinks]
    }