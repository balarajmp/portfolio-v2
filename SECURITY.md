# Security Policy

## Supported Versions

Only the latest release version of **Portfolio Platform (portfolio-v2)** receives security updates.

| Version | Supported          |
| ------- | ------------------ |
| v0.1.0  | :white_check_mark: |
| < 0.1.0 | :x:                |

## Reporting a Vulnerability

We take the security of this platform seriously. If you discover a security vulnerability, please follow these steps:

1. **Private Disclosure:** Do **NOT** report security vulnerabilities via public GitHub issues.
2. **Email Report:** Send a detailed security vulnerability report directly to the repository maintainer.
3. **Include Details:** Please include:
   - Description of the vulnerability and potential impact.
   - Step-by-step proof of concept (PoC) or reproduction script.
   - Recommended remediation if available.

## Security Controls Implemented

- **Strict Content Security Policy (CSP):** Header configuration preventing unauthorized script execution and cross-site scripting (XSS).
- **Static Content Architecture:** Zero user database credentials or vulnerable runtime backend APIs.
- **Dependency Auditing:** Automated dependency vulnerability scanning via `npm audit` and Dependabot.
- **Sanitized Inputs:** Strict input validation on all client-side triggers and form fields.
