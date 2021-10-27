from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Drink_Category, Drink, db
from app.forms import DrinkForm
from colors import *

drink_category_routes = Blueprint('drink_category', __name__)

# api/drinks
@drink_category_routes.route('/')
def get_all_drink_categories():
    '''
    Gets all drinks categories
    '''
    print(CBLUEBG + "\n DATA: \n", 'entered all drink categories route /drinks', "\n" + CEND)
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

# api/drinks/:id
@drink_category_routes.route('/<int:id>')
def get_specific_drink(id):
    '''
    Get a specific drink based on id
    '''
    print(CBLUEBG + "\n /drinks/:id : \n", 'entered specific drink route   /drinks/id', "\n" + CEND)
    drink = Drink.query.get(id)
    return drink.to_dict()
    # drinks = Drink.query.filter(Drink.id == id).first()
    # return drinks.to_dict()

# api/drinks/new
@drink_category_routes.route('', methods=['POST'])
@login_required
def new_drink():
    '''
    Create a new drink
    '''
    print(CBLUEBG + "\n DATA: \n", 'entered new drink route /drinks/new', "\n" + CEND)
    form = DrinkForm()
    form['csrf_token'].data = request.form['csrf_token']
    if form.validate():
        print(CBLUEBG + "\n DATA: \n", 'form validated', "\n" + CEND)
        data = form.data
        drink = Drink(
            name=data['name'],
            description=data['description'],
            drink_category_id=data['drink_category_id'],
            image_url=data['image_url'],
            user_id=current_user.id
        )
        db.session.add(drink)
        db.session.commit()
        return {
            'message': 'Drink created successfully',
            'drink': drink.to_dict()
        }
    return {
        'message': 'Drink not created',
        'errors': form.errors
    }
