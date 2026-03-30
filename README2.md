# IZANO - Japanese Learning App

A macOS application for Japanese language learning, featuring a Spaced Repetition System (SRS) for vocabulary, kanji, and grammar review.

## Features

- **Spaced Repetition System (SRS)** - Smart review scheduling based on SM-2 algorithm
- **Vocabulary & Kanji** - Comprehensive learning content with flashcards
- **Lesson Structure** - Organized lessons with grammar points
- **Gamification** - XP system and achievements to keep you motivated
- **Multi-language Support** - Interface available in English, Portuguese, Japanese, and Korean
- **Dark Theme** - Modern dark mode UI for comfortable learning
- **Pomodoro Sessions** - Focus timer for productive study sessions
- **Multi-Profile Support** - Create multiple profiles with PIN protection, each with isolated progress, SRS cards, and achievements

## Requirements

- macOS 14.0+ (Sonoma or later)
- Xcode 15.0+

## Building

```bash
cd "/Users/izano/Documents/Método IZANO"

# Debug build
xcodebuild -project IZANOApp.xcodeproj \
  -scheme IZANOApp \
  -configuration Debug \
  build \
  CODE_SIGN_IDENTITY="" \
  CODE_SIGNING_REQUIRED=NO
```

## Testing

```bash
xcodebuild test -project IZANOApp.xcodeproj \
  -scheme IZANOApp \
  -destination 'platform=macOS'
```

## Project Structure

```
IZANOApp/
├── App/                      # App entry point
├── Presentation/             # SwiftUI views
├── Domain/Models/            # SwiftData models
├── Data/                     # Persistence & repositories
├── Navigation/               # App navigation
└── Core/                     # Algorithms & utilities

IZANOAppTests/                # Unit tests
```

## License

MIT License
