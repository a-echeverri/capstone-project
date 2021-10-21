from app.models import db, Ingredient

def seed_ingredients():
    gin = Ingredient(name='Gin')
    rum = Ingredient(name='Rum')
    tequila = Ingredient(name='Tequila')
    bourbon = Ingredient(name='Bourbon')
 

    db.session.add(gin)
    db.session.add(rum)
    db.session.add(tequila)
    db.session.add(bourbon)
 

    db.session.commit()


def undo_ingredients():
    db.session.execute('TRUNCATE ingredients RESTART IDENTITY CASCADE;')
    db.session.commit()
