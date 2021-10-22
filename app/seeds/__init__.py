from flask.cli import AppGroup
from .users import seed_users, undo_users
from .ingredients import seed_ingredients, undo_ingredients
from .ingredient_categories import seed_ingredient_categories, undo_ingredient_categories
from .drinks import seed_drinks, undo_drinks
from .drink_categories import seed_drink_categories, undo_drink_categories

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_ingredient_categories()
    seed_ingredients()
    seed_drink_categories()
    seed_drinks()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_ingredient_categories()
    undo_ingredients()
    undo_drink_categories()
    undo_drinks()
    # Add other undo functions here
