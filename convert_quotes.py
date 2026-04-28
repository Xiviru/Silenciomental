import json
import re

quotes = []
with open('frases.txt', 'r', encoding='utf-8') as f:
    for line in f:
        line = line.strip()
        # Skip empty lines or headers
        if not line or not line.startswith('"'):
            continue
        
        # Parse the quote and author
        # Usually format is: "Quote text" — Author
        # Let's use regex or split from the right
        if " — " in line:
            text, author = line.rsplit(" — ", 1)
        elif " - " in line:
            text, author = line.rsplit(" - ", 1)
        else:
            continue
            
        text = text.strip(' "“”')
        author = author.strip()
        
        if text and author:
            quotes.append({"text": text, "author": author})

with open("quotes.js", "w", encoding="utf-8") as f:
    f.write("// Archivo generado a partir de frases.txt\n")
    f.write("const quotes = " + json.dumps(quotes, indent=4, ensure_ascii=False) + ";\n")

print(f"Se procesaron {len(quotes)} frases exitosamente.")
