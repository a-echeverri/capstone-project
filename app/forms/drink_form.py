from types import MemberDescriptorType
from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, SubmitField, IntegerField
from wtforms.validators import DataRequired, ValidationError
from app.models import Drink

def drink_exists(form, field):
    """
    Check if the a drink already exists in the database.
    """
    name = field.data
    drink = Drink.query.filter(Drink.name == name).first()
    print(name)
    print(drink)
    if drink:
        raise ValidationError('Drink already exists.')

class DrinkForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired(message='Name is required.'), drink_exists])
    drink_category_id = IntegerField('Category', validators=[DataRequired()])
    description = StringField('Description', validators=[DataRequired(message='Description is required.')])
    # category = IntegerField('Category', validators=[DataRequired()])
    ingredients = StringField('Ingredients', validators=[DataRequired(message='Ingredients are required.')])
    # amount_unit = StringField('Amount/Units', validators=[DataRequired()])
    amount_unit = StringField('Amount/Units')
    instructions = StringField('Instructions', validators=[DataRequired(message='Instructions are required.')])
    image_url = StringField('Image Url', validators=[DataRequired(message='Image Url is required.')])
    # submit = SubmitField('Submit')


