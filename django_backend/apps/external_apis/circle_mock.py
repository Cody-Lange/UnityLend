import random
from datetime import datetime
import logging

logger = logging.getLogger(__name__)

class CircleMockAPI:
    """
    Mock Circle API for USDC to fiat conversion
    Simulates real Circle API responses for prototyping
    """
    
    def __init__(self):
        self.api_key = "mock_circle_api_key"
    
    def convert_usdc_to_fiat(self, usdc_amount, user_email):
        """
        Mock USDC to USD conversion
        """
        logger.info(f"Converting {usdc_amount} USDC to USD for: {user_email}")
        
        # Mock exchange rate (slightly below 1:1 for realism)
        exchange_rate = round(random.uniform(0.998, 1.002), 4)
        usd_amount = float(usdc_amount) * exchange_rate
        
        return {
            'payment_id': f"circle_payment_{hash(user_email)}_{int(datetime.now().timestamp())}",
            'usdc_amount': str(usdc_amount),
            'usd_amount': round(usd_amount, 2),
            'exchange_rate': exchange_rate,
            'fees': round(usd_amount * 0.01, 2),  # 1% fee
            'net_amount': round(usd_amount * 0.99, 2),
            'status': 'completed',
            'bank_transfer': {
                'account_number': '****1234',
                'routing_number': '026009593',
                'estimated_arrival': '2-3 business days'
            },
            'created_at': datetime.now().isoformat(),
            'api_version': 'circle_mock_1.0'
        }
    
    def get_payment_status(self, payment_id):
        """
        Mock payment status check
        """
        logger.info(f"Checking payment status: {payment_id}")
        
        return {
            'payment_id': payment_id,
            'status': random.choice(['pending', 'completed', 'failed']),
            'updated_at': datetime.now().isoformat()
        }
