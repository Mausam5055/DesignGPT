# DesignGPT Documentation Book

This folder contains the LaTeX source code for the DesignGPT documentation book.

## Compilation

You can compile the book to PDF using a LaTeX distribution like TeX Live or MiKTeX.

Run the following command in this directory:

```bash
pdflatex main.tex
```

You may need to run it 2-3 times to resolve all cross-references.

## Structure

- `main.tex`: The entry point.
- `structure.tex`: Styling and package imports.
- `chapters/`: Individual chapters content.
- `images/`: Directory for images.

## Output

The compiled PDF is located at `main.pdf`.
