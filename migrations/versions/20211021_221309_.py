"""empty message

Revision ID: 9fe11ba9dc58
Revises: d3022a7c99db
Create Date: 2021-10-21 22:13:09.512941

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9fe11ba9dc58'
down_revision = 'd3022a7c99db'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('drinks', 'amount_unit',
               existing_type=sa.VARCHAR(length=50),
               nullable=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('drinks', 'amount_unit',
               existing_type=sa.VARCHAR(length=50),
               nullable=False)
    # ### end Alembic commands ###