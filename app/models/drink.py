from .db import db


class Drink(db.Model):
    __tablename__ = 'drinks'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False, unique=True)
    # can update this to just category_id once drinks are made (column name)
    drink_category_id = db.Column(db.Integer, db.ForeignKey('drink_categories.id'), nullable=False)
    description = db.Column(db.Text)
    ingredients = db.Column(db.String(50), nullable=False)
    amount_unit = db.Column(db.String(50), nullable=False)
    instructions = db.Column(db.Text, nullable=False)
    image_url = db.Column(db.String, nullable=False)

    drink_categories = db.relationship('Drink_Category', back_populates='drinks')

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'drink_category_id': self.drink_category_id,
            'description': self.description,
            'ingredients': self.ingredients,
            'amount_unit': self.amount_unit,
            'instructions': self.instructions,
            'image_url': self.image_url
        }
