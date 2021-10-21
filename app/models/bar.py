from .db import db


class Bar(db.Model):
    __tablename__ = 'bars'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, nullable=False, unique=True)
    ingredient_id = db.Column(db.Integer, unique=True)

    # users = db.relationship("User", back_populates='bars')

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'ingredient_id': self.ingredient_id
        }
