import random
from datetime import datetime, timedelta
import logging

logger = logging.getLogger(__name__)

class PlaidMockAPI:
    """
    Mock Plaid API for financial data integration
    Simulates real Plaid API responses for prototyping
    """
    
    def __init__(self):
        self.api_key = "mock_plaid_api_key"
    
    def get_transactions(self, user_email):
        """
        Mock transaction data for user
        """
        logger.info(f"Fetching mock Plaid transactions for: {user_email}")
        
        # Generate mock transactions
        transactions = []
        for i in range(random.randint(15, 50)):
            transaction = {
                'transaction_id': f"plaid_tx_{i}_{hash(user_email)}",
                'amount': round(random.uniform(5.0, 200.0), 2),
                'description': random.choice([
                    'Grocery Store', 'Gas Station', 'Restaurant', 
                    'Online Purchase', 'Utility Bill', 'Rent Payment',
                    'ATM Withdrawal', 'Direct Deposit', 'Healthcare'
                ]),
                'date': (datetime.now() - timedelta(days=random.randint(1, 90))).isoformat(),
                'category': random.choice([
                    'Food and Drink', 'Transportation', 'Shopping',
                    'Bills', 'Entertainment', 'Healthcare', 'Income'
                ]),
                'account_id': f"account_{hash(user_email) % 1000}"
            }
            transactions.append(transaction)
        
        # Mock account information
        accounts = [
            {
                'account_id': f"account_{hash(user_email) % 1000}",
                'name': 'Checking Account',
                'type': 'depository',
                'subtype': 'checking',
                'balance': round(random.uniform(100.0, 5000.0), 2)
            },
            {
                'account_id': f"account_{hash(user_email) % 1000 + 1}",
                'name': 'Savings Account',
                'type': 'depository',
                'subtype': 'savings',
                'balance': round(random.uniform(200.0, 10000.0), 2)
            }
        ]
        
        return {
            'transactions': transactions,
            'accounts': accounts,
            'total_transactions': len(transactions),
            'api_version': 'plaid_mock_1.0',
            'fetched_at': datetime.now().isoformat()
        }
    
    def get_income(self, user_email):
        """
        Mock income verification data
        """
        logger.info(f"Fetching mock income data for: {user_email}")
        
        return {
            'income_streams': [
                {
                    'description': 'Primary Employment',
                    'monthly_income': round(random.uniform(2000.0, 8000.0), 2),
                    'confidence': 0.95,
                    'last_updated': datetime.now().isoformat()
                }
            ],
            'total_monthly_income': round(random.uniform(2000.0, 8000.0), 2),
            'income_stability_score': round(random.uniform(0.6, 0.95), 2)
        }
