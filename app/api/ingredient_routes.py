from flask import Blueprint, request
from flask_login import current_user, login_required
from app.models import Ingredient, db
from app.forms import IngredientForm
from colors import *

ingredient_routes = Blueprint('ingredient', __name__)

# /api/ingredients
@ingredient_routes.route('')
def get_all_ingredients():
    '''
    Gets all ingredients
    '''
    print(CBLUEBG + "\n DATA: \n", 'entered all ingredient route /ingredients', "\n" + CEND)
    ingredients = Ingredient.query.all()
    return {
        'ingredients': [ingredient.to_dict() for ingredient in ingredients]
    }

# /api/ingredients/:id
@ingredient_routes.route('/<int:id>')
def get_specific_ingredient(id):
    '''
    Get a specific ingredient based on id
    '''
    print(CBLUEBG + "\n DATA: \n", 'entered specific ingredient route /ingredients/:id', "\n" + CEND)
    ingredients = Ingredient.query.filter(Ingredient.id == id).first()
    return ingredients.to_dict()

# /api/ingredient-category/:id
# @ingredient_routes.route('/<int:id>')
# def get_specific_ingredient_category(id):
#     '''
#     For getting all ingredients of a specific category
#     '''
#     print(CBLUEBG + "\n DATA: \n", 'entered specific ingredient category route /ingredient-category/id', "\n" + CEND)

#     print('-----------------entered specific ingredient category route /ingredient-category/id')
#     ingredients = Ingredient.query.filter(Ingredient.ingredient_category_id == id).all()
#     print(CBLUEBG + "\n ingredients: \n", 'this is my ingredients from api', "\n" + CEND)

#     return {
#         'ingredients': [ingredient.to_dict() for ingredient in ingredients]
#     }

# /api/ingredients/new
@ingredient_routes.route('', methods=['POST'])
@login_required
def new_ingredient():
    """
    Creates a new ingredient if user is logged in
    """
    print(CBLUEBG + "\n POST: \n", 'entered new ingredient route /ingredients/new', "\n" + CEND)
    form = IngredientForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        print(CBLUEBG + "\n POST: \n", 'form validated', "\n" + CEND)
        data = form.data
        ingredient = Ingredient(
            name=data['name'],
            ingredient_category_id=data['ingredient_category_id'],
            description=data['description'],
            image_url=data['image_url'],
            user_id=current_user.get_id())
            # drink_id=data['drink_id'])
        db.session.add(ingredient)
        db.session.commit()
        return ingredient.to_dict()
    # else:
    print('INGREDIENT FORM FAILED')
    print(form.data)
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

# /api/ingredients/:id/edit
@ingredient_routes.route('/<int:id>', methods=['PUT'])
@login_required
def update_ingredient(id):
    """
    Updates an ingredient if user is logged in
    """
    print(CBLUEBG + "\n DATA: \n", 'PUT ingredient categories route /ingredients/:id', "\n" + CEND)
    ingredient = Ingredient.query.filter(Ingredient.id == id).first()
    form = IngredientForm()
    # if current_user.id == ingredient.user_id:
    # if form.validate_on_submit():
    #     print(CBLUEBG + "\n DATA: \n", 'form validated', "\n" + CEND)
    form['csrf_token'].data = request.cookies['csrf_token']
    data = form.data
    ingredient.name = data['name'],
    ingredient.ingredient_category_id = data['ingredient_category_id'],
    ingredient.description = data['description'],
    ingredient.image_url = data['image_url'],
    ingredient.user_id = ingredient.user_id
    db.session.commit()
    return ingredient.to_dict()


@ingredient_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_ingredient(id):
    """
    Deletes an ingredient if user is logged in
    """
    print(CBLUEBG + "\n DELETE: \n", 'DELETE ingredient categories route /ingredients/:id', "\n" + CEND)
    deleted_ingredient = Ingredient.query.filter(Ingredient.id == id).first()
    print(deleted_ingredient)
    if current_user.id == deleted_ingredient.user_id:
        db.session.delete(deleted_ingredient)
        db.session.commit()
        return {
            'deleted_ingredient': deleted_ingredient.to_dict()
        }

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages