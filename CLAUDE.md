# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a pharma AI mindset quiz application for the AIP (Adventures In Pharma) conference. The entire application consists of a single-page HTML file with embedded CSS and JavaScript.

## Architecture

- **Single-page application**: All code is contained in `frontend/index.html` with external `frontend/styles.css`
- **Styling**: Custom CSS with AIP brand colors (--aip-navy-blue, --aip-mustard, --aip-burnt-orange, --aip-white, --aip-cream)
- **JavaScript**: Vanilla JavaScript for quiz flow, scoring, confetti effects, and Xano API integration
- **Data collection**: Quiz results are posted to Xano backend API

## Development

Since this is a static HTML application, no build process is required. Simply open `frontend/index.html` in a browser to view and test changes.

## Quiz Flow

- 10-question quiz about AI attitudes in pharma
- Welcome page → dynamic question pages → loading animation → results with persona
- Scoring: Each question scored 0-4, some questions have reverse scoring
- Persona assignment based on final score percentage (6 personas: M.A.C.-Bot, Nova, Groc, Jetpack Jim, Vega Callisto, Dangerous Dan)
- Results include discount codes and social sharing functionality

## Key Features

- Animated question transitions with progress tracking
- Loading screen with spinning cogs animation
- Confetti celebration on results
- LinkedIn sharing integration
- Responsive design for mobile/tablet
- AI mindset spectrum visualization
- Integration with Xano API for data collection

## Testing URL Parameters

Use `?score=X` (where X is 0-100) to skip directly to results for testing different personas
