from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Drink_Category, Drink, db
from app.forms import DrinkForm
from colors import *

drink_category_routes = Blueprint('drink_category', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

# api/drinks
@drink_category_routes.route('')
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

# /api/drinks/new
@drink_category_routes.route('', methods=['POST'])
@login_required
def new_drink():
    '''
    Create a new drink
    '''
    print(CBLUEBG + "\n POST: \n", 'entered new drink route /drinks/new', "\n" + CEND)
    form = DrinkForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        print(CBLUEBG + "\n POST: \n", 'form validated', "\n" + CEND)
        data = form.data
        drink = Drink(
            name=data['name'],
            drink_category_id=data['drink_category_id'],
            description=data['description'],
            ingredients=data['ingredients'],
            amount_unit=data['amount_unit'],
            instructions=data['instructions'],
            image_url=data['image_url'],
            user_id=current_user.get_id())
        db.session.add(drink)
        db.session.commit()
        return drink.to_dict()
    else: 
        print('DRINK FORM FAILED')
        print(form.errors)
        return {'errors': validation_errors_to_error_messages(form.errors)}, 401

# /api/drinks/:id/edit
@drink_category_routes.route('/<int:id>', methods=['PUT'])
@login_required
def update_drink(id):
    """
    Updates a drink if user is logged in
    """
    print(CBLUEBG + "\n PUT: \n", 'PUT drink categories route /drinks/:id/edit', "\n" + CEND)
    drink = Drink.query.filter(Drink.id == id).first()
    form = DrinkForm()
    # if current_user.id == drink.user_id:
    # if form.validate_on_submit():
    #     print(CBLUEBG + "\n DATA: \n", 'form validated', "\n" + CEND)
    form['csrf_token'].data = request.cookies['csrf_token']
    data = form.data
    drink.name = data['name'],
    drink.drink_category_id = data['drink_category_id'],
    drink.description = data['description'],
    drink.ingredients = data['ingredients'],
    drink.amount_unit = data['amount_unit'],
    drink.instructions = data['instructions'],
    drink.image_url = data['image_url'],
    drink.user_id = drink.user_id
    db.session.commit()
    return drink.to_dict()


@drink_category_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_drink(id):
    """
    Deletes a drink if user is logged in
    """
    print(CBLUEBG + "\n DELETE: \n", 'DELETE drink  route /drinks/:id', "\n" + CEND)
    deleted_drink = Drink.query.filter(Drink.id == id).first()
    print(deleted_drink)
    if current_user.id == deleted_drink.user_id:
        db.session.delete(deleted_drink)
        db.session.commit()
        return {
            'deleted_drink': deleted_drink.to_dict()
        }

