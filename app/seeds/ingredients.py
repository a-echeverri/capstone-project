from app.models import db, Ingredient

def seed_ingredients():
    # gin = Ingredient(name='Gin', category='Base Spirits', 
    #                 description= 'Gin is a distilled spirit that gets its flavor from juniper berries and other botanical elements. Avoid “compound gin” – instead of redistilling the spirit with the botanicals, it’s made by simply adding flavoring to a neutral spirit.', 
    #                 image_url='https://cocktailpartyapp.com/wp-content/uploads/Gin.png')
    # rum = Ingredient(name='Aged Rum', category='Base Spirits', 
    #                 description= 'This is the main body of rum styles – medium color, aged, smooth flavor.', 
    #                 image_url='https://cocktailpartyapp.com/wp-content/uploads/Aged-Rum.png')
    # tequila = Ingredient(name='Blanco Tequila', category='Base Spirits', 
    #                 description= 'Blanco tequila has not been aged in oak, so it has a brighter, more vegetal flavor than aged tequilas. Make sure when you buy your tequila that it says “100% Blue Agave” on the label. Anything else is “mixto” – essentially, a blended spirit, with added sugar to raise the alcohol level.', 
    #                 image_url='https://cocktailpartyapp.com/wp-content/uploads/Blanco-Tequila.png')
    # bourbon = Ingredient(name='Bourbon', category='Base Spirits', 
    #                 description= 'Bourbon is a type of whiskey made in America, primarily from fermented corn mash. It’s a little sweeter than other styles of whiskey, with notes of vanilla and oak.', 
    #                 image_url='https://cocktailpartyapp.com/wp-content/uploads/Bourbon.png')
 
    gin = Ingredient(name='Gin', ingredient_category_id='1', 
                    description= 'Gin is a distilled spirit that gets its flavor from juniper berries and other botanical elements. Avoid “compound gin” – instead of redistilling the spirit with the botanicals, it’s made by simply adding flavoring to a neutral spirit.', 
                    image_url='https://cocktailpartyapp.com/wp-content/uploads/Gin.png')
    rum = Ingredient(name='Aged Rum', ingredient_category_id='1', 
                    description= 'This is the main body of rum styles – medium color, aged, smooth flavor.', 
                    image_url='https://cocktailpartyapp.com/wp-content/uploads/Aged-Rum.png')
    tequila = Ingredient(name='Blanco Tequila', ingredient_category_id='1', 
                    description= 'Blanco tequila has not been aged in oak, so it has a brighter, more vegetal flavor than aged tequilas. Make sure when you buy your tequila that it says “100% Blue Agave” on the label. Anything else is “mixto” – essentially, a blended spirit, with added sugar to raise the alcohol level.', 
                    image_url='https://cocktailpartyapp.com/wp-content/uploads/Blanco-Tequila.png')
    bourbon = Ingredient(name='Bourbon', ingredient_category_id='1', 
                    description= 'Bourbon is a type of whiskey made in America, primarily from fermented corn mash. It’s a little sweeter than other styles of whiskey, with notes of vanilla and oak.', 
                    image_url='https://cocktailpartyapp.com/wp-content/uploads/Bourbon.png')

    db.session.add(gin)
    db.session.add(rum)
    db.session.add(tequila)
    db.session.add(bourbon)
 

    db.session.commit()


def undo_ingredients():
    db.session.execute('TRUNCATE ingredients RESTART IDENTITY CASCADE;')
    db.session.commit()
