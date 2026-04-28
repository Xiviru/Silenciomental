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
        # Iniciamos el navegador
        browser = await p.chromium.launch()
        # Viewport de referencia (Instagram standard)
        page = await browser.new_page(viewport={'width': 1080, 'height': 1080})
        
        # Cargamos el archivo local
        await page.goto(f"file://{HTML_FILE_PATH}")
        
        # Esperamos a que las animaciones y el contenido carguen
        await asyncio.sleep(3) 
        
        # Seleccionamos el elemento central (#app) para la captura focalizada
        # Esto capturará la tarjeta con la frase en formato rectangular
        app_element = page.locator("#app")
        await app_element.screenshot(path=IMAGE_PATH, quality=95)
        
        print(f"¡Imagen focalizada guardada como {IMAGE_PATH}!")
        await browser.close()

def upload_to_instagram():
    # Obtenemos las credenciales
    username = os.environ.get("INSTA_USERNAME")
    password = os.environ.get("INSTA_PASSWORD")

    if not username or not password:
        print("ERROR: No se han configurado las variables de entorno INSTA_USERNAME o INSTA_PASSWORD")
        return

    print(f"Iniciando sesión en Instagram como {username}...")
    cl = Client()
    
    try:
        if os.path.exists("session.json"):
            cl.load_settings("session.json")
        
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

        # --- RESTAURADO: Borrar la foto tras publicar con éxito ---
        if os.path.exists(IMAGE_PATH):
            os.remove(IMAGE_PATH)
            print(f"Archivo temporal {IMAGE_PATH} eliminado.")

    except Exception as e:
        print(f"Error durante la publicación: {e}")

async def main():
    # 1. Generar la imagen
    await capture_screenshot()
    
    # 2. Subir a Instagram
    if os.environ.get("INSTA_USERNAME"):
        upload_to_instagram()
    else:
        print("Aviso: No se detectaron credenciales. La imagen se generó pero no se subió (puedes revisarla en post.jpg).")
        # En este caso no la borramos para que el usuario pueda verla

if __name__ == "__main__":
    asyncio.run(main())
