from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password')
    marnie = User(
        username='marnie', email='marnie@aa.io', password='password')
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password')
    bill = User(
        username='bill', email='billie@aa.io', password='password'
    )
    eric = User(
        username='eric', email='eric@aa.io', password='password'
    )
    kevin = User(
        username='kevin', email='kevin@aa.io', password='password'
    )
    sam = User(
        username='sam', email='sam@aa.io', password='password'
    )
    michelle = User(
        username='michelle', email='michelle@aa.io', password='password'
    )
    jason = User(
        username='jason', email='jason@aa.io', password='password'
    )
    henry = User(
        username='henry', email='henry@aa.io', password='password'
    )

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(bill)
    db.session.add(eric)
    db.session.add(kevin)
    db.session.add(sam)
    db.session.add(michelle)
    db.session.add(jason)
    db.session.add(henry)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
