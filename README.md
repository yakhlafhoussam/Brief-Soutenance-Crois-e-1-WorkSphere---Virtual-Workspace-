WorkSphere – Virtual Workspace

Interactive Employee Management Web Application

📌 Overview

WorkSphere is an interactive web application designed to visually manage employees inside a virtual workspace.
It allows adding, moving, and removing employees directly on a floor plan while respecting business rules related to roles and restricted zones.

This project was created as part of a 5-day web development brief.

🎯 Main Objectives

Add, move, and remove employees from an interactive floor plan.

Enforce business rules related to roles and authorized zones.

Provide a modern, intuitive, and responsive UI for desktop, tablet, and mobile.

Centralize personnel data and visualize positions in real time.

🧩 Features
Employee Management

Add new employees through a modal form:
Name, Role, Photo (URL), Email, Phone, Professional Experiences (dynamic form).

Photo preview in real time.

Form validation using REGEX.

Edit employee information (optional bonus).

Search & filter employees (optional).

Interactive Workspace

6 zones available on the floor plan:

Conference Room

Reception

Server Room

Security Room

Staff Room

Archives

Each zone displays:

Employees assigned

A “+” button to add authorized employees

A “X” button on each employee to unassign them

Business Rules

Reception → Receptionists only

Server Room → IT Technicians only

Security Room → Security Agents only

Managers → All zones

Cleaning Staff → All zones except Archives

Other roles → All zones except restricted ones

Additional Logic

Visual highlighting of required empty zones (light red).

Limit number of employees per zone.

Detailed profile popup on click (photo, role, contact, experiences, current location).

Drag & Drop between zones and Unassigned (optional bonus).

Auto-save to LocalStorage (optional).

Auto-Reorganization mode (optional).

📱 Responsive Design

The interface adapts to the following screen sizes:

Portrait

Desktop (large): +1280px

Desktop (small): 1024–1279px

Tablet: 768–1023px

Mobile: up to 767px

Landscape

Mobile: 768–1023px

Tablet: 1024–1279px

Technologies used:

Flexbox, CSS Grid, Media Queries, CSS animations

🛠️ Tech Stack

HTML5

CSS3

JavaScript

Git / GitHub

Responsive UI/UX design

Optional: JS Drag & Drop APIs, LocalStorage

📌 User Stories (Extract)

As a designer, define a modern color palette and icons.

As a developer, build a complete HTML structure with an Unassigned Staff sidebar.

As a developer, validate form inputs using REGEX.

As a developer, enforce business restrictions on every zone.

As a scrum master, manage planning through Trello/Jira/GitHub Projects.

(Full list available in project documentation.)

📂 Project Structure
/img
script.js
input.css
output.css
index.html
README.md
tailwind.config.js

🚀 Deployment

The project must be deployed on one of the following:

GitHub Pages

Vercel

Deliverables:

Link to planning board (GitHub Projects)

Link to hosted website

GitHub repository containing:

Source code (HTML/CSS/JS)

README file

🧪 Performance & Evaluation Criteria
✔ Code Quality

Clean HTML/CSS (validated with W3C)

Organized JavaScript logic

Semantic structure & accessibility (WCAG)

✔ Responsive UI

Fully responsive using Flexbox/Grid and media queries

✔ Functional Requirements

All employee management features implemented

Role-based restrictions working correctly

✔ Version Control

Clear Git history with branches and meaningful commits

✔ Project Management

Task planning using Trello/Jira/GitHub Projects

✔ Deployment

Website accessible and functional online

✔ Final Presentation

10 min presentation

15 min demo/Q&A

20 min situational test

📅 Project Timeline

Start: 17/11/2025

Deadline: 21/11/2025

Duration: 5 days

📘 Learning Methods

Autonomous work using:

documentation

web resources

development tools

version control

UX/UI best practices

👨‍💻 Author

Saad Haimeur
WorkSphere – Virtual Workspace
Front-End Web Developer (2025)