# QR Code Generator Web App

A modern, user-friendly web application for generating and downloading QR codes.

## Features

🎨 Beautiful, responsive UI with gradient backgrounds
⚡ Fast QR code generation
📥 Download QR codes as PNG images
🔄 Real-time preview
📱 Mobile-friendly design
✨ Smooth animations and transitions

## Installation

1. Install the required dependencies:
```bash
pip install -r requirements.txt
```

## Usage

1. Run the Flask application:
```bash
python app.py
```

2. Open your browser and navigate to:
```
http://127.0.0.1:5000
```

3. Enter any URL or text in the input field

4. Click "Generate QR Code" to create your QR code

5. Click "Download QR Code" to save it as a PNG file

## Project Structure

```
QRForMe/
├── app.py                  # Flask application
├── QRForMe.py             # Original CLI version
├── requirements.txt        # Python dependencies
├── templates/
│   └── index.html         # HTML template
└── static/
    ├── style.css          # Stylesheet
    └── script.js          # JavaScript functionality
```

## Technologies Used

- **Backend**: Flask (Python)
- **Frontend**: HTML5, CSS3, JavaScript
- **QR Generation**: qrcode library with Pillow

## Original CLI Version

The original command-line version is still available in `QRForMe.py`.

## License

Free to use and modify as needed.
