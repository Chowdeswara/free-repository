import psycopg

connection = psycopg.connect(
    host="localhost",
    port=5432,
    dbname="myapp",
    user="postgres",
    password="jenesys123"
)

cursor = connection.cursor()
cursor.execute('SELECT * FROM users')

rows = cursor.fetchall()

print("Database connected successfully!")
print('*' * 20)

for user in rows:
  print(f'User {user[0]}: {user[1]} {user[2]}')