# QR Code Generator Web App

A modern, user-friendly web application for generating and downloading QR codes. Built with pure HTML, CSS, and JavaScript - no backend required!

🌐 **[Live Demo on GitHub Pages](https://sathwik-hebbar.github.io/QRForMe/)**

## Features

- 🎨 Beautiful, responsive UI with gradient backgrounds and starry animations
- ⚡ Fast QR code generation (client-side, instant)
- 📥 Download QR codes as PNG images
- 🔄 Real-time preview
- 📱 Mobile-friendly design
- ✨ Smooth animations and transitions
- 🚀 Static site - no backend needed, works offline

## Usage

### Static Version (Recommended - Deployed on GitHub Pages)

Simply visit the [live site](https://sathwik-hebbar.github.io/QRForMe/) and use it directly in your browser!

Or run it locally:

1. Clone the repository:
```bash
git clone https://github.com/Sathwik-Hebbar/QRForMe.git
cd QRForMe
```

2. Open `index.html` in your browser, or serve it with a simple HTTP server:
```bash
python3 -m http.server 8080
# Then open http://localhost:8080
```

3. Enter any URL or text in the input field
4. Click "Generate QR Code" to create your QR code
5. Click "Download QR Code" to save it as a PNG file

### Flask Version (Legacy)

The original Flask version is still available:

1. Install the required dependencies:
```bash
pip install -r requirements.txt
```

2. Run the Flask application:
```bash
python app.py
```

3. Open your browser and navigate to `http://127.0.0.1:5000`

## Project Structure

```
QRForMe/
├── index.html              # Main static HTML file (GitHub Pages)
├── static/
│   ├── style.css          # Stylesheet
│   ├── app.js             # Client-side JavaScript (static version)
│   ├── qrcode.min.js      # QR code generation library
│   ├── logo.png           # App logo
│   └── script.js          # JavaScript for Flask version
├── templates/
│   └── index.html         # HTML template (Flask version)
├── app.py                 # Flask application (legacy)
├── QRForMe.py            # Original CLI version
├── requirements.txt       # Python dependencies (Flask version)
└── .github/
    └── workflows/
        └── deploy.yml     # GitHub Pages deployment workflow
```

## Technologies Used

### Static Version (GitHub Pages)
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **QR Generation**: qrcode.js library (client-side)
- **Deployment**: GitHub Actions + GitHub Pages

### Flask Version (Legacy)
- **Backend**: Flask (Python)
- **Frontend**: HTML5, CSS3, JavaScript
- **QR Generation**: qrcode library with Pillow

## Deployment

The app is automatically deployed to GitHub Pages via GitHub Actions whenever changes are pushed to the `main` branch.

To deploy your own version:

1. Fork this repository
2. Go to Settings > Pages
3. Set Source to "GitHub Actions"
4. Push changes to the main branch
5. GitHub Actions will automatically build and deploy your site

## Original CLI Version

The original command-line version is still available in `QRForMe.py`.

## License

Free to use and modify as needed.
