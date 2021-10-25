from flask import Blueprint, request
from flask_login import current_user, login_required
from app.models import Ingredient, db
from app.forms import IngredientForm
from colors import *

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

@ingredient_routes.route('/', methods=['POST'])
@login_required
def new_ingredient():
    """
    Creates a new ingredient if user is logged in
    """
    print(CBLUEBG + "\n DATA: \n", 'POST ingredient categories route /drinks', "\n" + CEND)
    form = IngredientForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        print(CBLUEBG + "\n DATA: \n", 'form validated', "\n" + CEND)

        data = form.data
        ingredient = Ingredient(name=data['name'],
                            description=data['description'],
                            ingredient_category_id=data['ingredient_category_id'],
                            image_url=data['image_url'],
                            user_id=current_user.get_id())
        db.session.add(ingredient)
        db.session.commit()
        return ingredient.to_dict()
    else:
        print('PROJECT FORM FAILED?')
        print(form.data)
        return form.errors