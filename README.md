# Cloud-Hosted React Dashboard

## Overview
A responsive frontend dashboard built with React and deployed on AWS using a secure static hosting architecture.  
The project demonstrates real-world frontend deployment using Amazon S3 and CloudFront.

## Tech Stack
**Frontend**
- Vite
- React
- Tailwind CSS
- shadcn/ui

**Cloud / DevOps**
- Amazon S3 (private bucket)
- Amazon CloudFront (CDN)
- Origin Access Control (OAC)
- CloudFront default HTTPS

**Tools**
- Git & GitHub
- VS Code
- AWS Management Console

##  AWS Architecture
User traffic is routed through Amazon CloudFront, which serves as the public entry point and CDN.  
CloudFront securely fetches static assets from a private S3 bucket using Origin Access Control (OAC).  
The application is served over HTTPS using CloudFront’s default certificate.

##  Features
- Responsive dashboard UI
- Secure static hosting on AWS
- CDN-backed content delivery
- Private S3 bucket (no public access)
- HTTPS enabled by default

##  Deployment
- Build frontend locally using Vite
- Upload production build (`dist/`) to Amazon S3
- Serve content through CloudFront
- Invalidate CloudFront cache after deployment

##  Screenshots

### AWS Architecture
![AWS Architecture](docs/architecture/architecture2.png)

### CloudFront Distribution
![CloudFront Distribution](docs/screenshots/cloudfront-general.png)

### CloudFront Origin Configuration
![CloudFront Origin](docs/screenshots/cloudfront-origins.png)

### S3 Bucket Permissions (Private)
![S3 Permissions](docs/screenshots/s3-permission.jpeg)

### Live Application
![Live App](docs/screenshots/app-live.png)


## 💰 Cost
This project runs within AWS Free Tier limits for S3 and CloudFront under light usage.  
No paid services were required during development.

## 🎯 Purpose
This project was built to practice:
- Deploying a frontend application on AWS
- Understanding CDN-based architectures
- Securing S3 using CloudFront OAC
- Documenting real cloud projects professionally

## 🔮 Future Improvements
- Add custom domain with ACM
- Introduce CI/CD with GitHub Actions
- Improve caching policies
- Add backend API integration

## 🧑‍💻 Author
Eleja Ololade
