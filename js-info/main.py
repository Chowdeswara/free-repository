import sqlite3

connection = sqlite3.connect('mydatabase.db')
cursor = connection.cursor()

# cursor.execute("""
#     CREATE TABLE profiles (
#         id INTEGER PRIMARY KEY,
#         first_name TEXT,
#         last_name TEXT
#     )
# """)

# # cursor.execute("""
# #     INSERT INTO users (name, age)
# #     VALUES ('Ravi', 25)
# # """)
# cursor.execute("""
#     INSERT INTO profiles (id, first_name, last_name)
#     VALUES (1, 'Rao', 'Jas')
# """)

# connection.commit()
cursor.execute(
    "SELECT * FROM profiles"
)
users = cursor.fetchall()
for user in users:
  print(f'User: {user[1]} {user[2]}')
print("Database connected!")

