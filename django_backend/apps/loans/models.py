from django.db import models
from django.contrib.auth import get_user_model
from django.core.validators import MinValueValidator, MaxValueValidator

User = get_user_model()

class Loan(models.Model):
    """
    Loan model for UnityLend prototype
    Stores loan applications and their status
    """
    LOAN_STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('approved', 'Approved'),
        ('rejected', 'Rejected'),
        ('disbursed', 'Disbursed'),
        ('repaid', 'Repaid'),
        ('defaulted', 'Defaulted'),
    ]
    
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='loans')
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    apr = models.DecimalField(
        max_digits=5, 
        decimal_places=2,
        validators=[MinValueValidator(0), MaxValueValidator(100)]
    )
    term_months = models.IntegerField(default=12)
    status = models.CharField(max_length=20, choices=LOAN_STATUS_CHOICES, default='pending')
    
    # AI Assessment data
    risk_score = models.DecimalField(
        max_digits=3, 
        decimal_places=2,
        validators=[MinValueValidator(0), MaxValueValidator(1)],
        null=True, 
        blank=True
    )
    ai_assessment = models.JSONField(default=dict, blank=True)
    
    # Financial data from Plaid
    plaid_data = models.JSONField(default=dict, blank=True)
    
    # DeFi transaction data
    arbitrum_tx_hash = models.CharField(max_length=66, blank=True, null=True)
    usdc_amount = models.DecimalField(max_digits=18, decimal_places=6, null=True, blank=True)
    smart_contract_address = models.CharField(max_length=42, blank=True, null=True)
    
    # Circle fiat conversion
    circle_payment_id = models.CharField(max_length=100, blank=True, null=True)
    fiat_conversion_data = models.JSONField(default=dict, blank=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return f"Loan #{self.id} - {self.user.email} - ${self.amount}"
    
    class Meta:
        ordering = ['-created_at']
