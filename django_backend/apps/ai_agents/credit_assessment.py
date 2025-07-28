import random
import numpy as np
import pandas as pd
from sklearn.preprocessing import StandardScaler
import logging
import os

logger = logging.getLogger(__name__)

class CreditAssessmentAgent:
    """
    AI agent for credit assessment using XGBoost (mocked for prototype)
    Processes financial data and returns risk score and loan terms
    """
    
    def __init__(self):
        self.model = None
        self.scaler = StandardScaler()
        self.load_model()
    
    def load_model(self):
        """
        Load pre-trained XGBoost model
        For prototype, we'll create a mock model
        """
        model_path = os.path.join(os.path.dirname(__file__), 'models', 'xgboost_model.pkl')
        
        try:
            # In production, load actual trained model
            # import pickle
            # with open(model_path, 'rb') as f:
            #     self.model = pickle.load(f)
            
            # For prototype, create mock model
            self.model = self._create_mock_model()
            logger.info("Credit assessment model loaded successfully")
            
        except Exception as e:
            logger.error(f"Failed to load credit assessment model: {str(e)}")
            self.model = self._create_mock_model()
    
    def _create_mock_model(self):
        """
        Create a mock model for prototyping
        """
        class MockXGBoostModel:
            def predict_proba(self, X):
                # Mock prediction based on input features
                scores = []
                for row in X:
                    # Simple rule-based scoring for demo
                    avg_balance = row[0]
                    transaction_count = row[1]
                    income_stability = row[2]
                    
                    base_score = 0.5
                    if avg_balance > 1000:
                        base_score += 0.2
                    if transaction_count > 20:
                        base_score += 0.1
                    if income_stability > 0.8:
                        base_score += 0.2
                    
                    # Add some randomness
                    base_score += random.uniform(-0.1, 0.1)
                    base_score = max(0.1, min(0.95, base_score))
                    
                    scores.append([1 - base_score, base_score])
                
                return np.array(scores)
        
        return MockXGBoostModel()
    
    def assess_credit(self, financial_data):
        """
        Assess creditworthiness based on financial data
        Returns risk score and recommended terms
        """
        try:
            # Extract features from financial data
            features = self._extract_features(financial_data)
            
            # Prepare features for model
            feature_array = np.array([features])
            
            # Get risk score from model
            risk_probabilities = self.model.predict_proba(feature_array)
            risk_score = risk_probabilities[0][1]  # Probability of being creditworthy
            
            # Calculate recommended APR based on risk score
            recommended_apr = self._calculate_apr(risk_score)
            
            # Determine maximum loan amount
            max_loan_amount = self._calculate_max_loan_amount(risk_score, financial_data)
            
            assessment_result = {
                'risk_score': round(risk_score, 2),
                'recommended_apr': recommended_apr,
                'max_loan_amount': max_loan_amount,
                'assessment_factors': {
                    'average_balance': features[0],
                    'transaction_frequency': features[1],
                    'income_stability': features[2],
                    'debt_to_income_ratio': features[3]
                },
                'model_version': '1.0-prototype'
            }
            
            logger.info(f"Credit assessment completed - Risk Score: {risk_score}")
            return assessment_result
            
        except Exception as e:
            logger.error(f"Credit assessment failed: {str(e)}")
            # Return conservative assessment on error
            return {
                'risk_score': 0.3,
                'recommended_apr': 10.0,
                'max_loan_amount': 500,
                'assessment_factors': {},
                'model_version': '1.0-prototype',
                'error': str(e)
            }
    
    def _extract_features(self, financial_data):
        """
        Extract relevant features from financial data
        """
        transactions = financial_data.get('transactions', [])
        accounts = financial_data.get('accounts', [])
        
        # Feature 1: Average account balance
        avg_balance = 0
        if accounts:
            balances = [acc.get('balance', 0) for acc in accounts]
            avg_balance = sum(balances) / len(balances)
        
        # Feature 2: Transaction frequency (monthly)
        transaction_count = len(transactions)
        
        # Feature 3: Income stability (mock calculation)
        income_stability = 0.8  # Mock value
        
        # Feature 4: Debt-to-income ratio (mock calculation)
        debt_to_income = 0.3  # Mock value
        
        return [avg_balance, transaction_count, income_stability, debt_to_income]
    
    def _calculate_apr(self, risk_score):
        """
        Calculate recommended APR based on risk score
        """
        if risk_score >= 0.8:
            return 5.0  # Best rate for low-risk borrowers
        elif risk_score >= 0.6:
            return 7.0
        elif risk_score >= 0.4:
            return 9.0
        else:
            return 10.0  # Maximum APR for high-risk borrowers
    
    def _calculate_max_loan_amount(self, risk_score, financial_data):
        """
        Calculate maximum loan amount based on risk and financial data
        """
        base_amount = 500  # Minimum loan amount
        
        if risk_score >= 0.8:
            return min(5000, base_amount * 10)
        elif risk_score >= 0.6:
            return min(3000, base_amount * 6)
        elif risk_score >= 0.4:
            return min(2000, base_amount * 4)
        else:
            return base_amount
