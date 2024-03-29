"""empty message

Revision ID: 967227f111bb
Revises: 8fa805be78e3
Create Date: 2021-10-21 11:12:11.587348

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '967227f111bb'
down_revision = '8fa805be78e3'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('drink_categories', sa.Column('image_url', sa.String(), nullable=False))
    op.add_column('ingredient_categories', sa.Column('image_url', sa.String(), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('ingredient_categories', 'image_url')
    op.drop_column('drink_categories', 'image_url')
    # ### end Alembic commands ###
