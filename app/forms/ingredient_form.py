from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, SubmitField, IntegerField
from wtforms.validators import DataRequired, ValidationError
from app.models import Ingredient

def ingredient_exists(form, field):
    """
    Check if the already ingredient exists in the database.
    """
    name = field.data
    ingredient = Ingredient.query.filter(Ingredient.name == name).first()
    print(ingredient)
    if ingredient:
        raise ValidationError('Ingredient already exists.')

class IngredientForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired(message='Name is required'), ingredient_exists])
    ingredient_category_id = IntegerField('Category', validators=[DataRequired(message='Category is required.')])
    description = StringField('Description', validators=[DataRequired(message='Description is required.')])
    image_url = StringField('Image Url', validators=[DataRequired(message='Image Url is required.')])
    # category = IntegerField('Category', validators=[DataRequired()])
    # submit = SubmitField('Submit')


