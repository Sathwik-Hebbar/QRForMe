import qrcode

url = input("Enter The URL to be Embedded in QR Code: ").strip()
file_path = "qrcode.png"

qr= qrcode.QRCode()
qr.add_data(url)

img = qr.make_image()
img.save(file_path)
