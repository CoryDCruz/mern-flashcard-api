# Flashcard App API 

Backend API for use with the Flashcard App frontend. Houses the models and endpoint routing. 

# Technologies Used
- Javascript ES6,
- node packages: express, ejs, mongoose, mongodb, qrcode, method-override, dotenv

# Models 
- Deck
  - name: String
  - flashcards: [ObjectId references to Flashcards]
- Flashcards
  - front: String
  - back: String
  - deck: ObjectId reference to Deck
  
# Routes
- Deck routes
  - GET /api/decks 
  - POST /api/decks
  - DELETE /api/decks/:id
  - PUT /api/decks/:id
  - GET /api/decks/:id
  
- Flashcard Routes
  - DELETE /api/decks/flashcards/:id
  - PUT /api/decks//flashcards/:id
  - POST /api/decks/flashcards/:id
