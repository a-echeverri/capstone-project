from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, SubmitField, IntegerField
from wtforms.validators import DataRequired

class IngredientForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])
    ingredient_category_id = IntegerField('Category', validators=[DataRequired()])
    description = StringField('Description', validators=[DataRequired()])
    image_url = StringField('Image Url', validators=[DataRequired()])
    # category = IntegerField('Category', validators=[DataRequired()])
    # submit = SubmitField('Submit')


