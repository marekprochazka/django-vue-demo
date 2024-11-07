from pathlib import Path


ASSETS_PATH = Path(__file__).resolve().parent.parent / 'services' / 'static' / 'assets'

TARGET_PATH = Path(__file__).resolve().parent.parent / 'services' / 'frontend' / 'src' / 'generated' / 'get_static_asset.ts'

TEMPLATE_PATH = Path(__file__).resolve().parent / 'templates' / 'get_static_asset.template'

static_files = list(map(lambda v: f'\'{str(v).split('assets/')[1]}\'', ASSETS_PATH.glob('**/*')))

with open(TEMPLATE_PATH, 'r') as template_file:
    template = template_file.read()
    with open(TARGET_PATH, 'w') as target_file:
        target_file.write(template.replace("@@ASSETS@@", ' | '.join(static_files)))