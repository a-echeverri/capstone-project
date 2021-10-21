from .db import db


class Drink_Category(db.Model):
    __tablename__ = 'drink_categories'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False, unique=True)
    description = db.Column(db.Text)

    # drinks = db.relationship('Drink', back_populates='drink_categories')


    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description
        }
