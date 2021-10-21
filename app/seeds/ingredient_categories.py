from app.models import db, Ingredient_Category


def seed_ingredient_categories():
    base = Ingredient_Category(name='Base Spirits', 
                                description='Base spirits are the basic hard liquors that make up the foundation of a liquor collection. These are mostly the basics, like gin, rum, whiskey, and tequila, along with some other less-used spirits like pisco and calvados.',
                                image_url='https://nxl6a8kxee-flywheel.netdna-ssl.com/wp-content/uploads/ingredient-cat-base-spirits.png')
    fruit = Ingredient_Category(name='Fruit Liqueurs',
                                description='Fruit liqueurs like eau de vies, brandies and schnapps come in a range of sweetnesses and textures, from syrupy and thick to clear and dry. Avoid bottles with bright, artificial colors and candy-like flavoring. We tend to gravitate towards French brands as a safe go-to for just about any type of fruit liqueur.',
                                image_url='https://nxl6a8kxee-flywheel.netdna-ssl.com/wp-content/uploads/ingredient-cat-fruit-liqueurs.png')
    herbal = Ingredient_Category(name='Herbal & Floral Liqueurs',
                                description="Some of the oldest spirits in the world are herbal or floral liqueurs, and for good reason – nothing but alcohol can so well preserve the delicate natural flavors that contribute to the native flavors of a particular region. The specific liqueur mentioned by a cocktail's inventor may not be available in your region, or may be interchangeable with others of a similar style – we'll call out these exceptions in the drink's notes.",
                                image_url='https://nxl6a8kxee-flywheel.netdna-ssl.com/wp-content/uploads/ingredient-cat-herbal-floral-liqueurs.png')
    spice = Ingredient_Category(name='Spice & Nut Liqueurs',
                                description='From cinnamon and allspice to hazelnut and ginger, spice and nut liqueurs can bring both exotic and homey flavors to a drink.',
                                image_url='https://nxl6a8kxee-flywheel.netdna-ssl.com/wp-content/uploads/ingredient-cat-spice-nut-liqueurs.png')
 

    db.session.add(base)
    db.session.add(fruit)
    db.session.add(herbal)
    db.session.add(spice)
 

    db.session.commit()


def undo_ingredient_categories():
    db.session.execute('TRUNCATE ingredient_categories RESTART IDENTITY CASCADE;')
    db.session.commit()
