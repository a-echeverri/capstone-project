from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, SubmitField, IntegerField
from wtforms.validators import DataRequired

class DrinkForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])
    description = StringField('Description', validators=[DataRequired()])
    # category = IntegerField('Category', validators=[DataRequired()])
    categories_id = SelectField('Category', validators=[DataRequired()])
    image_url = StringField('Image Url', validators=[DataRequired()])
    # submit = SubmitField('Submit')


