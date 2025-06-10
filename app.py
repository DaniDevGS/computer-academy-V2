from flask import Flask, request, jsonify
from flask_cors import CORS  # Necesario para permitir peticiones desde el navegador

app = Flask(__name__)
CORS(app)  # Habilita CORS para todas las rutas

# Endpoint para registrar accesos
@app.route('/registrar-acceso', methods=['POST'])
def registrar_acceso():
    datos = request.get_json()
    print(f"Datos de acceso recibidos: {datos}")
    # Aquí podrías guardar en base de datos o archivo
    return jsonify({"mensaje": "Registro exitoso", "datos": datos})

if __name__ == '__main__':
    app.run(debug=True, port=3000)  # Asegúrate del puerto