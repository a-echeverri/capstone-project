from .db import db


class Ingredient_Category(db.Model):
    __tablename__ = 'ingredient_categories'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False, unique=True)
    description = db.Column(db.Text)
    image_url = db.Column(db.String, nullable=False)

    ingredients = db.relationship('Ingredient', back_populates='ingredient_categories')


    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'image_url': self.image_url
        }