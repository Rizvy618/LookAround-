# Lookaround - Location Sharing App

## Overview

This is a location sharing application called "Lookaround" built with React (Vite) on the frontend and Express.js on the backend. The app allows users to share their real-time location with partners, similar to Find My Friends. Users can add partners by email, manage privacy settings, and view locations on an interactive map.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a full-stack architecture with a clear separation between client and server components:

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent UI
- **State Management**: TanStack React Query for server state and caching
- **Routing**: Wouter for lightweight client-side routing
- **Maps**: Leaflet with React-Leaflet for interactive map functionality

### Backend Architecture
- **Runtime**: Node.js with Express.js web framework
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API**: RESTful API endpoints for all client-server communication

## Key Components

### Database Schema
The application uses four main tables:
- **users**: Stores user account information (id, username, email)
- **partners**: Manages partner relationships and invitation status
- **locations**: Stores real-time location data with timestamps, coordinates, speed, heading, altitude, and activity classification
- **settings**: User preferences for location sharing and battery alerts

### Core Features
1. **User Management**: Basic user operations and authentication simulation
2. **Partner System**: Add partners by email, manage partner invitations and relationships
3. **Location Tracking**: Real-time location sharing using browser geolocation API
4. **Interactive Map**: Visual representation of user and partner locations
5. **Privacy Controls**: Settings for location sharing and battery level alerts
6. **Battery Monitoring**: Track and share device battery levels
7. **Activity Detection**: Automatic detection of physical activities (walking, running, cycling, driving, stationary)
8. **Speed Tracking**: Real-time speed measurement and display in km/h
9. **Movement Analytics**: Intelligence algorithms to analyze movement patterns and classify activities

### UI Components
- Modern component library using Radix UI primitives
- Responsive design optimized for mobile devices
- Toast notifications for user feedback
- Modal dialogs for partner management
- Permission prompts for location access

## Data Flow

1. **Location Capture**: Browser geolocation API captures GPS coordinates
2. **Data Transmission**: Location data sent to backend via REST API
3. **Database Storage**: Drizzle ORM stores location data in PostgreSQL
4. **Real-time Updates**: React Query polls for location updates every 30 seconds
5. **Map Visualization**: Leaflet renders user and partner locations on interactive map

## External Dependencies

### Database
- **Neon Database**: Serverless PostgreSQL hosting
- **Drizzle ORM**: Type-safe database operations and migrations

### Frontend Libraries
- **Leaflet**: Open-source mapping library
- **Radix UI**: Headless UI component primitives
- **TanStack React Query**: Data fetching and caching
- **Tailwind CSS**: Utility-first styling framework

### APIs
- **Browser Geolocation API**: For accessing device location
- **Battery Status API**: For monitoring device battery (with fallbacks)

## Deployment Strategy

The application is configured for development and production environments:

### Development
- Vite dev server for hot reloading
- Express server with development middleware
- PostgreSQL database with Drizzle ORM

### Production Build
- Vite builds optimized frontend bundle
- esbuild compiles backend for Node.js deployment
- PostgreSQL database with proper migrations
- Environment variables for database connections

### Configuration
- TypeScript for type safety across the stack
- Path aliases for clean imports
- Tailwind configuration with custom design system
- Drizzle configuration for database migrations

The application is designed to be easily deployable on platforms like Replit, with proper environment variable handling and database provisioning.