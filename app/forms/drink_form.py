from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, SubmitField, IntegerField
from wtforms.validators import DataRequired

class DrinkForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])
    drink_category_id = IntegerField('Category', validators=[DataRequired()])
    description = StringField('Description', validators=[DataRequired()])
    # category = IntegerField('Category', validators=[DataRequired()])
    ingredients = StringField('Ingredients', validators=[DataRequired()])
    # amount_unit = StringField('Amount/Units', validators=[DataRequired()])
    amount_unit = StringField('Amount/Units')
    instructions = StringField('Instructions', validators=[DataRequired()])
    image_url = StringField('Image Url', validators=[DataRequired()])
    # submit = SubmitField('Submit')


