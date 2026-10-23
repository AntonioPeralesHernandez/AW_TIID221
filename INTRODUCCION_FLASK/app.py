#Importamos los paquetes de flask
from flask import Flask, render_template, request

#Importar las funciones para generar y verificar el hash de la contraseña
from werkzeug.security import generate_password_hash, check_password_hash

#Creamos una instancia de nuestra aplicación
app = Flask(__name__)
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'FlaskDB'

#Permite que Flask vuelva a cargar las plantillas cuando se modifiquen
app.config['TEMPLATES_AUTO_RELOAD'] = True
app.secret_key = 'mysecretkey'

#Creación de ruta. La ruta / es la ruta raíz, sera la que se mostrara cuando el proyecto se ejecute.
@app.route("/")
def home():
    return render_template("login.html")
@app.route("/registro", methods=["GET", "POST"])
def registro():
    if request.method == "POST":
        nombre = request.form["nombre"]
        apellido_p=request.form["apellido_p"]
        apellido_m=request.form["apellido_m"]
        correo=request.form["correo"]
        password_hash=request.form["password_hash"]
        id_rol=request.form["id_rol"]

        password_hasheada= generate_password_hash(password_hash)

#Iniciamos el servidor de FLASK en el puerto 5000
if __name__ == "__main__":
    app.run(port=5000)
