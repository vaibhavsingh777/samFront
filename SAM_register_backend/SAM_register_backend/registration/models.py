from django.db import models

class Registration(models.Model):
    STATUS_CHOICES = [
        ("Joining IIT Bombay this year", "Joining IIT Bombay this year"),
        ("Joining some other IIT this year", "Joining some other IIT this year"),
        ("Already a student of IIT B", "Already a student of IIT B"),
    ]

    status = models.CharField(max_length=100, choices=STATUS_CHOICES)
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=10)
    email = models.EmailField()
    city = models.CharField(max_length=50)
    rank = models.CharField(max_length=20)
    category = models.CharField(max_length=20)
    categoryRank = models.CharField(max_length=20, blank=True, null=True)
    file = models.FileField(upload_to='uploads/')
    iitOther = models.CharField(max_length=100, blank=True, null=True)
    questions = models.TextField(blank=True, null=True)
    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

