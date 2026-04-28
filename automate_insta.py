import os
import time
import asyncio
from playwright.async_api import async_playwright
from instagrapi import Client
from datetime import datetime

# --- CONFIGURACIÓN ---
# Estos hashtags se añadirán automáticamente a cada post
HASHTAGS = "#frases #reflexión #motivacion #universo #paz #dailyquote #espiritualidad"

# Ruta local al archivo index.html (se ajusta automáticamente si estamos en GitHub Actions)
HTML_FILE_PATH = os.path.abspath("index.html")
IMAGE_PATH = "post.jpg"

async def capture_screenshot():
    print(f"Generando captura de pantalla desde {HTML_FILE_PATH}...")
    async with async_playwright() as p:
        # Iniciamos el navegador (headless para que no se abra la ventana)
        browser = await p.chromium.launch()
        # Creamos una página con el tamaño exacto de Instagram (1080x1080)
        page = await browser.new_page(viewport={'width': 1080, 'height': 1080})
        
        # Cargamos el archivo local
        await page.goto(f"file://{HTML_FILE_PATH}")
        
        # Esperamos un momento para que las animaciones (fade-in) terminen
        # y las estrellas se generen
        await asyncio.sleep(3) 
        
        # Tomamos la captura de la pantalla completa (que es 1080x1080)
        await page.screenshot(path=IMAGE_PATH, quality=95)
        print(f"¡Imagen guardada como {IMAGE_PATH}!")
        
        await browser.close()

def upload_to_instagram():
    # Obtenemos las credenciales de las variables de entorno por seguridad
    username = os.environ.get("INSTA_USERNAME")
    password = os.environ.get("INSTA_PASSWORD")

    if not username or not password:
        print("ERROR: No se han configurado las variables de entorno INSTA_USERNAME o INSTA_PASSWORD")
        return

    print(f"Iniciando sesión en Instagram como {username}...")
    cl = Client()
    
    try:
        # Intentamos cargar una sesión previa para evitar bloqueos
        if os.path.exists("session.json"):
            cl.load_settings("session.json")
            print("Sesión previa cargada.")
        
        cl.login(username, password)
        cl.dump_settings("session.json")
        print("Login exitoso.")

        # Preparamos el pie de foto
        date_str = datetime.now().strftime("%d/%m/%Y")
        caption = f"Tu reflexión de hoy ({date_str})\n.\n.\n{HASHTAGS}"

        # Subimos la foto
        print("Subiendo foto a Instagram...")
        media = cl.photo_upload(IMAGE_PATH, caption)
        print(f"¡Publicado con éxito! Media ID: {media.pk}")

    except Exception as e:
        print(f"Error durante la publicación: {e}")

async def main():
    # 1. Generar la imagen
    await capture_screenshot()
    
    # 2. Subir a Instagram
    # Solo intentamos subir si estamos seguros de que hay credenciales
    if os.environ.get("INSTA_USERNAME"):
        upload_to_instagram()
    else:
        print("Aviso: No se detectaron credenciales. La imagen se generó pero no se subió.")

if __name__ == "__main__":
    asyncio.run(main())
