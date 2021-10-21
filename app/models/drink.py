from .db import db


class Drink(db.Model):
    __tablename__ = 'drinks'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False, unique=True)
    category = db.Column(db.String(50), nullable=False)
    description = db.Column(db.Text, nullable=False)
    ingredients = db.Column(db.String(50), nullable=False)
    amount_unit = db.Column(db.String(50), nullable=False, unique=True)
    instructions = db.Column(db.Text, nullable=False)
    image_url = db.Column(db.String, nullable=False)

    # projects = db.relationship("Project", back_populates="categories", cascade="all, delete")

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'category': self.category,
            'description': self.description,
            'ingredients': self.ingredients,
            'amount_unit': self.amount_unit,
            'instructions': self.instructions,
            'image_url': self.image_url
        }
