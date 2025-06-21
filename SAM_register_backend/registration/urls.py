from django.urls import path
<<<<<<< HEAD
from . import views

urlpatterns = [
    path('register/', views.register, name='register'),  # 👈 function that renders form
=======
from .views import RegistrationAPI

urlpatterns = [
    path('register/', RegistrationAPI.as_view(), name='register'),
>>>>>>> e09826af727217774927827617d08886d899a0c4
]
