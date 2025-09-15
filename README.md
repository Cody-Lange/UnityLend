# DISCLAIMER - LARGELY "VIBE CODED" AI SLOP FOR A PROOF OF CONCEPT

# UnityLend 🏦💰

A fintech startup building a mobile app to provide low-interest (5-10% APR) loans to Detroit's unbanked population using AI-driven risk analysis and decentralized finance (DeFi) on the Arbitrum blockchain.

## 🎯 Project Overview

UnityLend targets Detroit's unbanked population (30% of adults, per FDIC 2021) with a user-friendly mobile app that:
- Provides low-interest loans (5-10% APR) vs predatory lending (400%+ APR)
- Uses AI for credit risk assessment
- Integrates with DeFi protocols on Arbitrum
- Converts stablecoins (USDC) to fiat for bank deposits
- Hides blockchain complexity from users

**Market Size**: $1B+ predatory lending market  
**Prototype Target**: 100 users by Q1 2026  
**Funding Goal**: $500K seed round by Q4 2025

## 🏗️ Architecture

```
UnityLend/
├── django_backend/           # Django REST API Backend
│   ├── unitylend/           # Django project settings
│   ├── apps/                # Custom Django apps
│   │   ├── authentication/ # User auth and JWT
│   │   ├── loans/          # Loan management
│   │   ├── ai_agents/      # AI/ML models
│   │   ├── external_apis/  # Third-party integrations
│   │   └── defi/           # Blockchain/DeFi integration
│   ├── scripts/            # Utility scripts
│   ├── tests/              # Test files
│   └── requirements.txt    # Python dependencies
├── react_native_app/        # React Native Mobile App (Future)
├── smart_contracts/         # Solidity contracts (Future)
├── docs/                   # Project documentation
└── docker/                 # Docker configuration (Future)
```

## 🚀 Quick Start

### Prerequisites
- Python 3.9+
- Node.js 18+ (for React Native)
- Git

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd django_backend
   ```

2. **Create virtual environment**
   ```bash
   python -m venv venv_django
   
   # Windows:
   venv_django\Scripts\activate
   
   # Linux/Mac:
   source venv_django/bin/activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Setup environment**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

5. **Run migrations**
   ```bash
   python manage.py migrate
   ```

6. **Start development server**
   ```bash
   python manage.py runserver
   ```

### Frontend Setup (Coming Soon)

```bash
cd react_native_app
npm install
npx expo start
```

## 🔧 Technology Stack

### Backend (Django)
- **Framework**: Django 5.2.4 + Django REST Framework
- **Database**: SQLite (dev) / PostgreSQL (prod)
- **Authentication**: JWT with `djangorestframework-simplejwt`
- **AI/ML**: XGBoost for credit assessment
- **Blockchain**: Web3.py for Arbitrum integration
- **External APIs**: Plaid, Onfido, Circle (mocked for MVP)

### Frontend (React Native - Future)
- **Framework**: React Native with Expo
- **State Management**: Redux Toolkit
- **Navigation**: React Navigation
- **UI Components**: Native Base or React Native Elements

### Blockchain (Arbitrum)
- **Network**: Arbitrum One
- **Protocols**: Aave, Goldfinch
- **Token**: USDC for loans
- **Wallet**: MetaMask integration

## 📚 API Documentation

### Authentication
- `POST /api/register/` - User registration
- `POST /api/token/` - JWT token obtain
- `POST /api/token/refresh/` - JWT token refresh

### Loans
- `POST /api/apply_loan/` - Submit loan application
- `GET /api/status/` - Get loan status
- `GET /api/loans/` - List user's loans

### AI Assessment
- `POST /api/ai/credit_assessment/` - Credit risk analysis

## 🧪 Testing

```bash
# Backend tests
cd django_backend
python manage.py test

# Frontend tests (Future)
cd react_native_app
npm test
```

## 🚀 Deployment

### Development
```bash
# Backend
cd django_backend
python manage.py runserver

# Frontend (Future)
cd react_native_app
npx expo start
```

### Production (Future)
- **Backend**: Docker + AWS ECS
- **Frontend**: Expo Application Services
- **Database**: AWS RDS PostgreSQL
- **Blockchain**: Arbitrum mainnet

## 🗺️ Roadmap

### Phase 1: MVP (Q1 2026)
- [x] Django backend setup
- [x] Basic user authentication
- [x] Loan application flow
- [x] AI credit assessment (mock)
- [x] DeFi integration (mock)
- [ ] React Native mobile app
- [ ] End-to-end loan process

### Phase 2: Beta (Q2 2026)
- [ ] Real DeFi integration
- [ ] KYC/AML compliance
- [ ] Fiat conversion (Circle)
- [ ] Bank deposit integration
- [ ] Enhanced AI models

### Phase 3: Scale (Q3-Q4 2026)
- [ ] Production deployment
- [ ] 100 user beta test
- [ ] Regulatory compliance
- [ ] Performance optimization
- [ ] Additional AI agents

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: cody@unitylend.com
- **GitHub**: [@Cody-Lange](https://github.com/Cody-Lange)
- **LinkedIn**: [Cody Lange](https://linkedin.com/in/cody-lange)

## 🎯 Mission

*Democratizing access to fair financial services for Detroit's unbanked population through innovative AI and blockchain technology.*
