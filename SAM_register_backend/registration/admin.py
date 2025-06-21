from django.contrib import admin
<<<<<<< HEAD
from .models import Registration

admin.site.register(Registration)

class RegistrationAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone', 'city', 'status', 'submitted_at')
=======

# Register your models here.
>>>>>>> e09826af727217774927827617d08886d899a0c4
