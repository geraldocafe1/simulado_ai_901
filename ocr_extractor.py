import winocr
import asyncio
import os
import json
import re
from PIL import Image

async def process_all():
    results = []
    media_dir = 'extracted_images/word/media'
    files = sorted(os.listdir(media_dir), key=lambda x: int(re.search(r'\d+', x).group()) if re.search(r'\d+', x) else 0)
    for f in files:
        path = os.path.join(media_dir, f)
        img = Image.open(path)
        res = await winocr.recognize_pil(img, 'pt-BR')
        text = res.text
        q_match = re.search(r'Question\s+(\d+)', text, re.IGNORECASE)
        prog_match = re.search(r'\((\d+)/50\)', text)
        has_solution = 'Objective:' in text or 'This answer is correct' in text
        results.append({
            'file': f,
            'question_num': q_match.group(1) if q_match else None,
            'progress': prog_match.group(1) if prog_match else None,
            'has_solution': has_solution,
            'text': text
        })
    with open('ocr_results.json', 'w', encoding='utf-8') as out:
        json.dump(results, out, ensure_ascii=False, indent=2)
    print(f'Processed {len(results)} images.')
    
    for r in results:
        print(f"{r['file']}: Q={r['question_num']}, Prog={r['progress']}, Sol={r['has_solution']}")

if __name__ == '__main__':
    asyncio.run(process_all())
