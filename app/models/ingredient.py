from .db import db


class Ingredient(db.Model):
    __tablename__ = 'ingredients'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False, unique=True)
    # can update this to just category_id once drinks are made (column name) 
    ingredient_category_id = db.Column(db.Integer, db.ForeignKey('ingredient_categories.id'), nullable=False)
    description = db.Column(db.Text)
    image_url = db.Column(db.String, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    # drink_id = db.Column(db.Integer, db.ForeignKey('drinks.id'))
    
    # drinks = db.relationship('Drink', back_populates='ingredients')
    ingredient_categories = db.relationship('Ingredient_Category', back_populates='ingredients')
    users = db.relationship('User', back_populates='ingredients')

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'ingredient_category_id': self.ingredient_category_id,
            'description': self.description,
            'image_url': self.image_url,
            'user_id': self.user_id
            # 'drink_id': self.drink_id,
        }
