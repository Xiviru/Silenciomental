import json
import random

sujetos = [
    "El universo", "Tu alma", "El corazón", "La energía cósmica", "La luz interior", 
    "El destino", "La magia de la vida", "El silencio", "El cosmos", "La sabiduría oculta", 
    "Tu espíritu", "El viaje interior", "La consciencia", "El fluir del tiempo", "La naturaleza",
    "Tu ser superior", "La intuición", "El amor universal", "La esencia divina", "La mente serena"
]

verbos = [
    "susurra", "revela", "transforma", "abraza", "despierta", "ilumina", "guía", 
    "encuentra", "sintoniza con", "refleja", "atrae", "crea", "conecta con", "manifiesta",
    "vibra con", "descubre", "sana", "libera", "transciende", "eleva"
]

complementos = [
    "el camino de las estrellas.", "la verdad absoluta.", "el misterio del ahora.", 
    "la eternidad del momento.", "el flujo de la existencia.", "la paz infinita.", 
    "el poder interior.", "la belleza oculta.", "las respuestas que buscas.", 
    "el destino manifiesto.", "la luz en la oscuridad.", "el milagro diario.",
    "la armonía del todo.", "el eco del universo.", "la melodía del alma.",
    "el propósito sagrado.", "la fuerza invisible.", "la magia de existir."
]

autores = [
    "Sabiduría Antigua", "Maestro Zen", "Voz del Universo", "Anónimo", "Viajero Cósmico", 
    "Guía Espiritual", "Alma Estelar", "Luz Interior", "Eco del Silencio"
]

quotes = []
seen = set()

# Seed to be deterministic
random.seed(42)

while len(quotes) < 1000:
    text = f"{random.choice(sujetos)} {random.choice(verbos)} {random.choice(complementos)}"
    if text not in seen:
        seen.add(text)
        quotes.append({
            "text": text,
            "author": random.choice(autores)
        })

with open("quotes.js", "w", encoding="utf-8") as f:
    f.write("// Archivo generado automáticamente con 1000 frases místicas únicas\n")
    f.write("const quotes = " + json.dumps(quotes, indent=4, ensure_ascii=False) + ";\n")
