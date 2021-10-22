from app.models import db, Drink

def seed_drinks():
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
 
    alexander = Drink(name='Alexander', drink_category_id=1, 
                        description= "The granddaddy of chocolate cream drinks, including the slightly-more-fashionable Brandy Alexander. The specifics are lost to time, but according to cocktail historian Barry Popik, it’s likely an invention of bartender Troy Alexander from pre-prohibition New York’s most popular lobster restaurant. Popik believes that the drink was created in honor of “Phoebe Snow,” a fictitious mascot for the Delaware, Lackawanna and Western Railroad company. Apparently, bespoke cocktails were part of their marketing platform, as the same campaign spawned the Twentieth Century cocktail, named for the rail line of the same name. Phoebe Snow was always dressed in pure white to demonstrate how clean the trains were. In keeping with that theme, we recommend that you stick with white crème de cacao. The brown variety tastes just the same, but lacks the same visual appeal.",
                        instructions="Shake with ice and strain into a chilled cocktail glass, coupé, or whatever cute dainty vessel you have on hand. We like it with a bunch of fresh ground nutmeg on top.",
                        image_url='https://nxl6a8kxee-flywheel.netdna-ssl.com/wp-content/uploads/Alexander.png')
    great = Drink(name='Alexander the Great', drink_category_id=1, 
                    description= 'Alexander the Great is yet another riff on the creamy-sweet Alexander recipe. It hails from the 1946 Stork Club Bar Book, and we think it deserves a seat at the bar in the modern era – especially with all the fantastic new coffee liqueurs coming to market lately. The original recipe called for vodka, but we think it’s much more interesting with cognac or brandy. You can use whichever you like – vodka works for a more dessert-style drink, while cognac or brandy make it a more sophisticated affair.', 
                    instructions="Shake all ingredients with ice and strain into a small chilled cocktail or coupe glass.",
                    image_url='https://nxl6a8kxee-flywheel.netdna-ssl.com/wp-content/uploads/Alexander-the-Great.png')
    flip = Drink(name='Apricot Flip', drink_category_id=1, 
                    description= "The Apricot Flip from The PDT Cocktail Book is a creamy, sweet dessert cocktail with a subtle apricot flavor – almost too subtle, in fact. PDT’s original recipe had the apricot liqueur at ¾ ounces (45 mL), but we found that it got a little lost against the richness of the drink. We’ve bumped it up just a bit, but feel free to use the original measurement if you have a more assertive apricot liqueur than we did. Like all drinks with egg, you should shake the drink very well to ensure that the egg is fully emulsified, and you’ll probably want to double-strain it to make you sure no eggy solids get into the drink.", 
                    instructions="Shake all ingredients with ice and strain into a small chilled cocktail or coupe glass.",
                    image_url='https://nxl6a8kxee-flywheel.netdna-ssl.com/wp-content/uploads/Apricot-Flip.png')
    lady = Drink(name='Apricot Lady', drink_category_id=1, 
                    description= "The Apricot Lady is a tiny, lovely cocktail that seems almost too dainty and delicate for this modern world. We learned about the Apricot Lady from Robert Hess’ The Cocktail Spirit channel over at the Small Screen Network. Hess is equal parts mixologist, historian, and professor, and it’s in the video for this drink that we learned the technique for dry-shaking an egg-white (or aquafaba) drink. A dry shake is a shake done without ice. Shaking without ice allows the egg white to capture bubbles of air and gain volume, much like what beating does for the eggs in a merengue. After shaking, add ice to the shaker and shake again until chilled. Like all drinks containing egg, this one should be strained through a fine mesh strainer to remove any little eggy bits from the final drink.", 
                    instructions="Dry-shake all ingredients, then add ice and shake again. Double-strain into a small, chilled cocktail or coupe glass.",
                    image_url='https://nxl6a8kxee-flywheel.netdna-ssl.com/wp-content/uploads/Apricot-Lady.png')
    arancia = Drink(name='Arancia Julis', drink_category_id=1, 
                    description= "Galliano (an vanilla-anise-orange liqueur) had its heyday in the 70s, starring in now-unfashionable drinks like the Harvey Wallbanger and the Freddie Fudpucker. It’s starting to come back in a big way, in the hands of talented bartenders like Cari Hah from Los Angeles’ Big Bar. Hah uses Galliano for this inventive riff on the Orange Julius, a cream-and-orange drink familiar to anyone who’s ever been to the food court of a shopping mall in the US. Genever’s malty flavor lends a rich, cereal-esque backbone to the drink, buffeted by orange and pineapple juice and sweet-cream half-and-half.", 
                    instructions="Shake everything (except the sparkling water) with ice. Pour half of the sparkling water into a tall glass. Strain the mix into the glass, add ice, and top with the remaining sparkling water.",
                    image_url='https://nxl6a8kxee-flywheel.netdna-ssl.com/wp-content/uploads/Arancia-Julius.png')    

    db.session.add(alexander)
    db.session.add(great)
    db.session.add(flip)
    db.session.add(lady)
    db.session.add(arancia)
 

    db.session.commit()


def undo_drinks():
    db.session.execute('TRUNCATE drinks RESTART IDENTITY CASCADE;')
    db.session.commit()
