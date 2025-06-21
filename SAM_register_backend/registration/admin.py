from django.contrib import admin
from .models import Registration

admin.site.register(Registration)

class RegistrationAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone', 'city', 'status', 'submitted_at')
