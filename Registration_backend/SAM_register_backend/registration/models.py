from django.db import models

class Registration(models.Model):
    status = models.CharField(max_length=100)
    name = models.CharField(max_length=255)
    phone = models.CharField(max_length=15)
    email = models.EmailField()
    city = models.CharField(max_length=100)
    rank = models.CharField(max_length=20)
    category = models.CharField(max_length=50)
    categoryRank = models.CharField(max_length=50, blank=True, null=True)
    iitOther = models.CharField(max_length=100, blank=True, null=True)
    questions = models.TextField(blank=True, null=True)
    file = models.FileField(upload_to='uploads/')

    def __str__(self):
        return self.name
