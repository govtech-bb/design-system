# GovTechBB Design System

> 🚧 **This project is currently in a pre-release state.** Things may change frequently as the system evolves. 🚧

## Monorepo Structure

This repository is managed with **pnpm workspaces** and **Turborepo**, allowing multiple packages to be developed, built, and versioned together.

| Package             | Description                                                                                                                                                               |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **apps/docs**       | Documentation site that houses component examples, design tokens, and usage guidelines — similar to [design-system.service.gov.uk](https://design-system.service.gov.uk). |
| **packages/react**  | Core React UI components for the design system.                                                                                                                           |
| **packages/design** | Design tokens and configuration for Tailwind CSS.                                                                                                                         |
| **storybook**       | Storybook instance used for visual testing and documentation of React components.                                                                                         |
