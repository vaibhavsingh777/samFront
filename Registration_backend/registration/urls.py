from django.urls import path
from . import views
from .views import RegistrationAPI

urlpatterns = [
    path('register-form/', views.register, name='register_form'),  # function-based view for rendering form
    path('register/', RegistrationAPI.as_view(), name='register_api'),  # class-based API view
]
