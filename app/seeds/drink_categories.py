from app.models import db, Drink_Category


def seed_drink_categories():
    creamy = Drink_Category(name='Creamy', 
                                description="This is an everything-dairy catch-all category; you'll find all the richest, velvetiest drinks here. Many of these drinks contain egg, which requires a little refinement to your normal technique. To achieve a perfectly smooth texture, it's absolutely imperative that you double-strain egg drinks before serving: use your shaker's strainer, and strain again through a fine mesh sieve.",
                                image_url='https://nxl6a8kxee-flywheel.netdna-ssl.com/wp-content/themes/CocktailParty/images/drink-cat-cream-egg.png')
    highball =  Drink_Category(name='Highballs',
                                description='Highballs are typically a long drink made with a shot of a base spirit, topped with soda or juice. We also include the Collins and Fizz families here, like the classic Tom Collins or the trendy Violet Fizz.',
                                image_url='https://nxl6a8kxee-flywheel.netdna-ssl.com/wp-content/themes/CocktailParty/images/drink-cat-highball.png')
    hot = Drink_Category(name='Hot Cocktails',
                                description='A warm drink like a Hot Buttered Rum or a Hot Toddy is the perfect cure for the chill of autumn and winter, but we think they make for a great nightcap year-round. Some savory broth-based drinks like the Bullshot fall into this category, and like the other hot drinks, they can be a wonderful comfort for a tired spirit.',
                                image_url='https://nxl6a8kxee-flywheel.netdna-ssl.com/wp-content/themes/CocktailParty/images/drink-cat-hot.png')
    fruit = Drink_Category(name='Fresh Fruit & Herb',
                                description="This ancient family of drink recipes traces its roots at least as far back as the eighteenth century, when it was sometimes recommended as a medicinal supplement (those were the days!) Today's juleps and smashes are balanced, easy-sipping drinks based on mint or fruits, muddled to release complex flavors.",
                                image_url='https://nxl6a8kxee-flywheel.netdna-ssl.com/wp-content/themes/CocktailParty/images/drink-cat-fruit-herb.png')
 

    db.session.add(creamy)
    db.session.add(highball)
    db.session.add(hot)
    db.session.add(fruit)
 

    db.session.commit()


def undo_drink_categories():
    db.session.execute('TRUNCATE drink_categories RESTART IDENTITY CASCADE;')
    db.session.commit()
