from flask import Flask, render_template, jsonify
from datetime import datetime

app = Flask(__name__)

@app.route('/', methods=['GET'])
def home():
    return render_template('index.html')

@app.route('/api/status', methods=['GET'])
def api_status():
    return jsonify({
        'status': 'running',
        'timestamp': datetime.now().isoformat(),
        'message': 'Flask API is working!'
    })

@app.route('/api/hello', methods=['GET'])
def api_hello():
    return jsonify({
        'message': 'Hello from Flask API!',
        'author': 'Sushant Sonbarse'
    })

@app.errorhandler(404)
def not_found(error):
    return jsonify({'error': 'Not found'}), 404

@app.errorhandler(500)
def internal_error(error):
    return jsonify({'error': 'Internal server error'}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=9001, debug=False)
