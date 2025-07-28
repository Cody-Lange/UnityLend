# UnityLend Django Backend

A Django REST API backend for UnityLend, a fintech app providing low-interest loans to Detroit's unbanked population using AI-driven risk analysis and DeFi integration on Arbitrum.

## 🏗️ Architecture

- **Backend**: Django 5.2.4 with Django REST Framework
- **Database**: SQLite (development) / PostgreSQL (production)
- **Authentication**: JWT-based using `djangorestframework-simplejwt`
- **AI/ML**: XGBoost for credit risk assessment
- **Blockchain**: Web3.py for Arbitrum integration (Aave/Goldfinch protocols)
- **External APIs**: Mock integrations for Plaid, Onfido, Circle

## 🚀 Quick Start

### Prerequisites
- Python 3.9+
- Git

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/unitylend-backend.git
   cd unitylend-backend/django_backend
   ```

2. **Run setup script**
   
   **Windows:**
   ```batch
   setup_dev.bat
   ```
   
   **Linux/Mac:**
   ```bash
   chmod +x setup_dev.sh
   ./setup_dev.sh
   ```

3. **Manual setup** (if scripts don't work)
   ```bash
   # Create virtual environment
   python -m venv venv_django
   
   # Activate virtual environment
   # Windows:
   venv_django\Scripts\activate
   # Linux/Mac:
   source venv_django/bin/activate
   
   # Install dependencies
   pip install -r requirements.txt
   
   # Copy environment template
   cp .env.example .env
   
   # Run migrations
   python manage.py migrate
   
   # Create superuser
   python manage.py createsuperuser
   ```

4. **Start development server**
   ```bash
   python manage.py runserver
   ```

## 🔧 Configuration

### Environment Variables

Copy `.env.example` to `.env` and configure:

- `SECRET_KEY`: Django secret key
- `DEBUG`: Set to `False` in production
- `ARBITRUM_RPC_URL`: Arbitrum network RPC endpoint
- `PRIVATE_KEY`: Ethereum private key for transactions
- External API keys for Plaid, Onfido, Circle

### Database Migration

```bash
python manage.py makemigrations
python manage.py migrate
```

## 📚 API Endpoints

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

## 🏗️ Project Structure

```
django_backend/
├── unitylend/              # Django project settings
├── apps/                   # Custom Django apps
│   ├── authentication/     # User auth and JWT
│   ├── loans/             # Loan management
│   ├── ai_agents/         # AI/ML models
│   ├── external_apis/     # Third-party integrations
│   └── defi/              # Blockchain/DeFi integration
├── scripts/               # Utility scripts
├── tests/                 # Test files
└── static/                # Static files
```

## 🧪 Testing

```bash
# Run all tests
python manage.py test

# Run specific app tests
python manage.py test apps.authentication
python manage.py test apps.loans
```

## 🔒 Security

- JWT authentication for API access
- Rate limiting on sensitive endpoints
- Environment variable configuration
- CORS configuration for React Native

## 🚀 Deployment

### Docker (Coming Soon)
```bash
docker-compose up --build
```

### Production Checklist
- [ ] Set `DEBUG=False`
- [ ] Configure PostgreSQL database
- [ ] Set up Redis for caching
- [ ] Configure proper CORS origins
- [ ] Set up monitoring and logging
- [ ] Configure backup strategy

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔮 Roadmap

- [ ] Full DeFi integration with Arbitrum
- [ ] Celery for async task processing
- [ ] PostgreSQL migration
- [ ] Docker containerization
- [ ] CI/CD pipeline
- [ ] Additional AI agents (compliance, guidance)
- [ ] Real-time notifications

## 📞 Support

For support, email support@unitylend.com or create an issue in this repository.