#!/usr/bin/env python3
"""
Main script to generate all free PDF downloads for The Nursing Collective website
Run this script to regenerate all PDFs at once
"""

import os
import sys

# Import the individual PDF generators
from nclex_priority_concepts import create_nclex_priority_concepts_pdf
from clinical_day_survival import create_clinical_survival_guide_pdf
from nursing_supply_list import create_nursing_supply_list_pdf


def main():
    """Generate all free PDF resources"""

    print("\n" + "="*60)
    print("Generating Free PDF Resources for The Nursing Collective")
    print("="*60 + "\n")

    # Get the output directory
    script_dir = os.path.dirname(os.path.abspath(__file__))
    output_dir = os.path.join(os.path.dirname(script_dir), 'assets', 'downloads')

    # Ensure output directory exists
    os.makedirs(output_dir, exist_ok=True)

    # List of PDFs to generate with their file names
    pdfs = [
        {
            'name': 'NCLEX Priority Concepts',
            'function': create_nclex_priority_concepts_pdf,
            'filename': 'nclex-priority-concepts.pdf'
        },
        {
            'name': 'First Clinical Day Survival Guide',
            'function': create_clinical_survival_guide_pdf,
            'filename': 'clinical-day-survival-guide.pdf'
        },
        {
            'name': 'Nursing School Supply List',
            'function': create_nursing_supply_list_pdf,
            'filename': 'nursing-supply-list.pdf'
        }
    ]

    # Generate each PDF
    success_count = 0
    for pdf_info in pdfs:
        try:
            print(f"Generating {pdf_info['name']}...")
            output_path = os.path.join(output_dir, pdf_info['filename'])
            pdf_info['function'](output_path)
            success_count += 1
        except Exception as e:
            print(f"✗ Error generating {pdf_info['name']}: {str(e)}")
            sys.exit(1)

    print("\n" + "="*60)
    print(f"✓ Successfully generated {success_count}/{len(pdfs)} PDFs")
    print(f"✓ Output directory: {output_dir}")
    print("="*60 + "\n")


if __name__ == "__main__":
    main()
