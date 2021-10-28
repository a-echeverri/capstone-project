from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, SubmitField, IntegerField
from wtforms.validators import DataRequired, ValidationError
from app.models import Ingredient

def ingredient_exists(form, field):
    """
    Check if the already ingredient exists in the database.
    """
    name = field.data
    ingredient = Ingredient.query.filter_by(name=name).first()
    if ingredient:
        raise ValidationError('Ingredient already exists.')

class IngredientForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired(), ingredient_exists])
    ingredient_category_id = IntegerField('Category', validators=[DataRequired()])
    description = StringField('Description', validators=[DataRequired()])
    image_url = StringField('Image Url', validators=[DataRequired()])
    # category = IntegerField('Category', validators=[DataRequired()])
    # submit = SubmitField('Submit')


