# EvoGit Fast Demo

A minimal React demonstration project showcasing automated self-improvement via Claude Code.

## Overview

This repository demonstrates:
- Automated code review and improvement using Claude Code GitHub Actions
- Self-maintaining codebase through scheduled workflow runs
- Integration with Qodo for additional code review

## Project Structure

```
.
├── .github/workflows/
│   └── self-improve.yml    # Claude Code automation workflow
├── src/
│   └── components/
│       └── App.js          # Main React component
├── CLAUDE.md               # AI guardrails and modification rules
└── README.md               # This file
```

## Getting Started

### Prerequisites

- Node.js 16+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/evogit-fast-demo.git
cd evogit-fast-demo

# Install dependencies
npm install

# Start the development server
npm start
```

### Build

```bash
# Create production build
npm run build
```

## How It Works

### Claude Code Self-Improvement

This repository uses a GitHub Actions workflow (`.github/workflows/self-improve.yml`) that runs twice daily to:

1. Analyze the codebase for potential improvements
2. Identify high-impact, low-risk changes
3. Automatically create pull requests with fixes

The workflow is configured to focus on:
- Documentation improvements
- Error handling
- Code quality
- Test coverage
- Security issues

### Guardrails

See `CLAUDE.md` for detailed rules about what Claude Code is allowed to modify. Key principles:
- No breaking API changes
- Minimal, focused changes
- Safety-first approach
- Clear documentation of all changes

## Contributing

While this is primarily an AI-maintained repository, human contributions are welcome! Please:

1. Check existing issues and PRs
2. Follow the code style in existing files
3. Add tests for new functionality
4. Update documentation as needed

## License

This project is provided as-is for demonstration purposes.

## Acknowledgments

- Built with [React](https://reactjs.org/)
- Automated using [Claude Code](https://claude.com/claude-code)
- Additional review by [Qodo](https://qodo.ai/)
