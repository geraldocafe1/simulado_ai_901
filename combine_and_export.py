import json
from dataset_builder import questions as part1
from dataset_builder_part2 import questions_part2 as part2

all_questions = part1 + part2
print(f"Total merged questions: {len(all_questions)}")

# Verify IDs from 1 to 50
ids = [q['id'] for q in all_questions]
assert ids == list(range(1, 51)), f"IDs mismatch: {ids}"

# Export as JSON
with open('simulado_data.json', 'w', encoding='utf-8') as f:
    json.dump(all_questions, f, ensure_ascii=False, indent=2)

# Export as JS
js_content = f"// Simulado Oficial Microsoft Exam AI-901: Microsoft Azure AI Fundamentals\n// Total: 50 questões traduzidas e comentadas\n\nconst SIMULADO_QUESTIONS = {json.dumps(all_questions, ensure_ascii=False, indent=2)};\n\nif (typeof module !== 'undefined' && module.exports) {{\n    module.exports = {{ SIMULADO_QUESTIONS }};\n}}\n"

with open('simulado_data.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print("simulado_data.json and simulado_data.js exported successfully!")
