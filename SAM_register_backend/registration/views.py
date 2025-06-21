from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import RegistrationSerializer
<<<<<<< HEAD
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Registration


@csrf_exempt
def register(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        city = request.POST.get('city')
        status = request.POST.get('status')
        rank = request.POST.get('rank')
        category = request.POST.get('category')
        category_rank = request.POST.get('categoryRank')
        iit_other = request.POST.get('iitOther')
        questions = request.POST.get('questions')
        file = request.FILES.get('file')  # Handles uploaded screenshot

        print("📥 Received registration data:", name, email, city, status)

        Registration.objects.create(
            name=name,
            email=email,
            phone=phone,
            city=city,
            status=status,
            rank=rank,
            category=category,
            categoryRank=category_rank,
            iitOther=iit_other,
            questions=questions,
            file=file
        )
        # (Save to DB if using model)

        return JsonResponse({'message': 'Saved to DB ✅'})
    
    # This triggers your 400 error if not POST
    return JsonResponse({'error': 'Only POST allowed'}, status=400)
=======
>>>>>>> e09826af727217774927827617d08886d899a0c4

class RegistrationAPI(APIView):
    def post(self, request):
        serializer = RegistrationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Form submitted successfully!"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

