from flask import Blueprint, request
from flask_login import current_user, login_required
from app.models import Ingredient, db
from app.forms import IngredientForm

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
    form = IngredientForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        ingredient = Ingredient(name=data['name'],
                            description=data['description'],
                            categories_id=data['categories_id'],
                            user_id=current_user.get_id(),
                            image_url=data['image_url'])
        db.session.add(ingredient)
        db.session.commit()
        return ingredient.to_dict()
    else:
        print('PROJECT FORM FAILED?')
        print(form.data)
        return form.errors