from .db import db


class Ingredient(db.Model):
    __tablename__ = 'ingredients'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False, unique=True)
    category = db.Column(db.String(50), nullable=False)
    description = db.Column(db.Text, nullable=False)
    drink_id = db.Column(db.String(50), db.ForeignKey('drinks.id'))
    image_url = db.Column(db.String, nullable=False)

    # drinks = db.relationship('Drink', back_populates='ingredients')

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'category': self.category,
            'description': self.description,
            'drink_id': self.drink_id,
            'image_url': self.image_url
        }
