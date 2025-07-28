import random
from datetime import datetime
import logging

logger = logging.getLogger(__name__)

class OnfidoMockAPI:
    """
    Mock Onfido API for KYC/AML verification
    Simulates real Onfido API responses for prototyping
    """
    
    def __init__(self):
        self.api_key = "mock_onfido_api_key"
    
    def create_check(self, user_email):
        """
        Mock KYC check creation
        """
        logger.info(f"Creating mock Onfido KYC check for: {user_email}")
        
        # Simulate KYC check result
        check_result = random.choice(['complete', 'incomplete', 'clear'])
        
        return {
            'check_id': f"onfido_check_{hash(user_email)}",
            'status': check_result,
            'result': 'clear' if check_result == 'complete' else 'consider',
            'reports': [
                {
                    'name': 'identity',
                    'status': 'complete',
                    'result': 'clear',
                    'properties': {
                        'date_of_birth': '1990-01-01',
                        'full_name': 'John Doe',
                        'address': '123 Main St, Detroit, MI 48201'
                    }
                },
                {
                    'name': 'document',
                    'status': 'complete',
                    'result': 'clear',
                    'properties': {
                        'document_type': 'driving_license',
                        'issuing_country': 'USA',
                        'expiry_date': '2028-12-31'
                    }
                }
            ],
            'created_at': datetime.now().isoformat(),
            'api_version': 'onfido_mock_1.0'
        }
    
    def get_check_status(self, check_id):
        """
        Mock check status retrieval
        """
        logger.info(f"Fetching mock Onfido check status: {check_id}")
        
        return {
            'check_id': check_id,
            'status': 'complete',
            'result': 'clear',
            'updated_at': datetime.now().isoformat()
        }
