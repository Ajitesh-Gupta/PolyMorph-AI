# AI Polymer System

An AI-powered system for generating self-decomposing polymers with domain-specific functionality.

## Features

- Generative AI for creating environmentally decomposable polymers
- Molecular kill switches triggered by pH, temperature, or microbial presence
- Graph neural networks for evaluating degradability and stability
- Domain-specific generation for agriculture, water management, and urban planning
- Web interface for user input and visualization

## Project Structure

```
ai-polymer-system/
├── backend/              # FastAPI backend
│   ├── api/             # API routes
│   ├── models/          # ML models
│   ├── schemas/         # Pydantic models
│   └── utils/           # Utility functions
├── frontend/            # React frontend
│   ├── src/            # Source files
│   └── public/         # Static files
└── data/               # Data files and models
```

## Setup

1. Create a virtual environment:

```bash
python -m venv venv1
source venv1/bin/activate  # On Windows: venv1\Scripts\activate
```

2. Install dependencies:

```bash
pip install -r requirements.txt
```

3. Start the backend server:

```bash
cd backend
uvicorn main:app --reload
```

4. Start the frontend development server:

```bash
cd frontend
npm install
npm run dev
```

## API Endpoints

- `POST /api/generate`: Generate a new polymer
- `POST /api/predict`: Predict polymer degradability
- `GET /api/history`: Get generation history

## License

MIT
